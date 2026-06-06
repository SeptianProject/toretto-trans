import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Headset,
  ShieldCheck,
  Sparkles,
  Star,
  Ticket,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "PT New Toretto Trans | Tour Travel Surabaya & Sewa Bis Terpercaya",
  description:
    "Jelajahi destinasi impian Anda bersama PT New Toretto Trans, penyedia jasa Tour Travel Surabaya dan Sewa Bis Surabaya terbaik. Berpengalaman 5+ tahun melayani Paket Tour Pantai, Alam, hingga Corporate Gathering dengan layanan pemesanan mudah (Easy Bookings).",
  openGraph: {
    title: "PT New Toretto Trans | Tour Travel Surabaya & Sewa Bis Terpercaya",
    description:
      "Paket tour, transportasi, dan perjalanan premium dari Surabaya untuk liburan keluarga maupun corporate gathering.",
    url: "/",
    type: "website",
  },
};

interface TourCard {
  title: string;
  category: "Pulau" | "Pantai" | "Alam" | "Gathering";
  duration: string;
  price: string;
  rating: string;
  description: string;
}

interface FeatureCard {
  title: string;
  description: string;
  icon: typeof Headset;
}

interface TestimonialCard {
  name: string;
  role: string;
  quote: string;
  rating: string;
}

const stats = [
  { label: "Tahun Pengalaman", value: "5+" },
  { label: "Paket Tour", value: "20+" },
  { label: "Pelanggan Puas", value: "85+" },
  { label: "Armada Siap Jalan", value: "15+" },
] as const;

const filterTabs = ["Semua", "Pulau", "Pantai", "Alam", "Gathering"] as const;

const tourCards: TourCard[] = [
  {
    title: "Paket Tour Pantai Eksotis",
    category: "Pantai",
    duration: "1 Hari 1 Malam",
    price: "Mulai Rp 350K",
    rating: "4.9",
    description:
      "Cocok untuk Anda yang ingin menikmati suasana pantai, sunset, dan itinerary yang santai namun tetap berkesan.",
  },
  {
    title: "Petualangan Pulau Tropis",
    category: "Pulau",
    duration: "2 Hari 1 Malam",
    price: "Mulai Rp 680K",
    rating: "4.8",
    description:
      "Jelajahi pesona pulau-pulau favorit dengan pengalaman perjalanan yang nyaman, aman, dan terencana.",
  },
  {
    title: "Eksplorasi Alam Pegunungan",
    category: "Alam",
    duration: "2 Hari 2 Malam",
    price: "Mulai Rp 790K",
    rating: "5.0",
    description:
      "Nikmati udara segar, panorama pegunungan, dan aktivitas alam yang menenangkan bersama rombongan Anda.",
  },
  {
    title: "Corporate Gathering Premium",
    category: "Gathering",
    duration: "Custom",
    price: "Request Harga",
    rating: "4.9",
    description:
      "Dirancang untuk kebutuhan perusahaan dengan susunan acara yang fleksibel, rapi, dan berkesan.",
  },
  {
    title: "Trip Pulau Keluarga",
    category: "Pulau",
    duration: "3 Hari 2 Malam",
    price: "Mulai Rp 1.250K",
    rating: "4.8",
    description:
      "Pilihan ideal untuk liburan keluarga yang ingin menikmati perjalanan santai dengan layanan terkoordinasi.",
  },
  {
    title: "Tour Pantai & Snorkeling",
    category: "Pantai",
    duration: "2 Hari 1 Malam",
    price: "Mulai Rp 560K",
    rating: "4.7",
    description:
      "Paket seru untuk pecinta aktivitas laut dengan pengalaman eksplorasi pantai dan spot snorkeling terbaik.",
  },
] as const;

const valuePropositions: FeatureCard[] = [
  {
    title: "24/7 Support",
    description:
      "Rencana perjalanan yang disesuaikan secara personal dengan preferensi dan kebutuhan spesifik Anda.",
    icon: Headset,
  },
  {
    title: "Trusted Service",
    description:
      "Pelayanan profesional dan terpercaya untuk memastikan pengalaman perjalanan Anda berkesan.",
    icon: ShieldCheck,
  },
  {
    title: "Tailored Itineraries",
    description: "Itinerari yang simpel, fleksibel, dan tidak berbelit-belit.",
    icon: Compass,
  },
  {
    title: "Exclusive Offers",
    description:
      "Penanganan istimewa dan penawaran eksklusif demi kenikmatan liburan Anda.",
    icon: Sparkles,
  },
  {
    title: "Easy Bookings",
    description:
      "Kemudahan pemesanan yang cepat dalam menentukan jadwal perjalanan Anda.",
    icon: Ticket,
  },
] as const;

