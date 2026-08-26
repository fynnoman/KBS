"use client";

import Image from "next/image";
import { Code2, Zap, Sparkles, Globe } from "lucide-react";
import Reveal from "./Reveal";
import KIStamp from "./KIStamp";

const PROOF = [
  {
    icon: Sparkles,
    label: "Eigene SaaS",
    value: "Taskey · iOS + Web"
  },
  {
    icon: Globe,
    label: "Eigenes Studio",
    value: "Fylu Marketing · Saarlouis"
  },
  {
    icon: Zap,
    label: "KI-Nutzung",
    value: "täglich > 10 Stunden"
  },
  {
    icon: Code2,
    label: "40+ Live-Websites",
    value: "Next.js · TypeScript"
  }
];

export default function About() {
  return (
    <section id="ueber" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Portrait */}
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl border border-ink-900/8 bg-ink-100 shadow-lift">
                <KIStamp />
                <Image
                  src="/fynn-portrait.jpg"
                  alt="Fynn Schulz – Gründer von KBS im Gespräch mit Kunden"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[68%_center]"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,14,20,0) 55%, rgba(10,14,20,0.45) 100%)"
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-white/70">
                    Gründer
                  </p>
                  <p className="mt-1 text-xl font-medium tracking-tight text-white sm:text-2xl">
                    Fynn Schulz
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-ink-900/8 bg-white px-4 py-3 shadow-card sm:block lg:-right-6 lg:-top-6">
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Aus dem Saarland
                </p>
                <p className="mt-1 text-[14px] font-medium text-ink-900">
                  Für das Saarland
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <span className="chip">Über KBS</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Wer Ihnen KI zeigt,
                <br />
                <span className="display italic text-ink-500">
                  sollte sie auch selbst nutzen.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-600 sm:text-[17px]">
                <p>
                  Ich bin <span className="font-medium text-ink-900">Fynn Schulz</span>.
                  Neben KBS führe ich <span className="font-medium text-ink-900">
                    Fylu Marketing
                  </span>{" "}
                  – ein Webdesign- und Marketing-Studio aus Saarlouis für
                  konversionsstarke Websites, SEO und Google Ads.
                </p>
                <p>
                  Und ich entwickle <span className="font-medium text-ink-900">Taskey</span>,
                  eine SaaS-Plattform für Gebäudereinigungsbetriebe im
                  DACH-Raum: iOS-App und Web, NFC-Zeiterfassung, Auftrags-
                  koordination und DATEV-Export – damit die Chefs das Telefon
                  wieder weglegen können.
                </p>
                <p>
                  Bei meiner täglichen Arbeit nutze ich{" "}
                  <span className="font-medium text-ink-900">KI mehr als zehn Stunden am Tag</span>
                  {" "}– für Code, Content, Recherche, Analyse und Automatisierung.
                  Dazu über vierzig produktive Websites in Next.js und
                  TypeScript, die live bei Handwerksbetrieben, Kanzleien und
                  Agenturen in Deutschland laufen.
                </p>
                <p className="text-ink-700">
                  Wenn ich Ihnen KI zeige, dann weil ich sie täglich selbst
                  nutze – und weiß, was funktioniert und was nicht.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROOF.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.label}
                      className="flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-white px-4 py-4"
                    >
                      <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10">
                        <Icon size={16} strokeWidth={2} className="text-accent-700" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                          {p.label}
                        </p>
                        <p className="mt-1 text-[14px] font-medium text-ink-900">
                          {p.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
