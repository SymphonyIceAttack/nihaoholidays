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
    title: "Mid-Autumn Blessings - NihaoHolidays",
    description: "Traditional blessings and messages for Mid-Autumn Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/mid-autumn-blessings`,
      languages: generateHreflangLinks("/tool/mid-autumn-blessings"),
    },
  };
}

export default async function MidAutumnBlessingsPage({
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
            <span className="text-6xl mb-4 block">🌕🎋</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Mid-Autumn Blessings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional and modern blessings to share with loved ones during
              the Mid-Autumn Festival.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Classic Greetings</h2>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    中秋快乐 (Zhōngqiū kuàilè)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Happy Mid-Autumn Festival
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    阖家团圆 (Hé jiā tuányuán)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Wishing your family unity and happiness
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <p className="font-medium text-foreground mb-1">
                    花好月圆 (Huā hǎo yuè yuán)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Wishing you perfect harmony (flowers bloom, moon is full)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Blessing Messages</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • May the bright moon bring light to your path and happiness
                  to your home
                </li>
                <li>• Wishing you a reunion as sweet as the mooncake</li>
                <li>
                  • May your life be as full and round as the harvest moon
                </li>
                <li>• Blessings of love, health, and prosperity</li>
                <li>• May the moon shine brightly on your dreams</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Poetic Expressions</h2>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <p className="font-medium text-foreground">
                    但愿人长久，千里共婵娟
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Wishing us a long life, sharing the beauty across
                    thousands of miles
                  </p>
                </div>
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <p className="font-medium text-foreground">
                    海上生明月，天涯共此时
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - As the bright moon rises above the sea, we share this
                    moment across the world
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Wishes by Relationship
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Parents:</strong> Health, longevity, and peace
                </li>
                <li>
                  • <strong>Spouse:</strong> Everlasting love and happiness
                </li>
                <li>
                  • <strong>Children:</strong> Growth, wisdom, and success
                </li>
                <li>
                  • <strong>Friends:</strong> prosperity and good fortune
                </li>
                <li>
                  • <strong>Colleagues:</strong> Career advancement and harmony
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">
              The Meaning of Reunion
            </h2>
            <p className="text-muted-foreground">
              Mid-Autumn Festival is a time for family reunions. Even if you
              cannot be together physically, sharing the same moon and sending
              blessings connects hearts across any distance.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
