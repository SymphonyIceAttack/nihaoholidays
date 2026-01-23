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
    title: "Qingming Etiquette - NihaoHolidays",
    description: "Proper etiquette and ceremonies for Qingming Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/qingming-etiquette`,
      languages: generateHreflangLinks("/tool/qingming-etiquette"),
    },
  };
}

export default async function QingmingEtiquettePage({
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
            <span className="text-6xl mb-4 block">📿</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Qingming Etiquette
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Understanding the proper ceremonies and respectful behaviors
              during Qingming Festival.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Greeting the Ancestors
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • Address ancestors respectfully and announce your visit
                </li>
                <li>• Bow three times before the grave</li>
                <li>• Offer food and drinks the ancestors enjoyed</li>
                <li>• Light incense and candles as offerings</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Proper Attire</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Wear muted, respectful colors (avoid bright reds)</li>
                <li>• Dress modestly and conservatively</li>
                <li>• Remove hats when near the grave</li>
                <li>• Wear comfortable shoes for walking on uneven terrain</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Speaking to Ancestors
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Use respectful language and tone</li>
                <li>• Update ancestors on family news and achievements</li>
                <li>• Express gratitude for their guidance</li>
                <li>• Share hopes and wishes for the family</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Etiquette Reminders
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Maintain a solemn and respectful demeanor</li>
                <li>• Keep voices low and speak reverently</li>
                <li>• Avoid taking photos at the gravesite</li>
                <li>• Do not eat or drink at the grave directly</li>
                <li>• Leave the area cleaner than you found it</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Traditional Sayings</h2>
            <p className="text-muted-foreground italic">
              &quot;慎终追远，民德归厚矣&quot; - Carefully attend to funeral
              rites and cherish the memory of distant ancestors, and the moral
              character of the people will become increasingly noble.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
