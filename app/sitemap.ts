import type { MetadataRoute } from "next";
import { getBlogPostsForSitemap } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import { supportedLocales } from "@/lib/translations/config";

export const revalidate = 84600;
const baseUrl = siteConfig.siteUrl;

const staticPages = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/food",
  "/learn",
  "/subscribe",
  "/tool",
];

const festivalPages = [
  "spring",
  "lantern",
  "qingming",
  "human-day",
  "dragon-boat",
  "qixi",
  "mid-autumn",
  "chongyang",
  "winter-solstice",
  "laba",
  "shangsi",
  "ghost",
  "wealth_god",
];

const foodPages = [
  "dumplings",
  "tangyuan",
  "zongzi",
  "mooncake",
  "chrysanthemum-recipes",
  "spring-pancake",
  "laba-porridge",
  "laba-garlic",
  "dragon-foods",
];

const toolPages = [
  "menu",
  "greetings",
  "red-envelope",
  "riddles",
  "qingming",
  "qingming-etiquette",
  "zongzi",
  "dragon-boat-blessings",
  "dragon-boat-culture",
  "qixi-blessings",
  "qixi-dates",
  "qixi-gifts",
  "mooncake",
  "mooncake-flavor",
  "mid-autumn-blessings",
  "chongyang-blessings",
  "chongyang-etiquette",
  "winter-solstice-food",
  "winter-solstice-blessings",
  "dumpling-tangyuan",
  "laba-blessings",
  "laba-porridge",
  "laba-garlic",
  "chrysanthemum-recipes",
  "dragon-foods",
  "haircut",
  "offering-etiquette",
  "spring-pancake",
  "taboo",
  "ghost-festival",
  "spring-prep",
  "business-blessings",
  "wealth-expressions",
  "wealth-god",
];

const quizPages = [
  "spring",
  "lantern",
  "qingming",
  "human-day",
  "dragon-boat",
  "qixi",
  "mid-autumn",
  "chongyang",
  "winter-solstice",
  "laba",
  "shangsi",
  "ghost",
];

const culturePages = [
  "spring",
  "lantern",
  "qingming",
  "human-day",
  "dragon-boat",
];

function getLastMod(): string {
  return new Date().toISOString().split("T")[0];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastMod = getLastMod();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const lang of supportedLocales) {
    for (const staticPage of staticPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${staticPage}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: staticPage === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            supportedLocales.map((l) => [l, `${baseUrl}/${l}${staticPage}`]),
          ),
        },
      });
    }

    for (const festival of festivalPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/festival/${festival}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            supportedLocales.map((l) => [
              l,
              `${baseUrl}/${l}/festival/${festival}`,
            ]),
          ),
        },
      });
    }

    for (const culture of culturePages) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/culture/${culture}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            supportedLocales.map((l) => [
              l,
              `${baseUrl}/${l}/culture/${culture}`,
            ]),
          ),
        },
      });
    }

    for (const food of foodPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/food/${food}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            supportedLocales.map((l) => [l, `${baseUrl}/${l}/food/${food}`]),
          ),
        },
      });
    }

    for (const tool of toolPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/tool/${tool}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.5,
        alternates: {
          languages: Object.fromEntries(
            supportedLocales.map((l) => [l, `${baseUrl}/${l}/tool/${tool}`]),
          ),
        },
      });
    }

    for (const quiz of quizPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/quiz/${quiz}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.5,
        alternates: {
          languages: Object.fromEntries(
            supportedLocales.map((l) => [l, `${baseUrl}/${l}/quiz/${quiz}`]),
          ),
        },
      });
    }
  }

  for (const lang of supportedLocales) {
    sitemapEntries.push({
      url: `${baseUrl}/${lang}/posts`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          supportedLocales.map((l) => [l, `${baseUrl}/${l}/posts`]),
        ),
      },
    });
  }

  const posts = await getBlogPostsForSitemap();
  for (const post of posts) {
    sitemapEntries.push({
      url: `${baseUrl}/en/posts/${post.slug}`,
      lastModified: post.publishedAt.split("T")[0],
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/posts/${post.slug}`,
        },
      },
    });
  }

  return sitemapEntries;
}
