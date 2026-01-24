import type { Metadata } from "next";
import { DisclaimerContent } from "@/components/disclaimer/disclaimer-content";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { siteConfig } from "@/lib/config";
import { getDisclaimerBreadcrumb } from "@/lib/structured-data";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

const pageMetadata: Record<
  LanguageType,
  { title: string; description: string }
> = {
  en: {
    title: "Disclaimer - NihaoHolidays",
    description:
      "Important disclaimers regarding the use of NihaoHolidays content and services.",
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
      canonical: `${siteConfig.siteUrl}/${lang}/disclaimer`,
      languages: generateHreflangLinks("/disclaimer"),
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
      url: `${siteConfig.siteUrl}/${lang}/disclaimer`,
    },
    twitter: {
      card: "summary_large_image",
      title: langData.title,
      description: langData.description,
    },
  };
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  return (
    <>
      <BreadcrumbStructuredData
        items={getDisclaimerBreadcrumb(lang)}
        lang={lang}
      />
      <DisclaimerContent lang={lang} />
    </>
  );
}
