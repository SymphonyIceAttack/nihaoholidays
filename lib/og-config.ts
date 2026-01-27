import { siteConfig } from "./config";

export const ogImageConfig = {
  url: `${siteConfig.siteUrl}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "NihaoHolidays - Learn Chinese Holiday Traditions",
};

export const twitterImageConfig = {
  url: ogImageConfig.url,
  width: ogImageConfig.width,
  height: ogImageConfig.height,
  alt: ogImageConfig.alt,
};
