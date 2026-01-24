"use client";

import {
  ArrowLeft,
  Calendar,
  Clock,
  Heart,
  Users,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { festivals, foodDataList } from "@/lib/food";
import type { LanguageType } from "@/lib/translations/config";
import { cn } from "@/lib/utils";

export function FoodPageContent({ lang = "en" }: { lang?: LanguageType } = {}) {
  const router = useRouter();
  const [selectedFestival, setSelectedFestival] = useState<string | null>(null);
  const filteredFoods = selectedFestival
    ? foodDataList.filter((food) => food.festivalKey === selectedFestival)
    : foodDataList;

  return (
    <div className="min-h-screen aurora-bg">
      <main className="container relative mx-auto px-4 py-8">
        {/* Decorative aurora effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-aurora-1 rounded-full blur-3xl animate-aurora" />
          <div
            className="absolute top-40 right-1/4 w-72 h-72 bg-aurora-2 rounded-full blur-3xl animate-aurora"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 aurora-card text-orange-700 dark:text-orange-300 px-4 py-1.5 text-sm font-medium mb-4">
              <Utensils className="h-4 w-4" />
              Holiday Foods Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
              Experience Chinese Culture Through Taste
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every holiday dish has a story. Learn the names, understand what
              they mean, know how to order, and where these traditions come
              from.
            </p>
          </div>

          {/* Festival Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setSelectedFestival(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                !selectedFestival
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20 hover-glow"
                  : "bg-muted text-muted-foreground hover:bg-rose-100 dark:hover:bg-rose-900/30",
              )}
            >
              All Foods
            </button>
            {festivals.map((festival) => (
              <button
                key={festival.key}
                type="button"
                onClick={() => setSelectedFestival(festival.key)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5",
                  selectedFestival === festival.key
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20 hover-glow"
                    : "bg-muted text-muted-foreground hover:bg-rose-100 dark:hover:bg-rose-900/30",
                )}
              >
                <span>{festival.emoji}</span>
                <span className="hidden sm:inline">{festival.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredFoods.map((food) => (
            <Link
              key={food.id}
              href={`/${lang}/food/${food.id}`}
              className="group relative overflow-hidden aurora-card cursor-pointer hover-glow transition-all duration-300 hover:-translate-y-1 block"
            >
              {/* Header with color gradient */}
              <div
                className={`relative bg-gradient-to-br ${food.color} p-6 text-white`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <span className="text-4xl mb-2 block">{food.emoji}</span>
                    <h3 className="text-2xl font-bold">{food.name}</h3>
                    <p className="text-white/90 text-sm">{food.pinyin}</p>
                  </div>
                  <div className="flex gap-1 flex-wrap justify-end max-w-[100px]">
                    {food.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs bg-white/20 backdrop-blur-sm whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-rose-600 dark:text-rose-400">
                    {food.english}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <button
                    type="button"
                    onClick={() =>
                      router.push(`/${lang}/festival/${food.festivalKey}`)
                    }
                    className="text-sm text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {food.festival}
                    <ArrowLeft className="h-3 w-3 rotate-180" />
                  </button>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {food.description}
                </p>

                {/* Quick info grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="truncate">
                      When: {food.when.slice(0, 25)}...
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    <span className="truncate">
                      With: {food.withWhom.split(",")[0]}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                  {food.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="aurora-card p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20 transition-transform group-hover:scale-105">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Ready to Celebrate?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore full festival guides and tools for every occasion
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/${lang}/learn`}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 hover-glow transition-all duration-300 shadow-lg shadow-rose-600/20"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Explore Festivals
                </Link>
                <Link
                  href={`/${lang}/tool`}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-rose-200 dark:border-rose-800 font-medium hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                >
                  <Utensils className="h-4 w-4 mr-2" />
                  Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>NihaoHolidays - Learn Chinese holiday traditions</p>
        </div>
      </footer>
    </div>
  );
}
