"use client";

import Reveal from "../Reveal";

const STEPS = [
  {
    n: "01",
    duration: "30 Minuten",
    title: "Discovery-Call",
    body:
      "Kostenloses Erstgespräch per Videocall. Sie schildern Ihre Situation, wir bewerten Machbarkeit und Potenzial – ehrlich, auch wenn eine Zusammenarbeit nicht sinnvoll ist."
  },
  {
    n: "02",
    duration: "1 – 2 Wochen",
    title: "Analyse & Konzept",
    body:
      "Vor-Ort-Termin oder tiefer Videocall mit relevanten Stakeholdern. Ergebnis: konkretes Umsetzungskonzept mit Kosten, Zeitplan und einer belastbaren ROI-Schätzung."
  },
  {
    n: "03",
    duration: "2 – 6 Wochen",
    title: "Pilot",
    body:
      "Wir setzen einen abgegrenzten Anwendungsfall in einer Abteilung um. Ziel: messbarer Erfolg vor dem Rollout, keine Blackbox-Migrationen."
  },
  {
    n: "04",
    duration: "Variabel",
    title: "Rollout & Enablement",
    body:
      "Ausrollen im Unternehmen. Parallel Schulung Ihrer Multiplikatoren, Aufbau interner KI-Governance und Dokumentation für Ihre Revision."
  },
  {
    n: "05",
    duration: "Laufend",
    title: "Support & Weiterentwicklung",
    body:
      "Fester Ansprechpartner, monatliche Reviews, garantierte Reaktionszeiten. Kein Projektabbruch nach Go-Live – wir bleiben Ihr KI-Partner."
  }
];

export default function BusinessProcess() {
  return (
    <section id="prozess" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[420px_1fr] lg:gap-24">
          <div>
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <span className="chip">Wie wir arbeiten</span>
                <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
                  Vom Discovery-Call
                  <br />
                  <span className="display italic text-ink-500">
                    zum produktiven Rollout.
                  </span>
                </h2>
                <p className="mt-6 text-[15.5px] leading-relaxed text-ink-500">
                  Wir arbeiten in klaren Phasen mit Festpreisen. Jede Phase hat
                  ein definiertes Ergebnis und eine belastbare Entscheidungs-
                  grundlage für die nächste – Sie behalten die Kontrolle.
                </p>
                <div className="mt-8 rounded-2xl border border-ink-900/10 bg-white p-5">
                  <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-400">
                    Klare Trennung
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                    Jede Phase endet mit einer Go/No-Go-Entscheidung. Kein
                    Vertrags-Lock-in, keine bewegten Ziele.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <ol className="space-y-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <li className="card p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="display text-3xl italic text-ink-300">
                      {step.n}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl leading-snug tracking-tight text-ink-900 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
