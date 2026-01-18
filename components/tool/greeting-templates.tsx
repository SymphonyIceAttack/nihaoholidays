"use client";

import {
  ArrowLeft,
  ChevronRight,
  Copy,
  Heart,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const greetingCategories = [
  { id: "general", label: "General", icon: "🎊" },
  { id: "elder", label: "For Elders", icon: "👴" },
  { id: "colleague", label: "For Colleagues", icon: "💼" },
  { id: "friend", label: "For Friends", icon: "👫" },
  { id: "child", label: "For Children", icon: "👶" },
];

const greetings = {
  general: [
    {
      chinese: "新年快乐",
      pinyin: "Xīn nián kuài lè",
      english: "Happy New Year",
      usage: "Universal greeting for everyone",
    },
    {
      chinese: "恭喜发财",
      pinyin: "Gōng xǐ fā cái",
      english: "Wishing you wealth and prosperity",
      usage: "Traditional prosperity blessing",
    },
    {
      chinese: "万事如意",
      pinyin: "Wàn shì rú yì",
      english: "May everything go as you wish",
      usage: "Formal well-wishes",
    },
    {
      chinese: "新春大吉",
      pinyin: "Xīn chūn dà jí",
      english: "Great luck in the new spring",
      usage: "Spring Festival specific",
    },
    {
      chinese: "吉星高照",
      pinyin: "Jí xīng gāo zhào",
      english: "Lucky stars shining upon you",
      usage: "Fortune and luck blessing",
    },
    {
      chinese: "五福临门",
      pinyin: "Wǔ fú lín mén",
      english: "Five blessings enter your home",
      usage: "Traditional blessing for prosperity",
    },
  ],
  elder: [
    {
      chinese: "身体健康",
      pinyin: "Shēn tǐ jiàn kāng",
      english: "Wishing you good health",
      usage: "Health blessing for elders",
    },
    {
      chinese: "福如东海",
      pinyin: "Fú rú dōng hǎi",
      english: "May your happiness be as vast as the East Sea",
      usage: "Respectful blessing for elders",
    },
    {
      chinese: "寿比南山",
      pinyin: "Shòu bǐ nán shān",
      english: "May your life be as long as the Southern Mountain",
      usage: "Longevity blessing for elders",
    },
    {
      chinese: "长命百岁",
      pinyin: "Cháng mìng bǎi suì",
      english: "Live a long life of 100 years",
      usage: "Wishes for longevity",
    },
    {
      chinese: "龙马精神",
      pinyin: "Lóng mǎ jīng shén",
      english: "Vigor like a dragon and horse",
      usage: "Vitality and health blessing",
    },
  ],
  colleague: [
    {
      chinese: "工作顺利",
      pinyin: "Gōng zuò shùn lì",
      english: "Wishing you smooth work",
      usage: "Work-related blessing",
    },
    {
      chinese: "步步高升",
      pinyin: "Bù bù gāo shēng",
      english: "May you climb higher with each step",
      usage: "Career advancement",
    },
    {
      chinese: "事业有成",
      pinyin: "Shì yè yǒu chéng",
      english: "May your career be successful",
      usage: "Professional success",
    },
    {
      chinese: "财源广进",
      pinyin: "Cái yuán guǎng jìn",
      english: "May wealth flow in abundantly",
      usage: "Business prosperity",
    },
    {
      chinese: "招财进宝",
      pinyin: "Zhāo cái jìn bǎo",
      english: "May wealth and treasure come to you",
      usage: "Fortune blessing",
    },
  ],
  friend: [
    {
      chinese: "友谊长存",
      pinyin: "Yǒu yì cháng cún",
      english: "May our friendship last forever",
      usage: "Friendship blessing",
    },
    {
      chinese: "心想事成",
      pinyin: "Xīn xiǎng shì chéng",
      english: "May all your wishes come true",
      usage: "Wishes for fulfillment",
    },
    {
      chinese: "天天开心",
      pinyin: "Tiān tiān kāi xīn",
      english: "Be happy every day",
      usage: "Daily happiness",
    },
    {
      chinese: "笑口常开",
      pinyin: "Xiào kǒu cháng kāi",
      english: "May you always smile",
      usage: "Joy and laughter",
    },
    {
      chinese: "前程似锦",
      pinyin: "Qián chéng sì jǐn",
      english: "May your future be bright and beautiful",
      usage: "Bright future wishes",
    },
  ],
  child: [
    {
      chinese: "学业进步",
      pinyin: "Xué yè jìn bù",
      english: "May your studies improve",
      usage: "Academic progress",
    },
    {
      chinese: "聪明伶俐",
      pinyin: "Cōng míng líng lì",
      english: "Smart and clever",
      usage: "Intelligence blessing",
    },
    {
      chinese: "活泼可爱",
      pinyin: "Huó pō kě ài",
      english: "Vibrant and adorable",
      usage: "For young children",
    },
    {
      chinese: "健康成长",
      pinyin: "Jiàn kāng chéng zhǎng",
      english: "Grow up healthy and strong",
      usage: "Health and growth",
    },
    {
      chinese: "快乐成长",
      pinyin: "Kuài lè chéng zhǎng",
      english: "Grow up happily",
      usage: "Happiness blessing",
    },
  ],
};

export function GreetingTemplatesPage({ lang = "en" }: { lang?: string } = {}) {
  const [activeCategory, setActiveCategory] = useState("general");
  const [speaking, setSpeaking] = useState<string | null>(null);

  const speakText = (text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-CN";
      utterance.rate = 0.8;
      utterance.onstart = () => setSpeaking(text);
      utterance.onend = () => setSpeaking(null);
      utterance.onerror = () => setSpeaking(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  const currentGreetings = greetings[activeCategory as keyof typeof greetings] || greetings.general;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🎊</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Chinese New Year Greetings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Classic blessings for every occasion and recipient. Click to hear pronunciation.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {greetingCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    activeCategory === cat.id
                      ? "bg-rose-600 text-white"
                      : "bg-muted text-muted-foreground hover:bg-rose-100 dark:hover:bg-rose-900/30",
                  )}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Greetings Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {currentGreetings.map((greeting, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-rose-200 dark:border-rose-800 bg-white/60 dark:bg-zinc-800/60 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {greeting.chinese}
                    </h3>
                    <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">
                      {greeting.pinyin}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakText(greeting.chinese)}
                    disabled={speaking === greeting.chinese}
                    className="p-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-colors"
                  >
                    {speaking === greeting.chinese ? (
                      <Volume2 className="h-5 w-5 animate-pulse" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-muted-foreground mb-2">{greeting.english}</p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  {greeting.usage}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Copy Section */}
          <div className="mt-8 bg-gradient-to-r from-rose-100/80 to-orange-100/80 dark:from-rose-900/30 dark:to-orange-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <Copy className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Quick Copy</h3>
                <p className="text-sm text-muted-foreground">Copy greetings to share</p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {greetings.general.slice(0, 3).map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => navigator.clipboard.writeText(g.chinese)}
                  className="p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60 text-left hover:bg-white dark:hover:bg-zinc-800 transition-colors"
                >
                  <p className="font-medium text-sm text-foreground">{g.chinese}</p>
                  <p className="text-xs text-muted-foreground truncate">{g.pinyin}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Navigate to Other Tools */}
          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/menu`}>
                <ChevronRight className="h-4 w-4 mr-2" />
                Try Menu Assistant Tool
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>No account needed • No registration • Start learning immediately</p>
        </div>
      </footer>
    </div>
  );
}
