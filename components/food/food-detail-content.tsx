"use client";

import {
  ArrowLeft,
  Calendar,
  ChefHat,
  Clock,
  Gift,
  Heart,
  History,
  MapPin,
  PartyPopper,
  ShoppingBag,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import type { FoodDetail } from "@/lib/food";
import type { LanguageType } from "@/lib/translations/config";

export function FoodDetailContent({
  food,
  lang = "en",
}: {
  food: FoodDetail;
  lang?: LanguageType;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href={`/${lang}/food`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Foods
          </Link>

          {/* Food Header */}
          <div
            className={`relative bg-gradient-to-br ${food.color} rounded-3xl p-8 text-white mb-8`}
          >
            <div className="absolute inset-0 bg-black/10 rounded-3xl" />
            <div className="relative">
              <Link
                href={`/${lang}/festival/${food.festivalKey}`}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-white/20 hover:bg-white/30 transition-colors mb-4"
              >
                <Calendar className="h-4 w-4" />
                {food.festival}
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-6xl">{food.emoji}</span>
                <div>
                  <h1 className="text-4xl font-bold">{food.name}</h1>
                  <p className="text-white/90 text-xl">{food.pinyin}</p>
                  <p className="text-white/80">{food.english}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {food.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Festival Link Banner */}
          <Link
            href={`/${lang}/festival/${food.festivalKey}`}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 rounded-xl hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Learn more about {food.festival}
                </p>
                <p className="text-sm text-muted-foreground">
                  Discover traditions, greetings, and celebration guides
                </p>
              </div>
            </div>
            <ArrowLeft className="h-5 w-5 rotate-180 text-rose-600" />
          </Link>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              What is {food.name}?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {food.description}
            </p>
          </div>

          {/* Story */}
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <History className="h-5 w-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-foreground">
                The Story Behind {food.name}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {food.story}
            </p>
          </div>

          {/* Meaning */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <h3 className="text-lg font-semibold text-foreground">
                Cultural Meaning
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {food.meaning}
            </p>
          </div>

          {/* History */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-foreground">
                Historical Origins
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {food.history}
            </p>
          </div>

          {/* Regional Variations */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-5 w-5 text-green-500" />
              <h3 className="text-lg font-semibold text-foreground">
                Regional Variations
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {food.regional}
            </p>
          </div>

          {/* When & With Whom */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5 text-rose-600" />
                <h3 className="font-semibold text-foreground">When to Eat</h3>
              </div>
              <p className="text-muted-foreground text-sm">{food.when}</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-foreground">With Whom</h3>
              </div>
              <p className="text-muted-foreground text-sm">{food.withWhom}</p>
            </div>
          </div>

          {/* Pronunciation */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🔊</span>
              <h3 className="font-semibold text-foreground">
                How to Pronounce
              </h3>
            </div>
            <p className="text-muted-foreground">
              <span className="font-mono bg-white dark:bg-zinc-800 px-2 py-1 rounded">
                {food.pinyin}
              </span>
              <span className="ml-3">{food.pronunciation}</span>
            </p>
          </div>

          {/* How to Order */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShoppingBag className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-foreground">
                How to Order
              </h3>
            </div>
            <div className="bg-muted/50 rounded-xl p-5">
              <p className="text-muted-foreground mb-3">{food.ordering}</p>
              <div className="flex flex-wrap gap-2">
                {food.variations.map((variation) => (
                  <span
                    key={variation}
                    className="px-3 py-1.5 rounded-full bg-background border text-sm text-muted-foreground"
                  >
                    {variation}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tips */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ChefHat className="h-5 w-5 text-green-500" />
              <h3 className="text-lg font-semibold text-foreground">
                Tips & Traditions
              </h3>
            </div>
            <ul className="space-y-2">
              {food.tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 text-xs mt-0.5">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Taboos */}
          {food.taboo.length > 0 && (
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <PartyPopper className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold text-foreground">What to Avoid</h3>
              </div>
              <ul className="space-y-2">
                {food.taboo.map((taboo, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 text-xs mt-0.5">
                      !
                    </span>
                    <span>{taboo}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-rose-50 dark:from-orange-900/20 dark:to-rose-900/20 rounded-xl">
            <div className="flex items-center gap-3">
              <Gift className="h-5 w-5 text-orange-600" />
              <span className="text-muted-foreground">
                Related: <span className="font-medium">{food.related}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-rose-100/80 to-orange-100/80 dark:from-rose-900/30 dark:to-orange-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-rose-500" />
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
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors"
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
