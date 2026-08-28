import { DEPARTMENTS } from "@/lib/data/useCases";
import { INDUSTRIES } from "@/lib/data/industries";
import { SERVICES } from "@/lib/data/services";
import type { CheckAnswers } from "@/lib/data/potenzialCheckQuestions";

export type RecommendedUseCase = {
  source: "department" | "industry";
  departmentSlug?: string;
  industrySlug?: string;
  title: string;
  problem: string;
  aiSolution: string;
  priority: "hoch" | "mittel" | "niedrig";
  routePath: string;
};

export type RecommendedService = {
  slug: string;
  title: string;
  summary: string;
  routePath: string;
  duration: string;
};

export type PotenzialResult = {
  score: number;
  scoreLabel: "hoch" | "mittel" | "niedrig";
  scoreHeadline: string;
  scoreExplainer: string;
  maturityLabel: string;
  nextStep: string;
  timeSavingsEstimate: string;
  useCases: RecommendedUseCase[];
  services: RecommendedService[];
  concernAnswer: string;
  complianceNote: string;
};

const DEPARTMENT_SLUGS = new Set([
  "vertrieb",
  "marketing",
  "buchhaltung",
  "kundenservice",
  "hr"
]);

const INDUSTRY_MAP: Record<string, string> = {
  handwerk: "handwerk",
  immobilien: "immobilien",
  kanzlei: "steuerkanzleien",
  handel: "einzelhandel",
  industrie: "produktion",
  gesundheit: "arztpraxen",
  dienstleistung: "dienstleister"
};

function asArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function pickDepartmentUseCases(
  departments: string[],
  timeSinks: string[]
): RecommendedUseCase[] {
  const scoreMap = new Map<string, number>();
  for (const slug of departments) {
    scoreMap.set(slug, (scoreMap.get(slug) ?? 0) + 3);
  }
  for (const sink of timeSinks) {
    if (DEPARTMENT_SLUGS.has(sink)) {
      scoreMap.set(sink, (scoreMap.get(sink) ?? 0) + 2);
    }
  }
  if (timeSinks.includes("verwaltung")) {
    scoreMap.set("buchhaltung", (scoreMap.get("buchhaltung") ?? 0) + 1);
    scoreMap.set("hr", (scoreMap.get("hr") ?? 0) + 1);
  }
  if (timeSinks.includes("wissen")) {
    scoreMap.set("kundenservice", (scoreMap.get("kundenservice") ?? 0) + 1);
  }

  const sortedSlugs = Array.from(scoreMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([slug]) => slug);

  const picks: RecommendedUseCase[] = [];
  for (const slug of sortedSlugs) {
    const dept = DEPARTMENTS.find((d) => d.slug === slug);
    if (!dept) continue;
    const highPriority = dept.cases.filter((c) => c.priority === "hoch");
    const chosen = highPriority.length > 0 ? highPriority : dept.cases;
    for (const c of chosen.slice(0, 2)) {
      picks.push({
        source: "department",
        departmentSlug: dept.slug,
        title: c.title,
        problem: c.problem,
        aiSolution: c.aiSolution,
        priority: c.priority,
        routePath: dept.routePath
      });
      if (picks.length >= 4) return picks;
    }
  }
  return picks;
}

function pickIndustryUseCase(industry: string): RecommendedUseCase | undefined {
  const industrySlug = INDUSTRY_MAP[industry];
  if (!industrySlug) return undefined;
  const ind = INDUSTRIES.find((i) => i.slug === industrySlug);
  if (!ind || ind.useCases.length === 0) return undefined;
  const first = ind.useCases[0];
  return {
    source: "industry",
    industrySlug: ind.slug,
    title: first.title,
    problem: first.description,
    aiSolution: first.description,
    priority: "hoch",
    routePath: `/branchen/${ind.slug}`
  };
}

function pickServices(
  wantsTraining: string,
  maturity: string
): RecommendedService[] {
  const wanted: string[] = [];
  if (maturity === "neu" || maturity === "explore") {
    wanted.push("ki-check", "ki-workshop");
  } else if (maturity === "pilot") {
    wanted.push("ki-einrichtung", "ki-workshop");
  } else {
    wanted.push("ki-einrichtung", "ki-sprechstunde");
  }
  if (wantsTraining === "ja") {
    wanted.push("ki-workshop");
  }
  const seen = new Set<string>();
  const picked: RecommendedService[] = [];
  for (const slug of wanted) {
    if (seen.has(slug)) continue;
    const svc = SERVICES.find((s) => s.slug === slug);
    if (!svc) continue;
    seen.add(slug);
    picked.push({
      slug: svc.slug,
      title: svc.name,
      summary: svc.intro,
      routePath: `/leistungen/${svc.slug}`,
      duration: svc.duration
    });
    if (picked.length >= 3) break;
  }
  if (picked.length === 0) {
    for (const svc of SERVICES.slice(0, 3)) {
      picked.push({
        slug: svc.slug,
        title: svc.name,
        summary: svc.intro,
        routePath: `/leistungen/${svc.slug}`,
        duration: svc.duration
      });
    }
  }
  return picked;
}

