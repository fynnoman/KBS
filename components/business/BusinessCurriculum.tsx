"use client";

import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import Reveal from "../Reveal";
import { COURSES, CATEGORY_LABEL, type CourseCategory } from "@/lib/data/courses";

const CATEGORY_ORDER: CourseCategory[] = [
  "grundlagen",
  "rollen",
  "governance",
  "technisch"
];

export default function BusinessCurriculum() {
  return (
    <section id="kurskatalog" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="chip">
                <GraduationCap size={12} strokeWidth={2.4} />
                Kurskatalog
              </span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                {COURSES.length} Zertifikatskurse,
                <br />
                <span className="display italic text-ink-500">
                  buchbar für Ihr Team.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Vier Kategorien vom Grundlagen-Tag bis zum zweitägigen
              Compliance-Officer-Kurs. Jeder Abschluss dokumentiert mit einem
              KBS-Zertifikat.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORY_ORDER.map((cat, i) => {
            const items = COURSES.filter((c) => c.category === cat);
            return (
              <Reveal key={cat} delay={i * 0.05}>
                <Link
                  href={`/business/kurskatalog#${cat}`}
                  className="card group flex h-full flex-col p-6 md:p-7 transition-all hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                      {items.length} Kurse
                    </p>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                      className="text-ink-400 transition-colors group-hover:text-ink-900"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight text-ink-900 sm:text-xl">
                    {CATEGORY_LABEL[cat]}
                  </h3>
                  <ul className="mt-5 space-y-2">
                    {items.slice(0, 4).map((c) => (
                      <li
                        key={c.slug}
                        className="flex items-start gap-2 text-[13px] leading-snug text-ink-500"
                      >
                        <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
                        {c.title}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-white p-8 md:flex-row md:items-center md:p-10">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                <Award
                  size={18}
                  strokeWidth={1.9}
                  className="text-accent-700"
                />
              </div>
              <div>
                <p className="text-[15px] font-medium text-ink-900">
                  Alle Kurse mit KBS-Zertifikat und Teilnahmenachweis
                </p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-500">
                  Inhouse, Remote oder als geschlossene Firmengruppe – kein
                  offenes Ticket, kein Massenformat.
                </p>
              </div>
            </div>
            <Link
              href="/business/kurskatalog"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-[14px] font-medium text-white transition-all hover:-translate-y-0.5"
            >
              Zum vollständigen Katalog
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
