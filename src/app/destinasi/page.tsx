import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { mockDestinations } from "@/data/mock";
import { buildMetadata } from "@/components/Seo";

export const metadata: Metadata = buildMetadata({
  title: "Destinasi Wisata | PT New Toretto Trans",
  description:
    "Daftar destinasi wisata unggulan PT New Toretto Trans untuk perjalanan pantai, pulau, dan alam dari Surabaya.",
  url: "/destinasi",
  image: "/logo.png",
});

export default function DestinasiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
          Destinasi
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Destinasi terbaik untuk paket tour pantai, pulau, dan alam.
        </h1>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mockDestinations.map((destination) => (
            <article
              key={destination.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <MapPin className="h-5 w-5 text-amber-300" />
              <p className="mt-4 text-sm text-slate-400">
                {destination.province}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {destination.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {destination.description}
              </p>
              <p className="mt-4 text-sm text-amber-300">
                {destination.tourCount} paket tersedia
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
