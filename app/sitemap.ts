import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ki-beratung-saar.com";
  const now = new Date();
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${base}/#leistungen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${base}/#fuer-wen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${base}/#prozess`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${base}/#ueber`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${base}/#kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${base}/business`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95
    },
    {
      url: `${base}/business#use-cases`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${base}/business#lokale-ki`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${base}/business#faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: `${base}/business#termin`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${base}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: `${base}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2
    }
  ];
}
