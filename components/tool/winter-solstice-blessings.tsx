"use client";

import { ArrowLeft, Volume2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

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
];

export function WinterSolsticeBlessingsPage({
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

          <div className="grid gap-4 md:grid-cols-2">
            {winterSolsticeBlessings.map((blessing, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-white/60 dark:bg-zinc-800/60 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {blessing.chinese}
                    </h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                      {blessing.pinyin}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakText(blessing.chinese)}
                    disabled={speaking === blessing.chinese}
                    className="p-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-900/50 transition-colors"
                  >
                    {speaking === blessing.chinese ? (
                      <Volume2 className="h-5 w-5 animate-pulse" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-muted-foreground mb-2">{blessing.english}</p>
                <p className="text-xs text-cyan-600 dark:text-cyan-400">
                  {blessing.usage}
                </p>
              </div>
            ))}
          </div>

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
            <p className="text-sm text-muted-foreground">
              Winter Solstice is a time for family reunions. Whether you prefer
              dumplings or tangyuan, the important thing is to be together with
              loved ones on the longest night of the year.
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
