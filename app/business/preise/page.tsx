import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeft,
  Building2,
  Users,
  ShieldCheck,
  Info,
  Phone,
  Mail,
  Clock,
  Wallet,
  MapPin,
  CalendarClock
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  PRICING,
  PRICING_META,
  type PriceItem,
  type PriceUnit
} from "@/lib/data/pricing";
import {
  SITE_URL,
  CALENDLY_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL
} from "@/lib/config";

const PAGE_URL = `${SITE_URL}/business/preise`;
const DESCRIPTION =
  "KBS Business Preise: Festpreis-Korridore für lokale KI, Custom RAG-Assistenten, Prozess-Automation, Voice-Agents, DSGVO- und EU-AI-Act-Compliance sowie Managed KI. Alle Preise netto zzgl. USt., verbindlich nach Anforderungsanalyse.";

export const metadata: Metadata = {
  title: "KBS Business Preise · Festpreise pro Phase",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS – KI-Beratung Saar",
    title: "KBS Business Preise · Festpreise pro Phase",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KBS Business Preise – Festpreise pro Phase"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KBS Business Preise · Festpreise pro Phase",
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
    "KBS Business Preise",
    "lokale KI Kosten",
    "RAG Assistent Preis",
    "KI Voice Agent Preis",
    "Prozess Automation KI Kosten",
    "DSGVO KI Beratung Preis",
    "EU AI Act Beratung Preis",
    "Managed KI Preis",
    "Enterprise KI Festpreis",
    "on premise LLM Kosten"
  ]
};

// ─── Helpers ──────────────────────────────────────────────────────
const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

function formatPrice(item: PriceItem): { main: string; unit: string } {
  const unit = renderUnit(item.unit);
  if (item.price === 0) return { main: "Kostenlos", unit: "" };
  if (item.price !== null && item.price !== undefined) {
    return { main: euro.format(item.price), unit };
  }
  if (item.priceFrom !== undefined && item.priceTo !== undefined) {
    return {
      main: `${euro.format(item.priceFrom)} – ${euro.format(item.priceTo)}`,
      unit
    };
  }
  return { main: "auf Anfrage", unit };
}

function renderUnit(unit: PriceUnit): string {
  return `netto · ${unit}`;
}

const BUSINESS_ITEMS = PRICING.filter((p) => p.segment === "business");

// ─── JSON-LD ──────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PriceSpecification",
      "@id": `${PAGE_URL}#price-info`,
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
      description:
        "Business-Preise netto zzgl. gesetzlicher USt. Verbindlicher Festpreis nach Anforderungsanalyse."
    },
    {
      "@type": "OfferCatalog",
      "@id": `${PAGE_URL}#offers`,
      name: "KBS Business – Preisübersicht",
      itemListElement: BUSINESS_ITEMS.map((item) => ({
        "@type": "Offer",
        name: item.name,
        priceCurrency: "EUR",
        ...(item.price !== null && item.price !== undefined
          ? { price: item.price }
          : item.priceFrom !== undefined
          ? {
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: item.priceFrom,
                maxPrice: item.priceTo,
                priceCurrency: "EUR",
                valueAddedTaxIncluded: false
              }
            }
          : {}),
        priceValidUntil: "2027-08-31",
        eligibleCustomerType: "Business",
        description: item.note ?? undefined,
        category: "business"
      }))
    },
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
        { "@type": "ListItem", position: 3, name: "Preise", item: PAGE_URL }
      ]
    }
  ]
};

