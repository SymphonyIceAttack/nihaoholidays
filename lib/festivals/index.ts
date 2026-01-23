import type { Lunisolar } from "lunisolar";
import lunisolar from "lunisolar";
import type { LanguageType } from "../translations/config";

export interface Festival {
  id: string;
  name: string;
  emoji: string;
  date: string;
  dateValue: string;
  days: number;
  description: string;
}

export interface FestivalDefinition {
  id: string;
  emoji: string;
  lunarMonth: number;
  lunarDay: number;
  name: Record<LanguageType, string>;
  description: Record<LanguageType, string>;
}

export type FestivalTag =
  | "Family Reunion"
  | "Food"
  | "Romantic"
  | "Beginner"
  | "Intermediate";

export type ToolType = "food" | "expression" | "gift" | "other";

export interface FestivalTool {
  name: string;
  type: ToolType;
}

export interface FestivalDisplayInfo {
  id: string;
  subtitle: string;
  fullDescription: string;
  tags: FestivalTag[];
  isRecommended?: boolean;
  tools: FestivalTool[];
}

export const festivalDisplayInfo: Record<string, FestivalDisplayInfo> = {
  spring: {
    id: "spring",
    subtitle: "A festival about reunion and New Year's Eve dinner",
    fullDescription:
      "China's most important traditional festival, symbolizing saying goodbye to the old and welcoming the new, as well as family reunions. Master everything from New Year's Eve dinner menus to red envelope amounts, blessings to dining etiquette.",
    tags: ["Family Reunion", "Food", "Beginner"],
    isRecommended: true,
    tools: [
      { name: "Design a New Year's Eve Feast", type: "food" },
      { name: "New Year Greeting Generator", type: "expression" },
      { name: "Red Envelope Guide", type: "gift" },
    ],
  },
  lantern: {
    id: "lantern",
    subtitle: "A festival about lantern riddles and tangyuan",
    fullDescription:
      "The grand finale of the Spring Festival. Enjoy lantern displays, solve riddles, eat tangyuan, and experience the festive atmosphere.",
    tags: ["Family Reunion", "Beginner"],
    tools: [
      { name: "Lantern Riddles Game", type: "other" },
      { name: "Tangyuan Filling Guide", type: "food" },
    ],
  },
  qingming: {
    id: "qingming",
    subtitle: "A festival about remembrance and spring outings",
    fullDescription:
      "A time for honoring ancestors through tomb sweeping, as well as enjoying spring outings. Learn about ceremonial rituals and taboos.",
    tags: ["Intermediate"],
    tools: [
      { name: "Qingming Traditions Guide", type: "other" },
      { name: "Ceremonial Expressions & Taboos", type: "expression" },
    ],
  },
  dragon_boat: {
    id: "dragon_boat",
    subtitle: "A festival about Qu Yuan and zongzi",
    fullDescription:
      "Commemorating the patriotic poet Qu Yuan. Experience vibrant folk customs through dragon boat racing, making zongzi, and hanging mugwort.",
    tags: ["Food", "Intermediate"],
    tools: [
      { name: "Zongzi Flavor Guide", type: "food" },
      { name: "Dragon Boat Festival Blessings", type: "expression" },
      { name: "Dragon Boat Culture Introduction", type: "other" },
    ],
  },
  mid_autumn: {
    id: "mid_autumn",
    subtitle: "A festival about the moon and longing",
    fullDescription:
      "A reunion festival of moon viewing, eating mooncakes, and missing loved ones far away. The second most important festival after the Spring Festival.",
    tags: ["Family Reunion", "Food", "Beginner"],
    isRecommended: true,
    tools: [
      { name: "Choose a Mooncake Gift Box", type: "gift" },
      { name: "Mooncake Flavor Guide", type: "food" },
      { name: "Mid-Autumn Blessing Templates", type: "expression" },
    ],
  },
  qixi: {
    id: "qixi",
    subtitle: "A festival about the Cowherd and the Weaver Girl",
    fullDescription:
      "China's traditional Valentine's Day, originating from the beautiful legend of the Cowherd and Weaver Girl. A romantic moment to express love.",
    tags: ["Romantic", "Beginner"],
    tools: [
      { name: "Qixi Blessings", type: "expression" },
      { name: "Date Spot Recommendations", type: "other" },
      { name: "Gift Guide", type: "gift" },
    ],
  },
  double_ninth: {
    id: "double_ninth",
    subtitle: "A festival about honoring elders and chrysanthemums",
    fullDescription:
      "Double Ninth Festival (Chongyang) celebrates respecting elders, appreciating chrysanthemums, and climbing heights. Also known as Respect for the Aged Day.",
    tags: ["Family Reunion", "Intermediate"],
    tools: [
      { name: "Chongyang Festival Blessings", type: "expression" },
      { name: "Chrysanthemum Tea Guide", type: "food" },
      { name: "Elder Respect Traditions", type: "other" },
    ],
  },
  winter_solstice: {
    id: "winter_solstice",
    subtitle: "A festival about the longest night and yang energy",
    fullDescription:
      "Winter Solstice (Dongzhi) marks the longest night of the year and the return of yang energy. Celebrate with dumplings in the north and tangyuan in the south.",
    tags: ["Family Reunion", "Beginner"],
    tools: [
      { name: "Dumpling vs Tangyuan Guide", type: "food" },
      { name: "Winter Solstice Blessings", type: "expression" },
    ],
  },
  laba: {
    id: "laba",
    subtitle: "A festival about rice porridge and Spring Festival prep",
    fullDescription:
      "Laba Festival celebrates the 8th day of the 12th lunar month with laba porridge (八宝粥). It marks the beginning of intensive Spring Festival preparations.",
    tags: ["Food", "Beginner"],
    tools: [
      { name: "Laba Porridge Recipe", type: "food" },
      { name: "Laba Festival Blessings", type: "expression" },
      { name: "Spring Festival Prep Guide", type: "other" },
    ],
  },
  longtaitou: {
    id: "longtaitou",
    subtitle: "A festival about dragons and getting haircuts",
    fullDescription:
      "Dragon Head Festival celebrates the awakening of dragons and the arrival of spring rains. Get a lucky haircut and eat traditional dragon foods!",
    tags: ["Beginner", "Food"],
    tools: [
      { name: "Haircut Guide", type: "other" },
      { name: "Dragon Foods Guide", type: "food" },
      { name: "Spring Pancake Recipe", type: "food" },
    ],
  },
  shangsi: {
    id: "shangsi",
    subtitle: "A festival about spring purification and renewal",
    fullDescription:
      "Shangsi Festival is one of China's oldest traditions, dating back over 2,000 years. Originally a day for bathing, purification, and driving away misfortune.",
    tags: ["Intermediate"],
    tools: [
      { name: "Spring Outing Planner", type: "other" },
      { name: "Kite Flying Guide", type: "other" },
      { name: "Chrysanthemum Recipe Collection", type: "food" },
    ],
  },
  new_years_eve: {
    id: "new_years_eve",
    subtitle: "A festival about reunion dinner and welcoming the new year",
    fullDescription:
      "New Year's Eve is the most important family reunion night of the year. Enjoy reunion dinner, stay up late, and welcome the new year together!",
    tags: ["Family Reunion", "Food", "Beginner"],
    isRecommended: true,
    tools: [
      { name: "Reunion Dinner Menu", type: "food" },
      { name: "Red Envelope Guide", type: "gift" },
      { name: "New Year Greetings", type: "expression" },
      { name: "Taboo Guide", type: "other" },
    ],
  },
  cold_food: {
    id: "cold_food",
    subtitle: "A festival about cold food and remembrance",
    fullDescription:
      "Cold Food Festival is an ancient tradition from over 2,600 years ago. Commemorate loyal Jie Zitui with cold food and ancestor honors.",
    tags: ["Intermediate"],
    tools: [
      { name: "Cold Food Guide", type: "other" },
      { name: "Qingtuan Recipe", type: "food" },
      { name: "Kite Flying Guide", type: "other" },
    ],
  },
  ghost: {
    id: "ghost",
    subtitle: "A festival about honoring ancestors and appeasing spirits",
    fullDescription:
      "Ghost Festival honors ancestors and appeases hungry spirits. Traditional rituals include offerings, incense, and burning joss paper.",
    tags: ["Intermediate"],
    tools: [
      { name: "Ghost Festival Guide", type: "other" },
      { name: "Offering Etiquette", type: "other" },
      { name: "Taboo Guide", type: "other" },
    ],
  },
  renri: {
    id: "renri",
    subtitle: "A festival celebrating human creation and life",
    fullDescription:
      "Human Day celebrates the creation of humanity by goddess Nüwa. Eat seven-vegetable porridge and make wishes for the year!",
    tags: ["Beginner"],
    tools: [
      { name: "Human Day Guide", type: "other" },
      { name: "Seven-Vegetable Porridge Recipe", type: "food" },
      { name: "Poetry Templates", type: "other" },
    ],
  },
  wealth_god: {
    id: "wealth_god",
    subtitle: "A festival celebrating prosperity and business success",
    fullDescription:
      "God of Wealth Festival celebrates the Wealth God's birthday. Businesses and families pray for wealth and prosperity in the new year.",
    tags: ["Beginner", "Food"],
    tools: [
      { name: "Wealth God Guide", type: "other" },
      { name: "Business Blessings", type: "expression" },
      { name: "Wealth Expressions", type: "expression" },
    ],
  },
};

