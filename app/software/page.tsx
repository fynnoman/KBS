import type { Metadata } from "next";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import DataStatusBadge from "@/components/platform/DataStatusBadge";
import { SOFTWARES } from "@/lib/data/platform/softwares";
import {
  SOFTWARE_CATEGORY_LABEL,
  type SoftwareCategory
} from "@/lib/data/platform/types";
import { SITE_URL } from "@/lib/config";

const PATH = "/software";

export const metadata: Metadata = {
  title: "Software-Profile · DATEV, HubSpot, Microsoft 365, Shopify und mehr",
  description:
    "Software-Profile mit API-Status, Anbindungsmöglichkeiten und zugehörigen Schnittstellen und Automatisierungen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Software-Profile · KBS Plattform",
    description:
      "API-Status und Anbindungsmöglichkeiten für die wichtigsten Business-Systeme.",
    url: `${SITE_URL}${PATH}`,
    type: "website",
    locale: "de_DE",
    siteName: "KBS KI-Beratung Saar"
  }
};

const CATEGORY_ORDER: SoftwareCategory[] = [
  "crm",
  "erp",
  "buchhaltung",
  "office",
  "mail",
  "kommunikation",
  "shop",
  "branche_handwerk",
  "branche_bau",
  "ticketing",
  "workflow"
];

export default function SoftwareIndex() {
  const grouped = new Map<SoftwareCategory, typeof SOFTWARES>();
  for (const s of SOFTWARES) {
    const list = grouped.get(s.category) ?? [];
    list.push(s);
    grouped.set(s.category, list);
  }

  return (
    <PlatformShell>
      <section className="border-b border-ink-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-20">
          <PlatformCrumbs
            items={[
              { href: "/plattform", label: "Plattform" },
              { label: "Software" }
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <SectionHeading
              eyebrow={`${SOFTWARES.length} Software-Profile`}
              title="Ihre bestehende Software. Dokumentiert"
              sub="Jede Software mit API-Status, typischen Anwendungsfällen und zugehörigen Schnittstellen und Automatisierungen. Faktenlage transparent gekennzeichnet."
            />
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
                  <span className="inline-flex items-center rounded-full bg-ink-900 px-3 py-1 text-[11.5px] font-semibold text-white">
                    {SOFTWARE_CATEGORY_LABEL[cat]}
                  </span>
                  <div className="text-[13px] text-ink-500">
                    {items.length} {items.length === 1 ? "Profil" : "Profile"}
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/software/${s.slug}`}
                      className="group card p-5 transition-transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                          {SOFTWARE_CATEGORY_LABEL[s.category]}
                        </div>
                        <span
                          aria-hidden
                          className="text-ink-400 transition-transform group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </div>
                      <div className="mt-2 text-lg font-semibold text-ink-900">
                        {s.name}
                      </div>
                      <p className="mt-1 text-[12.5px] text-ink-500">{s.vendor}</p>
                      <div className="mt-3">
                        <DataStatusBadge
                          status={s.verificationStatus}
                          hint={`Zuletzt geprüft: ${s.lastChecked}`}
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
