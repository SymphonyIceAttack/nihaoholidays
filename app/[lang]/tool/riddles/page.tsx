import { ArrowLeft } from "lucide-react";
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
    title: "Lantern Riddles Game - NihaoHolidays",
    description: "Test your knowledge with traditional Chinese lantern riddles",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/riddles`,
      languages: generateHreflangLinks("/tool/riddles"),
    },
  };
}

export default async function RiddlesPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  const riddles = [
    {
      riddle: "白胖胖，一身糖，锅里翻，甜又香",
      answer: "汤圆",
      hint: "Something sweet and round eaten during Lantern Festival",
      category: "Food",
    },
    {
      riddle: "红红灯笼挂门头，团圆之夜最风流",
      answer: "元宵",
      hint: "The festival when this is celebrated",
      category: "Festival",
    },
    {
      riddle: "扁扁身子像元宝，过年家家包",
      answer: "饺子",
      hint: "Dumplings shaped like ancient gold ingots",
      category: "Food",
    },
    {
      riddle: "圆圆脸儿像月亮，甜甜蜜蜜里面藏",
      answer: "月饼",
      hint: "Eaten during Mid-Autumn Festival under the moon",
      category: "Food",
    },
    {
      riddle: "三角粽，竹叶包，端午节里味道好",
      answer: "粽子",
      hint: "Rice dumplings wrapped in leaves",
      category: "Food",
    },
    {
      riddle: "红红的外表甜又圆，中秋佳节人人爱",
      answer: "月饼",
      hint: "Round pastry with lotus seed paste",
      category: "Food",
    },
    {
      riddle: "白白胖胖水里游，过年吃它年年有",
      answer: "饺子",
      hint: "Must eat during Chinese New Year",
      category: "Food",
    },
    {
      riddle: "天上一轮月，地上万人看",
      answer: "月亮",
      hint: "What do we admire during Mid-Autumn Festival?",
      category: "Nature",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/lantern`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Lantern Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🏮</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Lantern Riddles Game
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Lantern riddles (灯谜) are a traditional game during the Lantern
              Festival. Try to solve these classic Chinese riddles!
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4">How to Play</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                <span className="text-3xl mb-2 block">📖</span>
                <h3 className="font-medium mb-1">Read the Riddle</h3>
                <p className="text-sm text-muted-foreground">
                  Read the Chinese riddle (you can use the hint!)
                </p>
              </div>
              <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                <span className="text-3xl mb-2 block">🤔</span>
                <h3 className="font-medium mb-1">Think</h3>
                <p className="text-sm text-muted-foreground">
                  Consider the hint and guess the answer
                </p>
              </div>
              <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                <span className="text-3xl mb-2 block">🎉</span>
                <h3 className="font-medium mb-1">Check Answer</h3>
                <p className="text-sm text-muted-foreground">
                  Click to reveal if you&apos;re correct!
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {riddles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border-l-4 border-amber-400"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 mb-2 inline-block">
                      {item.category}
                    </span>
                    <p className="text-xl font-medium text-foreground mb-4">
                      {item.riddle}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Hint: {item.hint}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <button
                      type="button"
                      className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-2xl hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
                      aria-label="Show answer"
                    >
                      👁️
                    </button>
                    <p className="text-xs text-muted-foreground mt-1">Reveal</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center p-6 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">Try More Riddles!</h2>
            <p className="text-muted-foreground">
              Lantern riddles are a fun way to learn Chinese characters and
              culture. Try creating your own riddles to share with friends
              during the Lantern Festival!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
