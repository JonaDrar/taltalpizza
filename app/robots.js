import { getSiteUrl } from "../lib/site-url";

const siteUrl = getSiteUrl();

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
