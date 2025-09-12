import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/constants/seo";
import { SERVICES_CONTENT, SERVICES_PAGE_LIST, SERVICE_DETAILS } from "@/constants/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const serviceSlugs = Array.from(
    new Set([
      ...SERVICES_CONTENT.items.map((i) => i.slug),
      ...SERVICES_PAGE_LIST.map((i) => i.slug),
      ...Object.keys(SERVICE_DETAILS),
    ])
  );

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}


