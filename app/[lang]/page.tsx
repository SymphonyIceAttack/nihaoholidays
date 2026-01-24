import type { Metadata } from "next";
import { HomePageContent } from "@/components/home";
import { WebPageStructuredData } from "@/components/structured-data/web-page";
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
    title: "NihaoHolidays - Learn Chinese Holiday Traditions",
    description:
      "Master Chinese holiday customs, greetings, and etiquette. Learn what to say, do, and how to behave during Chinese festivals.",
    ogTitle: "NihaoHolidays - Learn Chinese Holiday Traditions",
    ogDescription:
      "Master Chinese holiday customs, greetings, and etiquette. Learn what to say, do, and how to behave during Chinese festivals.",
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
      url: `${siteConfig.siteUrl}/${lang}`,
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
      canonical: `${siteConfig.siteUrl}/${lang}`,
      languages: generateHreflangLinks(""),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  const langData = metadataConfig[lang] || metadataConfig.en;
  return (
    <>
      <WebPageStructuredData
        url={`${siteConfig.siteUrl}/${lang}`}
        title={langData.title}
        description={langData.description}
        lang={lang}
      />
      <HomePageContent lang={lang} />
    </>
  );
}
