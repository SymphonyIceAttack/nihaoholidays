"use client";

import { FestivalCard } from "@/components/home/festival-card";

const festivals = [
  {
    id: "spring",
    name: "Spring Festival",
    emoji: "🧧",
    subtitle: "A festival about reunion and New Year's Eve dinner",
    description:
      "China's most important traditional festival, symbolizing saying goodbye to the old and welcoming the new, as well as family reunions. Master everything from New Year's Eve dinner menus to red envelope amounts, blessings to dining etiquette.",
    tags: ["Family Reunion", "Food", "Beginner"],
    isRecommended: true,
    tools: [
      { name: "Design a New Year's Eve Feast", type: "food" as const },
      { name: "New Year Greeting Generator", type: "expression" as const },
      { name: "Red Envelope Guide", type: "gift" as const },
    ],
  },
  {
    id: "lantern",
    name: "Lantern Festival",
    emoji: "🏮",
    subtitle: "A festival about lantern riddles and tangyuan",
    description:
      "The grand finale of the Spring Festival. Enjoy lantern displays, solve riddles, eat tangyuan, and experience the festive atmosphere.",
    tags: ["Family Reunion", "Beginner"],
    tools: [
      { name: "Lantern Riddles Game", type: "other" as const },
      { name: "Tangyuan Filling Guide", type: "food" as const },
    ],
  },
  {
    id: "qingming",
    name: "Qingming Festival",
    emoji: "🌿",
    subtitle: "A festival about remembrance and spring outings",
    description:
      "A time for honoring ancestors through tomb sweeping, as well as enjoying spring outings. Learn about ceremonial rituals and taboos.",
    tags: ["Intermediate"],
    tools: [
      { name: "Qingming Traditions Guide", type: "other" as const },
      { name: "Ceremonial Expressions & Taboos", type: "expression" as const },
    ],
  },
  {
    id: "dragon-boat",
    name: "Dragon Boat Festival",
    emoji: "🐉",
    subtitle: "A festival about Qu Yuan and zongzi",
    description:
      "Commemorating the patriotic poet Qu Yuan. Experience vibrant folk customs through dragon boat racing, making zongzi, and hanging mugwort.",
    tags: ["Food", "Intermediate"],
    tools: [
      { name: "Zongzi Flavor Guide", type: "food" as const },
      { name: "Dragon Boat Festival Blessings", type: "expression" as const },
      { name: "Dragon Boat Culture Introduction", type: "other" as const },
    ],
  },
  {
    id: "qixi",
    name: "Qixi Festival",
    emoji: "💕",
    subtitle: "A festival about the Cowherd and the Weaver Girl",
    description:
      "China's traditional Valentine's Day, originating from the beautiful legend of the Cowherd and Weaver Girl. A romantic moment to express love.",
    tags: ["Romantic", "Beginner"],
    tools: [
      { name: "Qixi Blessings", type: "expression" as const },
      { name: "Date Spot Recommendations", type: "other" as const },
      { name: "Gift Guide", type: "gift" as const },
    ],
  },
  {
    id: "mid-autumn",
    name: "Mid-Autumn Festival",
    emoji: "🥮",
    subtitle: "A festival about the moon and longing",
    description:
      "A reunion festival of moon viewing, eating mooncakes, and missing loved ones far away. The second most important festival after the Spring Festival.",
    tags: ["Family Reunion", "Food", "Beginner"],
    isRecommended: true,
    tools: [
      { name: "Choose a Mooncake Gift Box", type: "gift" as const },
      { name: "Mooncake Flavor Guide", type: "food" as const },
      { name: "Mid-Autumn Blessing Templates", type: "expression" as const },
    ],
  },
  {
    id: "chongyang",
    name: "Double Ninth Festival",
    emoji: "🏔",
    subtitle: "A festival about respecting elders and climbing heights",
    description:
      "Celebrated on the ninth day of the ninth lunar month. A traditional festival of climbing heights and honoring the elderly, also known as Senior's Day.",
    tags: ["Intermediate"],
    tools: [
      { name: "Double Ninth Blessings", type: "expression" as const },
      { name: "Elder Respect Etiquette", type: "other" as const },
    ],
  },
  {
    id: "winter-solstice",
    name: "Winter Solstice",
    emoji: "❄",
    subtitle: "A festival about dumplings and tangyuan",
    description:
      "The shortest day of the year. Northerners eat dumplings, southerners eat tangyuan, symbolizing reunion and harmony.",
    tags: ["Food", "Beginner"],
    tools: [
      { name: "North-South Food Differences", type: "food" as const },
      { name: "Winter Solstice Blessings", type: "expression" as const },
    ],
  },
];

interface FestivalGridProps {
  lang: string;
  theme?: string;
}

export function FestivalGrid({ lang, theme = "all" }: FestivalGridProps) {
  const filteredFestivals = festivals.filter((festival) => {
    const themeMatch =
      theme === "all" ||
      festival.tags.some(
        (tag) =>
          tag.toLowerCase() === theme ||
          (theme === "family" && tag === "Family Reunion") ||
          (theme === "food" && tag === "Food") ||
          (theme === "romance" && tag === "Romantic"),
      );

    return themeMatch;
  });

  return (
    <div className="space-y-6" id="festivals">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Festival List
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Each festival comes with complete cultural overviews, interactive
            quizzes, and practical tools
          </p>
        </div>
        <span className="text-sm text-muted-foreground hidden sm:block">
          Sorted by Lunar Calendar
        </span>
      </div>

      {filteredFestivals.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No festivals match your filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}
