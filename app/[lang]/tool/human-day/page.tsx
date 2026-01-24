import { ArrowLeft, Sparkles } from "lucide-react";
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
    title: "Human Day Guide - NihaoHolidays",
    description: "Celebrating Human Day and the creation of humanity",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/human-day`,
      languages: generateHreflangLinks("/tool/human-day"),
    },
  };
}

export default async function HumanDayPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-background to-background">
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
            <span className="text-6xl mb-4 block">👤🎂</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Human Day Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Celebrating the creation of humanity by goddess Nüwa and making
              wishes for the year ahead.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                The Legend of Human Day
              </h2>
              <p className="text-muted-foreground mb-4">
                Human Day (人日) is celebrated on the 7th day of the first lunar
                month. According to legend, the goddess Nüwa (女娲) created
                humanity on this day:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Day 1: Rooster</li>
                <li>• Day 2: Dog</li>
                <li>• Day 3: Pig</li>
                <li>• Day 4: Sheep</li>
                <li>• Day 5: Cow</li>
                <li>• Day 6: Horse</li>
                <li>• Day 7: Human - &quot;Human Day&quot;</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Traditional Customs
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">
                    🍜 Seven-Vegetable Porridge
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Eating seven-vegetable porridge for health and blessings
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🎂 Birthday Noodles</h3>
                  <p className="text-sm text-muted-foreground">
                    Long noodles symbolize longevity and a long life
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🌺 Wearing Flowers</h3>
                  <p className="text-sm text-muted-foreground">
                    People wear blossoms to celebrate being human
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">📿 Counting People</h3>
                  <p className="text-sm text-muted-foreground">
                    Ancient custom of counting people on this day
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Making Wishes</h2>
              <p className="text-muted-foreground mb-4">
                Human Day is considered especially auspicious for making wishes
                because:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• It celebrates the creation and value of human life</li>
                <li>• Energy is at its peak after the New Year celebrations</li>
                <li>• Setting intentions on this day brings blessings</li>
                <li>• The number 7 is considered lucky in Chinese culture</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Ways to Celebrate</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Eat seven-vegetable porridge for health</li>
                <li>• Have a birthday meal with family</li>
                <li>• Make wishes for the year ahead</li>
                <li>• Wear fresh flowers or flower-themed clothing</li>
                <li>• Reflect on personal growth and goals</li>
                <li>• Spend time with loved ones</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-100/80 to-pink-100/80 dark:from-purple-900/30 dark:to-pink-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Celebrating Humanity</h2>
            <p className="text-muted-foreground">
              Human Day reminds us of our shared humanity and the value of each
              life. May your year be filled with health, happiness, and the
              fulfillment of your dreams.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
