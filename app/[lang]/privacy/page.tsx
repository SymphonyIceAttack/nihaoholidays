import type { Metadata } from "next";
import { PrivacyContent } from "@/components/privacy/privacy-content";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { siteConfig } from "@/lib/config";
import { getPrivacyBreadcrumb } from "@/lib/structured-data";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

const pageMetadata: Record<
  LanguageType,
  { title: string; description: string }
> = {
  en: {
    title: "Privacy Policy - NihaoHolidays",
    description:
      "Learn how NihaoHolidays collects, uses, and protects your personal information.",
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
      canonical: `${siteConfig.siteUrl}/${lang}/privacy`,
      languages: generateHreflangLinks("/privacy"),
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
      url: `${siteConfig.siteUrl}/${lang}/privacy`,
    },
    twitter: {
      card: "summary_large_image",
      title: langData.title,
      description: langData.description,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return (
    <>
      <BreadcrumbStructuredData
        items={getPrivacyBreadcrumb(lang)}
        lang={lang}
      />
      <PrivacyContent lang={lang} />
    </>
  );
}
