import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

const giftIdeas = [
  {
    category: "Traditional Gifts",
    items: [
      { name: "Jade pendant", meaning: "Pure love and commitment", emoji: "🪡" },
      { name: "Silk scarf", meaning: "Softness and care", emoji: "🧣" },
      { name: "Tea set", meaning: "Sharing peaceful moments", emoji: "🍵" },
      { name: "Fan", meaning: "Cool and gentle love", emoji: "🪭" },
    ],
  },
  {
    category: "Romantic Flowers",
    items: [
      { name: "Red roses", meaning: "Deep passionate love", emoji: "🌹" },
      { name: "Peonies", meaning: "Honor and wealth", emoji: "🌺" },
      { name: "Orchids", meaning: "Exotic beauty", emoji: "🌸" },
      { name: "Jasmine", meaning: "Sweet love", emoji: "🌼" },
    ],
  },
  {
    category: "Sweet Treats",
    items: [
      { name: "Mooncakes", meaning: "Reunion and togetherness", emoji: "🥮" },
      { name: "Chocolate", meaning: "Sweet love", emoji: "🍫" },
      { name: "Honey", meaning: "Life of sweetness", emoji: "🍯" },
      { name: "Dried fruits", meaning: "Wishing for sweetness", emoji: "🍇" },
    ],
  },
  {
    category: "Handmade Gifts",
    items: [
      { name: "Love letter", meaning: "Sincere feelings", emoji: "💌" },
      { name: "Couple bracelet", meaning: "Eternal connection", emoji: "📿" },
      { name: "Photo album", meaning: "Cherished memories", emoji: "📔" },
      { name: "Handmade card", meaning: "Personal touch", emoji: "🎀" },
    ],
  },
];

const romanticPhrases = [
  { chinese: "我爱你", pinyin: "Wǒ ài nǐ", english: "I love you" },
  { chinese: "执子之手", pinyin: "Zhí zǐ zhī shǒu", english: "Hold your hand" },
  { chinese: "与子偕老", pinyin: "Yǔ zǐ xié lǎo", english: "Grow old together" },
  { chinese: "一生一世", pinyin: "Yì shēng yí shì", english: "Forever" },
];

export function QixiGiftGuidePage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🎁</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Qixi Gift Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Thoughtful gift ideas for China&apos;s traditional
              Valentine&apos;s Day. Show your love with meaningful presents!
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-100/80 to-rose-100/80 dark:from-pink-900/30 dark:to-rose-900/20 border border-pink-200 dark:border-pink-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <span className="text-xl">💕</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Traditional Qixi Gifts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Gifts with deep cultural meaning
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                On Qixi Festival, couples exchange gifts to express love and
                commitment. Traditional gifts often have symbolic meanings
                related to love, prosperity, and togetherness.
              </p>
              <p>
                The most important thing is the thought and sentiment behind
                the gift, not its monetary value. A heartfelt gift is always
                more meaningful.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {giftIdeas.map((category, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-xl"
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.meaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Express Your Love
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {romanticPhrases.map((phrase, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl text-center"
                >
                  <p className="text-2xl font-medium text-foreground mb-1">
                    {phrase.chinese}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    {phrase.pinyin}
                  </p>
                  <p className="text-sm text-pink-600 dark:text-pink-400">
                    {phrase.english}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/qixi-blessings`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Qixi Blessings
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
