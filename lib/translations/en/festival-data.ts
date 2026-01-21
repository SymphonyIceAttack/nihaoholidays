// Festival data - English translations
// Contains per-festival user type data for festival and culture pages

import type {
  FestivalDataCollection,
  UserTypeDataCollection,
} from "../schema/festival-data";

// Per-festival user type data for festival page (practical scenarios)
export const festivalUserTypeData: UserTypeDataCollection = {
  spring: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Navigate Spring Festival like a local",
      student: "Celebrate with friends and classmates",
      worker: "Master workplace Spring Festival",
    },
    focusContent: {
      tourist: [
        "Reunion dinner etiquette",
        "Red envelope customs",
        "Festival greetings",
        "Temple visits",
      ],
      student: [
        "Spring Festival party conversations",
        "New year wishes for peers",
        "Holiday activities with friends",
        "Social media posts",
      ],
      worker: [
        "Boss and colleague greetings",
        "Company年会 (annual party)",
        "Year-end bonus etiquette",
        "Holiday work arrangements",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "rose",
      student: "blue",
      worker: "emerald",
    },
    backgroundColor: {
      tourist: "bg-rose-100 dark:bg-rose-900/30",
      student: "bg-blue-100 dark:bg-blue-900/30",
      worker: "bg-emerald-100 dark:bg-emerald-900/30",
    },
  },
  lantern: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Experience lantern festival magic",
      student: "Enjoy lantern festival celebrations",
      worker: "Family and work balance",
    },
    focusContent: {
      tourist: [
        "Lantern riddle games",
        "Tangyuan ordering",
        "Night market navigation",
        "Photo spots and tips",
      ],
      student: [
        "Romantic date scenarios",
        "Campus lantern events",
        "Friends outing activities",
        "Festival wishes",
      ],
      worker: [
        "Family reunion phrases",
        "Holiday work messages",
        "Team celebration ideas",
        "Evening event planning",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "amber",
      student: "violet",
      worker: "teal",
    },
    backgroundColor: {
      tourist: "bg-amber-100 dark:bg-amber-900/30",
      student: "bg-violet-100 dark:bg-violet-900/30",
      worker: "bg-teal-100 dark:bg-teal-900/30",
    },
  },
  mid_autumn: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Discover moon festival traditions",
      student: "Share mooncakes with friends",
      worker: "Navigate Mid-Autumn at work",
    },
    focusContent: {
      tourist: [
        "Mooncake selection guide",
        "Moon viewing locations",
        "Lantern lighting customs",
        "Family dining etiquette",
      ],
      student: [
        "Campus Mid-Autumn events",
        "Poetry sharing moments",
        "Friends gathering phrases",
        "Moon photos for social media",
      ],
      worker: [
        "Colleague mooncake gifting",
        "Moon festival work messages",
        "Family time management",
        "Holiday scheduling",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "orange",
      student: "indigo",
      worker: "cyan",
    },
    backgroundColor: {
      tourist: "bg-orange-100 dark:bg-orange-900/30",
      student: "bg-indigo-100 dark:bg-indigo-900/30",
      worker: "bg-cyan-100 dark:bg-cyan-900/30",
    },
  },
  dragon_boat: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Experience dragon boat races",
      student: "Join summer festival fun",
      worker: "Work-life during Dragon Boat",
    },
    focusContent: {
      tourist: [
        "Zongzi ordering",
        "Race viewing spots",
        "Festival safety tips",
        "Local traditions guide",
      ],
      student: [
        "Campus dragon boat events",
        "Summer activity planning",
        "Holiday wishes for peers",
        "Outdoor festival tips",
      ],
      worker: [
        "Holiday work arrangements",
        "Team building activities",
        "Family zongzi making",
        "Summer greeting messages",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "emerald",
      student: "sky",
      worker: "slate",
    },
    backgroundColor: {
      tourist: "bg-emerald-100 dark:bg-emerald-900/30",
      student: "bg-sky-100 dark:bg-sky-900/30",
      worker: "bg-slate-100 dark:bg-slate-900/30",
    },
  },
  qingming: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Explore Qingming traditions",
      student: "Learn ancestral traditions",
      worker: "Honor ancestors professionally",
    },
    focusContent: {
      tourist: [
        "Tomb sweeping etiquette",
        "Spring outing phrases",
        "Food recommendations",
        "Respectful behavior guide",
      ],
      student: [
        "History and meaning",
        "Campus remembrance events",
        "Spring outing planning",
        "Traditional food tasting",
      ],
      worker: [
        "Holiday leave requests",
        "Family visit arrangements",
        "Respectful work messages",
        "Spring work schedule",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "green",
      student: "lime",
      worker: "stone",
    },
    backgroundColor: {
      tourist: "bg-green-100 dark:bg-green-900/30",
      student: "bg-lime-100 dark:bg-lime-900/30",
      worker: "bg-stone-100 dark:bg-stone-900/30",
    },
  },
  qixi: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Experience Chinese Valentine's Day",
      student: "Celebrate love and romance",
      worker: "Work and romance balance",
    },
    focusContent: {
      tourist: [
        "Romantic dinner reservations",
        "Couple activities",
        "Gift giving customs",
        "Festival photo spots",
      ],
      student: [
        "Campus Qixi events",
        "Romantic confessions",
        "Couple celebrations",
        "Love poetry sharing",
      ],
      worker: [
        "Evening date planning",
        "Work-life balance tips",
        "Holiday greeting messages",
        "Special occasion prep",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "pink",
      student: "rose",
      worker: "red",
    },
    backgroundColor: {
      tourist: "bg-pink-100 dark:bg-pink-900/30",
      student: "bg-rose-100 dark:bg-rose-900/30",
      worker: "bg-red-100 dark:bg-red-900/30",
    },
  },
};

