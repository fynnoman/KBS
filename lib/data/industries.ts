export type IndustryUseCase = {
  title: string;
  description: string;
};

export type IndustryFaq = {
  q: string;
  a: string;
};

export type Industry = {
  slug: string;
  name: string;
  displayName: string;
  tag: string;
  headline: string;
  headlineSecondary: string;
  intro: string;
  processes: string[];
  useCases: IndustryUseCase[];
  tools: string[];
  risks: string[];
  priorities: string[];
  relatedCourseSlugs: string[];
  faqs: IndustryFaq[];
  keywords: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "handwerk",
    name: "Handwerksbetriebe",
    displayName: "Handwerk",
    tag: "KI für Handwerk",
    headline: "KI für Handwerksbetriebe.",
    headlineSecondary: "Weniger Papierkram, mehr Zeit auf der Baustelle.",
    intro:
      "Handwerksbetriebe verbringen einen erheblichen Teil des Arbeitstages nicht auf der Baustelle, sondern im Büro: Angebote schreiben, Rückfragen beantworten, Aufmaße dokumentieren, Rechnungen erstellen. Generative KI kann viele dieser Text- und Dokumentations-Aufgaben spürbar beschleunigen, ohne dass der Betrieb dafür seine Software wechseln muss. Der praktische Nutzen entsteht meist in der Verwaltung, nicht in der Ausführung.",
    processes: [
      "Angebotserstellung und Kalkulationstexte",
      "Kundenanfragen per E-Mail und Kontaktformular beantworten",
      "Aufmaß-Protokolle und Bautagebücher formulieren",
      "Rechnungstexte, Zahlungserinnerungen und Mahnungen",
      "Ausschreibungen sichten und relevante Punkte zusammenfassen",
      "Mitarbeiterkommunikation, Einsatzpläne und interne Anweisungen"
    ],
    useCases: [
      {
        title: "Angebot in Minuten statt Stunden",
        description:
          "Standardpositionen aus früheren Angeboten als Basis, dann per KI die individuellen Textbausteine für den konkreten Auftrag ergänzen. Der Kalkulationsteil bleibt in Ihrer Handwerkersoftware, nur die Formulierungen werden schneller."
      },
      {
        title: "Kundenanfragen strukturieren",
        description:
          "Eingehende E-Mails und Kontaktformular-Anfragen werden durch KI vorsortiert und in Kategorien (Anfrage, Termin, Reklamation) eingeordnet. Ihr Team beantwortet gezielt, statt jede Nachricht neu einzuordnen."
      },
      {
        title: "Bautagebuch aus Sprachnotiz",
        description:
          "Ein Bauleiter diktiert Beobachtungen ins Handy, KI wandelt die Notiz in einen strukturierten Bautagebuch-Eintrag. Format und Formulierung bleiben konsistent, unabhängig davon, wer den Text spricht."
      }
    ],
    tools: [
      "Text-KI (ChatGPT, Claude) für Angebote und Antworten",
      "Sprach-zu-Text-Werkzeuge für Sprachnotizen",
      "OCR/Belegverarbeitung für Eingangsrechnungen",
      "Optional: Anbindung an bestehende Handwerkersoftware"
    ],
    risks: [
      "Kundendaten dürfen nicht in Consumer-Chatbots eingegeben werden ohne geprüfte Datenverarbeitungsvereinbarung",
      "Verbindliche Preiszusagen und rechtliche Formulierungen sollten immer geprüft werden",
      "Vertrauliche Ausschreibungsunterlagen brauchen einen klar geregelten Umgang",
      "Fehlerhafte Automatisierung im Zahlungsverkehr kann teuer werden, manuelle Freigabe bleibt Pflicht"
    ],
    priorities: [
      "Starten Sie mit Angebotstexten, hier ist der Zeitgewinn am schnellsten sichtbar",
      "Dann E-Mail-Vorsortierung, reduziert die tägliche Mailflut ohne Software-Wechsel",
      "Erst danach Prozesse, die in bestehende Handwerkersoftware eingreifen"
    ],
    relatedCourseSlugs: ["ki-anwender", "prompt-engineering", "strategie"],
    faqs: [
      {
        q: "Muss ich meine bisherige Handwerkersoftware ersetzen?",
        a: "Nein. Die meisten KI-Anwendungen im Handwerk laufen parallel zur bestehenden Software, zum Beispiel für Textbausteine, Antworten oder interne Dokumentation. Ein Software-Wechsel ist selten notwendig."
      },
      {
        q: "Können auch kleine Betriebe unter zehn Mitarbeitern KI sinnvoll einsetzen?",
        a: "Gerade dort ist der Effekt oft am größten. In kleinen Betrieben erledigt der Chef häufig selbst die Angebotserstellung. Jede Stunde, die dabei gespart wird, steht wieder für Kundentermine oder Ausführung zur Verfügung."
      },
      {
        q: "Wie steht es mit dem Datenschutz für Kundenprojekte?",
        a: "Personenbezogene Kundendaten gehören nicht ungefiltert in Consumer-Tools. Für professionellen Einsatz gibt es Business-Varianten der bekannten KI-Anbieter mit passenden Verarbeitungsvereinbarungen, oder alternativ lokale KI-Lösungen. Wir zeigen im Erstgespräch, was für Ihre Betriebsgröße realistisch ist."
      }
    ],
    keywords: [
      "KI für Handwerk",
      "KI Handwerksbetrieb",
      "KI Angebot Handwerk",
      "ChatGPT Handwerk",
      "Digitalisierung Handwerk Saarland"
    ]
  },
  {
    slug: "gebaeudereinigung",
    name: "Gebäudereinigung",
    displayName: "Gebäudereinigung",
    tag: "KI für Gebäudereinigung",
    headline: "KI für Gebäudereinigungsbetriebe.",
    headlineSecondary: "Ausschreibungen, Objektakten und Kundenkommunikation im Griff.",
    intro:
      "Gebäudereinigung ist ein margenempfindliches Geschäft mit viel Verwaltung: Ausschreibungen bewerten, Angebote kalkulieren, Objektakten pflegen, Vorarbeiter briefen, Reklamationen bearbeiten. Generative KI kann in der Verwaltung erheblich entlasten, vor allem bei textlastigen Aufgaben und bei der Auswertung eingehender Dokumente. Die eigentliche Reinigungsleistung bleibt Handarbeit, aber die Zeit dafür wird spürbar frei.",
    processes: [
      "Ausschreibungen und Leistungsverzeichnisse sichten",
      "Angebote und Objektkalkulationen formulieren",
      "Objektakten, Reinigungspläne und Nachweise dokumentieren",
      "Vorarbeiter-Briefings und Schichtpläne",
      "Kundenkommunikation und Reklamationsbearbeitung",
      "Berichte an Auftraggeber (Qualitätskontrollen, Sondereinsätze)"
    ],
    useCases: [
      {
        title: "Ausschreibungen schneller einordnen",
        description:
          "Umfangreiche Leistungsverzeichnisse werden per KI zusammengefasst: Was ist gefordert, welche Sonderleistungen, welche Fristen. Ihr Kalkulator arbeitet gezielt an der wirtschaftlichen Bewertung, statt sich durch dreißig Seiten Textwüste zu kämpfen."
      },
      {
        title: "Objektakte aus Sprachnotiz",
        description:
          "Der Vorarbeiter diktiert nach der Erstbegehung die Beobachtungen ins Handy. KI erstellt daraus die strukturierte Objektakte in Ihrem Standardformat, inklusive Sonderhinweisen und Frequenzvorschlägen."
      },
      {
        title: "Reklamationen professionell und schnell",
        description:
          "Eingehende Kundenreklamationen werden per KI in einen strukturierten Antwortentwurf überführt: Entschuldigung, Sachverhalts-Feststellung, konkreter Vorschlag zur Behebung, Termin. Der Objektleiter prüft, ergänzt fachlich und gibt frei."
      }
    ],
    tools: [
      "Text-KI für Ausschreibungs-Zusammenfassungen und Angebotstexte",
      "Sprach-zu-Text-Werkzeuge für Objektbegehungen",
      "Optional: RAG-Assistenten auf Basis eigener Objektakten und Musterverträge",
      "OCR für eingehende Ausschreibungs-PDFs"
    ],
    risks: [
      "Kalkulationsentscheidungen bleiben beim Menschen, KI liefert Zusammenfassung, nicht die Preisentscheidung",
      "Vertragsklauseln in Ausschreibungen niemals ohne juristische Prüfung übernehmen",
      "Personalbezogene Daten (Schichtpläne, Krankmeldungen) gehören in geprüfte Business-Umgebungen, nicht in öffentliche Chatbots",
      "Reklamationsantworten müssen fachlich geprüft werden, bevor sie an den Kunden gehen"
    ],
    priorities: [
      "Beginnen Sie mit Ausschreibungs-Zusammenfassungen, der Zeitdruck ist dort am höchsten",
      "Als nächstes Objektbegehungen mit Sprachnotiz, erhöht die Konsistenz Ihrer Akten",
      "Erst danach automatisierte Reklamations-Entwürfe, immer mit menschlicher Freigabe"
    ],
    relatedCourseSlugs: ["ki-anwender", "kundenservice", "strategie"],
    faqs: [
      {
        q: "Lohnt sich KI schon für einen mittelgroßen Gebäudereinigungs-Betrieb?",
        a: "Ja. Gerade Betriebe mit zehn bis fünfzig Mitarbeitenden profitieren, weil die Verwaltung dort selten mehr als zwei bis drei Personen umfasst und jede Zeitersparnis unmittelbar spürbar ist. Große Konzerne haben eigene Digitalisierungs-Abteilungen, mittelständische Betriebe profitieren besonders von externen KI-Impulsen."
      },
      {
        q: "Können Reinigungspläne per KI erstellt werden?",
        a: "Textliche Frequenz- und Raumbeschreibungen ja, die eigentliche Planung im Reinigungssystem bleibt in Ihrer Fachsoftware. KI unterstützt beim Aufsetzen und beim Verfassen erklärender Texte, ersetzt aber keine Objektbegehung."
      },
      {
        q: "Welche Rolle spielt der Betriebsrat?",
        a: "Bei jeder Einführung von KI, die Mitarbeitende betrifft, greift die Mitbestimmung. Wir empfehlen den Betriebsrat früh einzubinden, insbesondere wenn KI im Bereich Personalverwaltung oder Bewertung eingesetzt wird. Für den reinen Bereich Verwaltung/Angebote ist die Mitbestimmungspflicht meist geringer, sollte aber immer geprüft werden."
      }
    ],
    keywords: [
      "KI für Gebäudereinigung",
      "KI Reinigungsbetrieb",
      "Ausschreibung KI",
      "Objektakte KI",
      "Digitalisierung Gebäudereinigung"
    ]
  },
  {
    slug: "immobilien",
    name: "Immobilien & Makler",
    displayName: "Immobilien",
    tag: "KI für Immobilien & Makler",
    headline: "KI für Immobilien und Makler.",
    headlineSecondary: "Exposé, Anfragen und Vertragsvorbereitung schneller.",
    intro:
      "Immobilienmakler arbeiten mit stark standardisierten Texten und einer hohen Anzahl paralleler Objekte. Genau das ist ein Feld, in dem generative KI schnell Wirkung zeigt: von Exposé-Formulierungen über Anfrage-Vorqualifikation bis zur Vorbereitung von Verträgen und Übergabeprotokollen. Wichtig bleibt die menschliche Endkontrolle, gerade bei Preisen, Zusagen und rechtlichen Aussagen.",
    processes: [
      "Exposé-Texte für Objekte auf Portalen und Website",
      "Erstbeantwortung von Interessenten-Anfragen",
      "Besichtigungs-Terminorganisation und Vorbereitung",
      "Übergabeprotokolle und Wohnungsübergaben",
      "Miet- und Kaufvertrags-Vorbereitung (Textbausteine)",
      "Marketing für neue Objekte: Newsletter, Social Media"
    ],
    useCases: [
      {
        title: "Exposé aus Objektdaten",
        description:
          "Aus Objekt-Stammdaten und Fotos entsteht ein erster Exposé-Entwurf: Beschreibung, Highlights, Umgebungshinweise. Der Makler prüft, korrigiert Fakten und ergänzt individuelle Details. Das reine Formulieren fällt weitgehend weg."
      },
      {
        title: "Anfragen vorqualifizieren",
        description:
          "Eingehende Portal-Anfragen werden per KI ausgewertet und in Kategorien eingeordnet (ernsthaft, Standard, unklar). Fehlende Informationen werden in einer Rückfrage-Vorlage automatisch erfragt, sodass der Makler nur noch qualifizierte Kontakte manuell bearbeitet."
      },
      {
        title: "Übergabeprotokoll aus Sprachnotiz",
        description:
          "Der Makler diktiert die Feststellungen bei der Wohnungsübergabe ins Handy. KI erstellt daraus das strukturierte Protokoll in Ihrem Standardformat, inklusive Zählerstände, Mängelbeschreibung und Rückgabezustand."
      }
    ],
    tools: [
      "Text-KI für Exposés, E-Mails und Marketing-Texte",
      "Sprach-zu-Text für Objektbegehungen und Übergaben",
      "Optional: RAG auf eigenem Objekt- und Vertragsarchiv",
      "OCR für eingehende Objekt-Unterlagen"
    ],
    risks: [
      "Zusicherungen zu Ausstattung, Zustand und Nebenkosten müssen faktisch geprüft werden, die KI kann nicht vor Ort sein",
      "Personenbezogene Daten aus Selbstauskünften brauchen einen DSGVO-konformen Umgang",
      "Vertragsklauseln nie ungeprüft aus KI-Vorschlägen übernehmen, juristische Kontrolle bleibt Pflicht",
      "Bildmaterial darf nicht so verändert werden, dass es den Objektzustand verfälscht"
    ],
    priorities: [
      "Starten Sie mit Exposés, hoher Standardisierungsgrad, geringes Rechtsrisiko bei sauberer Endkontrolle",
      "Dann Anfrage-Vorqualifikation, entlastet das Postfach direkt",
      "Erst danach Vertrags- und Übergabe-Themen, immer mit klarem Freigabeprozess"
    ],
    relatedCourseSlugs: ["ki-anwender", "prompt-engineering", "marketing"],
    faqs: [
      {
        q: "Darf ich Selbstauskünfte von Mietinteressenten mit KI auswerten?",
        a: "Nur mit sehr klarem Rahmen. Personenbezogene Daten aus Selbstauskünften fallen unter die DSGVO, und die Auswertung könnte je nach Zweck als Profiling gelten. Wir empfehlen dringend, den Prozess vorher mit dem Datenschutzbeauftragten abzustimmen, die einfache Auswertung im Consumer-Chatbot ist kein zulässiger Weg."
      },
      {
        q: "Kann KI Exposés komplett selbstständig erstellen?",
        a: "Sie kann sehr gute Entwürfe liefern, aber die Fakten müssen von einem Menschen geprüft werden. Falsche Angaben zu Wohnfläche, Baujahr oder Ausstattung können Schadensersatzansprüche auslösen. Der Zeitgewinn entsteht im Formulieren, nicht im Weglassen der Kontrolle."
      },
      {
        q: "Braucht mein Maklerbüro dafür eine eigene Software?",
        a: "In den meisten Fällen nein. Die gängigen Business-Varianten der bekannten KI-Anbieter decken Exposé- und Text-Arbeit gut ab. Nur wenn Sie mit sehr sensiblen Vertragsdokumenten arbeiten, kann eine lokale Lösung sinnvoll sein."
      }
    ],
    keywords: [
      "KI für Makler",
      "KI Immobilien",
      "Exposé KI",
      "ChatGPT Immobilien",
      "Digitalisierung Immobilienbranche"
    ]
  },
  {
    slug: "steuerkanzleien",
    name: "Steuerkanzleien",
    displayName: "Steuerkanzleien",
    tag: "KI für Steuerkanzleien",
    headline: "KI in der Steuerkanzlei.",
    headlineSecondary: "Belegflut, Mandantenkommunikation und Recherche im Griff.",
    intro:
      "Steuerkanzleien arbeiten mit einer stark regulierten Umgebung und hoher Verantwortung. Genau deshalb ist der KI-Einsatz hier besonders sorgfältig zu planen: Berufsgeheimnis, DATEV-Umfeld und Prüfsicherheit sind nicht verhandelbar. Innerhalb dieser Grenzen kann KI erhebliche Entlastung bringen, vor allem bei Mandantenkommunikation, Vor-Recherche und der Aufbereitung eingehender Dokumente.",
    processes: [
      "Mandanten-E-Mails beantworten und einordnen",
      "Belegvorerfassung und Vorsortierung",
      "Recherche in Fachtexten und Gesetzeslage",
      "Mandanten-Rundschreiben und Newsletter",
      "Vorbereitung von Jahresabschluss-Erläuterungen",
      "Interne Arbeitsanweisungen und Prozessdokumentation"
    ],
    useCases: [
      {
        title: "Mandanten-Antworten mit menschlicher Freigabe",
        description:
          "Wiederkehrende Fragen (Belegformate, Fristen, Standardauskünfte) werden durch KI als Antwortentwurf vorbereitet. Ein Berufsträger prüft, korrigiert fachlich und gibt frei. Das ersetzt keine Beratung, spart aber Formulierungs-Zeit."
      },
      {
        title: "Vor-Recherche in Fachtexten",
        description:
          "Zu einem konkreten Sachverhalt liefert die KI eine erste Einordnung, Stichworte, mögliche Fundstellen, Argumentationsstrukturen. Die eigentliche Beurteilung, insbesondere zu tagesaktuellen Rechtsänderungen, bleibt beim Steuerberater."
      },
      {
        title: "Rundschreiben in Kanzlei-Stimme",
        description:
          "Aktuelle Themen (Gesetzesänderungen, Fristen, Empfehlungen) werden als Rundschreiben-Entwurf in Ihrem Kanzlei-Ton vorformuliert. Redaktion und Endfreigabe bleiben in der Kanzlei, die tägliche Textarbeit reduziert sich deutlich."
      }
    ],
    tools: [
      "Text-KI in geprüfter Business-Variante (Datenverarbeitungsvereinbarung Pflicht)",
      "OCR für Belegvorerfassung, meist über DATEV-nahe Werkzeuge",
      "Optional: lokale KI oder RAG-Assistenten für besonders sensible Recherche",
      "Sprach-zu-Text nur in geprüften, DSGVO-konformen Systemen"
    ],
    risks: [
      "Berufsgeheimnis ist absolut, Mandantendaten dürfen niemals in ungeprüfte Chatbots",
      "Fachliche Aussagen zu Steuerrecht müssen immer von einem Berufsträger verantwortet werden",
      "Halluzinierte Gesetzeszitate sind ein bekanntes KI-Risiko, Fundstellen immer verifizieren",
      "DATEV-nahe Prozesse: Änderungen brauchen sauberen Testlauf, nicht direkten Produktivbetrieb"
    ],
    priorities: [
      "Starten Sie mit interner Textarbeit (Rundschreiben, Anweisungen), niedrigstes Rechtsrisiko",
      "Danach Mandantenkommunikation für Standardfälle mit klarer Freigabe",
      "Vor-Recherche und Belegvorerfassung erst nach Klärung der Datenverarbeitungs-Wege"
    ],
    relatedCourseSlugs: ["ki-anwender", "finanzen", "ai-act"],
    faqs: [
      {
        q: "Ist KI in der Steuerkanzlei mit dem Berufsgeheimnis vereinbar?",
        a: "Ja, aber nur mit klarem Rahmen. Consumer-Chatbots ohne Datenverarbeitungsvereinbarung sind für Mandantendaten nicht zulässig. Es gibt Business-Varianten der bekannten Anbieter, die die berufsrechtlichen Anforderungen erfüllen. Für besonders sensible Fälle kommen lokale KI-Lösungen in Betracht."
      },
      {
        q: "Kann KI eine Steuererklärung erstellen?",
        a: "Aktuell nein, jedenfalls nicht als eigenständige Aufgabe. KI kann bei Vorbereitung, Prüflisten und Erklärungstexten unterstützen. Die eigentliche Erstellung bleibt in der Fachsoftware, die Verantwortung beim Berufsträger."
      },
      {
        q: "Wie steht die Kammer zur KI-Nutzung?",
        a: "Die Steuerberaterkammern positionieren sich in laufenden Diskussionen zunehmend offen, aber immer unter der Bedingung der Verantwortung durch den Berufsträger. Konkrete Vorgaben können je nach Kammer variieren, wir empfehlen die Rücksprache mit Ihrer zuständigen Kammer als Teil der internen Einführung."
      }
    ],
    keywords: [
      "KI Steuerkanzlei",
      "KI Steuerberater",
      "DATEV KI",
      "ChatGPT Steuerkanzlei",
      "KI Berufsgeheimnis"
    ]
  },
  {
    slug: "versicherungen",
    name: "Versicherungsbüros",
    displayName: "Versicherung",
    tag: "KI für Versicherungsbüros",
    headline: "KI im Versicherungsbüro.",
    headlineSecondary: "Anfragen, Angebotsvergleiche und Schadensvorprüfung schneller.",
    intro:
      "Versicherungsbüros arbeiten mit einer Vielzahl von Produkten, Anbietern und Rückfragen. Generative KI kann Antworten vorstrukturieren, Angebote vergleichbar aufbereiten und Schadensmeldungen ordnen. Wichtig bleibt die klare Trennung: KI unterstützt bei Aufbereitung und Text, verbindliche Aussagen zu Deckung, Prämien und Regulierung bleiben beim Vermittler und beim Versicherer.",
    processes: [
      "Kundenanfragen zu Verträgen und Leistungen beantworten",
      "Angebotsvergleiche zwischen Tarifen aufbereiten",
      "Schadensmeldungen strukturiert erfassen",
      "Beratungsprotokolle und Bedarfsanalysen formulieren",
      "Bestandsmailings und Kundennewsletter",
      "Vorbereitung von Kundenterminen (Zusammenfassung der Vorgeschichte)"
    ],
    useCases: [
      {
        title: "Antwortentwurf für Standardfragen",
        description:
          "Wiederkehrende Fragen zu Kündigungsfristen, Deckungsumfang oder Vertragsanpassungen werden per KI als Antwortentwurf vorbereitet. Der Vermittler prüft die konkreten Vertragsdaten, ergänzt und gibt frei, schneller als das Antworten aus dem Nichts."
      },
      {
        title: "Beratungsprotokoll aus Sprachnotiz",
        description:
          "Nach einem Kundentermin diktiert der Vermittler die Kernpunkte ins Handy. KI erstellt daraus das strukturierte Beratungsprotokoll in Ihrem Standardformat, inklusive Bedarfsermittlung und Empfehlung. Vermittler prüft und unterschreibt."
      },
      {
        title: "Schadensmeldung vorstrukturieren",
        description:
          "Eingehende Schadensmeldungen (Text, Fotos, Sprachnachricht) werden per KI in ein strukturiertes Formular übertragen. Der Vermittler sieht sofort, welche Angaben fehlen, und kann gezielt nachfragen, statt Text zu übersetzen."
      }
    ],
    tools: [
      "Text-KI in Business-Variante mit Datenverarbeitungsvereinbarung",
      "Sprach-zu-Text für Beratungstermine",
      "Optional: RAG-Assistenten auf eigenen Bedingungswerken und Musterprotokollen",
      "OCR für eingehende Schadens-Dokumente"
    ],
    risks: [
      "Aussagen zur Deckung sind rechtlich verbindlich, die Verantwortung bleibt beim Vermittler",
      "Personenbezogene Kunden- und Gesundheitsdaten gehören in geprüfte Systeme, nicht in Consumer-Chatbots",
      "Beratungsprotokolle müssen inhaltlich vom Vermittler geprüft und unterschrieben werden",
      "Vergleichende Aussagen zu Anbietern müssen aktuell und faktisch korrekt sein, veraltete Tarife sind ein reales Risiko"
    ],
    priorities: [
      "Starten Sie mit internen Text-Aufgaben (Rundschreiben, Standardantworten)",
      "Danach Beratungsprotokolle aus Sprachnotiz, hoher Zeitgewinn, klare Freigabekette",
      "Angebotsvergleiche und Schadens-Aufbereitung erst nach Klärung der Datenwege"
    ],
    relatedCourseSlugs: ["ki-anwender", "vertrieb", "ai-act"],
    faqs: [
      {
        q: "Darf KI Kundendaten aus Versicherungsverträgen verarbeiten?",
        a: "Nur in geprüften Business-Umgebungen mit passender Datenverarbeitungsvereinbarung. Consumer-Chatbots sind für personenbezogene Kunden- oder Gesundheitsdaten nicht geeignet. Die DSGVO und ggf. das Sozialdatenschutzrecht setzen klare Grenzen."
      },
      {
        q: "Kann KI Angebote unabhängig vergleichen?",
        a: "Textliche Aufbereitung ja, ein echter Tarifvergleich in Echtzeit erfordert weiterhin die Fachsoftware Ihres Maklerpools oder Ihrer Vergleichsplattform. KI ist gut darin, das Ergebnis für den Kunden verständlich aufzubereiten, nicht darin, aktuelle Prämien selbst zu ermitteln."
      },
      {
        q: "Wie halte ich Beratungsdokumentation revisionssicher?",
        a: "Die Endversion des Beratungsprotokolls sollte in Ihrem revisionssicheren System liegen, nicht im KI-Werkzeug. KI erstellt Entwürfe, der Vermittler übernimmt sie geprüft in Ihre Systeme, so bleibt die Nachvollziehbarkeit erhalten."
      }
    ],
    keywords: [
      "KI Versicherungsbüro",
      "KI Versicherungsmakler",
      "KI Schadensmeldung",
      "Beratungsprotokoll KI",
      "Versicherung Digitalisierung"
    ]
  },
  {
    slug: "arztpraxen",
    name: "Arzt- und Zahnarztpraxen",
    displayName: "Arztpraxen",
    tag: "KI für Arzt- und Zahnarztpraxen",
    headline: "KI in der Arztpraxis.",
    headlineSecondary: "Verwaltung, Kommunikation und Recherche, nicht die Behandlung.",
    intro:
      "In Arzt- und Zahnarztpraxen ist der KI-Einsatz besonders sorgfältig zu planen: Patientendaten unterliegen dem strengen Berufsgeheimnis und dem Sozialdatenschutz. Der praktische Nutzen liegt fast ausschließlich in der Verwaltung und in der internen Kommunikation, nicht in der Behandlung. Wo diese Grenzen sauber gezogen sind, kann KI viel Zeit im Praxis-Backoffice sparen.",
    processes: [
      "Anfrage-E-Mails und Terminanfragen ordnen",
      "Interne Arbeitsanweisungen und Praxisorganisation",
      "Patienteninformationen (Wartezimmer-Aushänge, Broschüren) erstellen",
      "Recherche zu Fachthemen und Fortbildungsinhalten",
      "Vorbereitung von Praxisrundschreiben",
      "Übersetzungen für fremdsprachige Patienten (nur nicht-medizinische Kommunikation)"
    ],
    useCases: [
      {
        title: "Terminanfragen strukturiert vorsortieren",
        description:
          "Eingehende E-Mails und Kontaktformular-Anfragen werden per KI kategorisiert (Erstanfrage, Terminverschiebung, Rezeptanfrage, dringend). Das Praxisteam beantwortet gezielt, statt jeden Tag den Posteingang neu zu sichten. Patientendaten bleiben dabei in der Praxis, KI verarbeitet nur Metadaten."
      },
      {
        title: "Praxisorganisation und Anweisungen",
        description:
          "Neue Prozesse, Hygienevorschriften oder Schulungsinhalte werden per KI als klare, strukturierte Anweisung vorformuliert. Die Praxisleitung prüft, passt an, druckt aus. Der Zeitaufwand für interne Kommunikation sinkt deutlich."
      },
      {
        title: "Patienteninformation in klarer Sprache",
        description:
          "Fachliche Inhalte zu Untersuchungen, Vorbereitung oder Nachsorge werden per KI in verständliche Patientensprache übertragen. Die medizinische Verantwortung bleibt beim Arzt, die Formulierungsarbeit fällt weitgehend weg."
      }
    ],
    tools: [
      "Text-KI ausschließlich in geprüfter Business-Variante mit klarer Datenverarbeitungsvereinbarung",
      "Für besonders sensible Inhalte: lokale KI-Lösungen ohne Datenabfluss",
      "OCR nur mit klarem Datenschutz-Konzept für Papierakten",
      "Sprach-zu-Text nur in DSGVO- und berufsrechtskonformen Systemen"
    ],
    risks: [
      "Berufsgeheimnis und Sozialdatenschutz sind absolut, Patientendaten dürfen nicht in ungeprüfte Systeme",
      "KI ersetzt keine ärztliche Beurteilung, auch nicht als scheinbar hilfreiche Diagnose-Vorschau",
      "Patientenkommunikation muss faktisch korrekt und rechtlich verantwortbar bleiben",
      "Kammer- und berufsrechtliche Vorgaben können je nach Region und Fachrichtung variieren"
    ],
    priorities: [
      "Starten Sie mit interner Verwaltungs-Text-Arbeit, niedrigstes Datenschutz-Risiko",
      "Dann strukturierte Vorsortierung von Anfragen (ohne medizinische Auswertung)",
      "Diagnostische oder therapeutische KI-Systeme sind eine völlig andere Kategorie, erst nach ausführlicher Compliance-Prüfung und Kammer-Rücksprache"
    ],
    relatedCourseSlugs: ["ki-anwender", "ai-act", "betriebsvereinbarung"],
    faqs: [
      {
        q: "Darf ich Patientendaten in ChatGPT eingeben?",
        a: "Nein. Weder in die kostenlose noch in die Standard-Consumer-Variante. Für die Verarbeitung von Gesundheitsdaten gelten Berufsgeheimnis, DSGVO und teils Sozialdatenschutz. Business-Varianten mit passender Datenverarbeitungsvereinbarung können in Betracht kommen, sollten aber vor dem Einsatz mit dem Datenschutzbeauftragten und ggf. der Kammer abgestimmt werden."
      },
      {
        q: "Kann KI im Wartezimmer eingesetzt werden?",
        a: "Für allgemeine Patienteninformation ja, wenn sie klar als Information, nicht als Beratung gekennzeichnet ist. Für konkrete medizinische Fragen ist KI im Wartezimmer nicht geeignet, hier bleibt der Arzt der einzige verlässliche Ansprechpartner."
      },
      {
        q: "Was ist mit KI-basierten Diagnose-Tools?",
        a: "Diagnostische KI ist eine eigene Regulierungsklasse. Solche Systeme fallen unter das Medizinproduktrecht und in vielen Fällen unter die Hochrisiko-Kategorie des EU AI Act. Sie sind nicht Gegenstand einer allgemeinen KI-Beratung, sondern brauchen fachspezifische Prüfung und ggf. Zertifizierungspfade."
      }
    ],
    keywords: [
      "KI Arztpraxis",
      "KI Zahnarztpraxis",
      "Praxis Digitalisierung",
      "KI Patientenkommunikation",
      "Arztpraxis DSGVO KI"
    ]
  },
  {
    slug: "agenturen",
    name: "Agenturen",
    displayName: "Agentur",
    tag: "KI für Agenturen",
    headline: "KI in der Agentur.",
    headlineSecondary: "Recherche, Produktion und Reporting, ohne die Kreativität zu opfern.",
    intro:
      "Agenturen leben von Ideen und Ausführungsqualität. Generative KI ist hier weder Bedrohung noch Wundermittel: Sie beschleunigt vor allem den Vor- und Nachbereitungs-Teil (Recherche, Struktur, Reporting), lässt die kreative Kernarbeit aber unangetastet. Der wirtschaftliche Effekt ist dennoch spürbar, weil in vielen Agenturen mehr als die Hälfte der Zeit in Formalitäten fließt.",
    processes: [
      "Recherche zu Kunden, Wettbewerb und Trends",
      "Erste Konzept-Rohfassungen und Struktur-Vorschläge",
      "Copywriting-Iterationen (Kernidee kommt vom Team, Varianten von KI)",
      "SEO- und Content-Aufbereitung",
      "Meeting-Zusammenfassungen und Follow-ups",
      "Reporting und Kunden-Updates"
    ],
    useCases: [
      {
        title: "Kundenbriefings strukturieren",
        description:
          "Eingehende Briefings und Angebotsanfragen werden per KI in Ihr Standard-Briefing-Format übertragen: Ziele, Zielgruppe, Deliverables, offene Punkte. Der Beratungsprozess startet mit einer sauberen Basis statt mit Text-Sortierung."
      },
      {
        title: "Copy-Varianten in Kunden-Tonalität",
        description:
          "Für einen Kunden mit klar dokumentierter Marken-Tonalität liefert KI verschiedene Copy-Varianten. Der Copywriter wählt aus, verfeinert, verantwortet. Wichtig ist die einmalige, ordentliche Definition der Tonalität, dann skaliert der Nutzen."
      },
      {
        title: "Reporting und Auswertungen",
        description:
          "Analytics-Exporte, Kampagnendaten und Zwischenstände werden per KI in Kunden-taugliche Reports übersetzt: Was ist passiert, was heißt das, was ist der nächste Schritt. Datenkorrektheit prüft der Berater, das Formulieren wird beschleunigt."
      }
    ],
    tools: [
      "Text-KI in Business-Variante (Marken- und Kundendaten schützen)",
      "Bild- und Video-KI in geprüften Werkzeugen mit klaren Nutzungsbedingungen",
      "Optional: eigene Prompt-Bibliothek für wiederkehrende Formate",
      "Analytics-nahe KI-Auswertungen mit klarer Datenverarbeitungsvereinbarung"
    ],
    risks: [
      "Kunden- und Marken-Assets dürfen nicht in KI-Systeme, die Trainingsdaten ableiten",
      "Bildrechte und Persönlichkeitsrechte bei generierten Bildern gehören sauber geregelt",
      "Nachweispflicht: was KI-generiert ist, sollte im internen Workflow markiert werden",
      "Kunden erwarten fachliche Verantwortung, KI-Output ist kein Argument für Qualitätsabstriche"
    ],
    priorities: [
      "Starten Sie mit interner Recherche und Meeting-Follow-ups, hoher Nutzen, geringes Risiko",
      "Dann Copywriting-Varianten in klar definierter Marken-Tonalität",
      "Erst danach Reporting/Analytics, nach Klärung der Datenverarbeitungs-Wege"
    ],
    relatedCourseSlugs: ["prompt-engineering", "marketing", "strategie"],
    faqs: [
      {
        q: "Ersetzt KI mein Team?",
        a: "In der Praxis nicht. Was in Agenturen wegfällt, ist die Fleißarbeit: Recherche, Rohfassungen, Reporting. Was bleibt und an Wert gewinnt: Strategie, kreative Idee, Kundenberatung, Qualitätsverantwortung. Agenturen, die KI klug einbinden, werden meist nicht kleiner, sondern effizienter."
      },
      {
        q: "Dürfen wir KI-generierte Bilder in Kundenkampagnen verwenden?",
        a: "Grundsätzlich ja, aber unter Beachtung mehrerer Aspekte: Nutzungsrechte des Bildgenerators, Persönlichkeitsrechte bei erkennbaren Personen, gegebenenfalls Kennzeichnungspflichten. Für sensitive Kunden (z. B. Pharma, Finanzen) empfiehlt sich eine klare interne Richtlinie."
      },
      {
        q: "Wie transparent müssen wir gegenüber Kunden zum KI-Einsatz sein?",
        a: "Wir empfehlen aktive Transparenz. Kunden erwarten heute zunehmend, dass Agenturen KI-Werkzeuge einsetzen, ehrliche Kommunikation über Einsatz und Grenzen schafft Vertrauen. Verbergen führt zu Konflikten, wenn es später doch auffällt."
      }
    ],
    keywords: [
      "KI Agentur",
      "KI Werbeagentur",
      "KI Content Agentur",
      "ChatGPT Agentur",
      "KI Kreativarbeit"
    ]
  },
  {
    slug: "produktion",
    name: "Kleine Produktion",
    displayName: "Produktion",
    tag: "KI in kleiner Produktion",
    headline: "KI in kleinen Produktionsbetrieben.",
    headlineSecondary: "Dokumentation, Angebote und Kundenkommunikation, nicht die Fertigung selbst.",
    intro:
      "Kleine Produktionsbetriebe, Metallverarbeitung, Kunststoff, Spezialfertigung, Manufakturen, arbeiten oft mit sehr individuellen Kundenanforderungen. Der Bürobereich ist meist knapp besetzt, während die Fertigung technisch komplex bleibt. Generative KI kann im Bürobereich (Angebote, Dokumentation, Kundenkommunikation) deutlich entlasten. Fertigungsprozesse selbst bleiben eine eigene Kategorie mit spezialisierten Systemen.",
    processes: [
      "Kundenanfragen und technische Rückfragen",
      "Angebotserstellung inklusive individueller Leistungsbeschreibung",
      "Fertigungspapiere und interne Arbeitsanweisungen",
      "Prüf- und Wartungsprotokolle (Text-Ebene)",
      "Reklamationsbearbeitung",
      "Ausschreibungen und technische Datenblätter aufbereiten"
    ],
    useCases: [
      {
        title: "Angebot aus technischer Anfrage",
        description:
          "Ein Kunde schickt eine Anfrage mit technischen Details. KI erstellt einen strukturierten Angebotsentwurf: Verstandene Anforderung, vorgeschlagene Ausführung, offene Punkte für Rückfrage. Der Technische Leiter prüft und ergänzt die Kalkulation."
      },
      {
        title: "Interne Arbeitsanweisungen konsistent halten",
        description:
          "Prozesse werden per KI in einheitlicher Form dokumentiert. Neue Mitarbeitende bekommen klare Anleitungen, statt sich durch heterogene Altdokumente zu arbeiten. Aktualisierungen dauern Minuten statt Stunden."
      },
      {
        title: "Reklamationen strukturiert bearbeiten",
        description:
          "Kundenreklamationen werden per KI in ein internes Ticket-Format übertragen: Sachverhalt, betroffene Charge, mögliche Ursachen, Vorschlag für Rückmeldung. Der Qualitätsmanager prüft, ergänzt, entscheidet."
      }
    ],
    tools: [
      "Text-KI in Business-Variante",
      "OCR für technische Datenblätter und Kundenzeichnungen",
      "Optional: RAG-Assistenten auf eigenen Prozess- und Prüfvorschriften",
      "Fachspezifische Fertigungs-KI ist eine eigene Kategorie und nicht Gegenstand allgemeiner KI-Beratung"
    ],
    risks: [
      "Technische Zeichnungen und CAD-Daten unterliegen häufig Geheimhaltungsvereinbarungen, nicht in offene KI",
      "Sicherheitsrelevante Prüfvorschriften müssen im Original bleiben, KI erstellt nur begleitende Texte",
      "Kalkulations- und Preisentscheidungen bleiben immer beim Menschen",
      "Kundenspezifische Konstruktionsdaten sollten nur in geprüften Business- oder lokalen Systemen verarbeitet werden"
    ],
    priorities: [
      "Starten Sie mit interner Dokumentation, niedriges Risiko, klarer Konsistenz-Gewinn",
      "Dann Angebotstexte für Standard- und Wiederholaufträge",
      "Konstruktions- oder Fertigungs-nahe KI ist eine eigene Ebene mit spezialisierten Anbietern, erst nach Klärung des Datenschutz-Rahmens"
    ],
    relatedCourseSlugs: ["ki-anwender", "prompt-engineering", "strategie"],
    faqs: [
      {
        q: "Ist ChatGPT für unsere technischen Zeichnungen geeignet?",
        a: "Nein. Technische Zeichnungen mit Kundenbezug sind fast immer vertraulich. Für den Umgang mit solchen Daten kommen nur Business-Umgebungen mit klarer Datenverarbeitungsvereinbarung oder lokale KI-Lösungen in Frage. Häufig ist es besser, zunächst nur die begleitende Textarbeit per KI zu erledigen und die eigentlichen Konstruktionsdaten außen vor zu lassen."
      },
      {
        q: "Kann KI unsere Fertigung optimieren?",
        a: "Das ist eine andere Kategorie, Prozessoptimierung, MES, KI in Maschinen. Diese Systeme haben eigene Anbieter und Standards. Unsere Beratung fokussiert sich auf den Bürobereich: Angebote, Dokumentation, Kommunikation. Für fertigungsnahe KI empfehlen wir spezialisierte Systemhäuser."
      },
      {
        q: "Wie groß muss ein Betrieb sein, damit sich KI lohnt?",
        a: "Ab etwa fünf bis zehn Mitarbeitenden im Büro merken Sie den Effekt sofort. Auch kleinere Betriebe können profitieren, allerdings ist der Einführungsaufwand relativ höher, hier ist unser KI-Check ein guter Startpunkt, statt gleich in ein volles Programm zu investieren."
      }
    ],
    keywords: [
      "KI Produktionsbetrieb",
      "KI Fertigung Büro",
      "KI Mittelstand Produktion",
      "Industrieller Mittelstand KI",
      "Digitalisierung Fertigung Saarland"
    ]
  },
  {
    slug: "dienstleister",
    name: "Dienstleister aller Art",
    displayName: "Dienstleister",
    tag: "KI für Dienstleister",
    headline: "KI für kleine und mittlere Dienstleister.",
    headlineSecondary: "Angebote, Kommunikation und Dokumentation, ohne Branchenkorsett.",
    intro:
      "Viele Dienstleister, Berater, Coaches, Trainer, Kleinunternehmer im Facility-Bereich, Freelancer, Ein-Personen-GmbHs, passen in keine der klassischen Branchenkategorien. Sie haben aber ähnliche Themen: Angebotsschreibung, Kundenkommunikation, Dokumentation, Marketing. Genau diese Text- und Kommunikationsaufgaben lassen sich mit generativer KI schnell entlasten, unabhängig davon, welche Leistung Sie im Kern erbringen.",
    processes: [
      "Angebote und Leistungsbeschreibungen",
      "E-Mail- und Kundenkommunikation",
      "Rechnungen und Textteile administrativer Dokumente",
      "Website-Texte, Blog, LinkedIn-Präsenz",
      "Interne Dokumentation und Wissenssicherung",
      "Vorbereitung und Nachbereitung von Kundenterminen"
    ],
    useCases: [
      {
        title: "Angebot aus Erstgespräch",
        description:
          "Nach einem Kundengespräch entsteht per KI ein strukturierter Angebotsentwurf: verstandene Aufgabe, vorgeschlagenes Vorgehen, Preisbereich, nächster Schritt. Sie prüfen, korrigieren, senden. Die Textarbeit fällt weitgehend weg."
      },
      {
        title: "LinkedIn- und Website-Präsenz",
        description:
          "Für Einzelunternehmer und kleine Dienstleister ist Sichtbarkeit ein entscheidender Faktor. KI hilft dabei, regelmäßig Beiträge zu formulieren, ohne dass Marketing zum Zweitjob wird. Die eigentliche Idee kommt weiterhin von Ihnen."
      },
      {
        title: "Wissenssicherung für Ein-Personen-Unternehmen",
        description:
          "Was heute in Ihrem Kopf ist, lässt sich per KI in eine erste Fassung strukturierter Dokumentation überführen: Prozesse, Kunden-Standards, wiederkehrende Textbausteine. Ein Sicherheitsnetz für Krankheit, Urlaub oder späteres Wachstum."
      }
    ],
    tools: [
      "Text-KI in Business-Variante",
      "Sprach-zu-Text für Notizen unterwegs",
      "Optional: einfache Prompt-Bibliothek für wiederkehrende Aufgaben",
      "Social-Media- und Newsletter-Tools mit KI-Integration"
    ],
    risks: [
      "Kundendaten und Vertragsdetails gehören auch für Einzelunternehmer nicht in Consumer-Chatbots",
      "Preis- und Leistungszusagen müssen inhaltlich vom Dienstleister verantwortet werden, KI ist Entwurfshelfer, nicht Verhandlungsersatz",
      "Marketing-Aussagen unterliegen dem Wettbewerbsrecht, auch bei kleinen Anbietern",
      "Bei Einzelunternehmen: alles bleibt in einer Hand, der Freigabeprozess ersetzt sich nicht selbst"
    ],
    priorities: [
      "Starten Sie mit Angeboten und Follow-ups, schnellster ROI im Tagesgeschäft",
      "Dann Sichtbarkeits-Kommunikation (LinkedIn, Website)",
      "Erst danach interne Wissenssicherung, lohnt sich, ist aber weniger dringend"
    ],
    relatedCourseSlugs: ["ki-anwender", "prompt-engineering", "vertrieb"],
    faqs: [
      {
        q: "Lohnt sich KI für einen Ein-Personen-Betrieb?",
        a: "Ja, oft besonders. Ein-Personen-Betriebe haben kein Team, an das sie Arbeit delegieren können. Genau dort ersetzt KI in gewissem Maße die fehlenden Kolleginnen und Kollegen für Text- und Vorbereitungsaufgaben. Der Zeitgewinn wandert direkt in Kundenarbeit oder Freizeit."
      },
      {
        q: "Welchen Kurs sollte ich als Einzelunternehmer wählen?",
        a: "Für die meisten Solo-Dienstleister ist eine Kombination aus Grundkurs und Prompt Engineering ausreichend. Wer stark im Vertrieb aktiv ist, ergänzt den Vertriebskurs. Wir empfehlen im Erstgespräch eine passende Reihenfolge, ohne Kurse zu verkaufen, die nicht zum Bedarf passen."
      },
      {
        q: "Kann ich das ohne Vorwissen selbst umsetzen?",
        a: "Grundsätzlich ja, die Werkzeuge sind gemacht, um von Nicht-Techniker:innen bedient zu werden. Der Unterschied zwischen unstrukturiertem Ausprobieren und wirklich hilfreichem Einsatz ist allerdings groß. Eine kurze Einführung spart in der Regel viel Ausprobier-Zeit."
      }
    ],
    keywords: [
      "KI Dienstleister",
      "KI Einzelunternehmer",
      "KI Selbstständige",
      "KI Berater",
      "KI Freelancer"
    ]
  }
];

export function findIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
