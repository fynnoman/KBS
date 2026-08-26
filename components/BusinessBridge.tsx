"use client";

import Link from "next/link";
import { ArrowUpRight, Server, Brain, Workflow, Users } from "lucide-react";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  {
    icon: Server,
    title: "Lokale KI auf Ihrer Hardware",
    body:
      "Mac Mini oder Server im Haus. Modelle laufen bei Ihnen, Daten verlassen die Firma nicht."
  },
  {
    icon: Brain,
    title: "Custom Assistenten für Firmenwissen",
    body:
      "RAG-basiert, trainiert auf Ihren Handbüchern, Verträgen und CRM-Daten."
  },
  {
    icon: Workflow,
    title: "Prozess-Automation & OCR",
    body:
      "Rechnungen, E-Mails, Angebote, Ticket-Triage – belastbar und dokumentiert."
  },
  {
    icon: Users,
    title: "Rollout für 50 – 500 Mitarbeiter",
    body:
      "Governance, Schulung, Multiplikatoren und Erfolgsmessung aus einer Hand."
  }
];

export default function BusinessBridge() {
  return (
    <section id="fuer-groessere" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">Sie sind größer als KMU?</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                KBS Business.
                <br />
                <span className="display italic text-ink-500">
                  Für Unternehmen ab 20 Mitarbeitern.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Für mittelständische Unternehmen und Konzerne bieten wir eine
              eigene Schiene mit lokaler KI-Installation, Custom-Assistenten,
              Rollout und laufender Betreuung.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={i * 0.05}>
                <Link
                  href="/business"
                  className="group card block h-full p-6 transition-all hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                      <Icon size={17} strokeWidth={1.9} className="text-accent-700" />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-300 transition-colors group-hover:text-ink-900"
                    />
                  </div>
                  <h3 className="mt-6 text-[17px] font-medium leading-snug tracking-tight text-ink-900">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-500">
                    {h.body}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-white md:flex-row md:items-center md:p-10">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                Kostenloses 30-Min-Kennenlerngespräch
              </p>
              <p className="mt-3 text-2xl leading-tight tracking-tight sm:text-3xl">
                Alle acht Enterprise-Use-Cases, Preisrahmen und Prozess auf einen Blick.
              </p>
            </div>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-transform hover:-translate-y-0.5"
            >
              Zu KBS Business
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
