"use client";

import { cultureUserTypeData, festivalData } from "@/lib/festivals";
import { cn } from "@/lib/utils";
import { CulturalTopicsGrid } from "./components/cultural-topics-grid";
import { CultureHero } from "./components/culture-hero";
import { ContinueLearningSection } from "./components/culture-navigation";
import { CustomsSection } from "./components/customs-section";
import { DeepContentSection } from "./components/deep-content-section";
import { TaboosSection } from "./components/taboos-section";

interface CultureDetailContentProps {
  lang: "en";
  festivalId: string;
}

const userTypeKeys = ["tourist", "student", "worker"] as const;

export function CultureDetailContent({
  lang,
  festivalId,
}: CultureDetailContentProps) {
  const currentFestivalId = festivalId || "spring";
  const festival = festivalData[currentFestivalId] || festivalData.spring;
  const basicInfo = festival.basicInfo;
  const userTypeData =
    cultureUserTypeData[currentFestivalId] || cultureUserTypeData.spring;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <CultureHero
          name={basicInfo.name}
          emoji={basicInfo.emoji}
          date={basicInfo.date}
          lunarDate={basicInfo.lunarDate}
        />

        {/* User Types - All Expanded */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {userTypeKeys.map((key) => {
            const label = userTypeData.label[key];
            const description = userTypeData.description[key];
            const focusContent = userTypeData.focusContent[key];
            const icon = userTypeData.icon[key];
            const backgroundColor = userTypeData.backgroundColor[key];

            return (
              <div
                key={key}
                className={cn("rounded-2xl p-6", backgroundColor, "border")}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusContent.map((item, i) => (
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
          history={basicInfo.history}
          customs={basicInfo.customs}
        />

        <CustomsSection customs={basicInfo.customs} />

        <TaboosSection taboo={basicInfo.taboo || []} />

        <DeepContentSection basicInfo={basicInfo} />

        <ContinueLearningSection
          lang={lang}
          festivalId={currentFestivalId}
          festivalName={basicInfo.name}
        />
      </main>
    </div>
  );
}