export const festivalDefinitions: FestivalDefinition[] = [
  {
    id: "spring",
    emoji: "🧧",
    lunarMonth: 1,
    lunarDay: 1,
    name: {
      en: "Spring Festival",
    },
    description: {
      en: "China's most important traditional festival. Family reunions, red envelopes, fireworks, and new year celebrations.",
    },
  },
  {
    id: "lantern",
    emoji: "🏮",
    lunarMonth: 1,
    lunarDay: 15,
    name: {
      en: "Lantern Festival",
    },
    description: {
      en: "The grand finale of Spring Festival. Lantern displays, tangyuan (sweet rice balls), and riddle games.",
    },
  },
  {
    id: "qingming",
    emoji: "🌿",
    lunarMonth: -1,
    lunarDay: 5,
    name: {
      en: "Qingming Festival",
    },
    description: {
      en: "Tomb sweeping day. Honor ancestors, spring outings, and eat qingtuan (green rice balls).",
    },
  },
  {
    id: "dragon_boat",
    emoji: "🐉",
    lunarMonth: 5,
    lunarDay: 5,
    name: {
      en: "Dragon Boat Festival",
    },
    description: {
      en: "Dragon boat races and zongzi (rice dumplings). Commemorates ancient poet Qu Yuan.",
    },
  },
  {
    id: "mid_autumn",
    emoji: "🥮",
    lunarMonth: 8,
    lunarDay: 15,
    name: {
      en: "Mid-Autumn Festival",
    },
    description: {
      en: "Moon viewing festival with mooncakes. Family reunions under the full moon.",
    },
  },
  {
    id: "qixi",
    emoji: "💕",
    lunarMonth: 7,
    lunarDay: 7,
    name: {
      en: "Qixi Festival",
    },
    description: {
      en: "Chinese Valentine's Day. Celebrates the love story of Cowherd and Weaver Girl.",
    },
  },
  {
    id: "double_ninth",
    emoji: "🌼",
    lunarMonth: 9,
    lunarDay: 9,
    name: {
      en: "Double Ninth Festival",
    },
    description: {
      en: "Festival honoring elders, appreciating chrysanthemums, and climbing heights.",
    },
  },
  {
    id: "winter_solstice",
    emoji: "❄️",
    lunarMonth: -1,
    lunarDay: 22,
    name: {
      en: "Winter Solstice",
    },
    description: {
      en: "The longest night of the year. Eat dumplings or tangyuan to celebrate the return of yang energy.",
    },
  },
  {
    id: "laba",
    emoji: "🥣",
    lunarMonth: 12,
    lunarDay: 8,
    name: {
      en: "Laba Festival",
    },
    description: {
      en: "Rice porridge festival. Eat laba porridge and prepare for Spring Festival.",
    },
  },
  {
    id: "longtaitou",
    emoji: "🐉",
    lunarMonth: 2,
    lunarDay: 2,
    name: {
      en: "Dragon Head Festival",
    },
    description: {
      en: "Festival marking the awakening of dragons and spring rains. Get a haircut for good luck!",
    },
  },
  {
    id: "shangsi",
    emoji: "🌸",
    lunarMonth: 3,
    lunarDay: 3,
    name: {
      en: "Shangsi Festival",
    },
    description: {
      en: "Ancient spring bathing festival. One of China's oldest traditions for purification and renewal.",
    },
  },
  {
    id: "new_years_eve",
    emoji: "🎊",
    lunarMonth: 12,
    lunarDay: 30,
    name: {
      en: "New Year's Eve",
    },
    description: {
      en: "The most important family reunion night. Reunion dinner, staying up late, and welcoming the new year.",
    },
  },
  {
    id: "cold_food",
    emoji: "🥗",
    lunarMonth: -1,
    lunarDay: 4,
    name: {
      en: "Cold Food Festival",
    },
    description: {
      en: "Ancient festival of cold food and remembrance. The day before Qingming with unique customs.",
    },
  },
  {
    id: "ghost",
    emoji: "👻",
    lunarMonth: 7,
    lunarDay: 15,
    name: {
      en: "Ghost Festival",
    },
    description: {
      en: "Festival when spirits visit the mortal world. Honor ancestors and appease hungry ghosts.",
    },
  },
  {
    id: "renri",
    emoji: "👤",
    lunarMonth: 1,
    lunarDay: 7,
    name: {
      en: "Human Day",
    },
    description: {
      en: "Festival celebrating the creation of humans. The birthday of all humanity on the 7th day of the first lunar month.",
    },
  },
  {
    id: "wealth_god",
    emoji: "💰",
    lunarMonth: 1,
    lunarDay: 5,
    name: {
      en: "God of Wealth Festival",
    },
    description: {
      en: "Celebrate the Wealth God's birthday. Businesses and families pray for prosperity.",
    },
  },
];

