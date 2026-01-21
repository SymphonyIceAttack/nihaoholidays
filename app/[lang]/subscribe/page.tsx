import type { Metadata } from "next";
import { SubscribePageContent } from "@/components/subscribe/subscribe-page-content";
import { siteConfig } from "@/lib/config";
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
    title: "Subscribe to Festival Calendar - NihaoHolidays",
    description:
      "Add Chinese festivals to your calendar with cultural insights. Get reminders for Spring Festival, Lantern Festival, Qingming, Dragon Boat Festival, Mid-Autumn Festival, and Qixi.",
    ogTitle: "Subscribe to Festival Calendar - NihaoHolidays",
    ogDescription:
      "Add Chinese festivals to your calendar with cultural insights. Get reminders for Spring Festival, Lantern Festival, Qingming, Dragon Boat Festival, Mid-Autumn Festival, and Qixi.",
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
      url: `${siteConfig.siteUrl}/${lang}/subscribe`,
      images: [
        {
          url: `${siteConfig.siteUrl}/base-logo.webp`,
          width: 1024,
          height: 1024,
          alt: siteConfig.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: langData.ogTitle,
      description: langData.ogDescription,
      images: [`${siteConfig.siteUrl}/base-logo.webp`],
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/subscribe`,
      languages: generateHreflangLinks("/subscribe"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SubscribePage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return <SubscribePageContent lang={lang} />;
}
