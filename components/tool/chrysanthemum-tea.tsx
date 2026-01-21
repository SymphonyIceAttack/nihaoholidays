"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

const chrysanthemumTeas = [
  {
    name: "Juju Tea",
    chinese: "菊花茶",
    pinyin: "Jú huā chá",
    description: "Classic chrysanthemum tea, refreshing and cooling",
    benefits: "Clears heat, benefits eyes, calms the liver",
    brewing: "Use 3-5 dried flowers, steep in hot water for 3-5 minutes",
  },
  {
    name: "Chrysanthemum Goji Tea",
    chinese: "菊花枸杞茶",
    pinyin: "Jú huā gǒu qǐ chá",
    description: "Chrysanthemum with goji berries",
    benefits: "nourishes liver and kidneys, improves vision",
    brewing: "Combine chrysanthemum with goji berries, steep for 5 minutes",
  },
  {
    name: "Honey Chrysanthemum",
    chinese: "蜂蜜菊花茶",
    pinyin: "Fēng mì jú huā chá",
    description: "Chrysanthemum tea with honey",
    benefits: "Soothes throat, natural sweetness",
    brewing: "Add honey after steeping, stir to combine",
  },
  {
    name: "Chrysanthemum Rock Sugar",
    chinese: "冰糖菊花茶",
    pinyin: "Bīng táng jú huā chá",
    description: "Chrysanthemum tea with rock sugar",
    benefits: "Sweetens the tea, benefits the lungs",
    brewing: "Add rock sugar while brewing, let it dissolve",
  },
];

export function ChrysanthemumTeaGuidePage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🌼</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Chrysanthemum Tea Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional Double Ninth Festival tea. Chrysanthemums symbolize
              longevity and health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {chrysanthemumTeas.map((tea, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-zinc-800/60 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🌼</span>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {tea.name}
                    </h3>
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      {tea.chinese} - {tea.pinyin}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{tea.description}</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium text-amber-700 dark:text-amber-300">
                      Benefits:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {tea.benefits}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-amber-700 dark:text-amber-300">
                      Brewing:
                    </span>{" "}
                    <span className="text-muted-foreground">{tea.brewing}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-xl">📝</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Double Ninth Festival Tradition
                </h3>
                <p className="text-sm text-muted-foreground">
                  Drinking chrysanthemum tea during Chongyang
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              On Double Ninth Festival, people traditionally drink chrysanthemum
              wine or tea. The flower blooms in autumn, symbolizing the
              resilience of life and wishes for longevity. It&apos;s also a time
              to appreciate chrysanthemums in full bloom.
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
