"use client";

import Reveal from "./Reveal";

const INDUSTRIES = [
  "Handwerksbetriebe",
  "Gebäudereinigung",
  "Immobilien & Makler",
  "Steuerkanzleien",
  "Versicherungsbüros",
  "Arzt- und Zahnarztpraxen",
  "Agenturen",
  "Einzelhandel",
  "Gastronomie",
  "Kleine Produktion",
  "Vereine & Organisationen",
  "Dienstleister aller Art"
];

export default function Industries() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <span className="chip">Branchen</span>
            <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              Für kleine Unternehmen
              <br />
              <span className="display italic text-ink-500">im Saarland.</span>
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-ink-500">
              Gerade kleine Betriebe brauchen selten eine mehrmonatige
              KI-Strategie. Sie brauchen jemanden, der zeigt, wo morgen zwei
              Stunden Arbeit gespart werden können.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {INDUSTRIES.map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl px-3 py-3 text-[14px] font-medium text-ink-700 transition-colors hover:bg-ink-50 sm:px-4 sm:py-4"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
                  {i}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
