"use client";

import { useState } from "react";
import {
  Mail,
  ClipboardList,
  Megaphone,
  Hammer,
  Home,
  UtensilsCrossed,
  Scale,
  ArrowRight
} from "lucide-react";
import Reveal from "./Reveal";

const CATEGORIES = [
  {
    key: "buero",
    label: "Büro & Verwaltung",
    icon: Mail,
    items: [
      "E-Mails formulieren und zusammenfassen",
      "Protokolle und Notizen strukturieren",
      "Dokumente und PDFs analysieren",
      "Vorlagen und interne Dokumentation"
    ]
  },
  {
    key: "vertrieb",
    label: "Vertrieb",
    icon: ClipboardList,
    items: [
      "Kundenanfragen vorbereiten",
      "Follow-up-Mails und Gesprächsleitfäden",
      "Angebote vorbereiten",
      "CRM-Daten strukturieren"
    ]
  },
  {
    key: "marketing",
    label: "Marketing",
    icon: Megaphone,
    items: [
      "Social-Media-Posts und Website-Texte",
      "Newsletter und Anzeigen",
      "Bild- und Videoideen",
      "Content-Planung"
    ]
  },
  {
    key: "handwerk",
    label: "Handwerk",
    icon: Hammer,
    items: [
      "Angebotsvorbereitung",
      "Baustellendokumentation",
      "Leistungsbeschreibungen",
      "Kunden- und Mitarbeiterkommunikation"
    ]
  },
  {
    key: "immobilien",
    label: "Immobilien",
    icon: Home,
    items: [
      "Exposé-Texte und Objektbeschreibungen",
      "Markt- und Standortrecherche",
      "Besichtigungsunterlagen",
      "Social Media und E-Mail-Kommunikation"
    ]
  },
  {
    key: "gastro",
    label: "Gastronomie",
    icon: UtensilsCrossed,
    items: [
      "Speisekarten und Übersetzungen",
      "Social Media und Bewertungen beantworten",
      "Marketing und Angebotsplanung",
      "Mitarbeiterkommunikation"
    ]
  },
  {
    key: "kanzlei",
    label: "Kanzleien & Praxen",
    icon: Scale,
    items: [
      "E-Mail-Entwürfe und Mandanten-Kommunikation",
      "Dokumentenzusammenfassungen",
      "Interne Wissenssuche und Recherche",
      "Vorlagen und Formulare"
    ]
  }
];

export default function UseCases() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const current = CATEGORIES.find((c) => c.key === active)!;

  return (
    <section id="leistungen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <span className="chip">Anwendungsfälle</span>
            <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
              Konkrete Aufgaben.
              <br />
              <span className="display italic text-ink-500">
                Kein Fachchinesisch.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
              KBS verkauft keine 80 KI-Tools. Wir arbeiten an Ihren echten
              Aufgaben – dort, wo Sie heute Zeit verlieren.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <div className="card p-3">
              <ul className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-1">
                {CATEGORIES.map((c) => {
                  const Icon = c.icon;
                  const isActive = c.key === active;
                  return (
                    <li key={c.key} className="flex-shrink-0 lg:flex-shrink">
                      <button
                        onClick={() => setActive(c.key)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-[13.5px] font-medium transition-all ${
                          isActive
                            ? "bg-ink-900 text-white shadow-soft"
                            : "text-ink-600 hover:bg-ink-50"
                        }`}
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.9}
                          className={isActive ? "text-white" : "text-ink-400"}
                        />
                        <span className="whitespace-nowrap">{c.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-lift relative h-full min-h-[380px] overflow-hidden p-8 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  {current.label}
                </span>
                <ArrowRight size={16} className="text-ink-300" />
              </div>
              <h3 className="text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                Damit können wir Ihnen morgen helfen.
              </h3>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {current.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-ink-50/70 px-4 py-4 text-[14px] leading-snug text-ink-700"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-900" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[13px] leading-relaxed text-ink-400">
                Was hier nicht steht, ist meistens trotzdem möglich. Fragen Sie
                einfach.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
