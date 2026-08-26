"use client";

import { CalendarClock } from "lucide-react";
import CalendlyEmbed from "./CalendlyEmbed";
import Reveal from "./Reveal";

export default function HomeCalendly() {
  return (
    <section
      id="termin"
      className="relative py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <div>
              <span className="chip">
                <CalendarClock size={12} strokeWidth={2.4} />
                Kostenloses Erstgespräch
              </span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Termin direkt
                <br />
                <span className="display italic text-ink-500">buchen.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-500">
                Wählen Sie einen freien Termin. 15 bis 30 Minuten
                Videocall – wir klären, ob und wie KI Ihnen weiterhelfen kann.
                Kein Verkaufsdruck, kein Vorwissen nötig.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Für Privatpersonen, Selbstständige und kleine Unternehmen",
                  "Kostenlos und unverbindlich",
                  "Antwort auf Ihre konkrete KI-Frage – keine Präsentation"
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14.5px] leading-snug text-ink-700"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="card-lift overflow-hidden p-3 sm:p-4">
            <CalendlyEmbed height={680} />
          </div>
        </div>
      </div>
    </section>
  );
}
