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
    title: "Qixi Date Spots - NihaoHolidays",
    description: "Romantic date spots and activities for Qixi Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/qixi-dates`,
      languages: generateHreflangLinks("/tool/qixi-dates"),
    },
  };
}

export default async function QixiDatesPage({
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
            <span className="text-6xl mb-4 block">🌸💑</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Qixi Date Ideas
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Romantic activities and places to celebrate the Chinese
              Valentine&apos;s Day.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Traditional Activities
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🌙 Watching the Stars</h3>
                  <p className="text-sm text-muted-foreground">
                    Look for Vega and Altair stars, separated by the Milky Way,
                    symbolizing the cowherd and weaver girl.
                  </p>
                </div>
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">
                    🥜 Eating Seven Treasures
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional snack made with seven lucky ingredients for
                    blessings and good fortune.
                  </p>
                </div>
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🧶 String Tying</h3>
                  <p className="text-sm text-muted-foreground">
                    Tying colored strings on bridges or trees symbolizes eternal
                    love and connection.
                  </p>
                </div>
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🌸 Flower Offerings</h3>
                  <p className="text-sm text-muted-foreground">
                    Offering flowers to the Weaver Girl statue for blessings on
                    love and relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Modern Date Ideas</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Romantic dinner at a Chinese restaurant</li>
                <li>• Watching romantic Chinese dramas together</li>
                <li>• Taking photos in traditional hanfu clothing</li>
                <li>• Visiting temples dedicated to love</li>
                <li>• Creating handmade crafts for each other</li>
                <li>• Writing love letters in Chinese</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Romantic Phrases</h2>
              <div className="space-y-3">
                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <p className="font-medium text-foreground">
                    我爱你 (Wǒ ài nǐ) - I love you
                  </p>
                </div>
                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <p className="font-medium text-foreground">
                    一辈子 (Yíbèizi) - Forever / A lifetime
                  </p>
                </div>
                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <p className="font-medium text-foreground">
                    执子之手，与子偕老 (Zhí zǐ zhī shǒu, yǔ zǐ xié lǎo)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Hold your hand and grow old with you
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Gift Ideas</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Roses (symbol of love)</li>
                <li>• Chocolate or sweet treats</li>
                <li>• Jewelry or accessories</li>
                <li>• Handwritten love letters</li>
                <li>• Traditional tea sets</li>
                <li>• Matching couple outfits</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-100/80 to-rose-100/80 dark:from-pink-900/30 dark:to-rose-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">The Love Story</h2>
            <p className="text-muted-foreground">
              Qixi Festival celebrates the legendary love between Niulang
              (Cowherd) and Zhinu (Weaver Girl), who can only meet once a year
              on the 7th day of the 7th lunar month. Their story embodies
              enduring love and the hope of being together.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
