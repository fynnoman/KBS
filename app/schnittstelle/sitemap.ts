import type { MetadataRoute } from "next";
import { INTEGRATIONS } from "@/lib/data/platform/integrations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ki-beratung-saar.com";
  const now = new Date();
  return [
    {
      url: `${base}/schnittstelle`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85
    },
    ...INTEGRATIONS.map((i) => ({
      url: `${base}/schnittstelle/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
