"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Layers,
  Users,
  Cog,
  Shield,
  Cpu
} from "lucide-react";
import Reveal from "../Reveal";
import {
  MODULES,
  MODULE_CATEGORY_LABEL,
  MODULE_CATEGORY_INTRO,
  type ModuleCategory
} from "@/lib/data/modules";
import { COURSES } from "@/lib/data/courses";

const CATEGORY_ORDER: ModuleCategory[] = [
  "infrastruktur",
  "fachfunktion",
  "automation",
  "governance"
];

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

const CATEGORY_ICON: Record<ModuleCategory, typeof Layers> = {
  infrastruktur: Layers,
  fachfunktion: Users,
  automation: Cog,
  governance: Shield
};

export default function BusinessModules() {
  return (
    <section id="loesungen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">
                  <Boxes size={12} strokeWidth={2.4} />
                  Software-Lösungen
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  {MODULES.length} Bausteine
                </span>
              </div>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Unsere gängigen
                <br />
                <span className="display italic text-ink-500">
                  Softwarelösungen.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-500">
                Jede Lösung ist aus einem konkreten Kundenprojekt entstanden
                und wurde zu einem wiederverwendbaren Baustein ausgebaut. Sie
                erhalten keine Neuentwicklung von Null, sondern erprobte
                Bausteine, die in Ihrer Systemlandschaft nur noch verheiratet
                werden.
              </p>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Cloud oder auf Ihrem eigenen Server. Anbindung an SAP, DATEV,
              Salesforce, Microsoft 365 oder Ihr eigenes ERP. Kein
              Off-the-Shelf-Kompromiss.
            </p>
          </div>
        </Reveal>

        {CATEGORY_ORDER.map((cat) => {
          const items = MODULES.filter((m) => m.category === cat);
          const Icon = CATEGORY_ICON[cat];
          return (
            <div key={cat} id={cat} className="mb-16 scroll-mt-32 last:mb-0">
              <Reveal>
                <div className="mb-8 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent-500/25 bg-accent-500/10">
                      <Icon
                        size={16}
                        strokeWidth={1.9}
                        className="text-accent-700"
                      />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-700">
                      Kategorie · {items.length} Lösungen
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl leading-tight tracking-tight text-ink-900 sm:text-3xl">
                    {MODULE_CATEGORY_LABEL[cat]}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {MODULE_CATEGORY_INTRO[cat]}
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {items.map((m, i) => {
                  const relCourse = m.relatedCourse
                    ? COURSES.find((c) => c.slug === m.relatedCourse)
                    : undefined;
                  return (
                    <Reveal key={m.slug} delay={i * 0.03}>
                      <article
                        id={m.slug}
                        className="card scroll-mt-32 flex h-full flex-col p-7 md:p-8"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent-700">
                            {m.tagline}
                          </p>
                          <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                            <Icon
                              size={16}
                              strokeWidth={1.9}
                              className="text-accent-700"
                            />
                          </div>
                        </div>
                        <h4 className="mt-3 text-xl leading-snug tracking-tight text-ink-900 sm:text-2xl">
                          {m.title}
                        </h4>
                        <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                          {m.summary}
                        </p>

                        <div className="mt-5 border-t border-ink-900/8 pt-5">
                          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                            Bausteine der Lösung
                          </p>
                          <ul className="mt-3 space-y-2">
                            {m.features.map((f) => (
                              <li
                                key={f}
                                className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-700"
                              >
                                <CheckCircle2
                                  size={14}
                                  strokeWidth={2}
                                  className="mt-0.5 flex-shrink-0 text-accent-700"
                                />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto pt-6">
                          {m.pricing && (
                            <div className="mb-3 rounded-2xl border border-accent-500/25 bg-accent-500/10 p-4">
                              <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent-800">
                                Preise · netto zzgl. USt.
                              </p>
                              <div className="mt-3 space-y-2">
                                {m.pricing.bundle && (
                                  <div className="flex items-baseline justify-between gap-3">
                                    <p className="text-[12.5px] font-medium text-ink-700">
                                      Baustein-Einrichtung
                                      <span className="ml-1 text-ink-400">
                                        + Lizenz
                                      </span>
                                    </p>
                                    <p className="text-right text-[15px] font-semibold tracking-tight text-ink-900">
                                      {euro.format(m.pricing.bundle.setup)}
                                      <span className="ml-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink-500">
                                        einmalig
                                      </span>
                                      <br />
                                      {euro.format(m.pricing.bundle.monthly)}
                                      <span className="ml-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink-500">
                                        pro Monat
                                      </span>
                                    </p>
                                  </div>
                                )}
                                {m.pricing.tiers && m.pricing.tiers.length > 0 && (
                                  <div
                                    className={`${
                                      m.pricing.bundle
                                        ? "mt-3 border-t border-accent-500/20 pt-3"
                                        : ""
                                    } space-y-1.5`}
                                  >
                                    {m.pricing.tiers.map((t) => (
                                      <div
                                        key={t.label}
                                        className="flex items-baseline justify-between gap-3"
                                      >
                                        <p className="text-[12.5px] leading-snug text-ink-700">
                                          {t.label}
                                        </p>
                                        <p className="text-right text-[14px] font-semibold tracking-tight text-ink-900">
                                          {euro.format(t.price)}
                                          {t.unit && (
                                            <span className="ml-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-500">
                                              {t.unit}
                                            </span>
                                          )}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {m.pricing.note && (
                                  <p className="pt-1 text-[11.5px] leading-snug text-ink-500">
                                    {m.pricing.note}
                                  </p>
                                )}
                              </div>
                            </div>
                          )}
                          {relCourse && (
                            <Link
                              href={`/business#${relCourse.slug}`}
                              className="inline-flex w-full items-center justify-between gap-2 rounded-2xl border border-ink-900/10 bg-ink-50 px-4 py-3 text-[13px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
                            >
                              <span>Passende Schulung: {relCourse.title}</span>
                              <ArrowUpRight size={13} strokeWidth={2.2} />
                            </Link>
                          )}
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}

        <Reveal delay={0.15}>
          <div className="mt-10 flex items-start gap-4 rounded-3xl border border-ink-900/10 bg-white p-8 md:p-10">
            <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
              <Cpu size={18} strokeWidth={1.9} className="text-accent-700" />
            </div>
            <div>
              <p className="text-[15px] font-medium text-ink-900">
                Cloud- oder On-Premise, verheiratet mit Ihrer Systemlandschaft
              </p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-500">
                Anbindung an SAP, DATEV, Salesforce, Microsoft 365 oder Ihr
                eigenes ERP. Kein Off-the-Shelf-Kompromiss.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
