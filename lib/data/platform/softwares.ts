import type { Software } from "./types";

// 20 Software-Profile. API-/Webhook-Angaben sind bewusst konservativ
// mit Verifikationsstatus versehen. Konkrete Endpoints / Auth-Details
// werden in Projekten immer neu verifiziert, weil Anbieter Wege ändern.

const CHECK = "2026-09-15";

export const SOFTWARES: Software[] = [
  {
    slug: "datev",
    name: "DATEV",
    seoTitle: "DATEV Anbindung · Belegtransfer, XML, DATEVconnect",
    seoDescription:
      "DATEV ist im deutschen Mittelstand die zentrale Buchhaltungs-Umgebung. Anbindung erfolgt über verschiedene, jeweils zu prüfende Wege.",
    category: "buchhaltung",
    vendor: "DATEV eG",
    website: "https://www.datev.de",
    description:
      "DATEV ist der Standard für Steuerberatung und Buchhaltung in Deutschland. Für Anbindungen stehen unter anderem DATEV Unternehmen Online (Belegtransfer), DATEV Rechnungswesen und in Teilbereichen DATEVconnect zur Verfügung.",
    typicalUseCases: [
      "Belege für Steuerberater vorbereiten",
      "Eingangsrechnungen automatisch übergeben",
      "Zahlungsvorschläge exportieren"
    ],
    api: {
      apiAvailable: "wahrscheinlich",
      apiType: "je nach Produkt (Belegtransfer, DATEVconnect, XML)",
      webhooks: "pruefung_erforderlich",
      authentication: "je nach Weg (SmartLogin, Zertifikat, DATEVconnect-Zugang)",
      documentationUrl: "https://developer.datev.de"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Gibt es eine offene REST-API für alles?",
        answer:
          "Nein. DATEV bietet mehrere spezialisierte Wege. Welcher passt, hängt vom Zielprozess und der DATEV-Umgebung ab."
      }
    ],
    relatedIntegrationSlugs: [
      "datev-gmail",
      "datev-hubspot",
      "datev-microsoft-365",
      "datev-lexoffice",
      "datev-baufaktura"
    ],
    relatedAutomationSlugs: [
      "eingangsrechnung-ocr-datev",
      "datev-belegvorbereitung",
      "zahlungserinnerung-automatisieren"
    ]
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    seoTitle: "HubSpot Anbindung · REST-API und Webhooks",
    seoDescription:
      "HubSpot ist eines der verbreitetsten CRMs im Mittelstand und bietet eine umfassende REST-API sowie Webhook-Funktionalität.",
    category: "crm",
    vendor: "HubSpot Inc.",
    website: "https://www.hubspot.com",
    description:
      "HubSpot bündelt CRM, Marketing, Sales, Service und CMS. Für Integrationen steht eine umfassend dokumentierte REST-API mit Webhooks bereit.",
    typicalUseCases: [
      "Kontakte und Deals synchronisieren",
      "Follow-ups automatisieren",
      "Web-Formulare ins CRM übergeben"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST",
      webhooks: "bestaetigt",
      authentication: "OAuth 2.0 / Private App Tokens",
      documentationUrl: "https://developers.hubspot.com"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Gibt es Limits?",
        answer:
          "Ja, wie bei den meisten SaaS-CRMs gibt es API-Limits, die im Design berücksichtigt werden."
      }
    ],
    relatedIntegrationSlugs: [
      "datev-hubspot",
      "outlook-hubspot",
      "gmail-hubspot",
      "whatsapp-hubspot",
      "microsoft-365-hubspot",
      "teams-hubspot",
      "slack-hubspot",
      "sap-hubspot",
      "lexware-hubspot",
      "sevdesk-hubspot",
      "calendly-hubspot",
      "hubspot-mailchimp"
    ],
    relatedAutomationSlugs: [
      "kunden-crm-sync",
      "leads-qualifizieren",
      "crm-follow-ups",
      "crm-datenpflege-anreichern"
    ]
  },
  {
    slug: "lexoffice",
    name: "lexoffice",
    seoTitle: "lexoffice Anbindung · REST-API für Buchhaltung",
    seoDescription:
      "lexoffice ist eine Buchhaltungs-SaaS für kleine Unternehmen mit REST-API für Belege, Kontakte und Rechnungen.",
    category: "buchhaltung",
    vendor: "Haufe-Lexware",
    website: "https://www.lexoffice.de",
    description:
      "lexoffice ist eine populäre Buchhaltungs-Cloud-Lösung in Deutschland, mit dokumentierter Public API für die Anbindung an andere Systeme.",
    typicalUseCases: [
      "Belege automatisch übergeben",
      "Kontakte synchronisieren",
      "Rechnungen aus anderen Systemen erzeugen"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST",
      webhooks: "wahrscheinlich",
      authentication: "API-Key",
      documentationUrl: "https://developers.lexoffice.io"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann lexoffice mit DATEV zusammenarbeiten?",
        answer:
          "Über DATEV-Exporte oder DATEV-Anbindung des Steuerberaters ist ein Weg meist möglich."
      }
    ],
    relatedIntegrationSlugs: ["datev-lexoffice", "shopify-lexoffice"],
    relatedAutomationSlugs: [
      "eingangsrechnung-ocr-datev",
      "zahlungserinnerung-automatisieren"
    ]
  },
  {
    slug: "sevdesk",
    name: "sevDesk",
    seoTitle: "sevDesk Anbindung · REST-API",
    seoDescription:
      "sevDesk ist eine Cloud-Buchhaltung mit dokumentierter REST-API.",
    category: "buchhaltung",
    vendor: "sevDesk",
    website: "https://sevdesk.de",
    description:
      "sevDesk ist im Mittelstand als schlanke Cloud-Buchhaltung verbreitet. Die API deckt Belege, Rechnungen und Kontakte ab.",
    typicalUseCases: [
      "Belege automatisch übergeben",
      "Rechnungen an Kunden erzeugen"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST",
      webhooks: "pruefung_erforderlich",
      authentication: "API-Key",
      documentationUrl: "https://api.sevdesk.de"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Gibt es Webhooks?",
        answer: "Der Umfang variiert · Anbindungen sind primär API-basiert."
      }
    ],
    relatedIntegrationSlugs: ["sevdesk-hubspot"],
    relatedAutomationSlugs: [
      "eingangsrechnung-ocr-datev",
      "zahlungserinnerung-automatisieren"
    ]
  },
  {
    slug: "lexware",
    name: "Lexware",
    seoTitle: "Lexware Anbindung · Import/Export und DATEV-Wege",
    seoDescription:
      "Lexware ist im deutschen Mittelstand für Buchhaltung, Warenwirtschaft und Faktura verbreitet. Anbindung meist über Import/Export.",
    category: "buchhaltung",
    vendor: "Haufe-Lexware",
    website: "https://www.lexware.de",
    description:
      "Klassische Desktop-Lösung, die weiterhin viele Betriebe nutzen. Integrationen laufen häufig über Import/Export oder Middleware.",
    typicalUseCases: [
      "Kunden aus CRM übernehmen",
      "Rechnungen exportieren",
      "DATEV-Übergabe"
    ],
    api: {
      apiAvailable: "pruefung_erforderlich",
      apiType: "je nach Modul und Version",
      webhooks: "pruefung_erforderlich",
      authentication: "pruefung_erforderlich"
    },
    verificationStatus: "pruefung_erforderlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir Lexware direkt per API anbinden?",
        answer:
          "Die konkreten Möglichkeiten hängen von Version und Modul ab und werden im Vorprojekt geprüft."
      }
    ],
    relatedIntegrationSlugs: ["lexware-crm", "lexware-hubspot"],
    relatedAutomationSlugs: ["kunden-crm-sync", "eingangsrechnung-ocr-datev"]
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    seoTitle: "Pipedrive Anbindung · REST-API und Webhooks",
    seoDescription:
      "Pipedrive ist ein Vertriebs-CRM mit einer klar dokumentierten REST-API und Webhooks.",
    category: "crm",
    vendor: "Pipedrive",
    website: "https://www.pipedrive.com",
    description:
      "Pipedrive ist vor allem in Vertriebsteams verbreitet. Die API deckt Deals, Kontakte, Aktivitäten und Automations ab.",
    typicalUseCases: [
      "Deals und Kontakte synchronisieren",
      "Angebote automatisiert erzeugen",
      "Follow-ups planen"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST",
      webhooks: "bestaetigt",
      authentication: "API-Token / OAuth",
      documentationUrl: "https://developers.pipedrive.com"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Wie unterscheidet sich Pipedrive von HubSpot?",
        answer:
          "Pipedrive ist stärker auf Vertriebs-Pipeline fokussiert; HubSpot deckt Marketing, Vertrieb und Service breiter ab."
      }
    ],
    relatedIntegrationSlugs: ["outlook-pipedrive", "gmail-pipedrive"],
    relatedAutomationSlugs: ["kunden-crm-sync", "leads-qualifizieren", "crm-follow-ups"]
  },
  {
    slug: "sap-business-one",
    name: "SAP Business One",
    seoTitle: "SAP Business One Anbindung · Service Layer / DI-API",
    seoDescription:
      "SAP Business One ist im gehobenen Mittelstand verbreitet. Integrationen laufen über Service Layer oder DI-API.",
    category: "erp",
    vendor: "SAP",
    website: "https://www.sap.com/products/business-one.html",
    description:
      "SAP Business One deckt Warenwirtschaft, Buchhaltung und Vertrieb in einem System ab. Integrationen erfolgen typischerweise über Service Layer (REST-nah) oder DI-API.",
    typicalUseCases: [
      "Kunden zwischen CRM und SAP synchronisieren",
      "Belege aus SAP exportieren",
      "Angebote aus Anfragen erzeugen"
    ],
    api: {
      apiAvailable: "wahrscheinlich",
      apiType: "Service Layer (REST-nah) / DI-API",
      webhooks: "pruefung_erforderlich",
      authentication: "SAP-spezifisch"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist eine Anbindung realistisch?",
        answer:
          "Ja, in vielen Projekten. Der konkrete Aufwand hängt von Version und lokalem Deployment ab."
      }
    ],
    relatedIntegrationSlugs: ["sap-hubspot", "sap-crm"],
    relatedAutomationSlugs: ["kunden-crm-sync", "berichte-automatisch-erstellen"]
  },
  {
    slug: "shopify",
    name: "Shopify",
    seoTitle: "Shopify Anbindung · REST- und GraphQL-API mit Webhooks",
    seoDescription:
      "Shopify bietet umfangreiche APIs und Webhooks für Anbindungen an Buchhaltung, CRM und ERP.",
    category: "shop",
    vendor: "Shopify Inc.",
    website: "https://www.shopify.com",
    description:
      "Shopify ist eines der verbreitetsten Shop-Systeme mit vollständig dokumentierten APIs (REST + GraphQL) und Webhooks.",
    typicalUseCases: [
      "Bestellungen an Buchhaltung übergeben",
      "Kunden ins CRM übernehmen",
      "Produkt- und Bestandsdaten synchronisieren"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST + GraphQL",
      webhooks: "bestaetigt",
      authentication: "Access Tokens",
      documentationUrl: "https://shopify.dev"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann Shopify DATEV-fähige Belege liefern?",
        answer:
          "Direkt nicht standardmäßig, wir überführen Bestellungen strukturiert in DATEV-fähige Formate."
      }
    ],
    relatedIntegrationSlugs: ["shopify-datev", "shopify-lexoffice"],
    relatedAutomationSlugs: ["kunden-crm-sync", "eingangsrechnung-ocr-datev"]
  },
  {
    slug: "woocommerce",
    name: "WooCommerce",
    seoTitle: "WooCommerce Anbindung · REST-API und Webhooks",
    seoDescription:
      "WooCommerce ist die Shop-Erweiterung für WordPress mit REST-API und Webhooks.",
    category: "shop",
    vendor: "Automattic",
    website: "https://woocommerce.com",
    description:
      "WooCommerce ist eine der verbreitetsten Shop-Lösungen, insbesondere im europäischen Mittelstand.",
    typicalUseCases: [
      "Bestellungen an DATEV / lexoffice",
      "Kunden ins CRM",
      "Bestandsdaten synchronisieren"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST",
      webhooks: "bestaetigt",
      authentication: "Consumer Keys",
      documentationUrl: "https://woocommerce.github.io/woocommerce-rest-api-docs/"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Gibt es Unterschiede zu Shopify in der Anbindung?",
        answer:
          "Ja, u.a. Hosting, Authentifizierung und Plugin-Landschaft."
      }
    ],
    relatedIntegrationSlugs: ["woocommerce-datev"],
    relatedAutomationSlugs: ["kunden-crm-sync"]
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    seoTitle: "Microsoft 365 Anbindung · Graph API",
    seoDescription:
      "Microsoft 365 (früher Office 365) lässt sich über die Microsoft Graph API breit anbinden.",
    category: "office",
    vendor: "Microsoft",
    website: "https://www.microsoft.com/microsoft-365",
    description:
      "Microsoft 365 deckt Mail (Exchange/Outlook), Teams, SharePoint, OneDrive und mehr ab. Die Microsoft Graph API bietet einen einheitlichen Zugriff.",
    typicalUseCases: [
      "E-Mails auslesen und Antwortentwürfe erstellen",
      "Termine im Kalender anlegen",
      "Dokumente in SharePoint ablegen"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST (Microsoft Graph)",
      webhooks: "bestaetigt",
      authentication: "OAuth 2.0",
      documentationUrl: "https://learn.microsoft.com/graph"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Welche Berechtigungen brauchen wir?",
        answer:
          "Das hängt vom Prozess ab. Wir arbeiten mit dem Prinzip der minimalen Rechte."
      }
    ],
    relatedIntegrationSlugs: [
      "microsoft-365-datev",
      "microsoft-365-hubspot",
      "outlook-hubspot",
      "outlook-pipedrive",
      "teams-hubspot"
    ],
    relatedAutomationSlugs: [
      "email-mit-ki-beantworten",
      "terminvereinbarung-automatisieren",
      "workflow-dokumenten-freigabe"
    ]
  },
  {
    slug: "outlook",
    name: "Outlook",
    seoTitle: "Outlook Anbindung · Graph API und Regeln",
    seoDescription:
      "Outlook lässt sich als Client oder als Teil von Microsoft 365 anbinden. Primär über die Microsoft Graph API.",
    category: "mail",
    vendor: "Microsoft",
    website: "https://outlook.live.com",
    description:
      "Outlook ist der Mail- und Kalender-Client im Microsoft-Ökosystem. Für serverseitige Automatisierung wird die Microsoft Graph API genutzt.",
    typicalUseCases: [
      "E-Mails klassifizieren und weiterleiten",
      "Kalender-Termine bereitstellen",
      "Antwortentwürfe erstellen"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST (Microsoft Graph)",
      webhooks: "bestaetigt",
      authentication: "OAuth 2.0",
      documentationUrl: "https://learn.microsoft.com/graph"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Reicht ein Regel-Setup in Outlook selbst?",
        answer:
          "Für einfache Regeln ja. Für KI-basierte Klassifizierung und CRM-Übergabe ist eine echte Automatisierung nötig."
      }
    ],
    relatedIntegrationSlugs: ["outlook-hubspot", "outlook-pipedrive"],
    relatedAutomationSlugs: ["email-mit-ki-beantworten", "email-klassifizieren-weiterleiten"]
  },
  {
    slug: "gmail",
    name: "Gmail",
    seoTitle: "Gmail Anbindung · Gmail API und Google Workspace",
    seoDescription:
      "Gmail lässt sich über die Gmail API und im Google-Workspace-Kontext breit anbinden.",
    category: "mail",
    vendor: "Google",
    website: "https://mail.google.com",
    description:
      "Gmail ist ein weit verbreiteter Mail-Client. Für Automatisierungen wird die Gmail API bzw. Workspace-API genutzt.",
    typicalUseCases: [
      "E-Mails klassifizieren und weiterleiten",
      "Antwortentwürfe generieren",
      "Belege ins Buchhaltungssystem übergeben"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST (Gmail API)",
      webhooks: "wahrscheinlich",
      authentication: "OAuth 2.0",
      documentationUrl: "https://developers.google.com/gmail/api"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir private Gmail-Konten anbinden?",
        answer: "Wir empfehlen Google Workspace für den professionellen Einsatz."
      }
    ],
    relatedIntegrationSlugs: ["gmail-hubspot", "gmail-pipedrive", "datev-gmail"],
    relatedAutomationSlugs: [
      "email-mit-ki-beantworten",
      "email-klassifizieren-weiterleiten",
      "eingangsrechnung-ocr-datev"
    ]
  },
  {
    slug: "google-workspace",
    name: "Google Workspace",
    seoTitle: "Google Workspace Anbindung · Gmail, Drive, Kalender",
    seoDescription:
      "Google Workspace bietet APIs für Gmail, Drive, Kalender und weitere Dienste.",
    category: "office",
    vendor: "Google",
    website: "https://workspace.google.com",
    description:
      "Google Workspace bündelt Gmail, Google Drive, Kalender, Docs und Meet. APIs sind für alle Kern-Dienste vorhanden.",
    typicalUseCases: [
      "E-Mail-Automatisierung",
      "Dokumenten-Ablage in Drive",
      "Kalender-Termine"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST",
      webhooks: "wahrscheinlich",
      authentication: "OAuth 2.0",
      documentationUrl: "https://developers.google.com/workspace"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist das DSGVO-konform einsetzbar?",
        answer:
          "Mit Business-Verträgen und passender Konfiguration ist der Einsatz DSGVO-konform möglich."
      }
    ],
    relatedIntegrationSlugs: ["gmail-hubspot", "gmail-pipedrive"],
    relatedAutomationSlugs: ["email-mit-ki-beantworten", "terminvereinbarung-automatisieren"]
  },
  {
    slug: "teams",
    name: "Microsoft Teams",
    seoTitle: "Microsoft Teams Anbindung · Graph API und Bots",
    seoDescription:
      "Microsoft Teams lässt sich über Graph-API, Bots und Adaptive Cards für Automatisierungen nutzen.",
    category: "kommunikation",
    vendor: "Microsoft",
    website: "https://teams.microsoft.com",
    description:
      "Teams ist der zentrale Kollaborations-Client im Microsoft-Ökosystem. Automatisierungen sind über Bots, Adaptive Cards und Graph-API möglich.",
    typicalUseCases: [
      "Meeting-Aufzeichnung und Protokoll",
      "Interne KI-Assistenten im Teams-Chat",
      "Notifikationen aus CRM/ERP"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST (Microsoft Graph)",
      webhooks: "bestaetigt",
      authentication: "OAuth 2.0",
      documentationUrl: "https://learn.microsoft.com/graph"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir eigene Bots bauen?",
        answer: "Ja, u.a. per Bot Framework oder Copilot-Erweiterungen."
      }
    ],
    relatedIntegrationSlugs: ["teams-hubspot"],
    relatedAutomationSlugs: ["protokolle-aus-meetings", "interner-wissens-assistent-rag"]
  },
  {
    slug: "slack",
    name: "Slack",
    seoTitle: "Slack Anbindung · Web-API und Events",
    seoDescription:
      "Slack ist ein Kollaborations-Tool mit ausgereifter Web-API und Event-System.",
    category: "kommunikation",
    vendor: "Salesforce",
    website: "https://slack.com",
    description:
      "Slack ist in Startup- und Tech-Umgebungen weit verbreitet. Die APIs erlauben Bots, Notifications und interne Assistenten.",
    typicalUseCases: [
      "Interner KI-Assistent",
      "Notifikationen aus CRM/ERP",
      "Onboarding-Automatisierung"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST (Web API) + Events",
      webhooks: "bestaetigt",
      authentication: "OAuth 2.0 / Bot Tokens",
      documentationUrl: "https://api.slack.com"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist Slack DSGVO-konform?",
        answer:
          "Mit passendem Enterprise-Vertrag und Konfiguration ja. Datenklassifizierung ist Voraussetzung."
      }
    ],
    relatedIntegrationSlugs: ["slack-hubspot"],
    relatedAutomationSlugs: ["interner-wissens-assistent-rag", "onboarding-checkliste"]
  },
  {
    slug: "whatsapp-business",
    name: "WhatsApp Business",
    seoTitle: "WhatsApp Business Anbindung · Cloud API und BSP",
    seoDescription:
      "Die WhatsApp-Business-API ermöglicht professionellen Kundendialog und Anbindung an CRM.",
    category: "kommunikation",
    vendor: "Meta",
    website: "https://business.whatsapp.com",
    description:
      "WhatsApp Business bietet mit der Cloud API (oder über Business Solution Provider) einen professionellen Weg für Kundenkommunikation, inkl. Team-Zugriff und CRM-Integration.",
    typicalUseCases: [
      "Kunden-Support-Kanal",
      "Struktur-Extraktion aus Nachrichten",
      "Übergabe ins CRM"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "Cloud API (REST)",
      webhooks: "bestaetigt",
      authentication: "Access Tokens / Business Manager",
      documentationUrl: "https://developers.facebook.com/docs/whatsapp"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Braucht das einen BSP?",
        answer:
          "Nicht zwingend. Die Cloud API ist direkt nutzbar. Für Konfiguration und Support ist ein BSP oft praktisch."
      }
    ],
    relatedIntegrationSlugs: ["whatsapp-hubspot", "whatsapp-crm-generisch"],
    relatedAutomationSlugs: ["whatsapp-anfragen-strukturieren", "baustellenberichte-strukturieren"]
  },
  {
    slug: "baufaktura",
    name: "Baufaktura",
    seoTitle: "Baufaktura Anbindung · Bau-Branchensoftware",
    seoDescription:
      "Baufaktura ist eine verbreitete Bau-Branchensoftware. Anbindung erfolgt meist über Export und Middleware.",
    category: "branche_bau",
    vendor: "Baufaktura",
    website: "https://www.baufaktura.de",
    description:
      "Baufaktura bildet Angebote, Rechnungen, Aufmaße und Bau-typische Prozesse ab. Integrationen laufen häufig über Import/Export und Middleware.",
    typicalUseCases: [
      "Rechnungen nach DATEV übergeben",
      "Kunden-Sync mit CRM",
      "Baustellenberichte anbinden"
    ],
    api: {
      apiAvailable: "pruefung_erforderlich",
      webhooks: "pruefung_erforderlich",
      authentication: "pruefung_erforderlich"
    },
    verificationStatus: "pruefung_erforderlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir Baufaktura direkt anbinden?",
        answer:
          "Die konkreten Wege werden pro Version und Installation geprüft. Häufig ist Import/Export der pragmatische Weg."
      }
    ],
    relatedIntegrationSlugs: ["datev-baufaktura"],
    relatedAutomationSlugs: ["baustellenberichte-strukturieren", "materiallisten-generieren"]
  },
  {
    slug: "handwerk-office",
    name: "Handwerk-Branchensoftware (allgemein)",
    seoTitle: "Handwerk-Branchensoftware · Anbindung an CRM/DATEV",
    seoDescription:
      "Handwerks-spezifische Software (u.a. Streit, LabelWin, Wintect) lässt sich häufig per Import/Export oder Middleware anbinden.",
    category: "branche_handwerk",
    vendor: "diverse",
    description:
      "Branchensoftware für Handwerker ist häufig lokal installiert. APIs sind uneinheitlich · Anbindungen laufen oft über Export und Middleware.",
    typicalUseCases: [
      "Rechnungen an DATEV",
      "Kunden mit CRM synchronisieren",
      "Aufträge digital erfassen"
    ],
    api: {
      apiAvailable: "pruefung_erforderlich",
      webhooks: "pruefung_erforderlich",
      authentication: "pruefung_erforderlich"
    },
    verificationStatus: "pruefung_erforderlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Was, wenn keine API vorhanden ist?",
        answer:
          "Dann arbeiten wir mit Export/Import oder RPA, bis eine bessere Anbindung möglich ist."
      }
    ],
    relatedIntegrationSlugs: [],
    relatedAutomationSlugs: ["angebote-aus-anfragen-generieren", "kunden-crm-sync"]
  },
  {
    slug: "mailchimp",
    name: "Mailchimp",
    seoTitle: "Mailchimp Anbindung · REST-API",
    seoDescription:
      "Mailchimp ist eines der bekanntesten Newsletter-Tools und bietet eine REST-API.",
    category: "workflow",
    vendor: "Intuit",
    website: "https://mailchimp.com",
    description:
      "Mailchimp deckt Newsletter, Automations und einfache CRM-Funktionen ab. Anbindung erfolgt über die REST-API.",
    typicalUseCases: [
      "Newsletter-Kontakte synchronisieren",
      "Segment-Automatisierung",
      "Trigger-basierte Kampagnen"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST",
      webhooks: "bestaetigt",
      authentication: "API-Key",
      documentationUrl: "https://mailchimp.com/developer/"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann Mailchimp mit HubSpot zusammenarbeiten?",
        answer: "Ja, via API-Sync von Kontakten und Segmenten."
      }
    ],
    relatedIntegrationSlugs: ["hubspot-mailchimp"],
    relatedAutomationSlugs: ["crm-datenpflege-anreichern"]
  },
  {
    slug: "calendly",
    name: "Calendly",
    seoTitle: "Calendly Anbindung · REST-API und Webhooks",
    seoDescription:
      "Calendly ist ein verbreitetes Terminbuchungs-Tool mit REST-API und Webhooks.",
    category: "workflow",
    vendor: "Calendly",
    website: "https://calendly.com",
    description:
      "Calendly deckt Terminbuchung mit Kalender-Sync ab. Über Webhooks lassen sich CRM-Übergaben und Automations bauen.",
    typicalUseCases: [
      "Terminbuchung durch Kunden",
      "Übergabe ins CRM",
      "Reminder-Automatisierung"
    ],
    api: {
      apiAvailable: "bestaetigt",
      apiType: "REST",
      webhooks: "bestaetigt",
      authentication: "OAuth 2.0 / Personal Tokens",
      documentationUrl: "https://developer.calendly.com"
    },
    verificationStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Alternativen?",
        answer:
          "Cal.com und Microsoft Bookings sind naheliegende Alternativen mit vergleichbaren Anbindungsmöglichkeiten."
      }
    ],
    relatedIntegrationSlugs: ["calendly-hubspot"],
    relatedAutomationSlugs: ["terminvereinbarung-automatisieren", "telefon-voicebot"]
  }
];

export function findSoftware(slug: string) {
  return SOFTWARES.find((s) => s.slug === slug);
}
