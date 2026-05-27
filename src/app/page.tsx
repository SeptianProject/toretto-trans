import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import {
  mockDestinations,
  mockStats,
  mockTestimonials,
  mockTours,
} from "@/data/mock";
import { formatCurrency, formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tour Travel Surabaya",
  description:
    "Toretto Trans menyediakan Tour Travel Surabaya, Sewa Bis Surabaya, dan Paket Tour Pantai dengan pengalaman premium.",
  openGraph: {
    title: "Tour Travel Surabaya | Toretto Trans",
    description:
      "Paket wisata, destinasi alam, pantai, dan layanan transportasi premium dari Surabaya.",
    url: "/",
    type: "website",
  },
};

const categories = ["Semua", "Pulau", "Pantai", "Alam", "Gathering"] as const;

const bookingSteps = [
  "Select Tour",
  "Set Date",
  "Set Participants",
  "Confirm",
  "Submit",
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
            <BadgeCheck className="h-4 w-4" />
            Tour Travel Surabaya, premium dan scalable
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Paket wisata, transportasi, dan perjalanan bisnis dalam satu brand.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Toretto Trans membantu kebutuhan liburan keluarga, outing kantor,
            dan perjalanan rombongan dengan layanan yang terstruktur, cepat, dan
            mudah dipesan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tour"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              Lihat Paket Tour
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/sewa-bus"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">
              Sewa Bis Surabaya
            </Link>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm text-slate-400">Pengalaman</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {mockStats.yearsOfExperience}+ tahun
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm text-slate-400">Pelanggan</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {mockStats.totalCustomers}+
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm text-slate-400">Paket Tour</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {mockStats.totalTourPackages}+
              </dd>
            </div>
          </dl>
        </div>

        <aside className="grid gap-4 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
          <div className="rounded-3xl bg-slate-900/70 p-6 ring-1 ring-white/10">
            <p className="text-sm font-medium text-amber-300">Featured Route</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Paket Tour Pantai premium
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Rute favorit untuk keluarga, komunitas, dan trip santai dengan
              itinerary yang jelas.
            </p>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-300" />
                Jawa Timur
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-300" />
                4.9/5
              </span>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <Users className="h-5 w-5 text-amber-300" />
              <p className="mt-4 text-sm text-slate-400">Booking flow</p>
              <p className="mt-1 text-lg font-semibold text-white">
                Simple, cepat, terukur
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <CalendarDays className="h-5 w-5 text-amber-300" />
              <p className="mt-4 text-sm text-slate-400">Support</p>
              <p className="mt-1 text-lg font-semibold text-white">
                Konsultasi jadwal trip
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Kategori Tour
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Pilih pengalaman sesuai kebutuhan
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Semua kategori disusun untuk memudahkan eksplorasi paket wisata yang
            relevan, mulai dari Pulau, Pantai, Alam, hingga Gathering.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              {category}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mockTours.slice(0, 4).map((tour) => (
            <article
              key={tour.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-amber-300">{tour.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {tour.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {tour.description}
              </p>
              <dl className="mt-5 space-y-2 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-4">
                  <dt>Durasi</dt>
                  <dd>{tour.duration}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt>Harga mulai</dt>
                  <dd>{formatCurrency(tour.price)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <article className="rounded-4xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Booking Flow
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Alur booking yang jelas dari awal sampai submit
          </h2>
          <ol className="mt-8 space-y-4">
            {bookingSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-sm font-semibold text-amber-300">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-medium text-white">{step}</p>
                  <p className="text-sm text-slate-400">
                    Tahapan transaksi dibuat singkat agar user cepat sampai ke
                    konfirmasi.
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <div className="grid gap-5">
          <article className="rounded-4xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Destinasi Unggulan
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {mockDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                  <p className="text-sm text-slate-400">
                    {destination.province}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {destination.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {destination.description}
                  </p>
                  <p className="mt-4 text-sm text-amber-300">
                    {destination.tourCount} paket tersedia
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-4xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Testimoni
            </p>
            <div className="mt-5 space-y-4">
              {mockTestimonials.slice(0, 3).map((testimonial) => (
                <blockquote
                  key={testimonial.id}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                  <p className="text-sm leading-6 text-slate-300">
                    {testimonial.comment}
                  </p>
                  <footer className="mt-4 flex items-center justify-between text-sm text-slate-400">
                    <span>{testimonial.name}</span>
                    <span>{formatDate(testimonial.date)}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
