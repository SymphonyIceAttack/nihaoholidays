"use client";

import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const festivals = [
  {
    id: "spring",
    name: "Spring Festival",
    emoji: "🧧",
    subtitle: "Start with the most important festival",
    tools: 12,
    difficulty: "Beginner",
  },
  {
    id: "lantern",
    name: "Lantern Festival",
    emoji: "🏮",
    subtitle: "The grand finale of Spring Festival",
    tools: 5,
    difficulty: "Beginner",
  },
  {
    id: "mid-autumn",
    name: "Mid-Autumn Festival",
    emoji: "🥮",
    subtitle: "Mooncakes and family reunion",
    tools: 8,
    difficulty: "Beginner",
  },
  {
    id: "dragon-boat",
    name: "Dragon Boat Festival",
    emoji: "🐉",
    subtitle: "Zongzi and dragon boats",
    tools: 6,
    difficulty: "Intermediate",
  },
  {
    id: "qingming",
    name: "Qingming Festival",
    emoji: "🌿",
    subtitle: "Tomb sweeping and spring outings",
    tools: 4,
    difficulty: "Intermediate",
  },
  {
    id: "qixi",
    name: "Qixi Festival",
    emoji: "💕",
    subtitle: "China's Valentine's Day",
    tools: 5,
    difficulty: "Beginner",
  },
] as const;

const learningSteps = [
  {
    step: 1,
    title: "Choose a festival",
    description: "Start with recommended ones or explore freely",
    icon: "calendar",
  },
  {
    step: 2,
    title: "Learn expressions",
    description: "Master practical phrases with pinyin and audio",
    icon: "message",
  },
  {
    step: 3,
    title: "Practice scenarios",
    description: "Use interactive tools to practice real situations",
    icon: "tools",
  },
];

function LearnPageInner() {
  const [selectedFestival, setSelectedFestival] = useState<string | null>(null);
  const currentStep = selectedFestival ? 2 : 1;

  const handleStart = () => {
    if (selectedFestival) {
      window.location.href = `/en/festival/${selectedFestival}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      {/* Header */}
      <header className="border-b bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/en"
            className="text-lg font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">🏮</span>
            <span>NihaoHolidays</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-rose-500" />5 minutes to start
              learning
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            {learningSteps.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    currentStep > index
                      ? "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300"
                      : currentStep === index
                        ? "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300"
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
                  <span className="hidden sm:inline">{item.title}</span>
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
            <div className="inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span
                className={cn(
                  "w-2 h-2 rounded-full bg-rose-500",
                  currentStep === 1 && "animate-pulse",
                )}
              />
              {currentStep === 1
                ? "Choose a festival to start"
                : "Ready to learn!"}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {currentStep === 1
                ? "Start your learning journey"
                : `Learning ${festivals.find((f) => f.id === selectedFestival)?.name}`}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {currentStep === 1
                ? "Select a festival to explore Chinese traditions, learn practical expressions, and discover holiday customs."
                : "Click 'Start Learning Now' to begin your personalized learning experience."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {festivals.map((festival) => {
              const isSelected = selectedFestival === festival.id;

              return (
                <button
                  key={festival.id}
                  type="button"
                  onClick={() => setSelectedFestival(festival.id)}
                  className={cn(
                    "relative p-5 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md",
                    isSelected
                      ? "border-rose-500 bg-rose-50/50 dark:bg-rose-900/20 shadow-md"
                      : "border-border bg-background hover:border-rose-200 dark:hover:border-rose-800",
                  )}
                >
                  {isSelected && (
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{festival.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {festival.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {festival.subtitle}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {festival.tools} tools
                        </span>
                        <span
                          className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            festival.difficulty === "Beginner"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
                          )}
                        >
                          {festival.difficulty}
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
              <div className="bg-gradient-to-r from-rose-100/80 to-orange-100/80 dark:from-rose-900/30 dark:to-orange-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-rose-700 dark:text-rose-300 mb-4">
                    <Sparkles className="h-4 w-4" />
                    Ready to start learning!
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Learning{" "}
                    {festivals.find((f) => f.id === selectedFestival)?.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    You&apos;ll get personalized expressions, practical
                    scenarios, and interactive tools.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    onClick={handleStart}
                    className="flex-1 bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20"
                  >
                    Start Learning Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1"
                  >
                    <Link href={`/en/festival/${selectedFestival}`}>
                      View Festival Details
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
            <h2 className="text-2xl font-bold text-foreground mb-3">
              What you&apos;ll learn
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive learning experience for every festival
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                Expressions
              </h3>
              <p className="text-sm text-muted-foreground">
                Phrases with pinyin and audio
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🍜</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Food Guide</h3>
              <p className="text-sm text-muted-foreground">
                Dishes and ordering phrases
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Etiquette</h3>
              <p className="text-sm text-muted-foreground">
                Gifts and taboos guide
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Practice</h3>
              <p className="text-sm text-muted-foreground">
                Interactive scenarios
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            No account needed • No registration • Start learning immediately
          </p>
        </div>
      </footer>
    </div>
  );
}

function LearnPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <header className="border-b bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">🏮</span>
            <span>NihaoHolidays</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded-full w-64 mx-auto mb-8" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-40 bg-muted rounded-xl" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export function LearnPageContent() {
  return (
    <Suspense fallback={<LearnPageSkeleton />}>
      <LearnPageInner />
    </Suspense>
  );
}
