"use client";

import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { EMAIL } from "@/lib/config";

type LeadFormProps = {
  source?: string;
  defaultSubject?: string;
};

export default function LeadForm({
  source,
  defaultSubject = "Anfrage über kbs-website"
}: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const lines: string[] = [];
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    lines.push(`E-Mail: ${email.trim()}`);
    if (source) lines.push(`Herkunft: ${source}`);
    lines.push("");
    if (message.trim()) {
      lines.push("Nachricht:");
      lines.push(message.trim());
    } else {
      lines.push("Nachricht: (keine Nachricht angegeben)");
    }

    const subject = encodeURIComponent(defaultSubject);
    const body = encodeURIComponent(lines.join("\n"));
    const href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = href;
    setOpened(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="card p-7 md:p-8"
      aria-label="Kontakt-Formular"
    >
      <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
        Anfrage senden
      </p>
      <h3 className="mt-2 text-2xl leading-tight tracking-tight text-ink-900">
        Kurz Ihre Frage.
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
        Beim Absenden öffnet sich Ihr Email-Programm mit einer vorbereiteten
        Nachricht. Von uns aus wird nichts gespeichert – nur die Adresse, die
        Sie freiwillig senden, landet in unserem Postfach.
      </p>

      <div className="mt-6 space-y-4">
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
            Ihre Frage (optional)
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-2 w-full resize-y rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-[15px] leading-relaxed text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            placeholder="Kurz worum es geht – zum Beispiel Schulung, Ausgangssituation, gewünschter Termin."
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary mt-6 w-full justify-center"
      >
        {opened ? (
          <>
            <Check size={16} strokeWidth={2.4} />
            Email-Programm geöffnet
          </>
        ) : (
          <>
            <Send size={16} strokeWidth={2.4} />
            Anfrage absenden
          </>
        )}
      </button>

      <div className="mt-5 flex items-center gap-2 text-[12.5px] text-ink-400">
        <Mail size={12} strokeWidth={2.2} />
        <span>
          Alternativ direkt:{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-ink-700 underline underline-offset-2 hover:text-ink-900"
          >
            {EMAIL}
          </a>
        </span>
      </div>
    </form>
  );
}
