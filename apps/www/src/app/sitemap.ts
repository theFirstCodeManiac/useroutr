import { MetadataRoute } from "next";

const baseUrl = "https://useroutr.com";

const useCases = ["marketplaces", "fintech", "ecommerce", "payouts"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/integrations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...useCases.map((slug) => ({
      url: `${baseUrl}/use-cases/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
