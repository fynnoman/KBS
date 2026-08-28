import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  Boxes,
  ArrowLeft,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Layers,
  Users,
  Cog,
  Shield
} from "lucide-react";
import {
  MODULES,
  MODULE_CATEGORY_LABEL,
  MODULE_CATEGORY_INTRO,
  type ModuleCategory
} from "@/lib/data/modules";
import { COURSES } from "@/lib/data/courses";
import { CALENDLY_URL, SITE_URL } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/business/loesungen`;
const DESCRIPTION =
  "Zwölf einsatzfertige KBS-Software-Lösungen in Klarsprache: zentraler KI-Zugang, Firmen-Wissens-Assistent, Assistenten für Vertrieb, Marketing, Buchhaltung und Personal sowie Steuerungs-Werkzeuge für die EU-KI-Verordnung. Alles aus produktiver Beratungspraxis.";

export const metadata: Metadata = {
  title: "KBS Software-Lösungen · Aus produktiver Praxis",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS – KI-Beratung Saar",
    title: "KBS Software-Lösungen · Aus produktiver Praxis",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KBS Software-Lösungen – Aus produktiver Praxis"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KBS Software-Lösungen",
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
    "KI Software-Lösungen Unternehmen",
    "Firmen-Wissens-Assistent",
    "Zentraler KI-Zugang",
    "KI-Vorlagen-Bibliothek",
    "Beleg-Erfassung DATEV",
    "Support-Sortierung KI",
    "KI-Telefonannahme deutsch",
    "KI-Register EU-KI-Verordnung",
    "KI-Auswertung Unternehmen",
    "KBS Software-Lösungen",
    "Enterprise KI Lösung",
    "KI Baustein Firma"
  ]
};

const CATEGORY_ORDER: ModuleCategory[] = [
  "infrastruktur",
  "fachfunktion",
  "automation",
  "governance"
];

const CATEGORY_ICON: Record<ModuleCategory, typeof Layers> = {
  infrastruktur: Layers,
  fachfunktion: Users,
  automation: Cog,
  governance: Shield
};

type Theme = {
  sectionBg: string;
  ambient: string | null;
  eyebrow: string;
  categoryLabel: string;
  title: string;
  intro: string;
  card: string;
  cardTitle: string;
  cardTagline: string;
  cardSummary: string;
  featureText: string;
  checkIcon: string;
  courseLink: string;
  divider: string;
  iconWrap: string;
  iconColor: string;
};

const CATEGORY_THEME: Record<ModuleCategory, Theme> = {
  infrastruktur: {
    sectionBg: "",
    ambient: null,
    eyebrow: "text-accent-700",
    categoryLabel:
      "border-accent-500/25 bg-accent-500/10 text-accent-800",
    title: "text-ink-900",
    intro: "text-ink-500",
    card: "border-ink-900/10 bg-white shadow-soft hover:shadow-lift",
    cardTitle: "text-ink-900",
    cardTagline: "text-accent-700",
    cardSummary: "text-ink-500",
    featureText: "text-ink-700",
    checkIcon: "text-accent-700",
    courseLink:
      "border-ink-900/10 bg-ink-50 text-ink-700 hover:border-ink-900/25 hover:text-ink-900",
    divider: "border-ink-900/8",
    iconWrap: "border-accent-500/25 bg-accent-500/10",
    iconColor: "text-accent-700"
  },
  fachfunktion: {
    sectionBg: "bg-ink-900",
    ambient:
      "radial-gradient(600px 200px at 20% 0%, rgba(88,192,56,0.22), transparent 60%)",
    eyebrow: "text-accent-400",
    categoryLabel:
      "border-accent-400/30 bg-accent-500/15 text-accent-300",
    title: "text-white",
    intro: "text-white/75",
    card: "border-white/10 bg-white/[0.04] hover:bg-white/[0.06] hover:border-white/20",
    cardTitle: "text-white",
    cardTagline: "text-accent-300",
    cardSummary: "text-white/70",
    featureText: "text-white/85",
    checkIcon: "text-accent-400",
    courseLink:
      "border-white/10 bg-white/[0.06] text-white/85 hover:border-white/25 hover:text-white",
    divider: "border-white/10",
    iconWrap: "border-accent-400/25 bg-accent-500/15",
    iconColor: "text-accent-300"
  },
  automation: {
    sectionBg: "bg-accent-50",
    ambient: null,
    eyebrow: "text-accent-800",
    categoryLabel:
      "border-accent-700/25 bg-white text-accent-800",
    title: "text-ink-900",
    intro: "text-ink-600",
    card: "border-accent-500/25 bg-white shadow-soft hover:shadow-lift",
    cardTitle: "text-ink-900",
    cardTagline: "text-accent-800",
    cardSummary: "text-ink-500",
    featureText: "text-ink-700",
    checkIcon: "text-accent-700",
    courseLink:
      "border-ink-900/10 bg-white text-ink-700 hover:border-ink-900/25 hover:text-ink-900",
    divider: "border-accent-500/20",
    iconWrap: "border-accent-700/25 bg-white",
    iconColor: "text-accent-700"
  },
  governance: {
    sectionBg: "bg-ink-900",
    ambient:
      "radial-gradient(600px 200px at 80% 0%, rgba(88,192,56,0.18), transparent 60%)",
    eyebrow: "text-accent-400",
    categoryLabel:
      "border-accent-400/30 bg-accent-500/15 text-accent-300",
    title: "text-white",
    intro: "text-white/75",
    card: "border-white/10 bg-white/[0.04] hover:bg-white/[0.06] hover:border-white/20",
    cardTitle: "text-white",
    cardTagline: "text-accent-300",
    cardSummary: "text-white/70",
    featureText: "text-white/85",
    checkIcon: "text-accent-400",
    courseLink:
      "border-white/10 bg-white/[0.06] text-white/85 hover:border-white/25 hover:text-white",
    divider: "border-white/10",
    iconWrap: "border-accent-400/25 bg-accent-500/15",
    iconColor: "text-accent-300"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...MODULES.map((m) => ({
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}#${m.slug}`,
      name: m.title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Eigener Server",
      description: m.summary,
      provider: { "@id": `${SITE_URL}/#business` }
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
          name: "Software-Lösungen",
          item: PAGE_URL
        }
      ]
    }
  ]
};

