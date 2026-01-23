import { ArrowLeft, Utensils } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

export function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: "Seven-Vegetable Porridge - NihaoHolidays",
    description: "Traditional seven-vegetable porridge recipe for Human Day",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/seven-vegetable-porridge`,
      languages: generateHreflangLinks("/tool/seven-vegetable-porridge"),
    },
  };
}

export default async function SevenVegetablePorridgePage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/human-day`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Human Day
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥗🥣</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Seven-Vegetable Porridge
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A traditional dish for Human Day, symbolizing health and good
              fortune.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">The Seven Vegetables:</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 100g Chinese cabbage (白菜)</li>
                    <li>• 50g celery (芹菜)</li>
                    <li>• 50g spinach (菠菜)</li>
                    <li>• 50g shepherd&apos;s purse (荠菜)</li>
                    <li>• 30g leeks (韭菜)</li>
                    <li>• 50g carrots (胡萝卜)</li>
                    <li>• 50g taro (芋头)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Base:</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 100g rice</li>
                    <li>• 1L water or stock</li>
                    <li>• Salt to taste</li>
                    <li>• Optional: dried shrimp</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    1
                  </span>
                  <span>
                    Rinse rice and add water. Bring to a boil, then reduce to
                    simmer for 20 minutes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    2
                  </span>
                  <span>
                    Prepare vegetables: wash, chop into small pieces. Harder
                    vegetables (carrots, taro) cook longer.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    3
                  </span>
                  <span>
                    Add carrots and taro first (10 minutes before done)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    4
                  </span>
                  <span>
                    Add remaining vegetables in order of cooking time
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    5
                  </span>
                  <span>
                    Season with salt. Serve hot with preserved vegetables if
                    desired.
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Symbolic Meaning</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>Clean start:</strong> Eating vegetables purifies the
                  body after rich holiday foods</li>
                <li>• <strong>Health:</strong> Seven vegetables for seven blessings</li>
                <li>• <strong>Balance:</strong> Different colors represent
                  balance and harmony</li>
                <li>• <strong>Humility:</strong> Simple food reminds us to stay
                  grounded</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Regional Variations</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Northern China:</strong> Often includes dumplings in
                  the porridge
                </li>
                <li>
                  • <strong>Southern China:</strong> Seven-vegetable congee with
                  preserved pork
                </li>
                <li>
                  • <strong>Taiwan:</strong> Often served with oil fried dough
                  sticks
                </li>
                <li>
                  • <strong>Modern versions:</strong> Can use any seven vegetables
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Fresh Beginnings</h2>
            <p className="text-muted-foreground">
              After days of rich celebration, this simple, nourishing porridge
              reminds us of the beauty in simplicity and the importance of
              health for the year ahead.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
