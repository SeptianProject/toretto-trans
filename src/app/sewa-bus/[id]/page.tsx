import type { Metadata } from "next";
import Image from "next/image";
import { mockVehicles } from "@/data/mock";
import { buildMetadata } from "@/components/Seo";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return mockVehicles
    .filter((v) => v.type === "bis")
    .map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const vehicle = mockVehicles.find((v) => v.id === params.id);
  if (!vehicle) return {} as Metadata;

  return buildMetadata({
    title: `${vehicle.name} | PT New Toretto Trans`,
    description: `Sewa ${vehicle.name} - kapasitas ${vehicle.capacity} penumpang.`,
    url: `/sewa-bus/${vehicle.id}`,
    image: vehicle.image,
  });
}

export default function BusDetail({ params }: Props) {
  const vehicle = mockVehicles.find((v) => v.id === params.id);
  if (!vehicle) return <main className="p-8">Kendaraan tidak ditemukan</main>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    description: `Sewa ${vehicle.name} - kapasitas ${vehicle.capacity} penumpang.`,
    image: vehicle.image,
    offers: {
      "@type": "Offer",
      price: vehicle.pricePerDay,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: `/sewa-bus/${vehicle.id}`,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://toretto.biz.id/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sewa Bus",
        item: "https://toretto.biz.id/sewa-bus",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: vehicle.name,
        item: `https://toretto.biz.id/sewa-bus/${vehicle.id}`,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="text-sm text-amber-300">
        <Link href="/">Home</Link> / <Link href="/sewa-bus">Sewa Bus</Link> /{" "}
        <span className="text-slate-400">{vehicle.name}</span>
      </nav>

      <h1 className="mt-3 text-3xl font-semibold text-white">{vehicle.name}</h1>
      <p className="mt-2 text-sm text-slate-300">
        Kapasitas: {vehicle.capacity} • Tipe: {vehicle.type}
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl bg-white/5 h-64 flex items-center justify-center">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          width={1200}
          height={675}
          unoptimized
          className="h-full w-full object-contain"
        />
      </div>

      <p className="mt-6 text-base text-slate-300">
        Mulai{" "}
        {vehicle.pricePerDay.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}{" "}
        / hari
      </p>

      <section className="mt-6">
        <h3 className="text-xl font-semibold text-white">Fitur</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {vehicle.features.map((f, i) => (
            <span
              key={i}
              className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">
              {f}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <a
          href={`mailto:info@toretto.biz.id?subject=Booking%20${encodeURIComponent(vehicle.name)}`}
          className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950">
          Pesan Sekarang
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </main>
  );
}
