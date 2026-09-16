import type { Automation } from "./types";

// 30 Automatisierungs-Datensätze. Content ist bewusst vorsichtig
// formuliert: keine erfundenen Prozentwerte oder Ersparnisse,
// stattdessen Automatisierungslevel + Freigabe-Empfehlung als
// belastbare Aussagen.

const CHECK = "2026-09-15";

export const AUTOMATIONS: Automation[] = [
  {
    slug: "email-mit-ki-beantworten",
    title: "E-Mails mit KI beantworten",
    seoTitle: "E-Mails mit KI beantworten · Antwortentwürfe für Ihr Postfach",
    seoDescription:
      "KI-gestützte Antwortentwürfe für wiederkehrende Kundenanfragen mit Freigabe durch das Team · Anbindung an Ihr CRM oder ERP.",
    category: "kommunikation",
    hero: {
      h1: "E-Mails mit KI beantworten",
      sub: "Antwortentwürfe im Postfach, basierend auf Ihrem Wissen und Ihren Systemen."
    },
    description:
      "Die Automatisierung liest eingehende E-Mails aus, klassifiziert sie nach Anliegen, extrahiert Kundenbezug und generiert einen Antwortentwurf. Standardgemäß bleibt die Freigabe beim Mitarbeiter.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "rag", "api", "workflow_automation"],
    workflow: [
      { title: "E-Mail wird empfangen" },
      { title: "Klassifizierung nach Anliegen" },
      { title: "Kundenbezug aus CRM/ERP" },
      { title: "Antwortentwurf im Postfach" },
      { title: "Freigabe & Versand" }
    ],
    prerequisites: [
      "Microsoft 365 oder Google Workspace",
      "Klare Anfragetypen definierbar",
      "Wissensbasis / FAQ / Doku vorhanden"
    ],
    risks: [
      "Fehl-Klassifizierung bei ungewöhnlichen Anfragen",
      "Antworten müssen redaktionell geprüft werden"
    ],
    typicalIntegrations: ["Microsoft 365", "Google Workspace", "HubSpot", "Pipedrive"],
    economicNote:
      "Wirkt am stärksten bei hohen Anfragemengen mit wiederkehrenden Themen. Konkreter Nutzen wird im Vorprojekt für Ihr Volumen abgeschätzt.",
    recommendation:
      "Sinnvoll ab ca. 30 wiederkehrenden Anfragen pro Tag. Start mit einer Kategorie, dann schrittweise erweitern.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Werden Antworten automatisch versendet?",
        answer:
          "In der Regel nicht. Wir empfehlen Freigabe durch den Mitarbeiter, um Qualität und Verantwortung zu wahren."
      }
    ],
    relatedProblemSlugs: ["emails-manuell-beantworten", "zu-viele-kundenanfragen"],
    relatedIntegrationSlugs: ["outlook-hubspot", "gmail-hubspot", "microsoft-365-hubspot"],
    leadPrefill: {
      process: "E-Mail-Antworten mit KI",
      context:
        "KI-gestützte Antwortentwürfe für ein bestehendes Postfach, inkl. Anbindung an CRM/ERP."
    }
  },

  {
    slug: "email-klassifizieren-weiterleiten",
    title: "E-Mails klassifizieren und weiterleiten",
    seoTitle: "E-Mails klassifizieren · Anfragen automatisch weiterleiten",
    seoDescription:
      "Automatische Klassifizierung eingehender E-Mails und Weiterleitung an die richtige Abteilung. Ohne Antwort-Generierung.",
    category: "kommunikation",
    hero: {
      h1: "E-Mails klassifizieren & weiterleiten",
      sub: "Postfach-Vor-Sortierung ohne Antwort-Automatisierung."
    },
    description:
      "Die Automatisierung liest eingehende E-Mails, klassifiziert das Anliegen und leitet an die richtige Person / Abteilung / Ticket-Queue weiter. Kein Antwortentwurf, keine CRM-Übergabe. Der schlanke Einstieg.",
    automationLevel: "sehr_hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["llm", "workflow_automation", "regelbasiert"],
    workflow: [
      { title: "E-Mail wird empfangen" },
      { title: "KI klassifiziert Anliegen" },
      { title: "Weiterleitung an Zielpostfach / Ticket" },
      { title: "Ursprungs-Mail bleibt im System" }
    ],
    prerequisites: [
      "Zugriff auf Sammelpostfach",
      "Klare Kategorien-Definition"
    ],
    risks: ["Randfälle brauchen menschliche Sichtung"],
    typicalIntegrations: ["Microsoft 365", "Google Workspace", "Zendesk", "HubSpot Service Hub"],
    economicNote:
      "Sinnvoll auch für kleinere Volumina, da Setup und Aufwand überschaubar sind.",
    recommendation: "Guter Einstiegsprozess für E-Mail-Automatisierung.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann ich mehrere Kategorien haben?",
        answer:
          "Ja, die Anzahl der Kategorien wird gemeinsam definiert. Wir empfehlen, mit 5·8 Kategorien zu starten."
      }
    ],
    relatedProblemSlugs: ["emails-manuell-beantworten", "zu-viele-kundenanfragen"],
    relatedIntegrationSlugs: ["outlook-hubspot", "gmail-hubspot"],
    leadPrefill: {
      process: "E-Mail-Klassifizierung",
      context: "Reine Vor-Sortierung eines Sammelpostfachs, ohne Antwort-Generierung."
    }
  },

  {
    slug: "angebote-aus-anfragen-generieren",
    title: "Angebote aus Anfragen generieren",
    seoTitle: "Angebote automatisch aus Anfragen generieren",
    seoDescription:
      "Angebotserstellung mit KI: aus einer E-Mail- oder Formular-Anfrage entsteht ein prüfbarer Angebotsentwurf im CRM oder als PDF.",
    category: "vertrieb",
    hero: {
      h1: "Angebote automatisiert generieren",
      sub: "Vom Kundenwunsch zum Angebot mit einem Klick zur Freigabe."
    },
    description:
      "Anfragen werden per KI interpretiert (Produkte, Mengen, Bedarf). Mit Kundendaten aus dem CRM und Produkten/Preisen aus dem ERP oder Preislisten entsteht ein Angebotsentwurf. Der Vertrieb entscheidet.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "rag", "api", "individuelle_software"],
    workflow: [
      { title: "Anfrage kommt an (Mail/Web/CRM)" },
      { title: "KI extrahiert Bedarf" },
      { title: "Produkte/Preise werden zugeordnet" },
      { title: "Angebotsentwurf im CRM oder als PDF" },
      { title: "Freigabe durch Vertrieb" }
    ],
    prerequisites: [
      "Zentrale Preisliste / Produktkatalog",
      "CRM oder Angebots-Software",
      "Vorlage für das Angebots-Layout"
    ],
    risks: [
      "Sonderpreise brauchen menschliche Prüfung",
      "Unklare Anfragen führen zu unvollständigen Entwürfen"
    ],
    typicalIntegrations: ["HubSpot", "Pipedrive", "SAP Business One", "Lexware"],
    economicNote:
      "Angebote sind der klassische Zeitfresser im Vertrieb. Wirkt am stärksten bei mehr als 20 Angeboten pro Woche.",
    recommendation:
      "Start mit einem Produkt-/Leistungsbereich, dann Ausrollung.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann die KI auch mit Anfragen ohne Produktnamen umgehen?",
        answer:
          "Ja, sie leitet aus Beschreibungen den wahrscheinlichsten Bedarf ab. Bei Unsicherheit stellt sie Rückfragen an den Vertrieb."
      }
    ],
    relatedProblemSlugs: ["angebote-manuell-erstellen"],
    relatedIntegrationSlugs: ["outlook-hubspot", "gmail-pipedrive", "lexware-hubspot"],
    leadPrefill: {
      process: "Angebotsgenerierung",
      context:
        "Aus Anfragen sollen automatisch Angebotsentwürfe im CRM oder als PDF entstehen."
    }
  },

  {
    slug: "eingangsrechnung-ocr-datev",
    title: "Eingangsrechnungen mit OCR nach DATEV",
    seoTitle: "Eingangsrechnungen OCR · Übergabe an DATEV oder lexoffice",
    seoDescription:
      "Rechnungs-PDFs auslesen, Kernfelder extrahieren, Freigabe durchlaufen und automatisch nach DATEV oder lexoffice übergeben.",
    category: "buchhaltung",
    hero: {
      h1: "Eingangsrechnungen OCR & DATEV/lexoffice",
      sub: "Vom PDF im Postfach zum Beleg in der Buchhaltung."
    },
    description:
      "OCR und KI extrahieren Rechnungsnummer, Betrag, USt., Lieferant, Zahlungsziel und Positionen. Ein Freigabe-Workflow leitet den Beleg an den richtigen Verantwortlichen, die Übergabe an DATEV oder lexoffice erfolgt automatisch.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["ocr", "llm", "workflow_automation", "api", "regelbasiert"],
    workflow: [
      { title: "Rechnung abholen (Mail, Portal, Upload)" },
      { title: "OCR + KI extrahieren" },
      { title: "Prüfung gegen Bestellung/Lieferant" },
      { title: "Freigabe-Workflow" },
      { title: "Übergabe an DATEV / lexoffice" }
    ],
    prerequisites: [
      "DATEV Unternehmen Online / DATEV Rechnungswesen oder lexoffice",
      "Definierte Freigabeverantwortliche",
      "Klare Kontenrahmen"
    ],
    risks: [
      "Sehr ungewöhnliche Rechnungsformate erfordern manuelle Sichtung",
      "GoBD-Konformität muss abgesichert werden"
    ],
    typicalIntegrations: ["DATEV Unternehmen Online", "lexoffice", "sevdesk", "Microsoft 365"],
    economicNote:
      "Skonto-Ersparnis kann kalkuliert werden, wenn Zahlungsfristen heute regelmäßig verpasst werden.",
    recommendation:
      "Start mit einem klar definierten Freigabe-Weg, dann Ausrollung.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ist das GoBD-konform?",
        answer:
          "Ja, wenn Verfahrensdokumentation und revisionssicheres Archiv sichergestellt werden. Wir richten das im Projekt gemeinsam aus."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten", "datev-prozesse-automatisieren"],
    relatedIntegrationSlugs: ["datev-gmail", "datev-microsoft-365", "datev-lexoffice"],
    leadPrefill: {
      process: "Eingangsrechnungen automatisieren",
      context:
        "Eingangsrechnungen sollen strukturiert an DATEV/lexoffice übergeben werden."
    }
  },

  {
    slug: "rechnung-freigabe-workflow",
    title: "Rechnungs-Freigabe-Workflow",
    seoTitle: "Rechnungs-Freigabe-Workflow · Digitale Freigaben statt Mail-Ping-Pong",
    seoDescription:
      "Digitaler Freigabe-Workflow für Eingangsrechnungen: ein- oder mehrstufig, mit Vertretungslogik und Historie.",
    category: "buchhaltung",
    hero: {
      h1: "Rechnungen digital freigeben",
      sub: "Ein- oder mehrstufig, mit Vertretung und lückenloser Historie."
    },
    description:
      "Eine Web-Oberfläche für Freigeber, mit Vertretungslogik, Regeln (z.B. Beträge > X gehen an Geschäftsleitung), Erinnerungen und Historie. Anschluss an die Rechnungserfassung und die Buchhaltung.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["workflow_automation", "regelbasiert", "api", "individuelle_software"],
    workflow: [
      { title: "Rechnung liegt zur Freigabe" },
      { title: "Regelbasierte Zuweisung" },
      { title: "Freigeber prüft mobil / im Browser" },
      { title: "Freigabe / Ablehnung mit Kommentar" },
      { title: "Übergabe an Buchhaltung" }
    ],
    prerequisites: [
      "Vorstufe: strukturierter Rechnungseingang",
      "Freigabe-Regeln definiert"
    ],
    risks: ["Freigabe-Regeln müssen sauber gepflegt werden"],
    typicalIntegrations: ["Microsoft 365", "DATEV", "lexoffice", "sevdesk"],
    economicNote:
      "Wirkt auf Durchlaufzeit und Skonto-Nutzung. Wenn Freigaben heute per Mail laufen, ist der Nutzen deutlich.",
    recommendation:
      "Als Ergänzung zur Rechnungs-OCR-Automatisierung sinnvoll.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann das mobil freigegeben werden?",
        answer: "Ja, per Web-Interface auf Smartphone und Tablet."
      }
    ],
    relatedProblemSlugs: ["rechnungen-manuell-verarbeiten"],
    relatedIntegrationSlugs: ["datev-microsoft-365", "datev-lexoffice"],
    leadPrefill: {
      process: "Rechnungs-Freigabe-Workflow",
      context: "Freigaben sollen digital, mit Vertretung und Historie, ablaufen."
    }
  },

  {
    slug: "kunden-crm-sync",
    title: "Kunden-Sync zwischen Systemen",
    seoTitle: "Kunden-Sync · CRM, ERP und Buchhaltung konsistent halten",
    seoDescription:
      "Automatischer Abgleich von Kundendaten zwischen CRM, ERP und Buchhaltung, mit klarer Führungslogik.",
    category: "it_datenpflege",
    hero: {
      h1: "Kundendaten sauber synchronisieren",
      sub: "Ein Datensatz, alle Systeme aktuell."
    },
    description:
      "Definierte Führungssysteme pro Entität und automatische Übergabe von Änderungen an alle Zielsysteme. Konflikte werden geloggt und über Regeln aufgelöst.",
    automationLevel: "hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["api", "webhook", "middleware", "datenbank_sync"],
    workflow: [
      { title: "Änderung im führenden System" },
      { title: "Trigger löst Sync aus" },
      { title: "Middleware normalisiert & transformiert" },
      { title: "Zielsysteme werden aktualisiert" },
      { title: "Konflikte werden geloggt" }
    ],
    prerequisites: [
      "APIs oder Import/Export in allen Systemen",
      "Klare Führungslogik pro Entität"
    ],
    risks: ["Konflikte müssen sauber definiert sein"],
    typicalIntegrations: ["HubSpot", "SAP", "DATEV", "lexware", "Microsoft 365"],
    economicNote:
      "Beseitigt Doppelpflege. Wirkt auf Datenqualität, nicht direkt auf Umsatz.",
    recommendation:
      "Für gewachsene Systemlandschaften einer der wichtigsten Automatisierungs-Kandidaten.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir zwei führende Systeme haben?",
        answer:
          "Pro Feld immer nur eines. Wir definieren gemeinsam, welches System für welches Feld führend ist."
      }
    ],
    relatedProblemSlugs: ["doppelte-dateneingabe", "fehlende-schnittstelle"],
    relatedIntegrationSlugs: ["datev-hubspot", "lexware-hubspot", "outlook-hubspot"],
    leadPrefill: {
      process: "Kunden-Sync zwischen Systemen",
      context:
        "Kundendaten sollen zwischen mehreren Systemen konsistent gehalten werden."
    }
  },

  {
    slug: "leads-qualifizieren",
    title: "Leads mit KI qualifizieren",
    seoTitle: "Leads mit KI qualifizieren · Vertriebs-Vorstrukturierung",
    seoDescription:
      "Eingehende Leads werden mit KI angereichert, klassifiziert und dem Vertrieb priorisiert übergeben.",
    category: "vertrieb",
    hero: {
      h1: "Leads mit KI qualifizieren",
      sub: "Vertrieb bearbeitet die richtigen Leads zuerst."
    },
    description:
      "Web-Formulare, Mail-Anfragen und CRM-Neuanlagen werden angereichert (Firma, Branche, Größe), klassifiziert und mit einer Priorisierungslogik versehen. Der Vertrieb sieht auf einen Blick, wo Aufwand am wahrscheinlichsten Ertrag bringt.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "api", "workflow_automation", "regelbasiert"],
    workflow: [
      { title: "Lead kommt an" },
      { title: "Firmen-/Branchen-Anreicherung" },
      { title: "Klassifizierung nach Fit" },
      { title: "Priorisierung im CRM" },
      { title: "Vertrieb bearbeitet nach Score" }
    ],
    prerequisites: ["CRM", "Definierte Zielkunden-Kriterien"],
    risks: ["Score-Logik muss gepflegt werden"],
    typicalIntegrations: ["HubSpot", "Pipedrive", "Salesforce"],
    economicNote:
      "Wirkt auf Vertriebs-Effizienz. Konkret quantifizierbar nach 6·12 Wochen Betrieb.",
    recommendation:
      "Sinnvoll ab ca. 30 Leads pro Woche.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Werden Leads automatisch verworfen?",
        answer:
          "Nein. Sie werden priorisiert und ggf. als 'kein Fit' markiert. Der Vertrieb entscheidet."
      }
    ],
    relatedProblemSlugs: ["angebote-manuell-erstellen"],
    relatedIntegrationSlugs: ["gmail-hubspot", "outlook-hubspot"],
    leadPrefill: {
      process: "Lead-Qualifizierung",
      context:
        "Leads sollen automatisch angereichert und priorisiert übergeben werden."
    }
  },

  {
    slug: "crm-follow-ups",
    title: "CRM-Follow-ups automatisieren",
    seoTitle: "CRM-Follow-ups · Nachfassen ohne Handarbeit",
    seoDescription:
      "Automatische Follow-up-Erinnerungen und Entwürfe für den Vertrieb. Integriert ins CRM.",
    category: "vertrieb",
    hero: {
      h1: "Follow-ups im CRM automatisieren",
      sub: "Der Vertrieb vergisst kein Nachfassen mehr."
    },
    description:
      "Automatische Aufgaben und Antwortentwürfe für den Vertrieb, wenn ein Deal länger keine Aktivität hatte oder ein Angebot nicht rückgemeldet wurde.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "workflow_automation", "api", "regelbasiert"],
    workflow: [
      { title: "Trigger: X Tage ohne Aktivität" },
      { title: "Aufgabe im CRM erstellen" },
      { title: "Antwortentwurf vorbereiten" },
      { title: "Vertrieb prüft & versendet" }
    ],
    prerequisites: ["CRM mit klarer Deal-Struktur"],
    risks: ["Zu häufige Follow-ups schaden Kundenbeziehung"],
    typicalIntegrations: ["HubSpot", "Pipedrive"],
    economicNote:
      "Wirkt auf Deal-Rückholung. Ergänzt Lead-Qualifizierung.",
    recommendation:
      "Für Vertriebsteams mit vielen offenen Opportunities.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Wie verhindern wir Spam-Charakter?",
        answer:
          "Regeln definieren maximale Kadenz und werden mit Vertrieb abgestimmt. Kein automatischer Versand ohne Freigabe."
      }
    ],
    relatedProblemSlugs: ["angebote-manuell-erstellen"],
    relatedIntegrationSlugs: ["outlook-hubspot", "gmail-hubspot"],
    leadPrefill: {
      process: "CRM-Follow-ups",
      context: "Follow-ups sollen automatisch geplant und vorbereitet werden."
    }
  },

  {
    slug: "gespraechs-zusammenfassung",
    title: "Gesprächs-Zusammenfassung mit KI",
    seoTitle: "Gesprächs-Zusammenfassungen mit KI · CRM-Notizen automatisch",
    seoDescription:
      "Kunden- und Vertriebsgespräche werden automatisch zusammengefasst und im CRM abgelegt.",
    category: "vertrieb",
    hero: {
      h1: "Gespräche automatisch zusammenfassen",
      sub: "Notizen im CRM entstehen als Nebenprodukt."
    },
    description:
      "Aufzeichnungen (mit Einwilligung) oder Sprachnotizen werden transkribiert, KI erstellt eine strukturierte Zusammenfassung nach Ihrem Schema (Kernthemen, offene Punkte, nächste Schritte) und legt sie im CRM ab.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["sprach_ki", "llm", "api", "workflow_automation"],
    workflow: [
      { title: "Aufzeichnung / Sprachnotiz" },
      { title: "Transkription" },
      { title: "KI-Zusammenfassung" },
      { title: "Übergabe ins CRM" },
      { title: "Kurze menschliche Prüfung" }
    ],
    prerequisites: ["Einwilligung / Rechtssicherheit für Aufzeichnung"],
    risks: ["Datenschutz. Muss sauber geregelt sein"],
    typicalIntegrations: ["HubSpot", "Pipedrive", "Microsoft Teams", "Zoom"],
    economicNote:
      "Vertriebszeit für Doku sinkt spürbar. Konkrete Wirkung nach Piloten belegbar.",
    recommendation:
      "Bei aktivem Außendienst besonders wirkungsvoll.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Muss der Kunde zustimmen?",
        answer:
          "Für Audio-Aufzeichnung ja. Alternativ arbeiten wir mit Sprachnotizen des Vertrieblers nach dem Termin."
      }
    ],
    relatedProblemSlugs: ["mitarbeiter-mit-routineaufgaben-ueberlastet"],
    relatedIntegrationSlugs: ["teams-hubspot"],
    leadPrefill: {
      process: "Gesprächs-Zusammenfassung",
      context:
        "Vertriebs-/Kundengespräche sollen automatisch zusammengefasst werden."
    }
  },

  {
    slug: "dokumenten-klassifizierung",
    title: "Dokumente klassifizieren",
    seoTitle: "Dokumente automatisch klassifizieren · Ablage per KI",
    seoDescription:
      "Eingehende Dokumente werden klassifiziert (Rechnung, Angebot, Vertrag, Nachweis) und in die richtige Ablage sortiert.",
    category: "backoffice",
    hero: {
      h1: "Dokumente automatisch klassifizieren",
      sub: "Ablage entsteht automatisch, konsistent, auffindbar."
    },
    description:
      "OCR liest Dokumente aus, KI klassifiziert nach Typ (Rechnung, Angebot, Vertrag, Lieferschein etc.), extrahiert Metadaten (Datum, Partner, Nummer) und legt strukturiert ab.",
    automationLevel: "sehr_hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["ocr", "llm", "workflow_automation", "regelbasiert"],
    workflow: [
      { title: "Dokument kommt an" },
      { title: "OCR + Klassifizierung" },
      { title: "Metadaten extrahieren" },
      { title: "Automatische Ablage im DMS" }
    ],
    prerequisites: ["DMS oder strukturierte Ablagen"],
    risks: ["Sehr ungewöhnliche Dokumenttypen werden ggf. falsch klassifiziert"],
    typicalIntegrations: ["Microsoft 365 / SharePoint", "DATEV DMS", "Nextcloud"],
    economicNote:
      "Wirkt auf Ablage-Konsistenz und Auffindbarkeit.",
    recommendation:
      "Kombination mit Rechnungs-OCR und Formular-Auswertung empfohlen.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann das mit meinem DMS?",
        answer:
          "Für die meisten gängigen Systeme ja. Wir prüfen die konkrete Anbindung im Vorprojekt."
      }
    ],
    relatedProblemSlugs: ["dokumente-manuell-pruefen"],
    relatedIntegrationSlugs: ["microsoft-365-datev"],
    leadPrefill: {
      process: "Dokumenten-Klassifizierung",
      context: "Eingehende Dokumente sollen automatisch klassifiziert und abgelegt werden."
    }
  },

  {
    slug: "vertragspruefung-ki",
    title: "Vertragsprüfung mit KI",
    seoTitle: "Vertragsprüfung mit KI · Prüf-Regeln und Extraktion",
    seoDescription:
      "Verträge werden mit KI vorstrukturiert und gegen Prüfregeln abgeglichen. Die inhaltliche Entscheidung bleibt beim Menschen.",
    category: "backoffice",
    hero: {
      h1: "Vertragsprüfung mit KI",
      sub: "Kernfakten extrahieren, gegen Prüfregeln vergleichen, klar dokumentieren."
    },
    description:
      "Extraktion von Vertragsparteien, Laufzeiten, Kündigungsfristen, Beträgen, Zahlungsbedingungen. Vergleich mit Prüfregeln. Ampel-Ergebnis für Ihre Prüfer.",
    automationLevel: "teilweise",
    humanControl: "mensch_erforderlich",
    technologies: ["ocr", "llm", "rag", "dokumentenanalyse", "regelbasiert"],
    workflow: [
      { title: "Vertrag als PDF" },
      { title: "OCR + KI-Extraktion" },
      { title: "Regel-Vergleich" },
      { title: "Ampel-Bewertung" },
      { title: "Prüfung durch Fachexperten" }
    ],
    prerequisites: [
      "Formulierte Prüfregeln",
      "Vertragsablage strukturierbar"
    ],
    risks: ["Juristisch relevante Entscheidungen bleiben beim Menschen"],
    typicalIntegrations: ["SharePoint", "DATEV DMS", "eigene Vertragsdatenbank"],
    economicNote:
      "Wirkt auf Prüf-Zeit und Konsistenz.",
    recommendation:
      "Nicht als Ersatz für juristische Prüfung, sondern als strukturierte Vorstufe.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Ersetzt das eine Anwaltskanzlei?",
        answer: "Nein. Die KI strukturiert und markiert, sie ersetzt keine juristische Wertung."
      }
    ],
    relatedProblemSlugs: ["dokumente-manuell-pruefen"],
    relatedIntegrationSlugs: [],
    leadPrefill: {
      process: "Vertragsprüfung mit KI",
      context: "Verträge sollen vor der Prüfung strukturiert vorbereitet werden."
    }
  },

  {
    slug: "datev-belegvorbereitung",
    title: "Belege für DATEV vorbereiten",
    seoTitle: "Belege für DATEV vorbereiten · Kontierung und Übergabe",
    seoDescription:
      "Belegvorbereitung für DATEV: OCR, regelbasierte Kontierung, Freigabe und automatische Übergabe.",
    category: "buchhaltung",
    hero: {
      h1: "Belege für DATEV vorbereiten",
      sub: "Vom Ordner zur DATEV-Übergabe. Strukturiert."
    },
    description:
      "Belege werden gesammelt, per OCR/KI ausgelesen, regelbasiert kontiert, geprüft und über die passenden DATEV-Wege übergeben.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["ocr", "llm", "regelbasiert", "api"],
    workflow: [
      { title: "Beleg wird abgeholt" },
      { title: "OCR + KI extrahieren" },
      { title: "Kontierung via Regeln" },
      { title: "Buchhaltung prüft" },
      { title: "DATEV-Übergabe" }
    ],
    prerequisites: ["DATEV-Umgebung", "Kontenrahmen strukturiert"],
    risks: ["Regeln müssen sauber gepflegt werden"],
    typicalIntegrations: ["DATEV Unternehmen Online", "DATEV Rechnungswesen"],
    economicNote: "Reduziert manuelles Tippen und Nachfragen vom Steuerberater.",
    recommendation:
      "Kombiniert mit Eingangsrechnungen-OCR und Freigabe-Workflow.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Bleibt DATEV führend?",
        answer: "Ja. Wir automatisieren die Vorstufe, nicht DATEV selbst."
      }
    ],
    relatedProblemSlugs: ["datev-prozesse-automatisieren", "rechnungen-manuell-verarbeiten"],
    relatedIntegrationSlugs: ["datev-lexoffice", "datev-microsoft-365", "datev-gmail"],
    leadPrefill: {
      process: "DATEV-Belegvorbereitung",
      context: "Belege sollen strukturiert für DATEV vorbereitet werden."
    }
  },

  {
    slug: "zahlungserinnerung-automatisieren",
    title: "Zahlungserinnerungen automatisieren",
    seoTitle: "Zahlungserinnerungen automatisieren · Mahnwesen strukturiert",
    seoDescription:
      "Automatische Zahlungserinnerungen und Mahn-Vorbereitung mit CRM-/Buchhaltungs-Anbindung.",
    category: "buchhaltung",
    hero: {
      h1: "Zahlungserinnerungen automatisieren",
      sub: "Regelbasierte Erinnerungen, konsistent versendet."
    },
    description:
      "Aus offenen Posten im Buchhaltungssystem werden regelbasierte Erinnerungen gesendet (Stufe 1 freundlich, Stufe 2 formell, Stufe 3 Mahnung). Der Prozess ist im System nachvollziehbar.",
    automationLevel: "hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["workflow_automation", "regelbasiert", "api"],
    workflow: [
      { title: "Offene Posten aus Buchhaltung" },
      { title: "Regel-Prüfung (Fristen, Beträge)" },
      { title: "Automatische Erinnerung / Mahnung" },
      { title: "Historie im CRM/ERP" }
    ],
    prerequisites: ["Buchhaltungssystem mit OPs", "Mahntexte definiert"],
    risks: ["Wichtige Kundenbeziehungen brauchen manuelle Freigabe"],
    typicalIntegrations: ["DATEV", "lexoffice", "sevdesk", "Lexware"],
    economicNote: "Wirkt auf Zahlungseingang und DSO.",
    recommendation: "Erinnerung automatisch, Mahnung optional mit Freigabe.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir Ausnahmen definieren?",
        answer: "Ja. Bestimmte Kunden können vom automatischen Prozess ausgeschlossen werden."
      }
    ],
    relatedProblemSlugs: ["datev-prozesse-automatisieren"],
    relatedIntegrationSlugs: ["datev-lexoffice"],
    leadPrefill: {
      process: "Zahlungserinnerungen",
      context: "Zahlungserinnerungen sollen automatisch versendet werden."
    }
  },

  {
    slug: "berichte-automatisch-erstellen",
    title: "Berichte automatisch erstellen",
    seoTitle: "Berichte automatisch erstellen · Monatsreports mit KI",
    seoDescription:
      "Aus Daten mehrerer Systeme automatisch einen prüfbaren Bericht generieren.",
    category: "backoffice",
    hero: {
      h1: "Berichte automatisch erstellen",
      sub: "Daten aus Systemen ins Template, mit KI-formuliertem Entwurf."
    },
    description:
      "Datenpipeline sammelt Werte aus CRM, ERP, Buchhaltung, Ticket-System. Ein Template wird gefüllt, KI schreibt textliche Zusammenfassung, der Verantwortliche prüft und gibt frei.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "api", "workflow_automation", "individuelle_software"],
    workflow: [
      { title: "Daten ziehen" },
      { title: "Template füllen" },
      { title: "KI-Textentwurf" },
      { title: "Prüfung & Freigabe" }
    ],
    prerequisites: ["Datenquellen zugänglich"],
    risks: ["Datenqualität bestimmt Ergebnisqualität"],
    typicalIntegrations: ["HubSpot", "SAP", "DATEV", "lexoffice"],
    economicNote: "Sinnvoll bei regelmäßigem Reporting mit vielen Datenquellen.",
    recommendation: "Für Monatsreports besonders geeignet.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Bleibt unser Layout bestehen?",
        answer: "Ja, Ihr Layout bleibt. Wir füllen es programmatisch."
      }
    ],
    relatedProblemSlugs: ["berichte-erstellen", "zu-viel-verwaltungsaufwand"],
    relatedIntegrationSlugs: ["sap-hubspot", "microsoft-365-hubspot"],
    leadPrefill: {
      process: "Reporting-Automatisierung",
      context: "Regelmäßige Berichte sollen automatisiert vorbereitet werden."
    }
  },

  {
    slug: "terminvereinbarung-automatisieren",
    title: "Terminvereinbarung automatisieren",
    seoTitle: "Terminvereinbarung automatisieren · Kalender + CRM + KI",
    seoDescription:
      "Terminbuchung mit Kalender-Anbindung, CRM-Sync und optional Sprach-KI.",
    category: "kundenservice",
    hero: {
      h1: "Terminvereinbarung automatisieren",
      sub: "Termine ohne Mail-Ping-Pong, mit CRM-Log."
    },
    description:
      "Termine werden über eine Buchungsoberfläche oder Sprach-KI vereinbart, im Kalender eingetragen und im CRM protokolliert. Reminder-Automatisierung inklusive.",
    automationLevel: "sehr_hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["api", "workflow_automation", "sprach_ki", "regelbasiert"],
    workflow: [
      { title: "Kunde wählt Slot" },
      { title: "Termin im Kalender + CRM" },
      { title: "Bestätigung + Reminder" }
    ],
    prerequisites: ["Kalender (Outlook / Google)", "CRM"],
    risks: ["Kalender-Konflikte müssen sauber definiert sein"],
    typicalIntegrations: ["Calendly", "Cal.com", "Microsoft Bookings"],
    economicNote: "Spart Zeit im Vertrieb und Kundenservice.",
    recommendation: "Guter Schnelltreffer für erste Automatisierung.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir mehrere Termintypen haben?",
        answer: "Ja, jeder Termintyp mit eigenen Regeln (Dauer, Puffer, Verantwortliche)."
      }
    ],
    relatedProblemSlugs: ["terminkoordination-manuell", "telefonannahme-entlasten"],
    relatedIntegrationSlugs: ["calendly-hubspot"],
    leadPrefill: {
      process: "Terminvereinbarung automatisieren",
      context: "Termine sollen ohne Mail-Ping-Pong vereinbart werden."
    }
  },

  {
    slug: "bewerbungen-vorsortieren",
    title: "Bewerbungen vorsortieren",
    seoTitle: "Bewerbungen vorsortieren · Strukturierte Vorstrukturierung mit KI",
    seoDescription:
      "Bewerbungen aus mehreren Quellen zusammenführen, mit Anforderungsprofil abgleichen, transparent vorstrukturieren.",
    category: "hr",
    hero: {
      h1: "Bewerbungen vorsortieren",
      sub: "Klare Vorstruktur, Entscheidung bleibt bei HR."
    },
    description:
      "Bewerbungen werden konsolidiert (Portale, Mail, PDF), mit Anforderungsprofilen verglichen und mit einer transparenten Score-Struktur an HR übergeben. EU-AI-Act-Regeln werden berücksichtigt.",
    automationLevel: "teilweise",
    humanControl: "mensch_erforderlich",
    technologies: ["ocr", "llm", "rag", "workflow_automation"],
    workflow: [
      { title: "Bewerbungen aus allen Quellen" },
      { title: "Struktur-Extraktion" },
      { title: "Vergleich mit Anforderungsprofil" },
      { title: "Score + Erklärung" },
      { title: "Entscheidung bei HR" }
    ],
    prerequisites: ["Anforderungsprofile", "ATS oder Ablagestruktur"],
    risks: ["Personalvorauswahl ist Hochrisiko-KI nach EU AI Act"],
    typicalIntegrations: ["Microsoft 365", "Personio", "SAP SuccessFactors"],
    economicNote: "Wirkt auf Reaktionszeit und Konsistenz.",
    recommendation: "Nur mit dokumentierten Kriterien und menschlicher Entscheidung.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Entscheidet die KI über eine Absage?",
        answer: "Nein. Die Entscheidung ist Aufgabe von HR und Fachabteilung."
      }
    ],
    relatedProblemSlugs: ["bewerbungen-manuell-sichten"],
    relatedIntegrationSlugs: [],
    leadPrefill: {
      process: "Bewerbungen vorsortieren",
      context: "Bewerbungen sollen strukturiert vor-bewertet werden."
    }
  },

  {
    slug: "onboarding-checkliste",
    title: "Onboarding-Automatisierung",
    seoTitle: "Onboarding automatisieren · Checklisten, Zugänge, Wissen",
    seoDescription:
      "Onboarding neuer Mitarbeiter automatisieren: Zugänge, Checklisten, Wissens-Assistent.",
    category: "hr",
    hero: {
      h1: "Onboarding automatisieren",
      sub: "Zugänge, Aufgaben, Wissen. Vom ersten Tag an."
    },
    description:
      "Onboarding-Workflow mit automatischen Zugangs-Anlegungen, Aufgaben-Checklisten, Informationen zum Team, Verweis auf den internen Wissens-Assistenten.",
    automationLevel: "hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["workflow_automation", "rag", "api", "individuelle_software"],
    workflow: [
      { title: "Neuer Mitarbeiter im HR-System" },
      { title: "Zugänge werden angelegt" },
      { title: "Checkliste startet automatisch" },
      { title: "Wissens-Assistent begleitet" }
    ],
    prerequisites: ["HR-System oder Personio", "Zugangs-Provisionierung im Griff"],
    risks: ["Rechte müssen sauber definiert sein"],
    typicalIntegrations: ["Microsoft 365", "Personio", "Slack", "Teams"],
    economicNote: "Wirkt auf Time-to-productivity neuer Mitarbeiter.",
    recommendation: "Sinnvoll ab regelmäßigen Einstellungen.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann das mit Personio?",
        answer: "Ja. Personio bietet APIs, mit denen sich Onboarding-Workflows anstoßen lassen."
      }
    ],
    relatedProblemSlugs: ["wissen-verstreut-im-unternehmen"],
    relatedIntegrationSlugs: ["microsoft-365-hubspot", "slack-hubspot"],
    leadPrefill: {
      process: "Onboarding-Automatisierung",
      context: "Onboarding neuer Mitarbeiter soll strukturierter und schneller werden."
    }
  },

  {
    slug: "interner-wissens-assistent-rag",
    title: "Interner Wissens-Assistent (RAG)",
    seoTitle: "Interner Wissens-Assistent · RAG mit Ihren Dokumenten",
    seoDescription:
      "KI-Assistent, der aus Ihrer eigenen Dokumentation antwortet. Optional lokal betrieben.",
    category: "backoffice",
    hero: {
      h1: "Interner Wissens-Assistent (RAG)",
      sub: "Antworten aus Ihrer Doku, mit Quellen, optional lokal."
    },
    description:
      "Dokumente werden indexiert, KI beantwortet Fragen mit Quellenverweisen. Optional lokal betrieben (Mac Mini, Server), damit keine Firmeninformationen an externe Cloud-Anbieter fließen.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["rag", "llm", "api", "lokale_ki"],
    workflow: [
      { title: "Doku-Quellen anbinden" },
      { title: "Indexierung" },
      { title: "Chat-Oberfläche für Team" },
      { title: "Antworten mit Quellen" }
    ],
    prerequisites: [
      "Strukturierte Dokumentation",
      "Rechte-Modell definiert (optional)"
    ],
    risks: [
      "Halluzinationen ohne RAG",
      "Rechte-Modell muss ins Retrieval eingehen"
    ],
    typicalIntegrations: ["SharePoint", "Confluence", "Nextcloud", "Google Drive"],
    economicNote: "Wirkt auf Suchzeit und Wissensverfügbarkeit.",
    recommendation:
      "Optional lokale KI für sensible Daten · KBS setzt beides um.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Läuft das lokal?",
        answer: "Optional ja, auf Mac Mini oder dediziertem Server."
      }
    ],
    relatedProblemSlugs: ["wissen-verstreut-im-unternehmen", "mitarbeiter-mit-routineaufgaben-ueberlastet"],
    relatedIntegrationSlugs: ["microsoft-365-hubspot", "teams-hubspot"],
    leadPrefill: {
      process: "Interner Wissens-Assistent (RAG)",
      context: "Interner Assistent auf Basis eigener Dokumentation, optional lokal."
    }
  },

  {
    slug: "faq-chatbot-website",
    title: "FAQ-Chatbot auf der Website",
    seoTitle: "FAQ-Chatbot auf der Website · Standardfragen 24/7 beantworten",
    seoDescription:
      "KI-Chatbot auf Ihrer Website, der aus FAQ und Dokumentation antwortet und Kontaktdaten qualifiziert.",
    category: "kundenservice",
    hero: {
      h1: "FAQ-Chatbot auf der Website",
      sub: "24/7 Antworten und qualifizierte Leads."
    },
    description:
      "Chatbot auf Basis Ihrer FAQ / Dokumentation, mit Fallback-Weg zu Ihrem Team. Optional Terminbuchung integriert.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "rag", "api", "workflow_automation"],
    workflow: [
      { title: "Besucher stellt Frage" },
      { title: "Antwort aus FAQ/Doku" },
      { title: "Bei Unsicherheit: Kontakt / Termin" },
      { title: "Übergabe ins CRM" }
    ],
    prerequisites: ["Strukturierte FAQ / Doku"],
    risks: ["Falsche Antworten bei fehlender Doku"],
    typicalIntegrations: ["HubSpot", "Calendly", "Cal.com"],
    economicNote: "Wirkt auf Kundenanfragen 24/7.",
    recommendation: "Erst gute Doku, dann Chatbot.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Kann der Chatbot Termine buchen?",
        answer: "Ja, mit Anbindung an Calendly, Cal.com oder Microsoft Bookings."
      }
    ],
    relatedProblemSlugs: ["zu-viele-kundenanfragen"],
    relatedIntegrationSlugs: ["calendly-hubspot"],
    leadPrefill: {
      process: "FAQ-Chatbot Website",
      context: "Chatbot auf der Website mit Antwort aus FAQ und Terminbuchung."
    }
  },

  {
    slug: "telefon-voicebot",
    title: "Sprach-KI für die Telefonannahme",
    seoTitle: "Sprach-KI Telefonannahme · Anrufe vorqualifizieren und Termine buchen",
    seoDescription:
      "Voicebot, der Standardanliegen erkennt, Termine bucht und relevante Fälle weiterleitet.",
    category: "kundenservice",
    hero: {
      h1: "Sprach-KI Telefonannahme",
      sub: "Anrufe entgegennehmen, verstehen, richtig weiterleiten."
    },
    description:
      "Sprach-KI nimmt Anrufe entgegen, erkennt das Anliegen und kann Standardauskünfte geben, Termine buchen und relevante Anrufe an einen Mitarbeiter durchstellen.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["sprach_ki", "llm", "api", "workflow_automation"],
    workflow: [
      { title: "Anruf eingeht" },
      { title: "KI erkennt Anliegen" },
      { title: "Auskunft / Termin / Weiterleitung" },
      { title: "CRM-Log" }
    ],
    prerequisites: ["Telefonie-Setup mit SIP-Trunk oder VoIP"],
    risks: ["Akzeptanz beim Anrufer variiert"],
    typicalIntegrations: ["Twilio", "Sipgate", "3CX"],
    economicNote: "Wirkt auf Unterbrechungen und verlorene Anrufe.",
    recommendation: "Transparent kommunizieren, dass mit KI gesprochen wird.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können Anrufer immer zu Menschen wechseln?",
        answer: "Ja, das ist Standardregel."
      }
    ],
    relatedProblemSlugs: ["telefonannahme-entlasten"],
    relatedIntegrationSlugs: ["calendly-hubspot"],
    leadPrefill: {
      process: "Sprach-KI Telefonannahme",
      context: "Telefonannahme soll durch KI entlastet werden."
    }
  },

  {
    slug: "ticket-triage-kundenservice",
    title: "Ticket-Triage Kundenservice",
    seoTitle: "Ticket-Triage · Automatische Priorisierung im Service-Desk",
    seoDescription:
      "Eingehende Tickets werden klassifiziert, priorisiert und der richtigen Queue zugeordnet.",
    category: "kundenservice",
    hero: {
      h1: "Ticket-Triage automatisieren",
      sub: "Weniger Zeit bis zur ersten Antwort."
    },
    description:
      "Eingehende Tickets werden mit KI klassifiziert, priorisiert und der richtigen Queue oder Person zugeordnet. Reporting nach Themen ist Nebenprodukt.",
    automationLevel: "sehr_hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["llm", "workflow_automation", "api", "regelbasiert"],
    workflow: [
      { title: "Ticket kommt an" },
      { title: "Klassifizierung + Priorität" },
      { title: "Zuweisung an Queue/Person" }
    ],
    prerequisites: ["Ticket-System"],
    risks: ["Priorisierung muss überwacht werden"],
    typicalIntegrations: ["Zendesk", "HubSpot Service Hub", "Freshdesk"],
    economicNote: "Wirkt auf Reaktionszeit im Kundenservice.",
    recommendation: "Ergänzt Antwortvorschläge sehr gut.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir Priorisierungs-Regeln anpassen?",
        answer: "Ja, in einem Regelwerk pflegbar."
      }
    ],
    relatedProblemSlugs: ["zu-viele-kundenanfragen", "reklamationen-bearbeiten"],
    relatedIntegrationSlugs: ["outlook-hubspot", "gmail-hubspot"],
    leadPrefill: {
      process: "Ticket-Triage",
      context: "Tickets im Kundenservice sollen automatisch klassifiziert werden."
    }
  },

  {
    slug: "antwortvorschlaege-servicedesk",
    title: "Antwortvorschläge im Service-Desk",
    seoTitle: "Antwortvorschläge Service-Desk · Agent-Assist mit RAG",
    seoDescription:
      "KI-Antwortvorschläge für Service-Agents, auf Basis Ihrer Wissensbasis.",
    category: "kundenservice",
    hero: {
      h1: "Antwortvorschläge für Service-Agents",
      sub: "Konsistente, schnelle Antworten aus Ihrer Wissensbasis."
    },
    description:
      "Der Service-Agent bekommt einen Antwortvorschlag mit Quellen. Er prüft, passt an, versendet.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "rag", "workflow_automation"],
    workflow: [
      { title: "Ticket geöffnet" },
      { title: "KI liest Kontext" },
      { title: "Antwortvorschlag + Quelle" },
      { title: "Agent versendet" }
    ],
    prerequisites: ["Ticket-System", "Wissensbasis"],
    risks: ["Antworten redaktionell prüfen"],
    typicalIntegrations: ["Zendesk", "HubSpot Service Hub"],
    economicNote: "Wirkt auf Bearbeitungszeit pro Ticket.",
    recommendation: "Kombiniert mit Ticket-Triage.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Wird der Agent überflüssig?",
        answer: "Nein. Er wird schneller und konsistenter."
      }
    ],
    relatedProblemSlugs: ["zu-viele-kundenanfragen", "reklamationen-bearbeiten"],
    relatedIntegrationSlugs: ["gmail-hubspot", "outlook-hubspot"],
    leadPrefill: {
      process: "Antwortvorschläge Service-Desk",
      context: "Service-Agents sollen KI-Antwortvorschläge erhalten."
    }
  },

  {
    slug: "whatsapp-anfragen-strukturieren",
    title: "WhatsApp-Anfragen strukturieren",
    seoTitle: "WhatsApp-Anfragen strukturieren · Nachrichten ins CRM",
    seoDescription:
      "WhatsApp-Nachrichten werden strukturiert, Bedarfe extrahiert und ins CRM übergeben.",
    category: "kundenservice",
    hero: {
      h1: "WhatsApp-Anfragen strukturieren",
      sub: "Text, Bild, Sprache. Strukturiert ins CRM."
    },
    description:
      "Über die WhatsApp-Business-API werden Nachrichten verarbeitet, KI extrahiert Kundenkontext, Bilder und Sprachnotizen werden verarbeitet. Übergabe ins CRM.",
    automationLevel: "hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["llm", "sprach_ki", "api", "workflow_automation"],
    workflow: [
      { title: "Nachricht kommt an" },
      { title: "Kunde zuordnen" },
      { title: "Bedarf extrahieren" },
      { title: "Ticket/Deal im CRM anlegen" }
    ],
    prerequisites: ["WhatsApp-Business-API-Setup"],
    risks: ["Datenschutz beachten"],
    typicalIntegrations: ["HubSpot", "Pipedrive"],
    economicNote: "Wirkt auf Antwortzeit und Team-Transparenz.",
    recommendation: "Für WhatsApp-lastige Branchen (Handwerk, Bau, Dienstleistung).",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können mehrere Mitarbeiter antworten?",
        answer: "Ja, das ist einer der Kern-Nutzen der WhatsApp-Business-API."
      }
    ],
    relatedProblemSlugs: ["whatsapp-anfragen-verwalten"],
    relatedIntegrationSlugs: ["whatsapp-hubspot", "whatsapp-crm-generisch"],
    leadPrefill: {
      process: "WhatsApp-Anfragen strukturieren",
      context: "WhatsApp-Kundenkommunikation soll strukturiert ins CRM."
    }
  },

  {
    slug: "baustellenberichte-strukturieren",
    title: "Baustellenberichte strukturieren",
    seoTitle: "Baustellenberichte strukturieren · Tages- und Wochenberichte",
    seoDescription:
      "Fotos, Sprachnotizen und Formularanteile werden zu strukturierten Baustellenberichten.",
    category: "handwerk_bau",
    hero: {
      h1: "Baustellenberichte automatisch strukturieren",
      sub: "Tages- und Wochenberichte ohne Abendarbeit."
    },
    description:
      "Bauleiter oder Poliere schicken Fotos, Sprachnotizen und kurze Textbausteine · KI baut daraus einen strukturierten Bericht. Übergabe ins ERP oder DMS.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "sprach_ki", "dokumentenanalyse", "workflow_automation"],
    workflow: [
      { title: "Eingang aus dem Feld" },
      { title: "KI strukturiert" },
      { title: "Bericht-Entwurf" },
      { title: "Freigabe & Ablage" }
    ],
    prerequisites: ["Mobile Erfassungswege (WhatsApp / App)"],
    risks: ["Datenschutz bei Bildern beachten"],
    typicalIntegrations: ["Baufaktura", "Handwerk-Office"],
    economicNote: "Bauleitung gewinnt Zeit am Abend.",
    recommendation: "In Kombination mit WhatsApp-Struktur sehr effizient.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können die Berichte in unser ERP?",
        answer: "Ja, wo APIs oder Import-Wege vorhanden sind."
      }
    ],
    relatedProblemSlugs: ["whatsapp-anfragen-verwalten", "berichte-erstellen"],
    relatedIntegrationSlugs: ["whatsapp-crm-generisch", "datev-baufaktura"],
    leadPrefill: {
      process: "Baustellenberichte strukturieren",
      context: "Berichte aus dem Feld sollen strukturiert werden."
    }
  },

  {
    slug: "materiallisten-generieren",
    title: "Materiallisten generieren",
    seoTitle: "Materiallisten generieren · Aus Anfragen und Aufmaß",
    seoDescription:
      "Materiallisten aus Aufmaß, Angebot oder Baustellenbericht generieren.",
    category: "handwerk_bau",
    hero: {
      h1: "Materiallisten automatisch generieren",
      sub: "Aus Aufmaß, Angebot oder Baubericht."
    },
    description:
      "KI leitet aus Aufmaß und Angebot Materiallisten ab, mit Abgleich gegen Preise und Lieferanten.",
    automationLevel: "teilweise",
    humanControl: "freigabe_empfohlen",
    technologies: ["llm", "workflow_automation", "api"],
    workflow: [
      { title: "Aufmaß / Angebot / Bericht" },
      { title: "KI erstellt Materialliste" },
      { title: "Abgleich mit Preisen" },
      { title: "Freigabe & Bestellung" }
    ],
    prerequisites: ["Produkt-/Materialkatalog"],
    risks: ["Sonderfälle brauchen Prüfung"],
    typicalIntegrations: ["Baufaktura", "Handwerk-Office"],
    economicNote: "Reduziert Aufwand vor jedem Auftrag.",
    recommendation: "Für Betriebe mit standardisierten Aufträgen.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Was, wenn wir keinen digitalen Katalog haben?",
        answer: "Dann bauen wir einen leichten Materialstamm parallel auf."
      }
    ],
    relatedProblemSlugs: ["angebote-manuell-erstellen"],
    relatedIntegrationSlugs: ["datev-baufaktura"],
    leadPrefill: {
      process: "Materiallisten generieren",
      context: "Materiallisten sollen automatisiert erstellt werden."
    }
  },

  {
    slug: "protokolle-aus-meetings",
    title: "Meeting-Protokolle automatisch",
    seoTitle: "Meeting-Protokolle automatisch · Zusammenfassung + Aufgaben",
    seoDescription:
      "Aus Meetings entstehen strukturierte Protokolle und Aufgaben. In Teams, Zoom oder Meet.",
    category: "backoffice",
    hero: {
      h1: "Meeting-Protokolle automatisch",
      sub: "Zusammenfassung, Entscheidungen, offene Punkte."
    },
    description:
      "Meetings werden aufgezeichnet (mit Einwilligung), transkribiert und in ein strukturiertes Protokoll verwandelt: Zusammenfassung, Entscheidungen, offene Punkte, Aufgaben.",
    automationLevel: "sehr_hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["sprach_ki", "llm", "workflow_automation", "api"],
    workflow: [
      { title: "Meeting aufzeichnen (Einwilligung)" },
      { title: "Transkription" },
      { title: "Strukturiertes Protokoll" },
      { title: "Ablage / E-Mail-Versand" }
    ],
    prerequisites: ["Einwilligung / Betriebsvereinbarung"],
    risks: ["Datenschutz muss geklärt sein"],
    typicalIntegrations: ["Microsoft Teams", "Zoom", "Google Meet"],
    economicNote: "Wirkt auf jede Person, die an Meetings teilnimmt.",
    recommendation: "Häufig einer der Quick-Wins.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Braucht das eine Betriebsvereinbarung?",
        answer:
          "In vielen Unternehmen ja. Wir helfen bei der Formulierung."
      }
    ],
    relatedProblemSlugs: ["mitarbeiter-mit-routineaufgaben-ueberlastet", "berichte-erstellen"],
    relatedIntegrationSlugs: ["teams-hubspot"],
    leadPrefill: {
      process: "Meeting-Protokolle automatisch",
      context: "Meetings sollen automatisch protokolliert werden."
    }
  },

  {
    slug: "formulare-auswerten-ocr",
    title: "Formulare per OCR auswerten",
    seoTitle: "Formulare per OCR auswerten · Papier und PDFs strukturieren",
    seoDescription:
      "Formulare aus Papier oder PDF werden per OCR ausgelesen und in Zielsysteme übergeben.",
    category: "backoffice",
    hero: {
      h1: "Formulare per OCR auswerten",
      sub: "Papier und PDFs werden zu strukturierten Daten."
    },
    description:
      "Feste Formulare (Anmeldungen, Bestellungen, Nachweise) werden per OCR und KI ausgelesen und automatisch in Ihre Systeme übergeben.",
    automationLevel: "hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["ocr", "llm", "workflow_automation", "api"],
    workflow: [
      { title: "Formular einlesen (Scan / PDF)" },
      { title: "OCR + Extraktion" },
      { title: "Plausibilitäts-Prüfung" },
      { title: "Übergabe ins Zielsystem" }
    ],
    prerequisites: ["Klar definiertes Formular-Layout"],
    risks: ["Formulare mit sehr variabler Struktur brauchen mehr Aufwand"],
    typicalIntegrations: ["Microsoft 365", "SharePoint", "SAP", "eigene DB"],
    economicNote: "Wirkt am stärksten bei hohem Formularaufkommen.",
    recommendation: "Guter Nachfolger für 'Datenerfassung digitalisieren'.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Was passiert bei unklaren Angaben?",
        answer: "Der Fall wird zur manuellen Prüfung gemeldet."
      }
    ],
    relatedProblemSlugs: ["manuelle-datenerfassung", "excel-ersetzen"],
    relatedIntegrationSlugs: [],
    leadPrefill: {
      process: "Formulare per OCR",
      context: "Formulare sollen strukturiert eingelesen werden."
    }
  },

  {
    slug: "eingangspost-digitalisieren",
    title: "Eingangspost digitalisieren",
    seoTitle: "Eingangspost digitalisieren · Scans mit KI verarbeiten",
    seoDescription:
      "Postscans werden erkannt, klassifiziert und an die richtigen Empfänger geleitet.",
    category: "backoffice",
    hero: {
      h1: "Eingangspost digitalisieren",
      sub: "Papier ins richtige Postfach. Automatisch."
    },
    description:
      "Postscans werden mit KI klassifiziert (Rechnung, Vertrag, Behörde, Werbung) und an die richtigen Empfänger oder Ablagen weitergeleitet.",
    automationLevel: "hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["ocr", "llm", "workflow_automation"],
    workflow: [
      { title: "Post wird gescannt" },
      { title: "OCR + Klassifizierung" },
      { title: "Weiterleitung an Empfänger" },
      { title: "Ablage im DMS" }
    ],
    prerequisites: ["Scan-Prozess", "DMS oder strukturierte Ablage"],
    risks: ["Fehl-Klassifizierung bei ungewöhnlicher Post"],
    typicalIntegrations: ["Microsoft 365", "SharePoint", "DATEV DMS"],
    economicNote: "Wirkt auf Durchlaufzeit und Post-Handling.",
    recommendation: "In Kombination mit Dokumenten-Klassifizierung sinnvoll.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Wer scannt?",
        answer: "Wir integrieren mit bestehenden Multifunktionsgeräten oder Scan-Diensten."
      }
    ],
    relatedProblemSlugs: ["zu-viel-verwaltungsaufwand", "backoffice-automatisieren"],
    relatedIntegrationSlugs: ["microsoft-365-datev"],
    leadPrefill: {
      process: "Eingangspost digitalisieren",
      context: "Postscans sollen klassifiziert und weitergeleitet werden."
    }
  },

  {
    slug: "crm-datenpflege-anreichern",
    title: "CRM-Datenpflege und -Anreicherung",
    seoTitle: "CRM-Datenpflege · Anreicherung, Dubletten, Konsistenz",
    seoDescription:
      "Bestehende CRM-Daten automatisch anreichern, Dubletten erkennen, Konsistenz sichern.",
    category: "it_datenpflege",
    hero: {
      h1: "CRM-Datenpflege",
      sub: "Anreicherung, Dubletten-Erkennung, Konsistenz."
    },
    description:
      "CRM-Daten werden mit öffentlich verfügbaren Firmenangaben angereichert (Branche, Größe, Website), Dubletten werden erkannt, Konsistenz überwacht.",
    automationLevel: "hoch",
    humanControl: "freigabe_empfohlen",
    technologies: ["api", "llm", "workflow_automation"],
    workflow: [
      { title: "Neuer / bestehender Datensatz" },
      { title: "Anreicherung aus Firmendatenbanken" },
      { title: "Dubletten-Prüfung" },
      { title: "Freigabe & Merge" }
    ],
    prerequisites: ["CRM-Zugang", "Datenschutz-Bewertung"],
    risks: ["Anreicherungs-Quellen prüfen"],
    typicalIntegrations: ["HubSpot", "Pipedrive"],
    economicNote: "Wirkt auf Datenqualität und Vertriebs-Effizienz.",
    recommendation: "Für Vertriebs-lastige CRMs sinnvoll.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Welche Datenquellen werden genutzt?",
        answer: "Öffentliche Firmenregister, Websites, ggf. kommerzielle Provider."
      }
    ],
    relatedProblemSlugs: ["doppelte-dateneingabe", "excel-ersetzen"],
    relatedIntegrationSlugs: ["datev-hubspot", "lexware-hubspot"],
    leadPrefill: {
      process: "CRM-Datenpflege",
      context: "CRM-Daten sollen strukturiert angereichert werden."
    }
  },

  {
    slug: "workflow-dokumenten-freigabe",
    title: "Dokumenten-Freigabe-Workflow",
    seoTitle: "Dokumenten-Freigabe-Workflow · Digital, mit Vertretung und Historie",
    seoDescription:
      "Digitaler Freigabe-Workflow für Dokumente jeder Art. Ohne Mail-Ping-Pong.",
    category: "backoffice",
    hero: {
      h1: "Dokumenten-Freigabe-Workflow",
      sub: "Digital, mit Vertretung und Historie."
    },
    description:
      "Freigabe-Prozesse für Dokumente jeder Art (Rechnungen, Verträge, Angebote, Bestellungen) mit regelbasierten Zuweisungen, Vertretung, Erinnerungen, Historie.",
    automationLevel: "hoch",
    humanControl: "voll_automatisierbar",
    technologies: ["workflow_automation", "regelbasiert", "api", "individuelle_software"],
    workflow: [
      { title: "Dokument braucht Freigabe" },
      { title: "Regelbasierte Zuweisung" },
      { title: "Freigabe / Rückfrage / Ablehnung" },
      { title: "Historie im DMS" }
    ],
    prerequisites: ["Definierte Freigabe-Regeln"],
    risks: ["Regelwerk muss gepflegt werden"],
    typicalIntegrations: ["Microsoft 365 / SharePoint", "DATEV", "DMS"],
    economicNote: "Wirkt auf Durchlaufzeit und Nachvollziehbarkeit.",
    recommendation: "In Kombination mit Dokumenten-Klassifizierung und Rechnungs-OCR.",
    dataStatus: "wahrscheinlich",
    lastChecked: CHECK,
    faq: [
      {
        question: "Können wir das mit unserem DMS verbinden?",
        answer: "In der Regel ja, wir prüfen die konkreten Möglichkeiten im Vorprojekt."
      }
    ],
    relatedProblemSlugs: ["zu-viel-verwaltungsaufwand", "backoffice-automatisieren"],
    relatedIntegrationSlugs: ["microsoft-365-datev", "microsoft-365-hubspot"],
    leadPrefill: {
      process: "Dokumenten-Freigabe-Workflow",
      context: "Freigabe-Prozesse sollen digital abgebildet werden."
    }
  }
];

export function findAutomation(slug: string) {
  return AUTOMATIONS.find((a) => a.slug === slug);
}
