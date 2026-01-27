import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { ContactPageStructuredData } from "@/components/structured-data/contact-page";
import { ogImageConfig, twitterImageConfig } from "@/lib/og-config";
import { siteConfig } from "@/lib/config";
import { getContactBreadcrumb } from "@/lib/structured-data";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

const pageMetadata: Record<
  LanguageType,
  { title: string; description: string }
> = {
  en: {
    title: "Contact Us - NihaoHolidays",
    description:
      "Get in touch with the NihaoHolidays team. We'd love to hear from you!",
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
      canonical: `${siteConfig.siteUrl}/${lang}/contact`,
      languages: generateHreflangLinks("/contact"),
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
      url: `${siteConfig.siteUrl}/${lang}/contact`,
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  const langData = pageMetadata[lang] || pageMetadata.en;
  return (
    <>
      <ContactPageStructuredData
        url={`${siteConfig.siteUrl}/${lang}/contact`}
        title={langData.title}
        description={langData.description}
        lang={lang}
        email={siteConfig.contactEmail}
      />
      <BreadcrumbStructuredData
        items={getContactBreadcrumb(lang)}
        lang={lang}
      />
      <ContactContent lang={lang} />
    </>
  );
}
