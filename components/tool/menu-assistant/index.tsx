import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LanguageType } from "@/lib/translations/config";
import { MenuAssistantGrid } from "./menu-assistant-grid";

export function MenuAssistantPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🍽️</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Spring Festival Menu Assistant
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Design your perfect reunion dinner with traditional Chinese
              dishes. Each dish carries lucky meanings for the new year.
            </p>
          </div>

          <MenuAssistantGrid />

          <div className="mt-12 bg-gradient-to-r from-rose-100/80 to-amber-100/80 dark:from-rose-900/30 dark:to-amber-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <span className="text-2xl">🐉</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  About Spring Festival Reunion Dinner
                </h3>
                <p className="text-sm text-muted-foreground">
                  The most important meal of the year
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                The <strong>Reunion Dinner (团圆饭)</strong> is the most
                important meal of the Chinese New Year. Families gather from far
                and wide to share this special meal on New Year&apos;s Eve.
              </p>
              <p>
                Each dish on the table carries symbolic meaning for the coming
                year. Fish represents abundance, dumplings symbolize wealth, and
                noodles represent longevity.
              </p>
              <p>
                The meal is not just about food—it&apos;s about family
                togetherness, honoring traditions, and welcoming good fortune.
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
            <Link href={`/${lang}/tool/greetings`}>
              <Card className="p-4 border-rose-200 dark:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎊</span>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Holiday Greeting Generator
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Learn festive greetings
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

          <div className="mt-8 flex justify-center">
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
