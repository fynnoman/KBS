"use client";

import Reveal from "../Reveal";

const STEPS = [
  {
    n: "01",
    duration: "30 Minuten",
    title: "Erstgespräch",
    body:
      "Kostenloser Videocall. Sie schildern Ihre Situation, wir sagen ehrlich, ob und wie wir helfen können – auch wenn eine Zusammenarbeit nicht passt."
  },
  {
    n: "02",
    duration: "1 – 2 Wochen",
    title: "Analyse & Konzept",
    body:
      "Termin vor Ort oder per Videocall mit den relevanten Personen. Ergebnis: ein konkretes Umsetzungskonzept mit Kosten, Zeitplan und einer belastbaren Nutzen-Schätzung."
  },
  {
    n: "03",
    duration: "2 – 6 Wochen",
    title: "Pilot",
    body:
      "Ein abgegrenzter Anwendungsfall in einer Abteilung. Sie sehen den Effekt in echt, bevor Sie über einen breiten Rollout entscheiden."
  },
  {
    n: "04",
    duration: "Nach Umfang",
    title: "Ausrollen & Schulung",
    body:
      "Wir rollen die Lösung im Unternehmen aus und schulen Ihr Team parallel. Interne Regeln und Dokumentation für die Revision entstehen mit."
  },
  {
    n: "05",
    duration: "Laufend",
    title: "Betreuung",
    body:
      "Fester Ansprechpartner, monatliche Termine, feste Reaktionszeiten. Kein Projektabbruch nach Go-Live – wir bleiben Ihr Ansprechpartner für KI."
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
                <span className="chip">Unser Prozess</span>
                <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
                  Fünf klare Phasen.
                </h2>
                <p className="mt-6 text-[15.5px] leading-relaxed text-ink-500">
                  Jede Phase hat ein festes Ergebnis, einen festen Preis und
                  endet mit einer Ja/Nein-Entscheidung von Ihnen. Kein
                  Vertrags-Lock-in, keine überraschenden Zusatzrechnungen.
                </p>
                <div className="mt-8 rounded-2xl border border-ink-900/10 bg-white p-5">
                  <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-400">
                    Sie behalten die Kontrolle
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                    Nach jeder Phase entscheiden Sie, ob es weitergeht. Wenn
                    nicht, ist die Zusammenarbeit sauber beendet.
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
