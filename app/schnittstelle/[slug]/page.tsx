import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import IntegrationStatusBadge from "@/components/platform/IntegrationStatusBadge";
import DataStatusBadge from "@/components/platform/DataStatusBadge";
import StatusRow from "@/components/platform/StatusRow";
import WorkflowDiagram from "@/components/platform/WorkflowDiagram";
import FaqBlock from "@/components/platform/FaqBlock";
import RelatedGrid from "@/components/platform/RelatedGrid";
import ContextualLeadForm from "@/components/platform/ContextualLeadForm";
import { INTEGRATIONS, findIntegration } from "@/lib/data/platform/integrations";
import {
  resolveAutomations,
  resolveProblems,
  softwareBySlug
} from "@/lib/data/platform/links";
import {
  SYNC_DIRECTION_LABEL,
  VERIFICATION_LABEL
} from "@/lib/data/platform/types";
import { SITE_URL } from "@/lib/config";

export async function generateStaticParams() {
  return INTEGRATIONS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = findIntegration(slug);
  if (!i) return {};
  const url = `${SITE_URL}/schnittstelle/${i.slug}`;
  return {
    title: i.seoTitle,
    description: i.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: i.seoTitle,
      description: i.seoDescription,
      url,
      type: "article",
      locale: "de_DE",
      siteName: "KBS KI-Beratung Saar"
    }
  };
}

