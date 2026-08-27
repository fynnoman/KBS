import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  GraduationCap,
  Award,
  Clock,
  Users,
  MapPin,
  ArrowLeft,
  CalendarClock,
  CheckCircle2
} from "lucide-react";
import {
  COURSES,
  CATEGORY_LABEL,
  CATEGORY_INTRO,
  type CourseCategory
} from "@/lib/data/courses";
import { CALENDLY_URL, SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/business/kurskatalog`;
const DESCRIPTION =
  "Zwölf Zertifikatskurse für Unternehmen: KI-Grundlagen, rollenspezifische Vertiefungen, Führungs- und Governance-Formate sowie technische Aufbaukurse. Jeweils mit KBS-Zertifikat, buchbar für Ihr Team.";

export const metadata: Metadata = {
  title: "KBS Kurskatalog · Zertifikatskurse für Unternehmen",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS – KI-Beratung Saar",
    title: "KBS Kurskatalog · Zertifikatskurse für Unternehmen",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KBS Kurskatalog – Zertifikatskurse für Unternehmen"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KBS Kurskatalog · Zertifikatskurse",
    description: DESCRIPTION,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  keywords: [
    "KI Seminar Unternehmen",
    "KI Schulung mit Zertifikat",
    "EU AI Act Schulung",
    "Prompt Engineering Kurs",
    "KI Weiterbildung Mitarbeiter",
    "ChatGPT Schulung Unternehmen",
    "KI Kurskatalog",
    "Zertifizierter KI-Anwender",
    "Chief AI Officer Ausbildung",
    "Lokale KI IT-Schulung"
  ]
};

const CATEGORY_ORDER: CourseCategory[] = [
  "grundlagen",
  "rollen",
  "governance",
  "technisch"
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...COURSES.map((c) => ({
      "@type": "Course",
      "@id": `${PAGE_URL}#${c.slug}`,
      name: c.title,
      description: c.summary,
      provider: { "@id": `${SITE_URL}/#business` },
      educationalLevel: "Professional",
      audience: {
        "@type": "BusinessAudience",
        audienceType: c.audience
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: c.formats.join(", "),
        courseWorkload: c.duration
      }
    })),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Business",
          item: `${SITE_URL}/business`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kurskatalog",
          item: PAGE_URL
        }
      ]
    }
  ]
};

export default function CourseCatalogPage() {
  return (
    <main className="relative bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              <ArrowLeft size={14} strokeWidth={2.2} />
              Zurück zu KBS Business
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <span className="chip">
                <GraduationCap size={12} strokeWidth={2.4} />
                Kurskatalog
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                {COURSES.length} Zertifikatskurse
              </span>
            </div>
            <h1 className="mt-6 text-5xl leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-7xl">
              Zertifikatskurse
              <br />
              <span className="display italic text-ink-500">
                für Ihre Belegschaft.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500">
              Jeder Kurs mündet in einem KBS-Zertifikat. Ausschließlich inhouse
              oder in geschlossenen Firmengruppen – kein offener Kalender, kein
              Massenformat. Grundlagen bis Governance, Rolle bis Technik.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category anchor nav */}
      <section className="border-y border-ink-900/8 bg-ink-50/60">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4">
          {CATEGORY_ORDER.map((cat) => {
            const count = COURSES.filter((c) => c.category === cat).length;
            return (
              <a
                key={cat}
                href={`#${cat}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
              >
                {CATEGORY_LABEL[cat]}
                <span className="text-[11px] text-ink-400">{count}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Courses grouped by category */}
      {CATEGORY_ORDER.map((cat) => {
        const items = COURSES.filter((c) => c.category === cat);
        return (
          <section
            key={cat}
            id={cat}
            className="relative py-20 md:py-28"
          >
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <div className="mb-12 max-w-3xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-400">
                    Kategorie
                  </p>
                  <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                    {CATEGORY_LABEL[cat]}
                  </h2>
                  <p className="mt-5 text-[15.5px] leading-relaxed text-ink-500">
                    {CATEGORY_INTRO[cat]}
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {items.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 0.04}>
                    <article
                      id={c.slug}
                      className="card scroll-mt-32 h-full p-7 md:p-8"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl leading-snug tracking-tight text-ink-900 sm:text-2xl">
                          {c.title}
                        </h3>
                        <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                          <Award
                            size={16}
                            strokeWidth={1.9}
                            className="text-accent-700"
                          />
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-ink-50 px-3 py-1 text-[12px] font-medium text-ink-700">
                          <Clock size={11} strokeWidth={2.2} />
                          {c.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-ink-50 px-3 py-1 text-[12px] font-medium text-ink-700">
                          <Users size={11} strokeWidth={2.2} />
                          {c.audience}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-ink-50 px-3 py-1 text-[12px] font-medium text-ink-700">
                          <MapPin size={11} strokeWidth={2.2} />
                          {c.formats.join(" · ")}
                        </span>
                      </div>

                      <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500">
                        {c.summary}
                      </p>

                      <div className="mt-6 border-t border-ink-900/8 pt-5">
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

                      <div className="mt-6 flex items-center gap-2 rounded-2xl bg-ink-900 px-4 py-3">
                        <Award
                          size={14}
                          strokeWidth={2}
                          className="text-accent-400"
                        />
                        <p className="text-[13px] font-medium text-white">
                          Zertifikat: {c.certificate}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-ink-900/10 bg-ink-900 p-10 text-white md:p-14">
              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto] md:gap-12">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
                    Beratung &amp; Buchung
                  </p>
                  <h2 className="mt-3 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    Passenden Kurs auswählen –
                    <br />
                    <span className="display italic text-white/70">
                      oder ein eigenes Curriculum planen.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-white/70">
                    In einem 30-minütigen Videocall sortieren wir gemeinsam,
                    welche Formate für Ihre Belegschaft die schnellste Wirkung
                    erzielen. Auf Wunsch stellen wir mehrere Kurse zu einem
                    mehrstufigen Programm zusammen.
                  </p>
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-[14px] font-medium text-ink-900 transition-all hover:-translate-y-0.5"
                >
                  <CalendarClock size={15} strokeWidth={2.4} />
                  Beratungstermin buchen
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
