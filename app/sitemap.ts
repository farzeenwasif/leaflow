import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/accounting", priority: 0.9 },
  { path: "/company-creation", priority: 0.9 },
  { path: "/our-app", priority: 0.8 },
  { path: "/pricing", priority: 0.9 },
  { path: "/contact", priority: 0.7 },
  { path: "/legal-notice", priority: 0.2 },
  { path: "/privacy-policy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
