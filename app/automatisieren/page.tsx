import type { Metadata } from "next";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import CategoryChip from "@/components/platform/CategoryChip";
import AutomatabilityBadge from "@/components/platform/AutomatabilityBadge";
import ProcessInput from "@/components/platform/ProcessInput";
import { AUTOMATIONS } from "@/lib/data/platform/automations";
import { automationsByCategory } from "@/lib/data/platform/links";
import type { AutomationCategory } from "@/lib/data/platform/types";
import { CATEGORY_LABEL } from "@/lib/data/platform/types";
import { SITE_URL } from "@/lib/config";

const PATH = "/automatisieren";

export const metadata: Metadata = {
  title: "Automatisierungs-Datenbank · Kann KI diesen Prozess übernehmen?",
  description:
    "Öffentliche Datenbank aller KBS-Automatisierungen mit Automatisierungslevel, Technologien, Voraussetzungen und Empfehlung. Für Kommunikation, Vertrieb, Buchhaltung, Backoffice, HR und mehr.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Automatisierungs-Datenbank · KBS",
    description:
      "Kann KI Ihren Prozess übernehmen? Alle Automatisierungen im Überblick.",
    url: `${SITE_URL}${PATH}`,
    type: "website",
    locale: "de_DE",
    siteName: "KBS KI-Beratung Saar"
  }
};

const CATEGORY_ORDER: AutomationCategory[] = [
  "kommunikation",
  "vertrieb",
  "buchhaltung",
  "backoffice",
  "kundenservice",
  "hr",
  "handwerk_bau",
  "it_datenpflege"
];

export default function AutomationsIndex() {
  const grouped = automationsByCategory();

  return (
    <PlatformShell>
      <section className="border-b border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-20">
          <PlatformCrumbs
            items={[
              { href: "/plattform", label: "Plattform" },
              { label: "Automatisierungen" }
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <SectionHeading
              eyebrow={`${AUTOMATIONS.length} Automatisierungen`}
              title="Kann KI Ihren Prozess übernehmen?"
              sub="Wählen Sie einen Prozess oder beschreiben Sie Ihre Aufgabe. Sie erhalten eine erste Einschätzung. Transparent, ohne erfundene Prozentwerte."
            />
          </div>
          <div className="mt-8">
            <ProcessInput />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12">
          {CATEGORY_ORDER.filter((c) => grouped.has(c)).map((cat) => {
            const items = grouped.get(cat)!;
            return (
              <div key={cat}>
                <div className="mb-4 flex items-center gap-3">
                  <CategoryChip category={cat} tone="solid" />
                  <div className="text-[13px] text-ink-500">
                    {items.length} {items.length === 1 ? "Automatisierung" : "Automatisierungen"}
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {items.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/automatisieren/${a.slug}`}
                      className="group card p-6 transition-transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                          {CATEGORY_LABEL[a.category]}
                        </div>
                        <span
                          aria-hidden
                          className="text-ink-400 transition-transform group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </div>
                      <div className="mt-2 text-lg font-semibold text-ink-900">
                        {a.title}
                      </div>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                        {a.hero.sub}
                      </p>
                      <div className="mt-4">
                        <AutomatabilityBadge
                          level={a.automationLevel}
                          control={a.humanControl}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PlatformShell>
  );
}
