import { ArrowLeft, Flame } from "lucide-react";
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
    title: "Cold Food Guide - NihaoHolidays",
    description: "Understanding Cold Food Festival traditions and customs",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/cold-food`,
      languages: generateHreflangLinks("/tool/cold-food"),
    },
  };
}

export default async function ColdFoodPage({
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
            href={`/${lang}/festival/cold-food`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cold Food Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥗</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Cold Food Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The ancient tradition of eating cold food to commemorate loyal
              Jie Zitui.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">The Story of Jie Zitui</h2>
              <p className="text-muted-foreground mb-4">
                Cold Food Festival commemorates Jie Zitui (介子推), a loyal
                minister during the Spring and Autumn period. When Duke Wen of
                Jin was exiled, Jie cut meat from his own thigh to feed him.
                Later, when the duke rewarded those who had helped him, Jie
                refused and hid in the woods with his mother.
              </p>
              <p className="text-muted-foreground">
                To force Jie out, the duke set the forest on fire, but Jie and
                his mother died in the flames. In mourning, the duke ordered
                no fires to be lit for three days - thus the &quot;Cold Food&quot;
                tradition.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">What is Cold Food?</h2>
              <p className="text-muted-foreground mb-4">
                Cold food refers to foods that require no cooking - typically
                prepared the day before and eaten cold. Traditional cold foods
                include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥮 Cold Rice Cakes</h3>
                  <p className="text-sm text-muted-foreground">
                    Steamed rice cakes eaten without heating
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥗 Cold Vegetables</h3>
                  <p className="text-sm text-muted-foreground">
                    Fresh or blanched vegetables with sauce
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥚 Cold Eggs</h3>
                  <p className="text-sm text-muted-foreground">
                    Preserved eggs or hard-boiled eggs
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🥮 Cold Noodles</h3>
                  <p className="text-sm text-muted-foreground">
                    Cold noodle dishes with sesame sauce
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Modern Observance</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Jinzhong, Shanxi:</strong> Still strictly observed
                  for 3 days
                </li>
                <li>
                  • <strong>Ancestor visits:</strong> Families visit graves with
                  cold food
                </li>
                <li>
                  • <strong>Kite flying:</strong> Popular activity during this
                  time
                </li>
                <li>
                  • <strong>Spring outings:</strong> People enjoy nature as
                  winter ends
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Cultural Values</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Loyalty:</strong> Honoring Jie Zitui&apos;s devotion
                </li>
                <li>
                  • <strong>Filial piety:</strong> Remembering ancestors
                </li>
                <li>
                  • <strong>Simplicity:</strong> Living with less, even for
                  three days
                </li>
                <li>
                  • <strong>Nature:</strong> Awakening to spring after winter
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Remembering Loyalty</h2>
            <p className="text-muted-foreground">
              Cold Food Festival teaches us to remember those who served us
              selflessly and to appreciate the loyalty and devotion shown by
              Jie Zitui over 2,600 years ago.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
