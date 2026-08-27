"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Calendar } from "lucide-react";
import Logo from "./Logo";
import { CALENDLY_URL, PHONE_TEL } from "@/lib/config";

const HOME_NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/standorte", label: "Standorte" },
  { href: "/insights", label: "Insights" },
  { href: "/business", label: "Business", highlight: true },
  { href: "/#kontakt", label: "Kontakt" }
];

const BUSINESS_NAV = [
  { href: "/business#use-cases", label: "Use-Cases" },
  { href: "/business#branchen", label: "Branchen" },
  { href: "/business#lokale-ki", label: "Lokale KI" },
  { href: "/business#schulungen", label: "Schulungen" },
  { href: "/business#referenzen", label: "Referenzen" },
  { href: "/business#faq", label: "FAQ" },
  { href: "/", label: "Zur KMU-Seite", highlight: true }
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onBusiness = pathname?.startsWith("/business");
  const NAV = onBusiness ? BUSINESS_NAV : HOME_NAV;

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
            ? "border-white/10 bg-ink-900/85 shadow-lift md:bg-ink-900/80 md:backdrop-blur-2xl md:backdrop-saturate-150"
            : "border-white/5 bg-ink-900/75 md:bg-ink-900/65 md:backdrop-blur-xl"
        }`}
      >
        {/* Left: nav items */}
        <ul className="hidden items-center gap-1 justify-self-start md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                  item.highlight
                    ? "text-accent-400 hover:bg-white/10 hover:text-accent-300"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <span className="md:hidden" />

        {/* Center: logo */}
        <div className="justify-self-center">
          <Logo height={44} />
        </div>

        {/* Right: contextual CTA */}
        <div className="flex items-center justify-end">
          {onBusiness ? (
            <>
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
            </>
          ) : (
            <>
              <Link
                href={`tel:${PHONE_TEL}`}
                className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 sm:inline-flex"
              >
                <Phone size={14} strokeWidth={2.4} />
                Jetzt anrufen
              </Link>
              <Link
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-white p-2.5 text-ink-900 sm:hidden"
                aria-label="Jetzt anrufen"
              >
                <Phone size={16} strokeWidth={2.4} />
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
