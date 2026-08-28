"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Clock,
  GraduationCap,
  Radio,
  Users,
  MapPin,
  CheckCircle2,
  Mail
} from "lucide-react";
import Reveal from "../Reveal";
import PlaceholderImage from "../PlaceholderImage";
import {
  COURSES,
  CATEGORY_LABEL,
  CATEGORY_INTRO,
  type CourseCategory
} from "@/lib/data/courses";
import { EMAIL } from "@/lib/config";

const CATEGORY_ORDER: CourseCategory[] = [
  "grundlagen",
  "rollen",
  "governance",
  "technisch"
];

function buildCourseMailto(title: string): string {
  const subject = `Anfrage zu KBS-Schulung: ${title}`;
  const body = `Guten Tag KBS-Team,

ich interessiere mich für die Schulung "${title}" und möchte gerne mehr über Ablauf, Termine und Konditionen erfahren.

Angaben zu unserem Unternehmen:
- Firma:
- Anzahl Teilnehmender:
- Wunschzeitraum:
- Format (Inhouse / Remote):

Vielen Dank und mit freundlichen Grüßen`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function BusinessCurriculum() {
  return (
    <section id="kurskatalog" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">
                  <GraduationCap size={12} strokeWidth={2.4} />
                  Schulungen
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/25 bg-accent-500/10 px-2.5 py-1 text-[11px] font-medium tracking-tight text-accent-800">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
                  </span>
                  Live-Format
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  {COURSES.length} Schulungen
                </span>
              </div>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                KI wirkt erst,
                <br />
                <span className="display italic text-ink-500">
                  wenn Ihr Team sie beherrscht.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-500">
                Wir liefern nicht nur Systeme, sondern befähigen Ihre
                Belegschaft. Ausschließlich inhouse oder in geschlossenen
                Firmengruppen – kein offener Kalender, kein Massenformat.
                Grundlagen bis Governance, Rolle bis Technik.
              </p>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Alle Schulungen sind Live-Kurse. Präsenz vor Ort oder Remote im
              Videocall in Echtzeit – geleitet, mit Rückfragen und Übungen.
              Keine Aufzeichnungen, keine Self-Paced-Videos.
            </p>
          </div>
        </Reveal>

        {CATEGORY_ORDER.map((cat) => {
          const items = COURSES.filter((c) => c.category === cat);
          return (
            <div key={cat} id={cat} className="mb-16 scroll-mt-32 last:mb-0">
              <Reveal>
                <div className="mb-8 max-w-3xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-400">
                    Kategorie · {items.length} Schulungen
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight tracking-tight text-ink-900 sm:text-3xl">
                    {CATEGORY_LABEL[cat]}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {CATEGORY_INTRO[cat]}
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {items.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 0.03}>
                    <article
                      id={c.slug}
                      className="card scroll-mt-32 flex h-full flex-col overflow-hidden p-0"
                    >
                      <div className="relative">
                        <PlaceholderImage
                          src={c.image}
                          alt={c.title}
                          iconName="course"
                          aspect="aspect-[16/9]"
                          className="border-b border-ink-900/8"
                        />
                        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-accent-500/95 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-white shadow-soft backdrop-blur">
                          <Radio size={10} strokeWidth={2.4} />
                          Live
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-7 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-lg leading-snug tracking-tight text-ink-900 sm:text-xl">
                          {c.title}
                        </h4>
                        <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                          <Award
                            size={16}
                            strokeWidth={1.9}
                            className="text-accent-700"
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/25 bg-accent-500/10 px-2.5 py-1 text-[11.5px] font-medium text-accent-800">
                          <Radio size={11} strokeWidth={2.2} />
                          Live-Kurs
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-ink-50 px-2.5 py-1 text-[11.5px] font-medium text-ink-700">
                          <Clock size={11} strokeWidth={2.2} />
                          {c.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-ink-50 px-2.5 py-1 text-[11.5px] font-medium text-ink-700">
                          <Users size={11} strokeWidth={2.2} />
                          {c.audience}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-ink-50 px-2.5 py-1 text-[11.5px] font-medium text-ink-700">
                          <MapPin size={11} strokeWidth={2.2} />
                          {c.formats.join(" · ")}
                        </span>
                      </div>

                      <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                        {c.summary}
                      </p>

                      <div className="mt-5 border-t border-ink-900/8 pt-5">
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                          Sie nehmen mit
                        </p>
                        <ul className="mt-3 space-y-2">
                          {c.learnings.map((l) => (
                            <li
                              key={l}
                              className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-700"
                            >
                              <CheckCircle2
                                size={14}
                                strokeWidth={2}
                                className="mt-0.5 flex-shrink-0 text-accent-700"
                              />
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="flex items-center gap-2 rounded-2xl bg-ink-900 px-4 py-3">
                          <Award
                            size={14}
                            strokeWidth={2}
                            className="text-accent-400"
                          />
                          <p className="text-[13px] font-medium text-white">
                            Zertifikat: {c.certificate}
                          </p>
                        </div>
                        <a
                          href={buildCourseMailto(c.title)}
                          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-[13px] font-medium text-ink-900 transition-all hover:border-ink-900/25 hover:-translate-y-0.5"
                        >
                          <Mail size={13} strokeWidth={2.2} />
                          Direkte E-Mail zu dieser Schulung
                        </a>
                      </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}

        <Reveal delay={0.15}>
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
                  Alle Schulungen mit KBS-Zertifikat und Teilnahmenachweis
                </p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">
                  Passenden Kurs auswählen oder ein eigenes Curriculum planen.
                  In einem 30-minütigen Videocall sortieren wir gemeinsam,
                  welche Formate für Ihre Belegschaft die schnellste Wirkung
                  erzielen.
                </p>
              </div>
            </div>
            <Link
              href="/business/kurskatalog"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-all hover:-translate-y-0.5"
            >
              Zur eigenen Kurskatalog-Seite
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
