import type { Metadata } from "next";
import { QuizContent } from "@/components/quiz/quiz-content";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { siteConfig } from "@/lib/config";
import { getAllFestivalIds } from "@/lib/festivals";
import { getQuizBreadcrumb } from "@/lib/structured-data";
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
    title: "Quiz - NihaoHolidays",
    description:
      "Test what you know about Chinese festivals with quick quizzes.",
    ogTitle: "Quiz - NihaoHolidays",
    ogDescription:
      "Test what you know about Chinese festivals with quick quizzes.",
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
      url: `${siteConfig.siteUrl}/${lang}/quiz/${festivalId}`,
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
      canonical: `${siteConfig.siteUrl}/${lang}/quiz/${festivalId}`,
      languages: generateHreflangLinks(`/quiz/${festivalId}`),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ lang: LanguageType; festivalId: string }>;
}) {
  const { lang, festivalId } = await params;

  return (
    <>
      <BreadcrumbStructuredData
        items={getQuizBreadcrumb(lang, festivalId, festivalId)}
        lang={lang}
      />
      <QuizContent lang={lang} festivalId={festivalId} />
    </>
  );
}
