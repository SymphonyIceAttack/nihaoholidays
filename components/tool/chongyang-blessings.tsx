"use client";

import { ArrowLeft, Volume2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

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
];

export function ChongyangBlessingsPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
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

          <div className="grid gap-4 md:grid-cols-2">
            {chongyangBlessings.map((blessing, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-zinc-800/60 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {blessing.chinese}
                    </h3>
                    <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                      {blessing.pinyin}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakText(blessing.chinese)}
                    disabled={speaking === blessing.chinese}
                    className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
                  >
                    {speaking === blessing.chinese ? (
                      <Volume2 className="h-5 w-5 animate-pulse" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-muted-foreground mb-2">{blessing.english}</p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  {blessing.usage}
                </p>
              </div>
            ))}
          </div>

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
            <p className="text-sm text-muted-foreground">
              Take this opportunity to express love and gratitude to the elders
              in your life. A simple greeting can mean so much to those who came
              before us.
            </p>
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
