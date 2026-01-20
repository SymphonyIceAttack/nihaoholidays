"use client";

import {
  ArrowLeft,
  ChevronRight,
  Copy,
  Gift,
  Info,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const amountGuidelines = [
  {
    recipient: "Close Family (子女)",
    amounts: [
      { amount: 666, meaning: "Lucky and smooth (一路顺)" },
      { amount: 888, meaning: "Double fortune (发发发)" },
      { amount: 999, meaning: "Eternal prosperity (长长久久)" },
      { amount: 1666, meaning: "Fortune and success" },
      { amount: 1888, meaning: "Great wealth" },
    ],
  },
  {
    recipient: "Grandparents (祖父母)",
    amounts: [
      { amount: 200, meaning: "Simple and sincere" },
      { amount: 500, meaning: "Respect and love" },
      { amount: 666, meaning: "Smooth journey" },
      { amount: 888, meaning: "Fortune blessings" },
    ],
  },
  {
    recipient: "Parents (父母)",
    amounts: [
      { amount: 521, meaning: "I love you (我爱你的谐音)" },
      { amount: 666, meaning: "Smooth and lucky" },
      { amount: 888, meaning: "Fortune blessings" },
      { amount: 999, meaning: "Eternal love" },
    ],
  },
  {
    recipient: "Children (小孩)",
    amounts: [
      { amount: 20, meaning: "Small blessing" },
      { amount: 50, meaning: "Good wishes" },
      { amount: 100, meaning: "Complete happiness" },
      { amount: 200, meaning: "Double joy" },
    ],
  },
  {
    recipient: "Relatives (亲戚)",
    amounts: [
      { amount: 100, meaning: "Good fortune" },
      { amount: 200, meaning: "Prosperity" },
      { amount: 300, meaning: "Fortune growth" },
      { amount: 500, meaning: "Abundant luck" },
    ],
  },
  {
    recipient: "Colleagues/Friends (同事朋友)",
    amounts: [
      { amount: 18, meaning: "Prosperity (要发)" },
      { amount: 20, meaning: "Smooth sailing" },
      { amount: 28, meaning: "Easy fortune" },
      { amount: 66, meaning: "Smooth success" },
    ],
  },
];

const etiquetteTips = [
  {
    icon: "✅",
    title: "Do's",
    items: [
      "Use crisp, new banknotes",
      "Give with both hands politely",
      "数字 8 and 6 are lucky numbers",
      "Red envelopes symbolize good luck",
      "Give to unmarried people only",
    ],
  },
  {
    icon: "❌",
    title: "Don'ts",
    items: [
      "Avoid number 4 (sounds like 'death')",
      "Don't open the envelope in front of giver",
      "Avoid odd numbers (associated with funerals)",
      "Don't give to married people",
      "Avoid white or black colors",
    ],
  },
];

const phrases = [
  {
    chinese: "祝您新年快乐，万事如意！",
    pinyin: "Zhù nín xīn nián kuài lè, wàn shì rú yì!",
    english: "Happy New Year, may everything go your way!",
  },
  {
    chinese: "给您拜年啦！",
    pinyin: "Gěi nín bài nián la!",
    english: "I'm here to wish you a Happy New Year!",
  },
  {
    chinese: "恭喜发财，红包拿来！",
    pinyin: "Gōng xǐ fā cái, hóng bāo ná lái!",
    english: "Congratulations on your wealth, give me the red envelope!",
  },
  {
    chinese: "祝您和家人新春快乐，阖家幸福！",
    pinyin: "Zhù nín hé jiā rén xīn chūn kuài lè, hé jiā xìng fú!",
    english: "Wishing you and your family a happy Spring Festival!",
  },
];

export function RedEnvelopeGuidePage({ lang = "en" }: { lang?: string } = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🧧</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Red Envelope (红包) Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Learn the proper amounts and etiquette for giving red envelopes
              during Chinese New Year.
            </p>
          </div>

          {/* Quick Reference */}
          <div className="bg-gradient-to-r from-rose-100/80 to-red-100/80 dark:from-rose-900/30 dark:to-red-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center">
                <Wallet className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Quick Amount Guide
                </h3>
                <p className="text-sm text-muted-foreground">
                  Common amounts by relationship
                </p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              <div className="p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60 text-center">
                <p className="text-2xl font-bold text-rose-600">¥66</p>
                <p className="text-xs text-muted-foreground">Smooth journey</p>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60 text-center">
                <p className="text-2xl font-bold text-rose-600">¥88</p>
                <p className="text-xs text-muted-foreground">Fortune</p>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60 text-center">
                <p className="text-2xl font-bold text-rose-600">¥99</p>
                <p className="text-xs text-muted-foreground">Eternal</p>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60 text-center">
                <p className="text-2xl font-bold text-rose-600">¥168</p>
                <p className="text-xs text-muted-foreground">Road to wealth</p>
              </div>
            </div>
          </div>

          {/* Amount Guidelines */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Amount Guidelines
                </h2>
                <p className="text-sm text-muted-foreground">
                  How much to give by relationship
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {amountGuidelines.map((guide, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-rose-200 dark:border-rose-800 bg-white/60 dark:bg-zinc-800/60"
                >
                  <h3 className="font-semibold text-foreground mb-3">
                    {guide.recipient}
                  </h3>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {guide.amounts.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                      >
                        <span className="font-bold text-rose-600">
                          ¥{item.amount}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.meaning}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Etiquette */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Gift className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Etiquette Tips
                </h2>
                <p className="text-sm text-muted-foreground">
                  Proper ways to give and receive
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {etiquetteTips.map((tip, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-5 rounded-xl",
                    tip.icon === "✅"
                      ? "bg-green-50/60 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      : "bg-red-50/60 dark:bg-red-900/20 border border-red-200 dark:border-red-800",
                  )}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{tip.icon}</span>
                    <h3 className="font-semibold text-foreground">
                      {tip.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-foreground mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Lucky Numbers */}
          <div className="mb-8 bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Lucky Numbers</h3>
                <p className="text-sm text-muted-foreground">数字 de 含义</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60">
                <p className="text-2xl font-bold text-amber-600">8</p>
                <p className="text-xs text-muted-foreground">
                  八 - Wealth (发)
                </p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60">
                <p className="text-2xl font-bold text-amber-600">6</p>
                <p className="text-xs text-muted-foreground">
                  六 - Smooth (顺)
                </p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60">
                <p className="text-2xl font-bold text-amber-600">9</p>
                <p className="text-xs text-muted-foreground">
                  九 - Eternal (久)
                </p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60">
                <p className="text-2xl font-bold text-amber-600">2</p>
                <p className="text-xs text-muted-foreground">双 - Pairs (好)</p>
              </div>
            </div>
          </div>

          {/* Phrases */}
          <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Copy className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Useful Phrases
                </h3>
                <p className="text-sm text-muted-foreground">
                  What to say when giving/receiving
                </p>
              </div>
            </div>
            <div className="grid gap-3">
              {phrases.map((phrase, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60"
                >
                  <p className="font-medium text-foreground mb-1">
                    {phrase.chinese}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                    {phrase.pinyin}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {phrase.english}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigate to Other Tools */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-rose-600 hover:bg-rose-700" asChild>
              <Link href={`/${lang}/tool/menu`}>
                <ChevronRight className="h-4 w-4 mr-2" />
                Menu Assistant
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/greetings`}>
                <ChevronRight className="h-4 w-4 mr-2" />
                Greeting Templates
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            No account needed • No registration • Start learning immediately
          </p>
        </div>
      </footer>
    </div>
  );
}
