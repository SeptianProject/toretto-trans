import Image from "next/image";
import type { Metadata } from "next";
import { mockVehicles } from "@/data/mock";
import { formatCurrency } from "@/lib/utils";

const carVehicles = mockVehicles.filter((vehicle) => vehicle.type === "mobil");

export const metadata: Metadata = {
  title: "Sewa Mobil",
  description:
    "Layanan sewa mobil Surabaya dari PT New Toretto Trans untuk perjalanan keluarga, bisnis, dan wisata.",
  openGraph: {
    title: "Sewa Mobil | PT New Toretto Trans",
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
          
          {
            carVehicles.map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-5 w-full h-full overflow-hidden rounded-2xl bg-white/5 px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-20 lg:py-10 flex flex-col justify-center">
                    <Image
                      src={vehicle.image} 
                      alt={`Gambar ${vehicle.name}`}
                      width={800} 
                      height={533} 
                      unoptimized={true}
                      className="h-auto w-full object-contain" 
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
                
                    {/* Menampilkan Features (Opsional) */}
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <span 
                          key={index} 
                          className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                
                    {/* Harga dipaksa ke paling bawah jika tinggi card berbeda-beda */}
                    <p className="mt-auto pt-5 text-sm font-medium text-slate-200">
                      Mulai {formatCurrency(vehicle.pricePerDay)} / hari
                    </p>
                  </div>
                </article>
            ))}
          {carVehicles.length % 2 !== 0 && (
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
