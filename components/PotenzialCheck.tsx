"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { POTENZIAL_CHECK_QUESTIONS } from "@/lib/data/potenzialCheckQuestions";
import type {
  CheckAnswers,
  Question
} from "@/lib/data/potenzialCheckQuestions";
import { buildRecommendation } from "@/lib/data/potenzialCheckRecommendations";
import PotenzialCheckResult from "@/components/PotenzialCheckResult";

function isValid(question: Question, value: string | string[] | undefined) {
  if (!question.required) return true;
  if (question.kind === "multi") {
    return Array.isArray(value) && value.length > 0;
  }
  return typeof value === "string" && value.length > 0;
}

export default function PotenzialCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<CheckAnswers>({});
  const [finished, setFinished] = useState(false);

  const questions = POTENZIAL_CHECK_QUESTIONS;
  const current = questions[step];
  const progress = Math.round(((step + (finished ? 1 : 0)) / questions.length) * 100);
  const canGoNext = isValid(current, answers[current.id]);

  const result = useMemo(() => {
    if (!finished) return null;
    return buildRecommendation(answers);
  }, [finished, answers]);

  const setValue = (value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const toggleMulti = (value: string) => {
    const current = (answers[questions[step].id] as string[] | undefined) ?? [];
    if (current.includes(value)) {
      setValue(current.filter((v) => v !== value));
    } else {
      setValue([...current, value]);
    }
  };

  const goNext = () => {
    if (!canGoNext) return;
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    } else {
      setFinished(true);
    }
  };

  const goPrev = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  if (finished && result) {
    return <PotenzialCheckResult result={result} answers={answers} />;
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
        <span>
          Frage {step + 1} von {questions.length}
        </span>
        <span>{progress}% abgeschlossen</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-900/8">
        <div
          className="h-full rounded-full bg-accent-500 transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question card */}
      <div className="card mt-8 p-7 md:p-10">
        <div className="flex items-start gap-3">
          <span className="chip">
            <Sparkles size={11} strokeWidth={2} />
            {current.kind === "multi" ? "Mehrfachauswahl" : "Eine Antwort"}
          </span>
        </div>
        <h2 className="mt-6 text-2xl leading-tight tracking-tight text-ink-900 sm:text-3xl">
          {current.title}
        </h2>
        {current.description && (
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            {current.description}
          </p>
        )}

        <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {current.options.map((opt) => {
            const value = answers[current.id];
            const isSelected =
              current.kind === "multi"
                ? Array.isArray(value) && value.includes(opt.value)
                : value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  if (current.kind === "multi") toggleMulti(opt.value);
                  else setValue(opt.value);
                }}
                className={`group flex items-start gap-3 rounded-2xl border px-4 py-4 text-left transition-all ${
                  isSelected
                    ? "border-accent-500 bg-accent-500/5 shadow-lift"
                    : "border-ink-900/10 bg-white hover:border-ink-900/30 hover:bg-ink-50"
                }`}
                aria-pressed={isSelected}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    isSelected
                      ? "border-accent-500 bg-accent-500 text-white"
                      : "border-ink-900/20 bg-white text-transparent"
                  }`}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="flex-1">
                  <span className="block text-[14.5px] font-medium leading-snug text-ink-900">
                    {opt.label}
                  </span>
                  {opt.hint && (
                    <span className="mt-1 block text-[12.5px] leading-snug text-ink-500">
                      {opt.hint}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={step === 0}
            className={`btn-ghost ${step === 0 ? "invisible" : ""}`}
          >
            <ArrowLeft size={14} strokeWidth={2.2} />
            Zurück
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className={`btn-primary transition-opacity ${
              canGoNext ? "opacity-100" : "cursor-not-allowed opacity-40"
            }`}
          >
            {step === questions.length - 1 ? "Ergebnis ansehen" : "Weiter"}
            <ArrowRight size={14} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <p className="mt-6 text-center text-[12.5px] text-ink-400">
        Kein Login, kein Werbe-Tracking. Ihr Ergebnis erscheint sofort auf dem
        Bildschirm.
      </p>
    </div>
  );
}
