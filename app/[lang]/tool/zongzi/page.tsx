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
    title: "Zongzi Guide - NihaoHolidays",
    description: "Everything about Dragon Boat Festival rice dumplings",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/zongzi`,
      languages: generateHreflangLinks("/tool/zongzi"),
    },
  };
}

export default async function ZongziPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  const styles = [
    {
      region: "Northern China",
      style: "Sweet & Simple",
      filling: "Red bean, dates, or plain",
      emoji: "🍚",
    },
    {
      region: "Guangdong",
      style: "Rich & Complex",
      filling: "Pork, egg yolk, mushrooms, shrimp",
      emoji: "🥢",
    },
    {
      region: "Zhejiang",
      style: "Huzhou Style",
      filling: "Fresh pork, bold flavor",
      emoji: "🍲",
    },
    {
      region: "Taiwan",
      style: "Large & Bold",
      filling: "Chestnuts, multiple fillings",
      emoji: "🏮",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/dragonboat`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dragon Boat Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🍙</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Zongzi Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pyramidal rice dumplings wrapped in bamboo leaves, honoring the
              poet Qu Yuan.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4">Regional Styles</h2>
            <div className="grid gap-4">
              {styles.map((s, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl"
                >
                  <span className="text-3xl">{s.emoji}</span>
                  <div>
                    <h3 className="font-medium">
                      {s.region} - {s.style}
                    </h3>
                    <p className="text-sm text-muted-foreground">{s.filling}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">How to Order</h2>
              <p className="text-muted-foreground mb-4">
                &quot;Wǒ yào zòngzi&quot; (我要粽子) - I want zongzi
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • &quot;Yǒu shénme kǒuwèi de?&quot; - What flavors do you
                  have?
                </li>
                <li>• &quot;Lái yí gè ròu de&quot; - Bring one with meat</li>
                <li>• &quot;Duōshao qián yí gè?&quot; - How much for one?</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Tips</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Best steamed or boiled for 1-2 hours</li>
                <li>• Dip in sugar or honey for sweet varieties</li>
                <li>• Fresh bamboo leaves have best aroma</li>
                <li>• Store in refrigerator for up to a week</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
