"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Sie rufen uns an",
    body:
      "Keine komplizierte Angebotsauswahl vorher. Sie erzählen, was Sie mit KI machen möchten – wir hören zu."
  },
  {
    n: "02",
    title: "Wir verstehen Ihre Situation",
    body:
      "In 5 bis 15 Minuten klären wir gemeinsam, worum es eigentlich geht und was realistisch möglich ist."
  },
  {
    n: "03",
    title: "Passende Leistung empfehlen",
    body:
      "Manchmal reicht eine Stunde KI-Hilfe. Manchmal ist ein KI-Check mit anschließendem Workshop sinnvoller."
  },
  {
    n: "04",
    title: "Wir setzen es mit Ihnen um",
    body:
      "Vor Ort im Saarland oder per Videocall. Praktisch, an Ihren echten Aufgaben – nicht an Beispieltexten."
  },
  {
    n: "05",
    title: "Kontrolle nach zwei bis vier Wochen",
    body:
      "Wir melden uns und fragen, was funktioniert und wo noch etwas hakt. Ohne aggressive Vertriebsmethoden."
  }
];

export default function StickyProcess() {
  return (
    <section id="prozess" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[420px_1fr] lg:gap-24">
          <div>
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <span className="chip">So arbeiten wir</span>
                <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
                  Vom Anruf
                  <br />
                  <span className="display italic text-ink-500">
                    zum Ergebnis.
                  </span>
                </h2>
                <p className="mt-6 text-[15.5px] leading-relaxed text-ink-500">
                  KBS folgt einem einfachen, ehrlichen Ablauf. Kein Verkaufsdruck,
                  kein Fachjargon – nur ein klarer Weg von Ihrer Frage zur Lösung.
                </p>
                <div className="mt-8 rounded-2xl border border-ink-900/10 bg-white p-5">
                  <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-400">
                    Kostenlos & unverbindlich
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                    Das Erstgespräch am Telefon oder per Videocall ist bei uns
                    grundsätzlich kostenfrei.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <ol className="space-y-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <li className="card flex gap-6 p-7 md:p-8">
                  <div className="flex-shrink-0">
                    <span className="display text-3xl italic text-ink-300">
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl leading-snug tracking-tight text-ink-900 sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
