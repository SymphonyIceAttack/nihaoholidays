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
    title: "Mooncake Flavor Guide - NihaoHolidays",
    description: "Explore different types of mooncakes for Mid-Autumn Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/mooncake`,
      languages: generateHreflangLinks("/tool/mooncake"),
    },
  };
}

export default async function MooncakePage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  const flavors = [
    {
      name: "Lotus Seed Paste with Egg Yolk",
      emoji: "🥮",
      desc: "The classic Cantonese style, rich and savory",
    },
    {
      name: "Five Kernel (五仁)",
      emoji: "🥜",
      desc: "Mixed nuts and seeds with candied fruit",
    },
    {
      name: "Red Bean",
      emoji: "🫘",
      desc: "Sweet and smooth, popular with children",
    },
    {
      name: "Snow Skin",
      emoji: "🧊",
      desc: "Chilled, chewy exterior with various fillings",
    },
    {
      name: "White Lotus Seed",
      emoji: "🧡",
      desc: "Delicate and refined, premium choice",
    },
    {
      name: "Sesame",
      emoji: "⚫",
      desc: "Black sesame paste with rich nutty flavor",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/midautumn`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Mid-Autumn Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥮</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Mooncake Flavor Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional and modern mooncake flavors, and what to give as
              gifts.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {flavors.map((flavor, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm text-center"
              >
                <span className="text-5xl mb-4 block">{flavor.emoji}</span>
                <h3 className="font-semibold text-foreground mb-2">
                  {flavor.name}
                </h3>
                <p className="text-sm text-muted-foreground">{flavor.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-100/80 to-amber-100/80 dark:from-yellow-900/30 dark:to-amber-900/20 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">How to Choose</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <span className="text-3xl mb-2 block">👴</span>
                <h3 className="font-medium">For Elders</h3>
                <p className="text-sm text-muted-foreground">
                  Traditional lotus seed with yolk, or low-sugar options
                </p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">👶</span>
                <h3 className="font-medium">For Children</h3>
                <p className="text-sm text-muted-foreground">
                  Red bean, ice cream, or fruit flavors
                </p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">🎁</span>
                <h3 className="font-medium">As Gifts</h3>
                <p className="text-sm text-muted-foreground">
                  Premium boxed sets with variety
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
