"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LanguageType } from "@/lib/translations/config";

const dumplingTangyuan = {
  dumplings: {
    title: "Northern Tradition - Dumplings",
    chinese: "饺子",
    pinyin: "Jiǎo zi",
    emoji: "🥟",
    description: "Traditional Winter Solstice food in northern China",
    meanings: [
      "Reunion and warmth",
      "Shape resembles ancient gold ingots",
      "Warms the body in cold winter",
    ],
    traditions: [
      "Families gather to fold dumplings together",
      "Often wrap coins inside for good luck",
      "Eat at midnight on Winter Solstice",
    ],
    ordering: "Wǒ yào chī jiǎo zi - I want to eat dumplings",
  },
  tangyuan: {
    title: "Southern Tradition - Tangyuan",
    chinese: "汤圆",
    pinyin: "Tāng yuán",
    emoji: "⚪",
    description: "Sweet rice balls popular in southern China",
    meanings: [
      "Family togetherness",
      "Round shape symbolizes reunion",
      "Sweetness brings harmony",
    ],
    traditions: [
      "Often served in sweet soup",
      "Can be filled with sweet bean paste",
      "Eaten during family gatherings",
    ],
    ordering: "Wǒ yào chī tāng yuán - I want to eat tangyuan",
  },
};

export function DumplingTangyuanGuidePage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🥟</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Dumpling vs Tangyuan Guide
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Winter Solstice traditions: dumplings in the north, tangyuan in
              the south. Both symbolize warmth and reunion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-white/60 dark:bg-zinc-800/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">
                  {dumplingTangyuan.dumplings.emoji}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {dumplingTangyuan.dumplings.title}
                  </h3>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400">
                    {dumplingTangyuan.dumplings.chinese} -{" "}
                    {dumplingTangyuan.dumplings.pinyin}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {dumplingTangyuan.dumplings.description}
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-cyan-700 dark:text-cyan-300 text-sm">
                    Meanings
                  </h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    {dumplingTangyuan.dumplings.meanings.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-700 dark:text-cyan-300 text-sm">
                    Traditions
                  </h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    {dumplingTangyuan.dumplings.traditions.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  {dumplingTangyuan.dumplings.ordering}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-white/60 dark:bg-zinc-800/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">
                  {dumplingTangyuan.tangyuan.emoji}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {dumplingTangyuan.tangyuan.title}
                  </h3>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400">
                    {dumplingTangyuan.tangyuan.chinese} -{" "}
                    {dumplingTangyuan.tangyuan.pinyin}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {dumplingTangyuan.tangyuan.description}
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-cyan-700 dark:text-cyan-300 text-sm">
                    Meanings
                  </h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    {dumplingTangyuan.tangyuan.meanings.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-700 dark:text-cyan-300 text-sm">
                    Traditions
                  </h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    {dumplingTangyuan.tangyuan.traditions.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  {dumplingTangyuan.tangyuan.ordering}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-cyan-100/80 to-blue-100/80 dark:from-cyan-900/30 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                <span className="text-xl">🏠</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Family Togetherness
                </h3>
                <p className="text-sm text-muted-foreground">
                  The most important part is being with family
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Whether you prefer dumplings or tangyuan, Winter Solstice is about
              gathering with family. The food you eat matters less than the
              people you share it with. This tradition has been passed down for
              over 2,000 years.
            </p>
          </div>

          {/* Winter Solstice Cultural Context */}
          <div className="mt-12 bg-gradient-to-r from-cyan-100/80 to-blue-100/80 dark:from-cyan-900/30 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                <span className="text-2xl">❄️</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  About Winter Solstice (冬至)
                </h3>
                <p className="text-sm text-muted-foreground">
                  The longest night, the return of yang energy
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Winter Solstice (Dongzhi) is one of the most important traditional
                Chinese festivals, celebrated since ancient times. It marks the
                shortest day and longest night of the year.
              </p>
              <p>
                The saying goes: "Dongzhi dǎnjiǎo, xiàzhì chī tangyuan" (Eat
                dumplings at Winter Solstice, eat tangyuan at Summer Solstice).
                This reflects the beautiful North-South culinary divide.
              </p>
              <p>
                After Winter Solstice, yang energy begins to grow, symbolizing the
                return of longer days and the promise of spring's eventual arrival.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-cyan-200 dark:border-cyan-800">
              <Link href={`/${lang}/culture/winter_solstice`}>
                <Button variant="outline" className="w-full gap-2">
                  Explore Winter Solstice Culture
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link href={`/${lang}/tool/laba-porridge`}>
              <Card className="p-4 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥣</span>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Laba Porridge Guide
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Traditional Laba rice porridge
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href={`/${lang}/tool/winter-solstice-blessings`}>
              <Card className="p-4 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔮</span>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Winter Solstice Blessings
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Traditional blessings for the season
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tools
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground"></div>
      </footer>
    </div>
  );
}
