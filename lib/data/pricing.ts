// lib/data/pricing.ts
// Stand: 28.08.2026
// Alle Preise netto zzgl. USt., außer bei Privatkunden (brutto, PAngV § 3).

export type PriceUnit =
  | "einmalig"
  | "pro Monat"
  | "pro Person"
  | "pro Termin"
  | "pro Tag";

export type TaxMode = "brutto" | "netto";
export type AudienceGroup = "kmu" | "business";

export type PriceSection =
  | "privatpersonen"
  | "selbststaendige"
  | "zertifikatskurse-offen"
  | "inhouse-kurse"
  | "projektphasen"
  | "lokale-ki"
  | "rag-assistent"
  | "automation-voice-rollout"
  | "software-bausteine"
  | "laufender-betrieb";

export interface PriceItem {
  id: string;
  section: PriceSection;
  name: string;
  /** Zusatzinfo direkt unter dem Namen, z. B. Kurs-Liste oder „bis 5 Nutzer" */
  detail?: string;
  duration?: string;
  price: number | null;
  unit: PriceUnit;
  tax: TaxMode;
  /** Fußnote, z. B. „Frühbucher..." oder „Mindestumfang 10 Tage" */
  note?: string;
  /** Für Bündel wie Einrichtung + Lizenz: zweite Preiskomponente */
  addOnPrice?: number;
  addOnUnit?: PriceUnit;
  addOnLabel?: string;
}

export const PRICING_SECTIONS: Record<
  PriceSection,
  {
    label: string;
    audience: AudienceGroup | "privat";
    intro: string;
    isLive?: boolean;
  }
> = {
  privatpersonen: {
    label: "Für Privatpersonen",
    audience: "privat",
    intro:
      "Persönliche KI-Hilfe für alle, die im Alltag sicherer mit ChatGPT und ähnlichen Werkzeugen werden möchten. Alle Preise brutto (PAngV § 3)."
  },
  selbststaendige: {
    label: "Für Selbstständige & kleine Teams",
    audience: "kmu",
    intro:
      "Analyse, Workshops, Einrichtung und laufende Sprechstunden – für Handwerksbetriebe, Kanzleien, Praxen und Agenturen. Alle Preise netto zzgl. USt."
  },
  "zertifikatskurse-offen": {
    label: "Offene Zertifikatskurse",
    audience: "kmu",
    intro:
      "Live-Kurse mit unbegrenzter Teilnehmerzahl – Präsenz oder Remote im Videocall, geleitet und mit Rückfragen. Alle Preise pro Person, netto zzgl. USt.",
    isLive: true
  },
  "inhouse-kurse": {
    label: "Inhouse-Kurse",
    audience: "business",
    intro:
      "Pauschalpreise bis 12 Teilnehmer, Ihre echten Themen im geschlossenen Firmenkreis. Ab dem 13. Teilnehmer 120 € pro Person. Remote ohne Aufschlag. Alle Preise netto zzgl. USt.",
    isLive: true
  },
  projektphasen: {
    label: "Projektphasen",
    audience: "business",
    intro:
      "Strukturierter Einstieg für Enterprise-Vorhaben – vom kostenlosen Erstgespräch bis zum Pilot in einer Abteilung. Alle Preise netto zzgl. USt."
  },
  "lokale-ki": {
    label: "Lokale KI, On-Premise",
    audience: "business",
    intro:
      "Damit Ihre Daten das Haus nicht verlassen: eigene KI auf Ihrer Hardware. Preise inkl. Hardware, Installation, Modellauswahl und Einweisung. Netto zzgl. USt."
  },
  "rag-assistent": {
    label: "Custom RAG-Assistent",
    audience: "business",
    intro:
      "KI-Assistent, der auf Ihrem Firmenwissen antwortet – von der einzelnen Abteilung bis zur konzernweiten Anbindung an ERP, CRM und Dokumentenmanagement. Netto zzgl. USt."
  },
  "automation-voice-rollout": {
    label: "Automation, Voice, Rollout & Compliance",
    audience: "business",
    intro:
      "Wiederkehrende Abläufe automatisieren, Anrufe entgegennehmen, KI über die ganze Belegschaft ausrollen und Rechtssicherheit herstellen. Netto zzgl. USt."
  },
  "software-bausteine": {
    label: "Software-Bausteine · Einrichtung + Lizenz",
    audience: "business",
    intro:
      "Wiederverwendbare Bausteine aus produktiver Beratungspraxis. Einmalige Einrichtung plus monatliche Lizenz. Netto zzgl. USt."
  },
  "laufender-betrieb": {
    label: "Laufender Betrieb",
    audience: "business",
    intro:
      "Monatliche Betreuung nach dem Rollout – fester Ansprechpartner, keine Wartungslücke. Netto zzgl. USt."
  }
};

