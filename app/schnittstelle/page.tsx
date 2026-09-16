import type { Metadata } from "next";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import IntegrationStatusBadge from "@/components/platform/IntegrationStatusBadge";
import { INTEGRATIONS } from "@/lib/data/platform/integrations";
import { SOFTWARES } from "@/lib/data/platform/softwares";
import { SITE_URL } from "@/lib/config";

const PATH = "/schnittstelle";

export const metadata: Metadata = {
  title: "Schnittstellen · DATEV, HubSpot, Microsoft 365, WhatsApp und mehr",
  description:
    "Alle Systemverbindungen im Überblick. DATEV, HubSpot, Microsoft 365, WhatsApp, Shopify, Lexware, sevDesk, SAP · Status, übertragbare Daten, Integrationsweg.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Schnittstellen · KBS Plattform",
    description:
      "Systeme verbinden statt ersetzen: Schnittstellen im Überblick.",
    url: `${SITE_URL}${PATH}`,
    type: "website",
    locale: "de_DE",
    siteName: "KBS KI-Beratung Saar"
  }
};

export default function IntegrationsIndex() {
  // Group by System A
  const groups = new Map<string, typeof INTEGRATIONS>();
  for (const i of INTEGRATIONS) {
    const key = i.systemA;
    const list = groups.get(key) ?? [];
    list.push(i);
    groups.set(key, list);
  }

  return (
    <PlatformShell>
      <section className="border-b border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-20">
          <PlatformCrumbs
            items={[
              { href: "/plattform", label: "Plattform" },
              { label: "Schnittstellen" }
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <SectionHeading
              eyebrow={`${INTEGRATIONS.length} Schnittstellen`}
              title="Systeme verbinden statt ersetzen"
              sub="KBS baut individuelle Schnittstellen zwischen der Software, mit der Sie schon arbeiten. Ein Auszug: jede Kombination mit Status, übertragbaren Daten und Integrationsweg."
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/software"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white px-5 py-2.5 text-[13px] font-semibold text-ink-900 transition-colors hover:border-accent-300"
            >
              Software-Profile ansehen
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10">
          {[...groups.entries()]
            .sort((a, b) => a[0].localeCompare(b[0], "de"))
            .map(([systemA, items]) => (
              <div key={systemA}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-ink-900 px-3 py-1 text-[11.5px] font-semibold text-white">
                    {systemA}
                  </span>
                  <div className="text-[13px] text-ink-500">
                    {items.length} {items.length === 1 ? "Kombination" : "Kombinationen"}
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {items.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/schnittstelle/${i.slug}`}
                      className="group card p-6 transition-transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                          Schnittstelle
                        </div>
                        <span
                          aria-hidden
                          className="text-ink-400 transition-transform group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </div>
                      <div className="mt-2 text-lg font-semibold text-ink-900">
                        {i.systemA} ↔ {i.systemB}
                      </div>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                        {i.typicalUseCases[0]}
                      </p>
                      <div className="mt-4">
                        <IntegrationStatusBadge status={i.status} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="border-t border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Katalog"
            title="Software-Profile im Überblick"
            sub="Jede Software mit dokumentiertem API-Status, typischen Anwendungsfällen und zugehörigen Schnittstellen."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {SOFTWARES.map((s) => (
              <Link
                key={s.slug}
                href={`/software/${s.slug}`}
                className="group card p-5 transition-transform hover:-translate-y-0.5"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                  Software
                </div>
                <div className="mt-1 flex items-start justify-between gap-3">
                  <div className="text-[15px] font-semibold text-ink-900">
                    {s.name}
                  </div>
                  <span
                    aria-hidden
                    className="text-ink-400 transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PlatformShell>
  );
}
