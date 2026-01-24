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
    title: "Qingtuan Recipe - NihaoHolidays",
    description: "Traditional green rice ball recipe for Qingming Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/qingtuan`,
      languages: generateHreflangLinks("/tool/qingtuan"),
    },
  };
}

export default async function QingtuanPage({
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
            href={`/${lang}/festival/qingming`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Qingming Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥬🍡</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Qingtuan Recipe
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional green rice balls made with mugwort leaves, a Qingming
              specialty.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">For Qingtuan Skin:</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 300g glutinous rice flour</li>
                    <li>• 100g fresh mugwort leaves (or 20g powder)</li>
                    <li>• 50g sugar</li>
                    <li>• 200ml water</li>
                    <li>• A pinch of salt</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">
                    For Fillings (choose one):
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Sweet: Red bean paste (150g)</li>
                    <li>• Sweet: Sesame paste (100g)</li>
                    <li>• Savory: Pork and bamboo shoots</li>
                    <li>• Sweet: Peanut paste (100g)</li>
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
                    <strong>Prepare mugwort:</strong> Blanch mugwort leaves in
                    boiling water for 30 seconds. Blend with water to make green
                    juice.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    2
                  </span>
                  <span>
                    <strong>Make dough:</strong> Mix glutinous rice flour with
                    sugar and salt. Add mugwort juice and water to form a soft
                    dough.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    3
                  </span>
                  <span>
                    <strong>Rest dough:</strong> Cover and rest for 30 minutes
                    to develop color and flavor.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    4
                  </span>
                  <span>
                    <strong>Prepare filling:</strong> Divide filling into small
                    balls (about 20g each).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    5
                  </span>
                  <span>
                    <strong>Shape qingtuan:</strong> Take 30g dough, flatten,
                    add filling, and roll into balls.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    6
                  </span>
                  <span>
                    <strong>Steam:</strong> Place on parchment paper. Steam for
                    15-20 minutes until translucent.
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Cultural Meaning</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Green color:</strong> Represents spring and renewal
                </li>
                <li>
                  • <strong>Mugwort:</strong> Traditional medicinal herb for
                  health
                </li>
                <li>
                  • <strong>Rice balls:</strong> Symbolize family togetherness
                </li>
                <li>
                  • <strong>Round shape:</strong> Represents completeness and
                  reunion
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Storage Tips</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Wrap in plastic to prevent drying</li>
                <li>• Store at room temperature for 1-2 days</li>
                <li>• Refrigerate for up to 5 days</li>
                <li>• Steam briefly before serving if stored</li>
                <li>• Do not freeze (texture changes)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Spring Flavors</h2>
            <p className="text-muted-foreground">
              Qingtuan captures the essence of spring in every bite. The
              fragrant mugwort, chewy glutinous rice, and sweet filling
              symbolize the renewal of life and the sweetness of family bonds.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
