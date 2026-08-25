"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PromiseBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-4xl border border-ink-900/10 bg-ink-900 px-8 py-24 text-white sm:px-16 sm:py-32">
          <motion.div
            style={reduce ? undefined : { y }}
            className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl"
          />
          <motion.div
            style={reduce ? undefined : { y: y2 }}
            className="pointer-events-none absolute -left-40 -bottom-40 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Unser Kernversprechen
            </p>
            <h2 className="text-4xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              Sie müssen kein
              <br />
              KI-Experte sein.
              <br />
              <span className="display italic text-white/70">
                Dafür gibt es uns.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Wenn im Saarland jemand bei KI nicht weiterkommt, soll er
              KBS kennen. Das ist unser Ziel – nicht mehr und nicht weniger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
