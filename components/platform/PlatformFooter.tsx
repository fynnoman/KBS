import Link from "next/link";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/config";

export default function PlatformFooter() {
  return (
    <footer className="mt-24 border-t border-ink-900/8 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            KBS · Automatisierungs-Plattform
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-600">
            KBS entwickelt KI-Systeme, Schnittstellen und Automatisierungen für
            konkrete Unternehmensprozesse. Wir ersetzen keine Software. Wir
            verbinden und erweitern die bestehende.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-[13px] text-ink-700">
            <a
              className="transition-colors hover:text-ink-900"
              href={`tel:${PHONE_TEL}`}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              className="transition-colors hover:text-ink-900"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            Einstiege
          </div>
          <ul className="mt-4 space-y-2 text-[13px] text-ink-700">
            <li>
              <Link href="/probleme" className="transition-colors hover:text-ink-900">
                Häufige Probleme
              </Link>
            </li>
            <li>
              <Link href="/automatisieren" className="transition-colors hover:text-ink-900">
                Automatisierungs-Datenbank
              </Link>
            </li>
            <li>
              <Link href="/schnittstelle" className="transition-colors hover:text-ink-900">
                Schnittstellen
              </Link>
            </li>
            <li>
              <Link href="/software" className="transition-colors hover:text-ink-900">
                Software-Profile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            KBS
          </div>
          <ul className="mt-4 space-y-2 text-[13px] text-ink-700">
            <li>
              <Link href="/" className="transition-colors hover:text-ink-900">
                Startseite ki-beratung-saar.com
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="transition-colors hover:text-ink-900">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="transition-colors hover:text-ink-900">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="transition-colors hover:text-ink-900">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-900/8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-ink-500 sm:flex-row">
          <span>© KBS KI-Beratung Saar</span>
          <span>Saarland · Deutschlandweit</span>
        </div>
      </div>
    </footer>
  );
}
