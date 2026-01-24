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
    title: "Wealth Expressions - NihaoHolidays",
    description: "Traditional Chinese phrases about wealth and prosperity",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/wealth-expressions`,
      languages: generateHreflangLinks("/tool/wealth-expressions"),
    },
  };
}

export default async function WealthExpressionsPage({
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
            href={`/${lang}/festival/wealth_god`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to God of Wealth Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">💰📖</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Wealth Expressions
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Essential Chinese phrases and expressions related to wealth,
              prosperity, and financial success.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Basic Wealth Terms</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    财富
                  </p>
                  <p className="text-sm text-muted-foreground">
                    cái fù - Wealth
                  </p>
                </div>
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    金钱
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jīn qián - Money
                  </p>
                </div>
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    财运
                  </p>
                  <p className="text-sm text-muted-foreground">
                    cái yùn - Financial luck
                  </p>
                </div>
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    发财
                  </p>
                  <p className="text-sm text-muted-foreground">
                    fā cái - To get rich
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Prosperity Phrases</h2>
              <div className="space-y-4">
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    财源广进
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    cái yuán guǎng jìn
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    &quot;May your sources of wealth be abundant!&quot;
                  </p>
                </div>
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    金玉满堂
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    jīn yù mǎn táng
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    &quot;May your house be filled with gold and jade!&quot;
                  </p>
                </div>
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    步步高升
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    bù bù gāo shēng
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    &quot;May you rise step by step!&quot;
                  </p>
                </div>
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    事事顺心
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    shì shì shùn xīn
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    &quot;May everything go smoothly!&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Business Expressions
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-medium">生意红火</p>
                    <p className="text-sm text-muted-foreground">
                      shēng yì huǒ hóng - &quot;Business is thriving&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <p className="font-medium">利润丰厚</p>
                    <p className="text-sm text-muted-foreground">
                      lì rùn fēng hòu - &quot;Substantial profits&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="font-medium">合作愉快</p>
                    <p className="text-sm text-muted-foreground">
                      hé zuò yú kuài - &quot;Pleasant cooperation&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-medium">鸿图大展</p>
                    <p className="text-sm text-muted-foreground">
                      hóng tú dà zhǎn - &quot;Great ambitions fulfilled&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Idioms About Wealth
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    年年有余
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    nián nián yǒu yú
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    &quot;May you have surplus every year!&quot;
                    <br />
                    (常和鱼的形象一起使用)
                  </p>
                </div>
                <div className="p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-xl">
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-1">
                    五福临门
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    wǔ fú lín mén
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    &quot;May five blessings come to your door!&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                When to Use These Expressions
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• During Chinese New Year greetings</li>
                <li>• Opening a new business</li>
                <li>• Celebrating deals and partnerships</li>
                <li>• Writing New Year&apos;s cards to colleagues</li>
                <li>• During the God of Wealth Festival</li>
                <li>• Wishing someone success in their endeavors</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">True Wealth</h2>
            <p className="text-muted-foreground">
              In Chinese culture, true wealth encompasses not just money, but
              health, family, happiness, and inner peace. May all these
              blessings be yours!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
