"use client";

import { FestivalCard } from "@/components/shared/calendar";
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

export function SubscribePageContent({ lang }: { lang: LanguageType }) {
  const festivals = getUpcomingFestivals(lang);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/50 dark:to-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center shadow-sm">
              <CalendarIcon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Festival Calendar
              </h1>
              <p className="text-muted-foreground">
                Add Chinese festivals to your calendar with cultural insights
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {festivals.map((festival) => (
              <FestivalCard
                key={festival.id}
                festival={festival}
                lang={lang}
                variant="full"
              />
            ))}
          </div>

          <div className="mt-8 p-6 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-100 dark:border-rose-800">
            <h3 className="font-semibold text-rose-800 dark:text-rose-200 mb-2">
              Why subscribe to Chinese festivals?
            </h3>
            <ul className="text-sm text-rose-700 dark:text-rose-300 space-y-2">
              <li>
                Never miss important cultural celebrations and family gatherings
              </li>
              <li>
                Get reminders a week before each festival to prepare in advance
              </li>
              <li>
                Learn the cultural significance of each festival through the
                calendar descriptions
              </li>
              <li>
                Each event includes links to detailed guides on our website
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
