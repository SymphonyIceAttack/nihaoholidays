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

  // Spring Festival tools
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
    name.includes("reunion") ||
    name.includes("feast")
  )
    return `/${lang}/tool/menu`;

  // Lantern Festival tools
  if (name.includes("riddle") || name.includes("谜语"))
    return `/${lang}/tool/riddles`;
  if (
    name.includes("tangyuan") ||
    name.includes("汤圆") ||
    name.includes("filling")
  )
    return `/${lang}/tool/dumpling-tangyuan`;

  // Qingming Festival tools
  if (
    name.includes("qingming") ||
    name.includes("tomb") ||
    name.includes("扫墓") ||
    name.includes("tradition")
  )
    return `/${lang}/tool/qingming`;
  if (
    name.includes("taboo") ||
    name.includes("expression") ||
    name.includes("ceremonial")
  )
    return `/${lang}/tool/taboo`;

  // Dragon Boat Festival tools
  if (
    name.includes("zongzi") ||
    name.includes("粽子") ||
    name.includes("flavor")
  )
    return `/${lang}/tool/zongzi`;
  if (
    name.includes("dragon boat") ||
    name.includes("龙舟") ||
    name.includes("blessing")
  )
    return `/${lang}/tool/dragon-boat-blessings`;
  if (
    name.includes("dragon boat") ||
    name.includes("龙舟") ||
    name.includes("culture") ||
    name.includes("introduction")
  )
    return `/${lang}/tool/dragon-boat-culture`;

  // Mid-Autumn Festival tools
  if (name.includes("mooncake") || name.includes("月饼")) {
    if (name.includes("gift") || name.includes("box"))
      return `/${lang}/tool/mooncake`;
    if (name.includes("flavor")) return `/${lang}/tool/mooncake-flavor`;
    return `/${lang}/tool/mooncake`;
  }
  if (
    name.includes("mid-autumn") ||
    name.includes("中秋") ||
    name.includes("template")
  )
    return `/${lang}/tool/mid-autumn-blessings`;

  // Qixi Festival tools
  if (
    name.includes("qixi") ||
    name.includes("七夕") ||
    name.includes("blessing")
  )
    return `/${lang}/tool/qixi-blessings`;
  if (
    name.includes("qixi") ||
    name.includes("七夕") ||
    name.includes("date") ||
    name.includes("spot")
  )
    return `/${lang}/tool/qixi-dates`;
  if (name.includes("qixi") || name.includes("七夕") || name.includes("gift"))
    return `/${lang}/tool/qixi-gifts`;

  // Double Ninth Festival tools
  if (
    name.includes("chongyang") ||
    name.includes("重阳") ||
    name.includes("blessing")
  )
    return `/${lang}/tool/chongyang-blessings`;
  if (
    name.includes("chrysanthemum") ||
    name.includes("菊花") ||
    name.includes("recipe")
  )
    return `/${lang}/tool/chrysanthemum-recipes`;

  // Winter Solstice tools
  if (
    name.includes("winter") ||
    name.includes("冬至") ||
    name.includes("dumpling") ||
    name.includes("饺子")
  )
    return `/${lang}/tool/winter-solstice-food`;
  if (
    name.includes("winter") ||
    name.includes("冬至") ||
    name.includes("blessing")
  )
    return `/${lang}/tool/winter-solstice-blessings`;

  // Dragon Head Festival tools
  if (
    name.includes("haircut") ||
    name.includes("理发") ||
    name.includes("剪发")
  )
    return `/${lang}/tool/haircut`;
  if (
    name.includes("dragon food") ||
    name.includes("dragon-food") ||
    name.includes("龙食")
  )
    return `/${lang}/tool/dragon-foods`;
  if (name.includes("pancake") || name.includes("煎饼"))
    return `/${lang}/tool/spring-pancake`;

  // Ghost Festival tools
  if (name.includes("ghost") || name.includes("鬼节"))
    return `/${lang}/tool/ghost-festival`;
  if (
    name.includes("offering") ||
    name.includes("etiquette") ||
    name.includes("祭祀") ||
    name.includes("供品")
  )
    return `/${lang}/tool/offering-etiquette`;
  if (name.includes("taboo") || name.includes("禁忌") || name.includes("guide"))
    return `/${lang}/tool/taboo`;

  // Laba Festival tools
  if (
    name.includes("recipe") ||
    name.includes("porridge") ||
    name.includes("粥")
  )
    return `/${lang}/tool/laba-porridge`;
  if (name.includes("garlic") || name.includes("蒜"))
    return `/${lang}/tool/laba-garlic`;
  if (name.includes("blessing") || name.includes("祝福"))
    return `/${lang}/tool/laba-blessings`;

  // Qingming additional tools
  if (name.includes("qingming etiquette") || name.includes("清明礼仪"))
    return `/${lang}/tool/qingming-etiquette`;

  // Double Ninth additional tools
  if (name.includes("chongyang etiquette") || name.includes("重阳礼仪"))
    return `/${lang}/tool/chongyang-etiquette`;

  // Wealth God Festival tools
  if (
    name.includes("wealth god") ||
    name.includes("wealth-god") ||
    name.includes("财神")
  )
    return `/${lang}/tool/wealth-god`;
  if (
    name.includes("business") ||
    name.includes("commercial") ||
    name.includes("商")
  )
    return `/${lang}/tool/business-blessings`;
  if (
    name.includes("wealth") &&
    (name.includes("expression") || name.includes("phrase"))
  )
    return `/${lang}/tool/wealth-expressions`;

  // Other festivals
  if (
    name.includes("culture") ||
    name.includes("overview") ||
    name.includes("文化概览")
  )
    return `/${lang}/culture/${festivalId}`;
  if (name.includes("quiz") || name.includes("测验"))
    return `/${lang}/quiz/${festivalId}`;
  if (name.includes("prep") || name.includes("准备") || name.includes("list"))
    return `/${lang}/tool/spring-prep`;

  return `/${lang}/tool`;
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
