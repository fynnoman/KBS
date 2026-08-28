"use client";

import Link from "next/link";
import { ArrowUpRight, GraduationCap, Boxes } from "lucide-react";
import Reveal from "./Reveal";

export default function HomeCatalogsNote() {
  return (
    <section className="relative pt-4 pb-16 md:pt-6 md:pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-3xl border border-ink-900/10 bg-white p-6 md:flex-row md:items-center md:p-7">
            <p className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-ink-400 md:min-w-[130px]">
              Für Unternehmen
            </p>
            <Link
              href="/business#kurskatalog"
              className="group inline-flex items-center gap-2.5 rounded-full border border-ink-900/10 bg-ink-50 px-4 py-2.5 text-[13.5px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
            >
              <GraduationCap size={14} strokeWidth={2.2} />
              12 Zertifikatskurse
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-500/15 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-accent-800">
                <span className="relative inline-flex h-1 w-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-70" />
                  <span className="relative inline-flex h-1 w-1 rounded-full bg-accent-500" />
                </span>
                Live
              </span>
              <ArrowUpRight
                size={13}
                strokeWidth={2.2}
                className="text-ink-400 transition-colors group-hover:text-ink-900"
              />
            </Link>
            <Link
              href="/business#loesungen"
              className="group inline-flex items-center gap-2.5 rounded-full border border-ink-900/10 bg-ink-50 px-4 py-2.5 text-[13.5px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
            >
              <Boxes size={14} strokeWidth={2.2} />
              12 Software-Lösungen
              <ArrowUpRight
                size={13}
                strokeWidth={2.2}
                className="text-ink-400 transition-colors group-hover:text-ink-900"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
