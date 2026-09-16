import { PROBLEMS } from "./problems";
import { AUTOMATIONS } from "./automations";
import { INTEGRATIONS } from "./integrations";
import { SOFTWARES } from "./softwares";
import type { Automation, Integration, Problem, Software } from "./types";

export function problemsByCategory() {
  const map = new Map<Problem["category"], Problem[]>();
  for (const p of PROBLEMS) {
    const list = map.get(p.category) ?? [];
    list.push(p);
    map.set(p.category, list);
  }
  return map;
}

export function automationsByCategory() {
  const map = new Map<Automation["category"], Automation[]>();
  for (const a of AUTOMATIONS) {
    const list = map.get(a.category) ?? [];
    list.push(a);
    map.set(a.category, list);
  }
  return map;
}

export function integrationsForSoftware(softwareSlug: string): Integration[] {
  return INTEGRATIONS.filter(
    (i) => i.systemASlug === softwareSlug || i.systemBSlug === softwareSlug
  );
}

export function softwareBySlug(slug: string): Software | undefined {
  return SOFTWARES.find((s) => s.slug === slug);
}

export function problemBySlug(slug: string): Problem | undefined {
  return PROBLEMS.find((p) => p.slug === slug);
}

export function automationBySlug(slug: string): Automation | undefined {
  return AUTOMATIONS.find((a) => a.slug === slug);
}

export function integrationBySlug(slug: string): Integration | undefined {
  return INTEGRATIONS.find((i) => i.slug === slug);
}

export function resolveProblems(slugs: string[]): Problem[] {
  return slugs
    .map((s) => problemBySlug(s))
    .filter((x): x is Problem => Boolean(x));
}

export function resolveAutomations(slugs: string[]): Automation[] {
  return slugs
    .map((s) => automationBySlug(s))
    .filter((x): x is Automation => Boolean(x));
}

export function resolveIntegrations(slugs: string[]): Integration[] {
  return slugs
    .map((s) => integrationBySlug(s))
    .filter((x): x is Integration => Boolean(x));
}

export function resolveSoftwares(slugs: string[]): Software[] {
  return slugs
    .map((s) => softwareBySlug(s))
    .filter((x): x is Software => Boolean(x));
}
