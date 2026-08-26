export type Section = { heading: string; body: string[] };

export type Insight = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  category: string;
  keywords: string[];
  keyFacts: { label: string; value: string }[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "chatgpt-fuer-anfaenger-im-saarland",
    title: "ChatGPT für Anfänger im Saarland",
    subtitle: "Was ChatGPT ist, was es kann und wo Sie im Alltag beginnen.",
    description:
      "Ein praxisnaher Einstieg in ChatGPT für Menschen im Saarland: was das Werkzeug ist, wo Sie es sinnvoll einsetzen, welche Daten Sie nicht eingeben sollten und wie Sie in den nächsten 30 Minuten starten können.",
    publishedAt: "2026-08-26",
    updatedAt: "2026-08-26",
    readingMinutes: 9,
    category: "Grundlagen",
    keywords: [
      "ChatGPT für Anfänger",
      "ChatGPT Saarland",
      "KI für Senioren",
      "KI Einstieg Saarland",
      "ChatGPT einrichten"
    ],
    keyFacts: [
      { label: "Anbieter", value: "OpenAI (USA)" },
      { label: "Verfügbar in", value: "über 90 Sprachen inkl. Deutsch" },
      { label: "Kostenlose Version", value: "GPT-4o mini, mit Tageslimit" },
      { label: "Empfohlener Einstieg", value: "30 Minuten Setup" }
    ],
    sections: [
      {
        heading: "Was ChatGPT eigentlich ist",
        body: [
          "ChatGPT ist ein Chat-Werkzeug des amerikanischen Unternehmens OpenAI. Es beantwortet Fragen, formuliert Texte, fasst Dokumente zusammen und kann inzwischen auch Bilder erzeugen. Sie tippen eine Anfrage in ein Textfeld und bekommen innerhalb weniger Sekunden eine Antwort.",
          "Technisch dahinter steckt ein sogenanntes Sprachmodell. Sie brauchen dafür aber nichts zu wissen. Wichtig ist nur: Das Werkzeug ist ein Assistent. Es ersetzt kein Nachdenken, und es macht Fehler. Aber es spart bei den richtigen Aufgaben spürbar Zeit."
        ]
      },
      {
        heading: "Wofür ChatGPT im Saarländer Alltag taugt",
        body: [
          "Briefe und E-Mails formulieren: an Behörden, an Vermieter, an Versicherungen. Sie sagen in einem Satz, was Sie wollen, und bekommen einen sauber formulierten Text zurück.",
          "Recherche: Was bedeutet der Bescheid vom Finanzamt? Wie funktioniert der Wechsel eines Stromanbieters? Sie fragen einfach nach.",
          "Zusammenfassungen: Sie kopieren einen langen Text hinein und bitten um eine Zusammenfassung in drei Sätzen. Ideal für lange E-Mails, PDFs oder Nachrichten.",
          "Übersetzungen: ChatGPT übersetzt zuverlässig zwischen Deutsch, Französisch, Englisch, Luxemburgisch und vielen weiteren Sprachen. Im Dreiländer-Grenzgebiet ist das oft der Alltagsnutzen Nummer eins.",
          "Ideen und Vorschläge: Rezepte aus vorhandenen Zutaten, Ausflugsziele für das Wochenende, Formulierungsvorschläge für einen Trauerbrief."
        ]
      },
      {
        heading: "Wofür ChatGPT nicht geeignet ist",
        body: [
          "Rechtsverbindliche Auskünfte: Ein Steuerberater oder Anwalt ersetzt ChatGPT nicht. Wir empfehlen dringend, keine wichtigen Rechts- oder Finanzentscheidungen allein aufgrund einer ChatGPT-Antwort zu treffen.",
          "Medizinische Diagnosen: Für gesundheitliche Fragen bleibt die ärztliche Beratung erste Wahl. ChatGPT kann Symptome erklären, aber nicht behandeln.",
          "Absolut aktuelle Informationen: Die Wissensbasis hat ein Stichdatum. Neuere Ereignisse kennt das Werkzeug oft nicht oder unzuverlässig – hier greift die Web-Suchfunktion, die aber Fehler machen kann."
        ]
      },
      {
        heading: "Was Sie nicht in ChatGPT eingeben sollten",
        body: [
          "Vertrauliche personenbezogene Daten wie Sozialversicherungsnummern, Passdaten, Kontoverbindungen. Auch wenn OpenAI Ihre Daten nach eigener Aussage nicht zum Training nutzt (bei aktivierter Datenkontrolle), ist es besser, sie gar nicht erst zu übertragen.",
          "Firmen-Geschäftsgeheimnisse ohne vorherige Klärung. Für berufliche Nutzung empfehlen wir ChatGPT Team oder Enterprise – dort greifen andere Datenschutz-Regeln.",
          "Passwörter. Nie, unter keinen Umständen."
        ]
      },
      {
        heading: "In 30 Minuten starten",
        body: [
          "Schritt 1: Rufen Sie chatgpt.com auf und legen Sie einen kostenlosen Account an. Es reicht eine E-Mail-Adresse.",
          "Schritt 2: Stellen Sie eine erste einfache Frage – etwa: „Schreibe mir eine höfliche Absage-E-Mail auf einen Handwerkstermin, den ich nicht wahrnehmen kann.“ Beobachten Sie das Ergebnis.",
          "Schritt 3: Passen Sie an. Bitten Sie um eine kürzere oder höflichere Fassung. Bitten Sie um eine französische Übersetzung. Sie führen ein Gespräch, keinen Befehl.",
          "Schritt 4: Legen Sie sich zwei bis drei Ihrer Lieblings-Anfragen zurecht und nutzen Sie sie regelmäßig. Wenn Sie nach zwei Wochen merken, dass es Ihnen wirklich hilft, ist die Zahlversion (etwa 22 Euro pro Monat) meistens die überlegte Investition."
        ]
      },
      {
        heading: "Wo KBS Ihnen weiterhelfen kann",
        body: [
          "Wenn Sie lieber jemanden neben sich haben, der Sie Schritt für Schritt einweist, buchen Sie einen KBS KI-Hilfe-Termin. 60 bis 90 Minuten, bei Ihnen zu Hause oder per Videocall, ein fester Preis, kein Verkaufsdruck. Nach dem Termin nutzen Sie ChatGPT selbstständig weiter."
        ]
      }
    ],
    faqs: [
      {
        q: "Kostet ChatGPT etwas?",
        a: "Die Standardversion mit GPT-4o mini ist kostenlos, hat aber tägliche Nutzungslimits. Die kostenpflichtige Version (ChatGPT Plus, aktuell etwa 22 Euro pro Monat) liefert deutlich bessere Antworten und höhere Nutzungsgrenzen."
      },
      {
        q: "Ist ChatGPT auf Deutsch verfügbar?",
        a: "Ja. ChatGPT versteht und antwortet fließend auf Deutsch, auch in saarländischen Formulierungen. Für Kanzleien und formelle Kommunikation liefert es sauberes Hochdeutsch."
      },
      {
        q: "Kann ich ChatGPT auf meinem Handy nutzen?",
        a: "Ja. Es gibt offizielle Apps für iOS und Android. Anmeldung mit derselben E-Mail-Adresse wie im Browser, dann synchronisieren sich die Unterhaltungen automatisch."
      }
    ],
    relatedSlugs: [
      "ki-im-handwerk-10-anwendungsfaelle",
      "lokale-ki-vs-cloud"
    ]
  },
  {
    slug: "ki-im-handwerk-10-anwendungsfaelle",
    title: "KI im Handwerk: 10 Anwendungsfälle, die sofort tragen",
    subtitle:
      "Konkrete Beispiele aus dem Alltag: Angebote, Baustellen, Kundenkommunikation.",
    description:
      "Zehn belastbare Anwendungsfälle für KI im Handwerksbetrieb – von der Angebotserstellung bis zur mehrsprachigen Kundenkommunikation. Praxisnah, mit Aufwandsschätzung und Werkzeug-Empfehlung.",
    publishedAt: "2026-08-26",
    updatedAt: "2026-08-26",
    readingMinutes: 12,
    category: "Handwerk",
    keywords: [
      "KI im Handwerk",
      "KI Handwerksbetrieb",
      "ChatGPT für Handwerker",
      "Angebot erstellen KI",
      "KI Baustellendokumentation"
    ],
    keyFacts: [
      { label: "Typische Zeitersparnis", value: "3 – 8 Stunden pro Woche" },
      { label: "Investitionshöhe", value: "meist unter 100 € pro Monat" },
      { label: "Setup-Aufwand", value: "einmalig 2 – 4 Stunden" },
      { label: "Break-Even", value: "in der Regel unter 4 Wochen" }
    ],
    sections: [
      {
        heading: "Warum KI im Handwerk so schnell rechnet",
        body: [
          "Jeder Handwerksbetrieb schreibt Angebote, beantwortet Anfragen, dokumentiert Baustellen und kümmert sich um die interne Kommunikation. Genau diese wiederkehrenden Textarbeiten kosten Zeit – oft am Abend, oft am Wochenende. KI-Werkzeuge greifen genau dort und schaffen spürbar Freiraum.",
          "Der wichtigste Grundsatz vorweg: KI ersetzt keinen Handwerker und keinen Kalkulationsbogen. Sie beschleunigt Textarbeit und Recherche. Und genau davon gibt es im Alltag mehr als genug."
        ]
      },
      {
        heading: "1. Angebote aus Kundenanfragen erzeugen",
        body: [
          "Sie kopieren die Kundenanfrage in einen Prompt („Erstelle mir ein Angebot mit folgenden Positionen…“) und bekommen einen sauber formulierten Entwurf. Preise setzen Sie weiterhin selbst.",
          "Werkzeug: ChatGPT oder Claude. Zeitersparnis: 15 bis 40 Minuten pro Angebot."
        ]
      },
      {
        heading: "2. Baustellendokumentation per Sprachnotiz",
        body: [
          "Sie sprechen unterwegs eine kurze Sprachnotiz („Fenster im OG rechts, Rahmen verzogen, Kondenswasser innen“). KI strukturiert das in einen ordentlichen Baustellenbericht mit Datum, Position und Handlungsempfehlung.",
          "Werkzeug: ChatGPT-App mit Diktat oder Whisper-basierte Transkription. Zeitersparnis: 20 bis 60 Minuten pro Tag."
        ]
      },
      {
        heading: "3. Materialrecherche aus einem Foto",
        body: [
          "Sie fotografieren eine Kachel, ein Beschlag oder ein Ersatzteil. KI-Modelle mit Bildverständnis (GPT-4o, Claude 3.7) identifizieren das Teil und schlagen Bezugsquellen vor.",
          "Werkzeug: ChatGPT oder Claude. Zeitersparnis: 10 bis 30 Minuten pro Suche."
        ]
      },
      {
        heading: "4. Kundenkommunikation formulieren",
        body: [
          "Absagen, Umlegungen, Nachfragen zu unklaren Aufträgen. Sie sagen in einem Satz, was Sie mitteilen möchten, und bekommen eine sauber formulierte, höfliche Nachricht.",
          "Zeitersparnis: 5 bis 15 Minuten pro Nachricht. Auf ein Jahr gerechnet: viele Stunden."
        ]
      },
      {
        heading: "5. Mehrsprachige Kommunikation im Grenzverkehr",
        body: [
          "Antworten auf französische oder englische Anfragen von Kunden aus Luxemburg oder dem Elsass werden zum Standard, nicht zur Ausnahme. KI-Werkzeuge übersetzen zuverlässig und mit korrekter Anrede."
        ]
      },
      {
        heading: "6. Google-Bewertungen sinnvoll beantworten",
        body: [
          "Positive Bewertungen bekommen freundliche, persönliche Antworten. Negative Bewertungen bekommen sachliche, deeskalierende Antworten. KI liefert die Erstentwürfe – Sie geben nur noch frei."
        ]
      },
      {
        heading: "7. Social-Media-Posts vorbereiten",
        body: [
          "Ein Foto von einer abgeschlossenen Baustelle, ein Satz Kontext, KI liefert einen passenden Post-Text mit Hashtags. Aus zehn Minuten Aufwand pro Woche werden über das Jahr sichtbare Instagram- oder Facebook-Profile."
        ]
      },
      {
        heading: "8. Rechnungsdaten aus PDFs herausziehen",
        body: [
          "Lieferantenrechnungen als PDF werden per KI in Positionen zerlegt und für DATEV, Lexoffice oder sevDesk vorbereitet. Bei größeren Betrieben lohnt sich ein dedizierter Automations-Workflow – bei kleinen reicht der Zwischenschritt über ChatGPT."
        ]
      },
      {
        heading: "9. Leistungsbeschreibungen und Wartungsanleitungen",
        body: [
          "Aus wenigen Stichworten wird eine belastbare, kundengerechte Leistungsbeschreibung. Ideal für Angebote, Wartungsverträge und die Website."
        ]
      },
      {
        heading: "10. Mitarbeiterschulung und Onboarding",
        body: [
          "Neue Mitarbeiter fragen ChatGPT nach Standard-Prozessen (Wie fülle ich den Baustellenbericht aus? Wie hänge ich Zeitnachweise ab?). Das entlastet die Ausbilder und beschleunigt das Onboarding."
        ]
      },
      {
        heading: "Wie KBS Sie im Handwerk begleitet",
        body: [
          "Ein KBS KI-Check klärt in 90 bis 120 Minuten, welche drei bis fünf dieser zehn Anwendungsfälle bei Ihnen sofort rechnen. Danach richten wir die Werkzeuge im Betrieb ein und schulen wo nötig – meist reicht ein weiterer Vormittag."
        ]
      }
    ],
    faqs: [
      {
        q: "Ist KI im Handwerk nicht nur etwas für große Betriebe?",
        a: "Nein, im Gegenteil. Gerade kleine Betriebe mit einem Chef, der abends noch Angebote schreibt, profitieren am stärksten. Jede eingesparte Stunde ist direkt Freizeit oder mehr Auftragsvolumen."
      },
      {
        q: "Muss ich für KI eine neue Software kaufen?",
        a: "Meistens nicht. Die üblichen Aufgaben deckt ChatGPT oder Claude für rund 20 Euro pro Monat ab. Nur wenn Sie tiefergehende Integration in Ihre Handwerkersoftware wollen (etwa MOS'aik, KWP, Streit), wird das komplexer."
      },
      {
        q: "Was ist mit Datenschutz auf der Baustelle?",
        a: "Personendaten von Kunden sollten Sie in Standard-KI-Werkzeugen möglichst nicht im Klartext übertragen. Für sensible Anwendungsfälle gibt es lokale KI-Systeme oder ChatGPT Team mit strikteren Regeln – dazu beraten wir bei Bedarf gezielt."
      }
    ],
    relatedSlugs: [
      "chatgpt-fuer-anfaenger-im-saarland",
      "lokale-ki-vs-cloud",
      "eu-ai-act-fuer-mittelstand"
    ]
  },
  {
    slug: "lokale-ki-vs-cloud",
    title: "Lokale KI oder Cloud: Was passt zu Ihrem Unternehmen?",
    subtitle:
      "Wann ChatGPT ausreicht, wann Ihr eigener KI-Server im Serverschrank die bessere Wahl ist.",
    description:
      "Eine ehrliche Gegenüberstellung von Cloud-KI und lokaler KI (on-premise). Für kleine Betriebe, Kanzleien, Praxen und Mittelständler – mit klaren Empfehlungen, wann welches Setup wirklich passt.",
    publishedAt: "2026-08-26",
    updatedAt: "2026-08-26",
    readingMinutes: 11,
    category: "Enterprise",
    keywords: [
      "lokale KI",
      "on-premise LLM",
      "KI Cloud vs local",
      "Mac Mini KI",
      "DSGVO KI Unternehmen"
    ],
    keyFacts: [
      { label: "Cloud-Kosten pro Nutzer/Monat", value: "ca. 22 – 50 €" },
      { label: "Einmalige Hardware für lokale KI", value: "ab 3.500 €" },
      { label: "Break-Even (5 aktive Nutzer)", value: "meist unter 6 Monate" },
      { label: "Datenhoheit lokal", value: "100 %" }
    ],
    sections: [
      {
        heading: "Der Unterschied in einem Satz",
        body: [
          "Cloud-KI heißt: Ihre Anfragen wandern zu einem externen Anbieter (OpenAI, Anthropic, Google), werden dort verarbeitet und die Antwort kommt zurück. Lokale KI heißt: das Modell läuft auf Ihrer eigenen Hardware, Ihre Daten verlassen Ihre Infrastruktur nicht."
        ]
      },
      {
        heading: "Wann Cloud-KI die richtige Wahl ist",
        body: [
          "Für die meisten Selbstständigen und kleinen Unternehmen ist Cloud-KI der pragmatische Einstieg. Es gibt drei Gründe: Sie ist sofort verfügbar, die Modelle sind aktuell die leistungsstärksten am Markt, und die Kosten sind planbar.",
          "Solange Sie keine wirklich sensiblen Daten verarbeiten (etwa Patientendaten, Mandantendaten in Kanzleien, streng vertrauliche Unternehmensdaten), reicht ChatGPT Team oder Claude Team für rund 25 bis 50 Euro pro Nutzer und Monat. Setup: eine Stunde. Nutzen: sofort."
        ]
      },
      {
        heading: "Wann lokale KI die bessere Wahl ist",
        body: [
          "Sobald Sie sensiblen Daten begegnen, ändert sich die Rechnung. Kanzleien mit Mandatsakten, Arztpraxen mit Patientendaten, Konzerne mit Betriebsgeheimnissen, Behörden mit Personendaten – hier ist die Frage nicht ob, sondern wie schnell Sie zu on-premise wechseln.",
          "Der zweite Grund ist wirtschaftlich: Ab etwa fünf aktiv nutzenden Mitarbeitern rechnet sich die einmalige Hardware-Investition oft in unter sechs Monaten gegen die monatlichen Cloud-Gebühren.",
          "Der dritte Grund ist Verfügbarkeit: Lokale Modelle haben kein Rate-Limit, keine Ausfälle bei Anbieter-Störungen, kein plötzliches Preis-Update."
        ]
      },
      {
        heading: "Was ein realistisches lokales Setup kostet",
        body: [
          "Für kleinere Teams reicht ein Mac Mini M4 Pro mit 48 bis 64 GB Unified Memory (ca. 3.500 bis 4.500 Euro einmalig). Darauf läuft ein Modell wie Llama 3.3 70B in quantisierter Form, mit Antwortzeiten unter zwei Sekunden bei typischen Anfragen.",
          "Für Konzerne mit vielen parallel arbeitenden Nutzern empfiehlt sich dedizierte Server-Hardware mit NVIDIA-GPUs (ab 15.000 Euro aufwärts). Wir dimensionieren das gezielt nach Nutzerzahl und Anwendungsfall."
        ]
      },
      {
        heading: "Was lokal nicht so gut geht (Stand 2026)",
        body: [
          "Modelle mit riesigem Wissensschatz und tiefer Reasoning-Fähigkeit (GPT-5, Claude Opus, o3) laufen auf üblicher On-Prem-Hardware nicht. Wer die Spitzenleistung dieser Modelle für einzelne Aufgaben braucht, kann sie ergänzend über sichere API-Verbindungen einsetzen – am besten mit klaren Regeln, welche Daten wohin dürfen.",
          "Auch multimodale Aufgaben (Bilder, Videos, Audio) sind lokal noch aufwendiger als in der Cloud. Hier lohnt sich der Aufwand meist erst bei größeren Anwendungsfällen."
        ]
      },
      {
        heading: "Die pragmatische Empfehlung",
        body: [
          "Kleine Unternehmen ohne sensible Daten: Cloud-KI (ChatGPT Team oder Claude Team). Setup an einem Nachmittag, sofort produktiv.",
          "Unternehmen mit sensiblen Daten oder mehr als fünf aktiven Nutzern: hybrider Ansatz. Lokales Modell für den Alltag, Cloud-Modelle nur für gezielte Spezialaufgaben mit anonymisierten Daten.",
          "Kanzleien, Praxen, Behörden, Konzerne mit strengen Compliance-Anforderungen: klar on-premise. Meistens ergänzt um eine kontrollierte Cloud-Nutzung für unkritische Aufgaben."
        ]
      },
      {
        heading: "Wie KBS das umsetzt",
        body: [
          "Für kleine Cloud-Setups nutzen Sie unsere KI-Einrichtung. Für lokale Installationen (Mac Mini oder dedizierte Server) läuft das über KBS Business – dort planen, installieren und übergeben wir das komplette Setup, DSGVO-konform und mit klarer Dokumentation."
        ]
      }
    ],
    faqs: [
      {
        q: "Kann man einen lokalen KI-Server auch mieten statt kaufen?",
        a: "Ja. Für Test- oder Übergangsphasen bieten wir bei Bedarf Mietmodelle für einzelne Mac Minis oder Server. Das reduziert das Risiko, wenn man das Konzept erst intern etablieren möchte."
      },
      {
        q: "Wie viel Strom braucht ein Mac Mini als KI-Server?",
        a: "Sehr wenig. Ein Mac Mini M4 Pro unter Volllast zieht rund 60 bis 90 Watt. Rechnerisch bewegen sich die jährlichen Stromkosten meist im niedrigen dreistelligen Bereich – deutlich unter der Ersparnis gegenüber Cloud-API-Kosten."
      },
      {
        q: "Ist lokale KI wirklich DSGVO-konform?",
        a: "Ja, sofern das Modell keinen Rückkanal an einen externen Anbieter hat und Sie klare Nutzungsregeln definieren. Wir setzen ausschließlich Modelle ein, die ohne Netzverbindung laufen können, und dokumentieren die Konfiguration für Ihre Datenschutz-Verantwortlichen."
      }
    ],
    relatedSlugs: [
      "eu-ai-act-fuer-mittelstand",
      "ki-im-handwerk-10-anwendungsfaelle"
    ]
  },
  {
    slug: "eu-ai-act-fuer-mittelstand",
    title: "EU AI Act für den Mittelstand – was jetzt zählt",
    subtitle:
      "Ein pragmatischer Leitfaden zu den EU-KI-Regeln für kleine und mittelständische Unternehmen.",
    description:
      "Der EU AI Act betrifft nicht nur Konzerne. Dieser Leitfaden zeigt, was Selbstständige, kleine Unternehmen und Mittelständler wirklich beachten müssen – ohne Panikmache und ohne juristisches Fachchinesisch.",
    publishedAt: "2026-08-26",
    updatedAt: "2026-08-26",
    readingMinutes: 10,
    category: "Compliance",
    keywords: [
      "EU AI Act",
      "AI Act Mittelstand",
      "KI-Verordnung DSGVO",
      "EU KI Gesetz Unternehmen",
      "AI Act Compliance"
    ],
    keyFacts: [
      { label: "Inkrafttreten", value: "01.08.2024 (Übergangsphasen bis 2027)" },
      {
        label: "Wichtigste Fristen",
        value: "02.02.2025 (verbotene Praktiken), 02.08.2026 (Hochrisiko-Systeme)"
      },
      { label: "Zuständig in DE", value: "BNetzA, BaFin, BfDI (koordiniert)" },
      { label: "Bußgeldrahmen", value: "bis 35 Mio. € oder 7 % Weltumsatz" }
    ],
    sections: [
      {
        heading: "Der EU AI Act in einem Absatz",
        body: [
          "Der EU AI Act (offiziell: Verordnung (EU) 2024/1689) ist die erste umfassende KI-Regulierung weltweit. Sie klassifiziert KI-Systeme nach Risikoklassen: verboten, hochrisikobehaftet, mit Transparenzpflichten, minimal reguliert. Für den Mittelstand ist meist die Frage entscheidend, ob eingesetzte Werkzeuge in eine der oberen zwei Kategorien fallen."
        ]
      },
      {
        heading: "Was für kleine Unternehmen wirklich zählt",
        body: [
          "Für die überwiegende Mehrheit kleiner Unternehmen ist die praktische Auswirkung überschaubar. Standardnutzung von ChatGPT, Claude oder Copilot für E-Mails, Angebote, Texte oder Recherche fällt in der Regel in die niedrig regulierte oder transparenzpflichtige Kategorie.",
          "Was Sie tun sollten: eine kurze Übersicht Ihrer eingesetzten KI-Werkzeuge, Nutzungsrichtlinien für Ihre Mitarbeiter, klare Regeln für sensible Daten. Das ist keine Raketenwissenschaft, aber es sollte einmal sauber gemacht sein."
        ]
      },
      {
        heading: "Wann Sie besonders aufpassen sollten",
        body: [
          "Personalauswahl mit KI (Lebenslauf-Screening, Assessment-Bewertung): fällt schnell in den Hochrisiko-Bereich. Hier gelten strenge Dokumentations- und Prüfpflichten.",
          "Kreditbewertung oder Bonitätsscoring mit KI: ebenfalls Hochrisiko. Für viele Selbstständige und Mittelständler eher ein Randthema, für Banken und Fintechs zentral.",
          "Emotionserkennung, biometrische Kategorisierung, Predictive Policing: verboten oder stark reglementiert – für die meisten Mittelständler nicht relevant.",
          "Alles, was mit medizinischer Diagnostik, Bildungsentscheidungen oder öffentlicher Sicherheit zu tun hat, verdient eine gezielte rechtliche Prüfung."
        ]
      },
      {
        heading: "Was Sie konkret dokumentieren sollten",
        body: [
          "Welche KI-Werkzeuge in Ihrem Unternehmen offiziell eingesetzt werden.",
          "Welche Daten in diese Werkzeuge fließen dürfen – und welche nicht.",
          "Wer Zugriff auf welches Werkzeug hat.",
          "Wie Sie KI-generierte Inhalte prüfen, bevor sie den Betrieb verlassen (Vier-Augen-Prinzip bei Kundenkommunikation).",
          "Wie Sie mit Mitarbeitern kommunizieren, dass bestimmte Bereiche KI-frei bleiben (z. B. Personalgespräche)."
        ]
      },
      {
        heading: "Der Elefant im Raum: Shadow AI",
        body: [
          "Die häufigste Compliance-Baustelle im Mittelstand ist nicht der offizielle Einsatz, sondern die inoffizielle Nutzung. Wenn drei Mitarbeiter ihre private ChatGPT-Version nutzen und Kundendaten hineinkopieren, ist das eine reale DSGVO- und AI-Act-Baustelle – auch wenn niemand das bewusst getan hat.",
          "Ein KBS KI-Audit deckt Shadow AI in einem Vormittag auf und liefert einen konkreten Aktionsplan. Meist ist die Lösung nicht ‚KI verbieten‘, sondern ‚eine offizielle, sichere Alternative anbieten und klare Regeln kommunizieren‘."
        ]
      },
      {
        heading: "Der Zusammenhang mit der DSGVO",
        body: [
          "Der EU AI Act ersetzt die DSGVO nicht, er ergänzt sie. In der Praxis überschneiden sich die Themen: wo personenbezogene Daten verarbeitet werden, gelten beide Regime. Wer seine DSGVO-Hausaufgaben gemacht hat, hat auch für den AI Act eine solide Grundlage."
        ]
      },
      {
        heading: "Wie KBS Sie beim AI Act unterstützt",
        body: [
          "Für kleine Unternehmen genügt oft ein KBS KI-Check mit Compliance-Fokus. Für mittelständische und größere Setups liefert KBS Business ein vollständiges Audit, Betriebsvereinbarungs-Entwürfe und die Schulung Ihrer KI-Verantwortlichen – abgestimmt auf Ihre Branche."
        ]
      }
    ],
    faqs: [
      {
        q: "Muss ich als Einzelunternehmer den AI Act beachten?",
        a: "Ja, aber der praktische Aufwand ist meist minimal. Solange Sie Standard-KI-Werkzeuge für nicht-kritische Aufgaben nutzen, reicht eine klare interne Regelung darüber, welche Kundendaten Sie nicht in KI-Systeme eingeben."
      },
      {
        q: "Wer prüft die Einhaltung des AI Act?",
        a: "In Deutschland koordinieren mehrere Behörden. Für die meisten Mittelständler ist zunächst die BNetzA (Bundesnetzagentur) die zentrale Kontaktstelle. Bei personenbezogenen Daten bleiben die Landesdatenschutzbehörden zuständig."
      },
      {
        q: "Ab wann greifen die Bußgelder?",
        a: "Die höchsten Bußgeldrahmen gelten für verbotene Praktiken – hier bereits seit Anfang 2025. Für Hochrisiko-Systeme greifen die Sanktionen ab 2. August 2026 vollständig. Für Standard-Nutzung im Mittelstand liegt der praktische Fokus derzeit auf Dokumentation und Transparenz."
      }
    ],
    relatedSlugs: [
      "lokale-ki-vs-cloud",
      "ki-im-handwerk-10-anwendungsfaelle"
    ]
  }
];

export function findInsight(slug: string) {
  return INSIGHTS.find((i) => i.slug === slug);
}
