import type { Metadata } from "next";
import { Star } from "lucide-react";
import { mockTours } from "@/data/mock";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Paket Tour",
  description:
    "Daftar paket tour Toretto Trans dengan kategori Pulau, Pantai, Alam, dan Gathering.",
  openGraph: {
    title: "Paket Tour | Toretto Trans",
    description:
      "Pilih paket wisata yang sesuai dengan kebutuhan perjalanan Anda.",
    url: "/tour",
    type: "website",
  },
};

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
            <article
              key={tour.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6">
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
              <dl className="mt-5 space-y-2 text-sm text-slate-300">
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
          ))}
        </div>
      </section>
    </main>
  );
}
