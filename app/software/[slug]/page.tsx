import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import DataStatusBadge from "@/components/platform/DataStatusBadge";
import StatusRow from "@/components/platform/StatusRow";
import RelatedGrid from "@/components/platform/RelatedGrid";
import FaqBlock from "@/components/platform/FaqBlock";
import ContextualLeadForm from "@/components/platform/ContextualLeadForm";
import { SOFTWARES, findSoftware } from "@/lib/data/platform/softwares";
import {
  resolveIntegrations,
  resolveAutomations,
  integrationsForSoftware
} from "@/lib/data/platform/links";
import {
  SOFTWARE_CATEGORY_LABEL,
  VERIFICATION_LABEL
} from "@/lib/data/platform/types";
import { SITE_URL } from "@/lib/config";

export async function generateStaticParams() {
  return SOFTWARES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = findSoftware(slug);
  if (!s) return {};
  const url = `${SITE_URL}/software/${s.slug}`;
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: s.seoTitle,
      description: s.seoDescription,
      url,
      type: "article",
      locale: "de_DE",
      siteName: "KBS KI-Beratung Saar"
    }
  };
}

export default async function SoftwareDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = findSoftware(slug);
  if (!s) return notFound();

  const integrationsExplicit = resolveIntegrations(s.relatedIntegrationSlugs);
  const integrationsAll = integrationsForSoftware(s.slug);
  const integrations = integrationsExplicit.length ? integrationsExplicit : integrationsAll;
  const automations = resolveAutomations(s.relatedAutomationSlugs);

  return (
    <PlatformShell>
      <section className="border-b border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-20">
          <PlatformCrumbs
            items={[
              { href: "/plattform", label: "Plattform" },
              { href: "/software", label: "Software" },
              { label: s.name }
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-ink-900 px-3 py-1 text-[11.5px] font-semibold text-white">
              {SOFTWARE_CATEGORY_LABEL[s.category]}
            </span>
            <span className="text-[12px] uppercase tracking-[0.22em] text-ink-500">
              Software-Profil
            </span>
            <DataStatusBadge
              status={s.verificationStatus}
              hint={`Zuletzt geprüft: ${s.lastChecked}`}
            />
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] text-ink-900 md:text-5xl">
            {s.name} anbinden
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-600 md:text-[17px]">
            {s.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {s.website ? (
              <a
                href={s.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl border border-ink-900/12 bg-white px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:border-accent-300"
              >
                Hersteller-Website ↗
              </a>
            ) : null}
            {s.api.documentationUrl ? (
              <a
                href={s.api.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl border border-ink-900/12 bg-white px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:border-accent-300"
              >
                API-Dokumentation ↗
              </a>
            ) : null}
            <a
              href="#anfrage"
              className="inline-flex items-center rounded-2xl bg-ink-900 px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition-colors hover:bg-ink-700"
            >
              Anbindung besprechen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <StatusRow
            title="Technische Möglichkeiten"
            rows={[
              {
                label: "API",
                value: s.api.apiType ?? VERIFICATION_LABEL[s.api.apiAvailable],
                status: s.api.apiAvailable
              },
              {
                label: "Webhooks",
                value: VERIFICATION_LABEL[s.api.webhooks],
                status: s.api.webhooks
              },
              {
                label: "Authentifizierung",
                value: s.api.authentication ?? "Prüfung erforderlich"
              }
            ]}
          />
          <div className="card p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Typische Anwendungsfälle
            </div>
            <ul className="mt-3 grid gap-2 text-[14px] text-ink-700">
              {s.typicalUseCases.map((u, idx) => (
                <li key={idx} className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3">
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {integrations.length > 0 && (
        <section className="border-t border-ink-900/8 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading
              eyebrow="Schnittstellen"
              title={`Kombinationen mit ${s.name}`}
              sub="Alle bekannten Verbindungen dieses Systems mit anderen Business-Tools."
            />
            <div className="mt-8">
              <RelatedGrid
                title="Schnittstellen"
                items={integrations.map((i) => ({
                  href: `/schnittstelle/${i.slug}`,
                  eyebrow: "Schnittstelle",
                  title: `${i.systemA} ↔ ${i.systemB}`,
                  sub: i.typicalUseCases[0]
                }))}
              />
            </div>
          </div>
        </section>
      )}

      {automations.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Automatisierungen"
            title={`Prozesse, die mit ${s.name} sinnvoll werden`}
          />
          <div className="mt-8">
            <RelatedGrid
              title="Automatisierungen"
              items={automations.map((a) => ({
                href: `/automatisieren/${a.slug}`,
                eyebrow: "Automatisierung",
                title: a.title,
                sub: a.hero.sub
              }))}
            />
          </div>
        </section>
      )}

      <section className="border-t border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Fragen und Antworten"
            title={`Häufige Fragen zu ${s.name}`}
          />
          <div className="mt-8">
            <FaqBlock items={s.faq} />
          </div>
        </div>
      </section>

      <section id="anfrage" className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading
          eyebrow="Nächster Schritt"
          title={`${s.name}-Anbindung besprechen`}
          sub="Wir prüfen kostenlos, welche Anbindungswege für Ihren Einsatzfall sinnvoll sind."
        />
        <div className="mt-8">
          <ContextualLeadForm
            source={`software:${s.slug}`}
            title={`${s.name} anbinden`}
            prefill={{
              process: `${s.name}-Anbindung`,
              context: `Anbindung von ${s.name} an weitere Systeme.`
            }}
            showSystemsField
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-[13px]">
          <Link
            href="/software"
            className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900"
          >
            ← Alle Software-Profile
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
