import { CALENDLY_URL } from "@/lib/config";
import type { LeadPayload } from "@/app/api/lead/schema";
import { SITE_URL_ABSOLUTE } from "@/lib/mail/resend";

function escape(html: string): string {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function useCaseBlock(u: LeadPayload["result"]["useCases"][number], index: number) {
  return `
    <tr>
      <td style="padding:16px 0;border-bottom:1px solid #eee;">
        <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8a8a8a;">
          Anwendung ${String(index + 1).padStart(2, "0")}
        </p>
        <h3 style="margin:0 0 8px;font-size:18px;line-height:1.35;color:#0e121a;">
          ${escape(u.title)}
        </h3>
        <p style="margin:0 0 8px;font-size:14px;line-height:1.55;color:#555;">
          ${escape(u.problem)}
        </p>
        <p style="margin:0 0 12px;font-size:14px;line-height:1.55;color:#0e121a;">
          <strong style="color:#00754a;">Mit KI:</strong> ${escape(u.aiSolution)}
        </p>
        <a href="${SITE_URL_ABSOLUTE}${u.routePath}" style="font-size:13px;color:#0e121a;text-decoration:underline;">
          Anwendung vertiefen &rarr;
        </a>
      </td>
    </tr>
  `;
}

function serviceBlock(s: LeadPayload["result"]["services"][number]) {
  return `
    <tr>
      <td style="padding:12px 0;">
        <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8a8a8a;">
          ${escape(s.duration)}
        </p>
        <a href="${SITE_URL_ABSOLUTE}${s.routePath}" style="font-size:15px;color:#0e121a;text-decoration:none;font-weight:600;">
          ${escape(s.title)}
        </a>
        <p style="margin:6px 0 0;font-size:13.5px;line-height:1.55;color:#555;">
          ${escape(s.summary.length > 180 ? s.summary.slice(0, 180) + "…" : s.summary)}
        </p>
      </td>
    </tr>
  `;
}

export function buildWelcomeEmail(payload: LeadPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const greetingName = payload.name?.split(" ")[0] ?? "";
  const greeting = greetingName ? `Hallo ${escape(greetingName)},` : "Hallo,";
  const { result } = payload;

  const useCasesHtml = result.useCases
    .map((u, i) => useCaseBlock(u, i))
    .join("");
  const servicesHtml = result.services.map(serviceBlock).join("");
  const callCta = payload.wantsCall
    ? `
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
        <tr>
          <td style="background:#00754a;border-radius:10px;">
            <a href="${CALENDLY_URL}" style="display:inline-block;padding:14px 22px;color:#fff;text-decoration:none;font-size:15px;font-weight:600;">
              Kostenloses Strategiegespräch buchen
            </a>
          </td>
        </tr>
      </table>
    `
    : "";

  const html = `<!doctype html>
<html>
  <body style="margin:0;background:#f6f5f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,sans-serif;color:#0e121a;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f5f2;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 8px;">
                <p style="margin:0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#8a8a8a;">
                  KBS – KI-Beratung Saar
                </p>
                <h1 style="margin:16px 0 0;font-size:26px;line-height:1.2;color:#0e121a;">
                  Ihr KI-Potenzial-Check-Ergebnis.
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 0;">
                <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#333;">
                  ${greeting}
                </p>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#333;">
                  vielen Dank für Ihre Antworten. Auf einen Blick:
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #eee;border-radius:12px;padding:16px;background:#fafafa;">
                  <tr>
                    <td style="font-size:14px;line-height:1.55;color:#0e121a;">
                      <strong>${escape(result.scoreHeadline)}</strong><br />
                      Score: <strong>${result.score}</strong> · ${escape(result.maturityLabel)}<br />
                      Realistische Zeitersparnis: <strong>${escape(result.timeSavingsEstimate)}</strong>
                    </td>
                  </tr>
                </table>
                <p style="margin:20px 0 8px;font-size:15px;line-height:1.65;color:#333;">
                  ${escape(result.scoreExplainer)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;">
                <h2 style="margin:0 0 4px;font-size:18px;color:#0e121a;">
                  Ihre Top-Anwendungen
                </h2>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  ${useCasesHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;">
                <h2 style="margin:0 0 4px;font-size:18px;color:#0e121a;">
                  Empfohlener nächster Schritt
                </h2>
                <p style="margin:0 0 8px;font-size:15px;line-height:1.65;color:#333;">
                  ${escape(result.nextStep)}
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  ${servicesHtml}
                </table>
                ${callCta}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 8px;">
                <h2 style="margin:0 0 4px;font-size:18px;color:#0e121a;">
                  Datenschutz-Einordnung
                </h2>
                <p style="margin:0 0 8px;font-size:14px;line-height:1.65;color:#555;">
                  ${escape(result.complianceNote)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 8px;">
                <h2 style="margin:0 0 4px;font-size:18px;color:#0e121a;">
                  Antwort auf Ihre größte Sorge
                </h2>
                <p style="margin:0 0 8px;font-size:14px;line-height:1.65;color:#555;">
                  ${escape(result.concernAnswer)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;border-top:1px solid #eee;">
                <p style="margin:0;font-size:12px;line-height:1.55;color:#8a8a8a;">
                  In den nächsten Tagen erhalten Sie drei kurze Follow-up-Mails
                  mit vertiefenden Beispielen zu Ihren Top-Themen. Jederzeit
                  mit einem Klick abbestellbar.
                </p>
                <p style="margin:12px 0 0;font-size:12px;line-height:1.55;color:#8a8a8a;">
                  KBS – KI-Beratung Saar · <a href="${SITE_URL_ABSOLUTE}" style="color:#8a8a8a;">${SITE_URL_ABSOLUTE.replace(/^https?:\/\//, "")}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    `${greetingName ? `Hallo ${greetingName},` : "Hallo,"}`,
    "",
    `Ihr KI-Potenzial-Check-Ergebnis:`,
    `${result.scoreHeadline}`,
    `Score: ${result.score} · ${result.maturityLabel}`,
    `Realistische Zeitersparnis: ${result.timeSavingsEstimate}`,
    "",
    result.scoreExplainer,
    "",
    "Top-Anwendungen:",
    ...result.useCases.map(
      (u, i) => `${i + 1}. ${u.title} — ${u.aiSolution} (${SITE_URL_ABSOLUTE}${u.routePath})`
    ),
    "",
    `Empfohlener nächster Schritt: ${result.nextStep}`,
    ...result.services.map(
      (s) => `- ${s.title} (${s.duration}) ${SITE_URL_ABSOLUTE}${s.routePath}`
    ),
    "",
    `Datenschutz: ${result.complianceNote}`,
    "",
    payload.wantsCall
      ? `Strategiegespräch buchen: ${CALENDLY_URL}`
      : "",
    "",
    "In den nächsten Tagen folgen drei kurze Praxis-Impulse per E-Mail.",
    "",
    "KBS – KI-Beratung Saar",
    SITE_URL_ABSOLUTE
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject: `Ihr KI-Potenzial-Check: ${result.scoreHeadline}`,
    html,
    text
  };
}
