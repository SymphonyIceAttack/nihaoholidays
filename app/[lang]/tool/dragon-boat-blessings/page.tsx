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
    title: "Dragon Boat Blessings - NihaoHolidays",
    description: "Traditional blessings and greetings for Dragon Boat Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/dragon-boat-blessings`,
      languages: generateHreflangLinks("/tool/dragon-boat-blessings"),
    },
  };
}

export default async function DragonBoatBlessingsPage({
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
            <span className="text-6xl mb-4 block">🐉</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Dragon Boat Blessings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional blessings and auspicious phrases for Dragon Boat
              Festival.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Festival Greetings</h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    端午安康 (Duānwǔ ānkāng)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Wishing you safety and health during Dragon Boat Festival
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    端午节快乐 (Duānwǔ jié kuàilè)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Happy Dragon Boat Festival
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Blessing Messages</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • May the dragon boat bring you success and good fortune
                </li>
                <li>• Wishing you physical and mental wellness</li>
                <li>• May your life be as vibrant as the dragon boat races</li>
                <li>• Blessings of health and protection from illness</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Traditional Customs
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Hang calamus and mugwort for protection and good luck</li>
                <li>• Wear five-color silk threads for blessings</li>
                <li>• Drink realgar wine (in moderation) for protection</li>
                <li>• Eat zongzi to honor Qu Yuan and pray for good fortune</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Wishes for Different Recipients
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• To elders: Health and longevity</li>
                <li>• To friends: Success and prosperity</li>
                <li>• To children: Growth and happiness</li>
                <li>• To family: Unity and love</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Symbolic Meaning</h2>
            <p className="text-muted-foreground">
              The dragon boat symbolizes the pursuit of excellence and the
              overcoming of obstacles. Share these blessings to spread joy and
              good wishes during this festive season.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
