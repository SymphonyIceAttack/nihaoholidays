"use client";

import {
  ArrowLeft,
  Check,
  ChevronRight,
  Copy,
  Plus,
  Search,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const dishes = [
  {
    id: "fish",
    name: "红烧鱼 (Hong Shao Yu)",
    nameEn: "Braised Fish",
    emoji: "🐟",
    category: "main",
    meaning: "年年有余 (Nián nián yǒu yú) - Surplus every year",
    description: "Whole fish in soy sauce, essential for prosperity",
    difficulty: "Easy",
    mustHave: true,
  },
  {
    id: "dumplings",
    name: "饺子 (Jiǎo Zi)",
    nameEn: "Dumplings",
    emoji: "🥟",
    category: "main",
    meaning: "招财进宝 (Zhāo cái jìn bǎo) - Wealth and treasure",
    description: "Wontons shaped like gold ingots",
    difficulty: "Medium",
    mustHave: true,
  },
  {
    id: "noodles",
    name: "长寿面 (Cháng Shòu Miàn)",
    nameEn: "Longevity Noodles",
    emoji: "🍜",
    category: "main",
    meaning: "长命百岁 (Cháng mìng bǎi suì) - Long life",
    description: "Uncut long noodles symbolizing longevity",
    difficulty: "Easy",
    mustHave: false,
  },
  {
    id: "tangyuan",
    name: "汤圆 (Tāng Yuán)",
    nameEn: "Sweet Rice Balls",
    emoji: "⚪",
    category: "dessert",
    meaning: "团团圆圆 (Tuán tuán yuán yuán) - Family reunion",
    description: "Sweet glutinous rice balls",
    difficulty: "Easy",
    mustHave: false,
  },
  {
    id: "niangao",
    name: "年糕 (Nián Gāo)",
    nameEn: "Rice Cake",
    emoji: "🍚",
    category: "main",
    meaning: "年年高升 (Nián nián gāo shēng) - Progress yearly",
    description: "Sticky rice cake for advancement",
    difficulty: "Easy",
    mustHave: false,
  },
  {
    id: "spring-rolls",
    name: "春卷 (Chūn Juǎn)",
    nameEn: "Spring Rolls",
    emoji: "🥢",
    category: "appetizer",
    meaning: "黄金万两 (Huáng jīn wàn liǎng) - Wealth and gold",
    description: "Crispy rolls symbolizing wealth",
    difficulty: "Medium",
    mustHave: false,
  },
  {
    id: "hotpot",
    name: "火锅 (Huǒ Guō)",
    nameEn: "Hot Pot",
    emoji: "🍲",
    category: "main",
    meaning: "红红火火 (Hóng hóng huǒ huǒ) - Thriving business",
    description: " communal cooking and dining",
    difficulty: "Easy",
    mustHave: false,
  },
  {
    id: "peking-duck",
    name: "北京烤鸭 (Běijīng Kǎo Yā)",
    nameEn: "Peking Duck",
    emoji: "🦆",
    category: "main",
    meaning: "富贵吉祥 (Fù guì jí xiáng) - Wealth and luck",
    description: "Crispy duck with pancakes",
    difficulty: "Hard",
    mustHave: false,
  },
  {
    id: "shark-fin",
    name: "鱼翅 (Yú Chì)",
    nameEn: "Shark Fin Soup",
    emoji: "🥣",
    category: "soup",
    meaning: "年年有余 (Nián nián yǒu yú) - Abundance",
    description: "Traditional premium soup",
    difficulty: "Hard",
    mustHave: false,
  },
  {
    id: "abalone",
    name: "鲍鱼 (Bào Yú)",
    nameEn: "Abalone",
    emoji: "🐚",
    category: "main",
    meaning: "招财进宝 (Zhāo cái jìn bǎo) - Wealth",
    description: "Premium seafood for celebrations",
    difficulty: "Medium",
    mustHave: false,
  },
  {
    id: "lotus-root",
    name: "莲藕 (Lián Ǒu)",
    nameEn: "Lotus Root",
    emoji: "🪷",
    category: "vegetable",
    meaning: "路路通 (Lù lù tōng) - Smooth progress",
    description: "象征畅通无阻",
    difficulty: "Easy",
    mustHave: false,
  },
  {
    id: "eight-treasure",
    name: "八宝饭 (Bā Bǎo Fàn)",
    nameEn: "Eight Treasure Rice",
    emoji: "🍚",
    category: "dessert",
    meaning: "甜蜜幸福 (Tián mì xìng fú) - Sweet happiness",
    description: "Glutinous rice with eight treasures",
    difficulty: "Medium",
    mustHave: false,
  },
];

const orderingPhrases = [
  {
    chinese: "服务员，请给我们来一条红烧鱼。",
    pinyin: "Fú wù yuán, qǐng gěi wǒ men lái yì tiáo hóng shāo yú.",
    english: "Waiter, please bring us a braised fish.",
  },
  {
    chinese: "饺子要多少个？",
    pinyin: "Jiǎo zi yào duō shǎo gè?",
    english: "How many dumplings would you like?",
  },
  {
    chinese: "有没有素馅的饺子？",
    pinyin: "Yǒu méi yǒu sù xiàn de jiǎo zi?",
    english: "Do you have vegetarian dumplings?",
  },
  {
    chinese: "这菜有什么配料？",
    pinyin: "Zhè cài yǒu shén me pèi liào?",
    english: "What are the ingredients in this dish?",
  },
  {
    chinese: "请给我们一个包间。",
    pinyin: "Qǐng gěi wǒ men yí gè bāo jiān.",
    english: "We'd like a private room, please.",
  },
  {
    chinese: "这道菜是辣的吗？",
    pinyin: "Zhè dào cài shì là de ma?",
    english: "Is this dish spicy?",
  },
  {
    chinese: "请问有没有什么推荐？",
    pinyin: "Qǐng wèn yǒu méi yǒu shén me tuī jiàn?",
    english: "Do you have any recommendations?",
  },
  {
    chinese: "我们想先来几个凉菜。",
    pinyin: "Wǒ men xiǎng xiān lái jǐ gè liáng cài.",
    english: "We'd like to start with some cold dishes.",
  },
];

export function MenuAssistantPage({ lang = "en" }: { lang?: string } = {}) {
  const [guests, setGuests] = useState(4);
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: "all", label: "All" },
    { id: "appetizer", label: "Appetizers" },
    { id: "main", label: "Main Dishes" },
    { id: "soup", label: "Soups" },
    { id: "vegetable", label: "Vegetables" },
    { id: "dessert", label: "Desserts" },
  ];

  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || dish.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleDish = (dishId: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishId)
        ? prev.filter((id) => id !== dishId)
        : [...prev, dishId],
    );
  };

  const copyMenuToClipboard = async () => {
    const menuText = selectedDishes
      .map((id) => {
        const dish = dishes.find((d) => d.id === id);
        return dish ? `• ${dish.name} - ${dish.nameEn}` : "";
      })
      .filter(Boolean)
      .join("\n");

    const fullText = `Spring Festival Menu (${guests} guests)\n\n${menuText}`;
    await navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const recommendedCount = Math.ceil(guests * 1.5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🍽️</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Spring Festival Menu Assistant
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Design your perfect reunion dinner with traditional Chinese
              dishes. Each dish carries lucky meanings for the new year.
            </p>
          </div>

          {/* Guest Count */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-gradient-to-r from-rose-100/80 to-orange-100/80 dark:from-rose-900/30 dark:to-orange-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                    <Users className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Number of Guests
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      How many people?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <span className="text-2xl font-bold text-foreground w-12 text-center">
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests(guests + 1)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Recommended: {recommendedCount} dishes for {guests} guests
              </p>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="mb-6">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-rose-200 dark:border-rose-800 bg-white/60 dark:bg-zinc-800/60 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    activeCategory === cat.id
                      ? "bg-rose-600 text-white"
                      : "bg-muted text-muted-foreground hover:bg-rose-100 dark:hover:bg-rose-900/30",
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Dishes Grid */}
            <div className="lg:col-span-2">
              <div className="grid gap-4 md:grid-cols-2">
                {filteredDishes.map((dish) => {
                  const isSelected = selectedDishes.includes(dish.id);
                  return (
                    <button
                      key={dish.id}
                      type="button"
                      onClick={() => toggleDish(dish.id)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all duration-300",
                        isSelected
                          ? "border-rose-500 bg-rose-50/60 dark:bg-rose-900/20 shadow-md"
                          : "border-rose-200/50 dark:border-rose-800/50 bg-white/60 dark:bg-zinc-800/60 hover:border-rose-300 dark:hover:border-rose-700",
                      )}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-3xl">{dish.emoji}</span>
                        {dish.mustHave && (
                          <span className="text-xs px-2 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 font-medium">
                            Must have
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {dish.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {dish.nameEn}
                      </p>
                      <p className="text-xs text-amber-600 dark:text-amber-400 mb-2">
                        {dish.meaning}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {dish.difficulty}
                        </span>
                        {isSelected && (
                          <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Menu */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-200 dark:border-rose-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Your Menu
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedDishes.length} dishes selected
                      </p>
                    </div>
                  </div>

                  {selectedDishes.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-8">
                      Tap dishes to add them to your menu
                    </p>
                  ) : (
                    <>
                      <ul className="space-y-2 mb-4">
                        {selectedDishes.map((id) => {
                          const dish = dishes.find((d) => d.id === id)!;
                          return (
                            <li
                              key={id}
                              className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                            >
                              <span className="text-sm">
                                {dish.emoji} {dish.nameEn}
                              </span>
                              <button
                                type="button"
                                onClick={() => toggleDish(id)}
                                className="p-1 rounded hover:bg-muted"
                              >
                                <X className="h-4 w-4 text-muted-foreground" />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-rose-600 hover:bg-rose-700"
                          onClick={copyMenuToClipboard}
                        >
                          {copied ? (
                            <>
                              <Check className="h-4 w-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" />
                              Copy List
                            </>
                          )}
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={`/${lang}/learn`}>
                            <ChevronRight className="h-4 w-4 mr-2" />
                            More Tools
                          </Link>
                        </Button>
                      </div>
                    </>
                  )}
                </div>

                {/* Ordering Phrases */}
                <div className="mt-6 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Useful Phrases
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Order with confidence
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {orderingPhrases.slice(0, 4).map((phrase, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60"
                      >
                        <p className="text-sm font-medium text-foreground mb-1">
                          {phrase.chinese}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {phrase.pinyin}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            No account needed • No registration • Start learning immediately
          </p>
        </div>
      </footer>
    </div>
  );
}
