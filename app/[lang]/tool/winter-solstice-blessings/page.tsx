import type { Metadata } from "next";
import { WinterSolsticeBlessingsPage } from "@/components/tool";
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
    title: "Winter Solstice Blessings - NihaoHolidays",
    description:
      "Traditional Winter Solstice greetings and blessings for the longest night of the year.",
    ogTitle: "Winter Solstice Blessings - NihaoHolidays",
    ogDescription:
      "Traditional Winter Solstice greetings and blessings for the longest night of the year.",
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
      url: `${siteConfig.siteUrl}/${lang}/tool/winter-solstice-blessings`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/tool/winter-solstice-blessings`,
      languages: generateHreflangLinks("/tool/winter-solstice-blessings"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function WinterSolsticeBlessingsToolPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return <WinterSolsticeBlessingsPage lang={lang} />;
}