function computeScore(answers: CheckAnswers) {
  let score = 0;
  const timeSinks = asArray(answers.timeSinks);
  const departments = asArray(answers.departments);
  score += Math.min(timeSinks.length, 3) * 8;
  score += Math.min(departments.length, 3) * 6;

  const motivation = answers.motivation;
  if (motivation === "zeit" || motivation === "wettbewerb") score += 12;
  else if (motivation === "qualitaet" || motivation === "entlastung") score += 10;
  else if (motivation === "compliance") score += 8;

  const horizon = answers.horizon;
  if (horizon === "sofort") score += 15;
  else if (horizon === "kurz") score += 12;
  else if (horizon === "mittel") score += 8;
  else score += 3;

  const training = answers.training;
  if (training === "ja") score += 10;
  else if (training === "wenn-noetig") score += 6;

  const size = answers.size;
  if (size === "kmu-s" || size === "kmu-m") score += 10;
  else if (size === "mittelstand" || size === "gross") score += 8;
  else if (size === "solo") score += 5;

  const maturity = answers.maturity;
  if (maturity === "explore" || maturity === "pilot") score += 8;
  else if (maturity === "scale") score += 5;
  else if (maturity === "neu") score += 4;

  return Math.min(score, 100);
}

function scoreLabel(score: number): "hoch" | "mittel" | "niedrig" {
  if (score >= 65) return "hoch";
  if (score >= 40) return "mittel";
  return "niedrig";
}

function timeSavingsEstimate(
  size: string | string[] | undefined,
  timeSinks: string[]
): string {
  const areas = Math.max(1, timeSinks.length);
  const perAreaHours: Record<string, number> = {
    solo: 2.5,
    "kmu-s": 6,
    "kmu-m": 14,
    mittelstand: 30,
    gross: 60
  };
  const sizeKey = typeof size === "string" ? size : "kmu-s";
  const perArea = perAreaHours[sizeKey] ?? 6;
  const hours = Math.round(perArea * areas);
  return `${hours}–${Math.round(hours * 1.4)} Stunden pro Woche`;
}

function concernAnswer(concern: string | string[] | undefined): string {
  const value = typeof concern === "string" ? concern : "keine";
  switch (value) {
    case "datenschutz":
      return "Datenschutz ist der häufigste Bremser – und der am besten lösbare. Wir arbeiten ausschließlich mit Business-Konten mit Datenverarbeitungsvereinbarung, klaren Rollen- und Zugriffskonzepten und dokumentierten AI-Act-relevanten Risikoklassen.";
    case "kosten":
      return "Der wirtschaftliche Nutzen entsteht in den ersten drei Anwendungen. Wir starten deshalb bewusst mit Use-Cases, deren Zeitgewinn Sie im Alltag messen können, und rechnen die eingesparten Stunden gegen den Software- und Beratungspreis.";
    case "akzeptanz":
      return "Akzeptanz entsteht nicht durch Rollout, sondern durch Beteiligung. Deshalb starten wir mit einem gemeinsamen Workshop, in dem das Team eigene Use-Cases identifiziert – nicht die Geschäftsführung, sondern die Menschen im Prozess.";
    case "fehler":
      return "Halluzinationen sind real und vorhersehbar. Wir bauen Prozesse mit menschlicher Freigabestelle: KI schlägt vor, Mensch prüft, System dokumentiert. Kein Use-Case geht ohne Kontrollpunkt in Produktion.";
    case "keine":
    default:
      return "Sie sind bereit für den nächsten Schritt. Wir empfehlen eine strukturierte Roadmap, damit aus einzelnen Tools ein systematischer Vorteil wird.";
  }
}

function complianceNote(privacy: string | string[] | undefined): string {
  const value = typeof privacy === "string" ? privacy : "mittel";
  if (value === "hoch") {
    return "Ihr regulatorisches Profil verlangt lokale oder DSGVO-strenge KI-Lösungen. Wir empfehlen einen dedizierten AI-Act-Konformitätsblock, bevor produktive Prozesse aufgesetzt werden.";
  }
  if (value === "mittel") {
    return "Business-Umgebungen mit Datenverarbeitungsvereinbarung und klare Nutzungsrichtlinien sind für Ihr Profil ausreichend. Der AI Act betrifft Sie punktuell – vor allem bei Bewertungs- und Auswahlprozessen im HR.";
  }
  return "Für Ihre Datenlage genügen Standard-Business-Lösungen. Wir empfehlen dennoch eine minimale Nutzungsrichtlinie, damit sensiblere Vorgänge (Verträge, Kundennamen) sauber getrennt bleiben.";
}

