// lib/data/pricing.ts
// Stand: 28.08.2026 · Alle B2C-Preise BRUTTO (PAngV §3), alle B2B-Preise NETTO zzgl. USt.

export type PriceUnit = "einmalig" | "pro Monat" | "pro Person" | "pro Termin";
export type TaxMode = "brutto" | "netto";

export interface PriceItem {
  id: string;
  name: string;
  segment: "privat" | "selbststaendig" | "kmu" | "business" | "kurse";
  price: number | null;          // Fixpreis
  priceFrom?: number;            // Spanne von
  priceTo?: number;              // Spanne bis
  unit: PriceUnit;
  tax: TaxMode;
  duration?: string;
  maxParticipants?: number;
  minParticipants?: number;
  note?: string;
}

export const PRICING: PriceItem[] = [
  // ── Erstkontakt ────────────────────────────────────────────────
  { id: "erstgespraech", name: "Erstgespräch", segment: "privat",
    price: 0, unit: "pro Termin", tax: "brutto", duration: "5–15 Min",
    note: "Kostenlos und unverbindlich" },

  // ── Privatpersonen (BRUTTO) ────────────────────────────────────
  { id: "ki-hilfe", name: "KBS KI-Hilfe", segment: "privat",
    price: 99, unit: "pro Termin", tax: "brutto", duration: "60–90 Min",
    note: "Einzeltermin vor Ort oder per Videocall" },

  { id: "ki-alltag-gruppe", name: "Gruppen-Workshop „KI im Alltag“", segment: "privat",
    price: 49, unit: "pro Person", tax: "brutto", duration: "2–3 Std",
    minParticipants: 6, maxParticipants: 12,
    note: "Offener Kurs, feste Termine" },

  // ── Selbstständige & kleine Teams (NETTO) ──────────────────────
  { id: "ki-sprint", name: "KI-Sprint", segment: "selbststaendig",
    price: 149, unit: "pro Termin", tax: "netto", duration: "60 Min",
    note: "Einstiegsangebot, remote" },

  { id: "ki-check", name: "KBS KI-Check", segment: "selbststaendig",
    price: 390, unit: "pro Termin", tax: "netto", duration: "90–120 Min",
    note: "Inkl. schriftlichem Ergebnis mit 3–5 Anwendungsfällen" },

  { id: "ki-workshop-team", name: "KBS KI-Workshop (Team)", segment: "selbststaendig",
    price: 790, unit: "einmalig", tax: "netto", duration: "2–3 Std",
    maxParticipants: 8, note: "Inhouse, entspricht 99 € pro Person bei 8 TN" },

  { id: "ki-workshop-ganztag", name: "KBS KI-Workshop (Ganztag)", segment: "selbststaendig",
    price: 1900, unit: "einmalig", tax: "netto", duration: "1 Tag",
    maxParticipants: 12 },

  // ── Unternehmen bis 20 MA (NETTO) ──────────────────────────────
  { id: "ki-einrichtung", name: "KBS KI-Einrichtung", segment: "kmu",
    price: null, priceFrom: 1500, priceTo: 4500, unit: "einmalig", tax: "netto",
    duration: "2–8 Std", note: "Nach Umfang" },

  { id: "ki-audit", name: "KI-Audit Bestandsnutzung", segment: "kmu",
    price: 1500, unit: "einmalig", tax: "netto",
    note: "Türöffner für Implementierungsprojekte" },

  { id: "sprechstunde-basis", name: "KI-Sprechstunde Basis", segment: "kmu",
    price: 270, unit: "pro Monat", tax: "netto",
    note: "Monatlich kündbar, 1 Termin 60–90 Min + Erreichbarkeit" },

  { id: "sprechstunde-plus", name: "KI-Sprechstunde Plus", segment: "kmu",
    price: 450, unit: "pro Monat", tax: "netto", note: "Monatlich kündbar" },

  // ── KBS Business (NETTO) ───────────────────────────────────────
  { id: "compliance", name: "DSGVO- & EU-AI-Act-Compliance", segment: "business",
    price: null, priceFrom: 2500, priceTo: 5000, unit: "einmalig", tax: "netto" },

  { id: "voice-agent", name: "KI-Voice-Agent / Callbot", segment: "business",
    price: null, priceFrom: 4500, priceTo: 18000, unit: "einmalig", tax: "netto" },

  { id: "rag-assistent", name: "Custom RAG-Assistent", segment: "business",
    price: null, priceFrom: 7500, priceTo: 25000, unit: "einmalig", tax: "netto" },

  { id: "prozess-automation", name: "Prozess-Automation mit KI", segment: "business",
    price: null, priceFrom: 7500, priceTo: 22500, unit: "einmalig", tax: "netto" },

  { id: "lokale-ki", name: "Lokale KI (On-Premise)", segment: "business",
    price: null, priceFrom: 15000, priceTo: 45000, unit: "einmalig", tax: "netto",
    note: "Mac Mini oder dedizierter Server" },

  { id: "managed-ki", name: "Managed KI", segment: "business",
    price: 890, unit: "pro Monat", tax: "netto" },

  // ── Zertifikatskurse (Live-Gruppe, NETTO) ──────────────────────
  { id: "cert-ai-user", name: "KBS Certified AI User", segment: "kurse",
    price: 199, unit: "pro Person", tax: "netto", duration: "1 Tag",
    minParticipants: 6, maxParticipants: 12,
    note: "Frühbucher bis 4 Wochen vorher 199 €, danach 229 €" },

  { id: "cert-prompt", name: "KBS Prompt Practitioner", segment: "kurse",
    price: 449, unit: "pro Person", tax: "netto", duration: "1 Tag",
    minParticipants: 6, maxParticipants: 12 },

  { id: "cert-sales", name: "KBS AI for Sales", segment: "kurse",
    price: 849, unit: "pro Person", tax: "netto", duration: "1 Tag",
    minParticipants: 6, maxParticipants: 12 },
];

export const PRICING_META = {
  currency: "EUR",
  validFrom: "2026-09-01",
  travelIncluded: "Anfahrt im Saarland inklusive, bundesweit zzgl. Reisekosten",
  payment: "Überweisung, Rechnung",
  earlyBirdWeeks: 4,
} as const;
