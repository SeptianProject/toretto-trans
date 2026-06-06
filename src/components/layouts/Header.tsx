"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { NAV_LINKS, Navbar } from "./Navbar";

export function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!isMenuOpen) {
        return;
      }

      const target = event.target;

      if (target instanceof Node && !headerRef.current?.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 border-b transition-all duration-200 ${
        isScrolled
          ? "border-stone-200 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-stone-100 bg-white/85 backdrop-blur-sm"
      } relative`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <BrandLogo />

        <Navbar />

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://wa.me/+6285103632966/"
            className="hidden items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 md:inline-flex">
            <PhoneCall className="h-4 w-4" />
            Pesan Sekarang
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-900 transition hover:bg-stone-100 md:hidden">
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 w-full border-t border-stone-200 bg-white shadow-lg md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              <nav aria-label="Navigasi mobile" className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-stone-100 hover:text-slate-950">
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="https://wa.me/+6285103632966/"
                onClick={closeMenu}
                className="mt-3 gap-2 inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
                <PhoneCall className="h-4 w-4" />
                Pesan Sekarang
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
