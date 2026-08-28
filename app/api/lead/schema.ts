export type LeadRecommendedUseCase = {
  source: "department" | "industry";
  departmentSlug?: string;
  industrySlug?: string;
  title: string;
  problem: string;
  aiSolution: string;
  priority: "hoch" | "mittel" | "niedrig";
  routePath: string;
};

export type LeadRecommendedService = {
  slug: string;
  title: string;
  summary: string;
  routePath: string;
  duration: string;
};

export type LeadPotenzialResult = {
  score: number;
  scoreLabel: "hoch" | "mittel" | "niedrig";
  scoreHeadline: string;
  scoreExplainer: string;
  maturityLabel: string;
  nextStep: string;
  timeSavingsEstimate: string;
  useCases: LeadRecommendedUseCase[];
  services: LeadRecommendedService[];
  concernAnswer: string;
  complianceNote: string;
};

export type LeadPayload = {
  email: string;
  name?: string;
  company?: string;
  wantsCall?: boolean;
  answers: Record<string, string | string[]>;
  result: LeadPotenzialResult;
  source: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLead(input: unknown): {
  ok: true;
  data: LeadPayload;
} | {
  ok: false;
  error: string;
} {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Ungültiger Request-Body." };
  }
  const raw = input as Record<string, unknown>;
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, error: "Ungültige E-Mail-Adresse." };
  }
  if (!raw.result || typeof raw.result !== "object") {
    return { ok: false, error: "Ergebnis-Payload fehlt." };
  }
  if (!raw.answers || typeof raw.answers !== "object") {
    return { ok: false, error: "Antwort-Payload fehlt." };
  }
  const source = typeof raw.source === "string" ? raw.source : "unknown";
  const data: LeadPayload = {
    email,
    name: typeof raw.name === "string" ? raw.name.trim() : undefined,
    company: typeof raw.company === "string" ? raw.company.trim() : undefined,
    wantsCall: Boolean(raw.wantsCall),
    answers: raw.answers as Record<string, string | string[]>,
    result: raw.result as LeadPotenzialResult,
    source
  };
  return { ok: true, data };
}
