"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PROBLEMS } from "@/lib/data/platform/problems";
import { AUTOMATIONS } from "@/lib/data/platform/automations";
import { INTEGRATIONS } from "@/lib/data/platform/integrations";

const EXAMPLES = [
  "Unsere Mitarbeiter erstellen Angebote noch manuell aus E-Mail-Anfragen.",
  "Wir tippen jede Eingangsrechnung von Hand in DATEV.",
  "Unser Team beantwortet täglich dutzende gleiche Anfragen per E-Mail.",
  "Wir wollen HubSpot mit DATEV verbinden.",
  "WhatsApp-Kundenanfragen landen nur auf einem Handy."
];

type Suggestion = {
  href: string;
  eyebrow: string;
  title: string;
  score: number;
};

// Very simple keyword-based scoring. Deliberately not a marketing "AI"
// claim. The search is just a helpful fuzzy router across the catalog.
function scoreItem(text: string, haystack: string) {
  const words = text
    .toLowerCase()
    .split(/[^a-z0-9äöüß]+/i)
    .filter((w) => w.length > 3);
  if (words.length === 0) return 0;
  const hay = haystack.toLowerCase();
  let score = 0;
  for (const w of words) {
    if (hay.includes(w)) score += 1;
  }
  return score;
}

function buildSuggestions(query: string): Suggestion[] {
  if (!query.trim()) return [];
  const suggestions: Suggestion[] = [];

  for (const p of PROBLEMS) {
    const hay = [
      p.title,
      p.problemStatement,
      p.hero.h1,
      p.symptoms.join(" "),
      p.leadPrefill.process
    ].join(" ");
    const s = scoreItem(query, hay);
    if (s > 0) {
      suggestions.push({
        href: `/probleme/${p.slug}`,
        eyebrow: "Problem",
        title: p.title,
        score: s + 1 // slight bias toward problems for a "problem" query
      });
    }
  }
  for (const a of AUTOMATIONS) {
    const hay = [
      a.title,
      a.description,
      a.hero.h1,
      a.workflow.map((s) => s.title).join(" ")
    ].join(" ");
    const s = scoreItem(query, hay);
    if (s > 0) {
      suggestions.push({
        href: `/automatisieren/${a.slug}`,
        eyebrow: "Automatisierung",
        title: a.title,
        score: s
      });
    }
  }
  for (const i of INTEGRATIONS) {
    const hay = [
      i.systemA,
      i.systemB,
      i.seoTitle,
      i.typicalUseCases.join(" ")
    ].join(" ");
    const s = scoreItem(query, hay);
    if (s > 0) {
      suggestions.push({
        href: `/schnittstelle/${i.slug}`,
        eyebrow: "Schnittstelle",
        title: `${i.systemA} ↔ ${i.systemB}`,
        score: s
      });
    }
  }

  return suggestions.sort((a, b) => b.score - a.score).slice(0, 8);
}

export default function ProcessInput() {
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => buildSuggestions(query), [query]);
  const hasQuery = query.trim().length > 0;

  return (
    <div className="w-full">
      <div className="glass rounded-3xl p-2 shadow-glass">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Beschreiben Sie Ihr Problem oder Ihren Prozess …"
            rows={2}
            className="min-h-[64px] w-full resize-y rounded-2xl bg-white px-5 py-3.5 text-[15px] leading-relaxed text-ink-900 outline-none placeholder:text-ink-400 focus:ring-2 focus:ring-accent-500/40"
          />
          <Link
            href={{
              pathname: "/kontakt",
              query: hasQuery ? { thema: query.slice(0, 200) } : undefined
            }}
            className="inline-flex items-center justify-center rounded-2xl bg-ink-900 px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition-colors hover:bg-ink-700 md:whitespace-nowrap"
          >
            Prozess prüfen lassen
          </Link>
        </div>
      </div>

      {!hasQuery ? (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-ink-500">
          <span className="font-medium uppercase tracking-[0.16em]">Beispiele</span>
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => setQuery(ex)}
              className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-[12px] text-ink-700 transition-colors hover:border-accent-300 hover:text-ink-900"
            >
              {ex}
            </button>
          ))}
        </div>
      ) : null}

      {hasQuery ? (
        <div className="mt-6">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            Passende Einstiege
          </div>
          {suggestions.length === 0 ? (
            <div className="card p-6 text-[14px] leading-relaxed text-ink-700">
              Kein direkter Treffer im Katalog. Über <Link className="underline underline-offset-2" href="/kontakt">Kontakt</Link>{" "}
              beschreiben Sie den Prozess frei. Wir melden uns mit einer
              individuellen Ersteinschätzung.
            </div>
          ) : (
            <ul className="grid gap-2">
              {suggestions.map((s) => (
                <li key={`${s.eyebrow}-${s.href}`}>
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-900/8 bg-white px-5 py-4 transition-colors hover:border-accent-300"
                  >
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                        {s.eyebrow}
                      </div>
                      <div className="text-[15px] font-semibold text-ink-900">
                        {s.title}
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className="text-ink-400 transition-transform group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
