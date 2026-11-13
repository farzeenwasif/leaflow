import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Everything is crawlable. Pages that shouldn't rank (e.g. /contact/sent)
    // use a `noindex` meta tag instead, which crawlers can only see if allowed in.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
