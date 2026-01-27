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
    id: "dumpling-tangyuan",
    title: "Dumpling vs Tangyuan",
    description:
      "Winter Solstice traditions: dumplings in the north, tangyuan in the south.",
    icon: Utensils,
    href: "/tool/dumpling-tangyuan",
    color: "from-cyan-400 to-sky-500",
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
      "Dragon Boat Festival history, traditions, and what it means today.",
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
    id: "chrysanthemum-recipes",
    title: "Chrysanthemum Recipes",
    description:
      "Traditional dishes and culinary uses of chrysanthemum flowers.",
    icon: Utensils,
    href: "/tool/chrysanthemum-recipes",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "dragon-foods",
    title: "Dragon Foods Guide",
    description: "Traditional foods and customs during Dragon Boat Festival.",
    icon: Utensils,
    href: "/tool/dragon-foods",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "haircut",
    title: "Haircut Guide",
    description:
      "Traditional customs and taboos for getting a haircut during festivals.",
    icon: Sparkles,
    href: "/tool/haircut",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "offering-etiquette",
    title: "Offering Etiquette",
    description:
      "Proper customs for making offerings to ancestors and spirits.",
    icon: Heart,
    href: "/tool/offering-etiquette",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "spring-pancake",
    title: "Spring Pancake Guide",
    description: "Traditional spring pancake recipes and customs.",
    icon: Utensils,
    href: "/tool/spring-pancake",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "taboo",
    title: "Festival Taboo Guide",
    description:
      "Traditional Chinese festival taboos and what to avoid for good luck.",
    icon: Sparkles,
    href: "/tool/taboo",
    color: "from-red-600 to-orange-600",
  },
  {
    id: "ghost-festival",
    title: "Ghost Festival Guide",
    description:
      "Understanding Ghost Festival traditions and ancestor worship customs.",
    icon: Sparkles,
    href: "/tool/ghost-festival",
    color: "from-slate-500 to-gray-500",
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
    <div className="min-h-screen aurora-bg">
      <main className="container relative mx-auto px-4 py-8">
        {/* Decorative aurora effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-aurora-1 rounded-full blur-3xl animate-aurora" />
          <div
            className="absolute top-40 right-1/4 w-72 h-72 bg-aurora-2 rounded-full blur-3xl animate-aurora"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block relative">
              🛠️
              <span className="absolute inset-0 text-6xl blur-xl opacity-30">
                🛠️
              </span>
            </span>
            <h1 className="text-3xl font-bold text-foreground mb-3 font-serif">
              Festival Tools
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Handy tools to help you celebrate Chinese festivals and navigate
              traditions with confidence.
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
                  className="group relative overflow-hidden aurora-card cursor-pointer hover-glow transition-all duration-300 hover:-translate-y-1 p-8"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6 text-white shadow-lg shadow-${tool.color.split(" ")[0]}/20 transition-transform group-hover:scale-105`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-6 leading-relaxed">
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

          <div className="mt-12 aurora-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 transition-transform group-hover:scale-105">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Want to Learn More?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Browse all our learning resources
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
