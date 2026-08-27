import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import {
  Boxes,
  ArrowLeft,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2
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
  "Zwölf einsatzfertige KBS-Software-Lösungen: AI Gateway, RAG-Wissensassistent, Fachfunktions-Assistenten für Vertrieb, Marketing, HR und Finanzen sowie Governance-Werkzeuge für EU AI Act und interne Steuerung. Alles aus produktiver Beratungspraxis.";

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
    "RAG Lösung",
    "AI Gateway",
    "Prompt Library Firma",
    "Rechnungs-OCR DATEV",
    "KI Support Triage",
    "KI Voice Agent Deutsch",
    "EU AI Act Register",
    "KI Nutzungs-Analytics",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...MODULES.map((m) => ({
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}#${m.slug}`,
      name: m.title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, On-Premise",
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
              wurde zu einer wiederverwendbaren Software-Lösung ausgebaut. Sie
              erhalten keine Green-Field-Entwicklung, sondern erprobte
              Bausteine, die in Ihrer Landschaft nur noch verheiratet werden.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category anchor nav */}
      <section className="border-y border-ink-900/8 bg-ink-50/60">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4">
          {CATEGORY_ORDER.map((cat) => {
            const count = MODULES.filter((m) => m.category === cat).length;
            return (
              <a
                key={cat}
                href={`#${cat}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
              >
                {MODULE_CATEGORY_LABEL[cat]}
                <span className="text-[11px] text-ink-400">{count}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Solutions grouped by category */}
      {CATEGORY_ORDER.map((cat) => {
        const items = MODULES.filter((m) => m.category === cat);
        return (
          <section key={cat} id={cat} className="relative py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <div className="mb-12 max-w-3xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-400">
                    Kategorie
                  </p>
                  <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                    {MODULE_CATEGORY_LABEL[cat]}
                  </h2>
                  <p className="mt-5 text-[15.5px] leading-relaxed text-ink-500">
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
                        className="card scroll-mt-32 h-full overflow-hidden p-0"
                      >
                        <PlaceholderImage
                          src={m.image}
                          alt={m.title}
                          iconName="module"
                          aspect="aspect-[16/9]"
                          className="border-b border-ink-900/8"
                        />
                        <div className="p-7 md:p-8">
                          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                            {m.tagline}
                          </p>
                          <h3 className="mt-3 text-xl leading-snug tracking-tight text-ink-900 sm:text-2xl">
                            {m.title}
                          </h3>
                          <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                            {m.summary}
                          </p>

                          <div className="mt-6 border-t border-ink-900/8 pt-5">
                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                              Bausteine der Lösung
                            </p>
                            <ul className="mt-3 space-y-2">
                              {m.features.map((f) => (
                                <li
                                  key={f}
                                  className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-700"
                                >
                                  <CheckCircle2
                                    size={14}
                                    strokeWidth={2}
                                    className="mt-0.5 flex-shrink-0 text-accent-700"
                                  />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {relCourse && (
                            <Link
                              href={`/business/kurskatalog#${relCourse.slug}`}
                              className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-ink-900/10 bg-ink-50 px-4 py-3 text-[13px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
                            >
                              Passender Kurs: {relCourse.title}
                              <ArrowUpRight size={13} strokeWidth={2.2} />
                            </Link>
                          )}
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
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
                    welche Software-Lösungen in Ihre Systemlandschaft passen und welche
                    Reihenfolge den schnellsten produktiven Nutzen erzielt.
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