export default async function IntegrationDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = findIntegration(slug);
  if (!i) return notFound();

  const problems = resolveProblems(i.relatedProblemSlugs);
  const automations = resolveAutomations(i.relatedAutomationSlugs);
  const softwareA = i.systemASlug ? softwareBySlug(i.systemASlug) : undefined;
  const softwareB = i.systemBSlug ? softwareBySlug(i.systemBSlug) : undefined;

  const otherIntegrations = INTEGRATIONS.filter(
    (x) =>
      x.slug !== i.slug &&
      (x.systemA === i.systemA ||
        x.systemB === i.systemA ||
        x.systemA === i.systemB ||
        x.systemB === i.systemB)
  ).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: i.seoTitle,
        description: i.seoDescription,
        inLanguage: "de-DE",
        author: { "@type": "Organization", name: "KBS KI-Beratung Saar" }
      },
      {
        "@type": "FAQPage",
        mainEntity: i.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Plattform", item: `${SITE_URL}/plattform` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Schnittstellen",
            item: `${SITE_URL}/schnittstelle`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${i.systemA} ↔ ${i.systemB}`,
            item: `${SITE_URL}/schnittstelle/${i.slug}`
          }
        ]
      }
    ]
  };

  return (
    <PlatformShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-20">
          <PlatformCrumbs
            items={[
              { href: "/plattform", label: "Plattform" },
              { href: "/schnittstelle", label: "Schnittstellen" },
              { label: `${i.systemA} ↔ ${i.systemB}` }
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-[12px] uppercase tracking-[0.22em] text-ink-500">
              Schnittstelle
            </span>
            <IntegrationStatusBadge status={i.status} />
            <DataStatusBadge
              status={i.verificationStatus}
              hint={`Zuletzt geprüft: ${i.lastChecked}`}
            />
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] text-ink-900 md:text-5xl">
            {i.systemA} mit {i.systemB} verbinden
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-600 md:text-[17px]">
            Wir prüfen, welche Daten zwischen beiden Systemen übertragen werden
            können und entwickeln bei Bedarf eine individuelle Schnittstelle
            oder Automatisierung.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#anfrage"
              className="inline-flex items-center rounded-2xl bg-ink-900 px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition-colors hover:bg-ink-700"
            >
              Schnittstelle kostenlos prüfen lassen
            </a>
            <a
              href="#integrationsweg"
              className="inline-flex items-center rounded-2xl border border-ink-900/12 bg-white px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:border-accent-300"
            >
              Integrationsweg ansehen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <StatusRow
            title={`System A · ${i.systemA}`}
            rows={
              softwareA
                ? [
                    { label: "Anbieter", value: softwareA.vendor },
                    { label: "Kategorie", value: softwareA.name },
                    {
                      label: "API",
                      value: softwareA.api.apiType ?? VERIFICATION_LABEL[softwareA.api.apiAvailable],
                      status: softwareA.api.apiAvailable
                    },
                    {
                      label: "Webhooks",
                      value: VERIFICATION_LABEL[softwareA.api.webhooks],
                      status: softwareA.api.webhooks
                    },
                    {
                      label: "Auth",
                      value: softwareA.api.authentication ?? "Prüfung erforderlich"
                    }
                  ]
                : [{ label: "System", value: i.systemA }]
            }
          />
          <StatusRow
            title={`System B · ${i.systemB}`}
            rows={
              softwareB
                ? [
                    { label: "Anbieter", value: softwareB.vendor },
                    { label: "Kategorie", value: softwareB.name },
                    {
                      label: "API",
                      value: softwareB.api.apiType ?? VERIFICATION_LABEL[softwareB.api.apiAvailable],
                      status: softwareB.api.apiAvailable
                    },
                    {
                      label: "Webhooks",
                      value: VERIFICATION_LABEL[softwareB.api.webhooks],
                      status: softwareB.api.webhooks
                    },
                    {
                      label: "Auth",
                      value: softwareB.api.authentication ?? "Prüfung erforderlich"
                    }
                  ]
                : [{ label: "System", value: i.systemB }]
            }
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Übertragbare Daten" title="Was zwischen den Systemen fließen kann" />
        <div className="mt-8 card overflow-hidden">
          <ul className="divide-y divide-ink-900/8">
            {i.transferableData.map((d, idx) => (
              <li key={idx} className="flex items-center justify-between gap-4 px-6 py-4">
                <span className="text-[14px] text-ink-800">{d.name}</span>
                <DataStatusBadge status={d.status} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[12.5px] text-ink-500">
          <span>Sync-Richtung: <span className="font-semibold text-ink-900">{SYNC_DIRECTION_LABEL[i.syncDirection]}</span></span>
          <span aria-hidden>·</span>
          <span>
            Echtzeit möglich:{" "}
            <span className="font-semibold text-ink-900">
              {VERIFICATION_LABEL[i.realtimePossible]}
            </span>
          </span>
        </div>
      </section>

      <section id="integrationsweg" className="border-y border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="Integrationsweg" title="So funktioniert die Verbindung" />
          <div className="mt-6 flex flex-wrap gap-2">
            {i.integrationMethod.map((m) => (
              <span
                key={m}
                className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-[12.5px] font-medium text-ink-700"
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <WorkflowDiagram steps={i.workflow} tone="accent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Typische Anwendungsfälle
            </div>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {i.typicalUseCases.map((u, idx) => (
                <li key={idx} className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3">
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Falls keine API vorhanden
            </div>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {i.fallbackWithoutApi.length ? (
                i.fallbackWithoutApi.map((f, idx) => (
                  <li key={idx} className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3">
                    {f}
                  </li>
                ))
              ) : (
                <li className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3 text-ink-500">
                  Nicht nötig · Standard-Wege sind vorhanden.
                </li>
              )}
            </ul>
          </div>
        </div>
        {i.limitations.length > 0 && (
          <div className="mt-6 card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-700">
              Grenzen und Prüfpunkte
            </div>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {i.limitations.map((l, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                  />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {(problems.length > 0 || automations.length > 0 || otherIntegrations.length > 0) && (
        <section className="border-t border-ink-900/8 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading eyebrow="Weitermachen" title="Passende Probleme, Automatisierungen und weitere Schnittstellen" />
            <div className="mt-8 grid gap-10">
              {problems.length > 0 && (
                <RelatedGrid
                  title="Passende Probleme"
                  items={problems.map((p) => ({
                    href: `/probleme/${p.slug}`,
                    eyebrow: "Problem",
                    title: p.title,
                    sub: p.hero.sub
                  }))}
                />
              )}
              {automations.length > 0 && (
                <RelatedGrid
                  title="Passende Automatisierungen"
                  items={automations.map((a) => ({
                    href: `/automatisieren/${a.slug}`,
                    eyebrow: "Automatisierung",
                    title: a.title,
                    sub: a.hero.sub
                  }))}
                />
              )}
              {otherIntegrations.length > 0 && (
                <RelatedGrid
                  title="Weitere Integrationen"
                  items={otherIntegrations.map((x) => ({
                    href: `/schnittstelle/${x.slug}`,
                    eyebrow: "Schnittstelle",
                    title: `${x.systemA} ↔ ${x.systemB}`,
                    sub: x.typicalUseCases[0]
                  }))}
                />
              )}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Fragen und Antworten" title="Häufige Fragen" />
        <div className="mt-8">
          <FaqBlock items={i.faq} />
        </div>
      </section>

      <section id="anfrage" className="border-t border-ink-900/8 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionHeading
            eyebrow="Nächster Schritt"
            title="Schnittstelle kostenlos prüfen lassen"
            sub="Wir prüfen technisch, welche Daten übertragen werden können, und geben eine ehrliche Aufwands-Einschätzung."
          />
          <div className="mt-8">
            <ContextualLeadForm
              source={`integration:${i.slug}`}
              title={`${i.systemA} mit ${i.systemB} verbinden`}
              prefill={i.leadPrefill}
              showSystemAB
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-[13px]">
            <Link
              href="/schnittstelle"
              className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900"
            >
              ← Alle Schnittstellen
            </Link>
            <Link
              href="/software"
              className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900"
            >
              Software-Profile ansehen
            </Link>
          </div>
        </div>
      </section>
    </PlatformShell>
  );
}
