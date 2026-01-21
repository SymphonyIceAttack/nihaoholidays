import type { Metadata } from "next";
import { LearnPageContent } from "@/components/learn/learn-page";
import { siteConfig } from "@/lib/config";
import { type LanguageType, supportedLocales } from "@/lib/translations/config";
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
    title: "Start Learning - NihaoHolidays",
    description:
      "Choose your learning path and start exploring Chinese holiday traditions. Personalized for tourists, students, and workers.",
    ogTitle: "Start Learning - NihaoHolidays",
    ogDescription:
      "Choose your learning path and start exploring Chinese holiday traditions. Personalized for tourists, students, and workers.",
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
      url: `${siteConfig.siteUrl}/${lang}/learn`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/learn`,
      languages: generateHreflangLinks("/learn"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return <LearnPageContent lang={lang} />;
}
