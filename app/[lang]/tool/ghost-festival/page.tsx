import { ArrowLeft, Moon } from "lucide-react";
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
    title: "Ghost Festival Guide - NihaoHolidays",
    description: "Understanding Ghost Festival traditions and customs",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/ghost-festival`,
      languages: generateHreflangLinks("/tool/ghost-festival"),
    },
  };
}

export default async function GhostFestivalPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/ghost`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Ghost Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">👻🏮</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Ghost Festival Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Understanding the traditions of honoring ancestors and appeasing
              spirits during the 7th lunar month.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">What is Ghost Festival?</h2>
              <p className="text-muted-foreground mb-4">
                Ghost Festival (中元节) falls on the 15th day of the 7th lunar
                month. It&apos;s believed that the gates of the underworld open
                during this time, allowing spirits to visit the living world.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Honors ancestors and departed family members</li>
                <li>• Shows compassion to hungry ghosts</li>
                <li>• Family members return to receive offerings</li>
                <li>• A time for remembrance and filial piety</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Traditional Customs</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
                  <h3 className="font-medium mb-2">🏮 Offering Food</h3>
                  <p className="text-sm text-muted-foreground">
                    Prepare special dishes for ancestors on a family altar
                  </p>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
                  <h3 className="font-medium mb-2">🪙 Burning Joss Paper</h3>
                  <p className="text-sm text-muted-foreground">
                    Burn paper money for ancestors to use in the afterlife
                  </p>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
                  <h3 className="font-medium mb-2">🕯️ Lighting Lanterns</h3>
                  <p className="text-sm text-muted-foreground">
                    Lanterns guide spirits back home safely
                  </p>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
                  <h3 className="font-medium mb-2">🌸 Releasing Water Lanterns</h3>
                  <p className="text-sm text-muted-foreground">
                    Floating lanterns on rivers for lost spirits
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Food Offerings</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>Fruits:</strong> Oranges, apples, peaches</li>
                <li>• <strong>Rice dishes:</strong> Favorite dishes of ancestors</li>
                <li>• <strong>Dim sum:</strong> Dumplings, buns, pastries</li>
                <li>• <strong>Tea and wine:</strong> For toasting ancestors</li>
                <li>• <strong>Joss paper:</strong> Spirit money folded in offerings</li>
                <li>• <strong>Incense:</strong> To communicate with spirits</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Etiquette Guidelines</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Bow before the altar respectfully</li>
                <li>• Avoid stepping on offerings or burning paper</li>
                <li>• Don&apos;t turn your back to the altar</li>
                <li>• Speak gently and reverently</li>
                <li>• Avoid swimming or water activities (spirits drown)</li>
                <li>• Don&apos;t hang laundry outside at night</li>
                <li>• Avoid whistling or calling names after dark</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Regional Variations</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Hong Kong:</strong> Confucian rituals and opera
                  performances
                </li>
                <li>
                  • <strong>Taiwan:</strong> Water lantern floating on rivers
                </li>
                <li>
                  • <strong>Malaysia/Singapore:</strong> Hungry Ghost Festival
                  month-long events
                </li>
                <li>
                  • <strong>Northern China:</strong> Family ancestor worship at
                  graves
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-slate-100/80 to-gray-100/80 dark:from-slate-800/50 dark:to-gray-800/50 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Honoring Ancestors</h2>
            <p className="text-muted-foreground">
              Ghost Festival teaches us to remember those who came before us.
              Through offerings and respect, we maintain the bond between
              generations and honor the cycle of life and death.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