// ─── Card ─────────────────────────────────────────────────────────
function PriceCard({ item }: { item: PriceItem }) {
  const { main, unit } = formatPrice(item);
  const isRange = item.priceFrom !== undefined;

  return (
    <article className="flex h-full flex-col rounded-3xl border border-ink-900/10 bg-white p-6 shadow-soft transition-all md:p-7">
      <header>
        <div className="flex flex-wrap items-center gap-1.5">
          {isRange && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/25 bg-accent-500/10 px-2.5 py-1 text-[11px] font-medium tracking-tight text-accent-800">
              Festpreis-Korridor
            </span>
          )}
          {item.duration && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-ink-50 px-2.5 py-1 text-[11px] font-medium text-ink-600">
              <Clock size={10} strokeWidth={2.4} />
              {item.duration}
            </span>
          )}
        </div>
        <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight text-ink-900 sm:text-xl">
          {item.name}
        </h3>
      </header>

      <div className="mt-5">
        <p className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          {main}
        </p>
        {unit && (
          <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-500">
            {unit}
          </p>
        )}
      </div>

      {item.note && (
        <p className="mt-5 rounded-2xl border border-ink-900/8 bg-ink-50/60 px-4 py-3 text-[13px] leading-relaxed text-ink-600">
          {item.note}
        </p>
      )}

      <div className="mt-6 flex-1" />
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function BusinessPreisePage() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero ------------------------------------------------------ */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
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
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="chip">
                <Building2 size={12} strokeWidth={2.4} />
                KBS Business · Preise
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/25 bg-accent-500/10 px-2.5 py-1 text-[11px] font-medium tracking-tight text-accent-800">
                <ShieldCheck size={11} strokeWidth={2.4} />
                Festpreise pro Phase
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[68px]">
              Enterprise-KI,
              <br />
              <span className="display italic text-ink-500">
                mit klarem Festpreis.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Preise gelten für KBS Business – Projekte für mittelständische
              Unternehmen und Konzerne. Alle Angebote netto zzgl. USt.,
              Preisspannen dienen der frühen Orientierung. Der verbindliche
              Festpreis wird nach einer Anforderungsanalyse im
              Kennenlerngespräch fixiert – ohne offene Stundenzettel.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: "Festpreise pro Phase", icon: ShieldCheck },
                { label: "Anfahrt im Saarland inklusive", icon: MapPin },
                { label: "Zahlung per Überweisung, Rechnung", icon: Wallet }
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-2.5 rounded-2xl border border-ink-900/8 bg-white/70 px-4 py-3 text-[13px] font-medium text-ink-600 backdrop-blur-sm"
                >
                  <Icon
                    size={14}
                    strokeWidth={2.2}
                    className="mt-0.5 flex-shrink-0 text-accent-700"
                  />
                  {label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Business offers ----------------------------------------- */}
      <section id="business" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="chip">
                  <Building2 size={12} strokeWidth={2.4} />
                  Business-Angebote
                </span>
                <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                  Sechs Bausteine,
                  <br />
                  <span className="display italic text-ink-500">
                    einzeln oder kombiniert.
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-500">
                  Von der lokalen KI auf Ihrer Hardware über Custom
                  RAG-Assistenten bis zur laufenden Managed-KI-Betreuung. Jeder
                  Baustein einzeln oder als Teil eines mehrstufigen
                  Rollouts buchbar.
                </p>
              </div>
              <div className="inline-flex items-start gap-2 rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-[12.5px] leading-snug text-ink-500 backdrop-blur-sm">
                <Info size={13} strokeWidth={2.2} className="mt-0.5 flex-shrink-0" />
                <span>
                  Alle Preise netto zzgl. gesetzlicher USt. · Verbindlich nach
                  Anforderungsanalyse im Kennenlerngespräch.
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_ITEMS.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.04}>
                <PriceCard item={item} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-white md:flex-row md:items-center md:p-10">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500/15">
                  <ShieldCheck
                    size={18}
                    strokeWidth={1.9}
                    className="text-accent-400"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-medium">
                    Alle Business-Projekte mit Festpreis-Korridor pro Phase
                  </p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">
                    Preis-Spannen dienen der frühen Orientierung. Der
                    verbindliche Festpreis wird nach einer Anforderungsanalyse
                    im Kennenlerngespräch fixiert – ohne offene Stundenzettel.
                  </p>
                </div>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink-900 transition-all hover:-translate-y-0.5"
              >
                30-Min-Strategiegespräch buchen
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Konditionen ---------------------------------------------- */}
      <section id="konditionen" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl md:mb-14">
              <span className="chip">
                <Info size={12} strokeWidth={2.4} />
                Konditionen
              </span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
                Das Kleingedruckte,
                <br />
                <span className="display italic text-ink-500">
                  in verständlicher Form.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Anfahrt & Reise",
                body: PRICING_META.travelIncluded,
                icon: MapPin
              },
              {
                title: "Zahlung",
                body: `${PRICING_META.payment}. Zahlungsziel 14 Tage nach Rechnungsstellung.`,
                icon: Wallet
              },
              {
                title: "Anforderungsanalyse",
                body: "Vor jedem Business-Projekt findet eine kostenlose Anforderungsanalyse statt, aus der der verbindliche Festpreis abgeleitet wird.",
                icon: Users
              },
              {
                title: "Gültigkeit",
                body: `Preise gültig ab ${new Date(PRICING_META.validFrom).toLocaleDateString("de-DE")}. Für laufende Verträge gelten die vereinbarten Konditionen weiter.`,
                icon: ShieldCheck
              }
            ].map(({ title, body, icon: Icon }) => (
              <Reveal key={title}>
                <div className="card flex h-full flex-col p-6 md:p-7">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                    <Icon size={16} strokeWidth={2} className="text-accent-700" />
                  </div>
                  <h3 className="mt-5 text-[15px] font-medium tracking-tight text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA ------------------------------------------------------- */}
      <section id="termin" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="card-lift overflow-hidden">
              <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:p-12">
                <div>
                  <span className="chip">Kostenloses Kennenlerngespräch</span>
                  <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
                    Preis-Frage?
                    <br />
                    <span className="display italic text-ink-500">
                      30 Minuten reichen.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-ink-500">
                    Sie schildern Ihre Situation, wir bewerten Machbarkeit,
                    Potenzial und Kosten. Nach dem Termin bekommen Sie einen
                    verbindlichen Festpreis pro Phase – ohne Verkaufsdruck.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <CalendarClock size={16} strokeWidth={2.4} />
                      Termin buchen
                    </a>
                    <Link href="/business" className="btn-ghost">
                      Zurück zur Business-Übersicht
                      <ArrowUpRight size={16} strokeWidth={2.2} />
                    </Link>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all hover:shadow-lift"
                  >
                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                      <Phone size={16} strokeWidth={2} className="text-accent-700" />
                    </div>
                    <div>
                      <p className="text-[13.5px] font-medium text-ink-900">
                        Telefonisch
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                        {PHONE_DISPLAY} · Mo – Fr, 09 – 18 Uhr
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=KBS%20Business%20Preisanfrage`}
                    className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all hover:shadow-lift"
                  >
                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-900/10 bg-ink-50">
                      <Mail size={16} strokeWidth={2} className="text-ink-700" />
                    </div>
                    <div>
                      <p className="text-[13.5px] font-medium text-ink-900">
                        Per E-Mail
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                        {EMAIL}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
