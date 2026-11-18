"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import KIStamp from "../KIStamp";

export default function BusinessHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="animate-aurora absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        <div
          className="animate-aurora absolute -right-40 top-40 h-[560px] w-[560px] rounded-full bg-ink-100 opacity-60 blur-3xl"
          style={{ animationDelay: "-6s", animationDuration: "22s" }}
        />
        <div
          className="animate-aurora absolute left-1/3 top-72 h-[380px] w-[380px] rounded-full bg-accent-200 opacity-25 blur-3xl"
          style={{ animationDelay: "-12s", animationDuration: "26s" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-3 rounded-sm border border-ink-900/15 bg-white/85 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-600 backdrop-blur"
        >
          <span className="pulse-dot" aria-hidden />
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
              Belegschaft mit Live-Kursen, DSGVO-konform und ohne
              Cloud-Zwang.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="/softwareloesungen#idee" className="btn-primary glow-cta">
                <Sparkles size={16} strokeWidth={2.4} />
                Ihre KI-Idee schildern
                <ArrowRight size={15} strokeWidth={2.2} />
              </Link>
              <Link href="#termin" className="btn-ghost">
                <Calendar size={16} strokeWidth={2.2} />
                Strategiegespräch buchen
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:mt-4"
          >
            {/* Soft accent glow behind the frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-100/60 via-transparent to-ink-100/40 opacity-80 blur-2xl"
            />
            {/* Hero image, gently floating with a rotating glow ring */}
            <div
              className={`glow-ring relative aspect-[4/3] w-full overflow-hidden rounded-md border border-ink-900/15 bg-ink-100 shadow-lift sm:aspect-[5/4] lg:aspect-[4/5] ${reduce ? "" : "animate-float"}`}
            >
              <KIStamp />
              <Image
                src="/business-office.png"
                alt="Konzentrierte Arbeit am MacBook in einem modernen Büro"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
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
            "Klare Bausteine pro Phase",
            "EU AI Act-konform",
            "Live-Schulungen für Ihr Team",
            "Fester Ansprechpartner nach Go-Live"
          ].map((item) => (
            <div
              key={item}
              className="glow-edge flex items-start gap-2 rounded-sm border border-ink-900/12 bg-white/80 px-4 py-3 text-[13px] font-medium text-ink-600 backdrop-blur-sm transition-colors hover:border-accent-500/40"
            >
              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500 shadow-[0_0_8px_rgba(88,192,56,0.6)]" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
