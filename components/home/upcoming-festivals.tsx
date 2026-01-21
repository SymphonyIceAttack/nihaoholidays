"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { FestivalCard } from "@/components/shared/calendar";
import { Button } from "@/components/ui/button";
import { getUpcomingFestivals } from "@/lib/festivals";
import type { LanguageType } from "@/lib/translations/config";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

export function UpcomingFestivals({ lang }: { lang: LanguageType }) {
  const festivals = useMemo(() => getUpcomingFestivals(lang), [lang]);
  const nextThreeFestivals = festivals.slice(0, 3);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 text-rose-600 flex items-center justify-center shadow-sm">
              <CalendarIcon className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Upcoming Festivals
              </h2>
              <p className="text-sm text-muted-foreground">
                Prepare ahead and don&apos;t miss any cultural experiences
              </p>
            </div>
          </div>
          <Link href={`/${lang}/subscribe`}>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 w-fit bg-transparent hover:bg-rose-50 hover:border-rose-200 transition-all duration-200"
            >
              <div className="relative">
                <Calendar className="h-4 w-4" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full" />
              </div>
              Add to Calendar
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {nextThreeFestivals.map((festival) => (
            <FestivalCard
              key={festival.id}
              festival={festival}
              lang={lang}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
