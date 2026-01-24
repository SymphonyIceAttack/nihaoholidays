import type { LanguageType } from "./translations/config";

export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  siteName: "nihaoholidays",
  contactEmail: "hello@nihaoholidays.com",
  imageCdn: "https://image.nihaoholidays.com",
};

// Helper to generate festival URLs
export function getFestivalUrl(
  festivalId: string,
  lang: LanguageType = "en",
): string {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  return `${baseUrl}/${lang}/festival/${festivalId}`;
}
