import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";
import { BlessingGrid } from "../shared/blessing-grid";

const labaBlessings = [
  {
    chinese: "腊八节快乐",
    pinyin: "Là bā jié kuài lè",
    english: "Happy Laba Festival",
    usage: "General greeting for the festival",
  },
  {
    chinese: "喝了腊八粥",
    pinyin: "Hē le là bā zhōu",
    english: "Drank laba porridge",
    usage: "Referring to eating laba porridge",
  },
  {
    chinese: "年味渐浓",
    pinyin: "Nián wèi jiàn nóng",
    english: "The New Year atmosphere is thickening",
    usage: "Describing the approach of Spring Festival",
  },
  {
    chinese: "喝了腊八粥，明年好兆头",
    pinyin: "Hē le là bā zhōu, míng nián hào zhào tou",
    english: "Eat laba porridge, good omens for the new year",
    usage: "Traditional saying about laba porridge",
  },
  {
    chinese: "腊八祭灶神",
    pinyin: "Là bā jì zào shén",
    english: "Laba offerings to the Kitchen God",
    usage: "Traditional worship practice",
  },
  {
    chinese: "过了腊八就是年",
    pinyin: "Guò le là bā jiù shì nián",
    english: "After Laba comes the New Year",
    usage: "Marking the countdown to Spring Festival",
  },
  {
    chinese: "腊八蒜，醉新年",
    pinyin: "Là bā suàn, zuì xīn nián",
    english: "Laba garlic, intoxicated into the new year",
    usage: "Traditional garlic preparation for New Year",
  },
  {
    chinese: "五谷丰登",
    pinyin: "Wǔ gǔ fēng dēng",
    english: "Abundant harvest of all crops",
    usage: "Prosperity blessing for the new year",
  },
  {
    chinese: "吉庆有余",
    pinyin: "Jí qìng yǒu yú",
    english: "Good fortune and prosperity",
    usage: "Blessing for abundance",
  },
  {
    chinese: "迎春接福",
    pinyin: "Yíng chūn jiē fú",
    english: "Welcome spring and receive blessings",
    usage: "Spring Festival preparation blessing",
  },
];

const labaExpressions = [
  {
    title: "About the Porridge",
    items: [
      "八宝粥 (Bā bǎo zhōu) - Eight Treasure Porridge",
      "腊八粥的主要原料包括大米、红豆、桂圆、莲子等",
      "The porridge symbolizes abundance and good fortune",
    ],
  },
  {
    title: "Traditional Activities",
    items: [
      "祭祀祖先和神灵 - Offering sacrifices to ancestors and gods",
      "泡腊八蒜 - Soaking garlic in vinegar",
      "喝腊八粥 - Eating laba porridge",
      "准备年货 - Preparing New Year supplies",
    ],
  },
];

const orangeColorClass = {
  text: "text-orange-600",
  bg: "bg-white/60",
  border: "border-orange-200",
  darkText: "text-orange-400",
  darkBg: "bg-zinc-800/60",
};

export function LabaBlessingsPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥣</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Laba Festival Blessings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional Laba Festival greetings and sayings. The beginning of
              Spring Festival preparations.
            </p>
          </div>

          <BlessingGrid
            blessings={labaBlessings}
            colorClass={orangeColorClass}
          />

          <div className="mt-8 bg-gradient-to-r from-orange-100/80 to-amber-100/80 dark:from-orange-900/30 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:orange-900/30 flex items-center justify-center">
                <span className="text-xl">🏮</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Beginning of Spring Festival
                </h3>
                <p className="text-sm text-muted-foreground">
                  Laba Festival marks the start of the New Year celebration
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Laba Festival (腊八节) is celebrated on the 8th day of the 12th
                lunar month. It marks the beginning of the Spring Festival
                celebrations and has been observed for over 1,500 years.
              </p>
              <p>
                The main tradition is eating Laba porridge (腊八粥), made with
                eight or more ingredients including rice, red beans, lotus
                seeds, dried longan, walnuts, peanuts, dates, and goji berries.
              </p>
              <p>
                Families also prepare garlic in vinegar during this time, known
                as &quot;Laba garlic&quot; (腊八蒜), which turns green and is
                eaten with dumplings during Spring Festival.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {labaExpressions.map((section, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-orange-200 dark:border-orange-800 bg-white/60 dark:bg-zinc-800/60"
              >
                <h3 className="font-semibold text-foreground mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-orange-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/laba-porridge`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Learn to Make Laba Porridge
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
