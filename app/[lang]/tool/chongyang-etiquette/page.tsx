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
    title: "Chongyang Etiquette - NihaoHolidays",
    description: "Proper etiquette and customs for Double Ninth Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/chongyang-etiquette`,
      languages: generateHreflangLinks("/tool/chongyang-etiquette"),
    },
  };
}

export default async function ChongyangEtiquettePage({
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
            href={`/${lang}/festival/chongyang`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Double Ninth Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🌼🧓</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Chongyang Etiquette
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional customs and respectful behaviors for honoring elders
              on Double Ninth Festival.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Honoring Elders</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • Visit parents and grandparents with gifts and greetings
                </li>
                <li>
                  • Help with household chores or spend quality time together
                </li>
                <li>• Prepare special meals for elderly family members</li>
                <li>
                  • Listen to their stories and show genuine care and respect
                </li>
                <li>• Take photos together to create lasting memories</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Gift Etiquette</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥃 Chrysanthemum Wine</h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional drink for the festival, symbolizing longevity
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🌸 Chrysanthemums</h3>
                  <p className="text-sm text-muted-foreground">
                    Fresh chrysanthemums for health and good fortune
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🍜 Chongyang Cake</h3>
                  <p className="text-sm text-muted-foreground">
                    Layered cake symbolizing progress and advancement
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">👔 Health Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Gifts promoting health and wellness for seniors
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Proper Behavior</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Show respect through attentive listening</li>
                <li>• Address elders with proper titles and honorifics</li>
                <li>• Serve food and drinks to elders first</li>
                <li>• Avoid arguing or disagreeing loudly in their presence</li>
                <li>
                  • Offer help without being asked when seeing difficulties
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Festival Activities
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Go hiking or climbing together (yang activities)</li>
                <li>• Appreciate chrysanthemums in gardens or parks</li>
                <li>• Drink chrysanthemum tea or wine together</li>
                <li>• Fly kites (traditional activity)</li>
                <li>• Eat蟹 and drink wine for health</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-100/80 to-amber-100/80 dark:from-orange-900/30 dark:to-amber-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Traditional Wisdom</h2>
            <p className="text-muted-foreground">
              Chongyang Festival reminds us to cherish our elders while we can.
              The Chinese character &quot;yang&quot; (阳) represents yang energy
              and vitality - spending time with elders brings blessings and good
              fortune.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
