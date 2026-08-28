import Link from "next/link";
import Logo from "./Logo";
import { CITIES } from "@/lib/data/cities";
import { SERVICES } from "@/lib/data/services";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-900/8 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-12">
          <div>
            <div className="inline-flex rounded-2xl bg-ink-900 px-4 py-3">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink-500">
              KBS – KI-Beratung Saar. Der lokale Ansprechpartner für praktische
              KI-Hilfe im Saarland.
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-ink-400">
              Saarbrücken · Saarlouis · Neunkirchen · Homburg · Merzig · St. Wendel · Völklingen · Dillingen
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
              Leistungen
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-ink-700">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="hover:text-ink-900"
                  >
                    {s.name.replace("KBS ", "")}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/business"
                  className="font-medium text-accent-700 hover:text-accent-800"
                >
                  KBS Business →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
              Standorte
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-ink-700">
              {CITIES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/standorte/${c.slug}`}
                    className="hover:text-ink-900"
                  >
                    KI-Beratung {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/standorte"
                  className="text-ink-400 hover:text-ink-700"
                >
                  Alle Standorte →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
              Ressourcen
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-ink-700">
              <li>
                <a href="tel:+4915168488999" className="hover:text-ink-900">
                  0151 · 68488999
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ki-beratung-saar.com"
                  className="hover:text-ink-900"
                >
                  info@ki-beratung-saar.com
                </a>
              </li>
              <li className="pt-2 text-[13px] text-ink-400">
                Mo – Fr · 09 – 18 Uhr
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rule" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-[12.5px] text-ink-400 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} KBS – KI-Beratung Saar. Alle Rechte
            vorbehalten.
          </p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link href="/impressum" className="hover:text-ink-700">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-ink-700">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
