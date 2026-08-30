"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

type InlineCTAProps = {
  eyebrow: string;
  title: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
};

export default function InlineCTA({
  eyebrow,
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  secondaryExternal
}: InlineCTAProps) {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-white md:flex-row md:items-center md:p-10">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                {eyebrow}
              </p>
              <p className="mt-3 text-2xl leading-tight tracking-tight sm:text-3xl">
                {title}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-transform hover:-translate-y-0.5"
              >
                {primaryLabel}
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
              {secondaryLabel && secondaryHref && (
                secondaryExternal ? (
                  <a
                    href={secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {secondaryLabel}
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </a>
                ) : (
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {secondaryLabel}
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </Link>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
