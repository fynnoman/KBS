"use client";

import Reveal from "../Reveal";
import {
  GraduationCap,
  Presentation,
  Users2,
  ClipboardList,
  BookOpen,
  ShieldCheck
} from "lucide-react";

const FORMATS = [
  {
    icon: Presentation,
    label: "Impulsvorträge & Keynotes",
    body:
      "Führungskreis-Formate von 45 bis 90 Minuten. Wo steht Ihr Unternehmen im KI-Zyklus, welche Investments zahlen sich in zwölf Monaten aus, welche Risiken sind real."
  },
  {
    icon: GraduationCap,
    label: "Halbtägige Grundlagen-Seminare",
    body:
      "Für gemischte Teams aus Fachabteilungen. Nach vier Stunden nutzen Ihre Mitarbeiter KI-Werkzeuge produktiv, sicher und im Rahmen Ihrer Nutzungsrichtlinien."
  },
  {
    icon: Users2,
    label: "Rollenspezifische Workshops",
    body:
      "Vertrieb, Recht, HR, Finanzen, Support: jeweils ein Tag mit den Werkzeugen, Prompts und Prozessen, die für genau diese Rolle den größten Effekt haben."
  },
  {
    icon: ClipboardList,
    label: "Multiplikatoren-Programme",
    body:
      "Wir bilden interne KI-Champions aus, die anschließend die Wissensweitergabe in Ihrem Betrieb übernehmen. Kein Dauerabo, sondern messbare Selbstständigkeit."
  },
  {
    icon: BookOpen,
    label: "Individuelle Curricula",
    body:
      "Mehrstufige Programme über Wochen oder Monate, abgestimmt auf Ihren Rollout-Plan. Inklusive Lernpfade, Übungsaufgaben, Sprechstunden und Erfolgsmessung."
  },
  {
    icon: ShieldCheck,
    label: "Compliance-Schulungen",
    body:
      "Pflichtschulungen zu DSGVO und EU AI Act für Führungskräfte, KI-Verantwortliche und Endanwender. Mit Teilnahmenachweis für Ihre Revision und Auditoren."
  }
];

export default function BusinessTraining() {
  return (
    <section id="schulungen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">Seminare &amp; Mitarbeiter-Schulungen</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                KI wirkt erst,
                <br />
                <span className="display italic text-ink-500">
                  wenn Ihr Team sie beherrscht.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Wir liefern nicht nur Systeme, sondern befähigen Ihre Belegschaft.
              Formate vom 45-Minuten-Impuls bis zum mehrmonatigen Curriculum –
              in Präsenz, remote oder hybrid.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FORMATS.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.label} delay={i * 0.04}>
                <div className="card h-full p-6 md:p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                    <Icon size={18} strokeWidth={1.9} className="text-accent-700" />
                  </div>
                  <h3 className="mt-6 text-lg leading-snug tracking-tight text-ink-900 sm:text-xl">
                    {f.label}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-white md:p-10">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto] md:gap-12">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
                  Enterprise-Rollout inklusive Schulung
                </p>
                <h3 className="mt-3 text-2xl leading-tight tracking-tight sm:text-3xl">
                  Von der ersten Seminarreihe bis zum vollständigen
                  Kompetenzaufbau der Belegschaft – aus einer Hand.
                </h3>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70">
                  Schulungen sind kein Add-on, sondern Bestandteil jedes
                  Rollouts. Wir dokumentieren, messen den Kompetenzzuwachs und
                  übergeben Ihrem Team am Ende ein tragfähiges Betriebssystem
                  für den weiteren Ausbau.
                </p>
              </div>
              <a
                href="#termin"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-all hover:-translate-y-0.5"
              >
                Schulungsplan besprechen
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
