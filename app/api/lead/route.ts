import type { NextRequest } from "next/server";
import { validateLead } from "@/app/api/lead/schema";
import {
  getResend,
  LEAD_NOTIFY_EMAIL,
  MAIL_FROM,
  MAIL_REPLY_TO,
  scheduledIso
} from "@/lib/mail/resend";
import { buildWelcomeEmail } from "@/lib/mail/templates/lead-welcome";
import { buildNotificationEmail } from "@/lib/mail/templates/lead-notification";
import {
  buildNurture1,
  buildNurture2,
  buildNurture3
} from "@/lib/mail/templates/nurture";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: "Ungültiger JSON-Body." }, { status: 400 });
  }

  const parsed = validateLead(raw);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  const payload = parsed.data;
  const resend = getResend();

  if (!resend) {
    console.warn(
      "[api/lead] RESEND_API_KEY not set. Skipping email send. Lead:",
      {
        email: payload.email,
        company: payload.company,
        source: payload.source,
        score: payload.result.score
      }
    );
    return Response.json({ ok: true, delivery: "logged" });
  }

  const welcome = buildWelcomeEmail(payload);
  const notification = buildNotificationEmail(payload);
  const nurture1 = buildNurture1(payload);
  const nurture2 = buildNurture2(payload);
  const nurture3 = buildNurture3(payload);

  const tasks: Array<Promise<unknown>> = [
    resend.emails.send({
      from: MAIL_FROM,
      to: payload.email,
      replyTo: MAIL_REPLY_TO,
      subject: welcome.subject,
      html: welcome.html,
      text: welcome.text,
      headers: {
        "X-KBS-Source": payload.source,
        "List-Unsubscribe": `<mailto:${MAIL_REPLY_TO}?subject=Unsubscribe>`
      }
    }),
    resend.emails.send({
      from: MAIL_FROM,
      to: LEAD_NOTIFY_EMAIL,
      replyTo: payload.email,
      subject: notification.subject,
      html: notification.html,
      text: notification.text
    }),
    resend.emails.send({
      from: MAIL_FROM,
      to: payload.email,
      replyTo: MAIL_REPLY_TO,
      subject: nurture1.subject,
      html: nurture1.html,
      text: nurture1.text,
      scheduledAt: scheduledIso(72),
      headers: {
        "X-KBS-Source": `${payload.source}:nurture-1`,
        "List-Unsubscribe": `<mailto:${MAIL_REPLY_TO}?subject=Unsubscribe>`
      }
    }),
    resend.emails.send({
      from: MAIL_FROM,
      to: payload.email,
      replyTo: MAIL_REPLY_TO,
      subject: nurture2.subject,
      html: nurture2.html,
      text: nurture2.text,
      scheduledAt: scheduledIso(168),
      headers: {
        "X-KBS-Source": `${payload.source}:nurture-2`,
        "List-Unsubscribe": `<mailto:${MAIL_REPLY_TO}?subject=Unsubscribe>`
      }
    }),
    resend.emails.send({
      from: MAIL_FROM,
      to: payload.email,
      replyTo: MAIL_REPLY_TO,
      subject: nurture3.subject,
      html: nurture3.html,
      text: nurture3.text,
      scheduledAt: scheduledIso(288),
      headers: {
        "X-KBS-Source": `${payload.source}:nurture-3`,
        "List-Unsubscribe": `<mailto:${MAIL_REPLY_TO}?subject=Unsubscribe>`
      }
    })
  ];

  const settled = await Promise.allSettled(tasks);
  const failed = settled.filter((s) => s.status === "rejected");
  if (failed.length > 0) {
    console.error("[api/lead] one or more sends failed", failed);
  }

  const primaryFailed = settled[0].status === "rejected";
  if (primaryFailed) {
    return Response.json(
      { error: "Willkommens-Mail konnte nicht zugestellt werden." },
      { status: 502 }
    );
  }

  return Response.json({
    ok: true,
    delivery: "sent",
    scheduled: settled
      .map((s, i) => (i >= 2 && s.status === "fulfilled" ? i : null))
      .filter((v): v is number => v !== null).length
  });
}
