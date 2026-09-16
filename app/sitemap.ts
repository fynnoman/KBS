import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/data/cities";
import { INDUSTRIES } from "@/lib/data/industries";
import { DEPARTMENTS } from "@/lib/data/useCases";
import { MODULES } from "@/lib/data/modules";
import { COURSES } from "@/lib/data/courses";
import { PROBLEMS } from "@/lib/data/platform/problems";
import { AUTOMATIONS } from "@/lib/data/platform/automations";
import { INTEGRATIONS } from "@/lib/data/platform/integrations";
import { SOFTWARES } from "@/lib/data/platform/softwares";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ki-beratung-saar.com";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/plattform`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/probleme`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/automatisieren`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/schnittstelle`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/software`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/softwareloesungen`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/kurse`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/branchen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ki-anwendungsfaelle`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/standorte`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 }
  ];

  const cityEntries: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${base}/standorte/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const industryEntries: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${base}/branchen/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const departmentEntries: MetadataRoute.Sitemap = DEPARTMENTS.map((d) => ({
    url: `${base}${d.routePath}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  const moduleEntries: MetadataRoute.Sitemap = MODULES.map((m) => ({
    url: `${base}/softwareloesungen/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  const courseEntries: MetadataRoute.Sitemap = COURSES.map((c) => ({
    url: `${base}/kurse/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const problemEntries: MetadataRoute.Sitemap = PROBLEMS.map((p) => ({
    url: `${base}/probleme/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const automationEntries: MetadataRoute.Sitemap = AUTOMATIONS.map((a) => ({
    url: `${base}/automatisieren/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const integrationEntries: MetadataRoute.Sitemap = INTEGRATIONS.map((i) => ({
    url: `${base}/schnittstelle/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const softwareEntries: MetadataRoute.Sitemap = SOFTWARES.map((s) => ({
    url: `${base}/software/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [
    ...staticEntries,
    ...cityEntries,
    ...industryEntries,
    ...departmentEntries,
    ...moduleEntries,
    ...courseEntries,
    ...problemEntries,
    ...automationEntries,
    ...integrationEntries,
    ...softwareEntries
  ];
}
