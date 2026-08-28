import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  User,
  Users,
  GraduationCap,
  Presentation,
  Compass,
  Server,
  Database,
  Zap,
  Boxes,
  Wrench,
  ShieldCheck,
  Info,
  Phone,
  Mail,
  Wallet,
  MapPin,
  CalendarClock,
  Radio,
  Building2
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  PRICING,
  PRICING_META,
  PRICING_SECTIONS,
  type PriceItem,
  type PriceSection,
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
  "Alle Preise von KBS auf einen Blick: Privatpersonen, Selbstständige, Zertifikatskurse (KMU) sowie Inhouse-Kurse, Projektphasen, lokale KI, Custom RAG-Assistenten, Automation, Rollout und Software-Bausteine (Business). Transparent, ohne Beratungshaus-Aufschlag.";

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
    "KI Workshop Preis",
    "KI-Check Kosten",
    "KI-Sprechstunde Kosten",
    "Inhouse KI Schulung Preis",
    "Custom RAG Assistent Preis",
    "Lokale KI Kosten",
    "Voice Agent Preis",
    "Prozess Automation KI Preis",
    "KI Rollout Enterprise",
    "DSGVO KI Beratung Preis",
    "EU AI Act Beratung Preis",
    "Managed KI Preis"
  ]
};

// ─── Order / Icons ────────────────────────────────────────────────
const KMU_SECTIONS: PriceSection[] = [
  "privatpersonen",
  "selbststaendige",
  "zertifikatskurse-offen"
];

const BUSINESS_SECTIONS: PriceSection[] = [
  "inhouse-kurse",
  "projektphasen",
  "lokale-ki",
  "rag-assistent",
  "automation-voice-rollout",
  "software-bausteine",
  "laufender-betrieb"
];

const SECTION_ICON: Record<PriceSection, typeof User> = {
  privatpersonen: User,
  selbststaendige: Users,
  "zertifikatskurse-offen": GraduationCap,
  "inhouse-kurse": Presentation,
  projektphasen: Compass,
  "lokale-ki": Server,
  "rag-assistent": Database,
  "automation-voice-rollout": Zap,
  "software-bausteine": Boxes,
  "laufender-betrieb": Wrench
};

// ─── Helpers ──────────────────────────────────────────────────────
const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

function formatPrice(price: number | null): string {
  if (price === null) return "auf Anfrage";
  if (price === 0) return "Kostenlos";
  return euro.format(price);
}

function unitLabel(unit: PriceUnit): string {
  return unit;
}

function taxSuffix(tax: "brutto" | "netto"): string {
  return tax === "netto" ? "netto" : "brutto";
}

const bySection = (s: PriceSection) => PRICING.filter((p) => p.section === s);

// ─── JSON-LD ──────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "OfferCatalog",
      "@id": `${PAGE_URL}#offers`,
      name: "KBS – Preisübersicht",
      itemListElement: PRICING.map((item) => {
        const cust =
          PRICING_SECTIONS[item.section].audience === "privat"
            ? "Consumer"
            : "Business";
        return {
          "@type": "Offer",
          name: item.name,
          priceCurrency: "EUR",
          ...(item.price !== null ? { price: item.price } : {}),
          priceValidUntil: "2027-08-31",
          eligibleCustomerType: cust,
          description: item.detail ?? undefined,
          category: item.section
        };
      })
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

