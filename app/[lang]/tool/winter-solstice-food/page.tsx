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
    title: "Winter Solstice Food - NihaoHolidays",
    description: "Traditional foods for Winter Solstice across China",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/winter-solstice-food`,
      languages: generateHreflangLinks("/tool/winter-solstice-food"),
    },
  };
}

export default async function WinterSolsticeFoodPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/winter-solstice`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Winter Solstice
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥟❄️</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Winter Solstice Foods
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Regional traditional foods eaten during Winter Solstice across
              China.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Northern Classics</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥟 Dumplings (饺子)</h3>
                  <p className="text-sm text-muted-foreground">
                    Most popular in Northern China. Shape resembles ancient gold
                    ingots, symbolizing wealth. Often filled with meat and
                    vegetables.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🍜 Lamb Hot Pot</h3>
                  <p className="text-sm text-muted-foreground">
                    Warming dish to combat winter cold, traditionally eaten with
                    family.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Southern Traditions
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🍲 Tangyuan (汤圆)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sweet rice balls in sweet soup. Name sounds like
                    &quot;tuanyuan&quot; meaning reunion. Symbolizes family
                    unity.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥮 Nine-Layer Cake</h3>
                  <p className="text-sm text-muted-foreground">
                    Layered cake with different colors representing the nine
                    celestial stems.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🍚 Red Rice Cake</h3>
                  <p className="text-sm text-muted-foreground">
                    Sweet cake made with glutinous rice and red yeast,
                    symbolizing progress.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥢 Noodles</h3>
                  <p className="text-sm text-muted-foreground">
                    Long noodles symbolize longevity. Eaten to wish for long
                    life.
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
                  • <strong>Shanghai:</strong> Tangyuan with various sweet
                  fillings
                </li>
                <li>
                  • <strong>Guangdong:</strong> Tangyuan in sweet ginger soup
                </li>
                <li>
                  • <strong>Fujian:</strong> Omelet with vegetables and meat
                </li>
                <li>
                  • <strong>Zhejiang:</strong> Rice dumplings with red bean
                  paste
                </li>
                <li>
                  • <strong>Sichuan:</strong> Spicy dumplings with sauce
                </li>
                <li>
                  • <strong>Jiangsu:</strong> Sweet rice balls in osmanthus
                  syrup
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Symbolic Meanings</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Dumplings:</strong> Wealth and prosperity
                </li>
                <li>
                  • <strong>Tangyuan:</strong> Family reunion and harmony
                </li>
                <li>
                  • <strong>Noodles:</strong> Longevity and healthy life
                </li>
                <li>
                  • <strong>Red Foods:</strong> Good luck and celebration
                </li>
                <li>
                  • <strong>Round Foods:</strong> Completeness and perfection
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Family Togetherness</h2>
            <p className="text-muted-foreground">
              Winter Solstice is a time for family reunions. No matter which
              food tradition you follow, the most important thing is sharing the
              meal with loved ones and welcoming the return of longer days.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
