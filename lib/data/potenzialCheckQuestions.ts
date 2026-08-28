export type QuestionKind = "single" | "multi";

export type QuestionOption = {
  value: string;
  label: string;
  hint?: string;
};

export type Question = {
  id: string;
  kind: QuestionKind;
  title: string;
  description?: string;
  options: QuestionOption[];
  required?: boolean;
};

export const POTENZIAL_CHECK_QUESTIONS: Question[] = [
  {
    id: "industry",
    kind: "single",
    title: "In welcher Branche ist Ihr Unternehmen tätig?",
    description:
      "Damit wir die Anwendungsfälle auf realistische Prozesse in Ihrer Branche zuschneiden.",
    required: true,
    options: [
      { value: "handwerk", label: "Handwerk / Bau" },
      { value: "immobilien", label: "Immobilien / Verwaltung" },
      { value: "kanzlei", label: "Steuer- / Rechtsberatung" },
      { value: "dienstleistung", label: "Dienstleistung / Beratung" },
      { value: "handel", label: "Handel / E-Commerce" },
      { value: "industrie", label: "Industrie / Fertigung" },
      { value: "it", label: "IT / Software" },
      { value: "gesundheit", label: "Gesundheit / Sozialwesen" },
      { value: "andere", label: "Andere Branche" }
    ]
  },
  {
    id: "size",
    kind: "single",
    title: "Wie groß ist Ihr Unternehmen?",
    required: true,
    options: [
      { value: "solo", label: "1 – 9 Mitarbeitende" },
      { value: "kmu-s", label: "10 – 49 Mitarbeitende" },
      { value: "kmu-m", label: "50 – 249 Mitarbeitende" },
      { value: "mittelstand", label: "250 – 999 Mitarbeitende" },
      { value: "gross", label: "1.000+ Mitarbeitende" }
    ]
  },
  {
    id: "timeSinks",
    kind: "multi",
    title: "Wo verlieren Sie im Alltag am meisten Zeit?",
    description: "Mehrfachauswahl möglich – wählen Sie bis zu drei Bereiche.",
    required: true,
    options: [
      { value: "verwaltung", label: "Verwaltung, Dokumentation, Berichte" },
      { value: "kundenservice", label: "Kundenanfragen und Support" },
      { value: "vertrieb", label: "Angebote, Follow-ups, CRM-Pflege" },
      { value: "marketing", label: "Content, Redaktion, Social Media" },
      { value: "buchhaltung", label: "Belege, Rechnungen, Reports" },
      { value: "hr", label: "Stellenanzeigen, Onboarding, Richtlinien" },
      { value: "wissen", label: "Wissen finden, interne Recherche" }
    ]
  },
  {
    id: "departments",
    kind: "multi",
    title: "Welche Abteilungen sollen zuerst profitieren?",
    description:
      "Wählen Sie die Bereiche, in denen Sie den größten Hebel vermuten.",
    required: true,
    options: [
      { value: "vertrieb", label: "Vertrieb" },
      { value: "marketing", label: "Marketing" },
      { value: "kundenservice", label: "Kundenservice" },
      { value: "buchhaltung", label: "Buchhaltung / Finance" },
      { value: "hr", label: "HR / Personal" },
      { value: "geschaeftsfuehrung", label: "Geschäftsführung / Strategie" }
    ]
  },
  {
    id: "maturity",
    kind: "single",
    title: "Wie weit sind Sie beim Thema KI bereits?",
    required: true,
    options: [
      {
        value: "neu",
        label: "Noch nicht wirklich gestartet",
        hint: "Wir hören davon, wissen aber nicht, wo wir anfangen sollen."
      },
      {
        value: "explore",
        label: "Einzelne Mitarbeitende testen ChatGPT & Co.",
        hint: "Kein klarer Rahmen, keine Richtlinie."
      },
      {
        value: "pilot",
        label: "Erste Anwendungen produktiv im Einsatz",
        hint: "Zwei bis drei Prozesse laufen bereits, ohne Systematik."
      },
      {
        value: "scale",
        label: "Systematische Einführung im Unternehmen",
        hint: "Wir suchen den nächsten Effizienzsprung."
      }
    ]
  },
  {
    id: "motivation",
    kind: "single",
    title: "Was ist Ihre stärkste Motivation für KI im Unternehmen?",
    required: true,
    options: [
      { value: "zeit", label: "Zeit sparen und Kapazitäten frei bekommen" },
      { value: "qualitaet", label: "Qualität und Konsistenz erhöhen" },
      { value: "wettbewerb", label: "Wettbewerbsvorsprung sichern" },
      { value: "entlastung", label: "Mitarbeitende entlasten und binden" },
      { value: "compliance", label: "AI Act, Datenschutz und Compliance im Griff" }
    ]
  },
  {
    id: "privacy",
    kind: "single",
    title: "Wie sensibel sind Ihre Daten und Ihr regulatorisches Umfeld?",
    required: true,
    options: [
      {
        value: "hoch",
        label: "Sehr hoch (Gesundheit, Kanzlei, Behörde, Bank)"
      },
      {
        value: "mittel",
        label: "Mittel (personenbezogene Kunden- oder Mitarbeiterdaten)"
      },
      { value: "gering", label: "Gering (überwiegend öffentliche Informationen)" }
    ]
  },
  {
    id: "training",
    kind: "single",
    title: "Wie steht das Team zu Schulung und Weiterbildung?",
    required: true,
    options: [
      { value: "ja", label: "Wir wollen das Team gezielt qualifizieren" },
      { value: "wenn-noetig", label: "Nur wenn zwingend nötig" },
      { value: "eher-nicht", label: "Bisher kein Fokus auf Schulung" }
    ]
  },
  {
    id: "horizon",
    kind: "single",
    title: "In welchem Zeithorizont wollen Sie Ergebnisse sehen?",
    required: true,
    options: [
      { value: "sofort", label: "Innerhalb der nächsten 4 Wochen" },
      { value: "kurz", label: "1 – 3 Monate" },
      { value: "mittel", label: "3 – 6 Monate" },
      { value: "unklar", label: "Noch offen, erst mal informieren" }
    ]
  },
  {
    id: "concern",
    kind: "single",
    title: "Was ist Ihre größte Sorge beim Einsatz von KI?",
    required: true,
    options: [
      { value: "datenschutz", label: "Datenschutz und Compliance" },
      { value: "kosten", label: "Kosten und wirtschaftlicher Nutzen" },
      { value: "akzeptanz", label: "Akzeptanz im Team" },
      { value: "fehler", label: "Fehleranfälligkeit und Halluzinationen" },
      { value: "keine", label: "Keine ausgeprägte Sorge" }
    ]
  }
];

export type CheckAnswers = Record<string, string | string[]>;
