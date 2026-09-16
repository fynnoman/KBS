// Domain types for the KBS Automatisierungs-Plattform.
// Content lives in problems.ts, automations.ts, integrations.ts, softwares.ts.
// Everything is authored in strict factual language: if a fact is unverified,
// use verificationStatus / dataStatus fields instead of asserting it.

export type VerificationStatus =
  | "bestaetigt"
  | "wahrscheinlich"
  | "pruefung_erforderlich";

export type AutomationLevel =
  | "niedrig"
  | "teilweise"
  | "hoch"
  | "sehr_hoch";

export type HumanControl =
  | "voll_automatisierbar"
  | "freigabe_empfohlen"
  | "mensch_erforderlich";

export type SyncDirection = "einseitig" | "bidirektional";

export type IntegrationStatus =
  | "direkte_integration"
  | "api_integration"
  | "individuelle_integration"
  | "eingeschraenkt"
  | "pruefung_erforderlich";

export type Technology =
  | "llm"
  | "rag"
  | "ocr"
  | "api"
  | "webhook"
  | "middleware"
  | "rpa"
  | "workflow_automation"
  | "sprach_ki"
  | "dokumentenanalyse"
  | "lokale_ki"
  | "datenbank_sync"
  | "regelbasiert"
  | "individuelle_software";

export type ProblemCategory =
  | "kommunikation"
  | "vertrieb"
  | "buchhaltung"
  | "backoffice"
  | "hr"
  | "handwerk_bau"
  | "kundenservice"
  | "it_datenpflege";

export type AutomationCategory = ProblemCategory;

export type SoftwareCategory =
  | "crm"
  | "erp"
  | "buchhaltung"
  | "mail"
  | "office"
  | "kommunikation"
  | "shop"
  | "branche_handwerk"
  | "branche_bau"
  | "ticketing"
  | "workflow";

