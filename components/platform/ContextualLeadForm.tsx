"use client";

import { useState } from "react";

type Prefill = {
  process?: string;
  systemA?: string;
  systemB?: string;
  systems?: string;
  context?: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  source: string;
  prefill?: Prefill;
  // Feld-Sichtbarkeit
  showSystemsField?: boolean;
  showSystemAB?: boolean;
};

type SubmitState =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok" }
  | { kind: "error"; message: string };

export default function ContextualLeadForm({
  title = "Kostenlose Ersteinschätzung anfordern",
  subtitle = "Wir prüfen kostenlos, wie sich der Prozess in Ihrer bestehenden IT umsetzen lässt.",
  primaryLabel = "Ersteinschätzung anfordern",
  source,
  prefill = {},
  showSystemsField,
  showSystemAB
}: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(prefill.context ?? "");
  const [processField, setProcessField] = useState(prefill.process ?? "");
  const [systemA, setSystemA] = useState(prefill.systemA ?? "");
  const [systemB, setSystemB] = useState(prefill.systemB ?? "");
  const [systems, setSystems] = useState(prefill.systems ?? "");
  const [state, setState] = useState<SubmitState>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state.kind === "sending") return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setState({
        kind: "error",
        message: "Bitte Name, E-Mail und eine kurze Beschreibung angeben."
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
          company,
          email,
          phone,
          message,
          source,
          process: processField || undefined,
          systemA: systemA || undefined,
          systemB: systemB || undefined,
          systems: systems || undefined,
          context: prefill.context ?? undefined
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        setState({
          kind: "error",
          message:
            data?.error === "invalid_email"
              ? "Bitte eine gültige E-Mail-Adresse angeben."
              : "Der Versand ist fehlgeschlagen. Bitte später erneut versuchen oder direkt eine E-Mail senden."
        });
        return;
      }
      setState({ kind: "ok" });
    } catch (err) {
      setState({
        kind: "error",
        message:
          "Verbindung fehlgeschlagen. Bitte später erneut versuchen oder direkt eine E-Mail senden."
      });
    }
  }

  if (state.kind === "ok") {
    return (
      <div className="card-lift p-8">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-700">
          Anfrage gesendet
        </div>
        <h3 className="mt-2 text-2xl font-semibold text-ink-900">
          Danke, wir melden uns.
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
          Ihre Nachricht ist bei uns eingegangen. In der Regel melden wir uns
          innerhalb eines Werktags mit Rückfragen oder einem Termin für ein
          Videocall zur Ersteinschätzung.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-lift p-8">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
        Kostenlose Ersteinschätzung
      </div>
      <h3 className="mt-2 text-2xl font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{subtitle}</p>

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
          <span className="text-[12px] font-medium text-ink-700">Unternehmen</span>
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
        {showSystemAB ? (
          <>
            <label className="grid gap-1.5">
              <span className="text-[12px] font-medium text-ink-700">System A</span>
              <input
                value={systemA}
                onChange={(e) => setSystemA(e.target.value)}
                className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-[12px] font-medium text-ink-700">System B</span>
              <input
                value={systemB}
                onChange={(e) => setSystemB(e.target.value)}
                className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
              />
            </label>
          </>
        ) : null}
        {showSystemsField ? (
          <label className="grid gap-1.5 sm:col-span-2">
            <span className="text-[12px] font-medium text-ink-700">
              Eingesetzte Software (optional)
            </span>
            <input
              value={systems}
              onChange={(e) => setSystems(e.target.value)}
              placeholder="z.B. HubSpot, DATEV, Microsoft 365"
              className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
            />
          </label>
        ) : null}
        <label className="grid gap-1.5 sm:col-span-2">
          <span className="text-[12px] font-medium text-ink-700">Prozess</span>
          <input
            value={processField}
            onChange={(e) => setProcessField(e.target.value)}
            className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
          />
        </label>
        <label className="grid gap-1.5 sm:col-span-2">
          <span className="text-[12px] font-medium text-ink-700">Beschreibung*</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="min-h-[110px] rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] leading-relaxed text-ink-900 outline-none focus:border-accent-400"
          />
        </label>
      </div>

      {state.kind === "error" ? (
        <div
          role="alert"
          className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13.5px] text-amber-900"
        >
          {state.message}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={state.kind === "sending"}
          className="inline-flex items-center justify-center rounded-2xl bg-ink-900 px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition-colors hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state.kind === "sending" ? "Wird gesendet …" : primaryLabel}
        </button>
        <span className="text-[12px] text-ink-500">
          Keine Vertragspflicht. Datenschutzhinweise gelten.
        </span>
      </div>
    </form>
  );
}
