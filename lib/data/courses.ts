export type CourseCategory =
  | "grundlagen"
  | "rollen"
  | "governance"
  | "technisch";

export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  duration: string;
  audience: string;
  summary: string;
  learnings: string[];
  certificate: string;
  formats: string[];
};

export const CATEGORY_LABEL: Record<CourseCategory, string> = {
  grundlagen: "Grundkurse",
  rollen: "Rollenspezifische Vertiefungen",
  governance: "Führung & Governance",
  technisch: "Technisch & IT"
};

export const CATEGORY_INTRO: Record<CourseCategory, string> = {
  grundlagen:
    "Für alle Mitarbeitenden. Sicherer Umgang mit generativer KI und die Prompt-Grundlagen, die überall wirken.",
  rollen:
    "Vertikale Tiefe für die Abteilung, die den größten Effekt zuerst sehen soll.",
  governance:
    "Führungsebene, Compliance, Personalvertretung. Verantwortung ohne Blindflug.",
  technisch:
    "Für IT, DevOps und Entwicklung – vom On-Premise-Deployment bis zum eigenen RAG-Assistenten."
};

export const COURSES: Course[] = [
  {
    slug: "ki-anwender",
    title: "Zertifizierter KI-Anwender",
    category: "grundlagen",
    duration: "1 Tag",
    audience: "Alle Mitarbeitenden – ohne technisches Vorwissen",
    summary:
      "Solide Grundlage im Umgang mit ChatGPT, Claude und vergleichbaren Werkzeugen. Nach diesem Kurs nutzen Ihre Mitarbeitenden generative KI produktiv, datenschutzkonform und im Rahmen Ihrer Nutzungsrichtlinien.",
    learnings: [
      "Funktionsweise moderner Sprachmodelle in verständlicher Form",
      "Prompt-Basics: klare Instruktionen, Rollen, Beispiele, Kontext",
      "Datenschutz-Regeln im Alltag – was darf rein, was nicht",
      "Umgang mit sensiblen Inhalten und internen Nutzungsrichtlinien",
      "Praktische Übungen für den eigenen Arbeitsalltag"
    ],
    certificate: "KBS Certified AI User",
    formats: ["Präsenz", "Remote", "Inhouse"]
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering Fundamentals",
    category: "grundlagen",
    duration: "1 Tag",
    audience: "Power-User, Marketing, Vertrieb, Redaktion",
    summary:
      "Präzise Prompts, wiederverwendbare Vorlagen, Qualitätskontrolle. Der Kurs bringt Anwendende auf ein Niveau, auf dem sie eigene Prompt-Bibliotheken für ihr Team aufbauen können.",
    learnings: [
      "Systematischer Prompt-Aufbau: Kontext, Rolle, Format, Constraints",
      "Prompt-Ketten und mehrstufige Workflows",
      "Vorlagen-Bibliothek für wiederkehrende Aufgaben",
      "Qualitätskontrolle und Evaluationsmethoden",
      "Fallstricke: Halluzinationen, Bias, Kontextlängen"
    ],
    certificate: "KBS Prompt Practitioner",
    formats: ["Präsenz", "Remote", "Inhouse"]
  },
  {
    slug: "vertrieb",
    title: "KI im Vertrieb & Business Development",
    category: "rollen",
    duration: "1 Tag",
    audience: "Vertrieb, Account Management, BDR, Sales Ops",
    summary:
      "Konkrete Werkzeuge für die tägliche Vertriebsarbeit: Recherche, Angebotserstellung, personalisierte E-Mail-Kaskaden, CRM-Automation. Fokus auf messbaren Zeitgewinn pro Vertriebsmitarbeiter.",
    learnings: [
      "Lead-Recherche und Account-Intelligence mit KI",
      "Angebotsvorbereitung und Textbausteine automatisieren",
      "Personalisierte Outbound-Kaskaden auf Deutsch",
      "CRM-Integrationen und Datenpflege ohne Handarbeit",
      "Erfolgs- und Conversion-Analyse mit KI-Unterstützung"
    ],
    certificate: "KBS AI for Sales",
    formats: ["Präsenz", "Remote", "Inhouse"]
  },
  {
    slug: "marketing",
    title: "KI im Marketing & Content",
    category: "rollen",
    duration: "1 Tag",
    audience: "Marketing, Kommunikation, Content, PR",
    summary:
      "Redaktionsplanung, Content-Produktion, Bildgenerierung, SEO-Recherche und Analytics – alles mit klarem Fokus auf Markenkonsistenz und rechtssichere Verwendung.",
    learnings: [
      "Redaktionsplanung und Themenrecherche mit KI",
      "Content-Produktion für Web, Newsletter, Social Media",
      "Bild- und Video-Generierung mit Corporate-Design-Regeln",
      "SEO-Recherche, Cluster-Aufbau, Optimierung",
      "Analytics-Auswertung und Reporting"
    ],
    certificate: "KBS AI for Marketing",
    formats: ["Präsenz", "Remote", "Inhouse"]
  },
  {
    slug: "finanzen",
    title: "KI in Finanzbuchhaltung & Controlling",
    category: "rollen",
    duration: "1 Tag",
    audience: "Buchhaltung, Controlling, Finance-Teams",
    summary:
      "Belegverarbeitung, OCR, Reporting-Automation und DATEV-nahe Workflows. Der Kurs zeigt, wo KI verlässlich einsetzbar ist – und wo aus Compliance-Gründen die manuelle Kontrolle bleiben muss.",
    learnings: [
      "OCR- und Belegverarbeitung mit modernen KI-Systemen",
      "Standardreports automatisieren, Ausreißer erkennen lassen",
      "DATEV-nahe Workflows und Schnittstellen",
      "Grenzen und Kontrollpunkte für Revisionssicherheit",
      "Zusammenspiel mit dem Steuerbüro"
    ],
    certificate: "KBS AI for Finance",
    formats: ["Präsenz", "Remote", "Inhouse"]
  },
  {
    slug: "hr",
    title: "KI in HR & Recruiting",
    category: "rollen",
    duration: "1 Tag",
    audience: "HR, Recruiting, Personalentwicklung",
    summary:
      "Stellenanzeigen, Vorauswahl, Onboarding-Materialien, Skill-Gap-Analyse. Mit expliziter Abgrenzung der Hochrisiko-Anwendungen nach EU AI Act, damit Ihr HR-Team rechtssicher arbeitet.",
    learnings: [
      "Stellenanzeigen und Employer-Branding-Texte",
      "Onboarding-Materialien und Wissensdatenbanken",
      "Skill-Gap-Analyse und Weiterbildungspläne",
      "Was nach EU AI Act als Hochrisiko gilt – klare Abgrenzung",
      "Betriebsrat und Mitbestimmung von Anfang an mitdenken"
    ],
    certificate: "KBS AI for HR",
    formats: ["Präsenz", "Remote", "Inhouse"]
  },
  {
    slug: "kundenservice",
    title: "KI im Kundenservice & Support",
    category: "rollen",
    duration: "1 Tag",
    audience: "Kundenservice, Support, Beschwerdemanagement",
    summary:
      "Ticket-Triage, Antwort-Vorschläge, Wissensdatenbanken, erste Voice-Agent-Erfahrung. Ziel: kürzere Antwortzeiten, gleichbleibende Qualität, entlastete Teams.",
    learnings: [
      "Ticket-Klassifikation und Priorisierung",
      "Antwort-Vorschläge und Textbausteine, geprüft und markenkonform",
      "Interne Wissensdatenbanken KI-fähig aufbereiten",
      "Voice-Agents für Erstannahme und Terminvereinbarung",
      "Eskalationspfade und Grenzen automatischer Bearbeitung"
    ],
    certificate: "KBS AI for Customer Service",
    formats: ["Präsenz", "Remote", "Inhouse"]
  },
  {
    slug: "strategie",
    title: "KI-Strategie für Führungskräfte",
    category: "governance",
    duration: "Halbtag",
    audience: "Geschäftsführung, Vorstand, Bereichsleitung",
    summary:
      "Führungsformat für die Ebene, die die Investmententscheidungen trifft. Wo steht Ihr Unternehmen im KI-Zyklus, welche Vorhaben zahlen sich in zwölf Monaten aus, welche Risiken sind real.",
    learnings: [
      "KI-Reifegrad-Assessment für das eigene Unternehmen",
      "Investment-Framing: Nutzen, Risiken, Total Cost of Ownership",
      "Roadmap-Bau: welche Bausteine wann sinnvoll sind",
      "Governance-Struktur: wer ist wofür verantwortlich",
      "Risikoklassen nach EU AI Act – im Überblick"
    ],
    certificate: "KBS Executive AI Briefing",
    formats: ["Präsenz", "Inhouse"]
  },
  {
    slug: "ai-act",
    title: "EU AI Act Verantwortliche/r",
    category: "governance",
    duration: "2 Tage",
    audience: "Compliance, Datenschutz, Recht, KI-Verantwortliche",
    summary:
      "Vertiefungskurs zur Umsetzung des EU AI Act im eigenen Unternehmen. Am Ende sind Ihre Verantwortlichen in der Lage, KI-Anwendungen selbst zu klassifizieren, zu dokumentieren und interne Audits vorzubereiten.",
    learnings: [
      "Risikoklassifikation: unzulässig, hoch, begrenzt, minimal",
      "Dokumentationspflichten und Nachweisführung",
      "Interne Rollen und Verantwortlichkeiten",
      "Schnittstellen zu DSGVO, Datenschutz und Betriebsrat",
      "Interne Audits und Bewertungen durchführen"
    ],
    certificate: "KBS AI Act Compliance Officer (mit Wissenscheck)",
    formats: ["Präsenz", "Inhouse"]
  },
  {
    slug: "betriebsvereinbarung",
    title: "KI-Betriebsvereinbarung",
    category: "governance",
    duration: "Halbtag",
    audience: "Personalrat, Betriebsrat, HR-Leitung",
    summary:
      "Was regelt eine gute Betriebsvereinbarung zu KI, welche Mitbestimmungsrechte greifen, welche Musterklauseln funktionieren in der Praxis. Ohne juristisches Vorwissen verständlich aufbereitet.",
    learnings: [
      "Rechtlicher Rahmen und Mitbestimmung bei KI-Einführung",
      "Aufbau einer tragfähigen Betriebsvereinbarung",
      "Musterklauseln und ihre Fallstricke",
      "Umgang mit bereits genutzten Tools (Shadow AI)",
      "Rolle des Betriebsrats im laufenden Betrieb"
    ],
    certificate: "KBS Teilnahmezertifikat",
    formats: ["Präsenz", "Inhouse"]
  },
  {
    slug: "lokale-ki",
    title: "Lokale KI & On-Premise LLMs für IT",
    category: "technisch",
    duration: "2 Tage",
    audience: "IT, DevOps, Systemadministration, Infrastruktur",
    summary:
      "Praxiskurs zur Installation, Wartung und Absicherung lokaler LLMs. Von der Hardware-Auswahl über Ollama und LM Studio bis zur produktiven Anbindung an das interne Netz.",
    learnings: [
      "Hardware-Auswahl: Mac Mini, dedizierte Linux-Server, GPU-Optionen",
      "Modellauswahl: Llama, Qwen, Mistral – Trade-offs",
      "Ollama, LM Studio und produktive Deployments",
      "RAG-Basics: Vektor-DB, Embeddings, Retrieval",
      "Wartung, Updates, Monitoring, Sicherheit"
    ],
    certificate: "KBS Local AI Administrator",
    formats: ["Präsenz", "Inhouse"]
  },
  {
    slug: "rag",
    title: "RAG-Assistenten selber bauen",
    category: "technisch",
    duration: "2 Tage",
    audience: "Entwickler, Data Engineers, KI-Anwendende mit Code-Erfahrung",
    summary:
      "Aufbaukurs für Entwicklung eigener Retrieval-Augmented-Generation-Systeme. Vom Embedding-Modell über die Vektor-DB bis zur produktiven Evaluation.",
    learnings: [
      "Embedding-Modelle auswählen und benchmarken",
      "Vektor-Datenbanken: Qdrant, Weaviate, pgvector im Vergleich",
      "Retrieval-Muster: Hybrid, Rerank, Query-Rewrite",
      "Prompt-Design für RAG-Antworten mit Quellenangabe",
      "Evaluation: Antwortqualität, Halluzinationen, Kosten"
    ],
    certificate: "KBS RAG Developer",
    formats: ["Präsenz", "Inhouse"]
  }
];
