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

function getToolHref(
  toolName: string,
  lang: LanguageType,
  festivalId: string,
): string {
  const name = toolName.toLowerCase();

  if (
    name.includes("greeting") ||
    name.includes("blessing") ||
    name.includes("祝福")
  )
    return `/${lang}/tool/greetings`;
  if (
    name.includes("red envelope") ||
    name.includes("red-envelope") ||
    name.includes("红包")
  )
    return `/${lang}/tool/red-envelope`;
  if (
    name.includes("menu") ||
    name.includes("dinner") ||
    name.includes("reunion")
  )
    return `/${lang}/tool/menu`;
  if (
    name.includes("culture") ||
    name.includes("overview") ||
    name.includes("文化概览")
  )
    return `/${lang}/culture/${festivalId}`;
  if (name.includes("quiz") || name.includes("测验"))
    return `/${lang}/quiz/${festivalId}`;
  if (
    name.includes("recipe") ||
    name.includes("porridge") ||
    name.includes("粥")
  )
    return `/${lang}/tool/laba-porridge`;
  if (name.includes("garlic") || name.includes("蒜"))
    return `/${lang}/tool/laba-garlic`;
  if (name.includes("prep") || name.includes("准备") || name.includes("list"))
    return `/${lang}/tool/spring-prep`;
  if (name.includes("riddle") || name.includes("谜语"))
    return `/${lang}/tool/riddles`;
  if (
    name.includes("tangyuan") ||
    name.includes("汤圆") ||
    name.includes("picker")
  )
    return `/${lang}/tool/dumpling-tangyuan`;
  if (name.includes("mooncake") || name.includes("月饼"))
    return `/${lang}/tool/mooncake`;
  if (
    name.includes("zongzi") ||
    name.includes("粽子") ||
    name.includes("guide")
  )
    return `/${lang}/tool/zongzi`;
  if (
    name.includes("tomb") ||
    name.includes("qingming") ||
    name.includes("扫墓")
  )
    return `/${lang}/tool/qingming`;
  if (name.includes("love") || name.includes("letter") || name.includes("情书"))
    return `/${lang}/tool/qixi-blessings`;
  if (
    name.includes("elder") ||
    name.includes("respect") ||
    name.includes("重阳")
  )
    return `/${lang}/tool/chongyang-blessings`;
  if (name.includes("chrysanthemum") || name.includes("菊花"))
    return `/${lang}/tool/chrysanthemum-tea`;
  if (
    name.includes("dumpling") ||
    name.includes("饺子") ||
    name.includes("dining")
  )
    return `/${lang}/tool/winter-solstice-blessings`;

  return `/${lang}/tool/menu`;
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
            const href = getToolHref(tool.name, lang, festivalId);

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
