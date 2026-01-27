import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { AboutPageStructuredData } from "@/components/structured-data/about-page";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { ogImageConfig, twitterImageConfig } from "@/lib/og-config";
import { siteConfig } from "@/lib/config";
import { getAboutBreadcrumb } from "@/lib/structured-data";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

const pageMetadata: Record<
  LanguageType,
  { title: string; description: string }
> = {
  en: {
    title: "About Us - NihaoHolidays",
    description:
      "Learn about our mission to help non-Chinese speakers understand and celebrate Chinese festivals with confidence.",
  },
};

export function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const langData = pageMetadata[lang] || pageMetadata.en;

  return {
    title: langData.title,
    description: langData.description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/about`,
      languages: generateHreflangLinks("/about"),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: `${lang}_${lang.toUpperCase()}`,
      title: langData.title,
      description: langData.description,
      siteName: siteConfig.siteName,
      url: `${siteConfig.siteUrl}/${lang}/about`,
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
      title: langData.title,
      description: langData.description,
      images: [
        {
          url: twitterImageConfig.url,
          width: twitterImageConfig.width,
          height: twitterImageConfig.height,
          alt: twitterImageConfig.alt,
        },
      ],
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  const langData = pageMetadata[lang] || pageMetadata.en;
  return (
    <>
      <AboutPageStructuredData
        url={`${siteConfig.siteUrl}/${lang}/about`}
        title={langData.title}
        description={langData.description}
        lang={lang}
      />
      <BreadcrumbStructuredData items={getAboutBreadcrumb(lang)} lang={lang} />
      <AboutContent lang={lang} />
    </>
  );
}
