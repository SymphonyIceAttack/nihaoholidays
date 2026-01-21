"use client";

import {
  ArrowLeft,
  Gift,
  Menu as MenuIcon,
  MessageCircleHeart,
  Sparkles,
  Thermometer,
  Utensils,
} from "lucide-react";
import Link from "next/link";

const tools = [
  {
    id: "menu",
    title: "Menu Assistant",
    description:
      "Design your Spring Festival reunion dinner with traditional Chinese dishes and ordering phrases.",
    icon: MenuIcon,
    href: "/tool/menu",
    color: "from-rose-500 to-orange-500",
  },
  {
    id: "greetings",
    title: "Greeting Templates",
    description:
      "Classic Chinese New Year blessings and greetings for every occasion and recipient.",
    icon: MessageCircleHeart,
    href: "/tool/greetings",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "red-envelope",
    title: "Red Envelope Guide",
    description:
      "Learn about red envelope (hongbao) amounts, etiquette, and traditions for Chinese New Year.",
    icon: Gift,
    href: "/tool/red-envelope",
    color: "from-red-500 to-pink-500",
  },
  {
    id: "chongyang-blessings",
    title: "Chongyang Blessings",
    description:
      "Double Ninth Festival greetings for honoring elders with pronunciation.",
    icon: Sparkles,
    href: "/tool/chongyang-blessings",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "chrysanthemum-tea",
    title: "Chrysanthemum Tea Guide",
    description: "Traditional chrysanthemum tea varieties and brewing methods.",
    icon: Thermometer,
    href: "/tool/chrysanthemum-tea",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "winter-solstice-blessings",
    title: "Winter Solstice Blessings",
    description:
      "Dongzhi Festival greetings for the longest night of the year.",
    icon: MessageCircleHeart,
    href: "/tool/winter-solstice-blessings",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "dumpling-tangyuan",
    title: "Dumpling vs Tangyuan",
    description:
      "Winter Solstice traditions: dumplings in the north, tangyuan in the south.",
    icon: Utensils,
    href: "/tool/dumpling-tangyuan",
    color: "from-cyan-400 to-sky-500",
  },
  {
    id: "laba-blessings",
    title: "Laba Festival Blessings",
    description:
      "Laba Festival greetings and sayings for the rice porridge festival.",
    icon: Sparkles,
    href: "/tool/laba-blessings",
    color: "from-orange-400 to-amber-500",
  },
  {
    id: "laba-porridge",
    title: "Laba Porridge Guide",
    description: "Traditional Eight Treasure Porridge recipe and history.",
    icon: Utensils,
    href: "/tool/laba-porridge",
    color: "from-orange-500 to-red-500",
  },
];

import type { LanguageType } from "@/lib/translations/config";

export function ToolListPage({ lang = "en" }: { lang?: LanguageType } = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">🛠️</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Chinese New Year Tools
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Handy tools to help you celebrate and navigate Chinese New Year
              with confidence.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.id}
                  href={`/${lang}${tool.href}`}
                  className="group relative overflow-hidden rounded-2xl border border-rose-200 dark:border-rose-800 bg-white/60 dark:bg-zinc-800/60 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 text-white shadow-lg`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {tool.description}
                    </p>
                    <div className="flex items-center text-rose-600 dark:text-rose-400 text-sm font-medium">
                      <span>Use Tool</span>
                      <ArrowLeft className="h-4 w-4 ml-1 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Learning Section */}
          <div className="mt-12 bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Want to Learn More?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Explore our comprehensive learning resources
                </p>
              </div>
            </div>
            <Link
              href={`/${lang}/learn`}
              className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Learning Center
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground"></div>
      </footer>
    </div>
  );
}
