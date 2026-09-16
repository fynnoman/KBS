import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAIL_FROM =
  process.env.MAIL_FROM ??
  "KBS – KI-Beratung Saar <hallo@ki-beratung-saar.com>";
const LEAD_NOTIFY_EMAIL =
  process.env.LEAD_NOTIFY_EMAIL ?? "info@ki-beratung-saar.com";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  source?: unknown;
  company?: unknown;
  phone?: unknown;
  process?: unknown;
  systemA?: unknown;
  systemB?: unknown;
  systems?: unknown;
  volume?: unknown;
  context?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function escapeHtml(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function optionalString(v: unknown, max = 300): string | null {
  if (!isNonEmptyString(v)) return null;
  return v.trim().slice(0, max);
}

export async function POST(req: Request) {
  let payload: LeadPayload;
  try {
    payload = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  if (
    !isNonEmptyString(payload.name) ||
    !isNonEmptyString(payload.email) ||
    !isNonEmptyString(payload.message)
  ) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  const name = payload.name.trim().slice(0, 200);
  const email = payload.email.trim().slice(0, 200);
  const message = payload.message.trim().slice(0, 5000);
  const source = isNonEmptyString(payload.source)
    ? payload.source.trim().slice(0, 200)
    : "website";

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 }
    );
  }

  const company = optionalString(payload.company);
  const phone = optionalString(payload.phone);
  const processName = optionalString(payload.process);
  const systemA = optionalString(payload.systemA);
  const systemB = optionalString(payload.systemB);
  const systems = optionalString(payload.systems);
  const volume = optionalString(payload.volume);
  const context = optionalString(payload.context, 2000);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[api/lead] RESEND_API_KEY not set");
    return NextResponse.json(
      { ok: false, error: "mail_not_configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subjectContext =
    processName ??
    (systemA && systemB ? `${systemA} ↔ ${systemB}` : null) ??
    source;
  const subject = `Neue Anfrage: ${subjectContext} · ${name}`;

  const detailRows: { label: string; value: string }[] = [
    { label: "Name", value: name },
    { label: "E-Mail", value: email }
  ];
  if (company) detailRows.push({ label: "Unternehmen", value: company });
  if (phone) detailRows.push({ label: "Telefon", value: phone });
  if (processName) detailRows.push({ label: "Prozess", value: processName });
  if (systemA) detailRows.push({ label: "System A", value: systemA });
  if (systemB) detailRows.push({ label: "System B", value: systemB });
  if (systems) detailRows.push({ label: "Eingesetzte Software", value: systems });
  if (volume) detailRows.push({ label: "Volumen", value: volume });
  detailRows.push({ label: "Quelle", value: source });

  const textLines = [
    `Neue Anfrage über die KBS-Website (${source})`,
    "",
    ...detailRows.map((r) => `${r.label}: ${r.value}`),
    "",
    "Nachricht:",
    message
  ];
  if (context) {
    textLines.push("", "Zusatz-Kontext:", context);
  }
  const textBody = textLines.join("\n");

  const detailRowsHtml = detailRows
    .map(
      (r) => `
        <tr>
          <td style="padding:4px 12px 4px 0;color:#666;vertical-align:top;">${escapeHtml(
            r.label
          )}</td>
          <td style="padding:4px 0;">${
            r.label === "E-Mail"
              ? `<a href="mailto:${escapeHtml(r.value)}">${escapeHtml(r.value)}</a>`
              : escapeHtml(r.value)
          }</td>
        </tr>`
    )
    .join("");

  const htmlBody = `
    <div style="font-family:Inter,Arial,sans-serif;color:#111;line-height:1.55;font-size:14px;max-width:640px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.14em;">
        Neue Anfrage · ${escapeHtml(source)}
      </p>
      <h1 style="margin:0 0 16px 0;font-size:20px;">${escapeHtml(subjectContext)}</h1>
      <table style="border-collapse:collapse;margin:0 0 16px 0;">
        ${detailRowsHtml}
      </table>
      <p style="margin:0 0 6px 0;color:#666;">Nachricht</p>
      <div style="white-space:pre-wrap;border-left:3px solid #35b810;padding:10px 14px;background:#f7faf6;border-radius:8px;">
        ${escapeHtml(message)}
      </div>
      ${
        context
          ? `<p style="margin:16px 0 6px 0;color:#666;">Zusatz-Kontext</p>
             <div style="white-space:pre-wrap;padding:10px 14px;background:#f5f6f8;border-radius:8px;font-size:13px;color:#333;">
               ${escapeHtml(context)}
             </div>`
          : ""
      }
    </div>
  `.trim();

  try {
    const result = await resend.emails.send({
      from: MAIL_FROM,
      to: LEAD_NOTIFY_EMAIL,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
      headers: {
        "X-Entity-Ref-ID": `kbs-lead-${Date.now()}`
      }
    });

    if (result.error) {
      const err = result.error as {
        name?: string;
        message?: string;
        statusCode?: number;
      };
      console.error("[api/lead] Resend error", err);

      const isAuth =
        err.statusCode === 401 ||
        err.name === "validation_error" &&
          typeof err.message === "string" &&
          /api key|unauthorized/i.test(err.message);

      return NextResponse.json(
        {
          ok: false,
          error: isAuth ? "mail_auth_failed" : "send_failed",
          detail: {
            name: err.name ?? null,
            message: err.message ?? null,
            statusCode: err.statusCode ?? null
          }
        },
        { status: isAuth ? 401 : 502 }
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (err) {
    console.error("[api/lead] unexpected error", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { ok: false, error: "unexpected", detail: { message } },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "lead", method: "POST" });
}
