"use client";

import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { learningSteps, learnPageFestivals } from "@/lib/festivals";
import { translate } from "@/lib/translations";
import type { LanguageType } from "@/lib/translations/config";
import { cn } from "@/lib/utils";

function LearnPageInner({ lang }: { lang: LanguageType }) {
  const t = (key: string, params?: Record<string, string>) =>
    translate(key, lang, params);
  const [selectedFestival, setSelectedFestival] = useState<string | null>(null);
  const currentStep = selectedFestival ? 2 : 1;

  const handleStart = () => {
    if (selectedFestival) {
      window.location.href = `/${lang}/festival/${selectedFestival}`;
    }
  };

  return (
    <div className="min-h-screen aurora-bg">
      <main className="container relative mx-auto px-4 py-12">
        {/* Decorative aurora effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-aurora-1 rounded-full blur-3xl animate-aurora" />
          <div
            className="absolute top-40 right-1/4 w-72 h-72 bg-aurora-2 rounded-full blur-3xl animate-aurora"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            {learningSteps.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    currentStep > index
                      ? "aurora-card text-rose-700 dark:text-rose-300"
                      : currentStep === index
                        ? "aurora-card text-rose-700 dark:text-rose-300"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs",
                      currentStep > index
                        ? "bg-rose-500 text-white"
                        : currentStep === index
                          ? "bg-rose-500 text-white animate-pulse"
                          : "bg-muted-foreground/20",
                    )}
                  >
                    {currentStep > index ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      item.step
                    )}
                  </span>
                  <span className="hidden sm:inline">{t(item.titleKey)}</span>
                </div>
                {index < learningSteps.length - 1 && (
                  <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Pick a Festival */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 aurora-card text-rose-700 dark:text-rose-300 px-4 py-1.5 text-sm font-medium mb-4">
              <span
                className={cn(
                  "w-2 h-2 rounded-full bg-rose-500",
                  currentStep === 1 && "animate-pulse",
                )}
              />
              {currentStep === 1
                ? t("learn.chooseFestival")
                : t("learn.readyToLearn")}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
              {currentStep === 1
                ? t("learn.startJourney")
                : t("learn.learning", {
                    name:
                      t(
                        learnPageFestivals.find(
                          (f) => f.id === selectedFestival,
                        )?.nameKey || "",
                      ) || "",
                  })}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {currentStep === 1
                ? t("learn.selectFestival")
                : t("learn.clickStart")}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {learnPageFestivals.map((festival) => {
              const isSelected = selectedFestival === festival.id;

              return (
                <button
                  key={festival.id}
                  type="button"
                  onClick={() => setSelectedFestival(festival.id)}
                  className={cn(
                    "relative p-5 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md",
                    isSelected
                      ? "aurora-card border-rose-500"
                      : "border-border bg-background hover:border-rose-200 dark:hover:border-rose-800",
                  )}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg ring-4 ring-background">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{festival.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {t(festival.nameKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t(festival.subtitleKey)}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {t("tools.count", { count: String(festival.tools) })}
                        </span>
                        <span
                          className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            festival.difficultyKey === "difficulty.beginner"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
                          )}
                        >
                          {t(festival.difficultyKey)}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Quick Actions */}
        {selectedFestival && (
          <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-2xl mx-auto">
              <div className="aurora-card p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 aurora-card px-3 py-1 rounded-full text-sm text-rose-700 dark:text-rose-300 mb-4">
                    <Sparkles className="h-4 w-4" />
                    {t("learn.readyLearn")}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t("learn.learning", {
                      name:
                        t(
                          learnPageFestivals.find(
                            (f) => f.id === selectedFestival,
                          )?.nameKey || "",
                        ) || "",
                    })}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("learn.getExpressions")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    onClick={handleStart}
                    className="flex-1 bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20 hover-glow transition-all duration-300"
                  >
                    {t("learn.startNow")}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1"
                  >
                    <Link href={`/${lang}/festival/${selectedFestival}`}>
                      {t("learn.viewDetails")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Learning Preview */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3 font-serif">
              {t("learn.whatLearn")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("learn.comprehensive")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl aurora-card hover-glow transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-rose-500/20">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {t("learn.expressions")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("learn.expressions.desc")}
              </p>
            </div>
            <div className="text-center p-6 rounded-xl aurora-card hover-glow transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/20">
                <span className="text-2xl">🍜</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {t("learn.foodGuide")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("learn.foodGuide.desc")}
              </p>
            </div>
            <div className="text-center p-6 rounded-xl aurora-card hover-glow transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-500/20">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {t("learn.etiquette")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("learn.etiquette.desc")}
              </p>
            </div>
            <div className="text-center p-6 rounded-xl aurora-card hover-glow transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/20">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {t("learn.practice")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("learn.practice.desc")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function LearnPageSkeleton() {
  return (
    <div className="min-h-screen aurora-bg">
      <main className="container relative mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded-full w-64 mx-auto mb-8" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-40 aurora-card rounded-xl" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export function LearnPageContent({ lang }: { lang: LanguageType }) {
  return (
    <Suspense fallback={<LearnPageSkeleton />}>
      <LearnPageInner lang={lang} />
    </Suspense>
  );
}
