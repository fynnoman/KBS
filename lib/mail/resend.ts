import { Resend } from "resend";

let cached: Resend | null = null;

export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!cached) cached = new Resend(key);
  return cached;
}

export const MAIL_FROM =
  process.env.MAIL_FROM ?? "KBS – KI-Beratung Saar <hallo@ki-beratung-saar.com>";

export const MAIL_REPLY_TO =
  process.env.MAIL_REPLY_TO ?? "info@ki-beratung-saar.com";

export const LEAD_NOTIFY_EMAIL =
  process.env.LEAD_NOTIFY_EMAIL ?? "info@ki-beratung-saar.com";

export const SITE_URL_ABSOLUTE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ki-beratung-saar.com";

export function scheduledIso(hoursFromNow: number): string {
  const now = new Date();
  now.setHours(now.getHours() + hoursFromNow);
  return now.toISOString();
}
