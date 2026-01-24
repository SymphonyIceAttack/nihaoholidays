import { ArrowLeft } from "lucide-react";
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
    title: "Wealth God Guide - NihaoHolidays",
    description: "Understanding the traditions of God of Wealth Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/wealth-god`,
      languages: generateHreflangLinks("/tool/wealth-god"),
    },
  };
}

export default async function WealthGodPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/wealth_god`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to God of Wealth Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">💰🏮</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Wealth God Festival Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Celebrating the birthday of the God of Wealth for prosperity and
              success in the new year.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                What is Wealth God Festival?
              </h2>
              <p className="text-muted-foreground mb-4">
                God of Wealth Festival (财神节) celebrates the birthday of the
                Wealth God, typically falling on the 5th day of the first lunar
                month. Businesses and families pray for wealth, prosperity, and
                success throughout the year.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pray for financial success and business prosperity</li>
                <li>• Welcome the Wealth God into homes and businesses</li>
                <li>• Perform rituals for good fortune in the new year</li>
                <li>• A important day for entrepreneurs and merchants</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Traditional Customs
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                  <h3 className="font-medium mb-2">
                    🏮 Welcoming the Wealth God
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Display wealth deity images and offerings to invite
                    prosperity
                  </p>
                </div>
                <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                  <h3 className="font-medium mb-2">🧧 Red Envelopes</h3>
                  <p className="text-sm text-muted-foreground">
                    Give lucky money to attract wealth energy
                  </p>
                </div>
                <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                  <h3 className="font-medium mb-2">🍊 Citrus Fruits</h3>
                  <p className="text-sm text-muted-foreground">
                    Oranges symbolize wealth and good fortune
                  </p>
                </div>
                <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                  <h3 className="font-medium mb-2">🎆 Fireworks</h3>
                  <p className="text-sm text-muted-foreground">
                    Celebrate and attract attention of the Wealth God
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Offerings</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Whole fish:</strong> Represents abundance and
                  surplus
                </li>
                <li>
                  • <strong>Oranges and citrus:</strong> Symbolizes wealth and
                  good luck
                </li>
                <li>
                  • <strong>Whole chicken:</strong> Represents completeness and
                  prosperity
                </li>
                <li>
                  • <strong>Sweet treats:</strong> For a sweet and prosperous
                  year
                </li>
                <li>
                  • <strong>Tea and wine:</strong> To honor the deity
                </li>
                <li>
                  • <strong>Joss paper:</strong> Spirit money for the afterlife
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Etiquette Guidelines
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Clean your home or business thoroughly before the day</li>
                <li>• Display Wealth God images facing the door</li>
                <li>• Offer incense and prayers in the morning</li>
                <li>• Avoid arguments or negative words on this day</li>
                <li>• Don&apos;t break things - it symbolizes losing wealth</li>
                <li>• Avoid borrowing money or lending items</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Regional Variations
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Northern China:</strong> Large-scale temple fairs
                  and performances
                </li>
                <li>
                  • <strong>Southern China:</strong> Focus on business rituals
                  and trade blessings
                </li>
                <li>
                  • <strong>Hong Kong:</strong> Firework displays and street
                  celebrations
                </li>
                <li>
                  • <strong>Taiwan:</strong> Temple ceremonies and community
                  gatherings
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">
              Prosperity and Success
            </h2>
            <p className="text-muted-foreground">
              Wealth God Festival reminds us that true prosperity comes from
              diligence, integrity, and gratitude. May wealth and success find
              your way!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
