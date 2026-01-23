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
    title: "Laba Garlic Guide - NihaoHolidays",
    description:
      "Learn how to make traditional Laba garlic (腊八蒜) for Laba Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/laba-garlic`,
      languages: generateHreflangLinks("/tool/laba-garlic"),
    },
  };
}

export default async function LabaGarlicPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/laba`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Laba Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🧄</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Laba Garlic Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional Laba Garlic (腊八蒜) is pickled garlic that turns
              green during Laba Festival. It&apos;s the perfect companion to
              Laba porridge.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                What is Laba Garlic?
              </h2>
              <p className="text-muted-foreground mb-4">
                Laba garlic is a traditional Chinese pickle made during the Laba
                Festival. The garlic turns bright green when pickled, which
                might look unusual but is completely safe and delicious.
              </p>
              <p className="text-muted-foreground">
                The green color comes from allicin, a compound released when
                garlic is exposed to acid. This natural reaction has made laba
                garlic a beloved festival tradition.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span>🧄</span>
                  <span>Fresh garlic bulbs - 10-12 heads</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🍚</span>
                  <span>Rice vinegar - 1 cup</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🧂</span>
                  <span>Salt - 1 tablespoon</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🍬</span>
                  <span>Sugar - 2 tablespoons (optional)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 font-medium">
                    1
                  </span>
                  <span>
                    Peel the garlic cloves and rinse them thoroughly. Make sure
                    they are completely dry.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 font-medium">
                    2
                  </span>
                  <span>
                    Place garlic in a clean, sterilized glass jar with a
                    tight-fitting lid.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 font-medium">
                    3
                  </span>
                  <span>
                    Heat rice vinegar until warm (not hot), then dissolve salt
                    and sugar in it.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 font-medium">
                    4
                  </span>
                  <span>
                    Pour the warm vinegar mixture over the garlic, making sure
                    all cloves are submerged.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 font-medium">
                    5
                  </span>
                  <span>
                    Seal the jar and store in a cool, dark place for 7-10 days.
                    The garlic will turn green!
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Tips</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use fresh, firm garlic for best results</li>
                <li>
                  • Make sure everything is completely dry to prevent mold
                </li>
                <li>• The garlic is ready when it turns bright green</li>
                <li>• Store in refrigerator after opening</li>
                <li>• Lasts for several months when properly stored</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Serving Suggestions
              </h2>
              <p className="text-muted-foreground mb-4">
                Laba garlic is traditionally served with:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Laba porridge (腊八粥)</li>
                <li>• Rice dumplings (粽子)</li>
                <li>• As a condiment with dumplings</li>
                <li>• With congee for breakfast</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
