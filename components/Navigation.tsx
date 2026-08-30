"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-ink-900/85 shadow-lift md:bg-ink-900/80 md:backdrop-blur-2xl md:backdrop-saturate-150"
            : "border-white/5 bg-ink-900/75 md:bg-ink-900/65 md:backdrop-blur-xl"
        }`}
      >
        <Logo height={44} />

        <div className="flex items-center gap-2 md:gap-4">
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
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
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 sm:inline-flex"
          >
            <Calendar size={14} strokeWidth={2.4} />
            Termin buchen
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white p-2.5 text-ink-900 sm:hidden"
            aria-label="Termin buchen"
          >
            <Calendar size={16} strokeWidth={2.4} />
          </a>
        </div>
      </nav>
    </div>
  );
}
