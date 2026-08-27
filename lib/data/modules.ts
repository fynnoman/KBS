export type ModuleCategory =
  | "infrastruktur"
  | "fachfunktion"
  | "automation"
  | "governance";

export type SoftwareModule = {
  slug: string;
  title: string;
  category: ModuleCategory;
  tagline: string;
  summary: string;
  features: string[];
  relatedCourse?: string;
  image: string;
};

export const MODULE_CATEGORY_LABEL: Record<ModuleCategory, string> = {
  infrastruktur: "Basis-Infrastruktur",
  fachfunktion: "Fachfunktions-Assistenten",
  automation: "Automation & Support",
  governance: "Governance & Steuerung"
};

export const MODULE_CATEGORY_INTRO: Record<ModuleCategory, string> = {
  infrastruktur:
    "Die Bausteine, auf denen alles andere aufsetzt – zentraler Zugang, Prompt-Verwaltung, Wissensretrieval.",
  fachfunktion:
    "Direkt in die Fachabteilung integrierbare Assistenten mit spürbarem Effekt in wenigen Tagen.",
  automation:
    "Wiederkehrende, hoch-volumige Prozesse mit klaren Regeln und menschlicher Kontrolle an den richtigen Punkten.",
  governance:
    "Steuerungs- und Compliance-Werkzeuge für Führung, Compliance-Beauftragte und den Betriebsrat."
};

