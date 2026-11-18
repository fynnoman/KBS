"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, Menu, X, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { CALENDLY_URL } from "@/lib/config";

const NAV = [
  { href: "/softwareloesungen", label: "Softwarelösungen" },
  { href: "/kurse", label: "Kurse" },
  { href: "/standorte", label: "Standorte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" }
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-11">
        <nav
          className={`pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-lg border px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "border-white/15 bg-ink-900/90 shadow-lift md:bg-ink-900/85 md:backdrop-blur-2xl md:backdrop-saturate-150"
              : "border-white/10 bg-ink-900/80 md:bg-ink-900/70 md:backdrop-blur-xl"
          }`}
        >
          <Logo height={44} />

          <div className="flex items-center gap-2 md:gap-4">
            <ul className="hidden items-center gap-1 md:flex">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3.5 py-2 text-[13.5px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-white px-4 py-2.5 text-[13px] font-medium text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 md:inline-flex"
            >
              <Calendar size={14} strokeWidth={2.4} />
              Termin buchen
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
              aria-label="Menü öffnen"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={20} strokeWidth={2.2} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Hauptnavigation"
        className={`fixed inset-0 z-[70] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-[380px] flex-col bg-ink-900 shadow-lift transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Logo height={36} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Menü schließen"
            >
              <X size={20} strokeWidth={2.2} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <p className="mb-3 text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">
              Navigation
            </p>
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[52px] items-center rounded-md px-4 text-[16px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mb-3 mt-8 text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">
              Direktkontakt
            </p>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="tel:+4915168488999"
                  className="flex min-h-[52px] items-center gap-3 rounded-md px-4 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Phone size={16} strokeWidth={2.2} />
                  0151 · 68488999
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ki-beratung-saar.com"
                  className="flex min-h-[52px] items-center gap-3 rounded-md px-4 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Mail size={16} strokeWidth={2.2} />
                  info@ki-beratung-saar.com
                </a>
              </li>
            </ul>
          </nav>

          <div className="border-t border-white/10 p-5">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md bg-white px-4 text-[15px] font-medium text-ink-900 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Calendar size={16} strokeWidth={2.4} />
              Termin buchen
            </a>
            <p className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] text-white/40">
              KBS · KI-Beratung Saar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
