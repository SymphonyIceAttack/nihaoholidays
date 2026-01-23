import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";
import { BlessingGrid } from "../shared/blessing-grid";

const chongyangBlessings = [
  {
    chinese: "重阳节快乐",
    pinyin: "Chóng yáng jié kuài lè",
    english: "Happy Double Ninth Festival",
    usage: "General greeting for the festival",
  },
  {
    chinese: "登高望远",
    pinyin: "Dēng gāo wàng yuǎn",
    english: "Climb high and see far",
    usage: "Describing the mountain climbing tradition",
  },
  {
    chinese: "福如东海",
    pinyin: "Fú rú dōng hǎi",
    english: "May your blessings be as vast as the East Sea",
    usage: "Elder blessing for longevity",
  },
  {
    chinese: "寿比南山",
    pinyin: "Shòu bǐ nán shān",
    english: "May your life be as long as the Southern Mountain",
    usage: "Longevity blessing for elders",
  },
  {
    chinese: "敬老爱老",
    pinyin: "Jìng lǎo ài lǎo",
    english: "Respect and love the elderly",
    usage: "Core value of Double Ninth Festival",
  },
  {
    chinese: "秋高气爽",
    pinyin: "Qiū gāo qì shuǎng",
    english: "Clear autumn sky and refreshing air",
    usage: "Describing pleasant autumn weather",
  },
  {
    chinese: "延年益寿",
    pinyin: "Yán nián yì shòu",
    english: "Prolong life and increase longevity",
    usage: "Longevity wish for elders",
  },
  {
    chinese: "康健安宁",
    pinyin: "Kāng jiàn ān níng",
    english: "Health and peace",
    usage: "Wellness blessing",
  },
  {
    chinese: "平安喜乐",
    pinyin: "Píng ān xǐ lè",
    english: "Peace and joy",
    usage: "General blessing",
  },
  {
    chinese: "步步高升",
    pinyin: "Bù bù gāo shēng",
    english: "Progress step by step",
    usage: "Success and advancement wish",
  },
];

const chongyangInfo = {
  traditions: [
    "登高 (Dēng gāo) - Climbing mountains",
    "赏菊 (Shǎng jú) - Appreciating chrysanthemums",
    "饮菊花酒 (Yǐn jú huā jiǔ) - Drinking chrysanthemum wine",
    "插茱萸 (Chā zhū yú) - Wearing dogwood",
    "吃重阳糕 (Chī chóng yáng gāo) - Eating double ninth cake",
  ],
  meanings: [
    "The number nine (九) sounds like 'long' in Chinese",
    "Double ninth represents longevity",
    "Autumn chrysanthemums symbolize perseverance",
    "Mountain climbing takes advantage of the heights",
  ],
};

const amberColorClass = {
  text: "text-amber-600",
  bg: "bg-white/60",
  border: "border-amber-200",
  darkText: "text-amber-400",
  darkBg: "bg-zinc-800/60",
};

export function ChongyangBlessingsPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🌼</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Chongyang Festival Blessings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional Double Ninth Festival greetings for honoring elders.
              Click to hear pronunciation.
            </p>
          </div>

          <BlessingGrid
            blessings={chongyangBlessings}
            colorClass={amberColorClass}
          />

          <div className="mt-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-xl">👴</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Respect for the Elderly
                </h3>
                <p className="text-sm text-muted-foreground">
                  Double Ninth Festival is also China&apos;s Respect for the
                  Aged Day
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Double Ninth Festival (重阳节) falls on the 9th day of the 9th
                lunar month. In Chinese culture, the number nine represents
                longevity, making this the perfect day to honor elders.
              </p>
              <p>
                Since 1989, it has also been designated as &quot;China&apos;s
                Respect for the Aged Day&quot; (中国老年节), emphasizing the
                importance of caring for and respecting elderly family members.
              </p>
              <p>
                Take this opportunity to express love and gratitude to the
                elders in your life. A simple greeting can mean so much to those
                who came before us.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">
                Traditional Activities
              </h3>
              <ul className="space-y-2">
                {chongyangInfo.traditions.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">
                Cultural Significance
              </h3>
              <ul className="space-y-2">
                {chongyangInfo.meanings.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/chrysanthemum-tea`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Explore Chrysanthemum Tea
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