// ─── Section renderer ─────────────────────────────────────────────
function PriceRow({ item, dark }: { item: PriceItem; dark: boolean }) {
  const border = dark ? "border-white/10" : "border-ink-900/8";
  const nameText = dark ? "text-white" : "text-ink-900";
  const detailText = dark ? "text-white/60" : "text-ink-500";
  const priceText = dark ? "text-white" : "text-ink-900";
  const captionText = dark ? "text-white/50" : "text-ink-400";
  const noteBg = dark
    ? "border-white/10 bg-white/[0.03] text-white/70"
    : "border-ink-900/8 bg-ink-50/60 text-ink-500";
  const addOnBg = dark
    ? "border-accent-400/25 bg-accent-500/10 text-accent-300"
    : "border-accent-500/25 bg-accent-500/10 text-accent-800";

  return (
    <div
      className={`flex flex-col gap-3 border-b px-6 py-5 last:border-b-0 md:flex-row md:items-center md:justify-between md:gap-8 md:py-6 ${border}`}
    >
      <div className="min-w-0 flex-1">
        <p className={`text-[15.5px] font-medium tracking-tight ${nameText}`}>
          {item.name}
        </p>
        {item.detail && (
          <p className={`mt-1 text-[13px] leading-snug ${detailText}`}>
            {item.detail}
          </p>
        )}
        <div
          className={`mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11.5px] uppercase tracking-[0.14em] ${captionText}`}
        >
          {item.duration && <span>{item.duration}</span>}
        </div>
        {item.note && (
          <p
            className={`mt-3 inline-flex rounded-lg border px-2.5 py-1 text-[12px] leading-snug ${noteBg}`}
          >
            {item.note}
          </p>
        )}
      </div>

      <div className="flex-shrink-0 md:text-right">
        <p className={`text-2xl font-semibold tracking-tight ${priceText}`}>
          {formatPrice(item.price)}
        </p>
        <p
          className={`mt-0.5 text-[11.5px] font-medium uppercase tracking-[0.14em] ${captionText}`}
        >
          {taxSuffix(item.tax)} · {unitLabel(item.unit)}
        </p>
        {item.addOnPrice !== undefined && item.addOnUnit && (
          <p
            className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-medium tracking-tight ${addOnBg}`}
          >
            {item.addOnLabel ?? "Zusatz"}: {euro.format(item.addOnPrice)} ·{" "}
            {item.addOnUnit}
          </p>
        )}
      </div>
    </div>
  );
}

function PriceSectionBlock({
  sectionKey,
  dark = false
}: {
  sectionKey: PriceSection;
  dark?: boolean;
}) {
  const meta = PRICING_SECTIONS[sectionKey];
  const items = bySection(sectionKey);
  const Icon = SECTION_ICON[sectionKey];

  const eyebrowChip = dark
    ? "border-white/15 bg-white/[0.06] text-white/80"
    : "chip";
  const iconWrap = dark
    ? "border-accent-400/25 bg-accent-500/15"
    : "border-accent-500/25 bg-accent-500/10";
  const iconColor = dark ? "text-accent-300" : "text-accent-700";
  const title = dark ? "text-white" : "text-ink-900";
  const intro = dark ? "text-white/70" : "text-ink-500";
  const wrap = dark
    ? "border-white/10 bg-white/[0.03]"
    : "border-ink-900/10 bg-white shadow-soft";

  return (
    <section id={sectionKey} className="scroll-mt-32 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-8 max-w-3xl md:mb-10">
            <div className="flex items-center gap-3">
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${iconWrap}`}
              >
                <Icon size={18} strokeWidth={1.9} className={iconColor} />
              </div>
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11.5px] font-medium tracking-tight ${eyebrowChip}`}
              >
                {items.length} {items.length === 1 ? "Position" : "Positionen"}
                {meta.isLive && (
                  <>
                    <span className="mx-0.5 text-current opacity-40">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="relative inline-flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-70" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
                      </span>
                      Live-Format
                    </span>
                  </>
                )}
              </span>
            </div>
            <h2
              className={`mt-5 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl ${title}`}
            >
              {meta.label}
            </h2>
            <p className={`mt-4 text-[15px] leading-relaxed ${intro}`}>
              {meta.intro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className={`overflow-hidden rounded-3xl border ${wrap}`}>
            {items.map((item) => (
              <PriceRow key={item.id} item={item} dark={dark} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function PreisePage() {
  const kmuNav = KMU_SECTIONS.map((k) => ({
    key: k,
    label: PRICING_SECTIONS[k].label,
    count: bySection(k).length
  }));
  const bizNav = BUSINESS_SECTIONS.map((k) => ({
    key: k,
    label: PRICING_SECTIONS[k].label,
    count: bySection(k).length
  }));

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero ------------------------------------------------------ */}
      <section className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-accent-100 opacity-30 blur-3xl" />
          <div className="absolute -right-40 top-40 h-[560px] w-[560px] rounded-full bg-ink-100 opacity-60 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="chip">
              <Wallet size={12} strokeWidth={2.4} />
              Preise · gültig ab{" "}
              {new Date(PRICING_META.validFrom).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[42px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[68px]">
              Transparente Preise.
              <br />
              <span className="display italic text-ink-500">
                Kein Beratungshaus-Aufschlag.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Alle Preise wie angegeben – Privatkunden brutto (PAngV § 3), alle
              B2B-Angebote netto zzgl. USt. Anfahrt im Saarland inklusive,
              Erstgespräch kostenlos.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
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
          </Reveal>

          {/* Sprung-Navigation */}
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-4">
              <div>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  KMU · Privatkunden & Selbstständige
                </p>
                <div className="flex flex-wrap gap-2">
                  {kmuNav.map((n) => {
                    const Icon = SECTION_ICON[n.key];
                    return (
                      <a
                        key={n.key}
                        href={`#${n.key}`}
                        className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-3.5 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900"
                      >
                        <Icon size={13} strokeWidth={2.2} />
                        {n.label}
                        <span className="text-[11px] text-ink-400">{n.count}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Business · Mittelstand & Konzerne
                </p>
                <div className="flex flex-wrap gap-2">
                  {bizNav.map((n) => {
                    const Icon = SECTION_ICON[n.key];
                    return (
                      <a
                        key={n.key}
                        href={`#${n.key}`}
                        className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-ink-900 px-3.5 py-2 text-[13px] font-medium text-white transition-all hover:-translate-y-0.5"
                      >
                        <Icon
                          size={13}
                          strokeWidth={2.2}
                          className="text-accent-400"
                        />
                        {n.label}
                        <span className="text-[11px] text-white/60">{n.count}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KMU sections ------------------------------------------- */}
      {KMU_SECTIONS.map((k) => (
        <PriceSectionBlock key={k} sectionKey={k} />
      ))}

      {/* Divider: Business ---------------------------------------- */}
      <section id="business" className="relative bg-ink-900 pt-24 pb-4 md:pt-32 md:pb-6">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-64 opacity-50"
          style={{
            background:
              "radial-gradient(700px 240px at 50% 0%, rgba(88,192,56,0.22), transparent 60%)"
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col items-start gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11.5px] font-medium tracking-tight text-white/80">
                <Building2 size={12} strokeWidth={2.4} />
                KBS Business
              </span>
              <h2 className="text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                Für Mittelstand & Konzerne.
                <br />
                <span className="display italic text-white/60">
                  Enterprise-Preise pro Phase.
                </span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                Alle Preise netto zzgl. USt. Fixpreise pro Phase – Preisspannen
                oder ROI-Diskussionen sortieren wir im kostenlosen Discovery-Call.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Business sections (dark theme) -------------------------- */}
      <div className="relative bg-ink-900">
        {BUSINESS_SECTIONS.map((k) => (
          <PriceSectionBlock key={k} sectionKey={k} dark />
        ))}
      </div>

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
                body: `${PRICING_META.earlyBirdWeeks} Wochen vor Kursstart gilt der Frühbucherpreis, danach reguläre Kondition.`,
                icon: CalendarClock
              },
              {
                title: "Gültigkeit",
                body: `Preise gültig ab ${new Date(PRICING_META.validFrom).toLocaleDateString(
                  "de-DE"
                )}. Für laufende Verträge gelten die vereinbarten Konditionen weiter.`,
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
                    Sie schildern Ihre Situation, wir sagen ehrlich, welche
                    Leistung passt – und was sie kostet. Ohne Verkaufsdruck.
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
