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
    title: "Chrysanthemum Recipe Collection - NihaoHolidays",
    description: "Traditional chrysanthemum recipes and drinks for festivals",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/chrysanthemum-recipes`,
      languages: generateHreflangLinks("/tool/chrysanthemum-recipes"),
    },
  };
}

export default async function ChrysanthemumRecipesPage({
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
            href={`/${lang}/festival/chongyang`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Double Ninth Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🌼🍵</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Chrysanthemum Recipe Collection
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional chrysanthemum recipes and beverages for health and
              wellness.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Chrysanthemum Tea</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-medium mb-2">Ingredients:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fresh chrysanthemum flowers (10-15)</li>
                    <li>• Hot water (80°C)</li>
                    <li>• Rock sugar or honey (optional)</li>
                    <li>• Goji berries (optional)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Instructions:</h3>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Rinse flowers gently</li>
                    <li>2. Place in teapot</li>
                    <li>3. Pour hot water</li>
                    <li>4. Steep 3-5 minutes</li>
                    <li>5. Sweeten to taste</li>
                  </ol>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Benefits: Clears heat, improves eyesight, calms the mind
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Chrysanthemum Wine</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-medium mb-2">Ingredients:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dried chrysanthemum flowers</li>
                    <li>• Rice wine (500ml)</li>
                    <li>• Rock sugar (50g)</li>
                    <li>• Glass jar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Instructions:</h3>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Place flowers in jar</li>
                    <li>2. Add sugar</li>
                    <li>3. Pour rice wine</li>
                    <li>4. Seal and store 1 month</li>
                    <li>5. Strain before serving</li>
                  </ol>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Traditionally enjoyed during Chongyang Festival for longevity
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Chrysanthemum Congee
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-medium mb-2">Ingredients:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rice (1 cup)</li>
                    <li>• Dried chrysanthemum (handful)</li>
                    <li>• Water (8 cups)</li>
                    <li>• Salt to taste</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Instructions:</h3>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Rinse rice and soak 30 min</li>
                    <li>2. Boil water with chrysanthemum</li>
                    <li>3. Add rice, simmer 40 min</li>
                    <li>4. Season with salt</li>
                    <li>5. Serve warm</li>
                  </ol>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                A nourishing breakfast especially good for eye health
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Cultural Significance
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • Chrysanthemums bloom in autumn, symbolizing resilience
                </li>
                <li>• Associated with longevity and noble character</li>
                <li>
                  • Drinking chrysanthemum tea during Chongyang promotes health
                </li>
                <li>
                  • The flower represents the scholar&apos;s virtue and
                  reclusiveness
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-100/80 to-yellow-100/80 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Autumn Blessings</h2>
            <p className="text-muted-foreground">
              Just as the chrysanthemum blooms when other flowers fade, may you
              find strength and beauty in every season of life.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