export const MODULES: SoftwareModule[] = [
  {
    slug: "ai-gateway",
    title: "KBS AI Gateway",
    category: "infrastruktur",
    tagline: "Zentraler LLM-Zugang für Ihre Belegschaft",
    summary:
      "Ein einzelner Zugangspunkt zu allen relevanten KI-Anbietern. Rollen, Rechte, Kostenkontrolle und lückenloses Audit-Log – kompatibel mit Cloud- und On-Premise-Modellen.",
    features: [
      "Zentrale Rechte- und Rollenverwaltung",
      "Kostenzuordnung pro Team und Nutzer",
      "Vollständiges Audit-Log für Revision",
      "Cloud- und On-Premise-Modelle parallel nutzbar",
      "Single Sign-On über bestehendes Directory"
    ],
    relatedCourse: "ki-anwender",
    image: "/module-images/ai-gateway.jpg"
  },
  {
    slug: "prompt-library",
    title: "KBS Prompt Library",
    category: "infrastruktur",
    tagline: "Kuratierte Prompt-Bibliothek für Ihr gesamtes Team",
    summary:
      "Wiederverwendbare, versionierte Prompts – organisiert nach Rolle und Anwendungsfall. Champions pflegen zentral, das Team nutzt konsistent und immer auf aktuellem Stand.",
    features: [
      "Versionierte Prompts mit Änderungshistorie",
      "Rollen- und teamspezifische Ordner",
      "Freigabe-Workflow für neue Prompts",
      "Nutzungsstatistik pro Prompt",
      "Export in bestehende Tool-Landschaften"
    ],
    relatedCourse: "prompt-engineering",
    image: "/module-images/prompt-library.jpg"
  },
  {
    slug: "corporate-knowledge",
    title: "KBS Corporate Knowledge Assistant",
    category: "infrastruktur",
    tagline: "RAG-Assistent auf Ihrem gesamten Firmenwissen",
    summary:
      "Antworten aus Handbüchern, Verträgen, Wikis, CRM- und Ablagesystemen – mit klaren Quellenangaben und ohne Halluzinationsrisiko auf firmenrelevante Fakten.",
    features: [
      "Retrieval über SharePoint, Confluence, Nextcloud, S3",
      "Antworten mit klaren Quellenangaben",
      "Sensible Dokumente per Berechtigungslogik geschützt",
      "Auf Wunsch vollständig on-premise",
      "Feedback-Loop zur laufenden Ergebnisverbesserung"
    ],
    relatedCourse: "rag",
    image: "/module-images/corporate-knowledge.jpg"
  },
  {
    slug: "sales-assistant",
    title: "KBS Sales Assistant",
    category: "fachfunktion",
    tagline: "Ihr Vertrieb als Multiplikator",
    summary:
      "Lead-Recherche, Angebotsentwürfe, Follow-up-Kaskaden und CRM-Anbindung in einem Werkzeug. Der Assistent lernt Ihren Vertriebsstil – keine generischen Textbausteine.",
    features: [
      "Account-Intelligence per Firmenname oder Website",
      "Angebotsentwürfe aus Ihrer Preis- und Textlogik",
      "Personalisierte Follow-up-Kaskaden auf Deutsch",
      "Integration in HubSpot, Salesforce, Pipedrive",
      "Reporting mit Zeitgewinn pro Vertriebsmitarbeiter"
    ],
    relatedCourse: "vertrieb",
    image: "/module-images/sales-assistant.jpg"
  },
  {
    slug: "content-studio",
    title: "KBS Content Studio",
    category: "fachfunktion",
    tagline: "Redaktion, Bildproduktion, SEO – markenkonform",
    summary:
      "Content-Produktion für Web, Newsletter und Social Media mit hinterlegtem Corporate Design. Bilder werden markenkonsistent generiert, Texte im hinterlegten Tone of Voice.",
    features: [
      "Corporate-Design-Regeln als Systemprompt hinterlegt",
      "Bildgenerierung in Ihrer Marken-Farbwelt",
      "SEO-Recherche und Cluster-Vorschläge",
      "Content-Kalender mit Freigabe-Workflow",
      "Direkte Publikation in gängige CMS-Systeme"
    ],
    relatedCourse: "marketing",
    image: "/module-images/content-studio.jpg"
  },
  {
    slug: "invoice-ocr",
    title: "KBS Invoice OCR",
    category: "fachfunktion",
    tagline: "Belegverarbeitung mit DATEV-Anbindung",
    summary:
      "Rechnungen und Belege werden erkannt, kontiert und in Ihre Buchhaltung übergeben. Ausreißer landen automatisch auf einem Prüf-Stapel für die Fachkraft.",
    features: [
      "OCR für Papierbelege, PDFs und E-Mail-Anhänge",
      "Automatische Kontierungsvorschläge",
      "DATEV-Export und weitere Fibu-Schnittstellen",
      "Prüf-Stapel für Ausreißer und Sonderfälle",
      "Revisionssichere Ablage inkl. Audit-Trail"
    ],
    relatedCourse: "finanzen",
    image: "/module-images/invoice-ocr.jpg"
  },
  {
    slug: "hr-copilot",
    title: "KBS HR Copilot",
    category: "fachfunktion",
    tagline: "HR-Assistent mit klaren AI-Act-Guardrails",
    summary:
      "Stellenanzeigen, Onboarding-Materialien, Skill-Mapping und Recherche – mit klar dokumentierten Grenzen dort, wo der EU AI Act Hochrisiko-Anwendungen definiert.",
    features: [
      "Stellenausschreibungen im Employer-Branding-Ton",
      "Onboarding-Guides pro Rolle und Standort",
      "Skill-Gap-Analyse für Weiterbildungspläne",
      "Klare Trennung erlaubter Nutzung und Hochrisiko",
      "Betriebsrats-freundliche Nutzungsdokumentation"
    ],
    relatedCourse: "hr",
    image: "/module-images/hr-copilot.jpg"
  },
  {
    slug: "support-triage",
    title: "KBS Support Triage",
    category: "automation",
    tagline: "Ticket-Triage und Antwortentwürfe",
    summary:
      "Eingehende Anfragen werden klassifiziert, priorisiert und mit einem Antwortentwurf versehen. Der Mensch entscheidet – aber schneller und mit besseren Vorlagen.",
    features: [
      "Klassifikation nach Anfragentyp und Priorität",
      "Antwortentwürfe aus Ihrer Wissensdatenbank",
      "Integration in Zendesk, Freshdesk, Outlook",
      "Eskalationsregeln für kritische Fälle",
      "SLA-Monitoring und Reporting"
    ],
    relatedCourse: "kundenservice",
    image: "/module-images/support-triage.jpg"
  },
  {
    slug: "voice-reception",
    title: "KBS Voice Reception",
    category: "automation",
    tagline: "KI-Telefonzentrale in natürlichem Deutsch",
    summary:
      "Automatisierte Erstannahme, Anrufer-Triage und Terminvereinbarung. Entlastet Assistenzteams messbar – mit Sprachqualität, die Anrufende nicht als Bot erkennen.",
    features: [
      "Natürliche deutsche Stimme mit geringer Latenz",
      "Terminvereinbarung mit Kalendersynchronisation",
      "Saubere Übergabe an menschliche Mitarbeiter",
      "Anrufer-Historie und Kontextübergabe",
      "Nutzungs- und Zufriedenheits-Reports"
    ],
    relatedCourse: "kundenservice",
    image: "/module-images/voice-reception.jpg"
  },
  {
    slug: "compliance-register",
    title: "KBS Compliance Register",
    category: "governance",
    tagline: "EU-AI-Act-Register für Ihr Unternehmen",
    summary:
      "Alle KI-Anwendungen im Haus mit Risikoklassifikation, Verantwortlichen, Dokumenten und Prüfständen. Bereit für interne Audits und externe Nachweise.",
    features: [
      "Risikoklassen nach EU AI Act automatisch vorgeschlagen",
      "Zuordnung von Verantwortlichen und Freigebern",
      "Dokumentenablage mit Versionierung",
      "Prüftermine und Erinnerungen",
      "Export für Auditoren und Aufsichtsbehörden"
    ],
    relatedCourse: "ai-act",
    image: "/module-images/compliance-register.jpg"
  },
  {
    slug: "policy-templates",
    title: "KBS Policy Baukasten",
    category: "governance",
    tagline: "Nutzungsrichtlinien und Betriebsvereinbarungen",
    summary:
      "Vorlagen für interne KI-Nutzungsrichtlinien und Betriebsvereinbarungen – anpassbar an Branche, Standort und Konzernstruktur, geprüft auf aktuellen Marktstand.",
    features: [
      "Muster für Nutzungsrichtlinien nach Abteilung",
      "Betriebsvereinbarungs-Textbausteine mit Kommentaren",
      "Branchenspezifische Anpassungen",
      "Änderungshistorie und Rechtsstands-Datum",
      "Übertragbar auf Konzernstrukturen"
    ],
    relatedCourse: "betriebsvereinbarung",
    image: "/module-images/policy-templates.jpg"
  },
  {
    slug: "usage-analytics",
    title: "KBS Usage Analytics",
    category: "governance",
    tagline: "KI-Nutzung im Unternehmen messbar machen",
    summary:
      "Wo wird KI wie viel genutzt, was kostet es, welche Abteilung erzielt welchen Effekt. Datenbasis für Investment-Entscheidungen der Führung.",
    features: [
      "Nutzungs-Dashboards pro Abteilung und Nutzer",
      "Kostenverteilung und Budgetalarme",
      "Effekt- und Zeitgewinn-Messung",
      "Adoption-Kurven für Rollout-Planung",
      "Board-Reports auf Knopfdruck"
    ],
    relatedCourse: "strategie",
    image: "/module-images/usage-analytics.jpg"
  }
];
