"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/config";

export default function BusinessHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-accent-100 opacity-30 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[560px] w-[560px] rounded-full bg-ink-100 opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/80 px-3.5 py-1.5 text-[11.5px] font-medium tracking-tight text-ink-500 backdrop-blur"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
          KBS Business · Für mittelständische Unternehmen und Konzerne
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[68px]"
            >
              KI im Unternehmen.
              <br />
              <span className="display italic text-ink-500">
                Ohne Ihre Daten zu verlieren.
              </span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl"
            >
              Wir installieren lokale KI-Systeme auf Ihrer Hardware, bauen
              maßgeschneiderte Assistenten für Ihr Firmenwissen und rollen
              KI-Workflows über ganze Abteilungen aus – DSGVO-konform, ohne
              Cloud-Zwang und mit klaren Festpreisen pro Phase.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} strokeWidth={2.4} />
                30-Min-Strategiegespräch buchen
              </a>
              <Link href="#use-cases" className="btn-ghost">
                Enterprise-Use-Cases ansehen
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:mt-4"
          >
            <div className="card-lift relative overflow-hidden p-8 md:p-9">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-accent-500/10 px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.2em] text-accent-700">
                <ShieldCheck size={12} strokeWidth={2.4} />
                DSGVO by default
              </div>
              <p className="text-[22px] leading-snug tracking-tight text-ink-900 sm:text-2xl">
                Ihre KI-Modelle laufen auf Ihrer Hardware. Keine Cloud, keine
                Datenübermittlung, keine Lizenz-Abhängigkeit.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink-900/8 pt-6">
                <div>
                  <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                    On-Premise
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink-900">
                    100%
                  </dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                    Break-Even
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink-900">
                    &lt; 6 Mon.
                  </dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-400">
                    Skaliert bis
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink-900">
                    500 MA
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {[
            "Festpreise pro Phase",
            "EU AI Act-konform",
            "Integration in bestehende Systeme",
            "Fester Ansprechpartner nach Go-Live"
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 rounded-2xl border border-ink-900/8 bg-white/70 px-4 py-3 text-[13px] font-medium text-ink-600 backdrop-blur-sm"
            >
              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
