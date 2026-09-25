import type { MetadataRoute } from "next";
import { INTEGRATIONS } from "@/lib/data/platform/integrations";
import { isIndexable } from "@/lib/data/indexable";

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
    ...INTEGRATIONS.filter(isIndexable).map((i) => ({
      url: `${base}/schnittstelle/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
