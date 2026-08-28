import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/data/cities";
import { SERVICES } from "@/lib/data/services";
import { COURSES } from "@/lib/data/courses";
import { INDUSTRIES } from "@/lib/data/industries";
import { DEPARTMENTS } from "@/lib/data/useCases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ki-beratung-saar.com";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#fuer-wen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#prozess`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#ueber`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#termin`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/#kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    { url: `${base}/leistungen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/standorte`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ki-schulung`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/branchen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ki-anwendungsfaelle`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kontaktformular`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    { url: `${base}/business`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/business#branchen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/business#kurskatalog`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/business#loesungen`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/business#preise`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/business#referenzen`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/business#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/business#termin`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 }
  ];

  const cityEntries: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${base}/standorte/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  const courseEntries: MetadataRoute.Sitemap = COURSES.map((c) => ({
    url: `${base}/ki-schulung/${c.slug}`,
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

  return [
    ...staticEntries,
    ...cityEntries,
    ...serviceEntries,
    ...courseEntries,
    ...industryEntries,
    ...departmentEntries
  ];
}
