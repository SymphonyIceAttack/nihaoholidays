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
    title: "Business Blessings - NihaoHolidays",
    description:
      "Traditional Chinese blessings for business success and prosperity",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/business-blessings`,
      languages: generateHreflangLinks("/tool/business-blessings"),
    },
  };
}

export default async function BusinessBlessingsPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/wealth_god`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to God of Wealth Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">💼🎋</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Business Blessings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional phrases and blessings for business success,
              prosperity, and growth.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Opening Blessings</h2>
              <p className="text-muted-foreground mb-4">
                Phrases to use when opening a new business or starting a new
                venture:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl">
                  <p className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                    生意兴隆
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    shēng yì xīng lóng
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    &quot;May your business flourish and prosper!&quot;
                  </p>
                </div>
                <div className="p-4 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl">
                  <p className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                    开张大吉
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    kāi zhàng dà jí
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    &quot;Grand opening with great luck!&quot;
                  </p>
                </div>
                <div className="p-4 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl">
                  <p className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                    招财进宝
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    zhāo cái jìn bǎo
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    &quot;May wealth and treasures come to you!&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Prosperity Blessings
              </h2>
              <p className="text-muted-foreground mb-4">
                Phrases for wishing continued success and wealth:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl">
                  <p className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                    日进斗金
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    rì jìn dǒu jīn
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    &quot;May you earn a bucket of gold every day!&quot;
                  </p>
                </div>
                <div className="p-4 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl">
                  <p className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                    财源滚滚
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    cái yuán gǔn gǔn
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    &quot;May wealth flow in like rolling waves!&quot;
                  </p>
                </div>
                <div className="p-4 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl">
                  <p className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                    盆满钵满
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    pén mǎn bō mǎn
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    &quot;May your bowl and tray be full!&quot;
                  </p>
                </div>
                <div className="p-4 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl">
                  <p className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                    生意兴隆
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    shēng yì xīng lóng
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    &quot;May your business thrive and grow!&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Long-term Success</h2>
              <p className="text-muted-foreground mb-4">
                Phrases for sustainable business growth:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-medium">长盛不衰</p>
                    <p className="text-sm text-muted-foreground">
                      cháng shèng bù shuāi - &quot;Everlasting prosperity&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <p className="font-medium">蒸蒸日上</p>
                    <p className="text-sm text-muted-foreground">
                      zhēng zhēng rì shàng - &quot;Growing stronger each
                      day&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <p className="font-medium">繁荣昌盛</p>
                    <p className="text-sm text-muted-foreground">
                      fán róng chāng shèng - &quot;Thriving and
                      flourishing&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                When to Use These Blessings
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• During Chinese New Year business gatherings</li>
                <li>• When visiting a business friend or partner</li>
                <li>• Opening ceremonies and grand openings</li>
                <li>• During the God of Wealth Festival</li>
                <li>
                  • When sending New Year&apos;s cards to business contacts
                </li>
                <li>• During temple visits for business success</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-emerald-100/80 to-teal-100/80 dark:from-emerald-900/30 dark:to-teal-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Business Harmony</h2>
            <p className="text-muted-foreground">
              In Chinese culture, success in business is not just about wealth,
              but also about relationships, integrity, and mutual benefit. May
              your business bring prosperity to all!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
