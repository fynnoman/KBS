import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, Calendar, Users, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import {
  COURSES,
  CATEGORY_LABEL,
  CATEGORY_INTRO,
  type CourseCategory
} from "@/lib/data/courses";
import { SITE_URL, CALENDLY_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/ki-schulung`;
const DESCRIPTION =
  "KI-Schulungen für Unternehmen im Saarland: 13 Kurse von Grundlagen und Prompt Engineering bis EU AI Act, HR, Vertrieb und lokaler KI. Inhouse, Präsenz oder Remote.";

export const metadata: Metadata = {
  title: "KI-Schulungen für Unternehmen · KBS – KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "KI Schulung Unternehmen",
    "KI Schulung Mitarbeiter",
    "KI Kurs Unternehmen",
    "ChatGPT Schulung Unternehmen",
    "KI Seminar Unternehmen",
    "KI Weiterbildung Mitarbeiter",
    "Generative KI Schulung",
    "EU AI Act Schulung",
    "Prompt Engineering Kurs",
    "Inhouse KI Schulung Saarland"
  ],
  openGraph: {
    title: "KI-Schulungen für Unternehmen · KBS",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "de_DE",
    siteName: "KBS – KI-Beratung Saar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

const CATEGORY_ORDER: CourseCategory[] = [
  "grundlagen",
  "rollen",
  "governance",
  "technisch",
  "programme"
];

export default function KiSchulungPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#courses`,
        name: "KI-Schulungen für Unternehmen · KBS",
        numberOfItems: COURSES.length,
        itemListElement: COURSES.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/ki-schulung/${c.slug}`,
          name: c.title
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Start",
            item: `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "KI-Schulungen",
            item: PAGE_URL
          }
        ]
      }
    ]
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "KI-Schulungen", href: "/ki-schulung" }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">KI-Schulungen für Unternehmen</span>
            <h1 className="mt-5 max-w-4xl text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[64px]">
              KI im Unternehmen –
              <br />
              <span className="display italic text-ink-500">
                verstanden, nicht nur eingeführt.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Dreizehn aufeinander abgestimmte Kurse für alle, die generative KI
              nicht bloß ausprobieren, sondern im Betrieb verankern wollen.
              Grundlagen für alle Mitarbeitenden, rollenspezifische Vertiefungen
              für Vertrieb, Marketing, HR, Finanzen und Kundenservice,
              Governance-Formate für die Führungsebene und technische Kurse für
              IT und Entwicklung.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} strokeWidth={2.4} />
                Schulung anfragen
              </a>
              <Link href={`tel:${PHONE_TEL}`} className="btn-ghost">
                <Phone size={16} strokeWidth={2.2} />
                Anrufen · {PHONE_DISPLAY}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Formate / Meta */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Reveal>
              <div className="card p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/10 text-accent-700">
                  <Building2 size={16} strokeWidth={2.2} />
                </span>
                <p className="mt-4 text-[15px] font-medium text-ink-900">
                  Inhouse, Präsenz oder Remote
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  Alle Kurse laufen bei Ihnen vor Ort im Saarland und
                  angrenzenden Regionen, in unserem Schulungsraum oder online –
                  Sie entscheiden.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="card p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/10 text-accent-700">
                  <Users size={16} strokeWidth={2.2} />
                </span>
                <p className="mt-4 text-[15px] font-medium text-ink-900">
                  Bis 12 Teilnehmende zum Pauschalpreis
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  Inhouse-Pauschale netto. Ab dem 13. Teilnehmenden 120 € pro
                  Person. Kein Personen-Mindestbetrag, keine versteckten
                  Positionen.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/10 text-accent-700">
                  <Calendar size={16} strokeWidth={2.2} />
                </span>
                <p className="mt-4 text-[15px] font-medium text-ink-900">
                  Halbtag bis Drei-Monats-Curriculum
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  Von 45-Minuten-Impuls bis zum mehrmonatigen Programm mit
                  Sprechstunden. Kombinierbar zu einem Schulungsplan für Ihr
                  Team.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kurse gruppiert */}
      {CATEGORY_ORDER.map((cat) => {
        const list = COURSES.filter((c) => c.category === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat} id={cat} className="relative py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <div className="mb-10 max-w-3xl">
                  <span className="chip">{CATEGORY_LABEL[cat]}</span>
                  <p className="mt-5 text-lg leading-relaxed text-ink-500">
                    {CATEGORY_INTRO[cat]}
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {list.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 0.04}>
                    <Link
                      href={`/ki-schulung/${c.slug}`}
                      className="group card block h-full p-7 transition-all hover:shadow-lift"
                    >
                      <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                        {c.duration}
                      </p>
                      <h3 className="mt-3 text-xl leading-tight tracking-tight text-ink-900">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-[14px] leading-relaxed text-ink-500">
                        {c.summary.slice(0, 180)}…
                      </p>
                      <p className="mt-5 text-[12.5px] font-medium text-ink-400">
                        {c.audience}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                        Kurs ansehen
                        <ArrowUpRight size={14} strokeWidth={2.2} />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="chip">Nächster Schritt</span>
            <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
              Nicht sicher, welcher Kurs
              <br />
              <span className="display italic text-ink-500">
                zu Ihrem Team passt?
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Im kostenlosen Erstgespräch klären wir, welche Rollen bei Ihnen
              als Erstes von einer Schulung profitieren und in welcher
              Reihenfolge ein Rollout sinnvoll ist.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} strokeWidth={2.4} />
                Termin buchen
              </a>
              <Link href={`tel:${PHONE_TEL}`} className="btn-ghost">
                <Phone size={16} strokeWidth={2.2} />
                {PHONE_DISPLAY}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
