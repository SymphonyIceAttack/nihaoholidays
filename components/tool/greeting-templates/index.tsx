import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LanguageType } from "@/lib/translations/config";
import { GreetingGrid } from "./greeting-grid";

export function GreetingTemplatesPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🎊</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Chinese New Year Greetings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Classic blessings for every occasion and recipient. Click to hear
              pronunciation.
            </p>
          </div>

          <GreetingGrid />

          <div className="mt-12 bg-gradient-to-r from-rose-100/80 to-amber-100/80 dark:from-rose-900/30 dark:to-amber-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <span className="text-2xl">🏮</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  The Art of Chinese New Year Greetings
                </h3>
                <p className="text-sm text-muted-foreground">
                  Why blessings matter during Spring Festival
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Exchanging New Year greetings is a central tradition of Spring
                Festival. These wishes are believed to influence luck for the
                coming year.
              </p>
              <p>
                The color red symbolizes good fortune, and you&apos;ll see it
                everywhere during celebrations. Red envelopes (hongbao) often
                accompany verbal blessings.
              </p>
              <p>
                Different greetings are appropriate for different relationships.
                Formal blessings for elders, playful ones for children, and warm
                wishes for friends all follow cultural etiquette.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-rose-200 dark:border-rose-800">
              <Link href={`/${lang}/culture/spring`}>
                <Button variant="outline" className="w-full gap-2">
                  Explore Spring Festival Culture
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link href={`/${lang}/tool/menu`}>
              <Card className="p-4 border-rose-200 dark:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍽️</span>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Menu Assistant
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Plan reunion dinner
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href={`/${lang}/tool/red-envelope`}>
              <Card className="p-4 border-rose-200 dark:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧧</span>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Red Envelope Guide
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Gift customs &amp; etiquette
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
