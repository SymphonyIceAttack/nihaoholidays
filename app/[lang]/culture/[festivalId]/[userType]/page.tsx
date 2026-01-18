import type { Metadata } from "next";
import { CultureDetailContent } from "@/components/culture/culture-detail-content";
import { siteConfig } from "@/lib/config";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";

const festivalIds = ["spring", "lantern", "mid_autumn", "dragon_boat", "qingming", "qixi"];
const userTypes = ["tourist", "student", "worker"];

export function generateStaticParams() {
  return supportedLocales.flatMap((lang) =>
    festivalIds.flatMap((festivalId) =>
      userTypes.map((userType) => ({ lang, festivalId, userType }))
    )
  );
}

const metadataConfig: Record<
  LanguageType,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  en: {
    title: "Cultural Overview - NihaoHolidays",
    description:
      "Learn about the history, significance, and cultural meaning of Chinese festivals.",
    ogTitle: "Cultural Overview - NihaoHolidays",
    ogDescription:
      "Learn about the history, significance, and cultural meaning of Chinese festivals.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageType; festivalId: string; userType: string }>;
}): Promise<Metadata> {
  const { lang, festivalId, userType } = await params;
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
      url: `${siteConfig.siteUrl}/${lang}/culture/${festivalId}/${userType}`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/culture/${festivalId}/${userType}`,
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
  params: Promise<{ lang: LanguageType; festivalId: string; userType: string }>;
}) {
  const { lang, festivalId, userType } = await params;
  return (
    <CultureDetailContent
      lang={lang}
      festivalId={festivalId}
      userType={userType}
    />
  );
}
