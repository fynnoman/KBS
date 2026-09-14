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
    : "softwareloesungen";

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[api/lead] RESEND_API_KEY not set");
    return NextResponse.json(
      { ok: false, error: "mail_not_configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `Neue Anfrage über ${source}: ${name}`;
  const textBody = [
    `Neue Anfrage über die KBS-Website (${source})`,
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    "",
    "Nachricht:",
    message
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Inter,Arial,sans-serif;color:#111;line-height:1.55;font-size:14px;max-width:640px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.14em;">
        Neue Anfrage · ${escapeHtml(source)}
      </p>
      <h1 style="margin:0 0 16px 0;font-size:20px;">Anfrage von ${escapeHtml(
        name
      )}</h1>
      <table style="border-collapse:collapse;margin:0 0 16px 0;">
        <tr>
          <td style="padding:4px 12px 4px 0;color:#666;">Name</td>
          <td style="padding:4px 0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:4px 12px 4px 0;color:#666;">E-Mail</td>
          <td style="padding:4px 0;"><a href="mailto:${escapeHtml(
            email
          )}">${escapeHtml(email)}</a></td>
        </tr>
      </table>
      <p style="margin:0 0 6px 0;color:#666;">Nachricht</p>
      <div style="white-space:pre-wrap;border-left:3px solid #35b810;padding:10px 14px;background:#f7faf6;border-radius:8px;">
        ${escapeHtml(message)}
      </div>
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
      console.error("[api/lead] Resend error", result.error);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (err) {
    console.error("[api/lead] unexpected error", err);
    return NextResponse.json(
      { ok: false, error: "unexpected" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "lead", method: "POST" });
}
