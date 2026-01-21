import type { Metadata } from "next";
import { DumplingTangyuanGuidePage } from "@/components/tool";
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
    title: "Dumpling vs Tangyuan Guide - NihaoHolidays",
    description:
      "Winter Solstice food traditions: dumplings in the north, tangyuan in the south.",
    ogTitle: "Dumpling vs Tangyuan Guide - NihaoHolidays",
    ogDescription:
      "Winter Solstice food traditions: dumplings in the north, tangyuan in the south.",
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
      url: `${siteConfig.siteUrl}/${lang}/tool/dumpling-tangyuan`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/tool/dumpling-tangyuan`,
      languages: generateHreflangLinks("/tool/dumpling-tangyuan"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DumplingTangyuanToolPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return <DumplingTangyuanGuidePage lang={lang} />;
}
