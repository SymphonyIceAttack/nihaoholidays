"use client";

import {
  festivalData,
  userTypeData,
} from "@/components/festival/data/festival-data";
import { cn } from "@/lib/utils";
import { CulturalTopicsGrid } from "./components/cultural-topics-grid";
import { CultureHero } from "./components/culture-hero";
import { ContinueLearningSection } from "./components/culture-navigation";
import { CustomsSection } from "./components/customs-section";
import { TaboosSection } from "./components/taboos-section";

interface CultureDetailContentProps {
  lang: "en";
  festivalId: string;
}

const userTypes = [
  { id: "tourist", label: "Tourist", icon: "✈️" },
  { id: "student", label: "Student", icon: "🎓" },
  { id: "worker", label: "Worker", icon: "💼" },
] as const;

export function CultureDetailContent({
  lang,
  festivalId,
}: CultureDetailContentProps) {
  const currentFestivalId = festivalId || "spring";
  const festival = festivalData[currentFestivalId] || festivalData.spring;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <CultureHero
          name={festival.name}
          emoji={festival.emoji}
          date={festival.date}
          lunarDate={festival.lunarDate}
        />

        {/* User Types - All Expanded */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {userTypes.map((type) => {
            const typeData = userTypeData[type.id];
            return (
              <div
                key={type.id}
                className={cn(
                  "rounded-2xl p-6",
                  typeData.backgroundColor,
                  "border",
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{typeData.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Exploring as a {typeData.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {typeData.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {typeData.focusContent.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-background/60 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <CulturalTopicsGrid
          history={festival.history}
          customs={festival.customs}
        />

        <CustomsSection customs={festival.customs} />

        <TaboosSection taboo={festival.taboo} />

        <ContinueLearningSection
          lang={lang}
          festivalId={currentFestivalId}
          festivalName={festival.name}
        />
      </main>
    </div>
  );
}
