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
    title: "Dragon Foods Guide - NihaoHolidays",
    description: "Traditional foods eaten during Dragon Head Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/dragon-foods`,
      languages: generateHreflangLinks("/tool/dragon-foods"),
    },
  };
}

export default async function DragonFoodsPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/dragon-head`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dragon Head Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🐉🍜</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Dragon Foods Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional foods to eat on Dragon Head Festival for good luck and
              prosperity.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Why Dragon Foods?</h2>
              <p className="text-muted-foreground mb-4">
                Eating dragon-themed or lucky foods on Dragon Head Festival is
                believed to invoke the dragon&apos;s blessings for the year.
                Dragons symbolize power, strength, and good fortune in Chinese
                culture.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Long noodles symbolize longevity and a long life</li>
                <li>• Dumplings represent wealth and treasure</li>
                <li>• Fish dishes signify abundance and surplus</li>
                <li>• Spring pancakes represent renewal and fresh starts</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Traditional Dishes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🍜 Long Noodles</h3>
                  <p className="text-sm text-muted-foreground">
                    Eat long, unbroken noodles for longevity and a long, happy
                    life
                  </p>
                </div>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥟 Dragon Dumplings</h3>
                  <p className="text-sm text-muted-foreground">
                    Dumplings shaped like dragons or with dragon fillings
                  </p>
                </div>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🐟 Whole Fish</h3>
                  <p className="text-sm text-muted-foreground">
                    Served whole for prosperity and abundance in the new year
                  </p>
                </div>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥞 Spring Pancakes</h3>
                  <p className="text-sm text-muted-foreground">
                    Thin pancakes rolled with vegetables for renewal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Food Symbolism</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Long Noodles:</strong> Longevity, continuity of
                  family line
                </li>
                <li>
                  • <strong>Dumplings:</strong> Wealth, treasure, shape like
                  ancient gold ingots
                </li>
                <li>
                  • <strong>Fish (余):</strong> Surplus and abundance (sounds
                  like &quot;surplus&quot;)
                </li>
                <li>
                  • <strong>Oranges:</strong> Good fortune and wealth
                </li>
                <li>
                  • <strong>Tangerines:</strong> Luck and prosperity
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Celebration Tips</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Cook dishes as a family for togetherness</li>
                <li>• Use red decorations to enhance luck</li>
                <li>
                  • Place orange and tangerine on the dining table for
                  prosperity
                </li>
                <li>• Say auspicious phrases while eating</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-rose-100/80 to-pink-100/80 dark:from-rose-900/30 dark:to-pink-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Dragon Blessings</h2>
            <p className="text-muted-foreground">
              By eating these traditional foods, you invite the dragon&apos;s
              power and blessings into your home. May your year be filled with
              strength, prosperity, and good fortune!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
