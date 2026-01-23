import { ArrowLeft, Wind } from "lucide-react";
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
    title: "Kite Flying Guide - NihaoHolidays",
    description: "Traditional kite flying customs and patterns for spring festivals",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/kite-flying`,
      languages: generateHreflangLinks("/tool/kite-flying"),
    },
  };
}

export default async function KiteFlyingPage({
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
            href={`/${lang}/festival/shangsi`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shangsi Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🪁</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Kite Flying Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The ancient art of kite flying in China, symbolizing the release
              of bad luck and embracing good fortune.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Cultural Significance</h2>
              <p className="text-muted-foreground mb-4">
                Kite flying has been a beloved Chinese tradition for over 2,000
                years. During spring festivals, flying kites symbolizes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Release:</strong> Letting go of misfortune</li>
                <li>• <strong>Connection:</strong> Tethering to heaven and earth</li>
                <li>• <strong>Joy:</strong> Celebrating the arrival of spring</li>
                <li>• <strong>Wisdom:</strong> The kite rises on the wind like wisdom
                  rising with knowledge</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Traditional Kite Designs</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🐉 Dragon Kites</h3>
                  <p className="text-sm text-muted-foreground">
                    Long, segmented kites representing the dragon, symbol of
                    power and good fortune
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🦅 Bird Kites</h3>
                  <p className="text-sm text-muted-foreground">
                    Mimicking various birds, symbolizing freedom and harmony
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🎴 Geometric Kites</h3>
                  <p className="text-sm text-muted-foreground">
                    Diamond and butterfly shapes, classic and elegant
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🎭 Character Kites</h3>
                  <p className="text-sm text-muted-foreground">
                    Kites with Chinese characters for blessings and wishes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Best Times to Fly</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>Afternoon:</strong> 2-5 PM when thermals are strongest</li>
                <li>• <strong>Spring breeze:</strong> Gentle winds of 5-15 mph</li>
                <li>• <strong>Open spaces:</strong> Parks, fields, beaches</li>
                <li>• <strong>After rain:</strong> Clean, fresh air helps flight</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">How to Fly a Kite</h2>
              <ol className="space-y-3 text-muted-foreground">
                <li>1. Find an open area with steady wind</li>
                <li>2. Unwind the string and hold the kite upwind</li>
                <li>3. When a gust comes, release the kite while pulling the
                  string
                </li>
                <li>4. Let out string gradually as the kite rises</li>
                <li>5. Adjust angle and tension to stabilize flight</li>
                <li>6. Enjoy the flight - the string connects heaven and earth</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Traditional Sayings</h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="font-medium text-foreground">
                    放风筝 (Fàng fēngzheng)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Flying a kite
                  </p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="font-medium text-foreground">
                    放走晦气，迎来好运
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Release the bad luck, welcome good fortune
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Soar with Blessings</h2>
            <p className="text-muted-foreground">
              As your kite rises higher, imagine your wishes and hopes soaring
              to the heavens. The kite carries your blessings into the sky,
              where they will be received and fulfilled.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
