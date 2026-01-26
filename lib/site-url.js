export function getSiteUrl() {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  let siteUrl = "";

  if (rawSiteUrl) {
    siteUrl = rawSiteUrl.startsWith("http")
      ? rawSiteUrl
      : `https://${rawSiteUrl}`;
  } else if (process.env.VERCEL_URL) {
    siteUrl = `https://${process.env.VERCEL_URL}`;
  } else {
    siteUrl = "http://localhost:3000";
  }

  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}
