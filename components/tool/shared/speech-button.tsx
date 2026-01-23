"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";

interface SpeechButtonProps {
  text: string;
}

export function SpeechButton({ text }: SpeechButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  const speakText = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-CN";
      utterance.rate = 0.8;
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      type="button"
      onClick={speakText}
      disabled={speaking}
      className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
    >
      {speaking ? (
        <Volume2 className="h-5 w-5 animate-pulse" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </button>
  );
}
