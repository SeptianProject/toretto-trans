import type { Metadata } from "next";
import Image from "next/image";
import { mockTours, mockTestimonials } from "@/data/mock";
import { buildMetadata } from "@/components/Seo";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return mockTours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = mockTours.find((t) => t.slug === params.slug);
  if (!tour) return {} as Metadata;

  return buildMetadata({
    title: `${tour.title} | PT New Toretto Trans`,
    description: tour.description,
    url: `/tour/${tour.slug}`,
    image: tour.image,
  });
}

export default function TourDetail({ params }: Props) {
  const tour = mockTours.find((t) => t.slug === params.slug);
  if (!tour) return <main className="p-8">Tour tidak ditemukan</main>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tour.title,
    description: tour.description,
    image: tour.image,
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: `/tour/${tour.slug}`,
    },
  };

  // Breadcrumb JSON-LD
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Paket Tour", item: "/tour" },
      {
        "@type": "ListItem",
        position: 3,
        name: tour.title,
        item: `/tour/${tour.slug}`,
      },
    ],
  };

  const faqs = [
    {
      q: "Apa yang termasuk dalam paket?",
      a: "Transport, penginapan (jika diperlukan), guide, dan makan sesuai itinerary.",
    },
    {
      q: "Berapa minimal peserta?",
      a: `Minimal ${tour.minParticipants} peserta.`,
    },
    {
      q: "Bagaimana cara memesan?",
      a: "Klik tombol Pesan Sekarang untuk menghubungi kami via email atau telepon.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const relatedTestimonials = mockTestimonials.filter(
    (t) => t.tourName === tour.title,
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">{tour.title}</h1>
      <p className="mt-2 text-sm text-slate-300">
        {tour.category} • {tour.duration}
      </p>
      <div className="mt-6">
        <Image
          src={tour.image}
          alt={tour.title}
          width={1200}
          height={675}
          unoptimized
        />
      </div>
      <p className="mt-6 text-base text-slate-300">{tour.description}</p>

      <section className="mt-8">
        <h3 className="text-xl font-semibold text-white">Highlights</h3>
        <ul className="mt-3 list-inside list-disc text-slate-300">
          {tour.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-semibold text-white">Info Paket & Harga</h3>
        <p className="mt-2 text-slate-300">Durasi: {tour.duration}</p>
        <p className="mt-2 text-slate-300">
          Harga mulai:{" "}
          {tour.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </section>

      <div className="mt-8">
        <a
          href={`mailto:info@toretto.biz.id?subject=Booking%20${encodeURIComponent(tour.title)}`}
          className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950">
          Pesan Sekarang
        </a>
      </div>

      {relatedTestimonials.length > 0 && (
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-white">Ulasan</h3>
          <div className="mt-4 grid gap-3">
            {relatedTestimonials.map((r) => (
              <blockquote
                key={r.id}
                className="rounded-2xl bg-white/3 p-4 text-slate-300">
                <p className="font-medium">{r.comment}</p>
                <footer className="mt-2 text-sm">
                  — {r.name}, {r.date}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      <section className="mt-8">
        <h3 className="text-xl font-semibold text-white">Pertanyaan Umum</h3>
        <div className="mt-3 space-y-3 text-slate-300">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-lg bg-white/3 p-3">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
