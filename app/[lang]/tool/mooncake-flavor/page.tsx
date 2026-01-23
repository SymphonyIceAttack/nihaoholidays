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
    title: "Mooncake Flavors - NihaoHolidays",
    description: "Explore traditional and modern mooncake flavors",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/mooncake-flavor`,
      languages: generateHreflangLinks("/tool/mooncake-flavor"),
    },
  };
}

export default async function MooncakeFlavorPage({
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
            href={`/${lang}/festival/mid-autumn`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Mid-Autumn Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥮</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Mooncake Flavor Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From traditional lotus paste to modern innovations, discover the
              diverse world of mooncake flavors.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Traditional Classics
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">
                    🥄 Lotus Paste with Double Yolk
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The most prestigious traditional flavor. Sweet lotus seed
                    paste with two salted egg yolks representing the full moon.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥜 Red Bean Paste</h3>
                  <p className="text-sm text-muted-foreground">
                    Sweet red bean paste, smooth and slightly sweet with
                    traditional significance of completeness.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥚 Five Kernel (Wuren)</h3>
                  <p className="text-sm text-muted-foreground">
                    Five types of nuts and seeds: pumpkin, watermelon, peanuts,
                    sesame, and almonds.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🫘 White Lotus Paste</h3>
                  <p className="text-sm text-muted-foreground">
                    Lighter, milder flavor than traditional lotus paste, elegant
                    and refined.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Snow Skin Varieties
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🧀 Durian</h3>
                  <p className="text-sm text-muted-foreground">
                    Rich, creamy durian filling encased in soft snow skin. Love
                    it or hate it!
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🍫 Chocolate</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern fusion flavor loved by younger generations.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🍓 Fruit Assortment</h3>
                  <p className="text-sm text-muted-foreground">
                    Various fruit flavors like strawberry, mango, and lychee in
                    snow skin.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🧁 Matcha</h3>
                  <p className="text-sm text-muted-foreground">
                    Japanese-inspired green tea flavor with earthy notes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Regional Specialties
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Cantonese:</strong> Rich, sweet, with lotus paste
                  and salted eggs
                </li>
                <li>
                  • <strong>Su-style:</strong> Soft, delicate, with thin crust
                </li>
                <li>
                  • <strong>Beijing:</strong> Larger, with various fillings
                </li>
                <li>
                  • <strong>Yunnan's Ham:</strong> Savory-sweet with ham filling
                </li>
                <li>
                  • <strong>Teochew:</strong> Unique crust texture with internal
                  soft filling
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Flavor Pairing Tips
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Traditional mooncakes pair best with pu-erh tea</li>
                <li>• Sweet fillings go well with oolong or jasmine tea</li>
                <li>• Snow skin mooncakes pair with green tea</li>
                <li>• Chocolate mooncakes pair with black tea</li>
                <li>• Serve at room temperature for best flavor</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Tasting Tips</h2>
            <p className="text-muted-foreground">
              Slice traditional mooncakes into wedges and share with family.
              Savor each bite slowly with tea. Traditional mooncakes are rich,
              so a little goes a long way!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
