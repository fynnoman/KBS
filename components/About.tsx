"use client";

import Image from "next/image";
import { Code2, Smartphone, Sparkles, Globe } from "lucide-react";
import Reveal from "./Reveal";

const PROOF = [
  {
    icon: Sparkles,
    label: "Eigene SaaS",
    value: "Taskey · iOS · Android · Web"
  },
  {
    icon: Smartphone,
    label: "macOS-App mit KI",
    value: "Fylu · OpenAI + Vision OCR"
  },
  {
    icon: Globe,
    label: "40+ Live-Websites",
    value: "Next.js · TypeScript"
  },
  {
    icon: Code2,
    label: "Native Apps",
    value: "SwiftUI · Kotlin · Prisma"
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
                  sollte sie auch selbst bauen.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-600 sm:text-[17px]">
                <p>
                  Ich bin <span className="font-medium text-ink-900">Fynn Schulz</span>.
                  Neben KBS entwickle ich <span className="font-medium text-ink-900">Taskey</span>{" "}
                  – eine eigene SaaS-Plattform für Handwerksbetriebe mit iOS-,
                  Android- und Web-App.
                </p>
                <p>
                  Und <span className="font-medium text-ink-900">Fylu</span>: eine
                  macOS-Anwendung für Agenturen, in der OpenAI-Modelle deutsche
                  Rechnungen aus Fließtext auslesen und die Vision-Framework-OCR
                  gescannte PDFs in strukturierte Positionen zerlegt.
                </p>
                <p>
                  Über vierzig produktive Websites in{" "}
                  <span className="font-medium text-ink-900">Next.js und TypeScript</span>{" "}
                  laufen live bei Handwerksbetrieben, Kanzleien und Agenturen in
                  Deutschland.
                </p>
                <p className="text-ink-700">
                  Wenn ich Ihnen KI zeige, dann weil ich sie selbst jeden Tag baue
                  und benutze – und weil ich weiß, was funktioniert und was nicht.
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
