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
    title: "Spring Pancake Recipe - NihaoHolidays",
    description: "Traditional spring pancake recipe for Dragon Head Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/spring-pancake`,
      languages: generateHreflangLinks("/tool/spring-pancake"),
    },
  };
}

export default async function SpringPancakePage({
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
            href={`/${lang}/festival/dragon-head`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dragon Head Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥞</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Spring Pancake Recipe
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional thin pancakes rolled with fresh vegetables, a symbol
              of spring renewal.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">For Pancakes:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 300g all-purpose flour</li>
                    <li>• 200ml boiling water</li>
                    <li>• 1 tbsp vegetable oil</li>
                    <li>• Pinch of salt</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">For Fillings:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 200g shredded pork (optional)</li>
                    <li>• 100g bean sprouts</li>
                    <li>• 50g spring onions, sliced</li>
                    <li>• 100g cucumber, julienned</li>
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
                    Sift flour into a large bowl, add salt. Gradually pour in
                    boiling water while stirring with chopsticks.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    2
                  </span>
                  <span>
                    Knead the dough for 10 minutes until smooth. Cover and rest
                    for 30 minutes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    3
                  </span>
                  <span>
                    Divide dough into small balls (about 30g each). Roll each
                    into thin circles.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    4
                  </span>
                  <span>
                    Heat a dry pan over medium heat. Cook each pancake for 30
                    seconds per side until bubbles form.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-medium">
                    5
                  </span>
                  <span>
                    Fill with vegetables and meat, roll up, and enjoy with soy
                    sauce or sweet bean sauce!
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Cultural Meaning</h2>
              <p className="text-muted-foreground mb-4">
                Spring pancakes symbolize the renewal of spring and the
                awakening of nature. The thin, flexible pancakes represent the
                flexibility and adaptability needed for the year ahead.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Rolling up fillings represents gathering blessings</li>
                <li>• Eating together promotes family harmony</li>
                <li>• Fresh vegetables symbolize growth and renewal</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Tips for Success</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Use boiling water for softer, more pliable dough</li>
                <li>• Rest the dough to make rolling easier</li>
                <li>• Keep cooked pancakes covered with a damp cloth</li>
                <li>• Serve immediately for best texture</li>
                <li>
                  • Prep vegetables in advance for quick assembly
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Spring Blessings</h2>
            <p className="text-muted-foreground">
              Making spring pancakes together as a family is a cherished
              tradition. May your year be as fresh and promising as these
              spring pancakes!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
