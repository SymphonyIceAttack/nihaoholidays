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
    title: "Dragon Boat Culture - NihaoHolidays",
    description: "Explore the rich cultural traditions of Dragon Boat Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/dragon-boat-culture`,
      languages: generateHreflangLinks("/tool/dragon-boat-culture"),
    },
  };
}

export default async function DragonBoatCulturePage({
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
            href={`/${lang}/festival/dragon-boat`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dragon Boat Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🐉🚣</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Dragon Boat Culture
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover the history, traditions, and cultural significance of
              Dragon Boat Festival.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Historical Origins</h2>
              <p className="text-muted-foreground mb-4">
                Dragon Boat Festival, also known as Duanwu Festival, is
                celebrated on the 5th day of the 5th lunar month. It
                commemorates the poet Qu Yuan (340-278 BC) who drowned himself
                in protest against corruption.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Originates from ancient China over 2,000 years ago</li>
                <li>
                  • People raced boats to find and save Qu Yuan&apos;s body
                </li>
                <li>
                  • Threw rice dumplings into the river to prevent fish from
                  eating his body
                </li>
                <li>• Now a UNESCO Intangible Cultural Heritage event</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Dragon Boat Racing</h2>
              <p className="text-muted-foreground mb-4">
                The highlight of the festival is the exciting dragon boat races.
                Teams paddle in unison, creating a spectacular display of
                teamwork and skill.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Boats are shaped and decorated like dragons</li>
                <li>• Typically 20 meters long with 20+ paddlers</li>
                <li>• A drummer sets the rhythm for the team</li>
                <li>• A steer at the back guides the boat</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Traditional Customs
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Eating Zongzi</h3>
                  <p className="text-sm text-muted-foreground">
                    Glutinous rice wrapped in bamboo leaves, tied with string.
                    Various fillings: meat, beans, eggs, dates, sweet fillings.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Hanging Traditional Items
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calamus, mugwort, garlic, and realgar to ward off evil
                    spirits and disease.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Wearing Five-Color Thread
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Red, yellow, white, black, and blue threads tied on wrists
                    for protection.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Drinking Realgar Wine</h3>
                  <p className="text-sm text-muted-foreground">
                    Yellow wine infused with realgar, believed to dispel toxins
                    and pests.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Regional Variations
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Northern China:</strong> Focus on dragon boat racing
                  in major rivers
                </li>
                <li>
                  • <strong>Southern China:</strong> More elaborate customs and
                  larger races
                </li>
                <li>
                  • <strong>Hong Kong:</strong> International dragon boat
                  competitions
                </li>
                <li>
                  • <strong>Taiwan:</strong> Night dragon boat races with
                  lanterns
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Global Celebration</h2>
            <p className="text-muted-foreground">
              Today, Dragon Boat Festival is celebrated worldwide, from the
              United States to Australia, promoting cultural exchange and
              international friendship through the spirit of teamwork and
              competition.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
