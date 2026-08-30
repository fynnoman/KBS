export type ModuleCategory =
  | "infrastruktur"
  | "fachfunktion"
  | "automation"
  | "governance";

export type ModulePriceTier = {
  label: string;
  price: number;
  unit?: "einmalig" | "pro Monat" | "pro Woche" | "pro Tag";
  note?: string;
};

export type ModulePricing = {
  /** Wiederverwendbares Baustein-Bundle (Einrichtung + Lizenz pro Monat). */
  bundle?: { setup: number; monthly: number };
  /** Zusätzliche Custom-Tiers, z. B. Ausbaustufen für RAG oder Voice-Agent. */
  tiers?: ModulePriceTier[];
  /** Optionaler Preishinweis. */
  note?: string;
};

export type SoftwareModule = {
  slug: string;
  title: string;
  category: ModuleCategory;
  tagline: string;
  summary: string;
  features: string[];
  relatedCourse?: string;
  image: string;
  pricing?: ModulePricing;
};

export const MODULE_CATEGORY_LABEL: Record<ModuleCategory, string> = {
  infrastruktur: "Basis-Infrastruktur",
  fachfunktion: "Assistenten für Fachabteilungen",
  automation: "Automatisierung & Kundenkontakt",
  governance: "Steuerung & Regelwerk"
};

export const MODULE_CATEGORY_INTRO: Record<ModuleCategory, string> = {
  infrastruktur:
    "Die Grundbausteine für KI im Unternehmen, zentraler Zugang, gemeinsame Vorlagen und der Zugriff auf Ihr Firmenwissen.",
  fachfunktion:
    "KI-Assistenten für einzelne Abteilungen mit spürbarem Effekt in wenigen Tagen.",
  automation:
    "Wiederkehrende Abläufe automatisch erledigen lassen, mit klaren Regeln und menschlicher Kontrolle an den richtigen Punkten.",
  governance:
    "Werkzeuge für Führung, Datenschutz-Beauftragte und den Betriebsrat, damit KI-Einsatz nachvollziehbar bleibt."
};

const INFRA_BUNDLE = { setup: 2450, monthly: 145 };
const FACH_BUNDLE = { setup: 3450, monthly: 195 };
const AUTO_GOV_BUNDLE = { setup: 2950, monthly: 170 };

