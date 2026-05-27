import type { Metadata } from "next";
import { mockVehicles } from "@/data/mock";
import { formatCurrency } from "@/lib/utils";

const carVehicles = mockVehicles.filter((vehicle) => vehicle.type === "mobil");

export const metadata: Metadata = {
  title: "Sewa Mobil",
  description:
    "Layanan sewa mobil Surabaya dari Toretto Trans untuk perjalanan keluarga, bisnis, dan wisata.",
  openGraph: {
    title: "Sewa Mobil | Toretto Trans",
    description:
      "Pilihan armada mobil yang nyaman untuk perjalanan harian dan trip luar kota.",
    url: "/sewa-mobil",
    type: "website",
  },
};

export default function SewaMobilPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
          Sewa Mobil
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Armada mobil untuk perjalanan yang lebih fleksibel.
        </h1>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {carVehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-amber-300">Mobil</p>
              <h2 className="mt-3 text-xl font-semibold text-white">
                {vehicle.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Kapasitas hingga {vehicle.capacity} penumpang.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-200">
                Mulai {formatCurrency(vehicle.pricePerDay)} / hari
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
