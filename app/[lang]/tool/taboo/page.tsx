import { ArrowLeft, AlertTriangle } from "lucide-react";
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
    title: "Taboo Guide - NihaoHolidays",
    description: "Traditional Chinese festival taboos and what to avoid",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/taboo`,
      languages: generateHreflangLinks("/tool/taboo"),
    },
  };
}

export default async function TabooPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/new-year-eve`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to New Year&apos;s Eve
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🚫</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Festival Taboo Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Understanding traditional taboos to avoid bad luck and invite
              prosperity during festivals.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Spring Festival Taboos</h2>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-red-600">❌ Don&apos;t Wash Hair</h3>
                  <p className="text-sm text-muted-foreground">
                    Washing hair during the first few days is believed to wash
                    away good luck
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-red-600">❌ Don&apos;t Use Sharp Objects</h3>
                  <p className="text-sm text-muted-foreground">
                    Scissors and knives &quot;cut&quot; good fortune and prosperity
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-red-600">❌ Don&apos;t Cry</h3>
                  <p className="text-sm text-muted-foreground">
                    Crying brings bad luck and sorrow for the coming year
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-red-600">❌ Don&apos;t Break Things</h3>
                  <p className="text-sm text-muted-foreground">
                    Breaking items symbolizes breaking your fortune
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-red-600">❌ Don&apos;t Say Unlucky Words</h3>
                  <p className="text-sm text-muted-foreground">
                    Avoid words like &quot;death,&quot; &quot;ghost,&quot; or
                    &quot;empty&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Gift-Giving Taboos</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Clocks:</strong> &quot;Giving a clock&quot; sounds like
                  attending a funeral
                </li>
                <li>
                  • <strong>White/black wrapping:</strong> Colors of mourning
                </li>
                <li>
                  • <strong>Pears:</strong> &quot;Pear&quot; sounds like
                  &quot;separation&quot;
                </li>
                <li>
                  • <strong>Umbrellas:</strong> &quot;Umbrella&quot; sounds like
                  &quot;scattering&quot;
                </li>
                <li>
                  • <strong>Handkerchiefs:</strong> Associated with farewell
                </li>
                <li>
                  • <strong>Odd numbers:</strong> Use even numbers for gifts (2,
                  6, 8 are lucky)
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">General Festival Taboos</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • Don&apos;t visit empty-handed (always bring a gift)
                </li>
                <li>
                  • Don&apos;t clean or sweep during the festival (you&apos;ll
                  sweep away luck)
                </li>
                <li>
                  • Don&apos;t lend money (you&apos;ll lose wealth)
                </li>
                <li>
                  • Don&apos;t return gifts (it brings bad luck to the giver)
                </li>
                <li>
                  • Don&apos;t eat porridge or medicine (signifies poverty)
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Lucky Alternatives</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-green-600">✅ Do Use Red</h3>
                  <p className="text-sm text-muted-foreground">
                    Red symbolizes luck, joy, and drives away evil
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-green-600">✅ Do Give Oranges</h3>
                  <p className="text-sm text-muted-foreground">
                    Oranges symbolize wealth and good fortune
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-green-600">✅ Do Use Even Numbers</h3>
                  <p className="text-sm text-muted-foreground">
                    Even numbers represent pairs and completeness
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2 text-green-600">✅ Do Smile</h3>
                  <p className="text-sm text-muted-foreground">
                    A happy demeanor invites positive energy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Understanding Matters</h2>
            <p className="text-muted-foreground">
              While taboos may seem superstitious, they reflect deep cultural
              values of respect, consideration, and the desire for good fortune.
              Understanding them helps show cultural appreciation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