function maturityLabel(maturity: string | string[] | undefined): string {
  const value = typeof maturity === "string" ? maturity : "explore";
  switch (value) {
    case "neu":
      return "Reifegrad: Einsteiger. Grundlagen und erste risikoarme Use-Cases stehen im Vordergrund.";
    case "explore":
      return "Reifegrad: Explorer. Erste Erfahrungen sind da, jetzt braucht es Struktur und Skalierung.";
    case "pilot":
      return "Reifegrad: Pilot. Sie haben produktive Anwendungen – die nächste Stufe ist Systematik.";
    case "scale":
      return "Reifegrad: Scale-Up. Sie sind bereit für tiefere Integration und AI-Act-konforme Governance.";
    default:
      return "Reifegrad: Explorer.";
  }
}

function nextStepFor(
  score: number,
  training: string | string[] | undefined,
  horizon: string | string[] | undefined
): string {
  const isFast = horizon === "sofort" || horizon === "kurz";
  const wantsTraining = training === "ja";
  if (score >= 65 && isFast) {
    return "Buchen Sie einen KI-Workshop-Tag, um innerhalb einer Woche die drei bestbewerteten Anwendungen produktiv zu setzen.";
  }
  if (score >= 65 && wantsTraining) {
    return "Kombinieren Sie eine KI-Team-Schulung mit dem KI-Strategie-Check, damit Wissen und Roadmap in einem Zug entstehen.";
  }
  if (score >= 40) {
    return "Starten Sie mit dem KI-Strategie-Check. In 60 Minuten sortieren wir Ihre Use-Cases nach Aufwand und Wirkung.";
  }
  return "Vereinbaren Sie ein kostenloses Erstgespräch. Wir prüfen gemeinsam, ob ein Workshop, eine Schulung oder eine Roadmap der richtige Einstieg ist.";
}

function scoreHeadline(label: "hoch" | "mittel" | "niedrig"): string {
  if (label === "hoch") {
    return "Ihr KI-Potenzial ist hoch – die Roadmap ist greifbar.";
  }
  if (label === "mittel") {
    return "Ihr KI-Potenzial ist solide – mit klarer Priorisierung gut zu heben.";
  }
  return "Ihr KI-Potenzial existiert, braucht aber zunächst Grundlagen.";
}

function scoreExplainer(
  label: "hoch" | "mittel" | "niedrig",
  savings: string
): string {
  if (label === "hoch") {
    return `Auf Basis Ihrer Antworten sehen wir eine realistische Zeitersparnis von ${savings} in den priorisierten Bereichen. Voraussetzung: klare Auswahl der ersten Anwendungen und Team-Einbindung.`;
  }
  if (label === "mittel") {
    return `Ihre Antworten deuten auf ${savings} Zeitersparnis hin – erreichbar in zwei bis drei Monaten mit sauberer Priorisierung.`;
  }
  return `Der KI-Hebel ist da, benötigt aber Grundlagen (Auswahl der Tools, Datenschutz, Team-Qualifikation). Realistisch ist eine Zeitersparnis von ${savings} nach dem Aufsetzen.`;
}

export function buildRecommendation(answers: CheckAnswers): PotenzialResult {
  const timeSinks = asArray(answers.timeSinks);
  const departments = asArray(answers.departments);
  const industry = typeof answers.industry === "string" ? answers.industry : "andere";

  const score = computeScore(answers);
  const label = scoreLabel(score);
  const savings = timeSavingsEstimate(answers.size, timeSinks);

  const deptCases = pickDepartmentUseCases(departments, timeSinks);
  const industryCase = pickIndustryUseCase(industry);
  const useCases = industryCase ? [industryCase, ...deptCases].slice(0, 5) : deptCases.slice(0, 5);

  const services = pickServices(
    typeof answers.training === "string" ? answers.training : "wenn-noetig",
    typeof answers.maturity === "string" ? answers.maturity : "explore"
  );

  return {
    score,
    scoreLabel: label,
    scoreHeadline: scoreHeadline(label),
    scoreExplainer: scoreExplainer(label, savings),
    maturityLabel: maturityLabel(answers.maturity),
    nextStep: nextStepFor(score, answers.training, answers.horizon),
    timeSavingsEstimate: savings,
    useCases,
    services,
    concernAnswer: concernAnswer(answers.concern),
    complianceNote: complianceNote(answers.privacy)
  };
}
