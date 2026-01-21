import { ChevronRight } from "lucide-react";
import Link from "next/link";

import type { LanguageType } from "@/lib/translations/config";

interface Tool {
  name: string;
  description: string;
  badge?: string;
}

interface ToolsSectionProps {
  tools: Tool[];
  lang: LanguageType;
  festivalId: string;
}

export function ToolsSection({ tools, lang, festivalId }: ToolsSectionProps) {
  if (tools.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="bg-gradient-to-r from-rose-100/80 to-orange-100/80 dark:from-rose-900/30 dark:to-orange-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Interactive Tools
          </h2>
          <p className="text-muted-foreground">
            Practice with scenario-based tools
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {tools.map((tool, index) => {
            let href = `/${lang}/tool/menu`;

            if (tool.name.includes("Greeting"))
              href = `/${lang}/tool/greetings`;
            else if (tool.name.includes("Red Envelope"))
              href = `/${lang}/tool/red-envelope`;
            else if (
              tool.name.includes("Culture") ||
              tool.name.includes("文化概览")
            )
              href = `/${lang}/culture/${festivalId}`;
            else if (tool.name.includes("Quiz") || tool.name.includes("测验"))
              href = `/${lang}/quiz/${festivalId}`;

            return (
              <Link
                key={index}
                href={href}
                className="p-4 rounded-xl bg-white/60 dark:bg-zinc-800/60 hover:bg-white dark:hover:bg-zinc-800 transition-colors text-left group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{tool.name}</h3>
                  {tool.badge && (
                    <span className="text-xs px-2 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
                <div className="flex items-center gap-1 mt-3 text-rose-600 dark:text-rose-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Try it
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
