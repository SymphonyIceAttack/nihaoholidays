import { ArrowLeft, Sparkles } from "lucide-react";
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
    title: "Haircut Guide - NihaoHolidays",
    description:
      "Traditional haircut customs and lucky styles for Dragon Head Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/haircut`,
      languages: generateHreflangLinks("/tool/haircut"),
    },
  };
}

export default async function HaircutPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/dragon-head`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dragon Head Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">💇</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Haircut Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional Chinese hairstyles and lucky haircut customs for
              prosperity and good fortune.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Why Get a Haircut?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Fresh Start:</strong> A new haircut symbolizes
                  renewing yourself for the new year
                </li>
                <li>
                  • <strong>Lucky Style:</strong> Certain styles are believed to
                  bring good fortune
                </li>
                <li>
                  • <strong>Remove Bad Luck:</strong> Cutting hair removes
                  misfortune from the past year
                </li>
                <li>
                  • <strong>Respect Tradition:</strong> Honoring customs shows
                  cultural appreciation
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Lucky Hairstyles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">✨ Clean & Short</h3>
                  <p className="text-sm text-muted-foreground">
                    Short, neat haircuts represent clarity of mind and
                    efficiency
                  </p>
                </div>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🐉 Dragon Style</h3>
                  <p className="text-sm text-muted-foreground">
                    Styles that evoke dragon energy - bold, confident, powerful
                  </p>
                </div>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🌸 Feminine Waves</h3>
                  <p className="text-sm text-muted-foreground">
                    Soft, flowing styles representing grace and beauty
                  </p>
                </div>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">💇 Fresh Cut</h3>
                  <p className="text-sm text-muted-foreground">
                    Any style you feel confident in boosts your chi positively
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Taboos to Avoid</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Don&apos;t cut hair on the first day of the new year</li>
                <li>• Avoid dyeing hair during mourning periods</li>
                <li>
                  • Don&apos;t have an uneven haircut (represents instability)
                </li>
                <li>
                  • Avoid cutting someone else&apos;s hair unless you&apos;re a
                  professional
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Modern Tips</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • Book your appointment early - salons are busy during this
                  period
                </li>
                <li>• Consider a style that frames your face for photos</li>
                <li>
                  • Bring a photo of your desired style to communicate with your
                  barber
                </li>
                <li>• A fresh look boosts confidence for the year ahead</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-rose-100/80 to-pink-100/80 dark:from-rose-900/30 dark:to-pink-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Dragon Energy</h2>
            <p className="text-muted-foreground">
              On Dragon Head Festival, getting a haircut isn&apos;t just about
              looking good - it&apos;s about channeling the dragon&apos;s power,
              wisdom, and good fortune into your life for the year ahead.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
