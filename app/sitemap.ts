import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/data/cities";
import { INDUSTRIES } from "@/lib/data/industries";
import { DEPARTMENTS } from "@/lib/data/useCases";
import { MODULES } from "@/lib/data/modules";
import { COURSES } from "@/lib/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ki-beratung-saar.com";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
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

  return [
    ...staticEntries,
    ...cityEntries,
    ...industryEntries,
    ...departmentEntries,
    ...moduleEntries,
    ...courseEntries
  ];
}
