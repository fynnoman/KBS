import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import FoerderungHinweis from "@/components/business/FoerderungHinweis";
import FoerderungBadge from "@/components/business/FoerderungBadge";
import { INDUSTRIES } from "@/lib/data/industries";
import { SITE_URL, CALENDLY_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/config";

const PAGE_URL = `${SITE_URL}/branchen`;
const DESCRIPTION =
  "KI-Beratung nach Branche: Handwerk, Gebäudereinigung, Immobilien, Steuerkanzlei, Versicherung, Arztpraxis, Agentur, Einzelhandel, Gastronomie, Produktion, Verein, Dienstleister.";

export const metadata: Metadata = {
  title: "KI nach Branche · KBS KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "KI Branchenlösung",
    "KI für Handwerk",
    "KI Steuerkanzlei",
    "KI Arztpraxis",
    "KI Einzelhandel",
    "KI Gastronomie",
    "KI Agentur",
    "KI Versicherung",
    "KI Immobilien"
  ],
  openGraph: {
    title: "KI nach Branche · KBS",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "de_DE",
    siteName: "KBS KI-Beratung Saar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  }
};

export default function BranchenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#collection`,
        name: "KI nach Branche · KBS",
        description: DESCRIPTION,
        url: PAGE_URL,
        hasPart: INDUSTRIES.map((i) => ({
          "@type": "WebPage",
          name: i.name,
          url: `${SITE_URL}/branchen/${i.slug}`
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
            name: "Branchen",
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
          { label: "Branchen", href: "/branchen" }
        ]}
      />
      <FoerderungBadge />

      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">KI nach Branche</span>
            <h1 className="mt-5 max-w-4xl text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[64px]">
              KI-Beratung,
              <br />
              <span className="display italic text-ink-500">
                zugeschnitten auf Ihre Branche.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Zwölf Branchen mit sehr unterschiedlichen Anforderungen. Jede
              Seite zeigt konkrete Prozesse, geeignete Use Cases,
              Priorisierungs-Empfehlungen und die Datenschutz-Themen, die in
              genau dieser Branche wichtig sind. Kein generisches KI-Marketing.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} strokeWidth={2.4} />
                Erstgespräch buchen
              </a>
              <Link href={`tel:${PHONE_TEL}`} className="btn-ghost">
                <Phone size={16} strokeWidth={2.2} />
                {PHONE_DISPLAY}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i, idx) => (
              <Reveal key={i.slug} delay={idx * 0.04}>
                <Link
                  href={`/branchen/${i.slug}`}
                  className="group card block h-full p-7 transition-all hover:shadow-lift"
                >
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                    {i.tag}
                  </p>
                  <h2 className="mt-4 text-2xl leading-tight tracking-tight text-ink-900">
                    {i.name}
                  </h2>
                  <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500">
                    {i.intro.slice(0, 170)}…
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                    Zur Branchen-Seite
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FoerderungHinweis />

      <Footer />
    </main>
  );
}
