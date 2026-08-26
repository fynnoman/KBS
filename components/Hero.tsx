"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import KIStamp from "./KIStamp";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-ink-100 opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left: text */}
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/80 px-3.5 py-1.5 text-[11.5px] font-medium tracking-tight text-ink-500 backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
              </span>
              Neu im Saarland · Persönlicher KI-Ansprechpartner
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[68px]"
            >
              KI verstehen.
              <br />
              <span className="display italic text-ink-500">Einfach machen.</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl"
            >
              Sie wissen nicht, was Sie mit KI machen können? Wir zeigen es Ihnen.
              Für Privatpersonen, Selbstständige und kleine Unternehmen im Saarland.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="tel:+4915168488999" className="btn-primary">
                <Phone size={16} strokeWidth={2.4} />
                Jetzt anrufen
              </Link>
              <Link href="#kontakt" className="btn-ghost">
                Kostenloses Erstgespräch
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
            </motion.div>
          </div>

          {/* Right: image card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl border border-ink-900/8 bg-ink-100 shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
              <KIStamp />
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
                alt="Modernes Büro – Ort der KI-Beratung im Saarland"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,14,20,0) 45%, rgba(10,14,20,0.55) 100%)"
                }}
              />

              {/* Floating stat pill */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                Vor Ort · im Saarland
              </div>

              {/* Bottom caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                  Wir kommen zu Ihnen
                </p>
                <p className="mt-2 text-lg leading-snug tracking-tight text-white sm:text-xl">
                  KI-Hilfe, die Sie am Küchentisch oder im Büro verstehen.
                </p>
              </div>
            </div>

            {/* Small floating card overlay */}
            <div className="absolute -bottom-6 -left-4 hidden w-[220px] rounded-2xl border border-ink-900/8 bg-white p-4 shadow-card sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                  <Phone size={16} strokeWidth={2} className="text-accent-700" />
                </div>
                <div>
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                    Erstgespräch
                  </p>
                  <p className="text-[14px] font-medium text-ink-900">
                    Kostenlos & unverbindlich
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust row below the two columns */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-1 gap-2 sm:grid-cols-3"
        >
          {[
            "Kein Fachchinesisch",
            "Antwort binnen 24 h",
            "Vor Ort im Saarland"
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-2xl border border-ink-900/8 bg-white/70 px-4 py-3 text-[13.5px] font-medium text-ink-600 backdrop-blur-sm"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
