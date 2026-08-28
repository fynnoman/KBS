"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Wallet,
  Compass,
  Server,
  Database,
  Zap,
  Boxes,
  Wrench,
  GraduationCap,
  ShieldCheck
} from "lucide-react";
import Reveal from "../Reveal";
import {
  PRICING,
  PRICING_SECTIONS,
  type PriceSection,
  type PriceItem
} from "@/lib/data/pricing";

const BUSINESS_SECTIONS: PriceSection[] = [
  "inhouse-kurse",
  "projektphasen",
  "lokale-ki",
  "rag-assistent",
  "automation-voice-rollout",
  "software-bausteine",
  "laufender-betrieb"
];

const SECTION_ICON: Record<PriceSection, typeof Wallet> = {
  privatpersonen: Wallet,
  selbststaendige: Wallet,
  "zertifikatskurse-offen": GraduationCap,
  "inhouse-kurse": GraduationCap,
  projektphasen: Compass,
  "lokale-ki": Server,
  "rag-assistent": Database,
  "automation-voice-rollout": Zap,
  "software-bausteine": Boxes,
  "laufender-betrieb": Wrench
};

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

function startingPrice(items: PriceItem[]): { label: string; unit: string } {
  const priced = items.filter(
    (i) => typeof i.price === "number" && i.price !== null && i.price > 0
  );
  if (priced.length === 0) {
    return { label: "auf Anfrage", unit: "" };
  }
  const min = priced.reduce((acc, i) =>
    (i.price as number) < (acc.price as number) ? i : acc
  );
  return {
    label: `ab ${euro.format(min.price as number)}`,
    unit: min.unit
  };
}

export default function BusinessPreise() {
  return (
    <section id="preise" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">
                  <Wallet size={12} strokeWidth={2.4} />
                  Preise
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/25 bg-accent-500/10 px-2.5 py-1 text-[11px] font-medium tracking-tight text-accent-800">
                  <ShieldCheck size={11} strokeWidth={2.4} />
                  Festpreise pro Phase
                </span>
              </div>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Transparente Preise,
                <br />
                <span className="display italic text-ink-500">
                  ohne Beratungshaus-Aufschlag.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-500">
                Alle Business-Preise netto zzgl. USt. Festpreise pro Phase –
                Sie entscheiden nach jeder Phase, ob es weitergeht. Volle
                Übersicht auf der Preise-Seite.
              </p>
            </div>
            <Link
              href="/preise#business"
              className="btn-primary md:self-end"
            >
              Alle Preise ansehen
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_SECTIONS.map((sec, i) => {
            const meta = PRICING_SECTIONS[sec];
            const items = PRICING.filter((p) => p.section === sec);
            const Icon = SECTION_ICON[sec];
            const start = startingPrice(items);
            return (
              <Reveal key={sec} delay={i * 0.04}>
                <Link
                  href={`/preise#${sec}`}
                  className="card group flex h-full flex-col p-6 transition-all hover:shadow-lift md:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                      <Icon
                        size={18}
                        strokeWidth={1.9}
                        className="text-accent-700"
                      />
                    </div>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                      className="text-ink-400 transition-colors group-hover:text-ink-900"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight text-ink-900 sm:text-xl">
                    {meta.label}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <p className="text-2xl font-semibold tracking-tight text-ink-900">
                      {start.label}
                    </p>
                    {start.unit && (
                      <p className="text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink-400">
                        {start.unit}
                      </p>
                    )}
                  </div>
                  <ul className="mt-5 space-y-2 border-t border-ink-900/8 pt-5">
                    {items.slice(0, 3).map((it) => (
                      <li
                        key={it.id}
                        className="flex items-start gap-2 text-[13px] leading-snug text-ink-500"
                      >
                        <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
                        {it.name}
                      </li>
                    ))}
                    {items.length > 3 && (
                      <li className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-400">
                        + {items.length - 3} weitere
                      </li>
                    )}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-white md:flex-row md:items-center md:p-10">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500/15">
                <Wallet
                  size={18}
                  strokeWidth={1.9}
                  className="text-accent-400"
                />
              </div>
              <div>
                <p className="text-[15px] font-medium">
                  Vollständige Preisübersicht auf einer Seite
                </p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">
                  Alle Business-Sektionen mit Einzelpreisen, Konditionen und
                  Frühbucher-Regeln. Für Mittelstand und Konzerne.
                </p>
              </div>
            </div>
            <Link
              href="/preise#business"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-all hover:-translate-y-0.5"
            >
              Zur Preise-Seite
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
