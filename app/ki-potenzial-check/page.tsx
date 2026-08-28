import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Gauge, Layers, ShieldCheck, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import PotenzialCheck from "@/components/PotenzialCheck";
import { SITE_URL } from "@/lib/config";

const TITLE = "KI-Potenzial-Check · KBS – KI-Beratung Saar";
const DESCRIPTION =
  "Der kostenlose KI-Potenzial-Check von KBS. In zehn Fragen erhalten Sie ein individuelles Ergebnis mit den passenden KI-Anwendungen für Ihr Unternehmen, realistischer Zeitersparnis und einer klaren Roadmap – ohne Anmeldung.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/ki-potenzial-check` },
  keywords: [
    "KI-Potenzial-Check",
    "KI-Check kostenlos",
    "KI Analyse Unternehmen",
    "KI-Potenzial Analyse",
    "KI Readiness Check",
    "KI Use Cases finden"
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/ki-potenzial-check`,
    type: "website",
    locale: "de_DE",
    siteName: "KBS – KI-Beratung Saar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "KBS KI-Potenzial-Check",
      description: DESCRIPTION,
      url: `${SITE_URL}/ki-potenzial-check`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR"
      },
      provider: {
        "@type": "Organization",
        name: "KBS – KI-Beratung Saar",
        "@id": `${SITE_URL}/#business`
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "KI-Potenzial-Check",
          item: `${SITE_URL}/ki-potenzial-check`
        }
      ]
    }
  ]
};

export default function Page() {
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
          { label: "KI-Potenzial-Check", href: "/ki-potenzial-check" }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-14 md:pt-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <span className="chip">
              <Sparkles size={11} strokeWidth={2} />
              Kostenloses Tool
            </span>
            <h1 className="mt-5 max-w-4xl text-[38px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-[60px]">
              KI-Potenzial-Check.
              <br />
              <span className="display italic text-ink-500">
                In zehn Fragen zu Ihrer KI-Roadmap.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Beantworten Sie zehn kurze Fragen und Sie erhalten sofort eine
              individuelle Auswertung: Wo KI in Ihrem Unternehmen den größten
              Hebel hat, welche Anwendungen zuerst starten sollten und welche
              realistische Zeitersparnis möglich ist. Ohne Anmeldung, ohne
              Verpflichtung, ohne Werbe-Tracking.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="card p-5">
                <div className="flex items-center gap-2 text-ink-400">
                  <Clock size={14} strokeWidth={2.2} />
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                    Dauer
                  </p>
                </div>
                <p className="mt-2 text-[14.5px] font-medium text-ink-900">
                  ca. 3 Minuten
                </p>
              </div>
              <div className="card p-5">
                <div className="flex items-center gap-2 text-ink-400">
                  <Layers size={14} strokeWidth={2.2} />
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                    Ergebnis
                  </p>
                </div>
                <p className="mt-2 text-[14.5px] font-medium text-ink-900">
                  Individueller Report
                </p>
              </div>
              <div className="card p-5">
                <div className="flex items-center gap-2 text-ink-400">
                  <ShieldCheck size={14} strokeWidth={2.2} />
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                    Datenschutz
                  </p>
                </div>
                <p className="mt-2 text-[14.5px] font-medium text-ink-900">
                  Kein Tracking
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Check */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <PotenzialCheck />
        </div>
      </section>

      {/* Why */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <span className="chip">Warum dieser Check</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Kein Buzzword-Bingo.
                <br />
                <span className="display italic text-ink-500">
                  Ein Ergebnis für Ihren Betrieb.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal>
              <div className="card h-full p-7">
                <div className="flex items-center gap-2 text-ink-400">
                  <Gauge size={14} strokeWidth={2.2} />
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                    Realistischer Score
                  </p>
                </div>
                <h3 className="mt-4 text-xl leading-tight tracking-tight text-ink-900">
                  Kein Marketing-Wert.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                  Der Score bewertet Ihre Antworten nüchtern: Größe, Reifegrad,
                  Motivation, Zeithorizont. Kein automatischer 100-Prozent-Wert
                  zur Selbstberuhigung.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="card h-full p-7">
                <div className="flex items-center gap-2 text-ink-400">
                  <Layers size={14} strokeWidth={2.2} />
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                    Konkrete Anwendungen
                  </p>
                </div>
                <h3 className="mt-4 text-xl leading-tight tracking-tight text-ink-900">
                  Aus 30+ realen Use-Cases.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                  Wir empfehlen keine abstrakten „KI-Strategien", sondern
                  konkrete Anwendungen aus unserem Katalog – zugeschnitten auf
                  Branche und Abteilungen.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card h-full p-7">
                <div className="flex items-center gap-2 text-ink-400">
                  <ShieldCheck size={14} strokeWidth={2.2} />
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                    AI-Act-tauglich
                  </p>
                </div>
                <h3 className="mt-4 text-xl leading-tight tracking-tight text-ink-900">
                  Datenschutz nicht als Fußnote.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                  Zu jedem Ergebnis gehört eine Einordnung zu Datenschutz und
                  AI-Act-Relevanz. Damit die erste Anwendung nicht die letzte
                  bleibt.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
              Sie wollen zuerst inhaltlich reinlesen?
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Link
                href="/ki-anwendungsfaelle"
                className="group card block h-full p-6 transition-all hover:shadow-lift"
              >
                <h3 className="text-lg tracking-tight text-ink-900">
                  Alle KI-Anwendungsfälle
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                  Fünf Abteilungen, jeweils fünf konkrete Anwendungen.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                  Zur Übersicht
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
              <Link
                href="/leistungen"
                className="group card block h-full p-6 transition-all hover:shadow-lift"
              >
                <h3 className="text-lg tracking-tight text-ink-900">
                  Unsere Leistungen
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                  KI-Check, Workshop, Einrichtung, Sprechstunde.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                  Leistungen ansehen
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
              <Link
                href="/business"
                className="group card block h-full p-6 transition-all hover:shadow-lift"
              >
                <h3 className="text-lg tracking-tight text-ink-900">
                  Für Unternehmen
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                  Kurskatalog, Lösungen, Preise und Referenzen.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                  KBS Business
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