export function getUpcomingFestivals(lang: LanguageType = "en"): Festival[] {
  const today = lunisolar(new Date());
  const currentYear = today.year;
  const festivals: Festival[] = [];

  for (const fest of festivalDefinitions) {
    let festivalSolar: Lunisolar | null = null;

    if (fest.lunarMonth === -1) {
      festivalSolar = lunisolar(`${currentYear}-04-05`);
    } else {
      festivalSolar = lunisolar.fromLunar({
        year: currentYear,
        month: fest.lunarMonth,
        day: fest.lunarDay,
      });
    }

    const festivalDate = festivalSolar.format("YYYY-MM-DD");
    const todayDate = today.format("YYYY-MM-DD");

    if (festivalDate <= todayDate) {
      festivalSolar = lunisolar.fromLunar({
        year: currentYear + 1,
        month: fest.lunarMonth,
        day: fest.lunarDay,
      });
    }

    if (festivalSolar.format("YYYY-MM-DD") > todayDate) {
      const festivalDateObj = new Date(festivalSolar.format("YYYY-MM-DD"));
      const todayJsDate = new Date();
      const daysUntil = Math.ceil(
        (festivalDateObj.getTime() - todayJsDate.getTime()) /
          (1000 * 60 * 60 * 24),
      );

      const festName = fest.name[lang] || fest.name.en;
      const festDescription = fest.description[lang] || fest.description.en;

      festivals.push({
        id: fest.id,
        name: festName,
        emoji: fest.emoji,
        date: festivalSolar.format("MMMM D, YYYY"),
        dateValue: festivalSolar.format("YYYY-MM-DD"),
        days: daysUntil,
        description: festDescription,
      });
    }
  }

  return festivals.sort((a, b) => a.days - b.days);
}