export const MODULES: SoftwareModule[] = [
  {
    slug: "ai-gateway",
    title: "Zentraler KI-Zugang",
    category: "infrastruktur",
    tagline: "Ein Zugang zu allen KI-Werkzeugen für Ihre Belegschaft",
    summary:
      "Ein einziger Zugangspunkt zu allen relevanten KI-Anbietern. Rollen, Rechte, Kostenkontrolle und lückenloses Nutzungs-Protokoll, funktioniert mit KI in der Cloud und mit KI auf Ihrem eigenen Server.",
    features: [
      "Zentrale Rechte- und Rollenverwaltung",
      "Kosten pro Team und Nutzer zuordnen",
      "Vollständiges Nutzungs-Protokoll für die Revision",
      "Cloud-KI und KI auf dem eigenen Server parallel nutzbar",
      "Einmal-Anmeldung über Ihr bestehendes Firmen-Verzeichnis"
    ],
    relatedCourse: "ki-anwender",
    image: "/module-images/ai-gateway.jpg",
    pricing: { bundle: INFRA_BUNDLE }
  },
  {
    slug: "prompt-library",
    title: "KI-Vorlagen-Bibliothek",
    category: "infrastruktur",
    tagline: "Gemeinsame KI-Anweisungen für Ihr ganzes Team",
    summary:
      'Wiederverwendbare, versionierte KI-Anweisungen (auch „Prompts" genannt), organisiert nach Rolle und Anwendungsfall. Champions pflegen zentral, das Team nutzt konsistent und immer auf aktuellem Stand.',
    features: [
      "Versionierte Anweisungen mit Änderungshistorie",
      "Rollen- und teamspezifische Ordner",
      "Freigabe-Ablauf für neue Anweisungen",
      "Nutzungsstatistik pro Anweisung",
      "Export in bestehende Werkzeug-Landschaften"
    ],
    relatedCourse: "prompt-engineering",
    image: "/module-images/prompt-library.jpg",
    pricing: { bundle: INFRA_BUNDLE }
  },
  {
    slug: "corporate-knowledge",
    title: "Firmen-Wissens-Assistent",
    category: "infrastruktur",
    tagline: "Ein KI-Assistent, der Ihr komplettes Firmenwissen kennt",
    summary:
      'Antworten aus Handbüchern, Verträgen, Wikis, CRM- und Ablagesystemen, mit klaren Quellenangaben und ohne dass die KI zu firmenrelevanten Fakten „halluziniert".',
    features: [
      "Zugriff auf SharePoint, Confluence, Nextcloud, Cloud-Speicher",
      "Antworten mit klaren Quellenangaben",
      "Sensible Dokumente per Berechtigung geschützt",
      "Auf Wunsch komplett auf Ihrem eigenen Server",
      "Feedback der Nutzer verbessert die Antworten laufend"
    ],
    relatedCourse: "rag",
    image: "/module-images/corporate-knowledge.jpg",
    pricing: {
      bundle: INFRA_BUNDLE,
      tiers: [
        {
          label: "Kompakt · eine Abteilung, eine Wissensquelle",
          price: 4900,
          unit: "einmalig"
        },
        {
          label: "Standard · mehrere Quellen, Outlook/Teams-Integration",
          price: 9250,
          unit: "einmalig"
        },
        {
          label: "Enterprise · ERP, CRM, DMS mit Rechtekonzept",
          price: 14950,
          unit: "einmalig"
        }
      ],
      note: "Umsetzungspreis anstelle des Baustein-Bundles bei individueller Anbindung"
    }
  },
  {
    slug: "sales-assistant",
    title: "Vertriebs-Assistent",
    category: "fachfunktion",
    tagline: "Ihr Vertrieb erreicht mehr in derselben Zeit",
    summary:
      "Firmenrecherche, Angebotsentwürfe, Nachfass-Serien und Anbindung an Ihr CRM in einem Werkzeug. Der Assistent lernt Ihren Vertriebsstil, keine generischen Textbausteine.",
    features: [
      "Firmenrecherche per Firmenname oder Website",
      "Angebotsentwürfe aus Ihrer Preis- und Textlogik",
      "Personalisierte Nachfass-E-Mails auf Deutsch",
      "Anbindung an HubSpot, Salesforce, Pipedrive",
      "Auswertung mit Zeitgewinn pro Vertriebsmitarbeiter"
    ],
    relatedCourse: "vertrieb",
    image: "/module-images/sales-assistant.jpg",
    pricing: { bundle: FACH_BUNDLE }
  },
  {
    slug: "content-studio",
    title: "Marketing-Studio",
    category: "fachfunktion",
    tagline: "Texte, Bilder, SEO, im Look Ihrer Marke",
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
    image: "/module-images/content-studio.jpg",
    pricing: { bundle: FACH_BUNDLE }
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
    image: "/module-images/invoice-ocr.jpg",
    pricing: { bundle: FACH_BUNDLE }
  },
  {
    slug: "hr-copilot",
    title: "Personal-Assistent",
    category: "fachfunktion",
    tagline: "KI für Personalarbeit, mit klaren Grenzen",
    summary:
      "Stellenanzeigen, Onboarding-Materialien, Recherche und Weiterbildungspläne, mit klar dokumentierten Grenzen dort, wo die EU-KI-Verordnung Hochrisiko-Anwendungen definiert.",
    features: [
      "Stellenausschreibungen im Ton Ihrer Arbeitgebermarke",
      "Onboarding-Anleitungen pro Rolle und Standort",
      "Analyse fehlender Fähigkeiten für Weiterbildungspläne",
      "Klare Trennung erlaubter Nutzung und Hochrisiko",
      "Betriebsrats-freundliche Nutzungsdokumentation"
    ],
    relatedCourse: "hr",
    image: "/module-images/hr-copilot.jpg",
    pricing: { bundle: FACH_BUNDLE }
  },
  {
    slug: "support-triage",
    title: "Support-Sortierung",
    category: "automation",
    tagline: "Kundenanfragen sortieren und Antwortentwürfe erstellen",
    summary:
      "Eingehende Anfragen werden nach Art und Dringlichkeit sortiert und mit einem Antwortentwurf versehen. Der Mensch entscheidet, aber schneller und mit besseren Vorlagen.",
    features: [
      "Sortierung nach Anfragentyp und Dringlichkeit",
      "Antwortentwürfe aus Ihrer Wissensdatenbank",
      "Anbindung an Zendesk, Freshdesk, Outlook",
      "Eskalationsregeln für kritische Fälle",
      "Auswertung und Bericht zu Bearbeitungszeiten"
    ],
    relatedCourse: "kundenservice",
    image: "/module-images/support-triage.jpg",
    pricing: { bundle: AUTO_GOV_BUNDLE }
  },
  {
    slug: "voice-reception",
    title: "KI-Telefonannahme",
    category: "automation",
    tagline: "Anrufe automatisch entgegennehmen, in natürlichem Deutsch",
    summary:
      "Automatische Erstannahme, Anrufer-Sortierung und Terminvereinbarung. Entlastet Assistenzteams messbar, mit Sprachqualität, die Anrufende nicht als Bot erkennen.",
    features: [
      "Natürliche deutsche Stimme mit geringer Reaktionszeit",
      "Terminvereinbarung mit Kalender-Anbindung",
      "Saubere Übergabe an menschliche Mitarbeiter",
      "Anrufer-Historie und Zusammenfassung mitgeliefert",
      "Nutzungs- und Zufriedenheits-Berichte"
    ],
    relatedCourse: "kundenservice",
    image: "/module-images/voice-reception.jpg",
    pricing: {
      bundle: AUTO_GOV_BUNDLE,
      tiers: [
        {
          label: "Basis · Annahme, Triage, Weiterleitung",
          price: 3450,
          unit: "einmalig"
        },
        {
          label: "Ausbau · Terminvereinbarung, CRM-Anbindung",
          price: 7450,
          unit: "einmalig"
        },
        {
          label: "Laufender Betrieb",
          price: 195,
          unit: "pro Monat"
        }
      ],
      note: "Umsetzungspreis anstelle des Baustein-Bundles bei individueller Voice-Anbindung"
    }
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
    image: "/module-images/compliance-register.jpg",
    pricing: { bundle: AUTO_GOV_BUNDLE }
  },
  {
    slug: "policy-templates",
    title: "Regelwerk-Baukasten",
    category: "governance",
    tagline: "Nutzungsrichtlinien und Betriebsvereinbarungen",
    summary:
      "Vorlagen für interne KI-Nutzungsrichtlinien und Betriebsvereinbarungen, anpassbar an Branche, Standort und Konzernstruktur, geprüft auf aktuellen Stand.",
    features: [
      "Muster für Nutzungsrichtlinien nach Abteilung",
      "Textbausteine für Betriebsvereinbarungen, mit Kommentaren",
      "Branchenspezifische Anpassungen",
      "Änderungshistorie und Rechtsstands-Datum",
      "Übertragbar auf Konzernstrukturen"
    ],
    relatedCourse: "betriebsvereinbarung",
    image: "/module-images/policy-templates.jpg",
    pricing: { bundle: AUTO_GOV_BUNDLE }
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
    image: "/module-images/usage-analytics.jpg",
    pricing: { bundle: AUTO_GOV_BUNDLE }
  },

  // ── Neue Lösungen aus dem Preiskatalog ────────────────────────
  {
    slug: "lokale-ki-infrastruktur",
    title: "Lokale KI auf Ihrem Server",
    category: "infrastruktur",
    tagline: "On-Premise-Installation inkl. Hardware, Einweisung und Wartung",
    summary:
      "Damit Ihre Daten das Haus nicht verlassen: eigene KI auf Ihrer Hardware. Wir wählen Hardware und Modell nach Ihrer Aufgabe, installieren und übergeben wartungsfähig, von Mac Mini bis GPU-Server.",
    features: [
      "Hardware-Auswahl passend zur Nutzergröße",
      "Modellauswahl (Llama, Qwen, Mistral) nach Aufgabe",
      "Installation und Anbindung an Ihr Netz",
      "Einweisung Ihrer IT für die spätere Wartung",
      "Volle Datenhoheit, kein Cloud-Sync"
    ],
    relatedCourse: "lokale-ki",
    image: "/module-images/ai-gateway.jpg",
    pricing: {
      tiers: [
        {
          label: "Starter · Mac Mini M4 Pro, bis 25 Nutzer",
          price: 7950,
          unit: "einmalig"
        },
        {
          label: "Professional · dedizierter Server, bis 100 Nutzer",
          price: 14250,
          unit: "einmalig"
        },
        {
          label: "Enterprise · GPU-Server, bis 500 Nutzer",
          price: 22450,
          unit: "einmalig"
        }
      ],
      note: "Inkl. Hardware, Installation, Modellauswahl und Einweisung"
    }
  },
  {
    slug: "prozess-automation",
    title: "Prozess-Automatisierung",
    category: "automation",
    tagline: "Wiederkehrende Abläufe automatisch abarbeiten lassen",
    summary:
      "Wir bilden abgegrenzte, wiederkehrende Prozesse als KI-Ablauf ab, von der Angebotsvorbereitung über die Rechnungs-OCR bis zur E-Mail-Klassifizierung. Mit klaren Regeln und menschlicher Kontrolle an den richtigen Punkten.",
    features: [
      "Prozess-Aufnahme mit Ihrer Fachabteilung",
      "KI-Ablauf inkl. Prüfpunkten für den Menschen",
      "Anbindung an bestehende Systeme (Outlook, DATEV, ERP)",
      "Fehler-Behandlung und Monitoring",
      "Regelmäßige Nachjustierung nach Nutzung"
    ],
    relatedCourse: "kundenservice",
    image: "/module-images/support-triage.jpg",
    pricing: {
      tiers: [
        { label: "Ein Prozess", price: 4450, unit: "einmalig" },
        { label: "Drei Prozesse als Paket", price: 9750, unit: "einmalig" }
      ]
    }
  },
  {
    slug: "enterprise-rollout",
    title: "Enterprise-Rollout",
    category: "governance",
    tagline: "KI-Einführung über die ganze Belegschaft",
    summary:
      "Ausrollen von KI-Lösungen im gesamten Unternehmen: Nutzungsrichtlinien, Schulung der Belegschaft, Betriebsrats-Kommunikation und laufende Erfolgsmessung. Wir übergeben ein tragfähiges Betriebssystem für den weiteren Ausbau.",
    features: [
      "Rollout-Plan mit klaren Meilensteinen",
      "Erstellung interner Nutzungsrichtlinien",
      "Schulung der Belegschaft in Wellen",
      "Betriebsrats-Kommunikation und Dokumentation",
      "Erfolgsmessung und Nachjustierung"
    ],
    relatedCourse: "strategie",
    image: "/module-images/usage-analytics.jpg",
    pricing: {
      tiers: [
        { label: "Bis 100 Mitarbeiter", price: 6450, unit: "einmalig" },
        { label: "Bis 300 Mitarbeiter", price: 12250, unit: "einmalig" },
        { label: "Bis 500 Mitarbeiter", price: 17450, unit: "einmalig" }
      ]
    }
  },
  {
    slug: "rechtssicherheit-ki",
    title: "Rechtssicherheit für KI",
    category: "governance",
    tagline: "Datenschutz- und EU-KI-Verordnung-Prüfung mit Betriebsvereinbarung",
    summary:
      "Wir klassifizieren Ihre bestehenden und geplanten KI-Anwendungen nach der EU-KI-Verordnung, dokumentieren die notwendigen Nachweise und beraten bei Betriebsvereinbarungen mit dem Betriebsrat.",
    features: [
      "Bestandsaufnahme aller KI-Anwendungen im Haus",
      "Risiko-Klassifikation nach EU-KI-Verordnung",
      "Datenschutz-Prüfung nach DSGVO",
      "Muster-Betriebsvereinbarung, an Ihre Struktur angepasst",
      "Schulung Ihrer Verantwortlichen"
    ],
    relatedCourse: "ai-act",
    image: "/module-images/compliance-register.jpg",
    pricing: {
      tiers: [
        {
          label: "Prüfung & Risikoklassifizierung",
          price: 1700,
          unit: "einmalig"
        },
        {
          label: "Vollpaket inkl. Betriebsvereinbarung & Schulung",
          price: 3450,
          unit: "einmalig"
        }
      ]
    }
  },
  {
    slug: "custom-saas",
    title: "Custom SaaS & Integrationen",
    category: "automation",
    tagline: "Individuelle Software-Entwicklung nach Ihren Anforderungen",
    summary:
      "Wenn keine Standard-Lösung passt: Wir entwickeln individuelle SaaS-Bausteine und Integrationen zwischen Ihren Systemen. Nach Aufwand, im Rahmen eines festen Tagessatzes.",
    features: [
      "Anforderungs-Workshop mit Ihrer Fachabteilung",
      "Wöchentliche Fortschritts-Termine",
      "Übergabe inkl. Dokumentation und Quellcode",
      "Anbindung an bestehende Systeme (SAP, DATEV, Salesforce)",
      "Optionale Wartungs-Vereinbarung nach Go-Live"
    ],
    image: "/module-images/content-studio.jpg",
    pricing: {
      tiers: [
        { label: "Wochensatz", price: 700, unit: "pro Woche" }
      ],
      note: "Mindestumfang 2 Wochen"
    }
  },
  {
    slug: "managed-ki",
    title: "Managed KI Enterprise",
    category: "governance",
    tagline: "Fester Ansprechpartner für den laufenden KI-Betrieb",
    summary:
      "Nach dem Rollout: fester Ansprechpartner für Fehlerbehebung, Anpassungen, Updates der Vorlagen und laufende Optimierung, ohne dass Sie ein neues Angebot einholen müssen.",
    features: [
      "Fester Ansprechpartner mit fester Reaktionszeit",
      "Monatlicher Termin und Fortschritts-Bericht",
      "Vorlagen- und Regelwerks-Pflege",
      "Kleinere Anpassungen ohne Zusatzangebot",
      "Empfehlung neuer Werkzeuge und Ausbaustufen"
    ],
    relatedCourse: "strategie",
    image: "/module-images/usage-analytics.jpg",
    pricing: {
      tiers: [{ label: "Enterprise-Betreuung", price: 445, unit: "pro Monat" }],
      note: "Nur für Business-Kunden nach Rollout"
    }
  }
];
