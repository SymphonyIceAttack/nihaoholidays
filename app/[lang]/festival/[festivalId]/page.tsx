import type { Metadata } from "next";
import { FestivalDetailContent } from "@/components/festival/festival-detail-content";
import { siteConfig } from "@/lib/config";
import { getAllFestivalIds } from "@/lib/festivals";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

export function generateStaticParams() {
  return supportedLocales.flatMap((lang) =>
    getAllFestivalIds().map((festivalId) => ({ lang, festivalId })),
  );
}

const metadataConfig: Record<
  LanguageType,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  en: {
    title: "Festival Guide - NihaoHolidays",
    description:
      "Practical guide for Chinese festivals: essential phrases, holiday foods, etiquette, and gift suggestions.",
    ogTitle: "Festival Guide - NihaoHolidays",
    ogDescription:
      "Practical guide for Chinese festivals: essential phrases, holiday foods, etiquette, and gift suggestions.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageType; festivalId: string }>;
}): Promise<Metadata> {
  const { lang, festivalId } = await params;
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
      url: `${siteConfig.siteUrl}/${lang}/festival/${festivalId}`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/festival/${festivalId}`,
      languages: generateHreflangLinks(`/festival/${festivalId}`),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FestivalPage({
  params,
}: {
  params: Promise<{ lang: LanguageType; festivalId: string }>;
}) {
  const { lang, festivalId } = await params;
  return <FestivalDetailContent lang={lang} festivalId={festivalId} />;
}
