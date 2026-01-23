import { ArrowLeft, PenTool } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

export function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: "Poetry Templates - NihaoHolidays",
    description: "Traditional Chinese poetry templates for festivals and celebrations",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/poetry-templates`,
      languages: generateHreflangLinks("/tool/poetry-templates"),
    },
  };
}

export default async function PoetryTemplatesPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/human-day`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Human Day
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">📜✍️</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Poetry Templates
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional Chinese poetry templates for expressing wishes and
              sentiments.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Spring Festival Blessings</h2>
              <div className="space-y-3">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    新年快乐，万事如意
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Xīnnián kuàilè, wànshì rúyì
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    - Happy New Year, may everything go as you wish
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    财源滚滚，好运连连
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cáiyuán gǔngǔn, hǎoyùn liánlián
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    - Wealth rolls in, good luck comes continuously
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    心想事成，万事如意
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Xīnxiǎng shìchéng, wànshì rúyì
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    - May all your heart&apos;s wishes come true
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Mid-Autumn Festival</h2>
              <div className="space-y-3">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    但愿人长久，千里共婵娟
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Dàn yuàn rén chángjiǔ, qiān lǐ gòng chánjuān
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    - Wishing we may live long, sharing beauty across miles
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    中秋快乐，阖家团圆
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Zhōngqiū kuàilè, hé jiā tuányuán
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    - Happy Mid-Autumn, family reunion
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Birthday Wishes</h2>
              <div className="space-y-3">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    福如东海，寿比南山
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fú rú dōnghǎi, shòu bǐ nánshān
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    - Fortune like the Eastern Sea,寿命 as enduring as
                    Southern Mountain
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    年年有今日，岁岁有今朝
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Nián nián yǒu jīn rì, suì suì yǒu jīn zhāo
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    - Every year this day, every year this moment
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Common Phrases</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="font-medium text-sm">大吉大利</p>
                  <p className="text-xs text-muted-foreground">
                    Great luck and prosperity
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="font-medium text-sm">吉祥如意</p>
                  <p className="text-xs text-muted-foreground">
                    Auspicious and as wished
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="font-medium text-sm">五福临门</p>
                  <p className="text-xs text-muted-foreground">
                    Five blessings arrive
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="font-medium text-sm">招财进宝</p>
                  <p className="text-xs text-muted-foreground">
                    Attract wealth and treasure
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-100/80 to-pink-100/80 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">The Art of Expression</h2>
            <p className="text-muted-foreground">
              Chinese poetry carries wishes in elegant, rhythmic phrases. These
              templates help express heartfelt sentiments for every occasion.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
