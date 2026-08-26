"use client";

import Reveal from "../Reveal";
import { Cpu, Lock, Wallet, Zap } from "lucide-react";

const PILLARS = [
  {
    icon: Lock,
    title: "Datenhoheit",
    body:
      "Ihre Anfragen und Antworten verlassen Ihre Infrastruktur nicht. Kein Cloud-Sync, kein API-Call an OpenAI, kein Modellanbieter-Zugriff. DSGVO-Konformität ohne Kompromiss."
  },
  {
    icon: Wallet,
    title: "Klare Kostenkontrolle",
    body:
      "Einmaliger Hardware-Investment statt monatlicher API-Kosten pro Nutzer. Bei aktiven Teams rechnet sich ein Mac Mini M4 Pro (48–64 GB) oft in unter sechs Monaten."
  },
  {
    icon: Zap,
    title: "Volle Geschwindigkeit",
    body:
      "Antwortzeiten unter zwei Sekunden bei üblichen Anfragen. Kein Rate-Limit, kein Warten bei Peak-Zeiten, keine Abhängigkeit von der Verfügbarkeit externer Anbieter."
  },
  {
    icon: Cpu,
    title: "Passende Modelle",
    body:
      "Llama 3.3 70B, Qwen 2.5, Mistral Large oder deutsche Modelle wie Teuken. Wir wählen das Modell nach Ihrer Aufgabe – nicht nach dem lautesten Marketing."
  }
];

export default function LocalAIFeature() {
  return (
    <section id="lokale-ki" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-4xl border border-ink-900/10 bg-ink-900 px-8 py-16 text-white sm:px-14 sm:py-20 md:px-20 md:py-24">
          <div className="pointer-events-none absolute -right-40 -top-40 hidden h-[480px] w-[480px] rounded-full bg-accent-500/15 blur-3xl md:block" />
          <div className="pointer-events-none absolute -left-40 -bottom-40 hidden h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-3xl md:block" />

          <Reveal>
            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Signature-Produkt · Lokale KI
              </span>
              <h2 className="mt-6 text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                Ein Mac Mini im Serverschrank.
                <br />
                <span className="display italic text-white/70">
                  Ihre komplette KI-Infrastruktur.
                </span>
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Wir installieren, konfigurieren und wartungsfähig übergeben ein
                lokales KI-System, das in Ihre bestehende IT passt. Ideal für
                Kanzleien, Praxen, Behörden und Konzerne mit sensiblen Daten.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="glass-dark h-full rounded-3xl p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      <Icon size={16} strokeWidth={2} className="text-accent-400" />
                    </div>
                    <h3 className="mt-6 text-lg font-medium tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="relative mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
              <p className="max-w-2xl text-[14px] leading-relaxed text-white/60">
                Passt genauso für dezidierte Server-Hardware (AMD EPYC + NVIDIA
                RTX 6000 Ada) für größere Konzern-Setups mit paralleler Nutzung
                durch hunderte Mitarbeiter.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
