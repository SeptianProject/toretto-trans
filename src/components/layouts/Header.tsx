import Link from "next/link";
import { BusFront, PhoneCall } from "lucide-react";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/20">
            <BusFront className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-semibold tracking-wide text-white">
              Toretto Trans
            </span>
            <span className="block text-xs text-slate-400">
              Tour Travel Surabaya
            </span>
          </span>
        </Link>

        <Navbar />

        <Link
          href="/tour"
          className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
          <PhoneCall className="h-4 w-4" />
          Pesan Sekarang
        </Link>
      </div>
    </header>
  );
}
