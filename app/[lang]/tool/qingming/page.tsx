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
    title: "Tomb Sweeping Guide - NihaoHolidays",
    description: "Proper etiquette and traditions for Qingming Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/qingming`,
      languages: generateHreflangLinks("/tool/qingming"),
    },
  };
}

export default async function QingmingPage({
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
            href={`/${lang}/festival/qingming`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Qingming Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🌿</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Tomb Sweeping Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Learn the proper way to honor ancestors during Qingming Festival.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Before You Go</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • Bring fresh flowers (yellow chrysanthemums traditional)
                </li>
                <li>
                  • Prepare food offerings (the deceased&apos;s favorites)
                </li>
                <li>• Bring incense and joss paper</li>
                <li>• Wear respectful, modest clothing</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">At the Grave</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Clear away weeds and debris from the grave</li>
                <li>• Place fresh flowers and offerings</li>
                <li>• Light incense and bow respectfully</li>
                <li>• Burn joss paper (in designated areas only)</li>
                <li>• Spend time talking to ancestors</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Etiquette Reminders
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Maintain a respectful demeanor</li>
                <li>• Speak quietly and reverently</li>
                <li>• Avoid taking selfies at the grave</li>
                <li>• Don&apos;t sit or step on graves</li>
                <li>• Leave the area cleaner than you found it</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Spring Outing</h2>
            <p className="text-muted-foreground">
              After tomb sweeping, many families enjoy spring outings (踏青),
              flying kites and picnicking to celebrate the arrival of spring.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
