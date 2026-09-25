import type { MetadataRoute } from "next";
import { SOFTWARES } from "@/lib/data/platform/softwares";
import { isIndexable } from "@/lib/data/indexable";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ki-beratung-saar.com";
  const now = new Date();
  return [
    {
      url: `${base}/software`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...SOFTWARES.filter(isIndexable).map((s) => ({
      url: `${base}/software/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
