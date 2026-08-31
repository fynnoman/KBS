"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import KIStamp from "../KIStamp";

export default function BusinessHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-accent-100 opacity-30 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[560px] w-[560px] rounded-full bg-ink-100 opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-3 rounded-sm border border-ink-900/15 bg-white/85 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-600 backdrop-blur"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
          <span className="text-ink-900">KBS Business</span>
          <span aria-hidden className="h-3 w-px bg-ink-900/25" />
          <span>Für mittelständische Unternehmen und Konzerne</span>
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
              maßgeschneiderte Assistenten für Ihr Firmenwissen, rollen
              KI-Workflows über ganze Abteilungen aus und schulen Ihre
              Belegschaft mit Live-Kursen, DSGVO-konform, ohne Cloud-Zwang
              und mit klaren Festpreisen pro Phase.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="#termin" className="btn-primary">
                <Calendar size={16} strokeWidth={2.4} />
                Strategiegespräch buchen
              </Link>
              <Link href="/softwareloesungen" className="btn-ghost">
                Softwarelösungen
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:mt-4"
          >
            {/* Hero image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-ink-900/15 bg-ink-100 shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
              <KIStamp />
              <Image
                src="/business-office.png"
                alt="Modernes Büro, konzentrierte KI-gestützte Arbeit"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,14,20,0) 40%, rgba(10,14,20,0.65) 100%)"
                }}
              />

              {/* Floating DSGVO badge on top */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-sm border border-ink-900/15 bg-white/90 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-700 backdrop-blur">
                <ShieldCheck size={12} strokeWidth={2.4} className="text-accent-700" />
                DSGVO by default
              </div>

              {/* KPI overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/75 sm:text-[10.5px]">
                  Enterprise-KI, lokal betrieben
                </p>
                <dl className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                  <div>
                    <dt className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[9.5px] sm:tracking-[0.14em]">
                      On-Premise
                    </dt>
                    <dd className="mt-0.5 text-base font-semibold tracking-tight text-white sm:text-xl">
                      100%
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[9.5px] sm:tracking-[0.14em]">
                      Break-Even
                    </dt>
                    <dd className="mt-0.5 text-base font-semibold tracking-tight text-white sm:text-xl">
                      &lt; 6 Mon.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[9.5px] sm:tracking-[0.14em]">
                      Skaliert
                    </dt>
                    <dd className="mt-0.5 text-base font-semibold tracking-tight text-white sm:text-xl">
                      500 MA
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-2 gap-2 sm:mt-16 sm:grid-cols-4 md:mt-20"
        >
          {[
            "Festpreise pro Phase",
            "EU AI Act-konform",
            "Live-Schulungen für Ihr Team",
            "Fester Ansprechpartner nach Go-Live"
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 rounded-sm border border-ink-900/12 bg-white/80 px-4 py-3 text-[13px] font-medium text-ink-600 backdrop-blur-sm"
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
