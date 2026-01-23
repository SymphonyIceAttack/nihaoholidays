import {
  ArrowLeft,
  BookOpen,
  Gift,
  Heart,
  Menu as MenuIcon,
  MessageCircleHeart,
  Sparkles,
  Thermometer,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import type { LanguageType } from "@/lib/translations/config";

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
    id: "riddles",
    title: "Lantern Riddles Game",
    description:
      "Test your knowledge with traditional Chinese lantern riddles.",
    icon: Sparkles,
    href: "/tool/riddles",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "tangyuan",
    title: "Tangyuan Guide",
    description: "Sweet rice balls and their significance during festivals.",
    icon: Utensils,
    href: "/tool/tangyuan",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "qingming",
    title: "Qingming Guide",
    description: "Tomb sweeping traditions and customs for Qingming Festival.",
    icon: BookOpen,
    href: "/tool/qingming",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "qingming-etiquette",
    title: "Qingming Etiquette",
    description:
      "Proper ceremonies and respectful behaviors during Qingming Festival.",
    icon: Heart,
    href: "/tool/qingming-etiquette",
    color: "from-green-400 to-teal-500",
  },
  {
    id: "zongzi",
    title: "Zongzi Guide",
    description: "Traditional rice dumplings for Dragon Boat Festival.",
    icon: Utensils,
    href: "/tool/zongzi",
    color: "from-green-600 to-lime-500",
  },
  {
    id: "dragon-boat-blessings",
    title: "Dragon Boat Blessings",
    description:
      "Traditional blessings and greetings for Dragon Boat Festival.",
    icon: Sparkles,
    href: "/tool/dragon-boat-blessings",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "dragon-boat-culture",
    title: "Dragon Boat Culture",
    description:
      "Explore the rich cultural traditions of Dragon Boat Festival.",
    icon: Heart,
    href: "/tool/dragon-boat-culture",
    color: "from-cyan-400 to-sky-500",
  },
  {
    id: "qixi-blessings",
    title: "Qixi Blessings",
    description: "Chinese Valentine's Day blessings and romantic expressions.",
    icon: Heart,
    href: "/tool/qixi-blessings",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: "qixi-dates",
    title: "Qixi Date Ideas",
    description: "Romantic date spots and activities for Qixi Festival.",
    icon: Sparkles,
    href: "/tool/qixi-dates",
    color: "from-pink-300 to-rose-400",
  },
  {
    id: "qixi-gifts",
    title: "Qixi Gift Guide",
    description: "Thoughtful gift ideas for Chinese Valentine's Day.",
    icon: Gift,
    href: "/tool/qixi-gifts",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "mooncake",
    title: "Mooncake Gift Box",
    description:
      "Choose the perfect mooncake gift box for Mid-Autumn Festival.",
    icon: Gift,
    href: "/tool/mooncake",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "mooncake-flavor",
    title: "Mooncake Flavors",
    description: "Explore traditional and modern mooncake flavors.",
    icon: Utensils,
    href: "/tool/mooncake-flavor",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "mid-autumn-blessings",
    title: "Mid-Autumn Blessings",
    description: "Traditional blessings for Mid-Autumn Festival reunion.",
    icon: Heart,
    href: "/tool/mid-autumn-blessings",
    color: "from-amber-400 to-yellow-500",
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
    id: "chongyang-etiquette",
    title: "Chongyang Etiquette",
    description: "Proper customs for honoring elders on Double Ninth Festival.",
    icon: Heart,
    href: "/tool/chongyang-etiquette",
    color: "from-orange-400 to-amber-500",
  },
  {
    id: "winter-solstice-food",
    title: "Winter Solstice Foods",
    description: "Traditional foods for Winter Solstice across China.",
    icon: Utensils,
    href: "/tool/winter-solstice-food",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "winter-solstice-blessings",
    title: "Winter Solstice Blessings",
    description:
      "Dongzhi Festival greetings for the longest night of the year.",
    icon: MessageCircleHeart,
    href: "/tool/winter-solstice-blessings",
    color: "from-blue-400 to-cyan-500",
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
  {
    id: "laba-garlic",
    title: "Laba Garlic Guide",
    description: "Traditional Laba garlic preservation methods and uses.",
    icon: Thermometer,
    href: "/tool/laba-garlic",
    color: "from-violet-500 to-purple-500",
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
    id: "spring-prep",
    title: "Spring Prep Guide",
    description: "Preparing for Spring Festival with traditional customs.",
    icon: Sparkles,
    href: "/tool/spring-prep",
    color: "from-red-500 to-orange-500",
  },
];

export function ToolListPage({ lang = "en" }: { lang?: LanguageType } = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const href = `/${lang}${tool.href}`;
              return (
                <Link
                  key={tool.id}
                  href={href}
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

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground"></div>
      </footer>
    </div>
  );
}
