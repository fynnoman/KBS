import type { Integration } from "./types";

// 25 Schnittstellen-Datensätze. Konkrete API-Fakten werden über die
// verlinkten Software-Profile abgebildet, damit sich Änderungen an
// Anbieter-APIs an einer Stelle nachziehen lassen.

const CHECK = "2026-09-15";

export const INTEGRATIONS: Integration[] = [
  {
    slug: "datev-gmail",
    systemA: "DATEV",
    systemB: "Gmail",
    systemASlug: "datev",
    systemBSlug: "gmail",
    seoTitle: "DATEV mit Gmail verbinden · Belege automatisch übergeben",
    seoDescription:
      "So verbinden wir DATEV mit Gmail: Belege werden strukturiert übergeben, Zahlungsinformationen synchronisiert.",
    status: "individuelle_integration",
    integrationMethod: ["Middleware", "OCR + KI", "DATEV Belegtransfer / DATEVconnect"],
    syncDirection: "einseitig",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Belege (PDF)", status: "bestaetigt" },
      { name: "Rechnungsnummer, Betrag, USt., Lieferant", status: "wahrscheinlich" },
      { name: "Kontierungsvorschläge", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Beleg trifft im Gmail-Postfach ein" },
      { title: "Middleware liest E-Mail (Gmail API)" },
      { title: "OCR + KI extrahieren Kernfelder" },
      { title: "Belegtransfer / DATEVconnect übergibt an DATEV" },
      { title: "Historie & Fehler-Log in Middleware" }
    ],
    typicalUseCases: [
      "Eingangsrechnungen automatisieren",
      "Belegablage für den Steuerberater",
      "Skonto-Nutzung sicherstellen"
    ],
    fallbackWithoutApi: ["Manueller Belegtransfer als Zwischenschritt"],
    limitations: [
      "Konkreter DATEV-Weg hängt vom eingesetzten Produkt ab",
      "Verfahrensdokumentation erforderlich"
    ],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Werden alle Anhänge übertragen?",
        answer:
          "Wir übernehmen die Anhänge, die als Belege klassifiziert werden. Andere Anhänge werden gesondert behandelt."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten", "datev-prozesse-automatisieren"],
    relatedAutomationSlugs: ["eingangsrechnung-ocr-datev", "datev-belegvorbereitung"],
    leadPrefill: {
      systemA: "DATEV",
      systemB: "Gmail",
      process: "Belege von Gmail nach DATEV",
      context: "Rechnungen aus Gmail sollen strukturiert an DATEV übergeben werden."
    }
  },
  {
    slug: "datev-hubspot",
    systemA: "DATEV",
    systemB: "HubSpot",
    systemASlug: "datev",
    systemBSlug: "hubspot",
    seoTitle: "DATEV mit HubSpot verbinden · Kunden und Rechnungen abgleichen",
    seoDescription:
      "DATEV und HubSpot lassen sich über Middleware verbinden · Kundendaten, Rechnungsstatus und Zahlungsinformationen.",
    status: "individuelle_integration",
    integrationMethod: ["Middleware", "REST-API (HubSpot)", "DATEVconnect / Export (DATEV)"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Kunden / Kontakte", status: "wahrscheinlich" },
      { name: "Rechnungsstatus", status: "wahrscheinlich" },
      { name: "Umsätze pro Kunde", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Änderung im führenden System" },
      { title: "Middleware normalisiert" },
      { title: "Übergabe in Zielsystem" }
    ],
    typicalUseCases: [
      "Kundenstammdaten konsistent halten",
      "Rechnungsstatus im CRM sichtbar",
      "Zahlungsverzug-Signale im Vertrieb"
    ],
    fallbackWithoutApi: ["Regelmäßiger Export/Import"],
    limitations: [
      "DATEV-Wege sind produktabhängig",
      "Führungslogik pro Feld nötig"
    ],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Sehen unsere Vertriebler Rechnungsstatus in HubSpot?",
        answer:
          "Ja, das ist ein häufiger Use-Case. Der Umfang wird gemeinsam definiert."
      }
    ],
    relatedProblemSlugs: ["doppelte-dateneingabe", "fehlende-schnittstelle"],
    relatedAutomationSlugs: ["kunden-crm-sync", "crm-datenpflege-anreichern"],
    leadPrefill: {
      systemA: "DATEV",
      systemB: "HubSpot",
      process: "DATEV mit HubSpot verbinden",
      context: "Kundendaten und Rechnungsstatus sollen zwischen DATEV und HubSpot fließen."
    }
  },
  {
    slug: "datev-microsoft-365",
    systemA: "DATEV",
    systemB: "Microsoft 365",
    systemASlug: "datev",
    systemBSlug: "microsoft-365",
    seoTitle: "DATEV mit Microsoft 365 verbinden · Belege aus Outlook & SharePoint",
    seoDescription:
      "Belege aus Outlook und SharePoint automatisch an DATEV übergeben.",
    status: "individuelle_integration",
    integrationMethod: ["Microsoft Graph API", "Middleware", "DATEV Belegtransfer"],
    syncDirection: "einseitig",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Belege (PDF)", status: "bestaetigt" },
      { name: "Metadaten (Datum, Lieferant, Betrag)", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Beleg in Outlook / SharePoint" },
      { title: "Graph-API liefert Datei" },
      { title: "OCR + KI extrahieren" },
      { title: "DATEV-Übergabe" }
    ],
    typicalUseCases: [
      "Eingangsrechnungen aus Outlook automatisieren",
      "SharePoint als Belegablage"
    ],
    fallbackWithoutApi: [],
    limitations: ["DATEV-Weg produktabhängig"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Muss die IT einbezogen werden?",
        answer:
          "Ja, für Graph-API-Zugriff sind IT-Freigaben und Berechtigungen nötig."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten", "datev-prozesse-automatisieren"],
    relatedAutomationSlugs: ["eingangsrechnung-ocr-datev", "workflow-dokumenten-freigabe"],
    leadPrefill: {
      systemA: "DATEV",
      systemB: "Microsoft 365",
      process: "Belege aus Microsoft 365 an DATEV",
      context: "Belege aus Outlook / SharePoint sollen automatisch an DATEV."
    }
  },
  {
    slug: "datev-lexoffice",
    systemA: "DATEV",
    systemB: "lexoffice",
    systemASlug: "datev",
    systemBSlug: "lexoffice",
    seoTitle: "DATEV mit lexoffice verbinden · Belege und Buchungen",
    seoDescription:
      "lexoffice-Belege lassen sich strukturiert an DATEV übergeben. Der Steuerberater arbeitet in DATEV.",
    status: "api_integration",
    integrationMethod: ["lexoffice API", "DATEV Belegtransfer / DATEV-Export"],
    syncDirection: "einseitig",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Belege", status: "bestaetigt" },
      { name: "Kontenrahmen", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Beleg in lexoffice" },
      { title: "API-Abholung / Export" },
      { title: "Übergabe an DATEV" }
    ],
    typicalUseCases: [
      "Beleg-Bereitstellung für den Steuerberater",
      "Konsolidierung von Buchhaltung und Steuerkanzlei"
    ],
    fallbackWithoutApi: ["DATEV-Export in lexoffice nutzen"],
    limitations: ["Konkreter Weg abhängig vom Steuerberater-Setup"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist der Sync automatisch?",
        answer: "Ja, sobald der Weg zwischen lexoffice und DATEV definiert ist."
      }
    ],
    relatedProblemSlugs: ["datev-prozesse-automatisieren"],
    relatedAutomationSlugs: ["datev-belegvorbereitung", "eingangsrechnung-ocr-datev"],
    leadPrefill: {
      systemA: "DATEV",
      systemB: "lexoffice",
      process: "lexoffice-Belege nach DATEV",
      context: "Belege aus lexoffice sollen automatisiert an DATEV übergeben werden."
    }
  },
  {
    slug: "datev-baufaktura",
    systemA: "DATEV",
    systemB: "Baufaktura",
    systemASlug: "datev",
    systemBSlug: "baufaktura",
    seoTitle: "DATEV mit Baufaktura verbinden · Rechnungen automatisch übergeben",
    seoDescription:
      "Baufaktura-Rechnungen an DATEV übergeben. Meist über Middleware und Export.",
    status: "individuelle_integration",
    integrationMethod: ["Middleware", "Baufaktura-Export", "DATEV-Import"],
    syncDirection: "einseitig",
    realtimePossible: "pruefung_erforderlich",
    transferableData: [
      { name: "Ausgangsrechnungen", status: "wahrscheinlich" },
      { name: "Kontenzuordnungen", status: "pruefung_erforderlich" }
    ],
    workflow: [
      { title: "Rechnung in Baufaktura" },
      { title: "Export / Middleware" },
      { title: "Übergabe an DATEV" }
    ],
    typicalUseCases: ["Buchhaltung entlasten", "Steuerberater konsistent versorgen"],
    fallbackWithoutApi: ["Regelmäßiger Export im DATEV-Format"],
    limitations: ["Konkrete API-Verfügbarkeit von Baufaktura zu prüfen"],
    verificationStatus: "pruefung_erforderlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir Baufaktura direkt anbinden?",
        answer:
          "Häufig arbeiten wir über Export und Middleware. Direkter API-Zugriff wird pro Installation geprüft."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten"],
    relatedAutomationSlugs: ["datev-belegvorbereitung", "materiallisten-generieren"],
    leadPrefill: {
      systemA: "DATEV",
      systemB: "Baufaktura",
      process: "Baufaktura mit DATEV verbinden",
      context: "Rechnungen aus Baufaktura sollen an DATEV übergeben werden."
    }
  },
  {
    slug: "outlook-hubspot",
    systemA: "Outlook",
    systemB: "HubSpot",
    systemASlug: "outlook",
    systemBSlug: "hubspot",
    seoTitle: "Outlook mit HubSpot verbinden · E-Mails im CRM",
    seoDescription:
      "Outlook-E-Mails automatisch im HubSpot-CRM speichern und Anfragen strukturiert übergeben.",
    status: "api_integration",
    integrationMethod: ["HubSpot Outlook Integration", "Microsoft Graph API", "Middleware"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "E-Mails", status: "bestaetigt" },
      { name: "Kontakte", status: "wahrscheinlich" },
      { name: "Kalender-Termine", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "E-Mail in Outlook" },
      { title: "Sync ins HubSpot-CRM" },
      { title: "Kontakt-/Deal-Anlage" }
    ],
    typicalUseCases: [
      "Vertriebsmails im CRM sichtbar",
      "Anfragen automatisch als Deals",
      "Kalender-Sync"
    ],
    fallbackWithoutApi: [],
    limitations: ["Persönliche vs. shared Postfächer sauber trennen"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir Regeln definieren, welche Mails ins CRM?",
        answer: "Ja, per Regel-Set in HubSpot und via Middleware."
      }
    ],
    relatedProblemSlugs: ["emails-manuell-beantworten", "doppelte-dateneingabe"],
    relatedAutomationSlugs: [
      "email-mit-ki-beantworten",
      "email-klassifizieren-weiterleiten",
      "kunden-crm-sync"
    ],
    leadPrefill: {
      systemA: "Outlook",
      systemB: "HubSpot",
      process: "Outlook mit HubSpot verbinden",
      context: "E-Mails und Kontakte sollen zwischen Outlook und HubSpot fließen."
    }
  },
  {
    slug: "gmail-hubspot",
    systemA: "Gmail",
    systemB: "HubSpot",
    systemASlug: "gmail",
    systemBSlug: "hubspot",
    seoTitle: "Gmail mit HubSpot verbinden · Anfragen und Kontakte",
    seoDescription:
      "Gmail und HubSpot lassen sich sauber verbinden. Für Vertriebs- und Service-Postfächer.",
    status: "api_integration",
    integrationMethod: ["HubSpot Gmail Integration", "Gmail API", "Middleware"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "E-Mails", status: "bestaetigt" },
      { name: "Kontakte", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "E-Mail in Gmail" },
      { title: "Sync ins HubSpot-CRM" },
      { title: "Deal- / Ticket-Anlage" }
    ],
    typicalUseCases: [
      "Serviceanfragen strukturiert bearbeiten",
      "Vertriebsanfragen ins CRM"
    ],
    fallbackWithoutApi: [],
    limitations: ["Berechtigungen im Google Workspace beachten"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir auch persönliche Gmail-Konten anbinden?",
        answer:
          "Für den professionellen Einsatz empfehlen wir Google Workspace."
      }
    ],
    relatedProblemSlugs: ["emails-manuell-beantworten"],
    relatedAutomationSlugs: [
      "email-mit-ki-beantworten",
      "email-klassifizieren-weiterleiten"
    ],
    leadPrefill: {
      systemA: "Gmail",
      systemB: "HubSpot",
      process: "Gmail mit HubSpot verbinden",
      context: "Vertriebs-/Service-Postfach soll ins HubSpot-CRM."
    }
  },
  {
    slug: "gmail-pipedrive",
    systemA: "Gmail",
    systemB: "Pipedrive",
    systemASlug: "gmail",
    systemBSlug: "pipedrive",
    seoTitle: "Gmail mit Pipedrive verbinden · E-Mails und Aktivitäten",
    seoDescription:
      "Gmail und Pipedrive verbinden, damit E-Mails an Kontakte und Deals hängen und Aktivitäten sichtbar werden.",
    status: "api_integration",
    integrationMethod: ["Pipedrive Gmail-Integration", "Gmail API"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "E-Mails", status: "bestaetigt" },
      { name: "Kontakte", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Mail in Gmail" },
      { title: "Zuordnung zu Kontakt / Deal in Pipedrive" }
    ],
    typicalUseCases: ["Vertriebsaktivitäten im CRM sichtbar"],
    fallbackWithoutApi: [],
    limitations: [],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können mehrere Vertriebler dasselbe Postfach nutzen?",
        answer: "Ja, mit einer Shared-Mailbox oder mehreren einzelnen Konten."
      }
    ],
    relatedProblemSlugs: ["angebote-manuell-erstellen"],
    relatedAutomationSlugs: ["angebote-aus-anfragen-generieren", "crm-follow-ups"],
    leadPrefill: {
      systemA: "Gmail",
      systemB: "Pipedrive",
      process: "Gmail mit Pipedrive verbinden",
      context: "Gmail-Vertriebsaktivitäten sollen in Pipedrive sichtbar werden."
    }
  },
  {
    slug: "outlook-pipedrive",
    systemA: "Outlook",
    systemB: "Pipedrive",
    systemASlug: "outlook",
    systemBSlug: "pipedrive",
    seoTitle: "Outlook mit Pipedrive verbinden · E-Mails und Termine",
    seoDescription:
      "Outlook und Pipedrive verbinden, damit E-Mails, Kontakte und Termine im Vertriebs-Kontext liegen.",
    status: "api_integration",
    integrationMethod: ["Pipedrive Outlook-Integration", "Microsoft Graph API"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "E-Mails", status: "bestaetigt" },
      { name: "Termine", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Mail / Termin in Outlook" },
      { title: "Sync in Pipedrive" }
    ],
    typicalUseCases: ["Vertriebsaktivitäten pflegen", "Terminverlauf pro Deal"],
    fallbackWithoutApi: [],
    limitations: [],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir Regeln definieren, welche Mails synchronisiert werden?",
        answer: "Ja, per Konfiguration in Pipedrive und Middleware."
      }
    ],
    relatedProblemSlugs: ["angebote-manuell-erstellen"],
    relatedAutomationSlugs: ["crm-follow-ups", "kunden-crm-sync"],
    leadPrefill: {
      systemA: "Outlook",
      systemB: "Pipedrive",
      process: "Outlook mit Pipedrive verbinden",
      context: "E-Mails und Termine sollen in Pipedrive sichtbar werden."
    }
  },
  {
    slug: "whatsapp-hubspot",
    systemA: "WhatsApp Business",
    systemB: "HubSpot",
    systemASlug: "whatsapp-business",
    systemBSlug: "hubspot",
    seoTitle: "WhatsApp mit HubSpot verbinden · Kundenchats im CRM",
    seoDescription:
      "WhatsApp-Chats über die Business-API ins HubSpot-CRM übergeben und strukturiert bearbeiten.",
    status: "api_integration",
    integrationMethod: ["WhatsApp Cloud API", "HubSpot API", "Middleware"],
    syncDirection: "bidirektional",
    realtimePossible: "bestaetigt",
    transferableData: [
      { name: "Nachrichten", status: "bestaetigt" },
      { name: "Kontakte", status: "wahrscheinlich" },
      { name: "Medien (Bild, Sprache)", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "WhatsApp-Nachricht" },
      { title: "Cloud API + Middleware" },
      { title: "Sync ins CRM" },
      { title: "Ticket / Deal / Kontakt-Anlage" }
    ],
    typicalUseCases: [
      "Team-Zugriff auf WhatsApp-Kanal",
      "Struktur-Extraktion aus Nachrichten",
      "Reporting nach Themen"
    ],
    fallbackWithoutApi: ["nicht empfohlen. Professioneller Einsatz erfordert Business-API"],
    limitations: [
      "WhatsApp-Business-API-Setup nötig",
      "Datenschutz-Absicherung"
    ],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Wird das mit dem Kunden abgestimmt?",
        answer: "Datenschutzhinweise sind Standard."
      }
    ],
    relatedProblemSlugs: ["whatsapp-anfragen-verwalten"],
    relatedAutomationSlugs: ["whatsapp-anfragen-strukturieren"],
    leadPrefill: {
      systemA: "WhatsApp Business",
      systemB: "HubSpot",
      process: "WhatsApp mit HubSpot verbinden",
      context: "WhatsApp-Kundenkommunikation soll ins HubSpot-CRM."
    }
  },
  {
    slug: "whatsapp-crm-generisch",
    systemA: "WhatsApp Business",
    systemB: "Beliebiges CRM",
    systemASlug: "whatsapp-business",
    seoTitle: "WhatsApp mit CRM verbinden · Cloud-API und Middleware",
    seoDescription:
      "WhatsApp lässt sich mit jedem CRM verbinden, das eine API bietet. Via Cloud API und Middleware.",
    status: "individuelle_integration",
    integrationMethod: ["WhatsApp Cloud API", "Middleware", "Ziel-CRM-API"],
    syncDirection: "bidirektional",
    realtimePossible: "bestaetigt",
    transferableData: [
      { name: "Nachrichten", status: "bestaetigt" },
      { name: "Kontakte", status: "wahrscheinlich" },
      { name: "Medien", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "WhatsApp-Nachricht" },
      { title: "Middleware" },
      { title: "Übergabe ins CRM" }
    ],
    typicalUseCases: ["Handwerk / Bau / Dienstleistung"],
    fallbackWithoutApi: [],
    limitations: ["CRM muss API bieten"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Welche CRMs sind möglich?",
        answer: "Alle mit dokumentierter API. Wir prüfen pro Fall."
      }
    ],
    relatedProblemSlugs: ["whatsapp-anfragen-verwalten"],
    relatedAutomationSlugs: ["whatsapp-anfragen-strukturieren", "baustellenberichte-strukturieren"],
    leadPrefill: {
      systemA: "WhatsApp Business",
      systemB: "CRM",
      process: "WhatsApp mit CRM verbinden",
      context: "WhatsApp-Kanal soll ans CRM angebunden werden."
    }
  },
  {
    slug: "shopify-datev",
    systemA: "Shopify",
    systemB: "DATEV",
    systemASlug: "shopify",
    systemBSlug: "datev",
    seoTitle: "Shopify mit DATEV verbinden · Bestellungen automatisch buchen",
    seoDescription:
      "Shopify-Bestellungen strukturiert an DATEV übergeben. Für Buchhaltung und Steuerberater.",
    status: "individuelle_integration",
    integrationMethod: ["Shopify API + Webhooks", "Middleware", "DATEV-Belegtransfer"],
    syncDirection: "einseitig",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Bestellungen", status: "bestaetigt" },
      { name: "Kunden", status: "wahrscheinlich" },
      { name: "Produkte", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Bestellung in Shopify" },
      { title: "Webhook an Middleware" },
      { title: "DATEV-Übergabe" }
    ],
    typicalUseCases: ["Buchhaltung entlasten", "Steuerberater versorgen"],
    fallbackWithoutApi: [],
    limitations: ["Retouren-Handling separat definieren"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Was, wenn wir mehrere Länder-Shops haben?",
        answer:
          "Wir bilden Länder-Logik (USt., Konten) in der Middleware ab."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten"],
    relatedAutomationSlugs: ["datev-belegvorbereitung"],
    leadPrefill: {
      systemA: "Shopify",
      systemB: "DATEV",
      process: "Shopify mit DATEV verbinden",
      context: "Shopify-Bestellungen sollen an DATEV übergeben werden."
    }
  },
  {
    slug: "shopify-lexoffice",
    systemA: "Shopify",
    systemB: "lexoffice",
    systemASlug: "shopify",
    systemBSlug: "lexoffice",
    seoTitle: "Shopify mit lexoffice verbinden · Rechnungen automatisch",
    seoDescription:
      "Shopify-Bestellungen als lexoffice-Rechnungen anlegen. Über API und Middleware.",
    status: "api_integration",
    integrationMethod: ["Shopify API", "lexoffice API", "Middleware"],
    syncDirection: "einseitig",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Bestellungen", status: "bestaetigt" },
      { name: "Kunden", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Bestellung in Shopify" },
      { title: "Middleware transformiert" },
      { title: "Rechnung in lexoffice" }
    ],
    typicalUseCases: ["Buchhaltung automatisieren"],
    fallbackWithoutApi: [],
    limitations: ["Steuer-Setup sauber definieren"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Was mit Retouren?",
        answer: "Retouren-Logik wird in Middleware abgebildet."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten"],
    relatedAutomationSlugs: ["eingangsrechnung-ocr-datev"],
    leadPrefill: {
      systemA: "Shopify",
      systemB: "lexoffice",
      process: "Shopify mit lexoffice verbinden",
      context: "Shopify-Bestellungen sollen als lexoffice-Rechnungen entstehen."
    }
  },
  {
    slug: "woocommerce-datev",
    systemA: "WooCommerce",
    systemB: "DATEV",
    systemASlug: "woocommerce",
    systemBSlug: "datev",
    seoTitle: "WooCommerce mit DATEV verbinden · Bestellungen automatisieren",
    seoDescription:
      "WooCommerce-Bestellungen strukturiert an DATEV übergeben.",
    status: "individuelle_integration",
    integrationMethod: ["WooCommerce REST-API + Webhooks", "Middleware", "DATEV-Belegtransfer"],
    syncDirection: "einseitig",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Bestellungen", status: "bestaetigt" },
      { name: "Kunden", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Bestellung in WooCommerce" },
      { title: "Webhook an Middleware" },
      { title: "DATEV-Übergabe" }
    ],
    typicalUseCases: ["Buchhaltung entlasten", "Konsistenz zum Steuerberater"],
    fallbackWithoutApi: [],
    limitations: ["Steuer- und Retouren-Handling definieren"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Wie schnell ist die Übergabe?",
        answer: "Nahe-Echtzeit via Webhook möglich, alternativ als Batch."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten"],
    relatedAutomationSlugs: ["datev-belegvorbereitung"],
    leadPrefill: {
      systemA: "WooCommerce",
      systemB: "DATEV",
      process: "WooCommerce mit DATEV verbinden",
      context: "WooCommerce-Bestellungen sollen an DATEV übergeben werden."
    }
  },
  {
    slug: "lexware-crm",
    systemA: "Lexware",
    systemB: "Beliebiges CRM",
    systemASlug: "lexware",
    seoTitle: "Lexware mit CRM verbinden · Kunden und Rechnungen konsistent",
    seoDescription:
      "Lexware lässt sich mit CRM-Systemen verbinden. Meist über Import/Export oder Middleware.",
    status: "individuelle_integration",
    integrationMethod: ["Export/Import", "Middleware", "je nach Modul API"],
    syncDirection: "bidirektional",
    realtimePossible: "pruefung_erforderlich",
    transferableData: [
      { name: "Kunden", status: "wahrscheinlich" },
      { name: "Rechnungen", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Änderung im führenden System" },
      { title: "Middleware normalisiert" },
      { title: "Übergabe" }
    ],
    typicalUseCases: ["Kunden-Sync", "Rechnungs-Status im CRM"],
    fallbackWithoutApi: ["Regelmäßiger Import/Export"],
    limitations: ["Lexware-Version und Module prüfen"],
    verificationStatus: "pruefung_erforderlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist eine Echtzeit-Sync möglich?",
        answer: "Häufig eher Intervall-basiert, Details pro Setup."
      }
    ],
    relatedProblemSlugs: ["doppelte-dateneingabe", "fehlende-schnittstelle"],
    relatedAutomationSlugs: ["kunden-crm-sync"],
    leadPrefill: {
      systemA: "Lexware",
      systemB: "CRM",
      process: "Lexware mit CRM verbinden",
      context: "Kunden- und Rechnungsdaten sollen zwischen Lexware und CRM abgeglichen werden."
    }
  },
  {
    slug: "lexware-hubspot",
    systemA: "Lexware",
    systemB: "HubSpot",
    systemASlug: "lexware",
    systemBSlug: "hubspot",
    seoTitle: "Lexware mit HubSpot verbinden · Kunden und Umsätze",
    seoDescription:
      "Kundendaten und Umsätze zwischen Lexware und HubSpot abgleichen.",
    status: "individuelle_integration",
    integrationMethod: ["Middleware", "HubSpot API", "Lexware Export/Modul-API"],
    syncDirection: "bidirektional",
    realtimePossible: "pruefung_erforderlich",
    transferableData: [
      { name: "Kunden", status: "wahrscheinlich" },
      { name: "Umsätze", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Änderung in HubSpot" },
      { title: "Middleware normalisiert" },
      { title: "Lexware-Übergabe" }
    ],
    typicalUseCases: ["Konsistenz zwischen Vertrieb und Buchhaltung"],
    fallbackWithoutApi: ["Regelmäßiger Export/Import"],
    limitations: ["Lexware-Weg abhängig von Modul"],
    verificationStatus: "pruefung_erforderlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist ein Vertriebs-Dashboard mit Lexware-Umsätzen möglich?",
        answer: "Ja, per Sync in HubSpot-Custom-Objects oder Reporting-Tool."
      }
    ],
    relatedProblemSlugs: ["doppelte-dateneingabe"],
    relatedAutomationSlugs: ["kunden-crm-sync", "crm-datenpflege-anreichern"],
    leadPrefill: {
      systemA: "Lexware",
      systemB: "HubSpot",
      process: "Lexware mit HubSpot verbinden",
      context: "Kunden und Umsätze sollen zwischen Lexware und HubSpot fließen."
    }
  },
  {
    slug: "sevdesk-hubspot",
    systemA: "sevDesk",
    systemB: "HubSpot",
    systemASlug: "sevdesk",
    systemBSlug: "hubspot",
    seoTitle: "sevDesk mit HubSpot verbinden · Kunden und Rechnungen",
    seoDescription:
      "sevDesk und HubSpot lassen sich per API verbinden. Für konsistente Kunden- und Rechnungsdaten.",
    status: "api_integration",
    integrationMethod: ["sevDesk API", "HubSpot API", "Middleware"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Kunden", status: "wahrscheinlich" },
      { name: "Rechnungen", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Änderung in einem System" },
      { title: "Middleware" },
      { title: "Ziel-System aktualisiert" }
    ],
    typicalUseCases: ["Vertrieb kennt Rechnungsstatus"],
    fallbackWithoutApi: [],
    limitations: [],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können Rechnungen aus HubSpot in sevDesk entstehen?",
        answer: "Ja, wenn Deal-Abschluss die Trigger-Bedingung ist."
      }
    ],
    relatedProblemSlugs: ["doppelte-dateneingabe"],
    relatedAutomationSlugs: ["kunden-crm-sync"],
    leadPrefill: {
      systemA: "sevDesk",
      systemB: "HubSpot",
      process: "sevDesk mit HubSpot verbinden",
      context: "Kunden und Rechnungen sollen abgeglichen werden."
    }
  },
  {
    slug: "microsoft-365-datev",
    systemA: "Microsoft 365",
    systemB: "DATEV",
    systemASlug: "microsoft-365",
    systemBSlug: "datev",
    seoTitle: "Microsoft 365 mit DATEV verbinden · Belege aus Outlook & SharePoint",
    seoDescription:
      "Belege aus Outlook und SharePoint automatisch an DATEV übergeben.",
    status: "individuelle_integration",
    integrationMethod: ["Microsoft Graph API", "Middleware", "DATEV-Belegtransfer"],
    syncDirection: "einseitig",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Belege", status: "bestaetigt" },
      { name: "Metadaten", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Beleg in Outlook / SharePoint" },
      { title: "Middleware" },
      { title: "DATEV" }
    ],
    typicalUseCases: ["Eingangsrechnungen aus Outlook", "SharePoint als Belegablage"],
    fallbackWithoutApi: [],
    limitations: ["DATEV-Weg produktabhängig"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Reicht Outlook-Zugriff?",
        answer: "Für Belege aus Outlook ja. Für SharePoint zusätzliche Berechtigungen."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten", "datev-prozesse-automatisieren"],
    relatedAutomationSlugs: ["eingangsrechnung-ocr-datev", "workflow-dokumenten-freigabe"],
    leadPrefill: {
      systemA: "Microsoft 365",
      systemB: "DATEV",
      process: "Microsoft 365 mit DATEV verbinden",
      context: "Belege aus Microsoft 365 sollen an DATEV übergeben werden."
    }
  },
  {
    slug: "microsoft-365-hubspot",
    systemA: "Microsoft 365",
    systemB: "HubSpot",
    systemASlug: "microsoft-365",
    systemBSlug: "hubspot",
    seoTitle: "Microsoft 365 mit HubSpot verbinden · Mail, Kalender, SharePoint",
    seoDescription:
      "Microsoft 365 und HubSpot vollständig verbinden: Mail, Kalender, Kontakte, Dokumente.",
    status: "api_integration",
    integrationMethod: ["Microsoft Graph API", "HubSpot API", "Middleware"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "E-Mails", status: "bestaetigt" },
      { name: "Kalender-Termine", status: "wahrscheinlich" },
      { name: "Kontakte", status: "wahrscheinlich" },
      { name: "Dokumente", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Aktion in Microsoft 365 / HubSpot" },
      { title: "Middleware" },
      { title: "Ziel-System aktualisiert" }
    ],
    typicalUseCases: [
      "Vertrieb sieht Kontext im CRM",
      "Termine automatisch im Kalender",
      "Dokumente pro Deal"
    ],
    fallbackWithoutApi: [],
    limitations: ["Rechte-Design sorgfältig"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir das für ein Team ausrollen?",
        answer: "Ja, mit sauberem Rechte- und Nutzer-Onboarding-Prozess."
      }
    ],
    relatedProblemSlugs: ["doppelte-dateneingabe", "zu-viel-verwaltungsaufwand"],
    relatedAutomationSlugs: [
      "kunden-crm-sync",
      "workflow-dokumenten-freigabe",
      "terminvereinbarung-automatisieren"
    ],
    leadPrefill: {
      systemA: "Microsoft 365",
      systemB: "HubSpot",
      process: "Microsoft 365 mit HubSpot verbinden",
      context: "Mail, Kalender und Dokumente sollen zwischen Microsoft 365 und HubSpot fließen."
    }
  },
  {
    slug: "teams-hubspot",
    systemA: "Microsoft Teams",
    systemB: "HubSpot",
    systemASlug: "teams",
    systemBSlug: "hubspot",
    seoTitle: "Teams mit HubSpot verbinden · Notifikationen und Bots",
    seoDescription:
      "Microsoft Teams und HubSpot verbinden · Notifikationen, Bots, Deal-Updates im Chat.",
    status: "api_integration",
    integrationMethod: ["Teams Bot Framework", "Microsoft Graph API", "HubSpot API"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Notifikationen", status: "bestaetigt" },
      { name: "Deal-Updates", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Event in HubSpot" },
      { title: "Bot postet in Teams" },
      { title: "Optional Aktion aus Teams heraus" }
    ],
    typicalUseCases: [
      "Vertriebs-Benachrichtigungen",
      "Interner KI-Assistent im Chat"
    ],
    fallbackWithoutApi: [],
    limitations: ["Bot-Berechtigungen definieren"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir den internen KI-Assistenten in Teams nutzen?",
        answer: "Ja, per Teams-App / Bot."
      }
    ],
    relatedProblemSlugs: ["mitarbeiter-mit-routineaufgaben-ueberlastet"],
    relatedAutomationSlugs: ["protokolle-aus-meetings", "interner-wissens-assistent-rag"],
    leadPrefill: {
      systemA: "Microsoft Teams",
      systemB: "HubSpot",
      process: "Teams mit HubSpot verbinden",
      context: "Vertriebs- und Service-Notifikationen sollen in Teams landen."
    }
  },
  {
    slug: "slack-hubspot",
    systemA: "Slack",
    systemB: "HubSpot",
    systemASlug: "slack",
    systemBSlug: "hubspot",
    seoTitle: "Slack mit HubSpot verbinden · Deal-Updates und Bots",
    seoDescription:
      "Slack und HubSpot verbinden für Notifikationen, Bots und Deal-Updates.",
    status: "api_integration",
    integrationMethod: ["Slack Web API + Events", "HubSpot API"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Notifikationen", status: "bestaetigt" },
      { name: "Deal-Updates", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Event in HubSpot" },
      { title: "Slack-Post in passendem Channel" },
      { title: "Optional Aktion aus Slack" }
    ],
    typicalUseCases: ["Vertriebs-Notifikationen", "Onboarding-Automatisierung"],
    fallbackWithoutApi: [],
    limitations: [],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist eine schnelle Aktivierung möglich?",
        answer: "Ja, die HubSpot-Slack-Integration ist gut dokumentiert."
      }
    ],
    relatedProblemSlugs: ["mitarbeiter-mit-routineaufgaben-ueberlastet"],
    relatedAutomationSlugs: ["onboarding-checkliste"],
    leadPrefill: {
      systemA: "Slack",
      systemB: "HubSpot",
      process: "Slack mit HubSpot verbinden",
      context: "Slack soll für Vertriebs-Notifikationen und Bots eingesetzt werden."
    }
  },
  {
    slug: "sap-crm",
    systemA: "SAP Business One",
    systemB: "Beliebiges CRM",
    systemASlug: "sap-business-one",
    seoTitle: "SAP Business One mit CRM verbinden · Service Layer / DI-API",
    seoDescription:
      "SAP Business One mit einem CRM verbinden. Für Vertriebs- und ERP-Konsistenz.",
    status: "individuelle_integration",
    integrationMethod: ["Service Layer / DI-API", "Middleware", "Ziel-CRM API"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Kunden", status: "wahrscheinlich" },
      { name: "Angebote", status: "wahrscheinlich" },
      { name: "Aufträge", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Aktion in einem System" },
      { title: "Middleware" },
      { title: "Ziel-System aktualisiert" }
    ],
    typicalUseCases: ["Vertriebs-Übersicht", "Auftrags-Übergabe an ERP"],
    fallbackWithoutApi: ["Regelmäßige Batch-Übergabe"],
    limitations: ["SAP-Setup und Berechtigungen"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist Service Layer immer verfügbar?",
        answer: "Nicht in allen SAP-B1-Installationen. Wir prüfen im Vorprojekt."
      }
    ],
    relatedProblemSlugs: ["fehlende-schnittstelle"],
    relatedAutomationSlugs: ["kunden-crm-sync"],
    leadPrefill: {
      systemA: "SAP Business One",
      systemB: "CRM",
      process: "SAP Business One mit CRM verbinden",
      context: "SAP-B1 soll mit einem CRM konsistent gehalten werden."
    }
  },
  {
    slug: "sap-hubspot",
    systemA: "SAP Business One",
    systemB: "HubSpot",
    systemASlug: "sap-business-one",
    systemBSlug: "hubspot",
    seoTitle: "SAP Business One mit HubSpot verbinden",
    seoDescription:
      "SAP Business One mit HubSpot verbinden. Für konsistente Vertriebs- und ERP-Daten.",
    status: "individuelle_integration",
    integrationMethod: ["Service Layer / DI-API", "HubSpot API", "Middleware"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Kunden", status: "wahrscheinlich" },
      { name: "Angebote", status: "wahrscheinlich" },
      { name: "Aufträge", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Deal in HubSpot" },
      { title: "Middleware" },
      { title: "Auftrag in SAP" }
    ],
    typicalUseCases: ["Deal-zu-Auftrag-Übergabe", "Umsatz-Reporting im CRM"],
    fallbackWithoutApi: [],
    limitations: ["SAP-Berechtigungen"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Wie umgehen wir SAP-Freezes?",
        answer: "Middleware fängt Ausfälle ab und wiederholt Übergaben."
      }
    ],
    relatedProblemSlugs: ["fehlende-schnittstelle", "doppelte-dateneingabe"],
    relatedAutomationSlugs: ["kunden-crm-sync", "berichte-automatisch-erstellen"],
    leadPrefill: {
      systemA: "SAP Business One",
      systemB: "HubSpot",
      process: "SAP mit HubSpot verbinden",
      context: "Vertriebs- und ERP-Daten sollen zwischen SAP und HubSpot fließen."
    }
  },
  {
    slug: "hubspot-mailchimp",
    systemA: "HubSpot",
    systemB: "Mailchimp",
    systemASlug: "hubspot",
    systemBSlug: "mailchimp",
    seoTitle: "HubSpot mit Mailchimp verbinden · Kontakte & Segmente",
    seoDescription:
      "HubSpot und Mailchimp verbinden. Für konsistente Kontakt- und Segment-Daten.",
    status: "api_integration",
    integrationMethod: ["HubSpot API", "Mailchimp API", "Middleware"],
    syncDirection: "bidirektional",
    realtimePossible: "wahrscheinlich",
    transferableData: [
      { name: "Kontakte", status: "bestaetigt" },
      { name: "Segmente", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Aktion in einem System" },
      { title: "Middleware" },
      { title: "Ziel-System" }
    ],
    typicalUseCases: ["Newsletter-Segmentierung auf CRM-Basis"],
    fallbackWithoutApi: [],
    limitations: [],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können Kampagnen-Statistiken in HubSpot einfließen?",
        answer: "Ja, per Sync-Job und Custom-Properties."
      }
    ],
    relatedProblemSlugs: [],
    relatedAutomationSlugs: ["crm-datenpflege-anreichern"],
    leadPrefill: {
      systemA: "HubSpot",
      systemB: "Mailchimp",
      process: "HubSpot mit Mailchimp verbinden",
      context: "Kontakte und Segmente sollen zwischen HubSpot und Mailchimp fließen."
    }
  },
  {
    slug: "calendly-hubspot",
    systemA: "Calendly",
    systemB: "HubSpot",
    systemASlug: "calendly",
    systemBSlug: "hubspot",
    seoTitle: "Calendly mit HubSpot verbinden · Termine im CRM",
    seoDescription:
      "Calendly-Termine automatisch als Aktivitäten im HubSpot-CRM.",
    status: "direkte_integration",
    integrationMethod: ["Calendly Webhooks", "HubSpot API"],
    syncDirection: "einseitig",
    realtimePossible: "bestaetigt",
    transferableData: [
      { name: "Termine / Meetings", status: "bestaetigt" },
      { name: "Kontakte", status: "wahrscheinlich" }
    ],
    workflow: [
      { title: "Termin in Calendly" },
      { title: "Webhook an Middleware / HubSpot" },
      { title: "Aktivität + Kontakt im CRM" }
    ],
    typicalUseCases: ["Vertriebs-Termine im CRM", "Reminder-Prozesse"],
    fallbackWithoutApi: [],
    limitations: ["Bei mehreren Kalendern klare Zuweisung"],
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir mehrere Termintypen abbilden?",
        answer: "Ja, jeder Termintyp mit eigener Zuweisung im CRM."
      }
    ],
    relatedProblemSlugs: ["terminkoordination-manuell"],
    relatedAutomationSlugs: ["terminvereinbarung-automatisieren", "telefon-voicebot"],
    leadPrefill: {
      systemA: "Calendly",
      systemB: "HubSpot",
      process: "Calendly mit HubSpot verbinden",
      context: "Calendly-Termine sollen automatisch ins CRM."
    }
  }
];

export function findIntegration(slug: string) {
  return INTEGRATIONS.find((i) => i.slug === slug);
}