export default function SolutionsPage() {
  return (
    <main className="relative bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero ------------------------------------------------------ */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-accent-100 opacity-30 blur-3xl" />
          <div className="absolute -right-40 top-40 h-[560px] w-[560px] rounded-full bg-ink-100 opacity-60 blur-3xl" />
        </div>

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
                <Boxes size={12} strokeWidth={2.4} />
                Software-Lösungen
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                {MODULES.length} Software-Lösungen
              </span>
            </div>
            <h1 className="mt-6 text-5xl leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-7xl">
              Software-Lösungen
              <br />
              <span className="display italic text-ink-500">
                aus unserer Beratungspraxis.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500">
              Jede Lösung ist aus einem konkreten Kundenprojekt entstanden und
              wurde zu einem wiederverwendbaren Baustein ausgebaut. Sie erhalten
              keine Neuentwicklung von Null, sondern erprobte Bausteine, die in
              Ihrer Systemlandschaft nur noch verheiratet werden.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category anchor nav -------------------------------------- */}
      <section className="border-y border-ink-900/8 bg-ink-50/60">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4">
          {CATEGORY_ORDER.map((cat) => {
            const count = MODULES.filter((m) => m.category === cat).length;
            const Icon = CATEGORY_ICON[cat];
            return (
              <a
                key={cat}
                href={`#${cat}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
              >
                <Icon size={13} strokeWidth={2.2} className="text-accent-700" />
                {MODULE_CATEGORY_LABEL[cat]}
                <span className="text-[11px] text-ink-400">{count}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Solutions grouped by category ---------------------------- */}
      {CATEGORY_ORDER.map((cat) => {
        const items = MODULES.filter((m) => m.category === cat);
        const theme = CATEGORY_THEME[cat];
        const Icon = CATEGORY_ICON[cat];
        return (
          <section
            key={cat}
            id={cat}
            className={`relative py-20 md:py-28 ${theme.sectionBg}`}
          >
            {theme.ambient && (
              <div
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
                style={{ background: theme.ambient }}
              />
            )}

            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <div className="mb-12 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${theme.iconWrap}`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.9}
                        className={theme.iconColor}
                      />
                    </div>
                    <span
                      className={`text-[11px] font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}
                    >
                      Kategorie · {items.length} Lösungen
                    </span>
                  </div>
                  <h2
                    className={`mt-5 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl ${theme.title}`}
                  >
                    {MODULE_CATEGORY_LABEL[cat]}
                  </h2>
                  <p
                    className={`mt-5 text-[15.5px] leading-relaxed ${theme.intro}`}
                  >
                    {MODULE_CATEGORY_INTRO[cat]}
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {items.map((m, i) => {
                  const relCourse = m.relatedCourse
                    ? COURSES.find((c) => c.slug === m.relatedCourse)
                    : undefined;
                  return (
                    <Reveal key={m.slug} delay={i * 0.04}>
                      <article
                        id={m.slug}
                        className={`flex h-full scroll-mt-32 flex-col rounded-3xl border p-7 transition-all md:p-8 ${theme.card}`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em] ${theme.categoryLabel}`}
                          >
                            <Icon size={10} strokeWidth={2.4} />
                            {MODULE_CATEGORY_LABEL[cat]}
                          </span>
                        </div>
                        <p
                          className={`mt-5 text-[11.5px] font-medium uppercase tracking-[0.18em] ${theme.cardTagline}`}
                        >
                          {m.tagline}
                        </p>
                        <h3
                          className={`mt-2 text-xl leading-snug tracking-tight sm:text-2xl ${theme.cardTitle}`}
                        >
                          {m.title}
                        </h3>
                        <p
                          className={`mt-4 text-[14.5px] leading-relaxed ${theme.cardSummary}`}
                        >
                          {m.summary}
                        </p>

                        <div className={`mt-6 border-t pt-5 ${theme.divider}`}>
                          <p
                            className={`text-[11px] font-medium uppercase tracking-[0.18em] ${theme.eyebrow}`}
                          >
                            Bausteine der Lösung
                          </p>
                          <ul className="mt-3 space-y-2">
                            {m.features.map((f) => (
                              <li
                                key={f}
                                className={`flex items-start gap-2.5 text-[13.5px] leading-relaxed ${theme.featureText}`}
                              >
                                <CheckCircle2
                                  size={14}
                                  strokeWidth={2}
                                  className={`mt-0.5 flex-shrink-0 ${theme.checkIcon}`}
                                />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex-1" />

                        {relCourse && (
                          <Link
                            href={`/business/kurskatalog#${relCourse.slug}`}
                            className={`mt-2 inline-flex items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-[13px] font-medium transition-colors ${theme.courseLink}`}
                          >
                            <span>Passender Kurs: {relCourse.title}</span>
                            <ArrowUpRight size={13} strokeWidth={2.2} />
                          </Link>
                        )}
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA ------------------------------------------------------- */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-ink-900/10 bg-ink-900 p-10 text-white md:p-14">
              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto] md:gap-12">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
                    Beratung &amp; Integration
                  </p>
                  <h2 className="mt-3 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    Passende Software-Lösung auswählen –
                    <br />
                    <span className="display italic text-white/70">
                      oder mehrere zu einer größeren Lösung verheiraten.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-white/70">
                    In einem 30-minütigen Videocall sortieren wir gemeinsam,
                    welche Software-Lösungen in Ihre Systemlandschaft passen und
                    welche Reihenfolge den schnellsten produktiven Nutzen
                    erzielt.
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
