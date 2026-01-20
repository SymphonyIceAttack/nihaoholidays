import type { Metadata } from "next";
import { QuizContent } from "@/components/quiz/quiz-content";
import { siteConfig } from "@/lib/config";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

const festivalIds = [
  "spring",
  "lantern",
  "mid_autumn",
  "dragon_boat",
  "qingming",
  "qixi",
];

export function generateStaticParams() {
  return supportedLocales.flatMap((lang) =>
    festivalIds.map((festivalId) => ({ lang, festivalId })),
  );
}

const metadataConfig: Record<
  LanguageType,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  en: {
    title: "Interactive Quiz - NihaoHolidays",
    description:
      "Test your knowledge about Chinese festivals with interactive quizzes.",
    ogTitle: "Interactive Quiz - NihaoHolidays",
    ogDescription:
      "Test your knowledge about Chinese festivals with interactive quizzes.",
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
  return <QuizContent lang={lang} festivalId={festivalId} />;
}
