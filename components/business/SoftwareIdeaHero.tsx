"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Loader2,
  Send,
  Sparkles
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

type CalendlyWithPopup = NonNullable<Window["Calendly"]> & {
  initPopupWidget: (opts: {
    url: string;
    prefill?: Record<string, unknown>;
    utm?: Record<string, unknown>;
  }) => void;
};

function ensureCalendlyAssets(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("not in browser"));
      return;
    }

    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    if (window.Calendly) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_JS}"]`
    );
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener(
          "error",
          () => reject(new Error("Calendly script failed to load")),
          { once: true }
        );
      }
      return;
    }
    const s = document.createElement("script");
    s.src = CALENDLY_JS;
    s.async = true;
    s.onload = () => {
      s.dataset.loaded = "true";
      resolve();
    };
    s.onerror = () => reject(new Error("Calendly script failed to load"));
    document.head.appendChild(s);
  });
}

function openCalendlyPopup(prefill: { name?: string; email?: string }) {
  ensureCalendlyAssets()
    .then(() => {
      const cal = window.Calendly as CalendlyWithPopup | undefined;
      if (cal?.initPopupWidget) {
        cal.initPopupWidget({
          url: CALENDLY_URL,
          prefill
        });
      } else {
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      }
    })
    .catch(() => {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    });
}

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function SoftwareIdeaHero() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setState("sending");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          source: "softwareloesungen"
        })
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        setState("error");
        setErrorMessage(
          data?.error === "invalid_email"
            ? "Bitte prüfen Sie die E-Mail-Adresse."
            : "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
        );
        return;
      }

      setState("sent");
      setTimeout(() => {
        openCalendlyPopup({ name: name.trim(), email: email.trim() });
      }, 900);
    } catch {
      setState("error");
      setErrorMessage(
        "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
      );
    }
  }

  function openCalendlyAgain() {
    openCalendlyPopup({ name: name.trim(), email: email.trim() });
  }

  function resetForm() {
    setState("idle");
    setErrorMessage(null);
  }

  return (
    <section
      id="idee"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-accent-100 opacity-30 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[560px] w-[560px] rounded-full bg-ink-100 opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-3 rounded-sm border border-ink-900/15 bg-white/85 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-600 backdrop-blur"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
          <span className="text-ink-900">Ihre Idee</span>
          <span aria-hidden className="h-3 w-px bg-ink-900/25" />
          <span>Konkrete KI-Anfrage in 60 Sekunden</span>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-[40px] leading-[1.02] tracking-tight text-ink-900 sm:text-6xl md:text-[64px]"
            >
              Was stellen Sie sich vor?
              <br />
              <span className="display italic text-ink-500">
                Wir bauen es passgenau.
              </span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl"
            >
              Beschreiben Sie in einem Satz, wo KI Sie im Alltag entlasten
              soll. Wir melden uns umgehend mit einer präzisen Antwort und
              einem konkreten Vorschlag.
            </motion.p>

            <motion.ul
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 space-y-2.5"
            >
              {[
                "Kein Standardformular – Sie schildern die Situation in Ihren Worten",
                "Antwort direkt vom KBS-Team, keine Warteschleife",
                "Im Anschluss optional: 30-minütiger Videocall zur Vertiefung"
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink-700"
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 flex-shrink-0 text-accent-700"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="card-lift relative overflow-hidden p-6 sm:p-8">
              {state !== "sent" ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-700">
                    <Sparkles size={12} strokeWidth={2.4} />
                    Ihre Idee schildern
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[12px] font-medium text-ink-700">
                          Ihr Name
                        </span>
                        <input
                          type="text"
                          required
                          disabled={state === "sending"}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Vor- und Nachname"
                          className="mt-1.5 block w-full rounded-xl border border-ink-900/15 bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 shadow-sm outline-none transition-all placeholder:text-ink-400 focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20 disabled:opacity-60"
                        />
                      </label>
                      <label className="block">
                        <span className="text-[12px] font-medium text-ink-700">
                          E-Mail
                        </span>
                        <input
                          type="email"
                          required
                          disabled={state === "sending"}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@firma.de"
                          className="mt-1.5 block w-full rounded-xl border border-ink-900/15 bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 shadow-sm outline-none transition-all placeholder:text-ink-400 focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20 disabled:opacity-60"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-[12px] font-medium text-ink-700">
                        Wie stellen Sie sich das vor?
                      </span>
                      <textarea
                        required
                        disabled={state === "sending"}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        placeholder="z. B. Ich will KI in meinen E-Mails, die Antworten vorschlägt und mir bei der Priorisierung hilft ..."
                        className="mt-1.5 block w-full resize-y rounded-xl border border-ink-900/15 bg-white px-3.5 py-3 text-[14.5px] leading-relaxed text-ink-900 shadow-sm outline-none transition-all placeholder:text-ink-400 focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20 disabled:opacity-60"
                      />
                    </label>
                  </div>

                  {state === "error" && errorMessage && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-500/25 bg-red-50 px-4 py-2.5 text-[13px] leading-relaxed text-red-700"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[12px] leading-relaxed text-ink-500">
                      Ihre Nachricht wird direkt an das KBS-Team gesendet, kein
                      E-Mail-Programm nötig.
                    </p>
                    <button
                      type="submit"
                      disabled={state === "sending"}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {state === "sending" ? (
                        <>
                          <Loader2
                            size={15}
                            strokeWidth={2.2}
                            className="animate-spin"
                          />
                          Wird gesendet …
                        </>
                      ) : (
                        <>
                          <Send size={15} strokeWidth={2.2} />
                          Anfrage senden
                          <ArrowRight size={15} strokeWidth={2.2} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-500/25 bg-accent-500/10">
                    <CheckCircle2
                      size={26}
                      strokeWidth={2}
                      className="text-accent-700"
                    />
                  </div>
                  <h2 className="mt-5 text-2xl leading-snug tracking-tight text-ink-900 sm:text-3xl">
                    Danke für Ihre Anfrage.
                  </h2>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-ink-500">
                    Wir werden Ihnen umgehend präzise antworten.
                  </p>
                  <p className="mt-6 text-[14px] leading-relaxed text-ink-600">
                    Direkt einen Videocall dazu buchen? Der Kalender öffnet
                    sich automatisch.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={openCalendlyAgain}
                      className="btn-primary"
                    >
                      <CalendarClock size={15} strokeWidth={2.2} />
                      Termin buchen
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn-ghost"
                    >
                      Neue Anfrage stellen
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
