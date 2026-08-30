import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, Users, ArrowUpRight, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { CITIES, findCity } from "@/lib/data/cities";
import { SITE_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/config";

const STANDORT_ANGEBOTE = [
  {
    slug: "softwareloesungen",
    tag: "Software",
    name: "Softwarelösungen",
    intro:
      "Lokale KI auf Ihrer Hardware, Custom-Assistenten für Firmenwissen, Prozess-Automation und Integrationen in bestehende Systeme."
  },
  {
    slug: "kurse",
    tag: "Kurse",
    name: "Kurse & Schulungen",
    intro:
      "Live-Schulungen für Ihr Team, von Prompt Engineering bis EU AI Act. Inhouse-Format oder als offene Kurse."
  },
  {
    slug: "ki-anwendungsfaelle",
    tag: "Abteilungen",
    name: "Anwendungsfälle",
    intro:
      "Konkrete KI-Bausteine für Vertrieb, Marketing, Buchhaltung, Kundenservice und HR."
  },
  {
    slug: "branchen",
    tag: "Branchen",
    name: "Branchen-Lösungen",
    intro:
      "Vorkonfigurierte Assistenten und Workflows für Kanzleien, Praxen, Immobilien, Versicherungen, Agenturen und weitere."
  },
  {
    slug: "ueber-uns",
    tag: "Über uns",
    name: "Über KBS",
    intro:
      "Der lokale KI-Partner im Saarland. Feste Ansprechpartner, klare Festpreise pro Phase, DSGVO- und EU-AI-Act-konform."
  },
  {
    slug: "kontakt",
    tag: "Kontakt",
    name: "Kennenlerngespräch",
    intro:
      "30 Minuten Videocall, ehrliche Einschätzung von Machbarkeit, Potenzial und ROI. Ohne Verkaufsdruck."
  }
];

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = findCity(city);
  if (!c) return {};
  const title = `KI-Beratung ${c.name} · KBS KI-Beratung Saar`;
  const description = `KI-Beratung, ChatGPT-Hilfe und KI-Workshops in ${c.name} und Umgebung. KBS ist Ihr lokaler KI-Ansprechpartner vor Ort, für Privatpersonen, Selbstständige und kleine Unternehmen.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/standorte/${c.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/standorte/${c.slug}`,
      type: "website",
      locale: "de_DE",
      siteName: "KBS KI-Beratung Saar",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    },
    keywords: [
      `KI Beratung ${c.name}`,
      `ChatGPT Hilfe ${c.name}`,
      `KI Schulung ${c.name}`,
      `KI Workshop ${c.name}`,
      `KI für Unternehmen ${c.name}`,
      "KI Saarland",
      "künstliche Intelligenz Saarland"
    ]
  };
}

export default async function CityPage({
  params
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = findCity(city);
  if (!c) return notFound();

  const pageUrl = `${SITE_URL}/standorte/${c.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#local`,
        name: `KBS KI-Beratung Saar (${c.name})`,
        parentOrganization: { "@id": `${SITE_URL}/#business` },
        url: pageUrl,
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630
        },
        logo: `${SITE_URL}/kbs-logo.png`,
        description: `KI-Beratung, ChatGPT-Hilfe und KI-Workshops in ${c.name} und Umgebung.`,
        telephone: PHONE_TEL,
        email: "info@ki-beratung-saar.com",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Überweisung, Rechnung",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            opens: "09:00",
            closes: "18:00"
          }
        ],
        areaServed: [
          { "@type": "City", name: c.name },
          ...c.postalCodes.slice(0, 4).map((p) => ({
            "@type": "PostalCodeSpecification",
            postalCode: p,
            addressCountry: "DE"
          }))
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: c.name,
          addressRegion: "Saarland",
          addressCountry: "DE",
          postalCode: c.postalCodes[0]
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: c.latitude,
          longitude: c.longitude
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: c.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
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
          { label: "Standorte", href: "/standorte" },
          { label: c.name, href: `/standorte/${c.slug}` }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">
              <MapPin size={12} strokeWidth={2.2} />
              Saarland · {c.postalCodes[0]} {c.name}
            </span>
            <h1 className="mt-5 max-w-4xl text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[64px]">
              KI-Beratung in {c.name}.
              <br />
              <span className="display italic text-ink-500">
                Vor Ort und in Ihrer Sprache.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              {c.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href={`tel:${PHONE_TEL}`} className="btn-primary">
                <Phone size={16} strokeWidth={2.4} />
                Jetzt anrufen · {PHONE_DISPLAY}
              </Link>
              <Link href="/#kontakt" className="btn-ghost">
                Kostenloses Erstgespräch
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local economy */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <Reveal>
              <div>
                <span className="chip">Was {c.name} wirtschaftlich prägt</span>
                <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                  Kontext, den wir kennen.
                </h2>
                <p className="mt-6 text-[15.5px] leading-relaxed text-ink-500">
                  {c.economy}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[13px] text-ink-500">
                  <Users size={14} strokeWidth={2} className="text-ink-400" />
                  ca. {c.populationApprox.toLocaleString("de-DE")} Einwohner
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-7 md:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Wirtschaftliche Schwerpunkte
                </p>
                <ul className="mt-5 space-y-3">
                  {c.keyIndustries.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[14.5px] leading-snug text-ink-700"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* City-specific use cases */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <span className="chip">Anwendungsfälle in {c.name}</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Wie KI in {c.name}
                <br />
                <span className="display italic text-ink-500">
                  konkret aussieht.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {c.useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.06}>
                <div className="card h-full p-7">
                  <h3 className="text-lg font-medium leading-snug tracking-tight text-ink-900">
                    {u.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                    {u.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid - cross-linking */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="chip">Leistungen für {c.name}</span>
                <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                  Was wir für Sie
                  <br />
                  <span className="display italic text-ink-500">
                    vor Ort tun.
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
                {c.travelNote}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STANDORT_ANGEBOTE.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/${s.slug}`}
                  className="group card block h-full p-6 transition-all hover:shadow-lift"
                >
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                    {s.tag}
                  </p>
                  <h3 className="mt-3 text-lg font-medium tracking-tight text-ink-900">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-500">
                    {s.intro}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                    Mehr erfahren
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* City FAQ */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <span className="chip">Fragen aus {c.name}</span>
              <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
                Häufig gestellt.
                <br />
                <span className="display italic text-ink-500">
                  Direkt beantwortet.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto max-w-4xl">
            {c.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group border-b border-ink-900/8 py-6 last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <h3 className="text-lg leading-snug tracking-tight text-ink-900 sm:text-xl">
                      {f.q}
                    </h3>
                    <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-500 transition-transform group-open:rotate-45">
                      <Plus size={16} strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-ink-500">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related cities */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
            KBS im gesamten Saarland
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {CITIES.filter((x) => x.slug !== c.slug).map((x) => (
              <Link
                key={x.slug}
                href={`/standorte/${x.slug}`}
                className="chip transition-colors hover:bg-ink-50"
              >
                <MapPin size={11} strokeWidth={2} />
                KI-Beratung {x.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
