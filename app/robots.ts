import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://kbsaar.de";
  return {
    rules: [
      { userAgent: "*", allow: "/" },

      // Explicitly allow major AI crawlers — GEO / AI-search visibility
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "MistralAI-User", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
