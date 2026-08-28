import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  Users,
  Briefcase,
  User,
  GraduationCap,
  ShieldCheck,
  Info,
  Phone,
  Mail,
  Clock,
  Wallet,
  MapPin
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

const PAGE_URL = `${SITE_URL}/preise`;
const DESCRIPTION =
  "Alle Preise von KBS – KI-Beratung Saar auf einen Blick. Privatpersonen (brutto), Selbstständige, Unternehmen bis 20 Mitarbeiter, KBS Business und Zertifikatskurse (netto zzgl. USt.). Anfahrt im Saarland inklusive, kostenloses Erstgespräch.";

export const metadata: Metadata = {
  title: "Preise · KBS – KI-Beratung Saar",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "KBS – KI-Beratung Saar",
    title: "Preise · KBS – KI-Beratung Saar",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KBS Preise – transparent, ohne Beratungshaus-Aufschlag"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise · KBS – KI-Beratung Saar",
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
    "KI Beratung Preise",
    "KI Beratung Saarland Preise",
    "ChatGPT Schulung Kosten",
    "KI Workshop Preis",
    "KI-Check Kosten",
    "KBS Business Preise",
    "lokale KI Kosten",
    "RAG Assistent Preis",
    "KI Voice Agent Preis",
    "KI Sprechstunde Kosten",
    "EU AI Act Beratung Preis",
    "Custom RAG Kosten"
  ]
};

// ─── Helpers ──────────────────────────────────────────────────────
const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

function formatPrice(item: PriceItem): { main: string; unit: string } {
  const unit = renderUnit(item.unit, item.tax);
  if (item.price === 0) return { main: "Kostenlos", unit: item.tax === "netto" ? "netto" : "" };
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

function renderUnit(unit: PriceUnit, tax: "brutto" | "netto"): string {
  const taxLabel = tax === "netto" ? "netto" : "brutto";
  return `${taxLabel} · ${unit}`;
}

function participantsLabel(item: PriceItem): string | null {
  if (item.minParticipants && item.maxParticipants) {
    return `${item.minParticipants}–${item.maxParticipants} Teilnehmer`;
  }
  if (item.maxParticipants) return `bis ${item.maxParticipants} Teilnehmer`;
  return null;
}

// ─── Segment definitions ──────────────────────────────────────────
type SegmentKey = "privat" | "selbststaendig" | "kmu" | "business" | "kurse";

const SEGMENTS: Array<{
  key: SegmentKey;
  anchor: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  icon: typeof User;
  taxNote: string;
}> = [
  {
    key: "privat",
    anchor: "privat",
    eyebrow: "Privatpersonen",
    title: "KI im Alltag,",
    titleAccent: "einmal richtig eingerichtet.",
    intro:
      "Persönliche Hilfe für alle, die ChatGPT und andere KI-Werkzeuge sicher nutzen möchten – ohne Vorwissen und ohne Vertrag mit Laufzeit.",
    icon: User,
    taxNote:
      "Alle Preise inkl. gesetzlicher USt. gemäß PAngV § 3 – der Endpreis, den Sie zahlen."
  },
  {
    key: "selbststaendig",
    anchor: "selbststaendig",
    eyebrow: "Selbstständige & kleine Teams",
    title: "Klarheit in 60 – 180 Minuten.",
    titleAccent: "Kein Konzeptpapier.",
    intro:
      "Für Handwerk, Freiberufler, Kanzleien, Praxen und Agenturen. Analyse, Workshop und Umsetzung – einzeln buchbar, ohne Bindung.",
    icon: Briefcase,
    taxNote: "Alle Preise netto zzgl. gesetzlicher USt."
  },
  {
    key: "kmu",
    anchor: "kmu",
    eyebrow: "Unternehmen bis 20 Mitarbeiter",
    title: "KI, die auch nach dem Workshop trägt.",
    titleAccent: "Einrichtung, Audit, Sprechstunde.",
    intro:
      "Einrichtung Ihrer Werkzeuge, Audit Ihrer Bestandsnutzung oder eine feste monatliche Sprechstunde – als klarer Ansprechpartner statt Beratungshaus.",
    icon: Users,
    taxNote: "Alle Preise netto zzgl. gesetzlicher USt."
  },
  {
    key: "business",
    anchor: "business",
    eyebrow: "KBS Business",
    title: "Enterprise-KI mit lokaler Datenhoheit.",
    titleAccent: "Festpreise pro Phase.",
    intro:
      "Für Mittelstand und Konzerne: lokale KI auf Ihrer Hardware, Custom RAG-Assistenten, Prozess-Automation, Voice-Agents und EU-AI-Act-Compliance. Alle Projekte mit klaren Festpreis-Korridoren pro Phase.",
    icon: Building2,
    taxNote:
      "Alle Preise netto zzgl. gesetzlicher USt. · Verbindlich nach Anforderungsanalyse im Kennenlerngespräch."
  },
  {
    key: "kurse",
    anchor: "kurse",
    eyebrow: "Zertifikatskurse",
    title: "KBS-Zertifikat inklusive.",
    titleAccent: "Live-Gruppe, kein Massenformat.",
    intro:
      "Öffentliche Live-Termine mit maximal 12 Teilnehmern. Frühbucher-Vorteil bei Anmeldung mindestens vier Wochen im Voraus.",
    icon: GraduationCap,
    taxNote: "Alle Preise netto zzgl. gesetzlicher USt."
  }
];

const bySegment = (key: SegmentKey) => PRICING.filter((p) => p.segment === key);

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
        "B2C-Preise inkl. gesetzlicher USt. gemäß PAngV § 3, B2B-Preise netto zzgl. USt."
    },
    {
      "@type": "OfferCatalog",
      "@id": `${PAGE_URL}#offers`,
      name: "KBS – Preisübersicht",
      itemListElement: PRICING.map((item) => ({
        "@type": "Offer",
        name: item.name,
        priceCurrency: "EUR",
        ...(item.price !== null && item.price !== undefined
          ? { price: item.price }
          : item.priceFrom !== undefined
          ? { priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: item.priceFrom,
              maxPrice: item.priceTo,
              priceCurrency: "EUR",
              valueAddedTaxIncluded: item.tax === "brutto"
            } }
          : {}),
        priceValidUntil: "2027-08-31",
        eligibleCustomerType:
          item.segment === "privat" ? "Consumer" : "Business",
        description: item.note ?? undefined,
        category: item.segment
      }))
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Preise", item: PAGE_URL }
      ]
    }
  ]
};

