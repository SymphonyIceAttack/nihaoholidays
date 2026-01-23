import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";
import { BlessingGrid } from "../shared/blessing-grid";

const midAutumnBlessings = [
  {
    chinese: "中秋节快乐",
    pinyin: "Zhōng qiū jié kuài lè",
    english: "Happy Mid-Autumn Festival",
    usage: "General greeting for the festival",
  },
  {
    chinese: "月圆人团圆",
    pinyin: "Yuè yuán rén tuán yuán",
    english: "The moon is round, and people are reunited",
    usage: "Emphasizing family reunion",
  },
  {
    chinese: "花好月圆",
    pinyin: "Huā hǎo yuè yuán",
    english: "Flowers bloom, the moon is full",
    usage: "Wishing for perfect happiness",
  },
  {
    chinese: "阖家团圆",
    pinyin: "Hé jiā tuán yuán",
    english: "The whole family reunited",
    usage: "Family gathering blessing",
  },
  {
    chinese: "千里共婵娟",
    pinyin: "Qiān lǐ gòng chán juān",
    english: "Though miles apart, we share the moon's beauty",
    usage: "For loved ones far away",
  },
  {
    chinese: "举头望明月",
    pinyin: "Jǔ tóu wàng míng yuè",
    english: "Raising my head to view the bright moon",
    usage: "Classic moon-gazing phrase",
  },
  {
    chinese: "低头思故乡",
    pinyin: "Dī tóu sī gù xiāng",
    english: "Lowering my head to think of home",
    usage: "Expressing homesickness",
  },
  {
    chinese: "但愿人长久",
    pinyin: "Dàn yuàn rén cháng jiǔ",
    english: "May people live long and share the moon",
    usage: "Longevity and reunion wish",
  },
  {
    chinese: "千里共明月",
    pinyin: "Qiān lǐ gòng míng yuè",
    english: "Miles apart, under the same moon",
    usage: "Connection across distance",
  },
  {
    chinese: "福满中秋",
    pinyin: "Fú mǎn zhōng qiū",
    english: "Blessings fill the Mid-Autumn",
    usage: "Abundant blessings wish",
  },
];

const mooncakeTypes = [
  {
    name: "Traditional Lotus Seed Paste",
    description: "Classic white lotus seed paste with double egg yolk",
    emoji: "🥮",
  },
  {
    name: "Red Bean",
    description: "Sweet red bean paste, popular in northern China",
    emoji: "🫘",
  },
  {
    name: "Snow Skin",
    description: "Modern soft, chewy skin with various fillings",
    emoji: "🍡",
  },
  {
    name: "Five Kernel",
    description: "Mixed nuts and seeds, traditional crunchy style",
    emoji: "🥜",
  },
];

const pinkColorClass = {
  text: "text-pink-600",
  bg: "bg-white/60",
  border: "border-pink-200",
  darkText: "text-pink-400",
  darkBg: "bg-zinc-800/60",
};

export function MidAutumnBlessingsPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥮</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Mid-Autumn Blessing Templates
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional greetings for the moon viewing festival. Click to hear
              pronunciation.
            </p>
          </div>

          <BlessingGrid
            blessings={midAutumnBlessings}
            colorClass={pinkColorClass}
          />

          <div className="mt-8 bg-gradient-to-r from-pink-100/80 to-rose-100/80 dark:from-pink-900/30 dark:to-rose-900/20 border border-pink-200 dark:border-pink-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <span className="text-xl">🌙</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  The Legend of Chang&apos;e
                </h3>
                <p className="text-sm text-muted-foreground">
                  The moon goddess who lives on the moon
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Mid-Autumn Festival is connected to the beautiful legend of
                Chang&apos;e, the Moon Goddess. According to legend,
                Chang&apos;e accidentally drank the elixir of immortality and
                floated to the moon, where she now lives as the moon goddess.
              </p>
              <p>
                Another legend tells of Houyi, the archer who shot down nine
                suns, and his wife Chang&apos;e. On the full moon night, you can
                sometimes see her shadow on the moon - a figure with a rabbit,
                pounding the elixir of life.
              </p>
              <p>
                Families gather on this night to appreciate the full moon,
                symbolizing reunion and completeness. The round shape of the
                moon and mooncakes represents family unity and harmony.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Mooncake Varieties
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {mooncakeTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl"
                >
                  <span className="text-3xl">{type.emoji}</span>
                  <div>
                    <h3 className="font-medium">{type.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/mooncake`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Explore Mooncake Guide
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
