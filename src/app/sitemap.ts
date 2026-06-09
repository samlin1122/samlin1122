import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/work"];
  return routing.locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${SITE_URL}/${locale}${p}`,
      lastModified: new Date(),
    }))
  );
}
