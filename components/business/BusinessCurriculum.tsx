"use client";

import Link from "next/link";
import { ArrowUpRight, Award, Clock, GraduationCap } from "lucide-react";
import Reveal from "../Reveal";
import PlaceholderImage from "../PlaceholderImage";
import {
  COURSES,
  CATEGORY_LABEL,
  type CourseCategory
} from "@/lib/data/courses";

const CATEGORY_ORDER: CourseCategory[] = [
  "grundlagen",
  "rollen",
  "governance",
  "technisch"
];

const orderedCourses = [...COURSES].sort(
  (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
);

export default function BusinessCurriculum() {
  return (
    <section id="kurskatalog" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
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
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-500">
                Vier Kategorien vom Grundlagen-Tag bis zum zweitägigen
                Compliance-Officer-Kurs. Jeder Abschluss dokumentiert mit
                einem eigenen KBS-Zertifikat.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Category chip nav */}
        <Reveal delay={0.05}>
          <div className="mb-10 flex flex-wrap gap-2">
            {CATEGORY_ORDER.map((cat) => {
              const count = COURSES.filter((c) => c.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/business/kurskatalog#${cat}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
                >
                  {CATEGORY_LABEL[cat]}
                  <span className="text-[11px] text-ink-400">{count}</span>
                </Link>
              );
            })}
          </div>
        </Reveal>

        {/* All 12 course cards with images */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {orderedCourses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.03}>
              <Link
                href={`/business/kurskatalog#${c.slug}`}
                className="card group flex h-full flex-col overflow-hidden p-0 transition-all hover:shadow-lift"
              >
                <div className="relative">
                  <PlaceholderImage
                    src={c.image}
                    alt={c.title}
                    iconName="course"
                    aspect="aspect-[4/3]"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-700 shadow-soft backdrop-blur">
                    <Clock size={10} strokeWidth={2.4} />
                    {c.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                    {CATEGORY_LABEL[c.category]}
                  </p>
                  <h3 className="mt-2 text-[15.5px] font-medium leading-snug tracking-tight text-ink-900">
                    {c.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between border-t border-ink-900/8 pt-4">
                    <div className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-accent-700">
                      <Award size={12} strokeWidth={2.2} />
                      Mit Zertifikat
                    </div>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      className="text-ink-300 transition-colors group-hover:text-ink-900"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-white md:flex-row md:items-center md:p-10">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500/15">
                <Award
                  size={18}
                  strokeWidth={1.9}
                  className="text-accent-400"
                />
              </div>
              <div>
                <p className="text-[15px] font-medium">
                  Alle Kurse mit KBS-Zertifikat und Teilnahmenachweis
                </p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">
                  Inhouse, Remote oder als geschlossene Firmengruppe – kein
                  offenes Ticket, kein Massenformat.
                </p>
              </div>
            </div>
            <Link
              href="/business/kurskatalog"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-all hover:-translate-y-0.5"
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
