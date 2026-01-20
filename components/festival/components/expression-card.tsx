"use client";

import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

interface Expression {
  chinese: string;
  pinyin: string;
  english: string;
  scenario: string;
}

interface ExpressionCardProps {
  expression: Expression;
}

export function ExpressionCard({ expression }: ExpressionCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(expression.chinese);
      utterance.lang = "zh-CN";
      utterance.rate = 0.8;

      const voices = window.speechSynthesis.getVoices();
      const chineseVoice = voices.find(
        (voice) => voice.lang.startsWith("zh") || voice.lang === "zh-CN",
      );
      if (chineseVoice) {
        utterance.voice = chineseVoice;
      }

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-800 bg-white/50 dark:bg-zinc-800/50 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-foreground text-lg">
            {expression.chinese}
          </h4>
          <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">
            {expression.pinyin}
          </p>
        </div>
        <button
          type="button"
          onClick={speak}
          disabled={isPlaying}
          className="p-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-colors disabled:opacity-50"
          title="播放发音"
        >
          {isPlaying ? (
            <Volume2 className="h-4 w-4 animate-pulse" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{expression.english}</p>
      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
        {expression.scenario}
      </span>
    </div>
  );
}
