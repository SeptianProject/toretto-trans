import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/tour", label: "Paket Tour" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/sewa-mobil", label: "Sewa Mobil" },
  { href: "/sewa-bus", label: "Sewa Bis" },
  { href: "/tentang", label: "Tentang" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Toretto Trans</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Partner perjalanan untuk Tour Travel Surabaya, Sewa Bis Surabaya,
            paket wisata keluarga, dan perjalanan korporat yang nyaman.
          </p>
          <p className="mt-4 text-sm text-slate-300">Surabaya, Jawa Timur</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Navigasi
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Jam Operasional
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Senin - Sabtu</li>
            <li>10.00 - 17.00 WIB</li>
            <li>Layanan darurat 24/7 saat perjalanan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
