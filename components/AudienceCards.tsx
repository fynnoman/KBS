"use client";

import { User, Briefcase, Building2, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const AUDIENCES = [
  {
    icon: User,
    label: "Privatpersonen",
    title: "KI im Alltag – ohne Umwege.",
    body:
      "Senioren, Berufstätige und Familien. Wir erklären ChatGPT & Co. so, dass Sie sie danach selbst benutzen können.",
    bullets: [
      "ChatGPT verstehen",
      "Briefe & E-Mails formulieren",
      "Bilder & Fotos mit KI",
      "Fake-Nachrichten erkennen"
    ]
  },
  {
    icon: Briefcase,
    label: "Selbstständige",
    title: "Zwei Stunden pro Tag zurückgewinnen.",
    body:
      "Handwerk, Praxis, Kanzlei, Agentur. Wir zeigen konkret, wo KI in Ihrem Alltag Zeit spart – und wo besser nicht.",
    bullets: [
      "Angebote & E-Mails schreiben",
      "Kundenanfragen vorbereiten",
      "Social Media & Website-Texte",
      "Vorlagen und Prompts"
    ]
  },
  {
    icon: Building2,
    label: "Kleine Unternehmen",
    title: "KI im Team – strukturiert nutzen.",
    body:
      "Damit nicht jeder Mitarbeiter KI anders benutzt. Wir bringen Struktur, Vorlagen und klare Regeln ins Team.",
    bullets: [
      "Team-Workshops vor Ort",
      "KI-Regeln & Datenschutz",
      "Wiederkehrende Prozesse",
      "Individuelle Assistenten"
    ]
  }
];

export default function AudienceCards() {
  return (
    <section id="fuer-wen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">Für wen wir arbeiten</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Drei Zielgruppen.
                <br />
                <span className="display italic text-ink-500">Ein Ansprechpartner.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              KBS ist kein Beratungshaus – KBS ist der lokale Kontakt, den man
              einfach anruft, wenn man mit KI nicht weiterkommt.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {AUDIENCES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.label} delay={i * 0.08}>
                <div className="group card flex h-full flex-col p-5 transition-shadow hover:shadow-lift sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ink-900/8 bg-ink-50">
                      <Icon size={18} strokeWidth={1.8} className="text-ink-700" />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-400">
                      {a.label}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl leading-[1.15] tracking-tight text-ink-900">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                    {a.body}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-ink-900/8 pt-6">
                    {a.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 text-[13.5px] text-ink-600"
                      >
                        <span className="inline-block h-1 w-1 rounded-full bg-ink-900" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-ink-900 opacity-70 transition-opacity group-hover:opacity-100">
                    Passende Leistung finden
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
