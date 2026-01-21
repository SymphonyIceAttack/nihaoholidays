import {
  BookOpen,
  ChevronRight,
  GraduationCap,
  HelpCircle,
  MessageSquare,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { festivalData, festivalUserTypeData } from "@/lib/festivals";
import { translate } from "@/lib/translations";
import type { LanguageType } from "@/lib/translations/config";
import { cn } from "@/lib/utils";
import { EtiquetteSection } from "./components/etiquette-section";
import { ExpressionCard } from "./components/expression-card";
import { FestivalFooter } from "./components/festival-footer";
import { FestivalHero } from "./components/festival-hero";
import { FoodCard } from "./components/food-card";
import { ToolsSection } from "./components/tools-section";

interface FestivalDetailContentProps {
  lang: LanguageType;
  festivalId: string;
}

const userTypeKeys = ["tourist", "student", "worker"] as const;

export function FestivalDetailContent({
  lang,
  festivalId,
}: FestivalDetailContentProps) {
  const t = (key: string, params?: Record<string, string>) =>
    translate(key, lang as "en", params);
  const currentId = festivalId || "spring";
  const currentFestival = festivalData[currentId] || festivalData.spring;
  const basicInfo = currentFestival.basicInfo;
  const userTypeData =
    festivalUserTypeData[currentId] || festivalUserTypeData.spring;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <FestivalHero
          name={basicInfo.name}
          emoji={basicInfo.emoji}
          date={basicInfo.date}
          lunarDate={basicInfo.lunarDate}
          description={basicInfo.description}
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

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Essential Phrases */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Essential Phrases
                </h2>
                <p className="text-sm text-muted-foreground">
                  {currentFestival.expressions.length} expressions to learn
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {currentFestival.expressions.map((expr, i) => (
                <ExpressionCard key={i} expression={expr} />
              ))}
            </div>
          </section>

          {/* Holiday Foods */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <Utensils className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Holiday Foods
                </h2>
                <p className="text-sm text-muted-foreground">
                  {currentFestival.foods.length} traditional foods with ordering
                  phrases
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {currentFestival.foods.map((food, i) => (
                <FoodCard key={i} food={food} />
              ))}
            </div>
          </section>

          {/* Etiquette Section */}
          <EtiquetteSection
            customs={basicInfo.customs}
            taboo={basicInfo.taboo || []}
            gifts={currentFestival.gifts}
          />
        </div>

        {/* Tools Section */}
        <ToolsSection
          tools={currentFestival.tools}
          lang={lang}
          festivalId={festivalId}
        />

        {/* Continue Learning Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t("festival.continueJourney")}
            </h3>
            <p className="text-muted-foreground">
              {t("festival.exploreAbout", { name: basicInfo.name })}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href={`/${lang}/culture/${festivalId}`}
              className="p-4 rounded-xl bg-gradient-to-br from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-3">
                <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {t("festival.culturalOverview")}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t("festival.culturalOverview.desc")}
              </p>
              <span className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {t("common.learnMore")}
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href={`/${lang}/quiz/${festivalId}`}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-100/80 to-pink-100/80 dark:from-purple-900/30 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-3">
                <HelpCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {t("festival.interactiveQuiz")}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t("festival.quiz.desc")}
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {t("festival.takeQuiz")}
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href={`/${lang}/learn`}
              className="p-4 rounded-xl bg-gradient-to-br from-blue-100/80 to-indigo-100/80 dark:from-blue-900/30 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3">
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {t("festival.exploreFestivals")}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t("festival.discoverFestivals")}
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {t("festival.browse")}
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-xl mx-auto mt-12 text-center">
          <Button
            size="lg"
            asChild
            className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20"
          >
            <Link href={`/${lang}/learn`}>
              {t("festival.continue")}
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>
      <FestivalFooter />
    </div>
  );
}
