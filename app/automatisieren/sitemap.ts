import type { MetadataRoute } from "next";
import { AUTOMATIONS } from "@/lib/data/platform/automations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ki-beratung-saar.com";
  const now = new Date();
  return [
    {
      url: `${base}/automatisieren`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85
    },
    ...AUTOMATIONS.map((a) => ({
      url: `${base}/automatisieren/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
