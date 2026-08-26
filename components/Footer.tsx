import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-900/8 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink-500">
              KBS – KI-Beratung Saar. Der lokale Ansprechpartner für praktische
              KI-Hilfe im Saarland.
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-ink-400">
              Saarbrücken · Saarlouis · Neunkirchen · Homburg · Merzig · St. Wendel
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
              Leistungen
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-ink-700">
              <li><Link href="/#leistungen" className="hover:text-ink-900">Anwendungsfälle</Link></li>
              <li><Link href="/#fuer-wen" className="hover:text-ink-900">Privatpersonen</Link></li>
              <li><Link href="/#fuer-wen" className="hover:text-ink-900">Selbstständige</Link></li>
              <li><Link href="/#fuer-wen" className="hover:text-ink-900">Kleine Unternehmen</Link></li>
              <li><Link href="/business" className="font-medium text-accent-700 hover:text-accent-800">KBS Business →</Link></li>
              <li><Link href="/#prozess" className="hover:text-ink-900">So arbeiten wir</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
              Rechtliches
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-ink-700">
              <li><Link href="/impressum" className="hover:text-ink-900">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-ink-900">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
              Kontakt
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-ink-700">
              <li><a href="tel:+4968100000000" className="hover:text-ink-900">0681 · 000 000 00</a></li>
              <li><a href="mailto:hallo@ki-beratung-saar.com" className="hover:text-ink-900">hallo@ki-beratung-saar.com</a></li>
              <li className="pt-4 text-[13px] text-ink-400">Mo – Fr · 09 – 18 Uhr</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rule" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-[12.5px] text-ink-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} KBS – KI-Beratung Saar. Alle Rechte vorbehalten.</p>
          <ul className="flex flex-wrap gap-6">
            <li><Link href="/impressum" className="hover:text-ink-700">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-ink-700">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