// ─── Card components ──────────────────────────────────────────────
function PriceCard({ item, dark = false }: { item: PriceItem; dark?: boolean }) {
  const { main, unit } = formatPrice(item);
  const participants = participantsLabel(item);

  const bg = dark
    ? "border-white/10 bg-white/[0.04] text-white"
    : "border-ink-900/10 bg-white text-ink-900";
  const secondaryText = dark ? "text-white/60" : "text-ink-500";
  const noteBg = dark
    ? "border-white/10 bg-white/[0.03] text-white/75"
    : "border-ink-900/8 bg-ink-50/60 text-ink-600";
  const chipBg = dark
    ? "border-white/15 bg-white/[0.06] text-white/80"
    : "border-ink-900/10 bg-white text-ink-600";

  return (
    <article
      className={`flex h-full flex-col rounded-3xl border p-6 shadow-soft transition-all md:p-7 ${bg}`}
    >
      <header>
        <div className="flex flex-wrap items-center gap-1.5">
          {item.duration && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${chipBg}`}
            >
              <Clock size={10} strokeWidth={2.4} />
              {item.duration}
            </span>
          )}
          {participants && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${chipBg}`}
            >
              <Users size={10} strokeWidth={2.4} />
              {participants}
            </span>
          )}
        </div>
        <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight sm:text-xl">
          {item.name}
        </h3>
      </header>

      <div className="mt-5">
        <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {main}
        </p>
        {unit && (
          <p
            className={`mt-1 text-[12px] font-medium uppercase tracking-[0.14em] ${secondaryText}`}
          >
            {unit}
          </p>
        )}
      </div>

      {item.note && (
        <p
          className={`mt-5 rounded-2xl border px-4 py-3 text-[13px] leading-relaxed ${noteBg}`}
        >
          {item.note}
        </p>
      )}

      <div className="mt-6 flex-1" />
    </article>
  );
}

