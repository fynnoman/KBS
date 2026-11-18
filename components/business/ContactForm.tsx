"use client";

import { useState } from "react";

type SubmitState =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok" }
  | { kind: "error"; message: string; hint?: string };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<SubmitState>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state.kind === "sending") return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setState({
        kind: "error",
        message: "Bitte Name, E-Mail und eine kurze Nachricht angeben."
      });
      return;
    }

    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company: company || undefined,
          email,
          phone: phone || undefined,
          message,
          source: "kontakt"
        })
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || data?.ok === false) {
        const err = data?.error as string | undefined;
        if (err === "invalid_email") {
          setState({
            kind: "error",
            message: "Bitte eine gültige E-Mail-Adresse angeben."
          });
        } else if (err === "missing_fields") {
          setState({
            kind: "error",
            message: "Bitte alle Pflichtfelder ausfüllen."
          });
        } else if (err === "mail_not_configured") {
          setState({
            kind: "error",
            message:
              "Der Mail-Versand ist derzeit nicht konfiguriert. Bitte direkt an info@ki-beratung-saar.com schreiben.",
            hint: "Admin: RESEND_API_KEY im Deployment setzen."
          });
        } else if (err === "mail_auth_failed") {
          setState({
            kind: "error",
            message:
              "Der Mail-Versand ist aktuell gestört. Bitte direkt an info@ki-beratung-saar.com schreiben.",
            hint: "Admin: RESEND_API_KEY wurde abgelehnt, bitte Key prüfen."
          });
        } else {
          const detail =
            typeof data?.detail?.message === "string"
              ? ` (${data.detail.message})`
              : "";
          setState({
            kind: "error",
            message:
              "Der Versand ist fehlgeschlagen. Bitte später erneut versuchen oder direkt an info@ki-beratung-saar.com schreiben." +
              detail
          });
        }
        return;
      }
      setState({ kind: "ok" });
    } catch {
      setState({
        kind: "error",
        message:
          "Verbindung fehlgeschlagen. Bitte später erneut versuchen oder direkt an info@ki-beratung-saar.com schreiben."
      });
    }
  }

  if (state.kind === "ok") {
    return (
      <div className="card-lift p-8">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-700">
          Nachricht gesendet
        </div>
        <h3 className="mt-2 text-2xl font-semibold text-ink-900">
          Danke, wir melden uns.
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
          Ihre Nachricht ist bei uns angekommen. In der Regel antworten wir
          innerhalb eines Werktags.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-lift p-8">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
        Nachricht an KBS
      </div>
      <h3 className="mt-2 text-2xl font-semibold text-ink-900">
        Schreiben Sie uns.
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
        Ein Formular, direkt an das KBS-Team. Antwort in der Regel innerhalb
        eines Werktags.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[12px] font-medium text-ink-700">Name*</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-[12px] font-medium text-ink-700">
            Unternehmen
          </span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-[12px] font-medium text-ink-700">E-Mail*</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-[12px] font-medium text-ink-700">Telefon</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
          />
        </label>
        <label className="grid gap-1.5 sm:col-span-2">
          <span className="text-[12px] font-medium text-ink-700">
            Nachricht*
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            placeholder="Kurz die Ausgangslage, Fragen oder gewünschtes Thema."
            className="min-h-[140px] rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] leading-relaxed text-ink-900 outline-none focus:border-accent-400"
          />
        </label>
      </div>

      {state.kind === "error" ? (
        <div
          role="alert"
          className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13.5px] text-amber-900"
        >
          <p>{state.message}</p>
          {state.hint ? (
            <p className="mt-1 text-[12px] text-amber-800/80">{state.hint}</p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={state.kind === "sending"}
          className="inline-flex items-center justify-center rounded-2xl bg-ink-900 px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition-colors hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state.kind === "sending" ? "Wird gesendet …" : "Nachricht senden"}
        </button>
        <span className="text-[12px] text-ink-500">
          Alternativ:{" "}
          <a
            href="mailto:info@ki-beratung-saar.com"
            className="underline underline-offset-2"
          >
            info@ki-beratung-saar.com
          </a>
        </span>
      </div>
    </form>
  );
}