export const PRICING: PriceItem[] = [
  // ── Für Privatpersonen ─────────────────────────────────────────
  {
    id: "erstgespraech",
    section: "privatpersonen",
    name: "Erstgespräch",
    duration: "15 Min",
    price: 0,
    unit: "pro Termin",
    tax: "brutto",
    note: "Kostenlos und unverbindlich"
  },
  {
    id: "ki-hilfe",
    section: "privatpersonen",
    name: "KI-Hilfe Einzeltermin",
    duration: "60–90 Min",
    price: 99,
    unit: "pro Termin",
    tax: "brutto"
  },
  {
    id: "ki-alltag-gruppe",
    section: "privatpersonen",
    name: 'Gruppen-Workshop „KI im Alltag"',
    duration: "2–3 Std",
    price: 49,
    unit: "pro Person",
    tax: "brutto"
  },

  // ── Für Selbstständige & kleine Teams ──────────────────────────
  {
    id: "ki-sprint",
    section: "selbststaendige",
    name: "KI-Sprint",
    detail: "Remote",
    duration: "60 Min",
    price: 149,
    unit: "pro Termin",
    tax: "netto"
  },
  {
    id: "ki-check",
    section: "selbststaendige",
    name: "KI-Check",
    detail: "Inkl. Ergebnisdokument",
    duration: "90–120 Min",
    price: 390,
    unit: "pro Termin",
    tax: "netto"
  },
  {
    id: "ki-workshop-team",
    section: "selbststaendige",
    name: "Team-Workshop",
    detail: "Bis 8 Teilnehmer",
    duration: "2–3 Std",
    price: 790,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "ki-workshop-ganztag",
    section: "selbststaendige",
    name: "Ganztags-Workshop",
    detail: "Bis 12 Teilnehmer",
    duration: "1 Tag",
    price: 1900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "ki-einrichtung-basis",
    section: "selbststaendige",
    name: "KI-Einrichtung Basis",
    detail: "1 Tool, bis 5 Nutzer",
    price: 1500,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "ki-einrichtung-standard",
    section: "selbststaendige",
    name: "KI-Einrichtung Standard",
    detail: "Team-Setup, Prompts, Wissensbasis",
    price: 2900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "ki-einrichtung-komplett",
    section: "selbststaendige",
    name: "KI-Einrichtung Komplett",
    detail: "Inkl. Custom GPTs, Richtlinien",
    price: 4500,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "ki-audit",
    section: "selbststaendige",
    name: "KI-Audit Bestandsnutzung",
    price: 1500,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "sprechstunde-basis",
    section: "selbststaendige",
    name: "KI-Sprechstunde Basis",
    price: 270,
    unit: "pro Monat",
    tax: "netto",
    note: "Monatlich kündbar"
  },
  {
    id: "sprechstunde-plus",
    section: "selbststaendige",
    name: "KI-Sprechstunde Plus",
    price: 450,
    unit: "pro Monat",
    tax: "netto",
    note: "Monatlich kündbar"
  },

  // ── Offene Zertifikatskurse ────────────────────────────────────
  {
    id: "cert-ai-user",
    section: "zertifikatskurse-offen",
    name: "KBS Certified AI User",
    duration: "1 Tag",
    price: 199,
    unit: "pro Person",
    tax: "netto"
  },
  {
    id: "cert-prompt",
    section: "zertifikatskurse-offen",
    name: "KBS Prompt Practitioner",
    duration: "1 Tag",
    price: 449,
    unit: "pro Person",
    tax: "netto"
  },
  {
    id: "cert-sales",
    section: "zertifikatskurse-offen",
    name: "KBS AI for Sales",
    duration: "1 Tag",
    price: 849,
    unit: "pro Person",
    tax: "netto"
  },

  // ── Inhouse-Kurse (Business, Pauschale bis 12 TN) ──────────────
  {
    id: "inhouse-halbtag",
    section: "inhouse-kurse",
    name: "Halbtag",
    detail: "KI-Strategie Führungskräfte · KI-Betriebsvereinbarung",
    duration: "Halbtag",
    price: 1400,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "inhouse-tag-grundkurs",
    section: "inhouse-kurse",
    name: "1 Tag Grundkurs",
    detail: "Zertifizierter KI-Anwender · Prompt Engineering",
    duration: "1 Tag",
    price: 2400,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "inhouse-tag-rolle",
    section: "inhouse-kurse",
    name: "1 Tag rollenspezifisch",
    detail: "Vertrieb · Marketing · Finanzen · HR · Kundenservice",
    duration: "1 Tag",
    price: 2900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "inhouse-2tage-governance",
    section: "inhouse-kurse",
    name: "2 Tage Governance",
    detail: "EU AI Act Verantwortliche/r",
    duration: "2 Tage",
    price: 6400,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "inhouse-2tage-technisch",
    section: "inhouse-kurse",
    name: "2 Tage technisch",
    detail: "Lokale KI & On-Premise · RAG selber bauen",
    duration: "2 Tage",
    price: 6900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "inhouse-impuls",
    section: "inhouse-kurse",
    name: "Impulsvortrag",
    detail: "Führungskreis-Format",
    duration: "45–90 Min",
    price: 1900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "inhouse-multiplikatoren",
    section: "inhouse-kurse",
    name: "Multiplikatoren-Programm",
    detail: "Interne KI-Champions ausbilden, mit anschließender Begleitung",
    duration: "3 Tage + Begleitung",
    price: 8900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "inhouse-curriculum",
    section: "inhouse-kurse",
    name: "Curriculum",
    detail: "Mehrstufig, inkl. Sprechstunden",
    duration: "3 Monate",
    price: 14900,
    unit: "einmalig",
    tax: "netto"
  },

  // ── Projektphasen (Business) ───────────────────────────────────
  {
    id: "phase-discovery",
    section: "projektphasen",
    name: "Discovery-Call",
    duration: "30 Min",
    price: 0,
    unit: "pro Termin",
    tax: "netto",
    note: "Kostenlos und unverbindlich"
  },
  {
    id: "phase-analyse",
    section: "projektphasen",
    name: "Analyse & Konzept",
    detail: "Inkl. ROI-Schätzung",
    price: 4900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "phase-pilot",
    section: "projektphasen",
    name: "Pilot",
    detail: "Ein Anwendungsfall, eine Abteilung",
    price: 9800,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "audit-enterprise",
    section: "projektphasen",
    name: "KI-Audit Bestandsnutzung Enterprise",
    price: 4900,
    unit: "einmalig",
    tax: "netto"
  },

  // ── Lokale KI, On-Premise (Business) ───────────────────────────
  {
    id: "lokale-ki-starter",
    section: "lokale-ki",
    name: "Starter",
    detail: "Mac Mini M4 Pro, bis 25 Nutzer",
    price: 15900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "lokale-ki-professional",
    section: "lokale-ki",
    name: "Professional",
    detail: "Dedizierter Server, bis 100 Nutzer",
    price: 28500,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "lokale-ki-enterprise",
    section: "lokale-ki",
    name: "Enterprise",
    detail: "GPU-Server, bis 500 Nutzer",
    price: 44900,
    unit: "einmalig",
    tax: "netto"
  },

  // ── Custom RAG-Assistent (Business) ────────────────────────────
  {
    id: "rag-kompakt",
    section: "rag-assistent",
    name: "Kompakt",
    detail: "Eine Abteilung, eine Wissensquelle",
    price: 9800,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "rag-standard",
    section: "rag-assistent",
    name: "Standard",
    detail: "Mehrere Quellen, Outlook/Teams-Integration",
    price: 18500,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "rag-enterprise",
    section: "rag-assistent",
    name: "Enterprise",
    detail: "ERP-, CRM-, DMS-Anbindung, Rechtekonzept",
    price: 29900,
    unit: "einmalig",
    tax: "netto"
  },

  // ── Automation, Voice, Rollout, Compliance (Business) ──────────
  {
    id: "automation-1",
    section: "automation-voice-rollout",
    name: "Prozess-Automation, ein Prozess",
    price: 8900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "automation-3",
    section: "automation-voice-rollout",
    name: "Prozess-Automation, drei Prozesse",
    price: 19500,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "voice-basis",
    section: "automation-voice-rollout",
    name: "Voice-Agent Basis",
    detail: "Annahme, Triage, Weiterleitung",
    price: 6900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "voice-ausbau",
    section: "automation-voice-rollout",
    name: "Voice-Agent Ausbau",
    detail: "Terminvereinbarung, CRM-Anbindung",
    price: 14900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "voice-betrieb",
    section: "automation-voice-rollout",
    name: "Voice-Agent Betrieb",
    price: 390,
    unit: "pro Monat",
    tax: "netto"
  },
  {
    id: "rollout-100",
    section: "automation-voice-rollout",
    name: "Enterprise-Rollout bis 100 MA",
    price: 12900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "rollout-300",
    section: "automation-voice-rollout",
    name: "Enterprise-Rollout bis 300 MA",
    price: 24500,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "rollout-500",
    section: "automation-voice-rollout",
    name: "Enterprise-Rollout bis 500 MA",
    price: 34900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "dsgvo-check",
    section: "automation-voice-rollout",
    name: "DSGVO & EU AI Act",
    detail: "Prüfung und Risikoklassifizierung",
    price: 3400,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "dsgvo-vollpaket",
    section: "automation-voice-rollout",
    name: "DSGVO & EU AI Act Vollpaket",
    detail: "Inkl. Betriebsvereinbarung und Schulung",
    price: 6900,
    unit: "einmalig",
    tax: "netto"
  },
  {
    id: "custom-saas",
    section: "automation-voice-rollout",
    name: "Custom SaaS & Integrationen",
    detail: "Tagessatz",
    price: 1400,
    unit: "pro Tag",
    tax: "netto",
    note: "Mindestumfang 10 Tage"
  },

  // ── Software-Bausteine: Einrichtung + Lizenz (Business) ────────
  {
    id: "bausteine-basis",
    section: "software-bausteine",
    name: "Basis-Infrastruktur",
    detail: "AI Gateway · Prompt Library · Knowledge Assistant",
    price: 4900,
    unit: "einmalig",
    tax: "netto",
    addOnPrice: 290,
    addOnUnit: "pro Monat",
    addOnLabel: "Lizenz"
  },
  {
    id: "bausteine-fachfunktion",
    section: "software-bausteine",
    name: "Fachfunktions-Assistenten",
    detail: "Sales · Content Studio · Invoice OCR · HR Copilot",
    price: 6900,
    unit: "einmalig",
    tax: "netto",
    addOnPrice: 390,
    addOnUnit: "pro Monat",
    addOnLabel: "Lizenz"
  },
  {
    id: "bausteine-automation-governance",
    section: "software-bausteine",
    name: "Automation & Governance",
    detail:
      "Support Triage · Voice Reception · Compliance Register · Policy · Analytics",
    price: 5900,
    unit: "einmalig",
    tax: "netto",
    addOnPrice: 340,
    addOnUnit: "pro Monat",
    addOnLabel: "Lizenz"
  },

  // ── Laufender Betrieb (Business) ───────────────────────────────
  {
    id: "managed-enterprise",
    section: "laufender-betrieb",
    name: "Managed KI Enterprise",
    price: 890,
    unit: "pro Monat",
    tax: "netto",
    note: "Nur für Business-Kunden"
  }
];

export const PRICING_META = {
  currency: "EUR",
  validFrom: "2026-09-01",
  travelIncluded: "Anfahrt im Saarland inklusive, bundesweit zzgl. Reisekosten",
  payment: "Überweisung, Rechnung",
  earlyBirdWeeks: 4
} as const;