function SegmentSection({
  segmentKey,
  dark = false
}: {
  segmentKey: SegmentKey;
  dark?: boolean;
}) {
  const seg = SEGMENTS.find((s) => s.key === segmentKey)!;
  const items = bySegment(segmentKey);
  const Icon = seg.icon;

  const eyebrowChip = dark
    ? "border-white/15 bg-white/[0.06] text-white/80"
    : "chip";
  const headline = dark ? "text-white" : "text-ink-900";
  const accent = dark ? "text-white/60" : "text-ink-500";
  const intro = dark ? "text-white/75" : "text-ink-500";
  const taxNoteBg = dark
    ? "border-white/10 bg-white/[0.03] text-white/70"
    : "border-ink-900/10 bg-white text-ink-500";

  const gridCols =
    items.length >= 4
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : items.length === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2";

  return (
    <section
      id={seg.anchor}
      className={`relative ${
        dark ? "bg-ink-900" : ""
      } py-24 md:py-32`}
    >
      {dark && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 opacity-40"
          style={{
            background:
              "radial-gradient(600px 200px at 20% 0%, rgba(88,192,56,0.25), transparent 60%)"
          }}
        />
      )}

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 flex flex-col items-start gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11.5px] font-medium tracking-tight ${eyebrowChip}`}
              >
                <Icon size={12} strokeWidth={2.4} />
                {seg.eyebrow}
              </span>
              <h2
                className={`mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl ${headline}`}
              >
                {seg.title}
                <br />
                <span className={`display italic ${accent}`}>
                  {seg.titleAccent}
                </span>
              </h2>
              <p className={`mt-6 max-w-xl text-[15.5px] leading-relaxed ${intro}`}>
                {seg.intro}
              </p>
            </div>
            <div
              className={`inline-flex items-start gap-2 rounded-2xl border px-4 py-3 text-[12.5px] leading-snug backdrop-blur-sm ${taxNoteBg}`}
            >
              <Info size={13} strokeWidth={2.2} className="mt-0.5 flex-shrink-0" />
              <span>{seg.taxNote}</span>
            </div>
          </div>
        </Reveal>

        <div className={`grid grid-cols-1 gap-5 ${gridCols}`}>
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <PriceCard item={item} dark={dark} />
            </Reveal>
          ))}
        </div>

        {dark && (
          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-white md:flex-row md:items-center md:p-10">
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
                    Preis-Spannen dienen der frühen Orientierung. Der verbindliche
                    Festpreis wird nach einer Anforderungsanalyse im
                    Kennenlerngespräch fixiert – ohne offene Stundenzettel.
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
        )}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function PreisePage() {
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
          <span className="chip">
            <Wallet size={12} strokeWidth={2.4} />
            Preise · gültig ab {new Date(PRICING_META.validFrom).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
          </span>
          <h1 className="mt-6 text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[68px]">
            Transparente Preise.
            <br />
            <span className="display italic text-ink-500">
              Kein Beratungshaus-Aufschlag.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Fünf Segmente, ein Ansprechpartner. Alle Preise gelten wie
            angegeben – Privatpersonen brutto, alle B2B-Angebote netto zzgl.
            USt. Anfahrt im Saarland inklusive.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {SEGMENTS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.key}
                  href={`#${s.anchor}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-3.5 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
                >
                  <Icon size={13} strokeWidth={2.2} />
                  {s.eyebrow}
                  <span className="text-[11px] text-ink-400">
                    {bySegment(s.key).length}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: "PAngV § 3 · brutto für Privatkunden", icon: ShieldCheck },
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
        </div>
      </section>

      {/* Segments -------------------------------------------------- */}
      <SegmentSection segmentKey="privat" />
      <SegmentSection segmentKey="selbststaendig" />
      <SegmentSection segmentKey="kmu" />
      <SegmentSection segmentKey="business" dark />
      <SegmentSection segmentKey="kurse" />

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
                title: "Frühbucher",
                body: `${PRICING_META.earlyBirdWeeks} Wochen vor Kursstart gilt der Frühbucherpreis. Danach reguläre Kondition.`,
                icon: Clock
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
                  <span className="chip">Kostenloses Erstgespräch</span>
                  <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
                    Preis-Frage?
                    <br />
                    <span className="display italic text-ink-500">
                      Rufen Sie einfach an.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-ink-500">
                    Nicht jede Preisspanne passt sofort. Im kostenlosen
                    Erstgespräch klären wir Ihre Situation und sagen ehrlich, ob
                    und welche Leistung sinnvoll ist – ohne Verkaufsdruck.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Termin buchen
                      <ArrowRight size={16} strokeWidth={2.2} />
                    </a>
                    <Link href="/leistungen" className="btn-ghost">
                      Leistungen ansehen
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
                    href={`mailto:${EMAIL}?subject=KBS%20Preisanfrage`}
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
                  <Link
                    href="/business"
                    className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-ink-900 p-5 text-white transition-all hover:-translate-y-0.5"
                  >
                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Building2 size={16} strokeWidth={2} className="text-accent-400" />
                    </div>
                    <div>
                      <p className="text-[13.5px] font-medium">
                        Enterprise-Anfrage?
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-white/70">
                        Direkt zur KBS Business-Übersicht
                      </p>
                    </div>
                  </Link>
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
