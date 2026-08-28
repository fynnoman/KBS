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
  fachfunktion: "Assistenten für Fachabteilungen",
  automation: "Automatisierung & Kundenkontakt",
  governance: "Steuerung & Regelwerk"
};

export const MODULE_CATEGORY_INTRO: Record<ModuleCategory, string> = {
  infrastruktur:
    "Die Grundbausteine für KI im Unternehmen – zentraler Zugang, gemeinsame Vorlagen und der Zugriff auf Ihr Firmenwissen.",
  fachfunktion:
    "KI-Assistenten für einzelne Abteilungen mit spürbarem Effekt in wenigen Tagen.",
  automation:
    "Wiederkehrende Abläufe automatisch erledigen lassen – mit klaren Regeln und menschlicher Kontrolle an den richtigen Punkten.",
  governance:
    "Werkzeuge für Führung, Datenschutz-Beauftragte und den Betriebsrat – damit KI-Einsatz nachvollziehbar bleibt."
};

export const MODULES: SoftwareModule[] = [
  {
    slug: "ai-gateway",
    title: "Zentraler KI-Zugang",
    category: "infrastruktur",
    tagline: "Ein Zugang zu allen KI-Werkzeugen für Ihre Belegschaft",
    summary:
      "Ein einziger Zugangspunkt zu allen relevanten KI-Anbietern. Rollen, Rechte, Kostenkontrolle und lückenloses Nutzungs-Protokoll – funktioniert mit KI in der Cloud und mit KI auf Ihrem eigenen Server.",
    features: [
      "Zentrale Rechte- und Rollenverwaltung",
      "Kosten pro Team und Nutzer zuordnen",
      "Vollständiges Nutzungs-Protokoll für die Revision",
      "Cloud-KI und KI auf dem eigenen Server parallel nutzbar",
      "Einmal-Anmeldung über Ihr bestehendes Firmen-Verzeichnis"
    ],
    relatedCourse: "ki-anwender",
    image: "/module-images/ai-gateway.jpg"
  },
  {
    slug: "prompt-library",
    title: "KI-Vorlagen-Bibliothek",
    category: "infrastruktur",
    tagline: "Gemeinsame KI-Anweisungen für Ihr ganzes Team",
    summary:
      'Wiederverwendbare, versionierte KI-Anweisungen (auch „Prompts" genannt) – organisiert nach Rolle und Anwendungsfall. Champions pflegen zentral, das Team nutzt konsistent und immer auf aktuellem Stand.',
    features: [
      "Versionierte Anweisungen mit Änderungshistorie",
      "Rollen- und teamspezifische Ordner",
      "Freigabe-Ablauf für neue Anweisungen",
      "Nutzungsstatistik pro Anweisung",
      "Export in bestehende Werkzeug-Landschaften"
    ],
    relatedCourse: "prompt-engineering",
    image: "/module-images/prompt-library.jpg"
  },
  {
    slug: "corporate-knowledge",
    title: "Firmen-Wissens-Assistent",
    category: "infrastruktur",
    tagline: "Ein KI-Assistent, der Ihr komplettes Firmenwissen kennt",
    summary:
      'Antworten aus Handbüchern, Verträgen, Wikis, CRM- und Ablagesystemen – mit klaren Quellenangaben und ohne dass die KI zu firmenrelevanten Fakten „halluziniert".',
    features: [
      "Zugriff auf SharePoint, Confluence, Nextcloud, Cloud-Speicher",
      "Antworten mit klaren Quellenangaben",
      "Sensible Dokumente per Berechtigung geschützt",
      "Auf Wunsch komplett auf Ihrem eigenen Server",
      "Feedback der Nutzer verbessert die Antworten laufend"
    ],
    relatedCourse: "rag",
    image: "/module-images/corporate-knowledge.jpg"
  },
  {
    slug: "sales-assistant",
    title: "Vertriebs-Assistent",
    category: "fachfunktion",
    tagline: "Ihr Vertrieb erreicht mehr in derselben Zeit",
    summary:
      "Firmenrecherche, Angebotsentwürfe, Nachfass-Serien und Anbindung an Ihr CRM in einem Werkzeug. Der Assistent lernt Ihren Vertriebsstil – keine generischen Textbausteine.",
    features: [
      "Firmenrecherche per Firmenname oder Website",
      "Angebotsentwürfe aus Ihrer Preis- und Textlogik",
      "Personalisierte Nachfass-E-Mails auf Deutsch",
      "Anbindung an HubSpot, Salesforce, Pipedrive",
      "Auswertung mit Zeitgewinn pro Vertriebsmitarbeiter"
    ],
    relatedCourse: "vertrieb",
    image: "/module-images/sales-assistant.jpg"
  },
  {
    slug: "content-studio",
    title: "Marketing-Studio",
    category: "fachfunktion",
    tagline: "Texte, Bilder, SEO – im Look Ihrer Marke",
    summary:
      "Content-Produktion für Web, Newsletter und Social Media mit Ihrem hinterlegten Design. Bilder werden markenkonsistent erzeugt, Texte in der Sprache Ihrer Marke.",
    features: [
      "Ihre Design-Regeln als Grundeinstellung hinterlegt",
      "Bildgenerierung in Ihrer Marken-Farbwelt",
      "SEO-Recherche und Themen-Vorschläge",
      "Redaktionsplan mit Freigabe-Ablauf",
      "Direkte Veröffentlichung in gängige Redaktionssysteme"
    ],
    relatedCourse: "marketing",
    image: "/module-images/content-studio.jpg"
  },
  {
    slug: "invoice-ocr",
    title: "Beleg-Erfassung",
    category: "fachfunktion",
    tagline: "Rechnungen automatisch erfassen und an DATEV übergeben",
    summary:
      "Rechnungen und Belege werden erkannt, kontiert und in Ihre Buchhaltung übergeben. Ausreißer landen automatisch auf einem Prüf-Stapel für die Fachkraft.",
    features: [
      "Automatische Erkennung von Papierbelegen, PDFs und E-Mail-Anhängen",
      "Kontierungsvorschläge",
      "DATEV-Export und weitere Buchhaltungs-Schnittstellen",
      "Prüf-Stapel für Ausreißer und Sonderfälle",
      "Revisionssichere Ablage inkl. Nachweis-Protokoll"
    ],
    relatedCourse: "finanzen",
    image: "/module-images/invoice-ocr.jpg"
  },
  {
    slug: "hr-copilot",
    title: "Personal-Assistent",
    category: "fachfunktion",
    tagline: "KI für Personalarbeit – mit klaren Grenzen",
    summary:
      "Stellenanzeigen, Onboarding-Materialien, Recherche und Weiterbildungspläne – mit klar dokumentierten Grenzen dort, wo die EU-KI-Verordnung Hochrisiko-Anwendungen definiert.",
    features: [
      "Stellenausschreibungen im Ton Ihrer Arbeitgebermarke",
      "Onboarding-Anleitungen pro Rolle und Standort",
      "Analyse fehlender Fähigkeiten für Weiterbildungspläne",
      "Klare Trennung erlaubter Nutzung und Hochrisiko",
      "Betriebsrats-freundliche Nutzungsdokumentation"
    ],
    relatedCourse: "hr",
    image: "/module-images/hr-copilot.jpg"
  },
  {
    slug: "support-triage",
    title: "Support-Sortierung",
    category: "automation",
    tagline: "Kundenanfragen sortieren und Antwortentwürfe erstellen",
    summary:
      "Eingehende Anfragen werden nach Art und Dringlichkeit sortiert und mit einem Antwortentwurf versehen. Der Mensch entscheidet – aber schneller und mit besseren Vorlagen.",
    features: [
      "Sortierung nach Anfragentyp und Dringlichkeit",
      "Antwortentwürfe aus Ihrer Wissensdatenbank",
      "Anbindung an Zendesk, Freshdesk, Outlook",
      "Eskalationsregeln für kritische Fälle",
      "Auswertung und Bericht zu Bearbeitungszeiten"
    ],
    relatedCourse: "kundenservice",
    image: "/module-images/support-triage.jpg"
  },
  {
    slug: "voice-reception",
    title: "KI-Telefonannahme",
    category: "automation",
    tagline: "Anrufe automatisch entgegennehmen – in natürlichem Deutsch",
    summary:
      "Automatische Erstannahme, Anrufer-Sortierung und Terminvereinbarung. Entlastet Assistenzteams messbar – mit Sprachqualität, die Anrufende nicht als Bot erkennen.",
    features: [
      "Natürliche deutsche Stimme mit geringer Reaktionszeit",
      "Terminvereinbarung mit Kalender-Anbindung",
      "Saubere Übergabe an menschliche Mitarbeiter",
      "Anrufer-Historie und Zusammenfassung mitgeliefert",
      "Nutzungs- und Zufriedenheits-Berichte"
    ],
    relatedCourse: "kundenservice",
    image: "/module-images/voice-reception.jpg"
  },
  {
    slug: "compliance-register",
    title: "KI-Register",
    category: "governance",
    tagline: "Übersicht aller KI-Anwendungen in Ihrem Unternehmen",
    summary:
      "Alle KI-Anwendungen im Haus mit Risiko-Einstufung, Verantwortlichen, Dokumenten und Prüfterminen. Bereit für interne Kontrollen und externe Nachweise.",
    features: [
      "Risiko-Klassen nach EU-KI-Verordnung automatisch vorgeschlagen",
      "Zuordnung von Verantwortlichen und Freigebern",
      "Dokumentenablage mit Versionierung",
      "Prüftermine und Erinnerungen",
      "Export für interne Prüfer und Aufsichtsbehörden"
    ],
    relatedCourse: "ai-act",
    image: "/module-images/compliance-register.jpg"
  },
  {
    slug: "policy-templates",
    title: "Regelwerk-Baukasten",
    category: "governance",
    tagline: "Nutzungsrichtlinien und Betriebsvereinbarungen",
    summary:
      "Vorlagen für interne KI-Nutzungsrichtlinien und Betriebsvereinbarungen – anpassbar an Branche, Standort und Konzernstruktur, geprüft auf aktuellen Stand.",
    features: [
      "Muster für Nutzungsrichtlinien nach Abteilung",
      "Textbausteine für Betriebsvereinbarungen, mit Kommentaren",
      "Branchenspezifische Anpassungen",
      "Änderungshistorie und Rechtsstands-Datum",
      "Übertragbar auf Konzernstrukturen"
    ],
    relatedCourse: "betriebsvereinbarung",
    image: "/module-images/policy-templates.jpg"
  },
  {
    slug: "usage-analytics",
    title: "KI-Auswertung",
    category: "governance",
    tagline: "KI-Nutzung im Unternehmen messbar machen",
    summary:
      "Wo wird KI wie viel genutzt, was kostet es, welche Abteilung erzielt welchen Effekt. Datenbasis für Investitions-Entscheidungen der Führung.",
    features: [
      "Nutzungs-Übersichten pro Abteilung und Nutzer",
      "Kostenverteilung und Budgetalarme",
      "Effekt- und Zeitgewinn-Messung",
      "Adoption-Kurven für Rollout-Planung",
      "Führungs-Berichte auf Knopfdruck"
    ],
    relatedCourse: "strategie",
    image: "/module-images/usage-analytics.jpg"
  }
];
