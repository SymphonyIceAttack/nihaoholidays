import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";
import { BlessingGrid } from "../shared/blessing-grid";

const winterSolsticeBlessings = [
  {
    chinese: "冬至快乐",
    pinyin: "Dōng zhì kuài lè",
    english: "Happy Winter Solstice",
    usage: "General greeting for the festival",
  },
  {
    chinese: "天寒地冻",
    pinyin: "Tiān hán dì dòng",
    english: "Cold weather freezing ground",
    usage: "Describing winter conditions",
  },
  {
    chinese: "数九寒天",
    pinyin: "Shǔ jiǔ hán tiān",
    english: "The nine nine cold days",
    usage: "Referring to the coldest period of winter",
  },
  {
    chinese: "阳气回升",
    pinyin: "Yáng qì huí shēng",
    english: "Yang energy returning",
    usage: "Celebrating the return of longer days",
  },
  {
    chinese: "团团圆圆",
    pinyin: "Tuán yuán tuán yuán",
    english: "Reunion and togetherness",
    usage: "Family gathering blessing",
  },
  {
    chinese: "吃了饺子耳朵不冻",
    pinyin: "Chī le jiǎo zi ěr duo bú dòng",
    english: "Eating dumplings prevents frostbite",
    usage: "Fun saying about eating dumplings",
  },
  {
    chinese: "长夜将至，春归有期",
    pinyin: "Cháng yè jiāng zhì, chūn guī yǒu qī",
    english: "The longest night comes, spring will return",
    usage: "Poetic description of Winter Solstice",
  },
  {
    chinese: "一阳复始",
    pinyin: "Yī yáng fù shǐ",
    english: "Yang energy begins anew",
    usage: "Traditional solstice saying",
  },
  {
    chinese: "万象更新",
    pinyin: "Wàn xiàng gēng xīn",
    english: "All things renew",
    usage: "New beginnings blessing",
  },
  {
    chinese: "福寿安康",
    pinyin: "Fú shòu ān kāng",
    english: "Blessings, longevity and health",
    usage: "Complete wellness wish",
  },
];

const winterSolsticeInfo = {
  traditions: [
    "北方吃饺子 (Běi fāng chī jiǎo zi) - Northerners eat dumplings",
    "南方吃汤圆 (Nán fāng chī tāng yuán) - Southerners eat tangyuan",
    "祭祖 (Jì zǔ) - Offering sacrifices to ancestors",
    "数九 (Shǔ jiǔ) - Counting the nine nine-day periods",
    "团圆饭 (Tuán yuán fàn) - Reunion dinner",
  ],
  meanings: [
    "Dumplings resemble ancient gold ingots for wealth",
    "Tangyuan&apos;s round shape symbolizes family reunion",
    "After solstice, days get longer again",
    "The festival dates back over 2,000 years",
    "Yang energy begins to grow after the longest night",
  ],
};

const cyanColorClass = {
  text: "text-cyan-600",
  bg: "bg-white/60",
  border: "border-cyan-200",
  darkText: "text-cyan-400",
  darkBg: "bg-zinc-800/60",
};

export function WinterSolsticeBlessingsPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">❄️</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Winter Solstice Blessings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional Dongzhi Festival greetings. The longest night brings
              the return of yang energy.
            </p>
          </div>

          <BlessingGrid
            blessings={winterSolsticeBlessings}
            colorClass={cyanColorClass}
          />

          <div className="mt-8 bg-gradient-to-r from-cyan-100/80 to-blue-100/80 dark:from-cyan-900/30 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                <span className="text-xl">🥟</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  North vs South Traditions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Northerners eat dumplings, southerners eat tangyuan
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Winter Solstice (冬至, Dongzhi) is one of the most important
                traditional Chinese festivals, celebrated since the Han Dynasty
                over 2,000 years ago. It marks the shortest day and longest
                night of the year in the Northern Hemisphere.
              </p>
              <p>
                The saying goes: &quot;冬至吃饺子，夏至吃汤圆&quot; (Eat
                dumplings at Winter Solstice, eat tangyuan at Summer Solstice).
                This beautiful North-South culinary divide reflects China&apos;s
                diverse cultural traditions.
              </p>
              <p>
                After Winter Solstice, yang energy begins to grow, symbolizing
                the return of longer days and the promise of spring&apos;s
                eventual arrival.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">
                Regional Traditions
              </h3>
              <ul className="space-y-2">
                {winterSolsticeInfo.traditions.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">
                Cultural Significance
              </h3>
              <ul className="space-y-2">
                {winterSolsticeInfo.meanings.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/dumpling-tangyuan`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Explore Dumplings vs Tangyuan
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