export function getAllFestivals(lang: LanguageType = "en"): Festival[] {
  return getUpcomingFestivals(lang);
}

export function getFestivalById(
  id: string,
  lang: LanguageType = "en",
): Festival | undefined {
  const allFestivals = getUpcomingFestivals(lang);
  return allFestivals.find((f) => f.id === id);
}

export interface FestivalWithDisplayInfo {
  id: string;
  name: string;
  emoji: string;
  subtitle: string;
  description: string;
  tags: FestivalTag[];
  isRecommended?: boolean;
  tools: FestivalTool[];
}

export function getFestivalsWithDisplayInfo(
  lang: LanguageType = "en",
): FestivalWithDisplayInfo[] {
  const result: FestivalWithDisplayInfo[] = [];

  for (const def of festivalDefinitions) {
    const displayInfo = festivalDisplayInfo[def.id];
    if (!displayInfo) continue;

    const name = def.name[lang] || def.name.en;
    const description = def.description[lang] || def.description.en;

    result.push({
      id: def.id,
      name,
      emoji: def.emoji,
      subtitle: displayInfo.subtitle,
      description: displayInfo.fullDescription || description,
      tags: displayInfo.tags,
      isRecommended: displayInfo.isRecommended,
      tools: displayInfo.tools,
    });
  }

  return result;
}

