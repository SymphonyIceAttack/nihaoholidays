import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

const labaPorridgeInfo = {
  description:
    "Laba porridge (八宝粥) is a traditional rice porridge made with eight or more ingredients. It's eaten on the 8th day of the 12th lunar month to celebrate Laba Festival.",
  history:
    "Laba Festival commemorates Buddha's enlightenment. According to legend, Buddha achieved enlightenment after fasting for 49 days, and his disciples fed him rice porridge. This tradition has been celebrated for over 1,500 years.",
  ingredients: [
    { name: "Rice", chinese: "大米", emoji: "🍚" },
    { name: "Red Beans", chinese: "红豆", emoji: "🔴" },
    { name: "Lotus Seeds", chinese: "莲子", emoji: "🟡" },
    { name: "Dried Longan", chinese: "桂圆", emoji: "🟤" },
    { name: "Walnuts", chinese: "核桃", emoji: "🥜" },
    { name: "Peanuts", chinese: "花生", emoji: "🥜" },
    { name: "Dates", chinese: "红枣", emoji: "🍬" },
    { name: "Goji Berries", chinese: "枸杞", emoji: "🔴" },
  ],
  steps: [
    "Soak all ingredients in water for 2-3 hours",
    "Add rice and ingredients to a pot with water",
    "Bring to boil, then simmer for 1-2 hours",
    "Stir occasionally to prevent sticking",
    "Add rock sugar to taste when porridge is nearly done",
    "Serve warm, optionally with honey or dried fruit",
  ],
  ordering: "Lái yì wǎn là bā zhōu - I want a bowl of laba porridge",
};

export function LabaPorridgeGuidePage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥣</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Laba Porridge Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional Eight Treasure Porridge (八宝粥) for Laba Festival.
              The dish that marks the countdown to Spring Festival.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="p-6 rounded-xl border border-orange-200 dark:border-orange-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">
                What is Laba Porridge?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {labaPorridgeInfo.description}
              </p>
              <h4 className="font-medium text-orange-700 dark:text-orange-300 text-sm mb-2">
                How to Order
              </h4>
              <p className="text-sm text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg">
                {labaPorridgeInfo.ordering}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-orange-200 dark:border-orange-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">History</h3>
              <p className="text-muted-foreground text-sm">
                {labaPorridgeInfo.history}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">
              Traditional Ingredients
            </h3>
            <div className="grid gap-3 md:grid-cols-4">
              {labaPorridgeInfo.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-orange-200 dark:border-orange-800 bg-white/60 dark:bg-zinc-800/60 text-center"
                >
                  <span className="text-2xl block mb-2">
                    {ingredient.emoji}
                  </span>
                  <p className="font-medium text-foreground text-sm">
                    {ingredient.name}
                  </p>
                  <p className="text-xs text-orange-600 dark:text-orange-400">
                    {ingredient.chinese}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">How to Make</h3>
            <div className="space-y-3">
              {labaPorridgeInfo.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-orange-200 dark:border-orange-800 bg-white/60 dark:bg-zinc-800/60"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center font-medium text-sm">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground text-sm pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-100/80 to-amber-100/80 dark:from-orange-900/30 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <span className="text-xl">🏮</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Beginning of Spring Festival
                </h3>
                <p className="text-sm text-muted-foreground">
                  Laba Festival marks the start of the New Year celebration
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              After Laba Festival, families begin intensive preparations for
              Spring Festival: cleaning, buying new clothes, preparing special
              foods, and planning family reunions. The porridge represents
              abundance and blessings for the coming year.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tools
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground"></div>
      </footer>
    </div>
  );
}
