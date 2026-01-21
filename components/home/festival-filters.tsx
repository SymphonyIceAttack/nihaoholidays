"use client";

import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import type { LanguageType } from "@/lib/translations/config";
import { cn } from "@/lib/utils";

type ThemeFilter = "all" | "family" | "food" | "romance";

interface FestivalFiltersProps {
  lang: LanguageType;
  onFilterChange?: (theme: ThemeFilter) => void;
}

const filters = {
  theme: [
    { id: "all", labelKey: "filters.theme.all" },
    { id: "family", labelKey: "filters.theme.family" },
    { id: "food", labelKey: "filters.theme.food" },
    { id: "romance", labelKey: "filters.theme.romance" },
  ],
};

const translations: Record<string, Record<string, string>> = {
  en: {
    "filters.title": "Filter festivals",
    "filters.theme.all": "All festivals",
    "filters.theme.family": "Family reunion",
    "filters.theme.food": "Food-focused",
    "filters.theme.romance": "Romantic",
  },
};

function getTranslation(key: string, lang: LanguageType): string {
  return translations[lang]?.[key] || translations.en[key] || key;
}

export function FestivalFilters({
  lang,
  onFilterChange,
}: FestivalFiltersProps) {
  const [theme, setTheme] = useState<ThemeFilter>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: ThemeFilter) => {
    setTheme(newTheme);
    onFilterChange?.(newTheme);
  };

  if (!mounted) {
    return (
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span>Filter festivals</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        <span>{getTranslation("filters.title", lang)}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.theme.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleThemeChange(item.id as ThemeFilter)}
            className={cn(
              "px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer",
              theme === item.id
                ? "bg-foreground text-background shadow-sm dark:shadow-lg"
                : "bg-secondary dark:bg-zinc-800 text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-zinc-700",
            )}
          >
            {getTranslation(item.labelKey, lang)}
          </button>
        ))}
      </div>
    </div>
  );
}

export type { ThemeFilter };
