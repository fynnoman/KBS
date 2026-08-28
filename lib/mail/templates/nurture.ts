import { CALENDLY_URL } from "@/lib/config";
import type { LeadPayload } from "@/app/api/lead/schema";
import { SITE_URL_ABSOLUTE } from "@/lib/mail/resend";

function escape(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(body: string, headline: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;background:#f6f5f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,sans-serif;color:#0e121a;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f5f2;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="padding:32px;">
                <p style="margin:0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#8a8a8a;">
                  KBS – KI-Beratung Saar · Praxis-Impuls
                </p>
                <h1 style="margin:16px 0 20px;font-size:24px;line-height:1.25;color:#0e121a;">
                  ${escape(headline)}
                </h1>
                ${body}
                <p style="margin:28px 0 0;font-size:12px;color:#8a8a8a;">
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
}

function greet(payload: LeadPayload): string {
  const first = payload.name?.split(" ")[0];
  return first ? `Hallo ${escape(first)},` : "Hallo,";
}

function topUseCaseTitle(payload: LeadPayload): string {
  return payload.result.useCases[0]?.title ?? "Ihre priorisierte Anwendung";
}

function ctaButton(label: string, href: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
      <tr>
        <td style="background:#0e121a;border-radius:10px;">
          <a href="${href}" style="display:inline-block;padding:14px 22px;color:#fff;text-decoration:none;font-size:15px;font-weight:600;">
            ${escape(label)}
          </a>
        </td>
      </tr>
    </table>
  `;
}

export function buildNurture1(payload: LeadPayload) {
  const topCase = payload.result.useCases[0];
  const topPath = topCase?.routePath ?? "/ki-anwendungsfaelle";
  const topTitle = topUseCaseTitle(payload);
  const body = `
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">${greet(payload)}</p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      im Ergebnis Ihres Potenzial-Checks stand <strong>${escape(topTitle)}</strong> an erster Stelle. Heute ein konkreter Praxis-Impuls dazu.
    </p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      Der Fehler, den wir am häufigsten sehen: Teams starten mit dem <em>Werkzeug</em> und suchen dann den passenden Prozess. Erfolgreicher ist der umgekehrte Weg – ein wiederkehrender Prozess wird ausgewählt und die KI in die bestehende Rolle eingepasst.
    </p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      Praktisch heißt das: Wählen Sie eine Aufgabe, die Sie mindestens fünfmal pro Woche wiederholen. Beschreiben Sie den bestehenden Ablauf in drei Sätzen. Erst dann öffnen Sie ChatGPT oder ein vergleichbares Werkzeug – und lassen es diesen Ablauf beschleunigen, nicht ersetzen.
    </p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      Weitere Details zu genau diesem Muster finden Sie auf unserer Anwendungsseite:
    </p>
    ${ctaButton("Anwendung vertiefen", `${SITE_URL_ABSOLUTE}${topPath}`)}
    <p style="margin:0;font-size:14px;line-height:1.65;color:#555;">
      Nächste Woche: die drei häufigsten Datenschutz-Fallstricke – und wie Sie sie umgehen, ohne einen Anwalt einzuschalten.
    </p>
  `;
  const html = shell(body, `Ihr Startpunkt: ${topTitle}`);
  const text = `${greet(payload)}\n\nIm Ergebnis Ihres Potenzial-Checks stand ${topTitle} an erster Stelle.\n\nHäufigster Fehler: Teams starten mit dem Werkzeug statt mit dem Prozess. Wählen Sie einen wiederkehrenden Ablauf, beschreiben Sie ihn in drei Sätzen, dann setzen Sie KI ein.\n\nDetails: ${SITE_URL_ABSOLUTE}${topPath}\n\nKommende Woche: Datenschutz-Fallstricke.`;
  return {
    subject: `Praxis-Impuls: ${topTitle} richtig starten`,
    html,
    text
  };
}

export function buildNurture2(payload: LeadPayload) {
  const body = `
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">${greet(payload)}</p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      der zweithäufigste Grund, warum KI-Projekte im Mittelstand nach zwei Monaten wieder versanden, ist nicht die Technik – sondern die Frage: „Dürfen wir das überhaupt?"
    </p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      Drei Regeln, die wir jedem unserer Kunden mitgeben:
    </p>
    <ol style="margin:0 0 12px 20px;padding:0;font-size:15px;line-height:1.7;">
      <li>Nutzen Sie ausschließlich Business-Konten (ChatGPT Team/Enterprise, Claude for Work, Microsoft Copilot mit DVV). Consumer-Konten sind für Unternehmensdaten tabu.</li>
      <li>Definieren Sie in einem Ein-Seiten-Dokument, welche Daten in KI-Systeme dürfen (öffentliche Marketinginhalte: ja; Personaldaten: nein; Kundendaten: nur mit interner Freigabe).</li>
      <li>AI-Act-Relevanz prüfen, wenn KI in Auswahl-, Bewertungs- oder Überwachungsprozessen zum Einsatz kommt. Für Textarbeit und interne Recherche gilt in der Regel die niedrige Risikoklasse.</li>
    </ol>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      Zu Ihrem Profil haben wir bereits eingeordnet: <em>${escape(payload.result.complianceNote)}</em>
    </p>
    ${ctaButton("Konformität im Gespräch klären", CALENDLY_URL)}
    <p style="margin:0;font-size:14px;line-height:1.65;color:#555;">
      In der letzten Praxis-Mail geht es um ein Muster, das Sie in jedem KI-Rollout sehen werden: Warum die ersten drei Wochen entscheidend sind.
    </p>
  `;
  const html = shell(body, "Datenschutz und AI Act ohne Angst");
  const text = `${greet(payload)}\n\nDrei Regeln für den KI-Einsatz im Unternehmen:\n1. Nur Business-Konten mit DVV.\n2. Ein-Seiten-Dokument, was in KI-Systeme darf.\n3. AI-Act-Relevanz prüfen bei Auswahl-/Bewertungs-Prozessen.\n\nZu Ihrem Profil: ${payload.result.complianceNote}\n\nGespräch: ${CALENDLY_URL}`;
  return {
    subject: "Drei Datenschutz-Regeln für Ihre KI-Einführung",
    html,
    text
  };
}

export function buildNurture3(payload: LeadPayload) {
  const body = `
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">${greet(payload)}</p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      letzter Praxis-Impuls: das <strong>Drei-Wochen-Muster</strong>. In fast jedem KI-Rollout, den wir begleitet haben, entscheiden die ersten drei Wochen darüber, ob KI sich im Alltag verankert – oder wieder verschwindet.
    </p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      Woche 1: Ein einziger Prozess, drei Mitarbeitende, tägliche Anwendung. Woche 2: Beobachten, wo sie feststecken – und Prompts als Team-Vorlage anlegen. Woche 3: Ergebnisse im Team zeigen, damit Nachbarabteilungen den Nutzen sehen und nachziehen wollen.
    </p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      Ihr Ergebnis empfiehlt: <strong>${escape(payload.result.nextStep)}</strong>
    </p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;">
      Wenn Sie diesen ersten Schritt begleitet gehen möchten – wir haben bewusst kompakte Formate dafür.
    </p>
    ${ctaButton(payload.wantsCall ? "Strategiegespräch buchen" : "Kostenloses Erstgespräch vereinbaren", CALENDLY_URL)}
    <p style="margin:0;font-size:14px;line-height:1.65;color:#555;">
      Vielen Dank, dass Sie den KI-Potenzial-Check gemacht haben. Sie erhalten von uns keine weitere automatische Nachricht. Auf Wiederhören – gern persönlich.
    </p>
  `;
  const html = shell(body, "Das Drei-Wochen-Muster für Ihren KI-Start");
  const text = `${greet(payload)}\n\nDas Drei-Wochen-Muster:\nWoche 1 – Ein Prozess, drei Personen, täglich.\nWoche 2 – Prompts als Team-Vorlage.\nWoche 3 – Ergebnisse zeigen, Nachbarabteilungen nachziehen lassen.\n\nEmpfehlung aus Ihrem Ergebnis: ${payload.result.nextStep}\n\n${CALENDLY_URL}`;
  return {
    subject: "Das Drei-Wochen-Muster für Ihren KI-Start",
    html,
    text
  };
}
