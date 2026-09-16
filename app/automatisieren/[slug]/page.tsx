import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import CategoryChip from "@/components/platform/CategoryChip";
import AutomatabilityBadge from "@/components/platform/AutomatabilityBadge";
import DataStatusBadge from "@/components/platform/DataStatusBadge";
import TechStackList from "@/components/platform/TechStackList";
import WorkflowDiagram from "@/components/platform/WorkflowDiagram";
import FaqBlock from "@/components/platform/FaqBlock";
import RelatedGrid from "@/components/platform/RelatedGrid";
import ContextualLeadForm from "@/components/platform/ContextualLeadForm";
import SavingsCalculator from "@/components/platform/SavingsCalculator";
import { AUTOMATIONS, findAutomation } from "@/lib/data/platform/automations";
import { resolveProblems, resolveIntegrations } from "@/lib/data/platform/links";
import { SITE_URL } from "@/lib/config";

export async function generateStaticParams() {
  return AUTOMATIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = findAutomation(slug);
  if (!a) return {};
  const url = `${SITE_URL}/automatisieren/${a.slug}`;
  return {
    title: a.seoTitle,
    description: a.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: a.seoTitle,
      description: a.seoDescription,
      url,
      type: "article",
      locale: "de_DE",
      siteName: "KBS KI-Beratung Saar"
    }
  };
}

export default async function AutomationDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = findAutomation(slug);
  if (!a) return notFound();

  const problems = resolveProblems(a.relatedProblemSlugs);
  const integrations = resolveIntegrations(a.relatedIntegrationSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: a.title,
        description: a.description,
        step: a.workflow.map((s, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: s.title,
          text: s.detail ?? s.title
        }))
      },
      {
        "@type": "FAQPage",
        mainEntity: a.faq.map((f) => ({
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
            name: "Automatisierungen",
            item: `${SITE_URL}/automatisieren`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: a.title,
            item: `${SITE_URL}/automatisieren/${a.slug}`
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
              { href: "/automatisieren", label: "Automatisierungen" },
              { label: a.title }
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CategoryChip category={a.category} tone="solid" />
            <span className="text-[12px] uppercase tracking-[0.22em] text-ink-500">
              Automatisierung
            </span>
            <DataStatusBadge status={a.dataStatus} hint={`Zuletzt geprüft: ${a.lastChecked}`} />
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] text-ink-900 md:text-5xl">
            {a.hero.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-600 md:text-[17px]">
            {a.hero.sub}
          </p>
          <div className="mt-6">
            <AutomatabilityBadge level={a.automationLevel} control={a.humanControl} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#anfrage"
              className="inline-flex items-center rounded-2xl bg-ink-900 px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition-colors hover:bg-ink-700"
            >
              Diesen Prozess automatisieren lassen
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center rounded-2xl border border-ink-900/12 bg-white px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:border-accent-300"
            >
              Workflow ansehen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Beschreibung" title="Was passiert konkret?" />
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-ink-700">
          {a.description}
        </p>
        <div className="mt-8">
          <TechStackList technologies={a.technologies} />
        </div>
      </section>

      <section id="workflow" className="border-y border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="Typischer Workflow" title="Ablauf im Betrieb" />
          <div className="mt-8">
            <WorkflowDiagram steps={a.workflow} tone="accent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Voraussetzungen
            </div>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {a.prerequisites.map((p, idx) => (
                <li key={idx} className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Risiken
            </div>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {a.risks.map((r, idx) => (
                <li key={idx} className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 card p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            Typische Integrationen
          </div>
          <ul className="mt-3 flex flex-wrap gap-2 text-[13px] text-ink-800">
            {a.typicalIntegrations.map((t, idx) => (
              <li
                key={idx}
                className="rounded-full border border-ink-900/10 bg-white px-3 py-1 font-medium"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 card p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            Wirtschaftliche Einordnung
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
            {a.economicNote}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-700">
            <span className="font-semibold">Empfehlung:</span> {a.recommendation}
          </p>
        </div>
      </section>

      <section className="border-t border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Aufwands-Rechner"
            title="Wieviel Aufwand steckt bei Ihnen im Prozess?"
            sub="Ihre Zahlen, transparente Rechnung. Kein Marketing-Zahlenspiel."
          />
          <div className="mt-8">
            <SavingsCalculator />
          </div>
        </div>
      </section>

      {(problems.length > 0 || integrations.length > 0) && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Weitermachen"
            title="Passende Probleme und Schnittstellen"
          />
          <div className="mt-8 grid gap-10">
            {problems.length > 0 && (
              <RelatedGrid
                title="Zugehörige Probleme"
                items={problems.map((p) => ({
                  href: `/probleme/${p.slug}`,
                  eyebrow: "Problem",
                  title: p.title,
                  sub: p.hero.sub
                }))}
              />
            )}
            {integrations.length > 0 && (
              <RelatedGrid
                title="Passende Schnittstellen"
                items={integrations.map((i) => ({
                  href: `/schnittstelle/${i.slug}`,
                  eyebrow: "Schnittstelle",
                  title: `${i.systemA} ↔ ${i.systemB}`,
                  sub: i.typicalUseCases[0]
                }))}
              />
            )}
          </div>
        </section>
      )}

      <section className="border-t border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Fragen und Antworten"
            title="Häufige Fragen zu dieser Automatisierung"
          />
          <div className="mt-8">
            <FaqBlock items={a.faq} />
          </div>
        </div>
      </section>

      <section id="anfrage" className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading
          eyebrow="Nächster Schritt"
          title="Diesen Prozess automatisieren lassen"
          sub="Wir prüfen kostenlos, wie sich die Automatisierung in Ihrer bestehenden IT umsetzen lässt."
        />
        <div className="mt-8">
          <ContextualLeadForm
            source={`automation:${a.slug}`}
            title="Kostenlose Ersteinschätzung anfordern"
            prefill={a.leadPrefill}
            showSystemsField
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-[13px]">
          <Link
            href="/automatisieren"
            className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900"
          >
            ← Alle Automatisierungen
          </Link>
          <Link
            href="/schnittstelle"
            className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900"
          >
            Schnittstellen ansehen
          </Link>
        </div>
      </section>
    </PlatformShell>
  );
}
