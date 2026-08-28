"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import clsx from "clsx";
import useIsMobile from "@/lib/useIsMobile";
import KIStamp from "./KIStamp";

export default function ScrollScaleBackground({
  src,
  alt,
  eyebrow,
  title,
  intro,
  children,
  className,
  overlayGradient = "linear-gradient(180deg, rgba(10,14,20,0.15) 0%, rgba(10,14,20,0.55) 55%, rgba(10,14,20,0.82) 100%)"
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: string;
  children?: ReactNode;
  className?: string;
  overlayGradient?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const skipMotion = reduce || isMobile;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.15, 0.55], [0.82, 1]);
  const radius = useTransform(scrollYProgress, [0.15, 0.55], [40, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.9], [30, 0]);

  // Mobile: single static section, no sticky, no transforms — huge perf win.
  if (skipMotion) {
    return (
      <section
        className={clsx(
          "relative flex min-h-[70vh] w-full items-end overflow-hidden bg-ink-900",
          className
        )}
      >
        <KIStamp position="top-right" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: overlayGradient }}
        />
        <div className="relative z-10 flex flex-col items-start px-6 pb-14 pt-24 sm:px-10">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/95">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="max-w-3xl text-3xl leading-[1.05] tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
              {intro}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={clsx("relative", className)}
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 flex h-screen w-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, borderRadius: radius, willChange: "transform" }}
          className="relative h-full w-full overflow-hidden bg-ink-900 shadow-lift"
        >
          <KIStamp position="top-right" />
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
          />

          <motion.div
            style={{ opacity: overlayOpacity, background: overlayGradient }}
            className="pointer-events-none absolute inset-0"
          />

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute inset-x-0 bottom-0 flex flex-col items-start px-8 pb-16 sm:px-16 sm:pb-24 lg:px-24"
          >
            {eyebrow && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/95 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="max-w-4xl text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {intro}
              </p>
            )}
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
