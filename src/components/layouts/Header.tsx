import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-subtle surface-panel">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <BrandLogo />

        <Navbar />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="https://wa.me/+6285103632966/"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            <PhoneCall className="h-4 w-4" />
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}
