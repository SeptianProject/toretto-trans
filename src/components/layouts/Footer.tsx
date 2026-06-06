import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const FOOTER_LINKS = [
  { href: "/tour", label: "Paket Tour" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/sewa-mobil", label: "Sewa Mobil" },
  { href: "/sewa-bus", label: "Sewa Bis" },
  { href: "/tentang", label: "Tentang" },
];

export function Footer() {
  return (
    <footer className="border-t border-subtle surface-panel">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <BrandLogo size="sm" />
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
            Partner perjalanan untuk Tour Travel Surabaya, Sewa Bis Surabaya,
            paket wisata keluarga, dan perjalanan korporat yang nyaman.
          </p>
          <p className="mt-4 text-sm text-muted">Surabaya, Jawa Timur</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Navigasi
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-amber-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Jam Operasional
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Senin - Sabtu</li>
            <li>10.00 - 17.00 WIB</li>
            <li>Layanan darurat 24/7 saat perjalanan</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Kontak
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a
                href="mailto:pt.newtorettotrans@gmail.com"
                className="transition hover:text-amber-600">
                pt.newtorettotrans@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6285103632966"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-600">
                0851-0363-2966 (WhatsApp)
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/pt.newtorettotrans"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-600">
                @pt.newtorettotrans
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
