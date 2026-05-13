import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://khwsolutions.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/thatch`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bamboo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const thatchProducts = [
    "exotic-palm-thatch",
    "exotic-reed-thatch",
    "exotic-straw-thatch",
    "folding-reed-shingles",
  ];

  const bambooProducts = [
    "bamboo-rolls",
    "bamboo-poles",
    "bamboo-mats",
    "bamboo-panels",
    "bamboo-fences",
    "bamboo-upsidedown-mat",
  ];

  const productPages: MetadataRoute.Sitemap = [
    ...thatchProducts.map((slug) => ({
      url: `${baseUrl}/thatch/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...bambooProducts.map((slug) => ({
      url: `${baseUrl}/bamboo/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [...staticPages, ...productPages];
}
