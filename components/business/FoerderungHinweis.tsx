import Link from "next/link";
import { Landmark, FileText, CircleCheck, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { CALENDLY_URL } from "@/lib/config";

const PROGRAMME = [
  {
    name: "BAFA-Beratungsförderung",
    scope: "Bund",
    body:
      "Zuschüsse zu Beratungsleistungen für kleine und mittlere Unternehmen über das Bundesamt für Wirtschaft und Ausfuhrkontrolle."
  },
  {
    name: "go-digital",
    scope: "BMWK",
    body:
      "Bundesprogramm für Digitalisierungsvorhaben im Mittelstand, u. a. für digitale Prozesse, IT-Sicherheit und digitale Markterschließung."
  },
  {
    name: "INQA-Coaching",
    scope: "Bund · ESF Plus",
    body:
      "Gefördertes Coaching für KMU zur Einführung neuer digitaler Arbeitsweisen, inklusive KI-gestützter Prozesse."
  },
  {
    name: "Regionale Programme",
    scope: "Saarland",
    body:
      "Landesförderungen und Zuschüsse über die Saarländische Investitionskreditbank und die Zentrale für Produktivität und Technik Saar."
  }
];

export default function FoerderungHinweis() {
  return (
    <section
      id="foerderung"
      aria-labelledby="foerderung-title"
      className="relative py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="doc-frame overflow-hidden p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-sm border border-ink-900/15 bg-white px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-700">
                    <Landmark size={12} strokeWidth={2.2} />
                    Fördermittel
                  </span>
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-400">
                    Bund · Länder · EU
                  </span>
                </div>

                <h2
                  id="foerderung-title"
                  className="mt-6 text-3xl leading-[1.05] tracking-tight text-ink-900 sm:text-4xl md:text-5xl"
                >
                  Staatlich förderfähig.
                  <br />
                  <span className="display italic text-ink-500">
                    Zuschuss statt Vollpreis.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-600">
                  Beratungs- und Umsetzungsleistungen von KBS sind in vielen
                  Fällen über Förderprogramme von Bund, Ländern und EU
                  bezuschussbar. Ihr Unternehmen stellt den Antrag beim
                  jeweiligen Fördergeber, wir liefern die passende Angebots-
                  und Leistungsdokumentation in der geforderten Form.
                </p>

                <ul className="mt-7 space-y-2.5">
                  {[
                    "Bis zu 50 Prozent Zuschuss je nach Programm und Unternehmensgröße",
                    "Angebots- und Leistungsnachweise passend zum Antragsverfahren",
                    "Prüfung im kostenlosen Erstgespräch, welche Programme für Sie in Frage kommen"
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink-700"
                    >
                      <CircleCheck
                        size={16}
                        strokeWidth={2.1}
                        className="mt-0.5 flex-shrink-0 text-accent-700"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Förderfähigkeit prüfen
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </a>
                  <Link href="/kontakt" className="btn-ghost">
                    <FileText size={15} strokeWidth={2.2} />
                    Unterlagen anfordern
                  </Link>
                </div>
              </div>

              <div className="lg:border-l lg:border-ink-900/10 lg:pl-14">
                <p className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-500">
                  Gängige Programme
                </p>
                <div className="mt-2 rule-strong h-px" />
                <ul className="mt-5 space-y-4">
                  {PROGRAMME.map((p) => (
                    <li
                      key={p.name}
                      className="border-b border-ink-900/8 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <p className="text-[15px] font-medium tracking-tight text-ink-900">
                          {p.name}
                        </p>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">
                          {p.scope}
                        </p>
                      </div>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">
                        {p.body}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[12px] leading-relaxed text-ink-400">
                  Diese Übersicht ist unverbindlich. Ob und in welcher Höhe
                  ein Projekt konkret förderfähig ist, hängt vom jeweiligen
                  Programm, Ihrer Unternehmensgröße, dem Verwendungszweck und
                  den formalen Voraussetzungen des Fördergebers ab.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
