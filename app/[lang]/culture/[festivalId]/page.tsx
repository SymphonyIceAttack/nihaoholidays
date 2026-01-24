import type { Metadata } from "next";
import { CultureDetailServer } from "@/components/culture/culture-detail-server";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { siteConfig } from "@/lib/config";
import { getAllFestivalIds } from "@/lib/festivals";
import { getCultureBreadcrumb } from "@/lib/structured-data";
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
    title: "Cultural Overview - NihaoHolidays",
    description:
      "Deep dive into Chinese festival history, cultural significance, origins, and traditions.",
    ogTitle: "Cultural Overview - NihaoHolidays",
    ogDescription:
      "Deep dive into Chinese festival history, cultural significance, origins, and traditions.",
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
      url: `${siteConfig.siteUrl}/${lang}/culture/${festivalId}`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/culture/${festivalId}`,
      languages: generateHreflangLinks(`/culture/${festivalId}`),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CulturePage({
  params,
}: {
  params: Promise<{ lang: LanguageType; festivalId: string }>;
}) {
  const { lang, festivalId } = await params;
  return (
    <>
      <BreadcrumbStructuredData
        items={getCultureBreadcrumb(lang)}
        lang={lang}
      />
      <CultureDetailServer lang={lang} festivalId={festivalId} />
    </>
  );
}
