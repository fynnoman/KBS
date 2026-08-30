"use client";

import { CalendarClock, Phone, Mail, ExternalLink } from "lucide-react";
import { CALENDLY_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/config";
import Reveal from "../Reveal";
import CalendlyEmbed from "../CalendlyEmbed";

export default function BusinessCTA() {
  return (
    <section id="termin" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div>
              <span className="chip">Kostenloses Kennenlerngespräch</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                30 Minuten,
                <br />
                <span className="display italic text-ink-500">
                  ehrliche Einschätzung.
                </span>
              </h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-500">
                Sie schildern Ihre Situation, wir bewerten Machbarkeit,
                Potenzial und ROI. Ohne Verkaufsdruck, und ohne dass Ihre IT
                oder Ihr Betriebsrat vorher zustimmen muss.
              </p>

              <div className="mt-8">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <CalendarClock size={16} strokeWidth={2.4} />
                  Termin in neuem Tab öffnen
                  <ExternalLink size={13} strokeWidth={2.2} />
                </a>
              </div>

              <div className="mt-10 space-y-3">
                <div className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5">
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500/10">
                    <CalendarClock size={16} strokeWidth={2} className="text-accent-700" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-medium text-ink-900">
                      Videocall, 30 Minuten
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                      Kein Vorwissen erforderlich, keine Präsentation zu erdulden.
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all hover:shadow-lift"
                >
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-900/10 bg-ink-50">
                    <Phone size={16} strokeWidth={2} className="text-ink-700" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-medium text-ink-900">
                      Lieber telefonisch?
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                      {PHONE_DISPLAY} · Mo bis Fr, 09 bis 18 Uhr
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=KBS%20Business%20Anfrage`}
                  className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all hover:shadow-lift"
                >
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-900/10 bg-ink-50">
                    <Mail size={16} strokeWidth={2} className="text-ink-700" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-medium text-ink-900">
                      Oder per E-Mail
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                      {EMAIL}
                    </p>
                  </div>
                </a>
              </div>
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
