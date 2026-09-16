import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import CategoryChip from "@/components/platform/CategoryChip";
import SymptomList from "@/components/platform/SymptomList";
import TechStackList from "@/components/platform/TechStackList";
import BeforeAfterCompare from "@/components/platform/BeforeAfterCompare";
import FaqBlock from "@/components/platform/FaqBlock";
import RelatedGrid from "@/components/platform/RelatedGrid";
import ContextualLeadForm from "@/components/platform/ContextualLeadForm";
import { PROBLEMS, findProblem } from "@/lib/data/platform/problems";
import { resolveAutomations, resolveIntegrations } from "@/lib/data/platform/links";
import { SITE_URL } from "@/lib/config";

export async function generateStaticParams() {
  return PROBLEMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = findProblem(slug);
  if (!p) return {};
  const url = `${SITE_URL}/probleme/${p.slug}`;
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: p.seoTitle,
      description: p.seoDescription,
      url,
      type: "article",
      locale: "de_DE",
      siteName: "KBS KI-Beratung Saar"
    }
  };
}

export default async function ProblemDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = findProblem(slug);
  if (!p) return notFound();

  const automations = resolveAutomations(p.relatedAutomationSlugs);
  const integrations = resolveIntegrations(p.relatedIntegrationSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: p.hero.h1,
        description: p.seoDescription,
        inLanguage: "de-DE",
        author: { "@type": "Organization", name: "KBS KI-Beratung Saar" }
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Plattform", item: `${SITE_URL}/plattform` },
          { "@type": "ListItem", position: 2, name: "Probleme", item: `${SITE_URL}/probleme` },
          {
            "@type": "ListItem",
            position: 3,
            name: p.title,
            item: `${SITE_URL}/probleme/${p.slug}`
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
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-24">
          <PlatformCrumbs
            items={[
              { href: "/plattform", label: "Plattform" },
              { href: "/probleme", label: "Probleme" },
              { label: p.title }
            ]}
          />
          <div className="mt-6 flex items-center gap-3">
            <CategoryChip category={p.category} tone="solid" />
            <span className="text-[12px] uppercase tracking-[0.22em] text-ink-500">
              Problem
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] text-ink-900 md:text-5xl">
            {p.hero.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-600 md:text-[17px]">
            {p.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#anfrage"
              className="inline-flex items-center rounded-2xl bg-ink-900 px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition-colors hover:bg-ink-700"
            >
              Problem kostenlos prüfen lassen
            </a>
            <a
              href="#loesungsansatz"
              className="inline-flex items-center rounded-2xl border border-ink-900/12 bg-white px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:border-accent-300"
            >
              Lösungsmöglichkeiten ansehen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Problem verstehen"
          title="Wie entsteht das Problem?"
        />
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-ink-700">
          {p.problemStatement}
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-ink-900">Ursachen</h3>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {p.causes.map((c, idx) => (
                <li key={idx} className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink-900">Risiken</h3>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {p.risks.map((r, idx) => (
                <li key={idx} className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Typische Symptome"
          title="Woran erkennen Sie es im Alltag?"
        />
        <div className="mt-8">
          <SymptomList items={p.symptoms} />
        </div>
      </section>

      <section id="loesungsansatz" className="border-y border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Lösungsansatz"
            title="Wie KBS das Problem angeht"
            sub={p.solutionsIntro}
          />
          <div className="mt-8">
            <TechStackList technologies={p.technologies} />
          </div>
          <div className="mt-12">
            <BeforeAfterCompare before={p.beforeWorkflow} after={p.afterWorkflow} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Bestehende Systeme
            </div>
            <h3 className="mt-2 text-xl font-semibold text-ink-900">
              Was bleibt bestehen?
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
              {p.keepExisting}
            </p>
          </div>
          <div className="card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Wirtschaftliche Prüfung
            </div>
            <h3 className="mt-2 text-xl font-semibold text-ink-900">
              Wann lohnt sich die Automatisierung?
            </h3>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {p.worthWhen.map((w, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                  />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 card p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            Kosten
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
            {p.costsNote}
          </p>
        </div>
      </section>

      {(automations.length > 0 || integrations.length > 0) && (
        <section className="border-t border-ink-900/8 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading
              eyebrow="Weitermachen"
              title="Passende Automatisierungen und Schnittstellen"
              sub="Von diesem Problem aus geht es hier weiter: konkrete Prozesse und Systemverbindungen."
            />
            <div className="mt-8 grid gap-10">
              {automations.length > 0 && (
                <RelatedGrid
                  title="Automatisierungen"
                  items={automations.map((a) => ({
                    href: `/automatisieren/${a.slug}`,
                    eyebrow: "Automatisierung",
                    title: a.title,
                    sub: a.hero.sub
                  }))}
                />
              )}
              {integrations.length > 0 && (
                <RelatedGrid
                  title="Schnittstellen"
                  items={integrations.map((i) => ({
                    href: `/schnittstelle/${i.slug}`,
                    eyebrow: "Schnittstelle",
                    title: `${i.systemA} ↔ ${i.systemB}`,
                    sub: i.typicalUseCases[0]
                  }))}
                />
              )}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Fragen und Antworten"
          title="Häufige Fragen zu diesem Problem"
        />
        <div className="mt-8">
          <FaqBlock items={p.faq} />
        </div>
      </section>

      <section id="anfrage" className="border-t border-ink-900/8 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionHeading
            eyebrow="Nächster Schritt"
            title="Prozess kostenlos prüfen lassen"
            sub="Wir prüfen, wie sich der Prozess in Ihrer bestehenden IT umsetzen lässt. Ehrlich, ohne Verkaufsdruck."
          />
          <div className="mt-8">
            <ContextualLeadForm
              source={`problem:${p.slug}`}
              title="Kostenlose Ersteinschätzung anfordern"
              subtitle="Beschreiben Sie Ihre Ausgangslage. Der Kontext dieser Seite ist bereits vorausgefüllt."
              prefill={p.leadPrefill}
              showSystemsField
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-[13px]">
            <Link
              href="/probleme"
              className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900"
            >
              ← Alle Probleme
            </Link>
            <Link
              href="/automatisieren"
              className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900"
            >
              Automatisierungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </PlatformShell>
  );
}
