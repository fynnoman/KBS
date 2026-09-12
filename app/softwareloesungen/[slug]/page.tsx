import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Check,
  ArrowUpRight,
  Calendar,
  Phone,
  Sparkles,
  ShieldCheck,
  Tag,
  Layers
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import {
  MODULES,
  MODULE_CATEGORY_LABEL,
  MODULE_CATEGORY_INTRO,
  type SoftwareModule
} from "@/lib/data/modules";
import { COURSES } from "@/lib/data/courses";
import {
  SITE_URL,
  CALENDLY_URL,
  PHONE_TEL,
  PHONE_DISPLAY
} from "@/lib/config";

export async function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

function findModule(slug: string): SoftwareModule | undefined {
  return MODULES.find((m) => m.slug === slug);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = findModule(slug);
  if (!mod) return {};
  const title = `${mod.title} · KBS Softwarelösungen`;
  const description = mod.summary.slice(0, 158);
  const url = `${SITE_URL}/softwareloesungen/${mod.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      mod.title,
      MODULE_CATEGORY_LABEL[mod.category],
      "KI-Softwarelösung",
      "KBS KI-Beratung Saar",
      "Enterprise-KI",
      "DSGVO KI",
      "EU AI Act"
    ],
    openGraph: {
      title: `${mod.title} · KBS`,
      description,
      url,
      type: "website",
      locale: "de_DE",
      siteName: "KBS KI-Beratung Saar",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${mod.title} · KBS`,
      description,
      images: ["/opengraph-image"]
    }
  };
}

function formatEUR(v: number) {
  return new Intl.NumberFormat("de-DE").format(v);
}

function priceLabel(unit?: string) {
  switch (unit) {
    case "pro Monat":
      return "€ / Monat";
    case "pro Woche":
      return "€ / Woche";
    case "pro Tag":
      return "€ / Tag";
    case "einmalig":
    default:
      return "€ einmalig";
  }
}

function offersForModule(mod: SoftwareModule, url: string) {
  const offers: Record<string, unknown>[] = [];
  if (mod.pricing?.bundle) {
    offers.push({
      "@type": "Offer",
      name: `${mod.title} · Baustein-Bundle`,
      description:
        "Einmalige Einrichtung plus laufende Betreuungspauschale pro Monat.",
      url,
      priceSpecification: [
        {
          "@type": "PriceSpecification",
          name: "Einrichtung",
          price: mod.pricing.bundle.setup,
          priceCurrency: "EUR"
        },
        {
          "@type": "UnitPriceSpecification",
          name: "Laufende Betreuung",
          price: mod.pricing.bundle.monthly,
          priceCurrency: "EUR",
          unitCode: "MON",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: 1,
            unitCode: "MON"
          }
        }
      ],
      availability: "https://schema.org/InStock",
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService"
    });
  }
  if (mod.pricing?.tiers) {
    for (const t of mod.pricing.tiers) {
      offers.push({
        "@type": "Offer",
        name: t.label,
        price: t.price,
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": t.unit === "einmalig" ? "PriceSpecification" : "UnitPriceSpecification",
          price: t.price,
          priceCurrency: "EUR",
          ...(t.unit && t.unit !== "einmalig"
            ? {
                unitCode:
                  t.unit === "pro Monat"
                    ? "MON"
                    : t.unit === "pro Woche"
                    ? "WEE"
                    : "DAY"
              }
            : {})
        },
        availability: "https://schema.org/InStock",
        url
      });
    }
  }
  return offers;
}