const testimonials: TestimonialCard[] = [
  {
    name: "Rina Wulandari",
    role: "Family Trip",
    quote:
      "Pelayanan sangat rapi dari awal booking sampai perjalanan selesai. Timnya responsif dan itinerary-nya enak diikuti.",
    rating: "5.0",
  },
  {
    name: "Budi Santoso",
    role: "Corporate Gathering",
    quote:
      "Acara kantor kami tertata dengan baik. Armada nyaman, jadwal jelas, dan koordinasi tim sangat profesional.",
    rating: "4.9",
  },
  {
    name: "Maya Putri",
    role: "Beach Tour",
    quote:
      "Paket pantainya cocok banget buat liburan santai. Easy booking dan komunikasinya juga sangat membantu.",
    rating: "5.0",
  },
] as const;

const filterTabStyles = {
  active:
    "border-amber-400 bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20",
  inactive:
    "border-subtle bg-white/5 text-heading hover:border-amber-300/40 hover:bg-white/10",
} as const;

export default function HomePage() {
  return (
    <main>
      <header className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <section className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              Tour Travel Surabaya & Sewa Bis Terpercaya
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl">
              Jelajahi Destinasi Populer Bersama PT New Toretto Trans
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Sebagai penyedia layanan Tour Travel Surabaya terpercaya, kami
              memiliki rangkaian paket tour yang paling banyak diminati oleh
              para pelancong. Temukan kemudahan merencanakan liburan impian Anda
              ke berbagai penjuru Nusantara bersama kami.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#tour-selection"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
                Lihat Semua Paket
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#testimonials"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-subtle px-5 py-3 text-sm font-semibold text-heading transition hover:border-amber-300/40 hover:bg-white/5">
                Konsultasi Perjalanan
              </Link>
            </div>
          </section>

          <aside className="surface-panel-strong rounded-4xl p-6 shadow-2xl shadow-black/10 lg:p-8">
            <div className="rounded-3xl bg-linear-to-br from-amber-400/15 via-white/5 to-transparent p-6">
              <p className="text-sm font-medium text-amber-500">
                Easy Bookings
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-heading">
                Perjalanan yang nyaman dimulai dari proses pemesanan yang mudah.
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Tim kami membantu Anda memilih destinasi, menyesuaikan kebutuhan
                rombongan, dan memastikan semua detail perjalanan tersusun
                dengan baik.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="surface-panel rounded-2xl p-4">
                  <p className="text-sm text-muted">Layanan Cepat</p>
                  <p className="mt-1 text-lg font-semibold text-heading">
                    Responsif & jelas
                  </p>
                </div>
                <div className="surface-panel rounded-2xl p-4">
                  <p className="text-sm text-muted">Rute Favorit</p>
                  <p className="mt-1 text-lg font-semibold text-heading">
                    Pantai, alam, pulau
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="surface-panel rounded-3xl p-6 text-center">
              <p className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="tour-selection"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-heading sm:text-4xl">
            Pilih Perjalanan Anda
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            Mulai dari Paket Tour Pantai yang menenangkan hingga petualangan
            alam yang menantang, temukan destinasi impian Anda bersama layanan
            kami.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filterTabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              aria-pressed={index === 0}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                index === 0 ? filterTabStyles.active : filterTabStyles.inactive,
              )}>
              {tab}
            </button>
          ))}
        </div>

        {/**
         * Placeholder for TanStack Query integration.
         * Replace this local array with a query result from a custom hook when API data is available.
         */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tourCards.slice(0, 6).map((tour) => (
            <article
              key={`${tour.title}-${tour.category}`}
              className="surface-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-500">
                  {tour.category}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-muted">
                  <Star className="h-4 w-4 fill-current text-amber-500" />
                  {tour.rating}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-heading">
                {tour.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {tour.description}
              </p>
              <dl className="mt-6 space-y-3 text-sm text-muted">
                <div className="flex items-center justify-between gap-4">
                  <dt>Durasi</dt>
                  <dd className="font-medium text-heading">{tour.duration}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt>Harga</dt>
                  <dd className="font-medium text-heading">{tour.price}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-heading sm:text-4xl">
            Mitra Perjalanan Anda
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            Berpengalaman dalam mengelola petualangan kelompok maupun individu
            selama lebih dari 5 tahun. Temukan bagaimana kami mendefinisikan
            ulang standar kenyamanan perjalanan Anda.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {valuePropositions.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="surface-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-heading">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="testimonials"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-heading sm:text-4xl">
            Ulasan Dari Klien
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            Apa kata para pelanggan yang telah mempercayakan perjalanan,
            liburan, dan kebutuhan transportasi mereka kepada PT New Toretto Trans.
          </p>
        </div>

        {/**
         * Placeholder for TanStack Query integration.
         * This section can be replaced with a hook-driven testimonial list without changing the page structure.
         */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="surface-panel rounded-3xl p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-heading">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  {testimonial.rating}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
