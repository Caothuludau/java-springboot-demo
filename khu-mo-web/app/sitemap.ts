import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { LOCALES } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return LOCALES.flatMap((locale) => [
    {
      url: new URL(`/${locale}`, base).href,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL(`/${locale}/legal/privacy`, base).href,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: new URL(`/${locale}/legal/terms`, base).href,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]);
}
