import type { Metadata } from "next";
import { mockVehicles } from "@/data/mock";
import { formatCurrency } from "@/lib/utils";

const busVehicles = mockVehicles.filter((vehicle) => vehicle.type === "bis");

export const metadata: Metadata = {
  title: "Sewa Bis Surabaya",
  description:
    "Sewa Bis Surabaya dari Toretto Trans untuk rombongan wisata, sekolah, dan perjalanan perusahaan.",
  openGraph: {
    title: "Sewa Bis Surabaya | Toretto Trans",
    description:
      "Armada bus nyaman untuk perjalanan rombongan dan event perusahaan.",
    url: "/sewa-bus",
    type: "website",
  },
};

export default function SewaBusPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
          Sewa Bis Surabaya
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Bus premium untuk perjalanan rombongan yang nyaman dan aman.
        </h1>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {busVehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-amber-300">Bis</p>
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
