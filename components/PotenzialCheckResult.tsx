"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Gauge,
  Loader2,
  Mail,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";
import type { CheckAnswers } from "@/lib/data/potenzialCheckQuestions";
import type { PotenzialResult } from "@/lib/data/potenzialCheckRecommendations";
import { CALENDLY_URL } from "@/lib/config";

type Props = {
  result: PotenzialResult;
  answers: CheckAnswers;
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

export default function PotenzialCheckResult({ result, answers }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [wantsCall, setWantsCall] = useState(true);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          company: company.trim() || undefined,
          wantsCall,
          answers,
          result,
          source: "potenzial-check"
        })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `Fehler ${res.status}`);
      }
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Unbekannter Fehler"
      );
    }
  };

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

      {/* Lead form */}
      <section className="mt-16">
        <div className="card p-7 md:p-10">
          {status === "ok" ? (
            <div className="flex flex-col items-center gap-5 py-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 text-accent-700">
                <CheckCircle2 size={26} strokeWidth={2} />
              </div>
              <h3 className="text-2xl leading-tight tracking-tight text-ink-900 sm:text-3xl">
                Ergebnis unterwegs zu Ihnen.
              </h3>
              <p className="max-w-xl text-[15.5px] leading-relaxed text-ink-500">
                Innerhalb der nächsten Minuten liegt Ihr ausführlicher
                Auswertungsbericht in Ihrem Postfach. In den nächsten Tagen
                erhalten Sie zusätzlich konkrete Praxis-Impulse zu Ihren Top-Use-Cases.
                Kein Werbe-Verteiler – jederzeit mit einem Klick abbestellbar.
              </p>
              {wantsCall && (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Calendar size={16} strokeWidth={2.4} />
                  Termin für kostenloses Strategiegespräch wählen
                </a>
              )}
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-8 md:grid-cols-2">
              <div>
                <span className="chip">
                  <Mail size={11} strokeWidth={2} />
                  Ergebnis per E-Mail
                </span>
                <h3 className="mt-5 text-2xl leading-tight tracking-tight text-ink-900 sm:text-3xl">
                  Ergebnis speichern und Praxis-Impulse erhalten.
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                  Wir schicken Ihnen eine ausführliche Auswertung inklusive
                  Priorisierung der Anwendungen und eine kurze
                  Praxis-Sequenz zu Ihren Top-Themen. Ihre Daten werden
                  ausschließlich für die persönliche Antwort verwendet.
                </p>
                <ul className="mt-6 space-y-2 text-[13.5px] text-ink-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      strokeWidth={2.4}
                      className="mt-0.5 flex-shrink-0 text-accent-700"
                    />
                    Vollständige Auswertung inkl. Roadmap-Vorschlag
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      strokeWidth={2.4}
                      className="mt-0.5 flex-shrink-0 text-accent-700"
                    />
                    Drei Follow-up-Mails mit Beispielen aus Ihrer Branche
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      strokeWidth={2.4}
                      className="mt-0.5 flex-shrink-0 text-accent-700"
                    />
                    Optional: kostenloses 30-Minuten-Strategiegespräch
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    E-Mail *
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                    placeholder="ihre.adresse@firma.de"
                    autoComplete="email"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    Name (optional)
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                    placeholder="Vorname Nachname"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    Unternehmen (optional)
                  </span>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                    placeholder="Musterfirma GmbH"
                    autoComplete="organization"
                  />
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-ink-900/10 bg-white p-4">
                  <input
                    type="checkbox"
                    checked={wantsCall}
                    onChange={(e) => setWantsCall(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-ink-900/20 text-accent-500 focus:ring-accent-500"
                  />
                  <span className="text-[13.5px] leading-snug text-ink-700">
                    Ja, ich möchte im Anschluss ein kostenloses
                    30-Minuten-Strategiegespräch angeboten bekommen.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full justify-center"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} strokeWidth={2.4} className="animate-spin" />
                      Wird gesendet
                    </>
                  ) : (
                    <>
                      <Mail size={16} strokeWidth={2.4} />
                      Ergebnis per E-Mail erhalten
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-[13px] text-red-600">
                    {errorMessage ?? "Bitte versuchen Sie es in einem Moment erneut."}
                  </p>
                )}
                <p className="text-[11.5px] leading-relaxed text-ink-400">
                  Mit dem Absenden willigen Sie in die Verarbeitung Ihrer
                  Angaben ein. Details in unserer{" "}
                  <Link href="/datenschutz" className="underline underline-offset-2">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
