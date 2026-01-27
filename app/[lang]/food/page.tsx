import type { Metadata } from "next";
import { FoodPageContent } from "@/components/food";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { ogImageConfig, twitterImageConfig } from "@/lib/og-config";
import { siteConfig } from "@/lib/config";
import { getFoodListBreadcrumb } from "@/lib/structured-data";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

export function generateStaticParams() {
  return supportedLocales.map((lang) => ({
    lang,
  }));
}

const metadataConfig: Record<
  LanguageType,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  en: {
    title: "Holiday Foods Guide - NihaoHolidays",
    description:
      "Explore traditional Chinese holiday foods. Learn the names, meanings, and how to order dumplings, tangyuan, zongzi, mooncakes, and more.",
    ogTitle: "Holiday Foods Guide - NihaoHolidays",
    ogDescription:
      "Explore traditional Chinese holiday foods. Learn the names, meanings, and how to order dumplings, tangyuan, zongzi, mooncakes, and more.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const langData = metadataConfig[lang] || metadataConfig.en;

  return {
    title: langData.title,
    description: langData.description,
    openGraph: {
      type: "website",
      locale: `${lang}_${lang.toUpperCase()}`,
      title: langData.ogTitle,
      description: langData.ogDescription,
      siteName: siteConfig.siteName,
      url: `${siteConfig.siteUrl}/${lang}/food`,
      images: [
        {
          url: ogImageConfig.url,
          width: ogImageConfig.width,
          height: ogImageConfig.height,
          alt: ogImageConfig.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: langData.ogTitle,
      description: langData.ogDescription,
      images: [
        {
          url: twitterImageConfig.url,
          width: twitterImageConfig.width,
          height: twitterImageConfig.height,
          alt: twitterImageConfig.alt,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/food`,
      languages: generateHreflangLinks("/food"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FoodPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return (
    <>
      <BreadcrumbStructuredData
        items={getFoodListBreadcrumb(lang)}
        lang={lang}
      />
      <FoodPageContent lang={lang} />
    </>
  );
}
