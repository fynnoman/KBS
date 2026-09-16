import type { MetadataRoute } from "next";
import { PROBLEMS } from "@/lib/data/platform/problems";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ki-beratung-saar.com";
  const now = new Date();
  return [
    {
      url: `${base}/probleme`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85
    },
    ...PROBLEMS.map((p) => ({
      url: `${base}/probleme/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
