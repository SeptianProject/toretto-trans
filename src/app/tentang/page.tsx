import type { Metadata } from "next";
import Link from "next/link";
import { mockStats } from "@/data/mock";
import { buildMetadata } from "@/components/Seo";

export const metadata: Metadata = buildMetadata({
  title: "Tentang PT New Toretto Trans",
  description:
    "Profil PT New Toretto Trans sebagai penyedia Tour Travel Surabaya dan Sewa Bis Surabaya dengan fokus premium dan scalable.",
  url: "/tentang",
  image: "/logo.png",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-4xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
          Tentang Kami
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Membangun pengalaman perjalanan yang rapi, nyaman, dan mudah dipesan.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
          PT New Toretto Trans fokus pada layanan perjalanan yang premium untuk
          keluarga, komunitas, dan perusahaan. Pendekatan kami sederhana:
          transparan, responsif, dan konsisten di setiap perjalanan.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <p className="text-sm text-slate-400">Pengalaman</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {mockStats.yearsOfExperience}+ tahun
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <p className="text-sm text-slate-400">Pelanggan</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {mockStats.totalCustomers}+
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <p className="text-sm text-slate-400">Fleet</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {mockStats.totalFleet} kendaraan
            </p>
          </div>
        </div>
        <Link
          href="/tour"
          className="mt-8 inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
          Lihat Paket Tour
        </Link>
      </section>
    </main>
  );
}