export function getFestivalDisplayInfoById(
  id: string,
  lang: LanguageType = "en",
): FestivalWithDisplayInfo | undefined {
  const def = festivalDefinitions.find((f) => f.id === id);
  const displayInfo = festivalDisplayInfo[id];
  if (!def || !displayInfo) return undefined;

  const name = def.name[lang] || def.name.en;
  const description = def.description[lang] || def.description.en;

  return {
    id: def.id,
    name,
    emoji: def.emoji,
    subtitle: displayInfo.subtitle,
    description: displayInfo.fullDescription || description,
    tags: displayInfo.tags,
    isRecommended: displayInfo.isRecommended,
    tools: displayInfo.tools,
  };
}

export type FestivalDifficulty = "beginner" | "intermediate" | "advanced";

export interface FestivalLearnPageInfo {
  id: string;
  nameKey: string;
  emoji: string;
  subtitleKey: string;
  tools: number;
  difficultyKey: string;
}

export const festivalLearnPageInfo: Record<
  string,
  Omit<FestivalLearnPageInfo, "nameKey" | "subtitleKey" | "difficultyKey">
> = {
  spring: {
    id: "spring",
    emoji: "🧧",
    tools: 12,
  },
  lantern: {
    id: "lantern",
    emoji: "🏮",
    tools: 5,
  },
  qingming: {
    id: "qingming",
    emoji: "🌿",
    tools: 4,
  },
  dragon_boat: {
    id: "dragon_boat",
    emoji: "🐉",
    tools: 6,
  },
  mid_autumn: {
    id: "mid_autumn",
    emoji: "🥮",
    tools: 8,
  },
  qixi: {
    id: "qixi",
    emoji: "💕",
    tools: 5,
  },
  double_ninth: {
    id: "double_ninth",
    emoji: "🌼",
    tools: 6,
  },
  winter_solstice: {
    id: "winter_solstice",
    emoji: "❄️",
    tools: 4,
  },
  laba: {
    id: "laba",
    emoji: "🥣",
    tools: 5,
  },
  longtaitou: {
    id: "longtaitou",
    emoji: "🐉",
    tools: 3,
  },
  shangsi: {
    id: "shangsi",
    emoji: "🌸",
    tools: 3,
  },
  new_years_eve: {
    id: "new_years_eve",
    emoji: "🎊",
    tools: 4,
  },
  cold_food: {
    id: "cold_food",
    emoji: "🥗",
    tools: 3,
  },
  ghost: {
    id: "ghost",
    emoji: "👻",
    tools: 3,
  },
  renri: {
    id: "renri",
    emoji: "👤",
    tools: 3,
  },
  wealth_god: {
    id: "wealth_god",
    emoji: "💰",
    tools: 3,
  },
};

