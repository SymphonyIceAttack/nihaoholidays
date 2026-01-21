"use client";

import { ArrowLeft, Volume2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

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
];

export function LabaBlessingsPage({
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

          <div className="grid gap-4 md:grid-cols-2">
            {labaBlessings.map((blessing, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-orange-200 dark:border-orange-800 bg-white/60 dark:bg-zinc-800/60 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {blessing.chinese}
                    </h3>
                    <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                      {blessing.pinyin}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakText(blessing.chinese)}
                    disabled={speaking === blessing.chinese}
                    className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    {speaking === blessing.chinese ? (
                      <Volume2 className="h-5 w-5 animate-pulse" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-muted-foreground mb-2">{blessing.english}</p>
                <p className="text-xs text-orange-600 dark:text-orange-400">
                  {blessing.usage}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-100/80 to-amber-100/80 dark:from-orange-900/30 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
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
            <p className="text-sm text-muted-foreground">
              Laba Festival is celebrated on the 8th day of the 12th lunar
              month. Eating laba porridge (八宝粥) is the main tradition,
              marking the countdown to Spring Festival.
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
