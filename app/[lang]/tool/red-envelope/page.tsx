import type { Metadata } from "next";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { RedEnvelopeGuidePage } from "@/components/tool";
import { siteConfig } from "@/lib/config";
import { getToolDetailBreadcrumb } from "@/lib/structured-data";
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
    title: "Red Envelope Guide - NihaoHolidays",
    description:
      "Learn about red envelope (hongbao) amounts, etiquette, and traditions for Chinese New Year.",
    ogTitle: "Red Envelope Guide - NihaoHolidays",
    ogDescription:
      "Learn about red envelope (hongbao) amounts, etiquette, and traditions for Chinese New Year.",
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
      url: `${siteConfig.siteUrl}/${lang}/tool/red-envelope`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/tool/red-envelope`,
      languages: generateHreflangLinks("/tool/red-envelope"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RedEnvelopePage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return (
    <>
      <BreadcrumbStructuredData
        items={getToolDetailBreadcrumb(
          lang,
          "red-envelope",
          "Red Envelope Guide",
        )}
        lang={lang}
      />
      <RedEnvelopeGuidePage lang={lang} />
    </>
  );
}
