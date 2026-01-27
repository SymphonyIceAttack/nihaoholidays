import type { Metadata } from "next";
import { ChongyangBlessingsPage } from "@/components/tool/chongyang-blessings";
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
    title: "Chongyang Festival Blessings - NihaoHolidays",
    description:
      "Traditional Double Ninth Festival greetings and blessings for honoring elders.",
    ogTitle: "Chongyang Festival Blessings - NihaoHolidays",
    ogDescription:
      "Traditional Double Ninth Festival greetings and blessings for honoring elders.",
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
      url: `${siteConfig.siteUrl}/${lang}/tool/chongyang-blessings`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/tool/chongyang-blessings`,
      languages: generateHreflangLinks("/tool/chongyang-blessings"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ChongyangBlessingsToolPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return <ChongyangBlessingsPage lang={lang} />;
}
