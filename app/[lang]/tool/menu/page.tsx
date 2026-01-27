import type { Metadata } from "next";
import { MenuAssistantPage } from "@/components/tool";
import { ogImageConfig, twitterImageConfig } from "@/lib/og-config";
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
    title: "Menu Assistant - NihaoHolidays",
    description:
      "Plan your Spring Festival reunion dinner with Chinese dishes and ordering phrases.",
    ogTitle: "Menu Assistant - NihaoHolidays",
    ogDescription:
      "Plan your Spring Festival reunion dinner with Chinese dishes and ordering phrases.",
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
      url: `${siteConfig.siteUrl}/${lang}/tool/menu`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/tool/menu`,
      languages: generateHreflangLinks("/tool/menu"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return <MenuAssistantPage lang={lang} />;
}
