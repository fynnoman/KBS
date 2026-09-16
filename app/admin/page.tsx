import type { Metadata } from "next";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import DataStatusBadge from "@/components/platform/DataStatusBadge";
import IntegrationStatusBadge from "@/components/platform/IntegrationStatusBadge";
import AutomatabilityBadge from "@/components/platform/AutomatabilityBadge";
import { PROBLEMS } from "@/lib/data/platform/problems";
import { AUTOMATIONS } from "@/lib/data/platform/automations";
import { INTEGRATIONS } from "@/lib/data/platform/integrations";
import { SOFTWARES } from "@/lib/data/platform/softwares";
import { CATEGORY_LABEL, SOFTWARE_CATEGORY_LABEL } from "@/lib/data/platform/types";

export const metadata: Metadata = {
  title: "Admin-Übersicht · KBS Plattform",
  description: "Interne Sicht auf alle Datensätze der KBS-Automatisierungs-Plattform.",
  robots: { index: false, follow: false }
};

// V1: Reine Lese-Sicht. Die Datensätze liegen als TypeScript in
// lib/data/platform/. Sobald Supabase (oder anderes) angebunden wird,
// tauschen wir die Quellen hier gegen einen Fetch aus.
export default function AdminOverview() {
  return (
    <PlatformShell>
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <PlatformCrumbs
          items={[
            { href: "/plattform", label: "Plattform" },
            { label: "Admin" }
          ]}
        />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Interne Sicht"
            title="Datenpflege · Übersicht"
            sub="Diese Seite ist nicht indexiert. Sie zeigt den aktuellen Katalog. Datenquelle: TypeScript-Dateien unter lib/data/platform/. Wechsel auf Supabase o.ä. ist im Datenmodell vorbereitet."
          />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <Card label="Probleme" value={PROBLEMS.length} href="/probleme" />
          <Card label="Automatisierungen" value={AUTOMATIONS.length} href="/automatisieren" />
          <Card label="Schnittstellen" value={INTEGRATIONS.length} href="/schnittstelle" />
          <Card label="Software-Profile" value={SOFTWARES.length} href="/software" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeading title="Probleme" />
        <div className="mt-4 card overflow-hidden">
          <table className="w-full text-left text-[13.5px]">
            <thead className="bg-ink-50 text-[11px] uppercase tracking-[0.16em] text-ink-500">
              <tr>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Titel</th>
                <th className="px-4 py-3">Kategorie</th>
                <th className="px-4 py-3">Öffnen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/8">
              {PROBLEMS.map((p) => (
                <tr key={p.slug}>
                  <td className="px-4 py-3 font-mono text-[12.5px] text-ink-500">{p.slug}</td>
                  <td className="px-4 py-3 font-semibold text-ink-900">{p.title}</td>
                  <td className="px-4 py-3 text-ink-700">{CATEGORY_LABEL[p.category]}</td>
                  <td className="px-4 py-3">
                    <Link href={`/probleme/${p.slug}`} className="text-accent-700 underline underline-offset-2">
                      ansehen
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeading title="Automatisierungen" />
        <div className="mt-4 card overflow-hidden">
          <table className="w-full text-left text-[13.5px]">
            <thead className="bg-ink-50 text-[11px] uppercase tracking-[0.16em] text-ink-500">
              <tr>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Titel</th>
                <th className="px-4 py-3">Kategorie</th>
                <th className="px-4 py-3">Level</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Öffnen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/8">
              {AUTOMATIONS.map((a) => (
                <tr key={a.slug}>
                  <td className="px-4 py-3 font-mono text-[12.5px] text-ink-500">{a.slug}</td>
                  <td className="px-4 py-3 font-semibold text-ink-900">{a.title}</td>
                  <td className="px-4 py-3 text-ink-700">{CATEGORY_LABEL[a.category]}</td>
                  <td className="px-4 py-3">
                    <AutomatabilityBadge level={a.automationLevel} control={a.humanControl} />
                  </td>
                  <td className="px-4 py-3">
                    <DataStatusBadge status={a.dataStatus} hint={`Geprüft ${a.lastChecked}`} />
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/automatisieren/${a.slug}`} className="text-accent-700 underline underline-offset-2">
                      ansehen
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeading title="Schnittstellen" />
        <div className="mt-4 card overflow-hidden">
          <table className="w-full text-left text-[13.5px]">
            <thead className="bg-ink-50 text-[11px] uppercase tracking-[0.16em] text-ink-500">
              <tr>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">System A</th>
                <th className="px-4 py-3">System B</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Prüfstand</th>
                <th className="px-4 py-3">Öffnen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/8">
              {INTEGRATIONS.map((i) => (
                <tr key={i.slug}>
                  <td className="px-4 py-3 font-mono text-[12.5px] text-ink-500">{i.slug}</td>
                  <td className="px-4 py-3 text-ink-800">{i.systemA}</td>
                  <td className="px-4 py-3 text-ink-800">{i.systemB}</td>
                  <td className="px-4 py-3">
                    <IntegrationStatusBadge status={i.status} />
                  </td>
                  <td className="px-4 py-3">
                    <DataStatusBadge status={i.verificationStatus} hint={`Geprüft ${i.lastChecked}`} />
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/schnittstelle/${i.slug}`} className="text-accent-700 underline underline-offset-2">
                      ansehen
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading title="Software" />
        <div className="mt-4 card overflow-hidden">
          <table className="w-full text-left text-[13.5px]">
            <thead className="bg-ink-50 text-[11px] uppercase tracking-[0.16em] text-ink-500">
              <tr>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Kategorie</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Öffnen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/8">
              {SOFTWARES.map((s) => (
                <tr key={s.slug}>
                  <td className="px-4 py-3 font-mono text-[12.5px] text-ink-500">{s.slug}</td>
                  <td className="px-4 py-3 font-semibold text-ink-900">{s.name}</td>
                  <td className="px-4 py-3 text-ink-700">{SOFTWARE_CATEGORY_LABEL[s.category]}</td>
                  <td className="px-4 py-3">
                    <DataStatusBadge status={s.verificationStatus} hint={`Geprüft ${s.lastChecked}`} />
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/software/${s.slug}`} className="text-accent-700 underline underline-offset-2">
                      ansehen
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PlatformShell>
  );
}

function Card({ label, value, href }: { label: string; value: number; href: string }) {
  return (
    <Link href={href} className="card p-5 transition-transform hover:-translate-y-0.5">
      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
        {label}
      </div>
      <div className="mt-1 text-3xl font-semibold text-ink-900">{value}</div>
    </Link>
  );
}