export interface WorkflowStep {
  title: string;
  detail?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Problem {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  category: ProblemCategory;
  hero: {
    h1: string;
    sub: string;
  };
  problemStatement: string;
  symptoms: string[];
  causes: string[];
  risks: string[];
  solutionsIntro: string;
  technologies: Technology[];
  beforeWorkflow: WorkflowStep[];
  afterWorkflow: WorkflowStep[];
  keepExisting: string;
  worthWhen: string[];
  costsNote: string;
  faq: FaqItem[];
  // Cross linking (slugs)
  relatedAutomationSlugs: string[];
  relatedIntegrationSlugs: string[];
  // Prefills the lead form when opened from this page.
  leadPrefill: {
    process: string;
    context: string;
  };
}

export interface Automation {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  category: AutomationCategory;
  hero: {
    h1: string;
    sub: string;
  };
  description: string;
  automationLevel: AutomationLevel;
  humanControl: HumanControl;
  technologies: Technology[];
  workflow: WorkflowStep[];
  prerequisites: string[];
  risks: string[];
  typicalIntegrations: string[]; // free text names (e.g. "Outlook", "HubSpot")
  economicNote: string; // careful, no invented savings
  recommendation: string;
  dataStatus: VerificationStatus;
  lastChecked: string; // ISO date
  faq: FaqItem[];
  relatedProblemSlugs: string[];
  relatedIntegrationSlugs: string[];
  leadPrefill: {
    process: string;
    context: string;
  };
}

export interface SoftwareApiInfo {
  apiAvailable: VerificationStatus;
  apiType?: string; // e.g. "REST", "SOAP", "GraphQL", "unklar"
  webhooks: VerificationStatus;
  authentication?: string; // e.g. "OAuth 2.0", "API-Key", "unklar"
  documentationUrl?: string;
}

export interface Software {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  category: SoftwareCategory;
  vendor: string;
  website?: string;
  description: string;
  typicalUseCases: string[];
  api: SoftwareApiInfo;
  verificationStatus: VerificationStatus;
  lastChecked: string;
  faq: FaqItem[];
  relatedIntegrationSlugs: string[];
  relatedAutomationSlugs: string[];
}

export interface TransferableDataItem {
  name: string;
  status: VerificationStatus;
}

export interface Integration {
  slug: string; // e.g. "datev-hubspot"
  systemA: string; // display name, e.g. "DATEV"
  systemB: string; // display name, e.g. "HubSpot"
  systemASlug?: string; // Software.slug (optional link)
  systemBSlug?: string; // Software.slug (optional link)
  seoTitle: string;
  seoDescription: string;
  status: IntegrationStatus;
  integrationMethod: string[]; // e.g. ["REST-API", "Middleware", "Webhook"]
  syncDirection: SyncDirection;
  realtimePossible: VerificationStatus;
  transferableData: TransferableDataItem[];
  workflow: WorkflowStep[];
  typicalUseCases: string[];
  fallbackWithoutApi: string[];
  limitations: string[];
  verificationStatus: VerificationStatus;
  lastChecked: string;
  faq: FaqItem[];
  relatedProblemSlugs: string[];
  relatedAutomationSlugs: string[];
  leadPrefill: {
    systemA: string;
    systemB: string;
    process: string;
    context: string;
  };
}

// Human-readable labels for enum types. Kept in one place so templates
// never hard-code translations.
export const CATEGORY_LABEL: Record<ProblemCategory, string> = {
  kommunikation: "Kommunikation",
  vertrieb: "Vertrieb",
  buchhaltung: "Buchhaltung",
  backoffice: "Backoffice",
  hr: "HR & Personal",
  handwerk_bau: "Handwerk & Bau",
  kundenservice: "Kundenservice",
  it_datenpflege: "IT & Datenpflege"
};

export const SOFTWARE_CATEGORY_LABEL: Record<SoftwareCategory, string> = {
  crm: "CRM",
  erp: "ERP",
  buchhaltung: "Buchhaltung",
  mail: "E-Mail",
  office: "Office & Kollaboration",
  kommunikation: "Kommunikation",
  shop: "Shop & E-Commerce",
  branche_handwerk: "Handwerk-Branchensoftware",
  branche_bau: "Bau-Branchensoftware",
  ticketing: "Ticket- & Service-Desk",
  workflow: "Workflow-/Automation-Tools"
};

export const TECHNOLOGY_LABEL: Record<Technology, string> = {
  llm: "LLM / KI-Sprachmodell",
  rag: "RAG (Retrieval-Augmented Generation)",
  ocr: "OCR / Dokumenten-Erkennung",
  api: "API-Anbindung",
  webhook: "Webhooks",
  middleware: "Middleware / Integrations-Layer",
  rpa: "RPA (Robotic Process Automation)",
  workflow_automation: "Workflow-Automatisierung",
  sprach_ki: "Sprach-KI (Telefonie / Voice)",
  dokumentenanalyse: "Dokumenten-Analyse",
  lokale_ki: "Lokale KI / On-Premise",
  datenbank_sync: "Datenbank-Synchronisation",
  regelbasiert: "Regelbasierte Automatisierung",
  individuelle_software: "Individuelle Software"
};

export const AUTOMATION_LEVEL_LABEL: Record<AutomationLevel, string> = {
  niedrig: "Niedrig automatisierbar",
  teilweise: "Teilweise automatisierbar",
  hoch: "Hoch automatisierbar",
  sehr_hoch: "Sehr hoch automatisierbar"
};

export const HUMAN_CONTROL_LABEL: Record<HumanControl, string> = {
  voll_automatisierbar: "Voll automatisierbar",
  freigabe_empfohlen: "Freigabe empfohlen",
  mensch_erforderlich: "Mensch weiterhin erforderlich"
};

export const INTEGRATION_STATUS_LABEL: Record<IntegrationStatus, string> = {
  direkte_integration: "Direkte Integration vorhanden",
  api_integration: "API-Integration möglich",
  individuelle_integration: "Individuelle Integration erforderlich",
  eingeschraenkt: "Eingeschränkt möglich",
  pruefung_erforderlich: "Technische Prüfung erforderlich"
};

export const VERIFICATION_LABEL: Record<VerificationStatus, string> = {
  bestaetigt: "bestätigt",
  wahrscheinlich: "wahrscheinlich",
  pruefung_erforderlich: "Prüfung erforderlich"
};

export const SYNC_DIRECTION_LABEL: Record<SyncDirection, string> = {
  einseitig: "einseitig (A → B)",
  bidirektional: "bidirektional (A ↔ B)"
};
