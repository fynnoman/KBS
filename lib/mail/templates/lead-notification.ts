import type { LeadPayload } from "@/app/api/lead/schema";
import { SITE_URL_ABSOLUTE } from "@/lib/mail/resend";

function escape(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function serializeAnswer(value: string | string[]): string {
  if (Array.isArray(value)) return value.join(", ");
  return value;
}

export function buildNotificationEmail(payload: LeadPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const { result, answers } = payload;
  const answerRows = Object.entries(answers)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 8px 4px 0;color:#8a8a8a;font-size:12px;text-transform:uppercase;letter-spacing:0.14em;">${escape(k)}</td><td style="padding:4px 0;font-size:13px;color:#0e121a;">${escape(serializeAnswer(v))}</td></tr>`
    )
    .join("");
  const useCasesList = result.useCases
    .map((u) => `<li>${escape(u.title)}</li>`)
    .join("");

  const html = `<!doctype html>
<html>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,sans-serif;color:#0e121a;">
    <h2>Neuer Lead aus dem KI-Potenzial-Check</h2>
    <p style="font-size:14px;">
      <strong>E-Mail:</strong> ${escape(payload.email)}<br />
      <strong>Name:</strong> ${escape(payload.name ?? "—")}<br />
      <strong>Unternehmen:</strong> ${escape(payload.company ?? "—")}<br />
      <strong>Strategiegespräch gewünscht:</strong> ${payload.wantsCall ? "Ja" : "Nein"}<br />
      <strong>Quelle:</strong> ${escape(payload.source)}
    </p>

    <h3 style="margin-top:24px;">Ergebnis</h3>
    <p style="font-size:14px;">
      <strong>Score:</strong> ${result.score} (${escape(result.scoreLabel)})<br />
      <strong>Reifegrad:</strong> ${escape(result.maturityLabel)}<br />
      <strong>Zeitersparnis:</strong> ${escape(result.timeSavingsEstimate)}<br />
      <strong>Nächster Schritt:</strong> ${escape(result.nextStep)}
    </p>

    <h3 style="margin-top:24px;">Empfohlene Anwendungen</h3>
    <ol style="font-size:14px;">${useCasesList}</ol>

    <h3 style="margin-top:24px;">Rohantworten</h3>
    <table style="border-collapse:collapse;">${answerRows}</table>

    <p style="margin-top:24px;font-size:12px;color:#8a8a8a;">
      Ausgelöst über ${escape(SITE_URL_ABSOLUTE)}/ki-potenzial-check
    </p>
  </body>
</html>`;

  const text = [
    "Neuer Lead aus dem KI-Potenzial-Check",
    "",
    `E-Mail: ${payload.email}`,
    `Name: ${payload.name ?? "—"}`,
    `Unternehmen: ${payload.company ?? "—"}`,
    `Strategiegespräch gewünscht: ${payload.wantsCall ? "Ja" : "Nein"}`,
    `Quelle: ${payload.source}`,
    "",
    `Score: ${result.score} (${result.scoreLabel})`,
    `Reifegrad: ${result.maturityLabel}`,
    `Zeitersparnis: ${result.timeSavingsEstimate}`,
    `Nächster Schritt: ${result.nextStep}`,
    "",
    "Empfohlene Anwendungen:",
    ...result.useCases.map((u, i) => `${i + 1}. ${u.title}`),
    "",
    "Rohantworten:",
    ...Object.entries(answers).map(
      ([k, v]) => `- ${k}: ${serializeAnswer(v)}`
    )
  ].join("\n");

  return {
    subject: `Neuer KI-Lead: ${payload.email}${payload.company ? ` (${payload.company})` : ""}`,
    html,
    text
  };
}