export function getLearnPageFestivals(): FestivalLearnPageInfo[] {
  return [
    {
      id: "spring",
      nameKey: "spring.name",
      emoji: "🧧",
      subtitleKey: "spring.learn.subtitle",
      tools: 12,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "lantern",
      nameKey: "lantern.name",
      emoji: "🏮",
      subtitleKey: "lantern.learn.subtitle",
      tools: 5,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "mid_autumn",
      nameKey: "mid_autumn.name",
      emoji: "🥮",
      subtitleKey: "mid_autumn.learn.subtitle",
      tools: 8,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "dragon_boat",
      nameKey: "dragon_boat.name",
      emoji: "🐉",
      subtitleKey: "dragon_boat.learn.subtitle",
      tools: 6,
      difficultyKey: "difficulty.intermediate",
    },
    {
      id: "qingming",
      nameKey: "qingming.name",
      emoji: "🌿",
      subtitleKey: "qingming.learn.subtitle",
      tools: 4,
      difficultyKey: "difficulty.intermediate",
    },
    {
      id: "qixi",
      nameKey: "qixi.name",
      emoji: "💕",
      subtitleKey: "qixi.learn.subtitle",
      tools: 5,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "double_ninth",
      nameKey: "double_ninth.name",
      emoji: "🌼",
      subtitleKey: "double_ninth.learn.subtitle",
      tools: 6,
      difficultyKey: "difficulty.intermediate",
    },
    {
      id: "winter_solstice",
      nameKey: "winter_solstice.name",
      emoji: "❄️",
      subtitleKey: "winter_solstice.learn.subtitle",
      tools: 4,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "laba",
      nameKey: "laba.name",
      emoji: "🥣",
      subtitleKey: "laba.learn.subtitle",
      tools: 5,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "longtaitou",
      nameKey: "longtaitou.name",
      emoji: "🐉",
      subtitleKey: "longtaitou.learn.subtitle",
      tools: 3,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "shangsi",
      nameKey: "shangsi.name",
      emoji: "🌸",
      subtitleKey: "shangsi.learn.subtitle",
      tools: 3,
      difficultyKey: "difficulty.intermediate",
    },
    {
      id: "new_years_eve",
      nameKey: "new_years_eve.name",
      emoji: "🎊",
      subtitleKey: "new_years_eve.learn.subtitle",
      tools: 4,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "cold_food",
      nameKey: "cold_food.name",
      emoji: "🥗",
      subtitleKey: "cold_food.learn.subtitle",
      tools: 3,
      difficultyKey: "difficulty.intermediate",
    },
    {
      id: "ghost",
      nameKey: "ghost.name",
      emoji: "👻",
      subtitleKey: "ghost.learn.subtitle",
      tools: 3,
      difficultyKey: "difficulty.intermediate",
    },
    {
      id: "renri",
      nameKey: "renri.name",
      emoji: "👤",
      subtitleKey: "renri.learn.subtitle",
      tools: 3,
      difficultyKey: "difficulty.beginner",
    },
    {
      id: "wealth_god",
      nameKey: "wealth_god.name",
      emoji: "💰",
      subtitleKey: "wealth_god.learn.subtitle",
      tools: 3,
      difficultyKey: "difficulty.beginner",
    },
  ];
}

export interface LearningStep {
  step: number;
  titleKey: string;
  description: string;
  icon: string;
}

export const learningSteps: LearningStep[] = [
  {
    step: 1,
    titleKey: "learn.step.choose",
    description: "Start with recommended ones or explore freely",
    icon: "calendar",
  },
  {
    step: 2,
    titleKey: "learn.step.expressions",
    description: "Master practical phrases with pinyin and audio",
    icon: "message",
  },
  {
    step: 3,
    titleKey: "learn.step.practice",
    description: "Use interactive tools to practice real situations",
    icon: "tools",
  },
];

// Get all festival IDs from festivalDefinitions
export function getAllFestivalIds(): string[] {
  return festivalDefinitions.map((f) => f.id);
}

// Festival data exports for unified access
export {
  cultureUserTypeData,
  festivalData,
  festivalUserTypeData,
  learnPageFestivals,
  quizQuestions,
} from "@/lib/translations/en/festival-data";
