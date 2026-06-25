import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { mockTours } from "@/data/mock";
import { formatCurrency } from "@/lib/utils";
import { buildMetadata } from "@/components/Seo";

export const metadata: Metadata = buildMetadata({
  title: "Paket Tour | PT New Toretto Trans",
  description:
    "Daftar paket tour PT New Toretto Trans dengan kategori Pulau, Pantai, Alam, dan Gathering.",
  url: "/tour",
  image: "/logo.png",
});

export default function TourPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
          Paket Tour
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Pilihan paket perjalanan yang siap dikonfigurasi.
        </h1>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mockTours.map((tour) => (
            <Link key={tour.id} href={`/tour/${tour.slug}`} className="block">
              <article className="h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 hover:shadow-lg transition">
                <div className="relative w-full h-[200px] overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-amber-300">{tour.category}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-slate-300">
                    <Star className="h-4 w-4 text-amber-300" />
                    {tour.rating}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white">
                  {tour.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {tour.description}
                </p>
                <dl className="mt-auto space-y-2 text-sm text-slate-300">
                  <div className="flex items-center justify-between gap-4">
                    <dt>Durasi</dt>
                    <dd>{tour.duration}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt>Harga</dt>
                    <dd>{formatCurrency(tour.price)}</dd>
                  </div>
                </dl>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
