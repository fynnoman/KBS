import type { Metadata } from "next";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import ProcessInput from "@/components/platform/ProcessInput";
import SectionHeading from "@/components/platform/SectionHeading";
import RelatedGrid from "@/components/platform/RelatedGrid";
import { PROBLEMS } from "@/lib/data/platform/problems";
import { AUTOMATIONS } from "@/lib/data/platform/automations";
import { INTEGRATIONS } from "@/lib/data/platform/integrations";
import { SOFTWARES } from "@/lib/data/platform/softwares";
import { SITE_URL } from "@/lib/config";

const PATH = "/plattform";

export const metadata: Metadata = {
  title: "KBS Automatisierungs-Plattform · Prozesse mit KI und Software lösen",
  description:
    "Beschreiben Sie einen Prozess oder ein Problem und finden Sie in Sekunden die passende Automatisierung, Schnittstelle oder Software. Von KBS KI-Beratung Saar für mittelständische Unternehmen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "KBS Automatisierungs-Plattform",
    description:
      "Automatisierung, Schnittstellen und individuelle Software für konkrete Unternehmensprozesse.",
    url: `${SITE_URL}${PATH}`,
    type: "website",
    locale: "de_DE",
    siteName: "KBS KI-Beratung Saar"
  }
};

const HIGHLIGHT_PROBLEMS = [
  "emails-manuell-beantworten",
  "rechnungen-manuell-verarbeiten",
  "angebote-manuell-erstellen",
  "doppelte-dateneingabe",
  "fehlende-schnittstelle",
  "telefonannahme-entlasten",
  "dokumente-manuell-pruefen",
  "whatsapp-anfragen-verwalten"
];

const HIGHLIGHT_INTEGRATIONS = [
  "datev-hubspot",
  "datev-microsoft-365",
  "outlook-hubspot",
  "whatsapp-hubspot",
  "shopify-datev",
  "microsoft-365-hubspot"
];

const WHAT_KBS_BUILDS = [
  "KI-Assistenten (RAG)",
  "Automatisierungen",
  "Lokale KI",
  "E-Mail-Automatisierung",
  "CRM-/ERP-Integration",
  "Schnittstellen",
  "Sprach-KI",
  "Individuelle Software"
];

