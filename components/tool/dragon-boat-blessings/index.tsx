import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";
import { BlessingGrid } from "../shared/blessing-grid";

const dragonBoatBlessings = [
  {
    chinese: "端午节安康",
    pinyin: "Duān wǔ jié ān kāng",
    english: "Happy Dragon Boat Festival",
    usage: "General greeting for the festival",
  },
  {
    chinese: "龙舟竞渡",
    pinyin: "Lóng zhōu jì dù",
    english: "Dragon boat racing",
    usage: "Describing the exciting boat races",
  },
  {
    chinese: "粽叶飘香",
    pinyin: "Zòng yè piāo xiāng",
    english: "Fragrant zongzi leaves",
    usage: "Describing the aroma of zongzi",
  },
  {
    chinese: "百舸争流",
    pinyin: "Bǎi gǔ zhēng liú",
    english: "Hundred boats racing",
    usage: "Vibrant scene of dragon boat races",
  },
  {
    chinese: "奋勇争先",
    pinyin: "Fèn yǒng zhēng xiān",
    english: "Courageously striving to be first",
    usage: "Spirit of competition and teamwork",
  },
  {
    chinese: "平安健康",
    pinyin: "Píng jiàn jiàn kāng",
    english: "Peace and health",
    usage: "Wellness blessing",
  },
  {
    chinese: "五毒不侵",
    pinyin: "Wǔ dú bù qīn",
    english: "Protected from all evils",
    usage: "Traditional protection blessing",
  },
  {
    chinese: "驱邪避疫",
    pinyin: "Qū xié bì yì",
    english: "Ward off evil and disease",
    usage: "Health and protection wish",
  },
];

const dragonBoatInfo = {
  traditions: [
    "赛龙舟 (Sài lóng zhōu) - Dragon boat racing",
    "吃粽子 (Chī zòng zi) - Eating zongzi",
    "挂艾草 (Guà ài cǎo) - Hanging mugwort",
    "佩香囊 (Pèi xiāng náng) - Wearing perfume pouches",
    "饮雄黄酒 (Yǐn xióng huáng jiǔ) - Drinking realgar wine",
  ],
  meanings: [
    "Commemorates poet Qu Yuan from 278 BC",
    "Dragon boats honor the search for Qu Yuan's body",
    "Zongzi was thrown into the river to feed fish",
    "Mugwort and calamus ward off evil spirits",
    "The festival marks the summer solstice period",
  ],
};

const tealColorClass = {
  text: "text-teal-600",
  bg: "bg-white/60",
  border: "border-teal-200",
  darkText: "text-teal-400",
  darkBg: "bg-zinc-800/60",
};

export function DragonBoatBlessingsPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🐉</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Dragon Boat Festival Blessings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional greetings for the Dragon Boat Festival. Click to hear
              pronunciation.
            </p>
          </div>

          <BlessingGrid
            blessings={dragonBoatBlessings}
            colorClass={tealColorClass}
          />

          <div className="mt-8 bg-gradient-to-r from-teal-100/80 to-cyan-100/80 dark:from-teal-900/30 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <span className="text-xl">📜</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  The Legend of Qu Yuan
                </h3>
                <p className="text-sm text-muted-foreground">
                  A poet who loved his country until the end
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Dragon Boat Festival (端午节) commemorates the ancient poet Qu
                Yuan, who lived during the Warring States period. When his
                beloved kingdom of Chu fell to invaders, Qu Yuan drowned himself
                in despair on the 5th day of the 5th lunar month.
              </p>
              <p>
                Legend says local fishermen raced boats to find his body and
                threw zongzi into the water to prevent fish from eating it. This
                is why we celebrate with dragon boat races and eat zongzi today.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-xl border border-teal-200 dark:border-teal-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">
                Traditional Activities
              </h3>
              <ul className="space-y-2">
                {dragonBoatInfo.traditions.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-teal-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-teal-200 dark:border-teal-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">
                Cultural Significance
              </h3>
              <ul className="space-y-2">
                {dragonBoatInfo.meanings.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-teal-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/zongzi`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Explore Zongzi Guide
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
