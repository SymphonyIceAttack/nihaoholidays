"use client";

import { SpeechButton } from "../shared/speech-button";

interface Blessing {
  chinese: string;
  pinyin: string;
  english: string;
  usage: string;
}

interface BlessingGridProps {
  blessings: Blessing[];
  colorClass: {
    text: string;
    bg: string;
    border: string;
    darkText: string;
    darkBg: string;
  };
}

export function BlessingGrid({ blessings, colorClass }: BlessingGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {blessings.map((blessing, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl border ${colorClass.border} ${colorClass.bg} dark:${colorClass.darkBg} hover:shadow-md transition-all duration-300`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {blessing.chinese}
              </h3>
              <p
                className={`text-sm ${colorClass.text} dark:${colorClass.darkText} font-medium`}
              >
                {blessing.pinyin}
              </p>
            </div>
            <SpeechButton text={blessing.chinese} />
          </div>
          <p className="text-muted-foreground mb-2">{blessing.english}</p>
          <p
            className={`text-xs ${colorClass.text} dark:${colorClass.darkText}`}
          >
            {blessing.usage}
          </p>
        </div>
      ))}
    </div>
  );
}