// Per-festival user type data for culture page (cultural understanding)
export const cultureUserTypeData: UserTypeDataCollection = {
  spring: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Discover Spring Festival heritage",
      student: "Study Spring Festival depth",
      worker: "Workplace festival culture",
    },
    focusContent: {
      tourist: [
        "New Year origin story",
        "Traditional customs",
        "Red symbolism",
        "Regional variations",
      ],
      student: [
        "Ancient origins",
        "Historical evolution",
        "Cultural significance",
        "Academic perspectives",
      ],
      worker: [
        "Corporate traditions",
        "Business relationships",
        "Professional etiquette",
        "Workplace harmony",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "amber",
      student: "violet",
      worker: "teal",
    },
    backgroundColor: {
      tourist: "bg-amber-100 dark:bg-amber-900/30",
      student: "bg-violet-100 dark:bg-violet-900/30",
      worker: "bg-teal-100 dark:bg-teal-900/30",
    },
  },
  lantern: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Explore lantern festival culture",
      student: "Learn lantern festival scholars",
      worker: "Family and community ties",
    },
    focusContent: {
      tourist: [
        "Lantern history",
        "Riddle tradition origins",
        "Tangyuan symbolism",
        "Festival mythology",
      ],
      student: [
        "Poetry and lanterns",
        "Legend of Yuan Xiao",
        "Cultural poetry",
        "Academic research",
      ],
      worker: [
        "Family reunion culture",
        "Community celebrations",
        "Workplace relationships",
        "Social traditions",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "yellow",
      student: "purple",
      worker: "indigo",
    },
    backgroundColor: {
      tourist: "bg-yellow-100 dark:bg-yellow-900/30",
      student: "bg-purple-100 dark:bg-purple-900/30",
      worker: "bg-indigo-100 dark:bg-indigo-900/30",
    },
  },
  mid_autumn: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Experience moon festival heritage",
      student: "Study moon festival poetry",
      worker: "Family and business harmony",
    },
    focusContent: {
      tourist: [
        "Moon goddess legend",
        "Harvest celebration history",
        "Mooncake traditions",
        "Regional customs",
      ],
      student: [
        "Chang'e mythology",
        "Classical poetry",
        "Moon symbolism",
        "Cultural academic study",
      ],
      worker: [
        "Family values",
        "Business relationships",
        "Work-life harmony",
        "Corporate traditions",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "orange",
      student: "slate",
      worker: "gray",
    },
    backgroundColor: {
      tourist: "bg-orange-100 dark:bg-orange-900/30",
      student: "bg-slate-100 dark:bg-slate-900/30",
      worker: "bg-gray-100 dark:bg-gray-900/30",
    },
  },
  dragon_boat: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Discover dragon boat history",
      student: "Study ancient poet Qu Yuan",
      worker: "Team spirit and unity",
    },
    focusContent: {
      tourist: [
        "Qu Yuan legend",
        "Dragon boat origins",
        "Traditional customs",
        "Regional race styles",
      ],
      student: [
        "Qu Yuan's life",
        "Warring states history",
        "Poetry of Chu",
        "Cultural significance",
      ],
      worker: [
        "Team building culture",
        "Corporate teamwork",
        "Community spirit",
        "Workplace unity",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "cyan",
      student: "blue",
      worker: "teal",
    },
    backgroundColor: {
      tourist: "bg-cyan-100 dark:bg-cyan-900/30",
      student: "bg-blue-100 dark:bg-blue-900/30",
      worker: "bg-teal-100 dark:bg-teal-900/30",
    },
  },
  qingming: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Explore Qingming traditions",
      student: "Study ancestral remembrance",
      worker: "Family and professional values",
    },
    focusContent: {
      tourist: [
        "Ancestor worship history",
        "Cold Food Festival origin",
        "Spring outing culture",
        "Traditional practices",
      ],
      student: [
        "Ancient burial customs",
        "Confucian filial piety",
        "Historical development",
        "Cultural anthropology",
      ],
      worker: [
        "Filial piety in business",
        "Family responsibilities",
        "Workplace ethics",
        "Traditional values",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "green",
      student: "emerald",
      worker: "stone",
    },
    backgroundColor: {
      tourist: "bg-green-100 dark:bg-green-900/30",
      student: "bg-emerald-100 dark:bg-emerald-900/30",
      worker: "bg-stone-100 dark:bg-stone-900/30",
    },
  },
  qixi: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Experience Chinese Valentine's",
      student: "Study love poetry and romance",
      worker: "Love and work life balance",
    },
    focusContent: {
      tourist: [
        "Niulang and Zhinu legend",
        "Cowherd and weaver girl",
        "Star-crossed lovers",
        "Festival origins",
      ],
      student: [
        "Classical love poetry",
        "Romantic literature",
        "Cultural views on love",
        "Historical romance stories",
      ],
      worker: [
        "Romance in adulthood",
        "Relationship culture",
        "Work-life harmony",
        "Modern dating customs",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "rose",
      student: "pink",
      worker: "fuchsia",
    },
    backgroundColor: {
      tourist: "bg-rose-100 dark:bg-rose-900/30",
      student: "bg-pink-100 dark:bg-pink-900/30",
      worker: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    },
  },
};

