"use client";

import Reveal from "../Reveal";
import {
  Scale,
  Calculator,
  Stethoscope,
  HeartPulse,
  Factory,
  Building2,
  ShoppingBag,
  ShieldCheck
} from "lucide-react";

type Industry = {
  icon: typeof Scale;
  label: string;
  body: string;
  highlights: string[];
};

const INDUSTRIES: Industry[] = [
  {
    icon: Scale,
    label: "Anwaltskanzleien",
    body:
      "Vertragsanalyse, Aktenrecherche, Schriftsatz-Vorbereitung – lokal, mandantsgeschützt, ohne dass ein Zeichen die Kanzlei verlässt.",
    highlights: ["Vertragsanalyse", "mandantsgeschützt", "lokal"]
  },
  {
    icon: Calculator,
    label: "Steuerkanzleien & WP",
    body:
      "DATEV-nahe Assistenten, automatisierte Belegerkennung, Mandanten-Kommunikation und interne Recherche auf lokaler KI.",
    highlights: ["DATEV-nahe", "Belegerkennung", "lokaler KI"]
  },
  {
    icon: Stethoscope,
    label: "Arzt- & Zahnarztpraxen",
    body:
      "Arztbrief-Diktate, Anamnese-Vorbereitung, Rezeptions-Voice-Agents und Terminvereinbarung – DSGVO- und Patientendaten-konform on-premise.",
    highlights: ["Arztbrief-Diktate", "Terminvereinbarung", "on-premise"]
  },
  {
    icon: HeartPulse,
    label: "Kliniken & MVZ",
    body:
      "Dokumentations-Assistenten für Pflege und Ärzteschaft, Kodierhilfe, interne Wissensdatenbank über Leitlinien und SOPs.",
    highlights: ["Kodierhilfe", "Wissensdatenbank", "Leitlinien"]
  },
  {
    icon: Factory,
    label: "Maschinenbau & Fertigung",
    body:
      "Technische Dokumentation, Ersatzteil-Recherche, Angebots- und Ausschreibungsvorbereitung, Wartungs-Handbücher als KI-Assistent.",
    highlights: ["Ersatzteil-Recherche", "Angebots-", "Wartungs-Handbücher"]
  },
  {
    icon: Building2,
    label: "Immobilien & Verwaltung",
    body:
      "Mieterkommunikation, Betriebskostenabrechnung, Objektakten-Recherche und Ausschreibungs-Vorbereitung für Verwalter und Makler.",
    highlights: ["Betriebskostenabrechnung", "Objektakten-Recherche"]
  },
  {
    icon: ShoppingBag,
    label: "Handel & Großhandel",
    body:
      "Produktdaten-Pflege, Angebotserstellung, Reklamations-Triage, Lieferanten-Kommunikation und interne Sortiments-Suche.",
    highlights: ["Produktdaten-Pflege", "Reklamations-Triage", "Sortiments-Suche"]
  },
  {
    icon: ShieldCheck,
    label: "Versicherung & Finanz",
    body:
      "Schadenprüfung, Vertragsanalyse, Kunden-Korrespondenz und regulatorische Recherche – auf Wunsch vollständig ohne Cloud-Übermittlung.",
    highlights: ["Schadenprüfung", "regulatorische Recherche", "ohne Cloud"]
  }
];

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlighted(text: string, highlights: string[]) {
  if (highlights.length === 0) return text;
  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <mark
        key={i}
        className="bg-accent-500/15 px-0.5 font-semibold text-accent-800 rounded"
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function BusinessIndustries() {
  return (
    <section id="branchen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">Für wen wir bauen</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Branchen mit
                <br />
                <span className="display italic text-ink-500">
                  echten Anforderungen.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Enterprise-KI wirkt dort am stärksten, wo Datenschutz,
              Fachsprache und dokumentationslastige Prozesse aufeinandertreffen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.label} delay={i * 0.04}>
                <div className="card h-full p-6 md:p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                    <Icon size={18} strokeWidth={1.9} className="text-accent-700" />
                  </div>
                  <h3 className="mt-6 text-lg leading-snug tracking-tight text-ink-900 sm:text-xl">
                    {ind.label}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {renderHighlighted(ind.body, ind.highlights)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
