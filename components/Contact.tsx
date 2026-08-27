"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <span className="chip">Kontakt</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Eine Frage zu KI?
                <br />
                <span className="display italic text-ink-500">Ruf uns an.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-500">
                Kein Formular-Marathon, kein Verkaufsdruck. Ein Anruf – wir
                hören zu und sagen ehrlich, ob und wie wir helfen können.
              </p>

              <div className="mt-10 space-y-4">
                <Link
                  href="tel:+4915168488999"
                  className="group flex items-center justify-between rounded-3xl border border-ink-900/10 bg-white p-6 transition-all hover:shadow-lift"
                >
                  <div className="flex items-center gap-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white">
                      <Phone size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                        Telefon
                      </p>
                      <p className="mt-1 text-xl font-medium tracking-tight text-ink-900">
                        0151 · 68488999
                      </p>
                    </div>
                  </div>
                  <span className="hidden text-[13px] font-medium text-ink-400 group-hover:text-ink-900 sm:inline">
                    Jetzt anrufen →
                  </span>
                </Link>

                <a
                  href="mailto:info@ki-beratung-saar.com"
                  className="group flex items-center justify-between rounded-3xl border border-ink-900/10 bg-white p-6 transition-all hover:shadow-lift"
                >
                  <div className="flex items-center gap-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-ink-900/10 bg-ink-50 text-ink-900">
                      <Mail size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                        E-Mail
                      </p>
                      <p className="mt-1 text-xl font-medium tracking-tight text-ink-900">
                        info@ki-beratung-saar.com
                      </p>
                    </div>
                  </div>
                  <span className="hidden text-[13px] font-medium text-ink-400 group-hover:text-ink-900 sm:inline">
                    E-Mail schreiben →
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-lift p-8 md:p-10">
              <h3 className="text-2xl leading-tight tracking-tight text-ink-900">
                Kostenloses Erstgespräch
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                15 Minuten am Telefon. Wir klären, ob KI bei Ihrem Anliegen
                sinnvoll ist – und wenn ja, welche Leistung passt.
              </p>

              <ul className="mt-8 space-y-4 border-y border-ink-900/8 py-6">
                <li className="flex items-start gap-4">
                  <MapPin size={16} strokeWidth={1.9} className="mt-1 text-ink-400" />
                  <div>
                    <p className="text-[13.5px] font-medium text-ink-900">
                      Saarland & Umgebung
                    </p>
                    <p className="text-[13px] leading-relaxed text-ink-500">
                      Vor Ort bei Ihnen oder per Videocall.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock size={16} strokeWidth={1.9} className="mt-1 text-ink-400" />
                  <div>
                    <p className="text-[13.5px] font-medium text-ink-900">
                      Erreichbarkeit
                    </p>
                    <p className="text-[13px] leading-relaxed text-ink-500">
                      Mo – Fr, 09:00 – 18:00 Uhr. Anrufe außerhalb der Zeiten
                      rufen wir am selben Werktag zurück.
                    </p>
                  </div>
                </li>
              </ul>

              <Link
                href="tel:+4915168488999"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-4 text-[14.5px] font-medium text-white transition-all hover:bg-ink-700"
              >
                <Phone size={15} strokeWidth={2.4} />
                Jetzt anrufen
              </Link>
              <p className="mt-4 text-center text-[12px] leading-relaxed text-ink-400">
                Antwort spätestens am nächsten Werktag – meistens schneller.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