// Festival basic data
export const festivalData: FestivalDataCollection = {
  spring: {
    basicInfo: {
      name: "Spring Festival",
      emoji: "🧧",
      date: "January/February",
      lunarDate: "1st day of 1st lunar month",
      description: "China's most important traditional festival",
      history:
        "Spring Festival has a history of over 4,000 years. It's a time for family reunions, honoring ancestors, and welcoming good luck for the new year.",
      customs: [
        "Cleaning house to sweep away bad luck",
        "Decorating with red couplets and paper cuttings",
        "Reunion dinner on New Year's Eve",
        "Giving red envelopes (hongbao) with money",
        "Setting off fireworks and firecrackers",
        "Visiting relatives and friends",
        "Wearing new clothes in red",
      ],
      taboo: [
        "Don't wash hair or clothes on New Year's Day",
        "Don't use scissors or sharp objects",
        "Don't break things",
        "Don't say negative words",
        "Don't clean or sweep on day one",
      ],
    },
    expressions: [
      {
        chinese: "新年快乐",
        pinyin: "Xīn nián kuài lè",
        english: "Happy New Year",
        scenario: "General New Year greeting",
      },
      {
        chinese: "恭喜发财",
        pinyin: "Gōng xǐ fā cái",
        english: "Wishing you wealth and prosperity",
        scenario: "Traditional blessing for prosperity",
      },
      {
        chinese: "万事如意",
        pinyin: "Wàn shì rú yì",
        english: "May everything go as you wish",
        scenario: "Formal New Year wishes",
      },
      {
        chinese: "身体健康",
        pinyin: "Shēn tǐ jiàn kāng",
        english: "Wishing you good health",
        scenario: "Health wishes for elders",
      },
      {
        chinese: "阖家欢乐",
        pinyin: "Hé jiā huān lè",
        english: "Wishing your family happiness",
        scenario: "Family-oriented blessing",
      },
    ],
    foods: [
      {
        name: "Fish",
        emoji: "🐟",
        meaning: "Surplus and prosperity",
        description: "Whole fish is essential, representing abundance",
        howToOrder: "Qǐng gěi wǒ yì tiáo hóng shāo yú",
      },
      {
        name: "Dumplings",
        emoji: "🥟",
        meaning: "Wealth and treasure",
        description: "Shaped like ancient gold ingots, symbolizing wealth",
        howToOrder: "Wǒ yào jiǎo zi",
      },
      {
        name: "Noodles",
        emoji: "🍜",
        meaning: "Longevity",
        description: "Uncut noodles represent long life",
        howToOrder: "Lái yí wèi cháng shòu miàn",
      },
      {
        name: "Tangyuan",
        emoji: "⚪",
        meaning: "Family togetherness",
        description: "Sweet rice balls symbolizing reunion",
        howToOrder: "Wǒ yào tāng yuán",
      },
      {
        name: "Niangao",
        emoji: "🍚",
        meaning: "Yearly progress",
        description: "Sticky rice cake for advancement",
      },
    ],
    gifts: [
      {
        name: "Red Envelope",
        emoji: "🧧",
        suitability: "Everyone",
        note: "Money in red paper",
      },
      {
        name: "Fruits Basket",
        emoji: "🧺",
        suitability: "Family visits",
        note: "Oranges for luck",
      },
      {
        name: "Tea",
        emoji: "🍵",
        suitability: "Elders",
        note: "Quality tea leaves",
      },
      {
        name: "Snacks",
        emoji: "🍬",
        suitability: "Children",
        note: "Nuts and candies",
      },
    ],
    tools: [
      {
        name: "Menu Assistant",
        description: "Design your reunion dinner",
        badge: "Popular",
      },
      {
        name: "Greeting Templates",
        description: "Classic blessings for every occasion",
      },
      {
        name: "Red Envelope Guide",
        description: "Amounts and etiquette",
        badge: "New",
      },
      {
        name: "Cultural Overview",
        description: "History, customs, and traditions",
        badge: "Learn",
      },
      {
        name: "Interactive Quiz",
        description: "Test your knowledge",
        badge: "Practice",
      },
    ],
  },
  lantern: {
    basicInfo: {
      name: "Lantern Festival",
      emoji: "🏮",
      date: "February",
      lunarDate: "15th day of 1st lunar month",
      description: "The grand finale of Spring Festival",
      history:
        "Lantern Festival marks the first full moon of the lunar year, symbolizing the return of spring and family reunions.",
      customs: [
        "Lighting and hanging lanterns",
        "Solving lantern riddles",
        "Eating tangyuan",
        "Watching lantern parades",
        "Lion and dragon dances",
      ],
    },
    expressions: [
      {
        chinese: "元宵节快乐",
        pinyin: "Yuán xiāo jié kuài lè",
        english: "Happy Lantern Festival",
        scenario: "General greeting",
      },
      {
        chinese: "看花灯",
        pinyin: "Kàn huā dēng",
        english: "Watching decorative lanterns",
        scenario: "Talking about lantern viewing",
      },
      {
        chinese: "猜灯谜",
        pinyin: "Cāi dēng mí",
        english: "Guessing lantern riddles",
        scenario: "Riddle game context",
      },
    ],
    foods: [
      {
        name: "Tangyuan",
        emoji: "⚪",
        meaning: "Family togetherness",
        description: "Sweet rice balls symbolizing reunion",
        howToOrder: "Wǒ yào tāng yuán",
      },
    ],
    gifts: [
      {
        name: "Lantern",
        emoji: "🏮",
        suitability: "Children",
        note: "Traditional decorative lantern",
      },
      {
        name: "Tangyuan Box",
        emoji: "⚪",
        suitability: "Family",
        note: "Sweet rice balls gift set",
      },
    ],
    tools: [
      {
        name: "Lantern Riddle Game",
        description: "Test your knowledge with riddles",
        badge: "New",
      },
      {
        name: "Tangyuan Picker",
        description: "Find the perfect flavor",
      },
      {
        name: "Blessing Templates",
        description: "Create Lantern Festival wishes",
      },
    ],
  },
  mid_autumn: {
    basicInfo: {
      name: "Mid-Autumn Festival",
      emoji: "🥮",
      date: "September/October",
      lunarDate: "15th day of 8th lunar month",
      description: "Moon viewing festival",
      history:
        "Mid-Autumn Festival dates back over 3,000 years. It's a time for family reunions under the full moon.",
      customs: [
        "Admiring the full moon",
        "Eating mooncakes",
        "Family reunions",
        "Lighting lanterns",
        "Worshiping the moon goddess",
      ],
      taboo: ["Don't point at the moon", "Don't gift mooncakes in sets of 4"],
    },
    expressions: [
      {
        chinese: "中秋节快乐",
        pinyin: "Zhōng qiū jié kuài lè",
        english: "Happy Mid-Autumn Festival",
        scenario: "General greeting",
      },
      {
        chinese: "月圆人团圆",
        pinyin: "Yuè yuán rén tuán yuán",
        english: "Full moon, full family",
        scenario: "Reunion wishes",
      },
      {
        chinese: "但愿人长久",
        pinyin: "Dàn yuàn rén jiǔ cháng",
        english: "May we live long and share the moon",
        scenario: "Poetic blessing for loved ones",
      },
    ],
    foods: [
      {
        name: "Mooncake",
        emoji: "🥮",
        meaning: "Reunion and completeness",
        description: "Round pastry symbolizing full moon and family unity",
        howToOrder: "Wǒ yào yí gè yuè bǐng",
      },
      {
        name: "Osmanthus Wine",
        emoji: "🍶",
        meaning: "Sweet life",
        description: "Fragrant wine symbolizing prosperity",
      },
      {
        name: "Crabs",
        emoji: "🦀",
        meaning: "Abundance",
        description: "Autumn crabs in season",
      },
    ],
    gifts: [
      {
        name: "Mooncake Box",
        emoji: "🥮",
        suitability: "Everyone",
        note: "Quality gift sets",
      },
      {
        name: "Tea",
        emoji: "🍵",
        suitability: "Elders/Colleagues",
        note: "Premium tea",
      },
    ],
    tools: [
      {
        name: "Mooncake Picker",
        description: "Find the perfect mooncake gift",
        badge: "New",
      },
      {
        name: "Blessing Templates",
        description: "Create Mid-Autumn wishes",
      },
    ],
  },
  dragon_boat: {
    basicInfo: {
      name: "Dragon Boat Festival",
      emoji: "🐉",
      date: "June",
      lunarDate: "5th day of 5th lunar month",
      description: "Dragon boat racing festival",
      history:
        "Dragon Boat Festival commemorates the ancient poet Qu Yuan. Celebrated for over 2,000 years.",
      customs: [
        "Dragon boat racing",
        "Eating zongzi",
        "Hanging mugwort and calamus",
        "Wearing perfume pouches",
        "Drinking realgar wine",
      ],
      taboo: ["Don't swim in rivers on this day", "Don't eat spicy food"],
    },
    expressions: [
      {
        chinese: "端午节快乐",
        pinyin: "Duān wǔ jié kuài lè",
        english: "Happy Dragon Boat Festival",
        scenario: "General greeting",
      },
      {
        chinese: "赛龙舟",
        pinyin: "Sài lóng zhōu",
        english: "Dragon boat race",
        scenario: "Talking about boat races",
      },
    ],
    foods: [
      {
        name: "Zongzi",
        emoji: "🍙",
        meaning: "Honor and remembrance",
        description: "Sticky rice wrapped in leaves, honoring Qu Yuan",
        howToOrder: "Wǒ yào yí gè zòng zi",
      },
    ],
    gifts: [
      {
        name: "Zongzi",
        emoji: "🍙",
        suitability: "Family/Colleagues",
        note: "Traditional rice dumplings",
      },
      {
        name: "Perfume Pouch",
        emoji: "🌿",
        suitability: "Children",
        note: "Traditional protective charm",
      },
    ],
    tools: [
      {
        name: "Zongzi Guide",
        description: "Types and making methods",
        badge: "New",
      },
      {
        name: "Dragon Boat Race Info",
        description: "Find races near you",
      },
    ],
  },
  qingming: {
    basicInfo: {
      name: "Qingming Festival",
      emoji: "🌿",
      date: "April 4-5",
      lunarDate: "Solar term around April 4-5",
      description: "Tomb sweeping day",
      history:
        "Qingming Festival has been observed for over 2,500 years. It's a time for honoring ancestors and spring outings.",
      customs: [
        "Tomb sweeping and cleaning graves",
        "Offering food and burning incense",
        "Flying kites",
        "Spring outings",
        "Eating qingtuan",
      ],
    },
    expressions: [
      {
        chinese: "清明节安康",
        pinyin: "Qīng míng jié ān kāng",
        english: "Peaceful Qingming Festival",
        scenario: "Respectful greeting",
      },
      {
        chinese: "踏青去",
        pinyin: "Tà qīng qù",
        english: "Going for a spring outing",
        scenario: "Spring activities",
      },
    ],
    foods: [
      {
        name: "Qingtuan",
        emoji: "🟢",
        meaning: "Spring renewal",
        description: "Green sticky rice balls with mugwort",
      },
    ],
    gifts: [
      {
        name: "Fresh Flowers",
        emoji: "💐",
        suitability: "Ancestor offerings",
        note: "Yellow chrysanthemums traditional",
      },
      {
        name: "Joss Paper",
        emoji: "📜",
        suitability: "Ritual use",
        note: "For burning as offering",
      },
    ],
    tools: [
      {
        name: "Tomb Sweeping Guide",
        description: "Respectful practices and etiquette",
        badge: "New",
      },
      {
        name: "Spring Outing Planner",
        description: "Find best spring activities",
      },
    ],
  },
  qixi: {
    basicInfo: {
      name: "Qixi Festival",
      emoji: "💕",
      date: "August",
      lunarDate: "7th day of 7th lunar month",
      description: "China's traditional Valentine's Day",
      history:
        "Qixi Festival is based on the love story of the Cowherd and Weaver Girl. It's also known as Chinese Valentine's Day.",
      customs: [
        "Wishing for needlecraft skills",
        "Eating special foods",
        "Observing stars Vega and Altair",
        "Buying flowers and gifts",
      ],
    },
    expressions: [
      {
        chinese: "七夕快乐",
        pinyin: "Qī xì kuài lè",
        english: "Happy Qixi Festival",
        scenario: "General greeting",
      },
      {
        chinese: "牛郎织女",
        pinyin: "Niú láng zhī nǚ",
        english: "Cowherd and Weaver Girl",
        scenario: "Talking about the legend",
      },
    ],
    foods: [
      {
        name: "Qiaoguo",
        emoji: "🥖",
        meaning: "Skill and dexterity",
        description: "Pastries shaped like skillets",
      },
    ],
    gifts: [
      {
        name: "Flowers",
        emoji: "💐",
        suitability: "Romantic partners",
        note: "Roses or lilies traditional",
      },
      {
        name: "Chocolates",
        emoji: "🍫",
        suitability: "Couples",
        note: "Modern romantic gift",
      },
    ],
    tools: [
      {
        name: "Romantic Date Planner",
        description: "Perfect Qixi activities",
        badge: "New",
      },
      {
        name: "Love Letter Templates",
        description: "Express your feelings",
      },
    ],
  },
};
