import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

const traditions = [
  {
    title: "Visiting Elderly Relatives",
    emoji: "👴👵",
    description:
      "Spend quality time with grandparents and elderly family members",
    details: [
      "Prepare special meals for them",
      "Listen to their stories and advice",
      "Help with any tasks they need",
      "Express gratitude for their love",
    ],
  },
  {
    title: "Climbing Mountains Together",
    emoji: "⛰️",
    description: "Ascend heights to symbolize wishes for longevity",
    details: [
      "Choose a suitable mountain trail",
      "Help elderly family members if needed",
      "Enjoy the autumn scenery together",
      "Take photos as memories",
    ],
  },
  {
    title: "Appreciating Chrysanthemums",
    emoji: "🌼",
    description: "Chrysanthemums symbolize perseverance and long life",
    details: [
      "Visit a chrysanthemum exhibition",
      "Gift chrys bouquets to elders",
      "Learn about different varieties",
      "Drink chrysanthemum tea together",
    ],
  },
  {
    title: "Eating Double Ninth Cake",
    emoji: "🍰",
    description: "Traditional cake symbolizing prosperity and longevity",
    details: [
      "Buy or make double ninth cake",
      "Share with family members",
      "Wish elders health and longevity",
      "Continue this tradition yearly",
    ],
  },
];

const elderlyWishes = [
  { wish: "身体健康", pinyin: "Jiàn kāng", meaning: "Good health" },
  {
    wish: "福如东海",
    pinyin: "Fú rú dōng hǎi",
    meaning: "Blessings like the East Sea",
  },
  {
    wish: "寿比南山",
    pinyin: "Shòu bǐ nán shān",
    meaning: "Longevity like Southern Mountain",
  },
  { wish: "笑口常开", pinyin: "Xiào kǒu cháng kāi", meaning: "Always smiling" },
  { wish: "平安喜乐", pinyin: "Píng ān xǐ lè", meaning: "Peace and joy" },
];

export function ElderRespectTraditionsPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">👴👵</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Elder Respect Traditions
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ways to honor and celebrate elderly family members on Double Ninth
              Festival, also known as Respect for the Aged Day.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-xl">❤️</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Why Respect Elders?
                </h3>
                <p className="text-sm text-muted-foreground">
                  A core value in Chinese culture
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Respecting elders (敬老, Jìng lǎo) is one of the most important
                virtues in Chinese culture. The elderly are seen as sources of
                wisdom, experience, and family heritage.
              </p>
              <p>
                Double Ninth Festival (重阳节) has been designated as
                China&apos;s Respect for the Aged Day, making it the perfect
                occasion to express love and gratitude to elderly family
                members.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {traditions.map((tradition, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{tradition.emoji}</span>
                  <h2 className="text-xl font-semibold">{tradition.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {tradition.description}
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  {tradition.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-amber-500">✓</span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Wishes for Elders
            </h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {elderlyWishes.map((wish, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-center"
                >
                  <p className="text-2xl font-medium text-foreground mb-1">
                    {wish.wish}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    {wish.pinyin}
                  </p>
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    {wish.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/chongyang-blessings`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Chongyang Blessings
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tools
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground"></div>
      </footer>
    </div>
  );
}
