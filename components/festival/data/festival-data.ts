// Festival comprehensive data - SSR compatible (static data)
export const festivalData: Record<
  string,
  {
    name: string;
    emoji: string;
    date: string;
    lunarDate: string;
    description: string;
    history: string;
    customs: string[];
    taboo: string[];
    expressions: Array<{
      chinese: string;
      pinyin: string;
      english: string;
      scenario: string;
      userType?: "tourist" | "student" | "worker";
    }>;
    foods: Array<{
      name: string;
      emoji: string;
      meaning: string;
      description: string;
      howToOrder?: string;
    }>;
    gifts: Array<{
      name: string;
      emoji: string;
      suitability: string;
      note: string;
    }>;
    tools: Array<{ name: string; description: string; badge?: string }>;
    scenarios?: {
      tourist?: Array<{
        title: string;
        content: string;
        phrases: Array<{ chinese: string; pinyin: string; english: string }>;
      }>;
      student?: Array<{
        title: string;
        content: string;
        phrases: Array<{ chinese: string; pinyin: string; english: string }>;
      }>;
      worker?: Array<{
        title: string;
        content: string;
        phrases: Array<{ chinese: string; pinyin: string; english: string }>;
      }>;
    };
  }
> = {
  spring: {
    name: "Spring Festival",
    emoji: "🧧",
    date: "January/February (Lunar New Year's Day)",
    lunarDate: "1st day of 1st lunar month",
    description:
      "China's most important traditional festival celebrating the Lunar New Year",
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
      "Don't wash hair or clothes on New Year's Day (washes away luck)",
      "Don't use scissors or sharp objects (cuts off good fortune)",
      "Don't break things (brings bad luck)",
      "Don't say negative words",
      "Don't clean or sweep on day one",
    ],
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
        name: "Fish (鱼)",
        emoji: "🐟",
        meaning: "Surplus and prosperity",
        description: "Whole fish is essential, representing abundance",
        howToOrder: "Qǐng gěi wǒ yì tiáo hóng shāo yú (请给我一条红烧鱼)",
      },
      {
        name: "Dumplings (饺子)",
        emoji: "🥟",
        meaning: "Wealth and treasure",
        description: "Shaped like ancient gold ingots, symbolizing wealth",
        howToOrder: "Wǒ yào jiǎo zi (我要饺子)",
      },
      {
        name: "Noodles (面条)",
        emoji: "🍜",
        meaning: "Longevity",
        description: "Uncut noodles represent long life",
        howToOrder: "Lái yí wèi cháng shòu miàn (来一碗长寿面)",
      },
      {
        name: "Tangyuan (汤圆)",
        emoji: "⚪",
        meaning: "Family togetherness",
        description: "Sweet rice balls symbolizing reunion",
        howToOrder: "Wǒ yào tāng yuán (我要汤圆)",
      },
      {
        name: "Niangao (年糕)",
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
    scenarios: {
      tourist: [
        {
          title: "Ordering Food at a Restaurant",
          content:
            "Learn essential phrases for ordering festive dishes and communicating with restaurant staff during the Spring Festival.",
          phrases: [
            {
              chinese: "请问有什么推荐的吗？",
              pinyin: "Qǐng wèn yǒu shénme tuījiàn de ma?",
              english: "What do you recommend?",
            },
            {
              chinese: "我要点这个",
              pinyin: "Wǒ yào diàn zhège",
              english: "I'd like to order this",
            },
            {
              chinese: "麻烦结账",
              pinyin: "Mafán jiézhàng",
              english: "Could I have the bill, please?",
            },
          ],
        },
        {
          title: "Asking for Directions",
          content:
            "Navigate the festive city and find temple fairs, lantern displays, and local markets.",
          phrases: [
            {
              chinese: "请问庙会怎么走？",
              pinyin: "Qǐng wèn miàohuì zěnme zǒu?",
              english: "How do I get to the temple fair?",
            },
            {
              chinese: "附近有卖红包的吗？",
              pinyin: "Fùjìn yǒu mài hóngbāo de ma?",
              english: "Is there a place nearby that sells red envelopes?",
            },
          ],
        },
        {
          title: "Taking Photos with Locals",
          content:
            "Cultural etiquette for photos and interacting with families during celebrations.",
          phrases: [
            {
              chinese: "我可以和你们合影吗？",
              pinyin: "Wǒ kěyǐ hé nǐmen héyǐng ma?",
              english: "May I take a photo with you?",
            },
            {
              chinese: "新年快乐！",
              pinyin: "Xīn nián kuài lè!",
              english: "Happy New Year!",
            },
          ],
        },
      ],
      student: [
        {
          title: "Celebrating with Roommates",
          content:
            "How to celebrate Spring Festival with international or Chinese classmates in dormitory settings.",
          phrases: [
            {
              chinese: "我们一起包饺子吧",
              pinyin: "Wǒmen yìqǐ bā jiǎozi ba",
              english: "Let's make dumplings together",
            },
            {
              chinese: "你们家乡怎么过年？",
              pinyin: "Nǐmen jiāxiāng zěnme guònián?",
              english: "How do you celebrate New Year in your hometown?",
            },
          ],
        },
        {
          title: "Campus Activities",
          content:
            "Participating in university Spring Festival galas and cultural exchange events.",
          phrases: [
            {
              chinese: "今晚有春节晚会吗？",
              pinyin: "Jīn wǎn yǒu chūnjié wǎnhuì ma?",
              english: "Is there a Spring Festival gala tonight?",
            },
            {
              chinese: "我想表演一个节目",
              pinyin: "Wǒ xiǎng biǎoyán yí gè jiémù",
              english: "I'd like to perform an act",
            },
          ],
        },
      ],
      worker: [
        {
          title: "Greeting Your Boss",
          content:
            "Professional and respectful ways to greet supervisors and senior colleagues during the festival.",
          phrases: [
            {
              chinese: "领导，新年好，祝您万事如意",
              pinyin: "Lǐngdǎo, xīn nián hǎo, zhù nín wàn shì rú yì",
              english: "Boss, Happy New Year. May everything go your way.",
            },
            {
              chinese: "感谢您这一年的指导",
              pinyin: "Gǎnxiè nín zhè yì nián de zhǐdǎo",
              english: "Thank you for your guidance this year.",
            },
          ],
        },
        {
          title: "Company New Year's Party",
          content:
            "Small talk and conversation topics appropriate for company dinners and celebrations.",
          phrases: [
            {
              chinese: "今年公司业绩怎么样？",
              pinyin: "Jīn nián gōngsī yèjì zěnme yàng?",
              english: "How was the company's performance this year?",
            },
            {
              chinese: "祝我们公司明年更上一层楼",
              pinyin: "Zhù wǒmen gōngsī míngnián gèng shàng yì céng lóu",
              english: "May our company reach new heights next year.",
            },
          ],
        },
        {
          title: "Team Building Activities",
          content:
            "Leading or participating in team Spring Festival activities and gift exchanges.",
          phrases: [
            {
              chinese: "我们组织一个包饺子活动吧",
              pinyin: "Wǒmen zǔzhī yí gè bā jiǎozi huódòng ba",
              english: "Let's organize a dumpling-making activity.",
            },
          ],
        },
      ],
    },
  },
  lantern: {
    name: "Lantern Festival",
    emoji: "🏮",
    date: "February (15th day of 1st lunar month)",
    lunarDate: "15th day of 1st lunar month",
    description:
      "The grand finale of Spring Festival with lantern displays and tangyuan",
    history:
      "Lantern Festival marks the first full moon of the lunar year, symbolizing the return of spring and family reunions.",
    customs: [
      "Lighting and hanging lanterns",
      "Solving lantern riddles",
      "Eating tangyuan (sweet rice balls)",
      "Watching lantern parades",
      "Lion and dragon dances",
    ],
    taboo: ["Don't eat meat (traditional vegetarian day)", "Don't wash hair"],
    expressions: [
      {
        chinese: "元宵节快乐",
        pinyin: "Yuán xiāo jié kuài lè",
        english: "Happy Lantern Festival",
        scenario: "General greeting",
      },
      {
        chinese: "团团圆圆",
        pinyin: "Tuán tuán yuán yuán",
        english: "Reunion and completeness",
        scenario: "Wishes for family togetherness",
      },
    ],
    foods: [
      {
        name: "Tangyuan (汤圆)",
        emoji: "⚪",
        meaning: "Family togetherness",
        description: "Sweet rice balls, round shape symbolizes unity",
        howToOrder: "Wǒ yào tāng yuán (我要汤圆)",
      },
      {
        name: "Yuanxiao (元宵)",
        emoji: "🥣",
        meaning: "First night of full moon",
        description: "Glutinous rice balls with sweet fillings",
      },
    ],
    gifts: [
      {
        name: "Lanterns",
        emoji: "🏮",
        suitability: "Children",
        note: "Traditional decorative lanterns",
      },
    ],
    tools: [
      {
        name: "Riddles Game",
        description: "Test your lantern riddle knowledge",
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
  mid_autumn: {
    name: "Mid-Autumn Festival",
    emoji: "🥮",
    date: "September/October (15th day of 8th lunar month)",
    lunarDate: "15th day of 8th lunar month",
    description:
      "Moon viewing festival celebrating harvest and family reunions",
    history:
      "Mid-Autumn Festival dates back over 3,000 years. It's a time for family reunions under the full moon, celebrating harvest.",
    customs: [
      "Admiring the full moon",
      "Eating mooncakes",
      "Family reunions",
      "Lighting lanterns",
      "Worshiping the moon goddess",
    ],
    taboo: [
      "Don't point at the moon",
      "Don't gift mooncakes in sets of 4 (sounds like 'death')",
    ],
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
        name: "Mooncake (月饼)",
        emoji: "🥮",
        meaning: "Reunion and completeness",
        description: "Round pastry symbolizing full moon and family unity",
        howToOrder: "Wǒ yào yí gè yuè bǐng (我要一个月饼)",
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
      { name: "Blessing Templates", description: "Create Mid-Autumn wishes" },
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
  dragon_boat: {
    name: "Dragon Boat Festival",
    emoji: "🐉",
    date: "June (5th day of 5th lunar month)",
    lunarDate: "5th day of 5th lunar month",
    description: "Dragon boat racing festival commemorating poet Qu Yuan",
    history:
      "Dragon Boat Festival commemorates the ancient poet Qu Yuan (340-278 BC). Celebrated for over 2,000 years with races and zongzi.",
    customs: [
      "Dragon boat racing",
      "Eating zongzi (rice dumplings)",
      "Hanging mugwort and calamus",
      "Wearing perfume pouches",
      "Drinking realgar wine",
    ],
    taboo: ["Don't swim in rivers on this day", "Don't eat spicy food"],
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
        name: "Zongzi (粽子)",
        emoji: "🍙",
        meaning: "Honor and remembrance",
        description: "Sticky rice wrapped in leaves, honoring Qu Yuan",
        howToOrder: "Wǒ yào yí gè zòng zi (我要一个粽子)",
      },
    ],
    gifts: [
      {
        name: "Zongzi",
        emoji: "🍙",
        suitability: "Everyone",
        note: "Homemade or premium",
      },
      {
        name: "Mugwort",
        emoji: "🌿",
        suitability: "Family",
        note: "Traditional decoration",
      },
    ],
    tools: [
      { name: "Zongzi Guide", description: "Flavors and traditions" },
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
  qingming: {
    name: "Qingming Festival",
    emoji: "🌿",
    date: "April 4-5 (Tomb Sweeping Day)",
    lunarDate: "Around spring equinox",
    description: "Tomb sweeping and ancestor remembrance day",
    history:
      "Qingming Festival has been observed for over 2500 years. It's a time for honoring ancestors and enjoying spring outings.",
    customs: [
      "Tomb sweeping and cleaning graves",
      "Offering food and burning incense",
      "Flying kites",
      "Spring outings (踏青)",
      "Eating qingtuan (green rice balls)",
    ],
    taboo: ["Don't wear bright colors", "Don't visit others' homes"],
    expressions: [
      {
        chinese: "清明节安康",
        pinyin: "Qīng míng jié ān kāng",
        english: "Peaceful Qingming Festival",
        scenario: "Respectful greeting",
      },
    ],
    foods: [
      {
        name: "Qingtuan (青团)",
        emoji: "🟢",
        meaning: "Spring renewal",
        description: "Green rice balls with sweet fillings",
      },
    ],
    gifts: [
      {
        name: "Flowers",
        emoji: "🌸",
        suitability: "Ancestor tribute",
        note: "Chrysanthemums traditional",
      },
    ],
    tools: [
      { name: "Traditions Guide", description: "Rituals and etiquette" },
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
  qixi: {
    name: "Qixi Festival",
    emoji: "💕",
    date: "August (7th day of 7th lunar month)",
    lunarDate: "7th day of 7th lunar month",
    description: "China's traditional Valentine's Day",
    history:
      "Qixi Festival, also known as Chinese Valentine's Day, is based on the love story of the Cowherd and Weaver Girl (牛郎织女).",
    customs: [
      "Wishing for needlecraft skills",
      "Eating special foods",
      "Observing stars Vega and Altair",
      "Buying flowers and gifts",
    ],
    taboo: [],
    expressions: [
      {
        chinese: "七夕快乐",
        pinyin: "Qī xì kuài lè",
        english: "Happy Qixi Festival",
        scenario: "General greeting",
      },
      {
        chinese: "我爱你",
        pinyin: "Wǒ ài nǐ",
        english: "I love you",
        scenario: "Expressing love",
      },
    ],
    foods: [
      {
        name: "Qiaoguo (巧果)",
        emoji: "🍪",
        meaning: "Skill and dexterity",
        description: "Traditional七夕 pastries",
      },
    ],
    gifts: [
      {
        name: "Flowers",
        emoji: "🌹",
        suitability: "Partners",
        note: "Roses or lilies",
      },
      {
        name: "Chocolate",
        emoji: "🍫",
        suitability: "Partners",
        note: "Quality sweets",
      },
    ],
    tools: [
      { name: "Date Guide", description: "Romantic spots and tips" },
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
};

export const userTypeData: Record<
  string,
  {
    label: string;
    icon: string;
    color: string;
    backgroundColor: string;
    description: string;
    focusContent: string[];
  }
> = {
  tourist: {
    label: "Tourist",
    icon: "✈️",
    color: "rose",
    backgroundColor: "bg-rose-100 dark:bg-rose-900/30",
    description: "Experience authentic holiday atmosphere",
    focusContent: [
      "Survival phrases",
      "Local customs",
      "Food ordering",
      "Photo opportunities",
    ],
  },
  student: {
    label: "Student",
    icon: "🎓",
    color: "blue",
    backgroundColor: "bg-blue-100 dark:bg-blue-900/30",
    description: "Deeply understand cultural meaning",
    focusContent: [
      "Festival history",
      "Cultural context",
      "Social scripts",
      "Celebrating with friends",
    ],
  },
  worker: {
    label: "Worker",
    icon: "💼",
    color: "emerald",
    backgroundColor: "bg-emerald-100 dark:bg-emerald-900/30",
    description: "Appropriate workplace expressions",
    focusContent: [
      "Boss greetings",
      "Party conversations",
      "Gift etiquette",
      "Team activities",
    ],
  },
};
