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
    title: "Offering Etiquette - NihaoHolidays",
    description: "Traditional offering etiquette for ancestor worship",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/offering-etiquette`,
      languages: generateHreflangLinks("/tool/offering-etiquette"),
    },
  };
}

export default async function OfferingEtiquettePage({
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
            href={`/${lang}/festival/ghost`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Ghost Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🙏🪷</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Offering Etiquette
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Proper customs for making offerings to ancestors and spirits.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Preparing the Altar</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Clean the altar:</strong> Wipe dust and prepare
                  fresh cloth
                </li>
                <li>
                  • <strong>Arrange offerings:</strong> Food, fruits, and drinks
                  in proper order
                </li>
                <li>
                  • <strong>Set incense holder:</strong> Place three incense
                  sticks ready
                </li>
                <li>
                  • <strong>Prepare joss paper:</strong> Stack neatly for burning
                </li>
                <li>
                  • <strong>Lighting:</strong> Candles on both sides of the altar
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Offering Order</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-medium">
                    1
                  </span>
                  <div>
                    <h3 className="font-medium">Light the incense</h3>
                    <p className="text-sm text-muted-foreground">
                      Light three sticks and place in incense holder with two
                      hands
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-medium">
                    2
                  </span>
                  <div>
                    <h3 className="font-medium">Bow three times</h3>
                    <p className="text-sm text-muted-foreground">
                      Bow respectfully with hands together in front of chest
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-medium">
                    3
                  </span>
                  <div>
                    <h3 className="font-medium">Call ancestors</h3>
                    <p className="text-sm text-muted-foreground">
                      Silently invite ancestors to receive offerings
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-medium">
                    4
                  </span>
                  <div>
                    <h3 className="font-medium">Let ancestors enjoy</h3>
                    <p className="text-sm text-muted-foreground">
                      Wait 10-15 minutes for spirits to consume essence
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-medium">
                    5
                  </span>
                  <div>
                    <h3 className="font-medium">Burn joss paper</h3>
                    <p className="text-sm text-muted-foreground">
                      Burn paper money and offerings safely
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Proper Attitude</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Approach with sincere heart and quiet mind</li>
                <li>• Wear clean, modest clothing</li>
                <li>• Remove hats and sunglasses</li>
                <li>• Speak softly and respectfully</li>
                <li>• Avoid laughing or casual behavior</li>
                <li>• Focus on gratitude and remembrance</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">What to Avoid</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Touching offerings with bare hands (use utensils)</li>
                <li>• Pointing feet toward the altar or ancestors</li>
                <li>• Eating before completing offerings</li>
                <li>• Distracted or impatient behavior</li>
                <li>• Leaving offerings unattended for too long</li>
                <li>• Burning paper near flammable objects</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Sincere Remembrance</h2>
            <p className="text-muted-foreground">
              The most important part of offering etiquette is not the ritual
              itself, but the sincere heart behind it. True respect comes from
              love and gratitude toward our ancestors.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
