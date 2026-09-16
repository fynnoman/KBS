import type { Problem } from "./types";

// 20 Problemseiten. Zusätzlich zu den 15 aus dem Brief
// wurden 5 typische Mittelstandsprobleme ergänzt (Bewerbungen,
// verstreutes Wissen, Reklamationen, Berichte, Terminkoordination).

export const PROBLEMS: Problem[] = [
  {
    slug: "emails-manuell-beantworten",
    title: "E-Mails manuell beantworten",
    seoTitle: "E-Mails manuell beantworten · Prozess mit KI automatisieren",
    seoDescription:
      "Wenn Mitarbeiter täglich Standard-Anfragen per E-Mail beantworten, entstehen Verzögerungen und Medienbrüche. So automatisieren Sie den Prozess mit KI.",
    category: "kommunikation",
    hero: {
      h1: "Ihre Mitarbeiter beantworten täglich dutzende E-Mails von Hand?",
      sub: "Wir automatisieren E-Mail-Bearbeitung mit KI, Klassifizierung und Anbindung an Ihre bestehenden Systeme. Ohne Ihr Postfach zu ersetzen."
    },
    problemStatement:
      "In vielen Mittelstandsbetrieben landet ein Großteil der Kundenkommunikation ungefiltert im Postfach eines oder weniger Mitarbeiter. Anfragen werden manuell gelesen, kategorisiert, an das richtige Team weitergeleitet und beantwortet. Dabei entstehen Rückstände, Antworten dauern länger als nötig, und Informationen landen nicht automatisch im CRM oder ERP.",
    symptoms: [
      "Standard-Anfragen wiederholen sich täglich",
      "E-Mails werden manuell weitergeleitet",
      "Antworten sind je nach Mitarbeiter unterschiedlich",
      "Wichtige Kundeninformationen bleiben im Postfach hängen",
      "Neue Anfragen werden übersehen oder liegen bleiben",
      "Bei Urlaub oder Krankheit stockt die Kommunikation"
    ],
    causes: [
      "Fehlende Regeln, welche Anfrage an wen geht",
      "Postfach ist entkoppelt von CRM / ERP",
      "Kein Templating oder Wissens-Repository",
      "Antworten hängen an einzelnen Personen"
    ],
    risks: [
      "Verzögerte Reaktionszeiten kosten Aufträge",
      "Kundendaten liegen in E-Mails statt in Systemen",
      "Compliance- und Nachverfolgbarkeit leiden",
      "Skalierung ist nur über zusätzliches Personal möglich"
    ],
    solutionsIntro:
      "Wir analysieren Ihren Posteingang, definieren wiederkehrende Anfragetypen und bauen eine Automatisierung, die klassifiziert, extrahiert, entwirft und an Ihr CRM oder ERP übergibt. Die finale Freigabe bleibt bei Ihrem Team.",
    technologies: ["llm", "rag", "api", "workflow_automation", "regelbasiert"],
    beforeWorkflow: [
      { title: "E-Mail kommt an" },
      { title: "Mitarbeiter liest & prüft" },
      { title: "Absender im CRM/ERP suchen" },
      { title: "Inhalt in Systeme kopieren" },
      { title: "Antwort formulieren" },
      { title: "Manuell versenden" }
    ],
    afterWorkflow: [
      { title: "E-Mail kommt an" },
      { title: "KI klassifiziert Anliegen & Priorität" },
      { title: "Relevante Daten werden extrahiert" },
      { title: "CRM/ERP wird aktualisiert" },
      { title: "Antwortentwurf wird generiert" },
      { title: "Mitarbeiter gibt frei & versendet" }
    ],
    keepExisting:
      "Postfach, Signaturen und Antwort-Templates bleiben unverändert. Die Automatisierung setzt entweder direkt im Mail-Server (Microsoft 365, Google Workspace) oder als vorgelagerte Verarbeitung an.",
    worthWhen: [
      "Mehr als 30 wiederkehrende Anfragen pro Tag",
      "Klar wiederkehrende Anliegen (Preise, Status, Termine, Standardauskünfte)",
      "Ein CRM oder ERP existiert bereits",
      "Antwortqualität ist heute personenabhängig"
    ],
    costsNote:
      "Aufwand hängt von Anfragevolumen, Anzahl der Kategorien und Tiefe der Integration ab. Reine Klassifizierung ist deutlich schlanker als vollständige Antwort-Automatisierung mit CRM-Sync.",
    faq: [
      {
        question: "Werden E-Mails automatisch versendet?",
        answer:
          "In der Regel nicht. Für die meisten Prozesse empfehlen wir einen Freigabe-Schritt: die KI erstellt einen Entwurf, der Mitarbeiter prüft und versendet."
      },
      {
        question: "Funktioniert das mit Microsoft 365 und Google Workspace?",
        answer:
          "Ja. Beide Plattformen bieten APIs, mit denen sich E-Mails lesen, kategorisieren und Antwortentwürfe erstellen lassen."
      },
      {
        question: "Was passiert mit sensiblen Kundendaten?",
        answer:
          "Wir prüfen im Vorfeld, welche Daten verarbeitet werden. Für sensible Bereiche ist eine lokale KI-Installation möglich, damit keine Inhalte an externe Cloud-Anbieter fließen."
      }
    ],
    relatedAutomationSlugs: [
      "email-mit-ki-beantworten",
      "email-klassifizieren-weiterleiten",
      "antwortvorschlaege-servicedesk"
    ],
    relatedIntegrationSlugs: ["gmail-hubspot", "outlook-hubspot", "microsoft-365-hubspot"],
    leadPrefill: {
      process: "E-Mail-Bearbeitung",
      context:
        "Aktuell werden Kundenanfragen manuell im Postfach bearbeitet, ohne automatische Übergabe an CRM/ERP."
    }
  },

  {
    slug: "angebote-manuell-erstellen",
    title: "Angebote manuell erstellen",
    seoTitle: "Angebote manuell erstellen · Automatisierung mit KI & CRM",
    seoDescription:
      "Angebote aus E-Mail-Anfragen zusammenstellen kostet Zeit und Aufmerksamkeit. So bauen wir eine KI-gestützte Angebotserstellung mit Anbindung an Ihr CRM oder ERP.",
    category: "vertrieb",
    hero: {
      h1: "Angebote werden noch von Hand aus jeder Anfrage zusammengestellt?",
      sub: "Wir kombinieren KI, Vorlagen und Ihr CRM oder ERP, damit Angebote in Sekunden vorbereitet sind. Prüf- und anpassbar durch Ihr Team."
    },
    problemStatement:
      "Angebote entstehen häufig in Word oder Excel, mit manueller Übernahme von Kundendaten aus E-Mails, Preisen aus Preislisten und Konfigurationen aus Notizen. Das kostet pro Angebot 15 bis 60 Minuten Aufmerksamkeit, ist fehleranfällig und bindet Vertriebskapazität, die für Kundenkommunikation fehlt.",
    symptoms: [
      "Angebote werden aus Word-Vorlagen kopiert",
      "Kundendaten werden per Hand aus Mails übertragen",
      "Preise werden in Excel nachgeschlagen",
      "Frühere Angebote werden dupliziert und angepasst",
      "Version 3, Version 4, Version 5 desselben Angebots im Ordner",
      "Angebote werden nicht im CRM erfasst"
    ],
    causes: [
      "Keine zentrale Datenbasis für Produkte / Leistungen / Preise",
      "CRM und Angebots-Vorlage sind nicht verbunden",
      "Konfigurations-Logik lebt in Köpfen einzelner Mitarbeiter",
      "Kein Prozess für Freigabe und Nachverfolgung"
    ],
    risks: [
      "Fehler in Preisen, Mengen, Rabatten",
      "Angebote gehen zu spät raus · Auftrag geht verloren",
      "Vertrieb ist mit Formatieren beschäftigt statt mit Verkaufen",
      "Keine Auswertung, welche Angebote gewinnen oder verlieren"
    ],
    solutionsIntro:
      "Wir bauen einen Prozess, in dem eine Anfrage per Mail, Web-Formular oder CRM automatisch in einen Angebotsentwurf überführt wird. Die KI extrahiert Bedarf, gleicht Produkte/Leistungen ab und erstellt ein prüfbares PDF oder CRM-Angebot. Der Vertrieb entscheidet, prüft und versendet.",
    technologies: [
      "llm",
      "rag",
      "api",
      "workflow_automation",
      "individuelle_software"
    ],
    beforeWorkflow: [
      { title: "Anfrage per E-Mail" },
      { title: "Vertrieb liest & interpretiert" },
      { title: "Kundendaten manuell übernehmen" },
      { title: "Preise / Produkte nachschlagen" },
      { title: "Word-Vorlage ausfüllen" },
      { title: "Als PDF exportieren & senden" }
    ],
    afterWorkflow: [
      { title: "Anfrage kommt an" },
      { title: "KI erkennt Bedarf & Kunde" },
      { title: "Produkte/Leistungen werden vorgeschlagen" },
      { title: "Angebotsentwurf im CRM oder als PDF" },
      { title: "Vertrieb prüft & passt an" },
      { title: "Versand mit Tracking" }
    ],
    keepExisting:
      "Ihre Preislogik, Ihr CI-konformes Angebots-Layout und Ihr CRM bleiben. Wir setzen die Automatisierung darauf auf.",
    worthWhen: [
      "Mehr als 20 Angebote pro Woche",
      "Wiederkehrende Produkte/Leistungen mit klarem Preisschema",
      "Angebote sind heute im Vertrieb ein Zeitfresser",
      "Angebote werden aktuell nicht sauber im CRM erfasst"
    ],
    costsNote:
      "Der Aufwand hängt stark davon ab, wie komplex Ihre Produkt-/Preislogik ist und ob Angebote in einem CRM (z.B. HubSpot, Pipedrive) oder aus einem ERP heraus erzeugt werden sollen.",
    faq: [
      {
        question: "Können Preise dynamisch berechnet werden?",
        answer:
          "Ja, sofern die Preislogik in einem Regelwerk oder in einem System abgebildet ist. Für rein individuelle Preisverhandlungen bleibt der Mensch der Entscheider."
      },
      {
        question: "Können bestehende Word-/PDF-Vorlagen weiterverwendet werden?",
        answer:
          "Ja. Wir behalten Ihr Angebots-Layout in der Regel bei und füllen es programmatisch. Bzw. wir generieren direkt CRM-Angebote in HubSpot oder Pipedrive."
      }
    ],
    relatedAutomationSlugs: [
      "angebote-aus-anfragen-generieren",
      "leads-qualifizieren",
      "crm-follow-ups"
    ],
    relatedIntegrationSlugs: ["outlook-hubspot", "gmail-pipedrive", "lexware-hubspot"],
    leadPrefill: {
      process: "Angebotserstellung",
      context:
        "Angebote werden heute manuell aus Anfragen erstellt, ohne durchgängige Verbindung zu CRM/ERP."
    }
  },

  {
    slug: "rechnungen-manuell-verarbeiten",
    title: "Rechnungen manuell verarbeiten",
    seoTitle: "Rechnungen manuell verarbeiten · Eingangsrechnungen automatisieren",
    seoDescription:
      "Eingangsrechnungen prüfen, kontieren und weiterleiten kostet in vielen Betrieben mehrere Stunden pro Woche. So digitalisieren wir den Prozess.",
    category: "buchhaltung",
    hero: {
      h1: "Eingangsrechnungen laufen bei Ihnen noch per E-Mail und Papier?",
      sub: "Wir bauen einen automatisierten Rechnungseingang mit OCR, KI-gestützter Prüfung und Übergabe an DATEV, lexoffice, sevdesk oder Ihre Buchhaltung."
    },
    problemStatement:
      "Eingangsrechnungen kommen als PDF im Postfach, als Papier in der Mappe oder als Datei im Netzlaufwerk. Sie werden manuell geprüft, kontiert, an Verantwortliche weitergeleitet, freigegeben und dann an die Buchhaltung übertragen. Jeder Schritt kostet Zeit, jeder Medienbruch birgt Fehler.",
    symptoms: [
      "PDFs werden ausgedruckt und abgezeichnet",
      "Kontierung wird per Hand auf die Rechnung geschrieben",
      "Freigaben laufen per Mail hin und her",
      "Rechnungsdaten werden in DATEV/lexoffice getippt",
      "Zahlungsfristen werden übersehen",
      "Skonto verfällt regelmäßig"
    ],
    causes: [
      "Keine strukturierten Daten aus PDF-Rechnungen",
      "Kein digitaler Freigabe-Workflow",
      "Keine Anbindung zwischen Postfach und Buchhaltung",
      "Papierprozesse als Standardweg akzeptiert"
    ],
    risks: [
      "Doppelzahlungen und verpasstes Skonto",
      "Zeitverlust in Buchhaltung und Fachabteilung",
      "Fehlende Nachvollziehbarkeit bei Prüfungen",
      "Steuerberater arbeitet mit veralteten Daten"
    ],
    solutionsIntro:
      "Wir kombinieren OCR und KI, um Rechnungen strukturiert auszulesen (Rechnungsnummer, Betrag, USt., Lieferant, Positionen). Ein digitaler Freigabe-Workflow leitet an den richtigen Verantwortlichen, die freigegebenen Belege gehen automatisch nach DATEV, lexoffice oder sevdesk.",
    technologies: [
      "ocr",
      "llm",
      "workflow_automation",
      "api",
      "regelbasiert"
    ],
    beforeWorkflow: [
      { title: "Rechnung kommt per E-Mail" },
      { title: "Ausdrucken, ablegen" },
      { title: "Manuell prüfen" },
      { title: "Freigabe per Mail einholen" },
      { title: "Kontierung eintragen" },
      { title: "Manuell in DATEV/lexoffice tippen" }
    ],
    afterWorkflow: [
      { title: "Rechnung wird automatisch abgeholt" },
      { title: "OCR + KI lesen strukturiert aus" },
      { title: "Prüfung gegen Bestellung/Lieferant" },
      { title: "Digitaler Freigabe-Workflow" },
      { title: "Automatische Übergabe an Buchhaltung" },
      { title: "Zahlungsvorschlag & Skonto-Erinnerung" }
    ],
    keepExisting:
      "DATEV, lexoffice oder sevdesk bleiben führendes System. Wir bauen die Vorstufe, damit Belege dort automatisch und strukturiert ankommen.",
    worthWhen: [
      "Mehr als 100 Eingangsrechnungen pro Monat",
      "Freigaben laufen aktuell über E-Mail-Ping-Pong",
      "Es existiert DATEV, lexoffice, sevdesk oder ein ähnliches Buchhaltungssystem",
      "Skonto verfällt regelmäßig"
    ],
    costsNote:
      "Kostenspanne hängt von Rechnungsvolumen, Freigabetiefe (ein- oder mehrstufig) und Anbindung an DATEV/lexoffice/sevdesk ab.",
    faq: [
      {
        question: "Wie hoch ist die Erkennungsquote der OCR?",
        answer:
          "Für gut strukturierte PDF-Rechnungen sind sehr hohe Erkennungsquoten realistisch. Wir kombinieren OCR mit KI-basierter Plausibilisierung, damit ungewöhnliche Formate abgefangen werden."
      },
      {
        question: "Ist das GoBD-konform?",
        answer:
          "Der Prozess kann GoBD-konform aufgesetzt werden. Das erfordert eine Verfahrensdokumentation und ein revisionssicheres Archiv. Das prüfen wir im Vorprojekt gemeinsam."
      }
    ],
    relatedAutomationSlugs: [
      "eingangsrechnung-ocr-datev",
      "rechnung-freigabe-workflow",
      "datev-belegvorbereitung"
    ],
    relatedIntegrationSlugs: ["datev-gmail", "datev-microsoft-365", "datev-lexoffice"],
    leadPrefill: {
      process: "Eingangsrechnungen automatisieren",
      context:
        "Eingangsrechnungen werden manuell geprüft, freigegeben und in die Buchhaltung übertragen."
    }
  },

  {
    slug: "doppelte-dateneingabe",
    title: "Doppelte Dateneingabe zwischen Systemen",
    seoTitle: "Doppelte Dateneingabe stoppen · Systeme automatisch synchronisieren",
    seoDescription:
      "Kundendaten in CRM, ERP und Buchhaltung parallel pflegen? So bauen wir eine automatische Synchronisation zwischen Ihren Systemen.",
    category: "it_datenpflege",
    hero: {
      h1: "Ihre Mitarbeiter tippen dieselben Daten in mehrere Systeme?",
      sub: "Wir synchronisieren CRM, ERP, Buchhaltung und Fachsysteme, damit Daten nur einmal erfasst werden."
    },
    problemStatement:
      "Klassisches Symptom in gewachsenen IT-Landschaften: Kundendaten liegen in CRM, ERP, Buchhaltung, Ticket-System und ggf. Newsletter-Tool. Jede Änderung muss an mehreren Stellen nachgezogen werden. Praktisch wird das nie zuverlässig gemacht, die Datenbasis wird inkonsistent.",
    symptoms: [
      "Kunden werden mehrfach angelegt",
      "Adressen sind je nach System unterschiedlich",
      "Ansprechpartner-Wechsel wird nicht überall nachgezogen",
      "Reportings widersprechen sich",
      "Mitarbeiter suchen 'die richtige Version'"
    ],
    causes: [
      "Keine definierte 'Source of Truth' pro Entität",
      "Keine Schnittstellen zwischen den Systemen",
      "Historisch gewachsene Zuständigkeiten",
      "Systeme wurden nacheinander eingeführt, nicht integriert"
    ],
    risks: [
      "Falsche Rechnungsanschriften",
      "Verlorene Ansprechpartner",
      "Zusätzlicher Zeitaufwand für Datenpflege",
      "Auswertungen sind nicht belastbar"
    ],
    solutionsIntro:
      "Wir definieren pro Entität (Kunde, Ansprechpartner, Produkt) eine führende Quelle und synchronisieren die anderen Systeme automatisch. Änderungen fließen bidirektional oder einseitig, je nach Bedarf.",
    technologies: [
      "api",
      "webhook",
      "middleware",
      "datenbank_sync",
      "workflow_automation"
    ],
    beforeWorkflow: [
      { title: "Änderung im CRM" },
      { title: "Mitarbeiter merkt sich Änderung" },
      { title: "ERP öffnen, ändern" },
      { title: "Buchhaltung öffnen, ändern" },
      { title: "Ticket-System nachziehen" }
    ],
    afterWorkflow: [
      { title: "Änderung im führenden System" },
      { title: "Webhook / Trigger löst Sync aus" },
      { title: "Middleware normalisiert Daten" },
      { title: "Zielsysteme werden aktualisiert" },
      { title: "Konflikte werden geloggt & gemeldet" }
    ],
    keepExisting:
      "Wir tauschen keine Systeme aus. Ziel ist, die vorhandene Landschaft konsistent zu halten.",
    worthWhen: [
      "Zwei oder mehr Systeme mit gleichen Entitäten",
      "Mehrfach-Pflege ist Alltag",
      "Datenqualität ist Thema in Meetings",
      "Es gibt bereits APIs oder wenigstens Export-Schnittstellen"
    ],
    costsNote:
      "Der Aufwand hängt von der Anzahl der Systeme, der Verfügbarkeit von APIs und der Konflikt-Behandlung ab. Einfache 1:1-Syncs sind deutlich schlanker als komplexe Mehrsystem-Landschaften.",
    faq: [
      {
        question: "Was passiert bei Konflikten?",
        answer:
          "Wir definieren gemeinsam Regeln: zeitlich neueste Änderung gewinnt, oder ein System hat immer Vorrang. Konflikte werden zusätzlich geloggt, damit sie inhaltlich geprüft werden können."
      },
      {
        question: "Brauchen wir eine neue zentrale Datenbank?",
        answer:
          "Nein. In den meisten Fällen genügt eine Middleware, die zwischen den bestehenden Systemen vermittelt."
      }
    ],
    relatedAutomationSlugs: ["kunden-crm-sync", "crm-datenpflege-anreichern"],
    relatedIntegrationSlugs: [
      "datev-hubspot",
      "lexware-hubspot",
      "outlook-hubspot",
      "microsoft-365-hubspot"
    ],
    leadPrefill: {
      process: "Datensynchronisation zwischen Systemen",
      context:
        "Kundendaten müssen aktuell in mehreren Systemen parallel gepflegt werden."
    }
  },

  {
    slug: "excel-ersetzen",
    title: "Excel-Listen ersetzen",
    seoTitle: "Excel-Prozesse ersetzen · Aus Excel eine echte Anwendung machen",
    seoDescription:
      "Excel wird für Prozesse eingesetzt, für die es nicht gebaut ist. So machen wir aus einer Excel-Liste eine saubere, mehrbenutzerfähige Anwendung.",
    category: "it_datenpflege",
    hero: {
      h1: "Ihr Prozess läuft eigentlich in einer Excel-Datei?",
      sub: "Wir bauen aus Excel-Prozessen individuelle Anwendungen mit klarer Rechteverwaltung, sauberen Daten und optionaler KI-Anreicherung."
    },
    problemStatement:
      "Excel ist das häufigste ‚Schatten-ERP‘ im Mittelstand. Ab einer bestimmten Größe kippt es: gleichzeitiges Bearbeiten führt zu Konflikten, Formeln brechen, kein Audit-Trail, keine Rechteverwaltung, keine Anbindung an andere Systeme.",
    symptoms: [
      "Datei liegt auf einem Netzlaufwerk",
      "'_final_v3_wirklich.xlsx'",
      "Formeln, die niemand mehr versteht",
      "Makros, die abschmieren",
      "Kein Login, jeder sieht alles",
      "Keine Verbindung zu CRM/ERP"
    ],
    causes: [
      "Prozess ist historisch gewachsen",
      "Kein Budget für eigene Software",
      "Standardsoftware bildet den Prozess nicht ab"
    ],
    risks: [
      "Datenverlust durch Überschreiben",
      "Falsche Entscheidungen aus falschen Zahlen",
      "Datenschutz-Risiken durch offene Dateien",
      "Prozess hängt an einer einzigen Datei"
    ],
    solutionsIntro:
      "Wir übernehmen die bewährte Logik aus Excel und bauen daraus eine schlanke Web-Anwendung mit Datenbank, Nutzern und Rechten. Optional angebunden an CRM/ERP und um KI-Funktionen ergänzt.",
    technologies: [
      "individuelle_software",
      "datenbank_sync",
      "api",
      "workflow_automation",
      "llm"
    ],
    beforeWorkflow: [
      { title: "Datei öffnen" },
      { title: "Auf Sperren durch Kollegen warten" },
      { title: "Zeile hinzufügen / bearbeiten" },
      { title: "Speichern" },
      { title: "Datei kopieren als 'Version'" }
    ],
    afterWorkflow: [
      { title: "Web-Login" },
      { title: "Klare Sicht auf eigene Daten" },
      { title: "Änderungen mit Historie" },
      { title: "Anbindung an CRM / ERP" },
      { title: "Reportings automatisch" }
    ],
    keepExisting:
      "Die inhaltliche Prozesslogik aus Excel bleibt der Ausgangspunkt. Es ist erfahrungsgemäß der schnellste Weg zu einer eigenen Anwendung.",
    worthWhen: [
      "Mehr als 3 Personen arbeiten regelmäßig in derselben Datei",
      "Datei enthält geschäftskritische Daten",
      "Prozess braucht Nachvollziehbarkeit / Rechte",
      "Anbindung an CRM/ERP wäre sinnvoll"
    ],
    costsNote:
      "Der Aufwand hängt von Umfang, Anzahl der Nutzer und Integrationen ab. Ein schlanker Prototyp kann bereits im niedrigen vierstelligen Bereich starten, komplexe Anwendungen werden individuell kalkuliert.",
    faq: [
      {
        question: "Können wir Daten weiter aus Excel importieren?",
        answer:
          "Ja. In der Regel starten wir mit einem Import Ihrer bestehenden Daten und behalten Import/Export-Funktionen, wo sie sinnvoll sind."
      },
      {
        question: "Ist das eine SaaS oder liegt es bei uns?",
        answer:
          "Beides ist möglich. Wir hosten für Sie oder installieren die Anwendung in Ihre Infrastruktur."
      }
    ],
    relatedAutomationSlugs: ["crm-datenpflege-anreichern", "formulare-auswerten-ocr"],
    relatedIntegrationSlugs: ["outlook-hubspot", "microsoft-365-hubspot"],
    leadPrefill: {
      process: "Excel-Prozess ablösen",
      context:
        "Ein geschäftskritischer Prozess läuft aktuell in einer Excel-Datei und soll in eine richtige Anwendung überführt werden."
    }
  },

  {
    slug: "fehlende-schnittstelle",
    title: "Fehlende Schnittstelle zwischen Systemen",
    seoTitle: "Fehlende Schnittstelle · Systeme verbinden statt zu ersetzen",
    seoDescription:
      "Zwei Systeme können nicht miteinander sprechen? So bauen wir individuelle Schnittstellen zwischen CRM, ERP, DATEV, Outlook und Ihrer Branchensoftware.",
    category: "it_datenpflege",
    hero: {
      h1: "Zwei Ihrer Systeme sprechen nicht miteinander?",
      sub: "Wir bauen individuelle Schnittstellen, um Daten zwischen Ihrer bestehenden Software fließen zu lassen. Ohne teuren Systemwechsel."
    },
    problemStatement:
      "Fehlende Schnittstellen sind der teuerste stille Kostenblock im Mittelstand: Mitarbeiter überbrücken die Lücke von Hand. Dabei existieren in vielen Systemen APIs, Webhooks oder wenigstens Export-Möglichkeiten, aus denen sich robuste Integrationen bauen lassen.",
    symptoms: [
      "Daten werden manuell von System A nach System B übertragen",
      "Exporte werden regelmäßig erstellt und irgendwo hochgeladen",
      "Ein Mitarbeiter ‚hält die Systeme zusammen‘",
      "Reportings brauchen manuelle Vorarbeit"
    ],
    causes: [
      "Systeme wurden getrennt eingeführt",
      "Anbieter bieten keine passende Standardintegration",
      "Interne IT hat keine Kapazität für Middleware"
    ],
    risks: [
      "Fehlende oder verspätete Daten",
      "Reporting-Grundlage ist wackelig",
      "Prozess bricht bei Krankheit oder Kündigung",
      "Systemwechsel wird als Notlösung diskutiert"
    ],
    solutionsIntro:
      "Wir prüfen die APIs beider Systeme (falls vorhanden) und bauen entweder eine direkte Anbindung oder eine Middleware. Wenn keine API existiert, arbeiten wir mit Export/Import, RPA oder E-Mail-basierten Wegen weiter.",
    technologies: ["api", "webhook", "middleware", "rpa", "workflow_automation"],
    beforeWorkflow: [
      { title: "System A → Export" },
      { title: "Mitarbeiter kopiert / bereinigt" },
      { title: "System B → Import" },
      { title: "Prüfen, ggf. korrigieren" }
    ],
    afterWorkflow: [
      { title: "Trigger in System A" },
      { title: "Middleware transformiert Daten" },
      { title: "System B wird aktualisiert" },
      { title: "Fehler werden geloggt & gemeldet" }
    ],
    keepExisting:
      "Beide Systeme bleiben. Ziel ist, sie miteinander zu verbinden. Nicht, sie zu ersetzen.",
    worthWhen: [
      "Zwei oder mehr Systeme müssen aufeinander abgestimmt werden",
      "Es wird bereits regelmäßig manuell übertragen",
      "Reportings hängen davon ab, dass Daten synchron sind",
      "Es besteht Bereitschaft, in eine Middleware zu investieren"
    ],
    costsNote:
      "Preisspanne hängt stark davon ab, ob beide Systeme eine dokumentierte API bieten. Klare API-zu-API-Integrationen sind meist wirtschaftlich, RPA-basierte Wege sind aufwendiger im Betrieb.",
    faq: [
      {
        question: "Was, wenn eines der Systeme keine API hat?",
        answer:
          "Dann prüfen wir Exports, E-Mail-basierte Übergabe oder Robotic Process Automation als Fallback. In vielen Fällen ist auch das produktiv einsetzbar."
      },
      {
        question: "Wer betreibt die Schnittstelle?",
        answer:
          "Wir betreiben die Middleware auf Wunsch für Sie oder liefern eine Lösung, die in Ihrer eigenen Infrastruktur läuft."
      }
    ],
    relatedAutomationSlugs: ["kunden-crm-sync", "workflow-dokumenten-freigabe"],
    relatedIntegrationSlugs: [
      "datev-hubspot",
      "outlook-hubspot",
      "sap-hubspot",
      "shopify-datev",
      "lexware-hubspot"
    ],
    leadPrefill: {
      process: "Fehlende Schnittstelle bauen",
      context:
        "Zwei bestehende Systeme sind aktuell nicht verbunden und müssten regelmäßig manuell abgeglichen werden."
    }
  },

  {
    slug: "zu-viele-kundenanfragen",
    title: "Zu viele Kundenanfragen",
    seoTitle: "Zu viele Kundenanfragen · Anfragen mit KI vorstrukturieren",
    seoDescription:
      "Mehr Anfragen als das Team bewältigen kann? So klassifizieren, priorisieren und beantworten wir Anfragen mit KI. Ohne Qualität zu verlieren.",
    category: "kundenservice",
    hero: {
      h1: "Ihr Team versinkt in Kundenanfragen?",
      sub: "Wir klassifizieren, priorisieren und beantworten wiederkehrende Anfragen mit KI und geben Ihrem Team wieder Kapazität für die komplexen Fälle."
    },
    problemStatement:
      "Sobald die Anfragezahlen steigen, wird das Team überlastet: Rückstände wachsen, Antwortzeiten steigen, wiederkehrende Fragen kosten überproportional viel Zeit. Neue Mitarbeiter kompensieren das Problem, lösen es aber nicht.",
    symptoms: [
      "Rückstand im Kundenservice-Postfach",
      "Antwortzeiten steigen",
      "Dieselben Fragen kommen täglich",
      "Team ist am Limit, obwohl bereits aufgestockt wurde",
      "Kein Überblick, welche Themen am häufigsten sind"
    ],
    causes: [
      "Keine Vor-Klassifizierung",
      "Kein zentrales Wissens-Repository",
      "Antworten hängen an einzelnen Personen",
      "Kein Self-Service für Standard-Themen"
    ],
    risks: [
      "Kundenzufriedenheit sinkt",
      "Team wird demotiviert",
      "Skalierung nur durch mehr Personal",
      "Trends im Kundenbedarf werden übersehen"
    ],
    solutionsIntro:
      "Wir bauen einen mehrstufigen Prozess: Klassifizierung, Priorisierung, Antwortvorschläge auf Basis Ihrer Dokumentation (RAG), optional ein FAQ-Assistent auf der Website. Menschliche Freigabe bleibt Standard, wo sinnvoll.",
    technologies: [
      "llm",
      "rag",
      "workflow_automation",
      "api",
      "regelbasiert"
    ],
    beforeWorkflow: [
      { title: "Anfrage kommt in Sammelpostfach" },
      { title: "Mitarbeiter liest, kategorisiert" },
      { title: "Wissen manuell zusammensuchen" },
      { title: "Antwort formulieren" },
      { title: "Rückstand wächst" }
    ],
    afterWorkflow: [
      { title: "Anfrage wird empfangen" },
      { title: "KI klassifiziert & priorisiert" },
      { title: "Antwortvorschlag aus Wissensbasis" },
      { title: "Mitarbeiter prüft & versendet" },
      { title: "Reporting nach Themenclustern" }
    ],
    keepExisting:
      "Ticket-System / Service-Postfach / Website bleiben. Die KI wird darauf aufgesetzt.",
    worthWhen: [
      "Anfragezahl steigt spürbar",
      "Wiederkehrende Themen sind erkennbar",
      "Es existiert Dokumentation / Wissensbasis / FAQ",
      "Weiteres Personal ist keine langfristige Lösung"
    ],
    costsNote:
      "Umfang hängt davon ab, ob nur klassifiziert wird oder auch Antwortvorschläge / Self-Service dazukommen.",
    faq: [
      {
        question: "Ersetzt das den Kundenservice?",
        answer:
          "Nein. Es entlastet ihn: Standardfragen werden vor-bearbeitet, komplexe Fälle bekommen mehr Zeit."
      },
      {
        question: "Wie wird verhindert, dass die KI falsche Antworten gibt?",
        answer:
          "Antworten basieren auf Ihrer eigenen Dokumentation (RAG). Wo Unsicherheit besteht, wird nicht geantwortet, sondern eskaliert."
      }
    ],
    relatedAutomationSlugs: [
      "ticket-triage-kundenservice",
      "antwortvorschlaege-servicedesk",
      "faq-chatbot-website"
    ],
    relatedIntegrationSlugs: ["outlook-hubspot", "gmail-hubspot", "microsoft-365-hubspot"],
    leadPrefill: {
      process: "Kundenanfragen mit KI vorstrukturieren",
      context:
        "Volumen an Kundenanfragen ist so hoch, dass Rückstände entstehen. Klassifizierung, Priorisierung und Antwortvorschläge sollen mit KI unterstützt werden."
    }
  },

  {
    slug: "zu-viel-verwaltungsaufwand",
    title: "Zu viel Verwaltungsaufwand",
    seoTitle: "Zu viel Verwaltungsaufwand · Backoffice automatisieren",
    seoDescription:
      "Wenn Verwaltung mehr Kapazität bindet als das Kerngeschäft, ist es Zeit zu automatisieren. So bauen wir schlanke Prozesse für Ihr Backoffice.",
    category: "backoffice",
    hero: {
      h1: "Ihre Verwaltung frisst mehr Kapazität als Ihr Kerngeschäft?",
      sub: "Wir identifizieren wiederkehrende Verwaltungsaufgaben und automatisieren sie mit KI, Middleware und individueller Software."
    },
    problemStatement:
      "Wachsende Unternehmen produzieren automatisch wachsende Verwaltung: Formulare, Reports, Datenpflege, Freigaben, Ablagen. Ohne saubere Prozesse skaliert das linear mit Personal. Automatisierung erlaubt es, das Verhältnis von Verwaltung zu Wertschöpfung zu verbessern.",
    symptoms: [
      "Mitarbeiter im Backoffice arbeiten am Limit",
      "Immer mehr Anfragen intern und extern",
      "Reportings müssen manuell zusammengesucht werden",
      "Freigaben laufen chaotisch",
      "Dokumente sind nicht auffindbar"
    ],
    causes: [
      "Kein Prozess-Owner für die Verwaltung",
      "Systeme sind nicht verbunden",
      "Keine Automatisierung im Alltag",
      "Excel als Klebstoff"
    ],
    risks: [
      "Steigende Personalkosten ohne mehr Umsatz",
      "Wachstumsbremse",
      "Fehler in Buchhaltung / Reporting",
      "Verlust guter Mitarbeiter durch Routineüberlastung"
    ],
    solutionsIntro:
      "Wir identifizieren die zeitfressendsten Verwaltungsprozesse, priorisieren nach Wirkung und automatisieren Schritt für Schritt: E-Mail, Dokumente, Freigaben, Datenpflege, Reporting.",
    technologies: [
      "llm",
      "ocr",
      "workflow_automation",
      "api",
      "webhook",
      "individuelle_software"
    ],
    beforeWorkflow: [
      { title: "Aufgaben verteilt auf viele Systeme" },
      { title: "Vieles läuft über E-Mail" },
      { title: "Excel als Zwischenschicht" },
      { title: "Freigaben ohne klaren Prozess" }
    ],
    afterWorkflow: [
      { title: "Klare Prozess-Definition" },
      { title: "Digitale Freigabe-Workflows" },
      { title: "Automatisierte Datenübergabe zwischen Systemen" },
      { title: "Reportings werden generiert" }
    ],
    keepExisting:
      "Die Kernsysteme (CRM, ERP, Buchhaltung, DMS) bleiben. Wir verbinden und automatisieren zwischen ihnen.",
    worthWhen: [
      "Backoffice ist erkennbarer Kostenblock",
      "Wachstum bindet zunehmend Verwaltungspersonal",
      "Prozesse sind heute nirgends dokumentiert",
      "Es gibt konkrete Kandidaten wie Rechnungen, Freigaben, Berichte"
    ],
    costsNote:
      "Ein Verwaltungs-Automatisierungsprojekt wird typischerweise in Iterationen umgesetzt: pro Prozess ein eigener Aufwand.",
    faq: [
      {
        question: "Wo fängt man an?",
        answer:
          "Mit dem Prozess, der die meiste Zeit kostet und am einfachsten strukturierbar ist. Wir helfen bei der Priorisierung im Vorprojekt."
      },
      {
        question: "Ist das dann alles KI?",
        answer:
          "Nein. Sinnvolle Automatisierung ist eine Mischung aus klassischer Workflow-Automatisierung, Integrationen und gezieltem KI-Einsatz dort, wo Sprache oder unstrukturierte Daten im Spiel sind."
      }
    ],
    relatedAutomationSlugs: [
      "workflow-dokumenten-freigabe",
      "berichte-automatisch-erstellen",
      "eingangspost-digitalisieren",
      "protokolle-aus-meetings"
    ],
    relatedIntegrationSlugs: [
      "microsoft-365-hubspot",
      "outlook-hubspot",
      "datev-hubspot",
      "teams-hubspot"
    ],
    leadPrefill: {
      process: "Backoffice-Automatisierung",
      context:
        "Verwaltungsaufwand wächst schneller als das Kerngeschäft. Es gibt mehrere Kandidatenprozesse zur Automatisierung."
    }
  },

  {
    slug: "dokumente-manuell-pruefen",
    title: "Dokumente manuell prüfen",
    seoTitle: "Dokumente manuell prüfen · Verträge und PDFs mit KI analysieren",
    seoDescription:
      "Verträge, Bestellungen, Nachweise, Formulare. Alles wird durchgelesen und geprüft. So beschleunigen wir das mit Dokument-KI.",
    category: "backoffice",
    hero: {
      h1: "Ihre Mitarbeiter lesen sich manuell durch jede Vertragsdatei?",
      sub: "Wir bauen eine KI-gestützte Dokumentprüfung, die Kernfakten extrahiert, mit Regeln abgleicht und Auffälligkeiten meldet."
    },
    problemStatement:
      "Dokumente wie Verträge, Bestellungen, Nachweise, Lieferpapiere oder Formulare enthalten strukturierbare Informationen. Trotzdem werden sie oft komplett gelesen und manuell geprüft. Das kostet Zeit und ist bei hohem Volumen kaum steuerbar.",
    symptoms: [
      "Verträge werden Wort für Wort gelesen",
      "Auffälligkeiten hängen von Erfahrung der prüfenden Person ab",
      "Prüfungen sind nicht nachvollziehbar dokumentiert",
      "Prozess dauert bei Urlaub / Krankheit deutlich länger"
    ],
    causes: [
      "Keine strukturierte Auswertung von PDFs",
      "Keine Regel-Bibliothek für ‚worauf ist zu achten‘",
      "Fehlende Anbindung an Vertragsdatenbank"
    ],
    risks: [
      "Übersehene Klauseln oder Fristen",
      "Uneinheitliche Prüfungen im Team",
      "Compliance-Risiken"
    ],
    solutionsIntro:
      "Wir extrahieren Kernfelder (Laufzeiten, Kündigungsfristen, Beträge, Vertragsparteien, Zahlungsbedingungen) mit OCR und KI, gleichen sie mit Ihren Prüfregeln ab und geben eine Ampel-Bewertung als Vorprüfung. Der Mensch entscheidet.",
    technologies: [
      "ocr",
      "llm",
      "dokumentenanalyse",
      "rag",
      "workflow_automation"
    ],
    beforeWorkflow: [
      { title: "Dokument als PDF" },
      { title: "Manuell lesen" },
      { title: "Notizen in Excel/Word" },
      { title: "Freigabe / Ablehnung ohne Historie" }
    ],
    afterWorkflow: [
      { title: "Dokument wird eingelesen" },
      { title: "KI extrahiert Kernfelder" },
      { title: "Regel-Prüfung (grün/gelb/rot)" },
      { title: "Mensch prüft nur Auffälliges" },
      { title: "Prüfung wird revisionssicher dokumentiert" }
    ],
    keepExisting:
      "Ihr DMS, Ihre Vertragsablage und Ihre Prüfprozesse bleiben. Die KI liefert die Vorprüfung.",
    worthWhen: [
      "Mehr als 20 Dokumente pro Woche werden händisch geprüft",
      "Prüfregeln sind formulierbar",
      "Prüfungen sind zeitkritisch",
      "Prozess soll nachvollziehbar werden"
    ],
    costsNote:
      "Der Aufwand skaliert mit der Anzahl der Feld- und Regeltypen. Ein Pilot mit einem Dokumenttyp ist meist wirtschaftlich."
    ,
    faq: [
      {
        question: "Ist die KI belastbar genug für Verträge?",
        answer:
          "Sie ist gut in der Extraktion von Fakten und im Vergleich mit Regeln. Die inhaltliche Entscheidung sollte in juristisch relevanten Fällen weiterhin ein Mensch treffen."
      }
    ],
    relatedAutomationSlugs: [
      "dokumenten-klassifizierung",
      "vertragspruefung-ki",
      "formulare-auswerten-ocr"
    ],
    relatedIntegrationSlugs: ["microsoft-365-datev", "datev-lexoffice"],
    leadPrefill: {
      process: "Dokumentenprüfung mit KI",
      context:
        "Vertragsähnliche Dokumente werden aktuell manuell geprüft, ohne strukturierte Extraktion."
    }
  },

  {
    slug: "whatsapp-anfragen-verwalten",
    title: "WhatsApp-Anfragen verwalten",
    seoTitle: "WhatsApp-Anfragen verwalten · Nachrichten strukturieren und weiterleiten",
    seoDescription:
      "WhatsApp ist der de-facto-Kanal für viele Handwerks- und Dienstleistungsbetriebe. So strukturieren wir Anfragen und leiten sie ins CRM.",
    category: "kundenservice",
    hero: {
      h1: "Ihre Kunden schreiben Ihnen auf WhatsApp. Und alles landet auf einem Handy?",
      sub: "Wir strukturieren eingehende Nachrichten, extrahieren Bedarfe und übergeben sie ins CRM oder ERP. Ohne den Kanal zu verlieren."
    },
    problemStatement:
      "WhatsApp ist im Handwerk, in der Baubranche und bei vielen Dienstleistern der wichtigste Erstkontakt-Kanal. Ohne Struktur landen alle Bilder, Nachrichten, Bestellungen und Terminwünsche auf einem einzigen Gerät. Oft ohne Übergabe an Kollegen oder Systeme.",
    symptoms: [
      "Nur ein Mitarbeiter sieht alle WhatsApp-Anfragen",
      "Bilder und Sprachnachrichten werden nicht abgelegt",
      "Termine und Bedarfe werden per Zuruf weitergegeben",
      "Keine Übersicht, welche Anfrage in welchem Status ist"
    ],
    causes: [
      "Kein WhatsApp-Business-Setup",
      "Keine Integration mit CRM/ERP",
      "Kein Prozess für Extraktion aus Nachrichten"
    ],
    risks: [
      "Anfragen gehen verloren",
      "Wissen hängt an einer Person",
      "Kein Nachweis bei Streitfällen",
      "Fluktuation zerstört Kundenbeziehung"
    ],
    solutionsIntro:
      "Wir setzen ein WhatsApp-Business-Setup auf, verarbeiten eingehende Nachrichten (Text, Bild, Sprache), strukturieren sie mit KI und übergeben sie in Ihr CRM oder ERP. Der Kanal bleibt für Kunden gleich.",
    technologies: [
      "llm",
      "sprach_ki",
      "api",
      "workflow_automation",
      "middleware"
    ],
    beforeWorkflow: [
      { title: "Nachricht auf WhatsApp" },
      { title: "Mitarbeiter liest, ruft ggf. zurück" },
      { title: "Notiert Termin / Bedarf" },
      { title: "Weitergabe per Zuruf" }
    ],
    afterWorkflow: [
      { title: "Nachricht kommt an WhatsApp-Business" },
      { title: "KI extrahiert Kunde & Anliegen" },
      { title: "Ansprechpartner im CRM wird zugeordnet" },
      { title: "Ticket / Vorgang wird angelegt" },
      { title: "Team hat vollen Überblick" }
    ],
    keepExisting:
      "WhatsApp bleibt Kanal für Kunden. Intern läuft die Arbeit im CRM oder ERP.",
    worthWhen: [
      "WhatsApp ist ein Hauptkanal für Anfragen",
      "Mehr als eine Person soll Zugriff haben",
      "Anfragen enthalten wiederkehrende Muster (Adresse, Bedarf, Termin)"
    ],
    costsNote:
      "Der Aufwand hängt von der WhatsApp-Business-Konfiguration und der Zielsystem-Anbindung ab."
    ,
    faq: [
      {
        question: "Braucht das eine WhatsApp-Business-API?",
        answer:
          "Ja, für den professionellen Betrieb und die Integration mit Systemen ist ein WhatsApp-Business-API-Setup Voraussetzung."
      }
    ],
    relatedAutomationSlugs: ["whatsapp-anfragen-strukturieren", "ticket-triage-kundenservice"],
    relatedIntegrationSlugs: ["whatsapp-hubspot", "whatsapp-crm-generisch"],
    leadPrefill: {
      process: "WhatsApp-Anfragen strukturieren",
      context:
        "WhatsApp ist Hauptkanal für Kundenkommunikation, Nachrichten sollen ins CRM/ERP übergeben werden."
    }
  },

  {
    slug: "telefonannahme-entlasten",
    title: "Telefonannahme entlasten",
    seoTitle: "Telefonannahme entlasten · Sprach-KI und Vorqualifizierung",
    seoDescription:
      "Das Telefon klingelt öfter als gut fürs Geschäft. So entlasten wir die Telefonannahme mit Sprach-KI, Vorqualifizierung und intelligenten Ansagen.",
    category: "kundenservice",
    hero: {
      h1: "Ihr Team wird ständig durch Telefonanrufe unterbrochen?",
      sub: "Wir bauen Sprach-KI-basierte Vorqualifizierung, damit nur die wirklich relevanten Anrufe an Ihre Mitarbeiter durchgestellt werden."
    },
    problemStatement:
      "Unstrukturierte Telefonannahme zerreißt Arbeitstage. Standardanfragen (Termin, Öffnungszeiten, Status) belegen Zeit von Fachpersonal, das an anderen Themen produktiv wäre.",
    symptoms: [
      "Immer wieder werden Standardfragen telefonisch geklärt",
      "Mitarbeiter werden aus konzentrierter Arbeit gerissen",
      "Anrufe außerhalb der Kernzeit gehen verloren",
      "Kein Log, wer wann angerufen hat"
    ],
    causes: [
      "Keine Vor-Qualifizierung",
      "Keine Integration mit CRM",
      "Keine sinnvollen Alternativen für Standardanliegen"
    ],
    risks: [
      "Verlorene Arbeitszeit",
      "Verlorene Anrufe außerhalb der Öffnungszeit",
      "Kundenwahrnehmung: ‚nie erreichbar‘"
    ],
    solutionsIntro:
      "Wir bauen eine Sprach-KI, die eingehende Anrufe entgegennimmt, das Anliegen erkennt, Standardauskünfte selbst gibt und nur relevante Fälle weiterleitet. Inklusive Rückrufwunsch, Terminvereinbarung und Übergabe ans CRM.",
    technologies: [
      "sprach_ki",
      "llm",
      "api",
      "workflow_automation",
      "regelbasiert"
    ],
    beforeWorkflow: [
      { title: "Anruf kommt an" },
      { title: "Mitarbeiter unterbricht seine Arbeit" },
      { title: "Standardfrage klären" },
      { title: "Weiterleiten oder zurückrufen" }
    ],
    afterWorkflow: [
      { title: "Anruf wird von Sprach-KI angenommen" },
      { title: "Anliegen wird erkannt" },
      { title: "Standardauskunft oder Vorqualifizierung" },
      { title: "Nur relevante Fälle werden durchgestellt" },
      { title: "Rückrufwunsch geht ins CRM" }
    ],
    keepExisting:
      "Ihre bestehende Rufnummer und Telefonanlage bleiben. Die Sprach-KI läuft in der Regel vorgeschaltet.",
    worthWhen: [
      "Mehr als 20 Anrufe pro Tag im Team",
      "Ein hoher Anteil ist Standard-Anliegen",
      "Anrufe außerhalb der Öffnungszeit gehen verloren"
    ],
    costsNote:
      "Setup + laufende Kosten (Sprach-KI-Minuten, Telefonie). Wir schätzen das nach Anrufvolumen im Vorprojekt.",
    faq: [
      {
        question: "Wie merkt der Anrufer, dass er mit einer KI spricht?",
        answer:
          "Wir empfehlen, das transparent zu kommunizieren. Wirkung und Akzeptanz sind höher, wenn das Gegenüber weiß, mit wem es spricht."
      }
    ],
    relatedAutomationSlugs: ["telefon-voicebot", "terminvereinbarung-automatisieren"],
    relatedIntegrationSlugs: ["calendly-hubspot"],
    leadPrefill: {
      process: "Telefonannahme mit Sprach-KI",
      context:
        "Aktuell werden alle Anrufe manuell entgegengenommen, ein hoher Anteil sind Standardanliegen."
    }
  },

  {
    slug: "datev-prozesse-automatisieren",
    title: "DATEV-Prozesse automatisieren",
    seoTitle: "DATEV-Prozesse automatisieren · Belege, Buchhaltung, Steuerberater",
    seoDescription:
      "Belege für DATEV vorbereiten, kontieren, hochladen. Manuell ein Zeitfresser. So automatisieren wir die Vorstufe zu DATEV.",
    category: "buchhaltung",
    hero: {
      h1: "DATEV ist gesetzt, aber die Vorbereitung frisst Zeit?",
      sub: "Wir automatisieren die Vorstufe: Belege abholen, auslesen, kontieren, plausibilisieren und strukturiert nach DATEV übergeben."
    },
    problemStatement:
      "DATEV bleibt im deutschen Mittelstand die zentrale Buchhaltungs-Umgebung, in der der Steuerberater arbeitet. Der Weg dorthin ist jedoch oft manuell: Belege werden per E-Mail eingesammelt, händisch abgelegt, teilweise vorkontiert, hochgeladen.",
    symptoms: [
      "Belege werden aus Postfach heruntergeladen und abgelegt",
      "Kontierungsvorschläge werden per Hand ergänzt",
      "Steuerberater fragt regelmäßig fehlende Belege nach",
      "Rechnungen aus Portalen (Amazon, Telekom, etc.) werden vergessen"
    ],
    causes: [
      "Keine automatische Sammlung von Belegen",
      "Keine strukturierte Übergabe an DATEV",
      "Manuelle Kontierung als Standardweg"
    ],
    risks: [
      "Unvollständige Buchhaltung",
      "Nachfragen vom Steuerberater",
      "Fristen werden knapp"
    ],
    solutionsIntro:
      "Wir sammeln Belege automatisch aus Postfach, Portalen und Uploads, lesen sie mit OCR/KI aus, plausibilisieren und übergeben sie an DATEV Unternehmen Online, Rechnungswesen pro oder Vergleichbares.",
    technologies: [
      "ocr",
      "llm",
      "api",
      "workflow_automation",
      "regelbasiert"
    ],
    beforeWorkflow: [
      { title: "Beleg per Mail / Portal" },
      { title: "Download & Ablage" },
      { title: "Vor-Kontierung manuell" },
      { title: "Upload zu DATEV" }
    ],
    afterWorkflow: [
      { title: "Beleg wird automatisch abgeholt" },
      { title: "OCR + KI strukturieren" },
      { title: "Regel-basierte Kontierung" },
      { title: "Prüfung durch Buchhaltung" },
      { title: "Automatische DATEV-Übergabe" }
    ],
    keepExisting:
      "DATEV bleibt führendes System. Der Steuerberater arbeitet weiter wie gewohnt.",
    worthWhen: [
      "Mehr als 100 Belege pro Monat",
      "Steuerberater arbeitet in DATEV",
      "Belege kommen aus vielen Quellen"
    ],
    costsNote:
      "Aufwand hängt von Belegquellen, Kontierungslogik und DATEV-Weg (Unternehmen Online, XML-Export, Belegtransfer) ab.",
    faq: [
      {
        question: "Kann DATEV wirklich per API angebunden werden?",
        answer:
          "DATEV bietet je nach Produkt unterschiedliche Wege (Belegtransfer, XML-Import, DATEVconnect). Was in Ihrem Fall geeignet ist, prüfen wir im Vorprojekt."
      }
    ],
    relatedAutomationSlugs: [
      "eingangsrechnung-ocr-datev",
      "datev-belegvorbereitung",
      "zahlungserinnerung-automatisieren"
    ],
    relatedIntegrationSlugs: [
      "datev-gmail",
      "datev-hubspot",
      "datev-microsoft-365",
      "datev-lexoffice",
      "datev-baufaktura"
    ],
    leadPrefill: {
      process: "DATEV-Vorstufe automatisieren",
      context: "Belege werden manuell für DATEV vorbereitet."
    }
  },

  {
    slug: "backoffice-automatisieren",
    title: "Backoffice automatisieren",
    seoTitle: "Backoffice automatisieren · Verwaltung ohne Wachstumsbremse",
    seoDescription:
      "Backoffice-Kapazität soll nicht linear mit dem Umsatz wachsen. So automatisieren wir Dateneingabe, Freigaben, Reportings und Ablage.",
    category: "backoffice",
    hero: {
      h1: "Ihr Backoffice wächst schneller als Ihr Umsatz?",
      sub: "Wir bauen Automatisierungen für Dateneingabe, Freigaben, Reportings und Dokumentenablage."
    },
    problemStatement:
      "Ein gutes Backoffice ist das stille Rückgrat eines Unternehmens. Wenn es aber jeden Wachstumsschritt mit zusätzlichem Personal begleiten muss, wird es zum Bremsblock. Automatisierung verschiebt das Verhältnis.",
    symptoms: [
      "Dateneingabe frisst Vollzeit-Kapazität",
      "Freigaben laufen per Mail",
      "Reports werden monatlich manuell zusammengestellt",
      "Dokumente werden von Hand abgelegt"
    ],
    causes: [
      "Keine standardisierten Workflows",
      "Systeme sind nicht verbunden",
      "Vieles landet in Excel"
    ],
    risks: [
      "Steigende Personalkosten",
      "Fehler in kritischen Vorgängen",
      "Wachstum ist personalabhängig"
    ],
    solutionsIntro:
      "Wir gehen die typischen Backoffice-Prozesse durch, definieren Verantwortlichkeiten und automatisieren die aufwändigsten Vorgänge. Von Dateneingabe bis Reporting.",
    technologies: [
      "workflow_automation",
      "api",
      "webhook",
      "ocr",
      "llm",
      "individuelle_software"
    ],
    beforeWorkflow: [
      { title: "Aufgaben mailweise" },
      { title: "Excel als Zwischenschicht" },
      { title: "Manuelle Ablage" },
      { title: "Monatliche Reporting-Woche" }
    ],
    afterWorkflow: [
      { title: "Klarer Prozess pro Vorgang" },
      { title: "Digitale Freigaben" },
      { title: "Automatische Datenübergabe" },
      { title: "Reportings sind auf Knopfdruck da" }
    ],
    keepExisting:
      "Die Systemlandschaft bleibt. Wir verbinden Sie und legen strukturierte Prozesse darüber."
    ,
    worthWhen: [
      "Backoffice ist ein Wachstumsengpass",
      "Es gibt mehrere Automatisierungs-Kandidaten",
      "Systeme mit APIs sind vorhanden"
    ],
    costsNote:
      "Wird in Iterationen umgesetzt: pro Prozess ein eigenes, überschaubares Paket.",
    faq: [
      {
        question: "Wie fange ich klein an?",
        answer:
          "Wir starten mit einem Prozess, der klar messbaren Nutzen bringt (z.B. Eingangsrechnungen oder Freigaben), und skalieren von dort."
      }
    ],
    relatedAutomationSlugs: [
      "workflow-dokumenten-freigabe",
      "berichte-automatisch-erstellen",
      "eingangspost-digitalisieren"
    ],
    relatedIntegrationSlugs: ["microsoft-365-hubspot", "outlook-hubspot", "datev-microsoft-365"],
    leadPrefill: {
      process: "Backoffice-Automatisierung",
      context: "Verwaltung soll effizienter werden ohne zusätzliches Personal."
    }
  },

  {
    slug: "manuelle-datenerfassung",
    title: "Manuelle Datenerfassung",
    seoTitle: "Manuelle Datenerfassung stoppen · Erfassung mit KI und OCR",
    seoDescription:
      "Papierformulare, Handzettel, PDF-Formulare: hier entstehen Daten, die viele Firmen von Hand ins System tippen. So geht es besser.",
    category: "backoffice",
    hero: {
      h1: "Sie tippen noch Papierformulare in Ihr System?",
      sub: "Wir automatisieren Datenerfassung mit OCR, KI und strukturierten Web-Formularen. Ohne dass Ihre Kunden ihre Gewohnheiten ändern müssen."
    },
    problemStatement:
      "Datenerfassung aus Papier, Handzetteln oder unstrukturierten Formularen ist die klassische ‚unsichtbare‘ Belastung. Sie ist selten teuer im Einzelfall, aber summiert eine erhebliche Kapazität. Und ist fehleranfällig.",
    symptoms: [
      "Mitarbeiter tippen Formulare in Systeme ab",
      "Handzettel werden aus dem Außendienst abgetippt",
      "Angaben sind nicht standardisiert",
      "Wiederholte Rückfragen wegen unleserlicher Schrift"
    ],
    causes: [
      "Kein digitales Formular / kein OCR",
      "Prozess wurde nie hinterfragt",
      "Datenerfassung ist personell nicht klar zugeordnet"
    ],
    risks: [
      "Fehler in Kundendaten",
      "Doppelte oder unvollständige Datensätze",
      "Zeitverlust vom Kerngeschäft"
    ],
    solutionsIntro:
      "Wir prüfen, ob strukturierte Web-Formulare, OCR oder eine Kombination sinnvoll sind, und automatisieren die Übergabe in Ihre Systeme.",
    technologies: [
      "ocr",
      "llm",
      "workflow_automation",
      "individuelle_software",
      "api"
    ],
    beforeWorkflow: [
      { title: "Formular auf Papier" },
      { title: "Rückfluss ins Büro" },
      { title: "Manuell in System tippen" },
      { title: "Papierablage" }
    ],
    afterWorkflow: [
      { title: "Digitales Formular oder Foto" },
      { title: "OCR / KI extrahiert Daten" },
      { title: "Plausibilitäts-Check" },
      { title: "Direkte Übergabe in System" }
    ],
    keepExisting:
      "Zielsysteme (CRM, ERP, Branchen-Software) bleiben. Wir verkürzen den Weg dorthin.",
    worthWhen: [
      "Formulare / Handzettel / PDFs sind regelmäßig",
      "Datenqualität ist wichtig",
      "Zielsystem ist per API oder Import erreichbar"
    ],
    costsNote:
      "Aufwand hängt von Formulartypen, Volumen und Zielsystem-Anbindung ab.",
    faq: [
      {
        question: "Was, wenn Kunden weiter Papier verwenden wollen?",
        answer:
          "Dann verarbeiten wir die Papier-Formulare per OCR im Nachgang. Der Kunde merkt keinen Unterschied."
      }
    ],
    relatedAutomationSlugs: [
      "formulare-auswerten-ocr",
      "eingangspost-digitalisieren",
      "crm-datenpflege-anreichern"
    ],
    relatedIntegrationSlugs: ["microsoft-365-datev", "microsoft-365-hubspot"],
    leadPrefill: {
      process: "Datenerfassung digitalisieren",
      context:
        "Erfassung aus Papier / PDFs erfolgt manuell und soll digital abgebildet werden."
    }
  },

  {
    slug: "mitarbeiter-mit-routineaufgaben-ueberlastet",
    title: "Mitarbeiter mit Routineaufgaben überlastet",
    seoTitle: "Routineaufgaben abbauen · Mitarbeiter für Wertschöpfung freispielen",
    seoDescription:
      "Wenn qualifizierte Mitarbeiter den Tag mit Routine verbringen, ist das teuer. So identifizieren und automatisieren wir Routineaufgaben.",
    category: "hr",
    hero: {
      h1: "Ihre Fachkräfte verbringen den Tag mit Routine statt Fachaufgaben?",
      sub: "Wir identifizieren Routineaufgaben und automatisieren sie mit KI, Middleware und individueller Software, damit Fachkräfte an Fach- statt an Routineaufgaben arbeiten."
    },
    problemStatement:
      "In fast jedem Unternehmen gibt es Rollen, in denen qualifizierte Mitarbeiter einen erheblichen Teil ihrer Arbeitszeit mit Routinen verbringen · Datenübertragung, Formulare, Standardantworten, Meeting-Nachbereitung. Das ist teuer und führt langfristig zu Frustration und Abgängen.",
    symptoms: [
      "Fachkräfte kopieren Daten zwischen Systemen",
      "Meetings werden manuell protokolliert",
      "Standardantworten fressen Fokus-Zeit",
      "Onboarding-Wissen wird jedes Mal neu aufgeschrieben"
    ],
    causes: [
      "Keine Automatisierung",
      "Keine gemeinsamen Wissensquellen",
      "Historisch gewachsene Prozesse"
    ],
    risks: [
      "Frustration und Fluktuation",
      "Höhere Personalkosten pro Wertschöpfung",
      "Talent geht bei Wettbewerb"
    ],
    solutionsIntro:
      "Wir gehen die typischen Rollen durch und identifizieren, welche Aufgaben automatisierbar oder assistierbar sind. Von KI-Zusammenfassungen über RAG-basierte interne Assistenten bis zu klassischen Workflow-Automatisierungen.",
    technologies: [
      "llm",
      "rag",
      "workflow_automation",
      "api",
      "individuelle_software"
    ],
    beforeWorkflow: [
      { title: "Fachkraft mit Routineaufgaben" },
      { title: "Manuelle Kopier- und Suchvorgänge" },
      { title: "Fachaufgaben bekommen Restzeit" }
    ],
    afterWorkflow: [
      { title: "Routineaufgaben werden vorbereitet oder automatisiert" },
      { title: "Fachkraft prüft & entscheidet" },
      { title: "Fachaufgaben rücken in den Fokus" }
    ],
    keepExisting:
      "Rollen und Verantwortungen bleiben. Wir verändern nur, wie die Aufgaben ausgeführt werden.",
    worthWhen: [
      "Fachkräfte-Zeit ist knapp und teuer",
      "Routineanteile sind sichtbar",
      "Es gibt Bereitschaft, Prozesse zu ändern"
    ],
    costsNote:
      "Aufwand hängt von Anzahl und Komplexität der zu automatisierenden Aufgaben ab.",
    faq: [
      {
        question: "Wo fängt man an?",
        answer:
          "Bei den wiederkehrenden Aufgaben mit klarem Muster und hoher Häufigkeit. Die identifizieren wir gemeinsam in einem Vorprojekt."
      }
    ],
    relatedAutomationSlugs: [
      "interner-wissens-assistent-rag",
      "protokolle-aus-meetings",
      "berichte-automatisch-erstellen"
    ],
    relatedIntegrationSlugs: ["microsoft-365-hubspot", "teams-hubspot", "slack-hubspot"],
    leadPrefill: {
      process: "Routineaufgaben automatisieren",
      context:
        "Fachkräfte verbringen zu viel Zeit mit Routine. Es gibt mehrere Automatisierungs-Kandidaten."
    }
  },

  {
    slug: "bewerbungen-manuell-sichten",
    title: "Bewerbungen manuell sichten",
    seoTitle: "Bewerbungen manuell sichten · Vorauswahl mit KI",
    seoDescription:
      "Bewerbungen strömen aus vielen Quellen: Portale, Mail, PDF. So bauen wir eine KI-gestützte Vorauswahl · DSGVO-nah und diskriminierungsarm.",
    category: "hr",
    hero: {
      h1: "Bewerbungen kommen aus fünf Quellen und werden trotzdem alle von Hand gelesen?",
      sub: "Wir bauen eine KI-gestützte Vorstrukturierung, die Bewerbungen nach Ihren Kriterien bewertet. Die Entscheidung bleibt bei HR."
    },
    problemStatement:
      "Bewerbungen erreichen HR über Portale, E-Mail und PDF. Die Vorauswahl ist zeitaufwendig, hängt an einzelnen Personen, ist selten dokumentiert und riskiert bei hohem Aufkommen inkonsistente Beurteilungen.",
    symptoms: [
      "Portale, Mail-Postfach und Netzlaufwerk parallel",
      "Bewerbungen werden händisch bewertet",
      "Kein einheitliches Bewertungsschema",
      "Reaktionszeiten steigen mit dem Volumen"
    ],
    causes: [
      "Keine strukturierte Vor-Bewertung",
      "Kein zentrales ATS oder ATS wird nicht genutzt",
      "Uneinheitliche Anforderungsprofile"
    ],
    risks: [
      "Kandidaten wandern zur Konkurrenz",
      "Diskriminierungs-Risiken durch inkonsistente Bewertung",
      "Zusätzliche HR-Kapazität als Antwort auf Volumen"
    ],
    solutionsIntro:
      "Wir bauen eine Vorstrukturierung: Extraktion aus Lebenslauf, Vergleich mit Anforderungsprofil, transparente Bewertung mit klaren Kriterien. Die Entscheidung bleibt beim Menschen. Der EU AI Act gilt: Personalentscheidungen sind Hochrisiko-Anwendungen, das wird eingebaut, nicht ignoriert.",
    technologies: ["llm", "ocr", "rag", "workflow_automation"],
    beforeWorkflow: [
      { title: "Bewerbungen aus vielen Quellen" },
      { title: "PDF-Sichtung" },
      { title: "Bauchgefühl-Bewertung" },
      { title: "Antwort per Mail" }
    ],
    afterWorkflow: [
      { title: "Bewerbungen werden konsolidiert" },
      { title: "KI extrahiert Skills / Erfahrung" },
      { title: "Anforderungsprofil-Vergleich" },
      { title: "Transparente Bewertung mit Kriterien" },
      { title: "HR entscheidet & antwortet" }
    ],
    keepExisting:
      "Bestehendes ATS oder Postfach bleibt. Die Vorstrukturierung ist ein Assistenzsystem.",
    worthWhen: [
      "Mehr als 100 Bewerbungen pro Monat",
      "Anforderungsprofile sind formulierbar",
      "HR ist an einer belastbaren Vorstrukturierung interessiert"
    ],
    costsNote:
      "Aufwand richtet sich nach Zahl der Quellen und Tiefe der Bewertungslogik. EU-AI-Act-konforme Umsetzung ist Standard.",
    faq: [
      {
        question: "Trifft die KI die Einstellungsentscheidung?",
        answer:
          "Nein. Die Entscheidung ist Aufgabe von HR und Fachabteilung. Die KI liefert eine strukturierte Vorauswahl mit nachvollziehbaren Kriterien."
      },
      {
        question: "Wie gehen wir mit dem EU AI Act um?",
        answer:
          "Personalvorauswahl ist Hochrisiko-Anwendung. Wir dokumentieren Kriterien, sichern menschliche Aufsicht und geben Bewerbern die geforderten Informationsrechte."
      }
    ],
    relatedAutomationSlugs: ["bewerbungen-vorsortieren", "onboarding-checkliste"],
    relatedIntegrationSlugs: ["microsoft-365-hubspot"],
    leadPrefill: {
      process: "Bewerbungs-Vorauswahl",
      context:
        "Bewerbungen kommen aus vielen Quellen und sollen strukturiert vor-bewertet werden."
    }
  },

  {
    slug: "wissen-verstreut-im-unternehmen",
    title: "Wissen ist verstreut im Unternehmen",
    seoTitle: "Wissen verstreut · Internen KI-Assistenten mit RAG bauen",
    seoDescription:
      "Wissen liegt in Ordnern, Wikis, Mails und Köpfen. So bauen wir einen internen KI-Assistenten (RAG), der aus Ihrer Dokumentation antwortet.",
    category: "backoffice",
    hero: {
      h1: "Ihre Mitarbeiter suchen jeden Tag nach dem gleichen Wissen?",
      sub: "Wir bauen einen internen KI-Assistenten, der aus Ihrer eigenen Dokumentation (RAG) antwortet. Ohne Halluzinationen und ohne Ihre Daten an unbekannte Systeme zu senden."
    },
    problemStatement:
      "Wissen liegt in Sharepoint, Netzlaufwerken, Confluence, Mails, PDFs, Handbüchern und in Köpfen. Neue Mitarbeiter brauchen Wochen, bis sie sich orientieren. Selbst erfahrene Kollegen suchen mehrfach dieselben Dokumente.",
    symptoms: [
      "Immer wieder dieselben internen Fragen",
      "Wissen hängt an Personen",
      "Onboarding-Zeit ist lang",
      "Dokumentation ist da, aber niemand findet sie"
    ],
    causes: [
      "Keine zentrale Wissensbasis",
      "Keine Suche über alle Quellen",
      "Kein Assistenzsystem für Standardfragen"
    ],
    risks: [
      "Zeitverlust im Team",
      "Wissensverlust bei Kündigung",
      "Inkonsistente Antworten gegenüber Kunden"
    ],
    solutionsIntro:
      "Wir bauen einen internen Assistenten (RAG), der Ihre bestehenden Dokumente indexiert und in Chat-Form antwortet. Er sagt, woher die Antwort stammt. Optional läuft er lokal, damit keine Firmeninformationen an Cloud-Anbieter fließen.",
    technologies: ["rag", "llm", "api", "lokale_ki", "workflow_automation"],
    beforeWorkflow: [
      { title: "Frage im Team" },
      { title: "Kollegen fragen" },
      { title: "Manuelles Suchen" },
      { title: "Antwort weitergeben" }
    ],
    afterWorkflow: [
      { title: "Frage an internen Assistenten" },
      { title: "RAG durchsucht Dokumentation" },
      { title: "Antwort mit Quellen" },
      { title: "Kolleg:innen entlastet" }
    ],
    keepExisting:
      "Ihre Dokumentenquellen bleiben. Der Assistent ist eine Sicht darüber, kein neues Ablagesystem.",
    worthWhen: [
      "Mehr als 20 Mitarbeiter, die mit Wissen arbeiten",
      "Dokumentation existiert in strukturierter Form",
      "Wiederkehrende Standardfragen sind erkennbar",
      "Datenschutz ist Thema (dann: lokale KI)"
    ],
    costsNote:
      "Aufwand hängt von Datenquellen, Rechteverwaltung und Deployment-Weg (Cloud oder lokal) ab.",
    faq: [
      {
        question: "Was, wenn Dokumente teils sensibel sind?",
        answer:
          "Wir bauen Rechte in die Suche ein: der Assistent liefert nur Antworten aus Dokumenten, für die die Person berechtigt ist. Für maximalen Schutz laufen alle Komponenten lokal."
      }
    ],
    relatedAutomationSlugs: [
      "interner-wissens-assistent-rag",
      "onboarding-checkliste",
      "protokolle-aus-meetings"
    ],
    relatedIntegrationSlugs: ["microsoft-365-hubspot", "teams-hubspot"],
    leadPrefill: {
      process: "Interner Wissens-Assistent (RAG)",
      context:
        "Wissen ist verstreut, Mitarbeiter suchen wiederholt dieselben Dokumente."
    }
  },

  {
    slug: "reklamationen-bearbeiten",
    title: "Reklamationen bearbeiten",
    seoTitle: "Reklamationen bearbeiten · Prozess mit KI strukturieren",
    seoDescription:
      "Reklamationen sind emotional, zeitkritisch und wiederkehrend. So bauen wir einen strukturierten Prozess mit KI-Unterstützung.",
    category: "kundenservice",
    hero: {
      h1: "Reklamationen kosten unverhältnismäßig viel Zeit?",
      sub: "Wir bauen einen strukturierten Reklamationsprozess mit KI-Klassifizierung, Antwortvorschlägen und CRM-Übergabe. Ohne Empathie durch Automatisierung zu ersetzen."
    },
    problemStatement:
      "Reklamationen enthalten Emotion, Fakten und Handlungsbedarf. Sie werden unterschiedlich beantwortet, oft nicht sauber dokumentiert und selten systematisch ausgewertet. Das kostet Zeit und Kunden.",
    symptoms: [
      "Reklamationen laufen im Sammelpostfach",
      "Antworten variieren je nach Bearbeiter",
      "Keine Nachverfolgung",
      "Keine Auswertung nach Ursachen"
    ],
    causes: [
      "Kein Reklamationsprozess",
      "Kein CRM- oder Ticket-System für Reklamationen",
      "Kein Reporting"
    ],
    risks: [
      "Kundenbindungen brechen",
      "Ursachen wiederholen sich",
      "Rechts- und Compliance-Risiken"
    ],
    solutionsIntro:
      "Wir klassifizieren Reklamationen, ordnen sie den richtigen Verantwortlichen zu, schlagen Antwortstrukturen vor und legen jeden Fall im CRM oder Ticket-System nachvollziehbar ab. Reportings zu Ursachen fallen als Nebenprodukt an.",
    technologies: ["llm", "rag", "workflow_automation", "api"],
    beforeWorkflow: [
      { title: "Reklamation per Mail" },
      { title: "Manuelle Zuordnung" },
      { title: "Antwort ad hoc" },
      { title: "Kein Reporting" }
    ],
    afterWorkflow: [
      { title: "Reklamation kommt an" },
      { title: "KI klassifiziert & priorisiert" },
      { title: "Antwortvorschlag mit Empathie-Regel" },
      { title: "CRM-/Ticket-Anlage automatisch" },
      { title: "Reporting nach Ursachen" }
    ],
    keepExisting:
      "Kanal (Mail, Telefon, Chat) bleibt. Die Verarbeitung wird strukturiert.",
    worthWhen: [
      "Reklamationen sind ein wiederkehrender Kostenblock",
      "Reportings existieren nicht",
      "Antworten sind personenabhängig"
    ],
    costsNote:
      "Aufwand richtet sich nach Volumen, Anzahl der Kanäle und Tiefe der Auswertung.",
    faq: [
      {
        question: "Ist es sinnvoll, dass eine KI Reklamationen beantwortet?",
        answer:
          "Sie bereitet Antworten vor und schlägt Formulierungen mit Empathie-Regeln vor. Der Mensch prüft und versendet. In den meisten Fällen empfehlen wir keinen vollautomatischen Versand."
      }
    ],
    relatedAutomationSlugs: [
      "ticket-triage-kundenservice",
      "antwortvorschlaege-servicedesk"
    ],
    relatedIntegrationSlugs: ["outlook-hubspot", "gmail-hubspot"],
    leadPrefill: {
      process: "Reklamations-Prozess strukturieren",
      context:
        "Reklamationen werden aktuell unstrukturiert per Mail bearbeitet."
    }
  },

  {
    slug: "berichte-erstellen",
    title: "Berichte manuell erstellen",
    seoTitle: "Berichte manuell erstellen · Reporting mit KI vorbereiten",
    seoDescription:
      "Wenn Monatsberichte, Kunden-Reports oder Baustellenberichte manuell zusammengetragen werden. So beschleunigen wir das mit KI.",
    category: "backoffice",
    hero: {
      h1: "Reports werden bei Ihnen jedes Mal von Hand zusammengeklickt?",
      sub: "Wir automatisieren die Datenzusammenführung und lassen die KI einen prüfbaren Report-Entwurf erstellen."
    },
    problemStatement:
      "Reports (Monatsberichte, Kunden-Reportings, Baustellenberichte, Projekt-Status) entstehen häufig, indem jemand Daten aus mehreren Systemen zusammensucht, in Excel oder Word übernimmt und formuliert. Zeitintensiv und wiederholbar.",
    symptoms: [
      "Reports haben feste Deadlines",
      "Datenquellen sind bekannt, aber nicht automatisch verknüpft",
      "Der Verfasser sucht die Daten regelmäßig neu",
      "Kein einheitliches Layout"
    ],
    causes: [
      "Kein Reporting-Layer über den Systemen",
      "Kein Template-Prozess",
      "Text muss immer wieder neu geschrieben werden"
    ],
    risks: [
      "Reports werden knapp fertig",
      "Fehler in Zahlen und Formulierungen",
      "Verlorene Kapazität in Führung / Vertrieb"
    ],
    solutionsIntro:
      "Wir bauen eine Pipeline, die Daten aus den relevanten Systemen zieht, in ein festes Template gießt und einen KI-formulierten Entwurf erzeugt. Der Verfasser prüft und passt an.",
    technologies: ["llm", "api", "workflow_automation", "individuelle_software"],
    beforeWorkflow: [
      { title: "Daten aus mehreren Systemen" },
      { title: "Excel / Word manuell füllen" },
      { title: "Text neu formulieren" },
      { title: "Layout finalisieren" }
    ],
    afterWorkflow: [
      { title: "Daten werden automatisch gezogen" },
      { title: "Template wird gefüllt" },
      { title: "KI schreibt Textentwurf" },
      { title: "Mensch prüft, passt an, gibt frei" }
    ],
    keepExisting:
      "Datenquellen und Layout bleiben. Der Prozess wird schneller und konsistenter.",
    worthWhen: [
      "Wiederkehrender Bericht mit klarer Struktur",
      "Datenquellen sind zugänglich",
      "Zeitdruck ist regelmäßig"
    ],
    costsNote:
      "Aufwand hängt von Anzahl der Datenquellen, Komplexität des Reports und Textmenge ab.",
    faq: [
      {
        question: "Kann die KI unsere Sprache treffen?",
        answer:
          "Ja. Wir trainieren sie auf Basis Ihrer bestehenden Reports und Sprachbeispiele."
      }
    ],
    relatedAutomationSlugs: [
      "berichte-automatisch-erstellen",
      "protokolle-aus-meetings",
      "baustellenberichte-strukturieren"
    ],
    relatedIntegrationSlugs: ["microsoft-365-hubspot", "sap-hubspot"],
    leadPrefill: {
      process: "Reporting-Automatisierung",
      context:
        "Reports werden aktuell manuell aus mehreren Systemen zusammengetragen."
    }
  },

  {
    slug: "terminkoordination-manuell",
    title: "Terminkoordination manuell",
    seoTitle: "Terminkoordination automatisieren · Kalender, CRM und Kunden",
    seoDescription:
      "Termine per Mail hin und her? So bauen wir eine intelligente Terminvereinbarung mit Kalender-, CRM- und Voice-Anbindung.",
    category: "kundenservice",
    hero: {
      h1: "Termine werden bei Ihnen per E-Mail-Ping-Pong vereinbart?",
      sub: "Wir automatisieren Terminvereinbarung mit Kalender, CRM und optional Sprach-KI · Ihr Team wird nicht mehr für Standardtermine gebunden."
    },
    problemStatement:
      "Termine kosten Zeit, bevor sie überhaupt stattfinden: Rückfragen, Alternativen, Bestätigungen, Erinnerungen, Absagen. Standardtermine (Kennenlernen, Erstberatung, Rückruf) sollten automatisch verhandelbar sein.",
    symptoms: [
      "3-4 Mails pro Termin",
      "Termine kollidieren regelmäßig",
      "Erinnerungen werden vergessen",
      "Kein Log im CRM"
    ],
    causes: [
      "Keine Terminbuchungslösung",
      "Keine CRM-Anbindung",
      "Keine Regeln für Termintypen"
    ],
    risks: [
      "Zeitverlust",
      "Verlorene Termine",
      "Schlechte Kundenerfahrung"
    ],
    solutionsIntro:
      "Wir setzen eine Terminlösung auf (z.B. Calendly, Cal.com, Microsoft Bookings) mit CRM-Anbindung, Regeln für Termintypen und Reminder-Automatisierung. Optional gekoppelt an eine Sprach-KI, die Termine telefonisch vereinbart.",
    technologies: ["api", "workflow_automation", "sprach_ki", "regelbasiert"],
    beforeWorkflow: [
      { title: "Mail-Anfrage nach Termin" },
      { title: "3-4 Mails Abstimmung" },
      { title: "Manuell im Kalender eintragen" },
      { title: "Erinnerung ggf. vergessen" }
    ],
    afterWorkflow: [
      { title: "Kunde wählt aus verfügbaren Slots" },
      { title: "Termin wird im Kalender & CRM angelegt" },
      { title: "Automatische Bestätigung + Reminder" },
      { title: "Optional: Sprach-KI vereinbart telefonisch" }
    ],
    keepExisting:
      "Kalender und CRM bleiben. Wir vernetzen sie und bauen die Buchungsoberfläche."
    ,
    worthWhen: [
      "Termine sind regelmäßiger Prozess",
      "Kalender-System ist vorhanden",
      "CRM-Anbindung ist gewünscht"
    ],
    costsNote:
      "Aufwand hängt von Termintypen, CRM- und Kalender-Anbindung und Voice-Anteil ab.",
    faq: [
      {
        question: "Können wir mehrere Termintypen abbilden?",
        answer:
          "Ja. Kennenlerngespräch, Erstberatung, Support-Termin. Jeder Typ mit eigenen Regeln (Dauer, Verantwortliche, Puffer)."
      }
    ],
    relatedAutomationSlugs: ["terminvereinbarung-automatisieren", "telefon-voicebot"],
    relatedIntegrationSlugs: ["calendly-hubspot", "microsoft-365-hubspot"],
    leadPrefill: {
      process: "Terminkoordination automatisieren",
      context:
        "Termine werden per Mail vereinbart, Kalender und CRM sind nicht verbunden."
    }
  }
];

export function findProblem(slug: string): Problem | undefined {
  return PROBLEMS.find((p) => p.slug === slug);
}
