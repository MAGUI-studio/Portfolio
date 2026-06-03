import type { MetadataRoute } from "next";
import { visibleSections } from "@/components/sections/registry";

const siteUrl = "https://magui.studio";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...visibleSections.map((section) => ({
      url: `${siteUrl}/sections/${section.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: section.cardImage ? [`${siteUrl}${section.cardImage}`] : undefined,
    })),
  ];
}
