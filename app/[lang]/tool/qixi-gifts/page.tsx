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
    title: "Qixi Gift Guide - NihaoHolidays",
    description: "Thoughtful gift ideas for Qixi Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/qixi-gifts`,
      languages: generateHreflangLinks("/tool/qixi-gifts"),
    },
  };
}

export default async function QixiGiftsPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/qixi`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Qixi Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🎁💕</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Qixi Gift Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Meaningful gift ideas to express love and appreciation on Chinese
              Valentine&apos;s Day.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Traditional Gifts</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">
                    🥜 Seven Treasures Lunjia
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional snack with seven ingredients, symbolizing good
                    fortune and blessings.
                  </p>
                </div>
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🌸 Fresh Flowers</h3>
                  <p className="text-sm text-muted-foreground">
                    Peonies for wealth, roses for love, lotus for purity.
                  </p>
                </div>
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🍵 Tea Set</h3>
                  <p className="text-sm text-muted-foreground">
                    A beautiful tea set for sharing quality time together.
                  </p>
                </div>
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🧧 Red Envelope</h3>
                  <p className="text-sm text-muted-foreground">
                    Filled with money for blessings of prosperity and luck.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Romantic Gifts</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Jewelry (bracelets, necklaces, rings)</li>
                <li>• Personalized items (photo albums, custom items)</li>
                <li>• Chocolates or gourmet sweets</li>
                <li>• Designer perfumes or skincare sets</li>
                <li>• Matching couple clothing or accessories</li>
                <li>• Handmade crafts or cards</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">DIY Gift Ideas</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Write a love letter in Chinese</li>
                <li>• Cook a special homemade meal</li>
                <li>• Create a scrapbook of memories</li>
                <li>• Make beaded bracelets together</li>
                <li>• Plant a tree or flowers together</li>
                <li>• Compile a playlist of meaningful songs</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Gifting Etiquette</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Present gifts with both hands for respect</li>
                <li>• Wrap gifts in red (color of luck and joy)</li>
                <li>
                  • Avoid white or black wrapping (associated with mourning)
                </li>
                <li>• Give in odd numbers (even numbers are for funerals)</li>
                <li>• Include a thoughtful card or message</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-100/80 to-rose-100/80 dark:from-pink-900/30 dark:to-rose-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">The Thought Counts</h2>
            <p className="text-muted-foreground">
              The most meaningful gifts come from the heart. Whether it&apos;s a
              simple handwritten note or an elaborate surprise, the love and
              effort you put into it is what truly matters on Qixi Festival.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
