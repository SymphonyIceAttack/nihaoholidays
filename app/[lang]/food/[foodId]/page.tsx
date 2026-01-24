import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FoodDetailContent } from "@/components/food";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { siteConfig } from "@/lib/config";
import { foodDataList } from "@/lib/food";
import { getFoodDetailBreadcrumb } from "@/lib/structured-data";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

export function generateStaticParams() {
  return supportedLocales.flatMap((lang) =>
    foodDataList.map((food) => ({
      lang,
      foodId: food.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageType; foodId: string }>;
}): Promise<Metadata> {
  const { lang, foodId } = await params;
  const food = foodDataList.find((f) => f.id === foodId);

  if (!food) {
    return {
      title: "Food Not Found - NihaoHolidays",
    };
  }

  return {
    title: `${food.name} (${food.english}) - ${food.festival} - NihaoHolidays`,
    description: food.description,
    openGraph: {
      type: "website",
      locale: `${lang}_${lang.toUpperCase()}`,
      title: `${food.name} (${food.english}) - ${food.festival}`,
      description: food.description,
      siteName: siteConfig.siteName,
      url: `${siteConfig.siteUrl}/${lang}/food/${foodId}`,
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
      title: `${food.name} (${food.english}) - ${food.festival}`,
      description: food.description,
      images: [`${siteConfig.siteUrl}/base-logo.webp`],
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/food/${foodId}`,
      languages: generateHreflangLinks(`/food/${foodId}`),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FoodDetailPage({
  params,
}: {
  params: Promise<{ lang: LanguageType; foodId: string }>;
}) {
  const { lang, foodId } = await params;
  const food = foodDataList.find((f) => f.id === foodId);

  if (!food) {
    notFound();
  }

  return (
    <>
      <BreadcrumbStructuredData
        items={getFoodDetailBreadcrumb(lang, foodId, food.name)}
        lang={lang}
      />
      <FoodDetailContent food={food} lang={lang} />
    </>
  );
}
