"use client";
import Link from "next/link";

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tour", label: "Tour" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/sewa-mobil", label: "Sewa Mobil" },
  { href: "/sewa-bus", label: "Sewa Bis" },
  { href: "/tentang", label: "Tentang" },
];

export function Navbar() {
  return (
    <nav aria-label="Navigasi utama" className="hidden gap-6 md:flex">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
