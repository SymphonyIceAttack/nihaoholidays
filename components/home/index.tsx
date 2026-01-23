"use client";

import { useState } from "react";
import type { LanguageType } from "@/lib/translations/config";
import { FeaturedTools } from "./featured-tools";
import { FestivalFilters } from "./festival-filters";
import { FestivalGrid } from "./festival-grid";
import { FoodPreview } from "./food-preview";
import { HeroSection } from "./hero-section";
import { QuickStart } from "./quick-start";
import { UpcomingFestivals } from "./upcoming-festivals";
import { ValueProposition } from "./value-proposition";

export {
  FeaturedTools,
  FestivalFilters,
  FestivalGrid,
  FoodPreview,
  HeroSection,
  QuickStart,
  UpcomingFestivals,
  ValueProposition,
};

interface HomePageContentProps {
  lang: LanguageType;
}

export function HomePageContent({ lang }: HomePageContentProps) {
  const [themeFilter, setThemeFilter] = useState<string>("all");

  return (
    <>
      <HeroSection />
      <UpcomingFestivals lang={lang} />
      <div className="container mx-auto px-4 py-12">
        <FestivalFilters
          lang={lang}
          onFilterChange={(theme) => {
            setThemeFilter(theme);
          }}
        />
        <FestivalGrid lang={lang} theme={themeFilter} />
      </div>
      <FeaturedTools lang={lang} />
      <FoodPreview lang={lang} />
      <QuickStart />
      <ValueProposition />
    </>
  );
}
