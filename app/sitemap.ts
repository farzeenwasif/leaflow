import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

type Route = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

const routes: Route[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/accounting", priority: 0.9, changeFrequency: "monthly" },
  { path: "/company-creation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/our-app", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/legal-notice", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path || "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
