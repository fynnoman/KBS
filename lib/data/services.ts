export type Service = {
  slug: string;
  name: string;
  tag: string;
  headline: string;
  headlineSecondary: string;
  intro: string;
  duration: string;
  audience: string;
  includes: string[];
  outcomes: string[];
  whatItIsnt: string[];
  process: { step: string; body: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  relatedSlugs: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "ki-hilfe-privatpersonen",
    name: "KBS KI-Hilfe",
    tag: "Für Privatpersonen",
    headline: "KI im Alltag verstehen.",
    headlineSecondary: "Ohne Umwege.",
    intro:
      "KBS KI-Hilfe ist die persönliche Ein-Termin-Unterstützung für alle, die mit ChatGPT und anderen KI-Werkzeugen im Alltag sicherer werden möchten. Wir sitzen mit Ihnen an einem Tisch, klären Ihre konkreten Fragen und richten alles ein, was Sie danach selbstständig weiter nutzen können.",
    duration: "60 bis 90 Minuten, ein Termin",
    audience:
      "Senioren, Berufstätige, Familien und alle, die KI konkret ausprobieren möchten – ohne Vorwissen und ohne Fachjargon.",
    includes: [
      "Einrichtung von ChatGPT oder einem passenden Alternativ-Tool auf Ihren Geräten",
      "Erste eigene Prompts und Vorlagen für Ihre wiederkehrenden Aufgaben",
      "Praktische Hilfe bei konkreten Aufgaben (Bewerbung, Briefe, Recherche, Bilder)",
      "Erklärung, welche Daten Sie nicht in KI-Systeme eingeben sollten",
      "Kompakter Leitfaden zum späteren Nachschlagen"
    ],
    outcomes: [
      "Sie kennen die wichtigsten KI-Werkzeuge und wissen, wofür Sie sie nutzen",
      "Sie können nach dem Termin selbstständig weiter arbeiten",
      "Sie erkennen KI-basierte Betrugsversuche und Fake-Nachrichten zuverlässiger",
      "Sie wissen, welche Fragen Sie in Zukunft an KBS stellen können"
    ],
    whatItIsnt: [
      "Kein Vortrag mit 80 Werkzeugen zur Auswahl",
      "Keine mehrmonatige Kursreihe",
      "Kein Vertrag mit fester Laufzeit"
    ],
    process: [
      {
        step: "Kostenloses Erstgespräch",
        body: "Fünf bis fünfzehn Minuten am Telefon. Wir klären, was Sie mit KI machen möchten und ob KI-Hilfe die richtige Leistung ist."
      },
      {
        step: "Termin bei Ihnen oder per Videocall",
        body: "60 bis 90 Minuten konzentrierte Arbeit an Ihren Geräten. Sie brauchen keine Vorbereitung – nur eine grobe Vorstellung Ihrer Fragen."
      },
      {
        step: "Nach dem Termin",
        body: "Sie erhalten eine kurze Zusammenfassung mit Ihren Prompts und Werkzeugen. Auf Wunsch melden wir uns nach zwei bis vier Wochen und schauen, wie es läuft."
      }
    ],
    faqs: [
      {
        q: "Ich habe noch nie mit ChatGPT gearbeitet. Ist KI-Hilfe trotzdem für mich geeignet?",
        a: "Gerade dann. Wir setzen kein Vorwissen voraus und richten alle Zugänge gemeinsam ein. Nach dem Termin haben Sie die App auf Ihrem Gerät und können sofort weiter arbeiten."
      },
      {
        q: "Kann KBS KI-Hilfe auch bei einer konkreten Aufgabe unterstützen (z. B. Bewerbung, Brief)?",
        a: "Ja. Bringen Sie Ihre Aufgabe einfach mit. Wir arbeiten im Termin an Ihrem echten Anliegen und Sie sehen sofort, wie KI Ihnen helfen kann."
      },
      {
        q: "Welche Geräte werden im Termin verwendet?",
        a: "Ihre eigenen. Wir richten die Werkzeuge auf Ihrem Handy, Tablet oder Laptop ein, damit Sie nach dem Termin dort weiter arbeiten, wo Sie es gewohnt sind."
      }
    ],
    keywords: [
      "ChatGPT lernen Saarland",
      "KI Hilfe für Senioren",
      "KI Einführung Saarbrücken",
      "ChatGPT einrichten Hilfe",
      "KI für Anfänger Saarland"
    ],
    relatedSlugs: ["ki-check", "ki-einrichtung"]
  },
  {
    slug: "ki-check",
    name: "KBS KI-Check",
    tag: "Für Selbstständige und kleine Unternehmen",
    headline: "Wo lohnt sich KI in Ihrem Alltag?",
    headlineSecondary: "In 90 Minuten Klarheit.",
    intro:
      "Der KBS KI-Check ist die schnelle, ehrliche Analyse für Selbstständige und kleine Unternehmen. Wir schauen uns Ihre echten Arbeitsabläufe an, identifizieren drei bis fünf konkrete Anwendungsfälle mit klarem Zeitgewinn – und sagen ehrlich, wo KI nichts bringt.",
    duration: "90 bis 120 Minuten, ein Termin",
    audience:
      "Handwerker, Freiberufler, Ärzte, Anwälte, Steuerberater, Makler, Agenturen und andere kleine Unternehmen bis 20 Mitarbeiter.",
    includes: [
      "Analyse Ihrer wiederkehrenden Aufgaben in Büro, Vertrieb, Marketing und Dokumentation",
      "Bewertung, wo KI heute Zeit spart und wo sie mehr Ärger als Nutzen bringt",
      "Auswahl passender Werkzeuge (ChatGPT, Claude, Copilot, europäische Alternativen)",
      "Datenschutz-Kurzcheck: welche Daten in welche Systeme dürfen",
      "Priorisierte Roadmap mit drei bis fünf sofort umsetzbaren Anwendungsfällen"
    ],
    outcomes: [
      "Klarer Blick darauf, wo KI in Ihrem Betrieb wirklich rechnet",
      "Konkrete Werkzeug-Empfehlung statt Marktüberblick",
      "Sofort umsetzbare erste Anwendungsfälle mit realistischem Aufwand",
      "Entscheidungsgrundlage für einen möglichen Workshop mit dem Team"
    ],
    whatItIsnt: [
      "Kein 20-seitiges Konzeptpapier ohne konkrete Handlung",
      "Kein Verkaufstermin für teure Beratungsprojekte",
      "Kein Werkzeug-Katalog mit 80 Anbietern"
    ],
    process: [
      {
        step: "Kostenloses Erstgespräch",
        body: "Wir klären Ihre Ausgangslage, Branche und die typischen Themen, die wir im KI-Check anschauen sollten."
      },
      {
        step: "KI-Check-Termin (90 – 120 Min)",
        body: "Vor Ort oder per Videocall. Wir gehen Ihre Arbeitsabläufe systematisch durch und markieren die Punkte mit dem größten KI-Hebel."
      },
      {
        step: "Kompaktes Ergebnisdokument",
        body: "Sie erhalten drei bis fünf priorisierte Anwendungsfälle mit Werkzeug-Empfehlung, Aufwand und geschätztem Zeitgewinn."
      },
      {
        step: "Optional: Workshop oder Einrichtung",
        body: "Wenn die Anwendungsfälle passen, setzen wir sie im nächsten Schritt gemeinsam mit Ihnen um."
      }
    ],
    faqs: [
      {
        q: "Für welche Branchen eignet sich der KI-Check?",
        a: "Praktisch alle kleinen Unternehmen mit wiederkehrender Büroarbeit profitieren. Besonders gute Erfahrungen haben wir mit Handwerk, Kanzleien, Praxen, Maklerbüros, Agenturen und Handel."
      },
      {
        q: "Was, wenn im Check herauskommt, dass KI bei uns wenig bringt?",
        a: "Dann sagen wir das ehrlich. Wir empfehlen keinen Workshop und keine Folgeleistung, wenn der Nutzen nicht klar erkennbar ist. Das schützt Sie vor überflüssigen Ausgaben und schützt unsere Empfehlungen vor Beliebigkeit."
      },
      {
        q: "Ist der KI-Check auch für Einzelunternehmer sinnvoll?",
        a: "Ja. Gerade Einzelunternehmer profitieren stark, weil jede eingesparte Stunde direkt Ihr Einkommen erhöht. Wir konzentrieren uns dann auf Angebots-, E-Mail- und Dokumentationsprozesse."
      }
    ],
    keywords: [
      "KI Check Unternehmen Saarland",
      "KI Analyse für Selbstständige",
      "KI Beratung Handwerk Saarland",
      "KI Beratung Kanzlei Saarbrücken",
      "KI Beratung Steuerberater"
    ],
    relatedSlugs: ["ki-workshop", "ki-einrichtung", "ki-sprechstunde"]
  },
  {
    slug: "ki-workshop",
    name: "KBS KI-Workshop",
    tag: "Für Teams und kleine Unternehmen",
    headline: "KI im Team.",
    headlineSecondary: "An Ihren echten Aufgaben.",
    intro:
      "Der KBS KI-Workshop bringt Ihr Team an einem Vor- oder Nachmittag auf den gleichen Stand – aber nicht durch Vorträge. Wir arbeiten gemeinsam an Ihren echten E-Mails, Angeboten, Dokumentationen und Marketing-Themen. Nach dem Termin nutzt Ihr Team KI produktiv statt zufällig.",
    duration: "2 bis 3 Stunden vor Ort, bis zu 8 Teilnehmer",
    audience:
      "Teams in kleinen Unternehmen, die KI systematisch statt jeder für sich einsetzen möchten. Vom Handwerksbüro bis zur Kanzlei.",
    includes: [
      "Kurze gemeinsame Standortbestimmung: wer nutzt heute was und wie",
      "Praktische Arbeit an Ihren tatsächlichen Themen: E-Mails, Angebote, Vertrieb, Marketing, Dokumentation",
      "Erstellung einer gemeinsamen Prompt-Sammlung für das Team",
      "Klärung interner Regeln: was darf ins KI-System und was nicht",
      "Fragestunde am Ende – jede Frage aus dem Team wird geklärt"
    ],
    outcomes: [
      "Alle im Team arbeiten mit denselben Werkzeugen und Vorlagen",
      "Gemeinsame Prompt-Sammlung als lebendes Team-Dokument",
      "Klare interne Regeln zu Datenschutz und KI-Nutzung",
      "Deutlich weniger Zeitverlust durch Rückfragen und uneinheitliche Vorgehensweisen"
    ],
    whatItIsnt: [
      "Keine Frontal-Präsentation mit 80 Werkzeugen",
      "Keine Powerpoint-Show ohne Umsetzung",
      "Kein Verkaufstermin"
    ],
    process: [
      {
        step: "Vorbereitung (per E-Mail)",
        body: "Sie schildern uns kurz die typischen Aufgaben Ihres Teams. Wir bereiten passende Beispiele und Vorlagen vor."
      },
      {
        step: "Workshop-Termin vor Ort",
        body: "2 bis 3 Stunden konzentriertes Arbeiten im Team. Ihre Rechner, Ihre Aufgaben, unsere Werkzeuge und Prompts."
      },
      {
        step: "Ergebnisse zum Mitnehmen",
        body: "Ihre gemeinsame Prompt-Sammlung, Werkzeug-Empfehlung und eine Kurzdokumentation der wichtigsten Regeln."
      },
      {
        step: "Optional: KI-Sprechstunde",
        body: "Wenn Sie eine feste Anlaufstelle für die nächsten Monate möchten, ist die KI-Sprechstunde der logische nächste Schritt."
      }
    ],
    faqs: [
      {
        q: "Wie groß darf mein Team sein?",
        a: "Bis zu acht Teilnehmer sind für einen produktiven Workshop ideal. Bei größeren Teams empfehlen wir zwei oder drei Termine mit unterschiedlichen Gruppen."
      },
      {
        q: "Brauchen wir vorher spezielle Software oder Lizenzen?",
        a: "Nein. Wir kommen mit einer kompakten Empfehlung und richten die Werkzeuge im Workshop gemeinsam ein. Wenn Sie bereits Microsoft 365 oder Google Workspace nutzen, integrieren wir dort."
      },
      {
        q: "Wie unterscheidet sich der Workshop vom KI-Check?",
        a: "Der KI-Check ist die vorbereitende Analyse mit der Geschäftsführung – der Workshop bringt Ihr Team ans Werkzeug. Beide lassen sich gut kombinieren, sind aber einzeln buchbar."
      }
    ],
    keywords: [
      "KI Workshop Saarland",
      "KI Workshop Saarbrücken",
      "KI Schulung Team",
      "KI Schulung Handwerksbetrieb",
      "KI Team-Workshop DSGVO"
    ],
    relatedSlugs: ["ki-check", "ki-sprechstunde", "ki-einrichtung"]
  },
  {
    slug: "ki-einrichtung",
    name: "KBS KI-Einrichtung",
    tag: "Individuelle Konfiguration",
    headline: "Ihre KI, richtig eingerichtet.",
    headlineSecondary: "Damit sie im Alltag trägt.",
    intro:
      "KBS KI-Einrichtung ist für alle, die bereits wissen, welches Werkzeug sie einsetzen wollen – aber die Konfiguration nicht selbst machen möchten oder können. Wir richten Accounts, Team-Zugänge, Prompts, Wissensbasis und eigene Assistenten sauber ein, damit die Werkzeuge im Alltag halten.",
    duration: "Nach Umfang, meist 2 bis 8 Stunden verteilt",
    audience:
      "Selbstständige und Unternehmen, die ein konkretes Werkzeug (ChatGPT, Claude, Copilot, Perplexity) produktiv einsetzen möchten und eine ordentliche Einrichtung wollen.",
    includes: [
      "Account- und Team-Konfiguration inklusive Berechtigungen",
      "Erstellung Ihrer eigenen Prompts und Vorlagen",
      "Anlegen einer Wissensbasis aus Ihren Dokumenten",
      "Einrichtung individueller KI-Assistenten (z. B. Custom GPTs oder Projekte)",
      "Datenschutz-Konfiguration und Nutzungsregeln"
    ],
    outcomes: [
      "Werkzeuge, die von Anfang an sauber laufen und Ihre Prozesse abbilden",
      "Eigene KI-Assistenten, die Ihr Firmenwissen kennen",
      "Klare Nutzerrollen und Berechtigungen im Team",
      "Dokumentierte Einrichtung für Ihre spätere Wartung"
    ],
    whatItIsnt: [
      "Keine offene Beratung ohne konkrete Umsetzung",
      "Kein einmaliger Verkaufsschluss – wir bleiben ansprechbar",
      "Keine Bindung an einen bestimmten Anbieter"
    ],
    process: [
      {
        step: "Anforderungsgespräch",
        body: "Wir klären, welche Werkzeuge Sie im Einsatz haben (oder haben möchten) und welche Prozesse abgebildet werden sollen."
      },
      {
        step: "Einrichtung (remote oder vor Ort)",
        body: "Wir richten Accounts, Prompts, Vorlagen, Wissensbasis und Assistenten ein. Meist verteilt auf mehrere kürzere Termine."
      },
      {
        step: "Übergabe und Schulung",
        body: "Wir übergeben eine dokumentierte Einrichtung und schulen die Team-Verantwortlichen im Umgang mit der Konfiguration."
      }
    ],
    faqs: [
      {
        q: "Können Sie auch ChatGPT Team oder ChatGPT Enterprise einrichten?",
        a: "Ja. Wir richten Team-Workspaces mit Berechtigungen, geteilten Custom GPTs und Wissensbasis ein. Für Enterprise-Setups mit SSO und Compliance-Anforderungen arbeiten wir zusammen mit Ihrer IT."
      },
      {
        q: "Ist es sinnvoll, einen eigenen Custom-GPT für unser Unternehmen bauen zu lassen?",
        a: "Häufig ja. Ein Custom-GPT mit Ihren Vorlagen, Ihrem Wording und Ihrem Firmenwissen antwortet konsistenter als ein generischer Chat – und lässt sich mit dem gesamten Team teilen."
      },
      {
        q: "Bekommen wir eine Dokumentation der Einrichtung?",
        a: "Ja. Sie erhalten eine kompakte Dokumentation, damit Sie später eigenständig Anpassungen vornehmen können oder eine spätere Übergabe an eigene IT möglich ist."
      }
    ],
    keywords: [
      "ChatGPT einrichten Unternehmen",
      "Custom GPT bauen lassen",
      "KI Assistent einrichten",
      "ChatGPT Team Konfiguration",
      "KI Wissensbasis anlegen"
    ],
    relatedSlugs: ["ki-check", "ki-workshop", "ki-sprechstunde"]
  },
  {
    slug: "ki-sprechstunde",
    name: "KBS KI-Sprechstunde",
    tag: "Laufende Betreuung",
    headline: "Ein fester KI-Ansprechpartner.",
    headlineSecondary: "Ohne feste Laufzeit.",
    intro:
      "Die KBS KI-Sprechstunde ist die laufende Betreuung für Unternehmen, die einen festen Ansprechpartner für ihre KI-Nutzung möchten – ohne teuren Beratungsvertrag mit Mindestlaufzeit. Ein Termin pro Monat, Ansprechbarkeit dazwischen, keine Bindung.",
    duration: "Monatlicher Termin (60 – 90 Min), plus Ansprechbarkeit dazwischen",
    audience:
      "Kleine und mittelständische Unternehmen, die KI kontinuierlich weiterentwickeln möchten und einen festen Kontakt für Fragen und Optimierungen brauchen.",
    includes: [
      "Ein fester monatlicher KI-Termin (vor Ort oder Videocall)",
      "Zwischen den Terminen: Ansprechbarkeit per E-Mail und Chat (Reaktion in der Regel am selben Werktag)",
      "Regelmäßige Empfehlung neuer Werkzeuge und Anwendungsfälle",
      "Weiterentwicklung Ihrer Prompts, Vorlagen und Assistenten",
      "Hilfe bei Fragen aus dem Team – ohne dass Sie jedes Mal ein neues Angebot einholen müssen"
    ],
    outcomes: [
      "Kontinuierliche Weiterentwicklung Ihrer KI-Nutzung",
      "Eine feste Ansprechperson – kein Wechsel zwischen Beratern",
      "Schnelle Reaktion, wenn ein Werkzeug ausfällt oder eine Frage aufkommt",
      "Kein aufgeblähter Beratungsvertrag mit Mindestlaufzeit"
    ],
    whatItIsnt: [
      "Kein IT-Wartungsvertrag für Ihre Systeme",
      "Kein 24/7-Support",
      "Keine Beratung ohne Termin – sondern strukturierte Sprechstunden"
    ],
    process: [
      {
        step: "Onboarding-Termin",
        body: "Wir sichten Ihre aktuelle KI-Nutzung, dokumentieren Werkzeuge und Anwendungsfälle und definieren die Themen für die ersten Sprechstunden."
      },
      {
        step: "Monatlicher Sprechstundentermin",
        body: "Sie bringen Ihre offenen Fragen und Wünsche mit, wir gehen sie strukturiert durch und setzen um, was in der Zeit möglich ist."
      },
      {
        step: "Zwischen den Terminen",
        body: "Sie erreichen uns per E-Mail und Chat. Kleine Fragen werden meist am selben Werktag beantwortet."
      },
      {
        step: "Monatliche Kündbarkeit",
        body: "Die Sprechstunde ist monatlich kündbar. Kein Lock-in, keine Vertragsverlängerung ohne aktive Zustimmung."
      }
    ],
    faqs: [
      {
        q: "Wie viele Anfragen pro Monat sind in der Sprechstunde inkludiert?",
        a: "In der Standard-Sprechstunde sind der monatliche Termin und übliche Ad-hoc-Anfragen zwischen den Terminen enthalten. Wenn dauerhaft mehr Umsetzungsaufwand entsteht, sprechen wir das offen an und passen den Umfang an."
      },
      {
        q: "Ist die KI-Sprechstunde auch für Einzelunternehmer sinnvoll?",
        a: "Ja, gerade dann. Einzelunternehmer haben oft keine Zeit, KI-Werkzeuge kontinuierlich weiterzuentwickeln. Ein fester monatlicher Termin hält die Nutzung produktiv, ohne dass Sie sich selbst darum kümmern müssen."
      },
      {
        q: "Was passiert, wenn ich für einen Monat keinen Bedarf habe?",
        a: "Sie können den Termin verschieben. Der Zweck der Sprechstunde ist, dass Sie KI ohne Aufwand produktiv halten – nicht, dass Sie jeden Monat einen Termin ‚absolvieren‘ müssen."
      }
    ],
    keywords: [
      "KI Sprechstunde Unternehmen",
      "KI Wartung Saarland",
      "KI Ansprechpartner Mittelstand",
      "KI laufende Betreuung",
      "KI Support ohne Vertragslaufzeit"
    ],
    relatedSlugs: ["ki-workshop", "ki-einrichtung", "ki-check"]
  }
];

export function findService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
