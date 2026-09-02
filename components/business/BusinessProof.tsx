"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import KIStamp from "../KIStamp";
import { Globe, Layers, Zap, Boxes } from "lucide-react";

const PROOF = [
  {
    icon: Layers,
    title: "Eigene SaaS-Entwicklung",
    body:
      "Taskey ist eine eigene SaaS-Plattform für Gebäudereinigungsbetriebe im DACH-Raum: iOS-App (Swift, MVVM) und Web (Next.js), NFC-Zeiterfassung, Auftragskoordination, Rechnungslogik und DATEV-Export. Produktiv im Einsatz."
  },
  {
    icon: Globe,
    title: "Eigenes Marketing-Studio",
    body:
      "Fylu Marketing ist unser Webdesign- und Marketing-Studio in Saarlouis: konversionsstarke Websites, SEO, Google Ads und Software für Handwerk, Gastronomie, Kanzleien und Praxen im Saarland und darüber hinaus."
  },
  {
    icon: Zap,
    title: "Tägliche KI-Praxis",
    body:
      "Über zehn Stunden pro Tag arbeite ich mit KI-Werkzeugen, für Code, Content, Recherche und Automatisierung. Sie bekommen also keine Powerpoint-Beratung, sondern jemanden, der die Werkzeuge tatsächlich täglich beherrscht."
  },
  {
    icon: Boxes,
    title: "40+ produktive Web-Deployments",
    body:
      "Über vierzig live laufende Websites in Next.js und TypeScript für Handwerksbetriebe, Kanzleien, Praxen und Agenturen in Deutschland. Vercel-Deployments, DSGVO-konform, mehrsprachig wo nötig, SEO-optimiert."
  }
];

export default function BusinessProof() {
  return (
    <section id="ueber" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl border border-ink-900/8 bg-ink-100 shadow-lift">
                <KIStamp />
                <Image
                  src="/gruender-portrait.jpg"
                  alt="Michael Blass, Gründer von KBS und aktiver KI-Anwender"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[68%_center]"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,14,20,0) 55%, rgba(10,14,20,0.5) 100%)"
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-white/75">
                    Gründer · Aktiver KI-Anwender
                  </p>
                  <p className="mt-1 text-xl font-medium tracking-tight text-white sm:text-2xl">
                    Michael Blass
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="chip">Wer für Sie baut</span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Ein Partner,
                <br />
                <span className="display italic text-ink-500">
                  der KI täglich selbst einsetzt.
                </span>
              </h2>
              <p className="mt-8 text-[16px] leading-relaxed text-ink-500 sm:text-[17px]">
                KBS ist kein Beratungshaus, das über KI redet. Michael Blass
                betreibt seit 2024 das Webdesign-Studio Fylu Marketing in
                Saarlouis, entwickelt die SaaS-Plattform Taskey für die
                Gebäudereinigung im DACH-Raum und arbeitet täglich mehr als
                zehn Stunden aktiv mit KI-Werkzeugen.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PROOF.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <div className="card h-full p-5">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                          <Icon size={16} strokeWidth={2} className="text-accent-700" />
                        </div>
                        <p className="text-[13.5px] font-semibold tracking-tight text-ink-900">
                          {p.title}
                        </p>
                      </div>
                      <p className="mt-4 text-[13.5px] leading-relaxed text-ink-500">
                        {p.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
