"use client";

import { useMemo } from "react";
import { FestivalCard } from "@/components/home/festival-card";
import {
  type FestivalWithDisplayInfo,
  getFestivalsWithDisplayInfo,
} from "@/lib/festivals";
import type { LanguageType } from "@/lib/translations/config";

interface FestivalGridProps {
  lang: LanguageType;
  theme?: string;
}

export function FestivalGrid({ lang, theme = "all" }: FestivalGridProps) {
  const festivals = useMemo(
    () => getFestivalsWithDisplayInfo(lang as LanguageType),
    [lang],
  );

  const filteredFestivals = useMemo(() => {
    return festivals.filter((festival) => {
      const themeMatch =
        theme === "all" ||
        festival.tags.some(
          (tag) =>
            tag.toLowerCase() === theme ||
            (theme === "family" && tag === "Family Reunion") ||
            (theme === "food" && tag === "Food") ||
            (theme === "romance" && tag === "Romantic"),
        );

      return themeMatch;
    });
  }, [festivals, theme]);

  return (
    <div className="space-y-6" id="festivals">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Festival List
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Each festival has cultural overviews, quizzes, and useful tools
          </p>
        </div>
        <span className="text-sm text-muted-foreground hidden sm:block">
          Sorted by Lunar Calendar
        </span>
      </div>

      {filteredFestivals.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No festivals match your filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFestivals.map((festival) => (
            <FestivalCard
              key={festival.id}
              festival={festival satisfies FestivalWithDisplayInfo}
              lang={lang}
            />
          ))}
        </div>
      )}
    </div>
  );
}
