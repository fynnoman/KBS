"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const PRODUCTS = [
  {
    name: "KBS KI-Hilfe",
    tag: "Privatpersonen",
    price: "89 – 119 €",
    duration: "60 – 90 Minuten",
    description:
      "Persönliche Unterstützung für alle, die KI verstehen und im Alltag nutzen möchten.",
    bullets: [
      "ChatGPT einrichten und erklären",
      "Erste eigene Prompts formulieren",
      "Sicherheit im Umgang mit KI",
      "Vor Ort oder per Videocall"
    ]
  },
  {
    name: "KBS KI-Check",
    tag: "Selbstständige & kleine Unternehmen",
    price: "249 – 349 €",
    duration: "90 – 120 Minuten",
    description:
      "Wir analysieren, wo in Ihrem Alltag KI wirklich Zeit spart – und wo nicht.",
    bullets: [
      "Analyse Ihrer Arbeitsabläufe",
      "3 – 5 konkrete Anwendungsfälle",
      "Passende Tool-Empfehlungen",
      "Klare Priorisierung"
    ]
  },
  {
    name: "KBS KI-Workshop",
    tag: "Unternehmen & Teams",
    price: "590 – 790 €",
    duration: "2 – 3 Stunden vor Ort",
    description:
      "Wir arbeiten an Ihren echten Aufgaben – nicht an 80 KI-Tools aus dem Katalog.",
    bullets: [
      "E-Mails, Angebote, Dokumentation",
      "Vertrieb, Marketing, Recherche",
      "Gemeinsame Prompt-Sammlung",
      "Bis 8 Teilnehmer inklusive"
    ],
    highlight: true
  },
  {
    name: "KBS KI-Einrichtung",
    tag: "Individuelle Konfiguration",
    price: "199 – 499 €",
    duration: "Nach Umfang",
    description:
      "Sie kennen das Tool bereits, brauchen aber Unterstützung bei der Einrichtung.",
    bullets: [
      "ChatGPT & Team-Accounts",
      "Individuelle Prompts & Vorlagen",
      "Wissensbasis anlegen",
      "Eigene KI-Assistenten"
    ]
  },
  {
    name: "KBS KI-Sprechstunde",
    tag: "Laufende Betreuung",
    price: "149 – 249 € / Monat",
    duration: "Monatlicher Termin",
    description:
      "Ein fester KI-Ansprechpartner für Ihr Unternehmen – ohne feste Vertragslaufzeit.",
    bullets: [
      "Monatlicher KI-Termin",
      "Neue Use-Cases & Empfehlungen",
      "Mitarbeiterfragen zwischendurch",
      "Optimierung bestehender Workflows"
    ]
  }
];

export default function Products() {
  return (
    <section id="preise" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">Leistungen & Preise</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Fünf einfache
                <br />
                <span className="display italic text-ink-500">Einstiege.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Sie müssen vorher nicht wissen, welches Produkt passt. Rufen Sie
              an – wir empfehlen die passende Leistung im Gespräch.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div
                className={`flex h-full flex-col justify-between p-7 md:p-8 ${
                  p.highlight
                    ? "card-lift relative overflow-hidden"
                    : "card"
                }`}
              >
                {p.highlight && (
                  <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                    <Sparkles size={11} strokeWidth={2.2} />
                    Beliebt
                  </div>
                )}
                <div>
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-ink-400">
                    {p.tag}
                  </p>
                  <h3 className="mt-4 text-2xl leading-tight tracking-tight text-ink-900">
                    {p.name}
                  </h3>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="text-3xl font-semibold tracking-tight text-ink-900">
                      {p.price}
                    </span>
                  </div>
                  <p className="mt-1 text-[12.5px] font-medium text-ink-400">
                    {p.duration}
                  </p>
                  <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500">
                    {p.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-ink-900/8 pt-6">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink-600"
                      >
                        <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-ink-900" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="#kontakt"
                  className={`mt-8 inline-flex items-center justify-between gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium transition-all ${
                    p.highlight
                      ? "bg-ink-900 text-white hover:bg-ink-700"
                      : "bg-ink-50 text-ink-900 hover:bg-ink-100"
                  }`}
                >
                  <span>Kostenlos anfragen</span>
                  <ArrowUpRight size={15} strokeWidth={2.2} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-[13px] leading-relaxed text-ink-400">
            Alle Preise inkl. gesetzlicher MwSt. Anfahrt im Saarland (Umkreis 40 km um Saarbrücken) inklusive.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
