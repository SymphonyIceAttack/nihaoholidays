import { BookOpen, ChevronRight, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import type { LanguageType } from "@/lib/translations/config";

interface CultureNavigationProps {
  lang: LanguageType;
  festivalId: string;
}

export function CultureNavigation({
  lang,
  festivalId,
}: CultureNavigationProps) {
  return (
    <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
      <Button variant="outline" size="lg" asChild className="flex-1">
        <Link href={`/${lang}/festival/${festivalId}`}>
          Festival Guide
          <Sparkles className="h-4 w-4 ml-2" />
        </Link>
      </Button>
      <Button
        size="lg"
        asChild
        className="flex-1 bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20"
      >
        <Link href={`/${lang}/quiz/${festivalId}`}>
          Take Quiz
          <GraduationCap className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}

interface ContinueLearningSectionProps {
  lang: LanguageType;
  festivalId: string;
  festivalName: string;
}

export function ContinueLearningSection({
  lang,
  festivalId,
  festivalName,
}: ContinueLearningSectionProps) {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Continue Your Learning Journey
        </h3>
        <p className="text-muted-foreground">
          Explore more ways to learn about {festivalName}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href={`/${lang}/festival/${festivalId}`}
          className="p-4 rounded-xl bg-gradient-to-br from-rose-100/80 to-orange-100/80 dark:from-rose-900/30 dark:to-orange-900/20 border border-rose-200 dark:border-rose-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center mb-3">
            <BookOpen className="h-5 w-5 text-rose-600 dark:text-rose-400" />
          </div>
          <h4 className="font-semibold text-foreground mb-1">Festival Guide</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Essential phrases, foods, and etiquette
          </p>
          <span className="text-rose-600 dark:text-rose-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more
            <ChevronRight className="h-4 w-4" />
          </span>
        </Link>
        <Link
          href={`/${lang}/culture/${festivalId}`}
          className="p-4 rounded-xl bg-gradient-to-br from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-3">
            <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <h4 className="font-semibold text-foreground mb-1">
            Cultural Overview
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            History, significance, and traditions
          </p>
          <span className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Explore
            <ChevronRight className="h-4 w-4" />
          </span>
        </Link>
        <Link
          href={`/${lang}/learn`}
          className="p-4 rounded-xl bg-gradient-to-br from-blue-100/80 to-indigo-100/80 dark:from-blue-900/30 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3">
            <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h4 className="font-semibold text-foreground mb-1">
            Explore Festivals
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Discover other Chinese festivals
          </p>
          <span className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Browse
            <ChevronRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
