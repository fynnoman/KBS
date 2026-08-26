"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const QUOTES = [
  "Ich weiß nicht, wie ich ChatGPT richtig benutze.",
  "Kann KI mir bei meiner Büroarbeit helfen?",
  "Meine Mitarbeiter nutzen ChatGPT, aber jeder macht es anders.",
  "Welche KI ist für uns überhaupt sinnvoll?",
  "Kann ich damit Angebote, E-Mails oder Dokumentationen erstellen?",
  "Ich habe eine komische KI-Nachricht bekommen – ist das echt?"
];

export default function QuoteWall() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <span className="chip">Klingt bekannt?</span>
            <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
              Das sind die Fragen,
              <br />
              <span className="display italic text-ink-500">
                mit denen Menschen uns anrufen.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q} delay={i * 0.05}>
              <div className="card h-full p-7">
                <div className="mb-4 text-4xl leading-none text-ink-200 display">
                  &ldquo;
                </div>
                <p className="text-[16.5px] leading-relaxed text-ink-700">
                  {q}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-white md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                Kein Problem
              </p>
              <p className="mt-3 text-2xl leading-tight tracking-tight sm:text-3xl">
                Sie müssen nicht wissen, welches Produkt Sie brauchen. Wir
                finden das im Erstgespräch heraus.
              </p>
            </div>
            <Link
              href="tel:+4915168488999"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-transform hover:-translate-y-0.5"
            >
              <Phone size={15} strokeWidth={2.4} />
              Jetzt anrufen
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
