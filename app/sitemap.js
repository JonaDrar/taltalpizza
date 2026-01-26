import { getSiteUrl } from "../lib/site-url";

const siteUrl = getSiteUrl();

export default function sitemap() {
  const routes = ["", "/menu"];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "daily",
    priority: index === 0 ? 1 : 0.8
  }));
}
