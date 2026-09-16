import type { Metadata } from "next";
import Link from "next/link";
import PlatformShell from "@/components/platform/PlatformShell";
import PlatformCrumbs from "@/components/platform/PlatformCrumbs";
import SectionHeading from "@/components/platform/SectionHeading";
import CategoryChip from "@/components/platform/CategoryChip";
import { PROBLEMS } from "@/lib/data/platform/problems";
import { problemsByCategory } from "@/lib/data/platform/links";
import { CATEGORY_LABEL, type ProblemCategory } from "@/lib/data/platform/types";
import { SITE_URL } from "@/lib/config";

const PATH = "/probleme";

export const metadata: Metadata = {
  title: "Probleme · KBS Automatisierungs-Plattform",
  description:
    "Alle konkreten Betriebsprobleme im Überblick. Von E-Mail-Bearbeitung über DATEV-Prozesse bis zur fehlenden Schnittstelle. Mit Lösungsweg und kostenloser Ersteinschätzung.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Probleme · KBS Plattform",
    description:
      "Konkrete Betriebsprobleme im Überblick. Mit Lösungsweg und Ersteinschätzung.",
    url: `${SITE_URL}${PATH}`,
    type: "website",
    locale: "de_DE",
    siteName: "KBS KI-Beratung Saar"
  }
};

const CATEGORY_ORDER: ProblemCategory[] = [
  "kommunikation",
  "vertrieb",
  "buchhaltung",
  "backoffice",
  "kundenservice",
  "it_datenpflege",
  "hr",
  "handwerk_bau"
];

export default function ProblemsIndex() {
  const grouped = problemsByCategory();

  return (
    <PlatformShell>
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-8">
        <PlatformCrumbs
          items={[
            { href: "/plattform", label: "Plattform" },
            { label: "Probleme" }
          ]}
        />
        <div className="mt-6">
          <SectionHeading
            eyebrow={`${PROBLEMS.length} typische Ausgangslagen`}
            title="Welches Problem soll gelöst werden?"
            sub="Jede Seite fokussiert auf ein konkretes Problem: Symptome, Ursachen, Lösungsweg, passende Automatisierungen und Schnittstellen."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12">
          {CATEGORY_ORDER.filter((c) => grouped.has(c)).map((cat) => {
            const items = grouped.get(cat)!;
            return (
              <div key={cat}>
                <div className="mb-4 flex items-center gap-3">
                  <CategoryChip category={cat} tone="solid" />
                  <div className="text-[13px] text-ink-500">
                    {items.length} {items.length === 1 ? "Problem" : "Probleme"}
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/probleme/${p.slug}`}
                      className="group card p-6 transition-transform hover:-translate-y-0.5"
                    >
                      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                        {CATEGORY_LABEL[p.category]}
                      </div>
                      <div className="mt-2 flex items-start justify-between gap-3">
                        <div className="text-lg font-semibold text-ink-900">
                          {p.title}
                        </div>
                        <span
                          aria-hidden
                          className="text-ink-400 transition-transform group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </div>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                        {p.hero.sub}
                      </p>
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
