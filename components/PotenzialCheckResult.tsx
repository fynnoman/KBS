import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Gauge,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";
import type { PotenzialResult } from "@/lib/data/potenzialCheckRecommendations";
import { CALENDLY_URL } from "@/lib/config";

type Props = {
  result: PotenzialResult;
};

const SCORE_COLORS: Record<PotenzialResult["scoreLabel"], string> = {
  hoch: "text-emerald-600",
  mittel: "text-accent-700",
  niedrig: "text-ink-500"
};

const SCORE_RING: Record<PotenzialResult["scoreLabel"], string> = {
  hoch: "border-emerald-500/40 bg-emerald-500/5",
  mittel: "border-accent-500/40 bg-accent-500/5",
  niedrig: "border-ink-900/15 bg-ink-50"
};

export default function PotenzialCheckResult({ result }: Props) {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Score Hero */}
      <div className={`card overflow-hidden p-8 md:p-12 ${SCORE_RING[result.scoreLabel]}`}>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <span className="chip">
              <Sparkles size={11} strokeWidth={2} />
              Ihr Ergebnis
            </span>
            <h2 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
              {result.scoreHeadline}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
              {result.scoreExplainer}
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-6 md:flex-col md:items-end">
            <div className="text-center">
              <div className={`display text-[64px] leading-none ${SCORE_COLORS[result.scoreLabel]} md:text-[88px]`}>
                {result.score}
              </div>
              <p className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                KI-Potenzial-Score
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/70 p-5 backdrop-blur">
            <div className="flex items-center gap-2 text-ink-400">
              <Gauge size={14} strokeWidth={2.2} />
              <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                Reifegrad
              </p>
            </div>
            <p className="mt-2 text-[14px] leading-snug text-ink-800">
              {result.maturityLabel}
            </p>
          </div>
          <div className="rounded-2xl bg-white/70 p-5 backdrop-blur">
            <div className="flex items-center gap-2 text-ink-400">
              <Target size={14} strokeWidth={2.2} />
              <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                Realistische Zeitersparnis
              </p>
            </div>
            <p className="mt-2 text-[14px] leading-snug text-ink-800">
              {result.timeSavingsEstimate}
            </p>
          </div>
          <div className="rounded-2xl bg-white/70 p-5 backdrop-blur">
            <div className="flex items-center gap-2 text-ink-400">
              <ShieldCheck size={14} strokeWidth={2.2} />
              <p className="text-[10.5px] font-medium uppercase tracking-[0.18em]">
                Datenschutz-Hinweis
              </p>
            </div>
            <p className="mt-2 text-[14px] leading-snug text-ink-800">
              {result.complianceNote}
            </p>
          </div>
        </div>
      </div>

      {/* Use cases */}
      <section className="mt-16">
        <div className="max-w-3xl">
          <span className="chip">Ihre Top-Anwendungsfälle</span>
          <h3 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
            Damit würden wir bei Ihnen starten.
          </h3>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-500">
            Auf Basis Ihrer Antworten. Diese Anwendungen versprechen den
            schnellsten spürbaren Effekt.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {result.useCases.map((u, i) => (
            <div key={`${u.title}-${i}`} className="card p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="display text-lg italic text-accent-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="chip">
                  {u.source === "industry" ? "Branchen-Anwendung" : "Abteilung"}
                </span>
              </div>
              <h4 className="mt-4 text-xl leading-tight tracking-tight text-ink-900">
                {u.title}
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                {u.problem}
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-800">
                <span className="font-medium text-accent-700">Mit KI: </span>
                {u.aiSolution}
              </p>
              <Link
                href={u.routePath}
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 hover:text-ink-900"
              >
                Anwendungsfall vertiefen
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Concern */}
      <section className="mt-16">
        <div className="card border-ink-900/10 bg-white p-7 md:p-10">
          <span className="chip">Antwort auf Ihre größte Sorge</span>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-800">
            {result.concernAnswer}
          </p>
        </div>
      </section>

      {/* Recommended services */}
      <section className="mt-16">
        <div className="max-w-3xl">
          <span className="chip">Empfohlener nächster Schritt</span>
          <h3 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
            {result.nextStep}
          </h3>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {result.services.map((s) => (
            <Link
              key={s.slug}
              href={s.routePath}
              className="group card block h-full p-6 transition-all hover:shadow-lift"
            >
              <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
                {s.duration}
              </p>
              <h4 className="mt-3 text-xl leading-tight tracking-tight text-ink-900">
                {s.title}
              </h4>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-500">
                {s.summary.length > 150 ? `${s.summary.slice(0, 150)}…` : s.summary}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-700 group-hover:text-ink-900">
                Leistung ansehen
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Calendly CTA */}
      <section className="mt-16">
        <div className="card border-accent-500/30 bg-accent-500/5 p-8 md:p-12 text-center">
          <span className="chip">
            <Calendar size={11} strokeWidth={2} />
            Direkt weitermachen
          </span>
          <h3 className="mt-5 text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
            Ergebnis besprechen im kostenlosen Erstgespräch.
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-[15.5px] leading-relaxed text-ink-500">
            In 20 bis 30 Minuten gehen wir gemeinsam durch Ihre Auswertung und
            klären, welches der oben gezeigten Pakete für Ihre Ausgangslage
            wirklich passt. Kein Verkaufsdruck, kein Vertrag.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Calendar size={16} strokeWidth={2.4} />
              Termin auswählen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
