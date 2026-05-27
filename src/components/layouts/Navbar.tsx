import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tour", label: "Tour" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/sewa-mobil", label: "Sewa Mobil" },
  { href: "/sewa-bus", label: "Sewa Bis" },
  { href: "/tentang", label: "Tentang" },
];

export function Navbar() {
  return (
    <nav aria-label="Navigasi utama" className="hidden gap-6 lg:flex">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-slate-300 transition hover:text-white">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
