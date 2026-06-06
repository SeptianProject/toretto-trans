import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { mockVehicles } from "@/data/mock";
import { formatCurrency } from "@/lib/utils";
import { buildMetadata } from "@/components/Seo";

const busVehicles = mockVehicles.filter((vehicle) => vehicle.type === "bis");

export const metadata: Metadata = buildMetadata({
  title: "Sewa Bis Surabaya | PT New Toretto Trans",
  description:
    "Sewa Bis Surabaya dari PT New Toretto Trans untuk rombongan wisata, sekolah, dan perjalanan perusahaan.",
  url: "/sewa-bus",
  image: "/logo.png",
});

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
            <Link
              key={vehicle.id}
              href={`/sewa-bus/${vehicle.id}`}
              className="block">
              <article className="h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 hover:shadow-lg transition">
                <div className="mb-5 w-full overflow-hidden rounded-2xl bg-white/5 h-48 md:h-56 lg:h-64 flex items-center justify-center">
                  <Image
                    src={vehicle.image}
                    alt={`Gambar ${vehicle.name}`}
                    width={800}
                    height={533}
                    unoptimized={true}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex h-fit flex-col">
                  <p className="text-sm font-medium text-amber-300 capitalize">
                    {vehicle.type}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {vehicle.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Kapasitas hingga {vehicle.capacity} penumpang.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <p className="mt-auto pt-5 text-sm font-medium text-slate-200">
                    Mulai {formatCurrency(vehicle.pricePerDay)} / hari
                  </p>
                </div>
              </article>
            </Link>
          ))}
          {busVehicles.length % 2 !== 0 && (
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col justify-center items-center text-center">
              <h2 className="mt-3 text-xl font-semibold text-white">
                Coming Soon
              </h2>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