export default async function ModulePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = findModule(slug);
  if (!mod) return notFound();

  const url = `${SITE_URL}/softwareloesungen/${mod.slug}`;
  const relatedCourse = mod.relatedCourse
    ? COURSES.find((c) => c.slug === mod.relatedCourse)
    : undefined;
  const otherInCategory = MODULES.filter(
    (m) => m.category === mod.category && m.slug !== mod.slug
  ).slice(0, 5);

  const offers = offersForModule(mod, url);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: mod.title,
        alternateName: mod.tagline,
        serviceType: MODULE_CATEGORY_LABEL[mod.category],
        provider: { "@id": `${SITE_URL}/#business` },
        description: mod.summary,
        areaServed: [
          { "@type": "Country", name: "Deutschland" },
          { "@type": "State", name: "Saarland" }
        ],
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Mittelständische Unternehmen und Konzerne mit 20 bis 500 Mitarbeitern"
        },
        url,
        image: `${SITE_URL}/opengraph-image`,
        offers: offers.length > 0 ? offers : undefined,
        additionalProperty: mod.features.map((f) => ({
          "@type": "PropertyValue",
          name: "Feature",
          value: f
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Softwarelösungen",
            item: `${SITE_URL}/softwareloesungen`
          },
          { "@type": "ListItem", position: 3, name: mod.title, item: url }
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
          { label: "Softwarelösungen", href: "/softwareloesungen" },
          { label: mod.title, href: `/softwareloesungen/${mod.slug}` }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-100 opacity-40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">
              <Layers size={12} strokeWidth={2.4} />
              {MODULE_CATEGORY_LABEL[mod.category]}
            </span>
            <h1 className="mt-5 max-w-4xl text-[38px] leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-[56px]">
              {mod.title}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-ink-700 sm:text-2xl">
              {mod.tagline}
            </p>
            <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-ink-500 sm:text-lg">
              {mod.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/kontakt" className="btn-primary">
                <Calendar size={16} strokeWidth={2.4} />
                Kennenlerngespräch buchen
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <ArrowUpRight size={16} strokeWidth={2.2} />
                Termin online buchen
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-ghost">
                <Phone size={16} strokeWidth={2.2} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kategorie-Einordnung */}
      <section className="border-t border-ink-900/8 bg-white/60 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
              Einordnung
            </p>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-700">
              {MODULE_CATEGORY_INTRO[mod.category]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
              Leistungsumfang
            </p>
            <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
              Was enthalten ist
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {mod.features.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <li className="card flex items-start gap-3 p-5">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <Check size={14} strokeWidth={2.6} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-700">
                    {f}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      {(mod.pricing?.bundle || mod.pricing?.tiers) && (
        <section className="border-t border-ink-900/8 bg-white/70 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
                <Tag size={12} strokeWidth={2.4} className="mr-2 inline" />
                Investition
              </p>
              <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                Klare Preise, keine offene Stundenrechnung
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {mod.pricing?.bundle && (
                <Reveal>
                  <div className="card p-7">
                    <p className="text-xs uppercase tracking-[0.22em] text-ink-500">
                      Baustein-Bundle
                    </p>
                    <p className="mt-3 text-2xl tracking-tight text-ink-900">
                      {formatEUR(mod.pricing.bundle.setup)} € Einrichtung
                    </p>
                    <p className="mt-1 text-[15px] text-ink-500">
                      zzgl. {formatEUR(mod.pricing.bundle.monthly)} € pro Monat für laufende Betreuung
                    </p>
                    <p className="mt-5 text-[14px] leading-relaxed text-ink-500">
                      Enthält Einrichtung, Anbindung an Ihre Systeme, Übergabe
                      und die laufende Betreuung inklusive Vorlagen-Pflege und Updates.
                    </p>
                  </div>
                </Reveal>
              )}

              {mod.pricing?.tiers?.map((t, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="card p-7">
                    <p className="text-xs uppercase tracking-[0.22em] text-ink-500">
                      Umsetzungsstufe
                    </p>
                    <p className="mt-3 text-lg leading-snug text-ink-900">
                      {t.label}
                    </p>
                    <p className="mt-4 text-2xl tracking-tight text-ink-900">
                      {formatEUR(t.price)} {priceLabel(t.unit)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {mod.pricing?.note && (
              <p className="mt-6 text-sm italic text-ink-500">{mod.pricing.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Vertrauens-Zeile */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="card p-7 md:p-10">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <ShieldCheck size={16} strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink-900">
                      DSGVO- und EU-AI-Act-konform
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-500">
                      Auf Wunsch komplett auf Ihrem eigenen Server, ohne Cloud-Übermittlung.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <Sparkles size={16} strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink-900">
                      Festpreise pro Phase
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-500">
                      Klare Baustein-Preise. Keine offene Stundenrechnung, keine Überraschungen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <Check size={16} strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink-900">
                      Übergabefähig dokumentiert
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-500">
                      Ihre IT kann die Lösung nach der Übergabe eigenständig weiterbetreiben.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related course */}
      {relatedCourse && (
        <section className="border-t border-ink-900/8 bg-white/60 py-14">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
                Passende Schulung
              </p>
              <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <h3 className="text-2xl tracking-tight text-ink-900">
                    {relatedCourse.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-500">
                    {relatedCourse.summary}
                  </p>
                </div>
                <Link
                  href={`/kurse/${relatedCourse.slug}`}
                  className="btn-ghost self-start md:self-auto"
                >
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                  Zum Kurs
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Weitere Lösungen der Kategorie */}
      {otherInCategory.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.22em] text-ink-500">
                Weitere Bausteine · {MODULE_CATEGORY_LABEL[mod.category]}
              </p>
              <h2 className="mt-3 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                Sinnvoll kombinierbar
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {otherInCategory.map((m, i) => (
                <Reveal key={m.slug} delay={i * 60}>
                  <Link
                    href={`/softwareloesungen/${m.slug}`}
                    className="card block h-full p-6 transition-shadow hover:shadow-lift"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-ink-500">
                      {MODULE_CATEGORY_LABEL[m.category]}
                    </p>
                    <p className="mt-3 text-lg tracking-tight text-ink-900">
                      {m.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                      {m.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent-700">
                      Details ansehen
                      <ArrowUpRight size={14} strokeWidth={2.2} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-ink-900/8 bg-white/70 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
              {mod.title} für Ihr Unternehmen einführen
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-500 sm:text-lg">
              30 Minuten Videocall. Ehrliche Einschätzung von Machbarkeit,
              Potenzial und ROI. Ohne Verkaufsdruck.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/kontakt" className="btn-primary">
                <Calendar size={16} strokeWidth={2.4} />
                Kennenlerngespräch buchen
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <ArrowUpRight size={16} strokeWidth={2.2} />
                Termin online buchen
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
