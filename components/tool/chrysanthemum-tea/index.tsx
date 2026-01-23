import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

const chrysanthemumTeas = [
  {
    name: "Juju Tea (菊花茶)",
    chinese: "菊花茶",
    pinyin: "Jú huā chá",
    emoji: "🌼",
    description: "Classic chrysanthemum tea, refreshing and cooling",
    benefits:
      "Clears heat, benefits eyes, calms the liver, reduces inflammation",
    brewing:
      "Use 3-5 dried flowers, steep in hot water (80-90°C) for 3-5 minutes. Can re-steep 2-3 times.",
    origin: "Mainly produced in Hangzhou, China",
  },
  {
    name: "Chrysanthemum Goji Tea",
    chinese: "菊花枸杞茶",
    pinyin: "Jú huā gǒu qǐ chá",
    emoji: "🍵",
    description: "Chrysanthemum combined with goji berries",
    benefits:
      "Nourishes liver and kidneys, improves vision, boosts immunity, anti-aging",
    brewing:
      "Combine chrysanthemum with goji berries (1:1 ratio), steep for 5-7 minutes.",
    origin: "Traditional pairing from traditional Chinese medicine",
  },
  {
    name: "Honey Chrysanthemum",
    chinese: "蜂蜜菊花茶",
    pinyin: "Fēng mì jú huā chá",
    emoji: "🍯",
    description: "Chrysanthemum tea with honey",
    benefits:
      "Soothes throat, natural energy boost, improves skin health, aids digestion",
    brewing:
      "Brew chrysanthemum first, let cool slightly, then add honey to preserve enzymes.",
    origin: "Modern healthy variation",
  },
  {
    name: "Chrysanthemum Rock Sugar",
    chinese: "冰糖菊花茶",
    pinyin: "Bīng táng jú huā chá",
    emoji: "🧊",
    description: "Chrysanthemum tea with rock sugar",
    benefits:
      "Sweetens the tea naturally, benefits the lungs, relieves cough, gentle on stomach",
    brewing:
      "Add rock sugar while brewing, let it dissolve slowly. Best served warm.",
    origin: "Traditional Chinese remedy for sore throats",
  },
  {
    name: "Chrysanthemum Longan",
    chinese: "菊花桂圆茶",
    pinyin: "Jú huā guì yuán chá",
    emoji: "🌺",
    description: "Chrysanthemum with dried longan fruit",
    benefits: "Calms the mind, improves sleep, nourishes blood, reduces stress",
    brewing:
      "Steep chrysanthemum with dried longan for 5-8 minutes. Excellent for evening enjoyment.",
    origin: "Southern Chinese tradition",
  },
  {
    name: "Golden Chrysanthemum",
    chinese: "金丝皇菊",
    pinyin: "Jīn sī huáng jú",
    emoji: "✨",
    description: "Premium large-flowered chrysanthemum",
    benefits:
      "High antioxidant content, supports eye health, promotes relaxation, enhances immunity",
    brewing:
      "One flower per cup, steep in boiling water for 2-4 minutes. Beautiful to watch unfurl.",
    origin: "Jiangxi Province, premium variety",
  },
];

const chrysanthemumInfo = {
  history: [
    "Cultivated in China for over 3,000 years",
    "Mentioned in ancient texts from the Zhou Dynasty",
    "Symbol of nobility and integrity in Chinese culture",
    "Taoist scholars drank it for longevity",
    "Introduced to Japan and Korea through cultural exchange",
  ],
  symbolism: [
    "Represents longevity and rejuvenation",
    "Symbolizes perseverance (blooms in autumn)",
    "Associated with scholarly pursuits",
    "Represents wealth and honor in some contexts",
    "Often featured in Chinese art and poetry",
  ],
  health: [
    "Rich in antioxidants and flavonoids",
    "Natural anti-inflammatory properties",
    "Supports eye health and vision",
    "Aids digestion and gut health",
    "Promotes relaxation and reduces anxiety",
  ],
};

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
              longevity, health, and the resilience of life.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {chrysanthemumTeas.map((tea, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-zinc-800/60 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{tea.emoji}</span>
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
                <p className="text-xs text-amber-500 mb-2">{tea.origin}</p>
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
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                On Double Ninth Festival (重阳节), people traditionally drink
                chrysanthemum wine or tea. The flower blooms in autumn,
                symbolizing the resilience of life and wishes for longevity.
                It&apos;s also a time to appreciate chrysanthemums in full
                bloom.
              </p>
              <p>
                In Chinese culture, chrysanthemums (菊花, jú huā) have been
                cultivated for over 3,000 years. They represent the scholarly
                virtues of integrity and quiet strength, blooming when other
                flowers have faded.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">History</h3>
              <ul className="space-y-2">
                {chrysanthemumInfo.history.map((item, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">Symbolism</h3>
              <ul className="space-y-2">
                {chrysanthemumInfo.symbolism.map((item, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-zinc-800/60">
              <h3 className="font-semibold text-foreground mb-3">
                Health Benefits
              </h3>
              <ul className="space-y-2">
                {chrysanthemumInfo.health.map((item, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/chongyang-blessings`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Explore Chongyang Blessings
              </Link>
            </Button>
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