export default function PlatformHome() {
  return (
    <PlatformShell>
      {/* HERO */}
      <section className="border-b border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Automatisierungs-Plattform
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-ink-900 md:text-6xl">
              Welchen Prozess möchten Sie automatisieren?
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-600 md:text-[17px]">
              KBS entwickelt KI-Systeme, Schnittstellen und Automatisierungen
              für konkrete Unternehmensprozesse. Beschreiben Sie das Problem ·
              wir zeigen den passenden Lösungsweg und liefern eine kostenlose
              Ersteinschätzung.
            </p>
          </div>
          <div className="mt-8 md:mt-10">
            <ProcessInput />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <EntryCard
              href="/probleme"
              eyebrow="1"
              title="Problem lösen"
              sub="Wählen Sie ein konkretes Problem aus. Wir zeigen typische Symptome, Ursachen und den passenden Lösungsweg."
            />
            <EntryCard
              href="/automatisieren"
              eyebrow="2"
              title="Prozess automatisieren"
              sub="Durchsuchen Sie die Datenbank aller Automatisierungen. Mit Automatisierungslevel, Voraussetzungen und Empfehlung."
            />
            <EntryCard
              href="/schnittstelle"
              eyebrow="3"
              title="Software verbinden"
              sub="Sie suchen eine Verbindung zwischen zwei Systemen? Alle Schnittstellen im Überblick, mit Status und Datenfeldern."
            />
          </div>
        </div>
      </section>

      {/* HÄUFIGE PROBLEME */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Häufige Probleme"
          title="Die meistgesuchten Ausgangslagen"
          sub="Aus der KBS-Praxis: Themen, die im Mittelstand regelmäßig zu manueller Mehrarbeit, Medienbrüchen und Verzögerungen führen."
        />
        <div className="mt-8">
          <RelatedGrid
            title="Probleme"
            items={HIGHLIGHT_PROBLEMS.map((slug) => {
              const p = PROBLEMS.find((x) => x.slug === slug)!;
              return {
                href: `/probleme/${p.slug}`,
                eyebrow: "Problem",
                title: p.title,
                sub: p.hero.sub
              };
            })}
          />
        </div>
      </section>

      {/* WAS KBS BAUT */}
      <section className="border-y border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Was KBS umsetzt"
            title="Konkrete Systeme, keine abstrakte Beratung"
            sub="Wir bauen keine Konzepte, sondern Umsetzungen. Das sind die Bausteine, mit denen wir arbeiten."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {WHAT_KBS_BUILDS.map((w) => (
              <li
                key={w}
                className="card p-5 text-[14px] font-medium text-ink-900"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SCHNITTSTELLEN */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Schnittstellen"
          title="Systeme verbinden statt ersetzen"
          sub="Ihre Software bleibt. Wir bauen die Schnittstellen dazwischen. Ein Auszug der häufigsten Kombinationen."
        />
        <div className="mt-8">
          <RelatedGrid
            title="Beliebte Schnittstellen"
            items={HIGHLIGHT_INTEGRATIONS.map((slug) => {
              const i = INTEGRATIONS.find((x) => x.slug === slug)!;
              return {
                href: `/schnittstelle/${i.slug}`,
                eyebrow: "Schnittstelle",
                title: `${i.systemA} ↔ ${i.systemB}`,
                sub: i.typicalUseCases[0]
              };
            })}
          />
        </div>
      </section>

      {/* BESTEHENDE SYSTEME */}
      <section className="border-t border-ink-900/8 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <SectionHeading
              eyebrow="Bestehende Systeme weiter nutzen"
              title="KBS ersetzt nichts, was funktioniert"
              sub="In den meisten Projekten integrieren wir Automatisierung direkt in Ihre bestehende Softwarelandschaft · DATEV, Microsoft 365, HubSpot, Ihre Branchensoftware. Wir bauen die Verbindungen, die fehlen, und die Software, die es sonst nicht gibt."
            />
            <div className="mt-6">
              <Link
                href="/software"
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white px-5 py-2.5 text-[13px] font-semibold text-ink-900 transition-colors hover:border-accent-300"
              >
                Software-Profile ansehen
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
          <div className="card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Katalog-Umfang
            </div>
            <ul className="mt-4 divide-y divide-ink-900/8 text-[14px] text-ink-800">
              <StatRow label="Probleme" value={PROBLEMS.length} />
              <StatRow label="Automatisierungen" value={AUTOMATIONS.length} />
              <StatRow label="Schnittstellen" value={INTEGRATIONS.length} />
              <StatRow label="Software-Profile" value={SOFTWARES.length} />
            </ul>
            <p className="mt-5 text-[12.5px] leading-relaxed text-ink-500">
              Der Katalog wächst laufend. Sie vermissen einen Prozess oder eine
              Software? Über <Link className="underline underline-offset-2" href="/kontakt">Kontakt</Link> geben Sie
              uns einen Hinweis. Wir ergänzen.
            </p>
          </div>
        </div>
      </section>
    </PlatformShell>
  );
}

function EntryCard({
  href,
  eyebrow,
  title,
  sub
}: {
  href: string;
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <Link
      href={href}
      className="group card-lift flex flex-col justify-between gap-6 p-7 transition-transform hover:-translate-y-0.5"
    >
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          {eyebrow}
        </div>
        <div className="mt-2 text-xl font-semibold text-ink-900">{title}</div>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{sub}</p>
      </div>
      <div className="flex items-center gap-2 text-[13px] font-semibold text-ink-900">
        Öffnen
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          ↗
        </span>
      </div>
    </Link>
  );
}

function StatRow({ label, value }: { label: string; value: number }) {
  return (
    <li className="flex items-center justify-between py-3">
      <span className="text-ink-600">{label}</span>
      <span className="font-semibold text-ink-900">{value}</span>
    </li>
  );
}
