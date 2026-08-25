"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#fuer-wen", label: "Für wen" },
  { href: "#prozess", label: "So arbeiten wir" },
  { href: "#kontakt", label: "Kontakt" }
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
        className={`pointer-events-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center rounded-full border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-ink-900/85 shadow-lift backdrop-blur-2xl backdrop-saturate-150"
            : "border-white/5 bg-ink-900/70 backdrop-blur-xl"
        }`}
      >
        {/* Left: nav items */}
        <ul className="hidden items-center gap-1 justify-self-start md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Left mobile spacer */}
        <span className="md:hidden" />

        {/* Center: logo */}
        <div className="justify-self-center">
          <Logo height={44} />
        </div>

        {/* Right: CTA */}
        <div className="flex items-center justify-end">
          <Link
            href="tel:+4968100000000"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
          >
            <Phone size={14} strokeWidth={2.4} />
            Jetzt anrufen
          </Link>
          <Link
            href="tel:+4968100000000"
            className="inline-flex items-center gap-2 rounded-full bg-white p-2.5 text-ink-900 sm:hidden"
            aria-label="Jetzt anrufen"
          >
            <Phone size={16} strokeWidth={2.4} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
