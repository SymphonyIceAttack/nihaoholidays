"use client";

import { Card } from "@/components/ui/card";
import type { Festival } from "@/lib/festivals";
import type { LanguageType } from "@/lib/translations/config";
import { cn } from "@/lib/utils";
import { AddToCalendarButton } from "./add-to-calendar-button";

interface FestivalCardProps {
  festival: Festival;
  lang: LanguageType;
  variant?: "compact" | "full";
  className?: string;
}

export function FestivalCard({
  festival,
  lang,
  variant = "compact",
  className,
}: FestivalCardProps) {
  if (variant === "full") {
    return (
      <Card
        key={festival.id}
        className={cn(
          "p-6 flex items-center gap-6 transition-all duration-200 border-rose-100/50 hover:border-rose-200",
          className,
        )}
      >
        <span className="text-5xl">{festival.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="text-xl font-semibold">{festival.name}</p>
          <p className="text-muted-foreground mb-2">{festival.date}</p>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {festival.description}
          </p>
          <p
            className={cn(
              "text-sm font-medium",
              festival.days <= 30
                ? "text-rose-500"
                : festival.days <= 90
                  ? "text-amber-500"
                  : "text-muted-foreground",
            )}
          >
            {festival.days} days until this festival
          </p>
        </div>
        <AddToCalendarButton festival={festival} variant="full" />
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group border-rose-100/50 hover:border-rose-200",
        className,
      )}
    >
      <div className="text-4xl sm:text-5xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0">
        {festival.emoji}
      </div>
      <div className="flex-1 min-w-0 w-full">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3 className="font-semibold text-foreground group-hover:text-rose-600 transition-colors text-base sm:text-lg">
            {festival.name}
          </h3>
          {festival.days <= 33 && (
            <span className="px-2 py-0.5 text-xs font-medium bg-rose-100 text-rose-700 rounded-full animate-pulse">
              Coming soon
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{festival.date}</p>
        <p className="text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-medium flex items-center gap-1 mt-0.5 sm:mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          {festival.days} days left
        </p>
      </div>
      <div className="shrink-0 w-full sm:w-auto flex flex-col gap-2">
        <AddToCalendarButton festival={festival} variant="compact" />
        <a
          href={`/${lang}/festival/${festival.id}`}
          className="text-xs text-center text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
        >
          View details
        </a>
      </div>
    </Card>
  );
}
