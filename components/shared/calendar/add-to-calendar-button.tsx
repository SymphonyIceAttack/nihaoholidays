"use client";

import { Calendar } from "lucide-react";
import type { Festival } from "@/lib/festivals";
import { cn } from "@/lib/utils";
import {
  downloadICS,
  generateGoogleCalendarUrl,
  generateOutlookUrl,
} from "./utils";

interface AddToCalendarButtonProps {
  festival: Festival;
  variant?: "compact" | "full";
  className?: string;
}

export function AddToCalendarButton({
  festival,
  variant = "compact",
  className,
}: AddToCalendarButtonProps) {
  const googleUrl = generateGoogleCalendarUrl(festival);
  const outlookUrl = generateOutlookUrl(festival);

  if (variant === "full") {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-sm bg-white dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-100 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/50 hover:border-rose-300 dark:hover:border-rose-700 transition-colors"
        >
          <Calendar className="h-4 w-4 text-rose-600 dark:text-rose-400" />
          Google Calendar
        </a>
        <a
          href={outlookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-sm bg-white dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-100 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/50 hover:border-rose-300 dark:hover:border-rose-700 transition-colors"
        >
          <Calendar className="h-4 w-4 text-rose-600 dark:text-rose-400" />
          Outlook
        </a>
        <button
          type="button"
          onClick={() => downloadICS(festival)}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-white dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-100 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/50 hover:border-rose-300 dark:hover:border-rose-700 transition-colors"
        >
          <Calendar className="h-4 w-4 text-rose-600 dark:text-rose-400" />
          Apple Calendar (.ics)
        </button>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-white dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-200 rounded-md hover:bg-rose-50 dark:hover:bg-rose-900/50 hover:border-rose-300 dark:hover:border-rose-700 transition-colors"
      >
        <Calendar className="h-3.5 w-3.5" />
        <span>Google</span>
      </a>
      <a
        href={outlookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-white dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-200 rounded-md hover:bg-rose-50 dark:hover:bg-rose-900/50 hover:border-rose-300 dark:hover:border-rose-700 transition-colors"
      >
        <Calendar className="h-3.5 w-3.5" />
        <span>Outlook</span>
      </a>
      <button
        type="button"
        onClick={() => downloadICS(festival)}
        className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-white dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-200 rounded-md hover:bg-rose-50 dark:hover:bg-rose-900/50 hover:border-rose-300 dark:hover:border-rose-700 transition-colors"
      >
        <Calendar className="h-3.5 w-3.5" />
        <span>Apple</span>
      </button>
    </div>
  );
}
