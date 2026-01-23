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
  double_ninth: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Experience Double Ninth traditions",
      student: "Learn festival poetry and culture",
      worker: "Respect elders with tradition",
    },
    focusContent: {
      tourist: [
        "Chrysanthemum viewing",
        "Mountain climbing etiquette",
        "Festival greetings for seniors",
        "Traditional food customs",
      ],
      student: [
        "Festival poetry appreciation",
        "Cultural history of Chongyang",
        "Academic perspectives on aging",
        "Traditional customs documentation",
      ],
      worker: [
        "Respecting elderly relatives",
        "Family visit planning",
        "Holiday greeting messages",
        "Traditional activities with parents",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "amber",
      student: "orange",
      worker: "yellow",
    },
    backgroundColor: {
      tourist: "bg-amber-100 dark:bg-amber-900/30",
      student: "bg-orange-100 dark:bg-orange-900/30",
      worker: "bg-yellow-100 dark:bg-yellow-900/30",
    },
  },
  winter_solstice: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Celebrate Dongzhi traditions",
      student: "Learn astronomical significance",
      worker: "Family reunion customs",
    },
    focusContent: {
      tourist: [
        "Dumplings vs tangyuan traditions",
        "Festival food customs",
        "Winter celebration traditions",
        "Regional variation exploration",
      ],
      student: [
        "Astronomical origins of solstice",
        "Historical cultural evolution",
        "Yang energy concept in Chinese culture",
        "Traditional calendar systems",
      ],
      worker: [
        "Family reunion dinner planning",
        "Holiday work arrangements",
        "Traditional food preparation",
        "Elderly family member respect",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "cyan",
      student: "sky",
      worker: "blue",
    },
    backgroundColor: {
      tourist: "bg-cyan-100 dark:bg-cyan-900/30",
      student: "bg-sky-100 dark:bg-sky-900/30",
      worker: "bg-blue-100 dark:bg-blue-900/30",
    },
  },
  laba: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Taste Laba porridge traditions",
      student: "Study Buddhist festival origins",
      worker: "Kitchen traditions for families",
    },
    focusContent: {
      tourist: [
        "Laba porridge history",
        "Garlic preparation customs",
        "Buddhist festival traditions",
        "Festival food sampling",
      ],
      student: [
        "Buddhist origins of Laba",
        "Religious and cultural significance",
        "Historical evolution of customs",
        "Traditional recipe documentation",
      ],
      worker: [
        "Family meal preparation",
        "Holiday cooking traditions",
        "Kitchen activities with family",
        "Traditional food sharing",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "rose",
      student: "red",
      worker: "orange",
    },
    backgroundColor: {
      tourist: "bg-rose-100 dark:bg-rose-900/30",
      student: "bg-red-100 dark:bg-red-900/30",
      worker: "bg-orange-100 dark:bg-orange-900/30",
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
  double_ninth: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Experience autumn festival traditions",
      student: "Learn about elder respect culture",
      worker: "Balance work and family care",
    },
    focusContent: {
      tourist: [
        "Chrysanthemum appreciation",
        "Mountain climbing spots",
        "Festival photography",
        "Local customs guide",
      ],
      student: [
        "Festival poetry and literature",
        "Traditional customs history",
        "Elder respect values",
        "Cultural significance",
      ],
      worker: [
        "Respecting elderly colleagues",
        "Family visit planning",
        "Holiday work arrangements",
        "Work-life balance",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "amber",
      student: "purple",
      worker: "orange",
    },
    backgroundColor: {
      tourist: "bg-amber-100 dark:bg-amber-900/30",
      student: "bg-purple-100 dark:bg-purple-900/30",
      worker: "bg-orange-100 dark:bg-orange-900/30",
    },
  },
  winter_solstice: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Experience winter solstice traditions",
      student: "Study astronomical significance",
      worker: "Navigate holiday work schedules",
    },
    focusContent: {
      tourist: [
        "Regional food traditions",
        "Family gathering customs",
        "Winter activities",
        "Cultural experiences",
      ],
      student: [
        "Ancient calendar systems",
        "Astronomical knowledge",
        "Traditional customs history",
        "Cultural heritage",
      ],
      worker: [
        "Holiday scheduling",
        "Family time management",
        "Traditional food preparation",
        "Work arrangements",
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
      worker: "gray",
    },
    backgroundColor: {
      tourist: "bg-cyan-100 dark:bg-cyan-900/30",
      student: "bg-blue-100 dark:bg-blue-900/30",
      worker: "bg-gray-100 dark:bg-gray-900/30",
    },
  },
  laba: {
    label: {
      tourist: "Tourist",
      student: "Student",
      worker: "Worker",
    },
    description: {
      tourist: "Taste traditional laba porridge",
      student: "Learn Buddhist festival origins",
      worker: "Prepare for Spring Festival",
    },
    focusContent: {
      tourist: [
        "Laba porridge traditions",
        "Temple visits",
        "Food markets",
        "Cultural experiences",
      ],
      student: [
        "Buddhist history",
        "Festival origins",
        "Traditional customs",
        "Cultural practices",
      ],
      worker: [
        "Spring Festival planning",
        "Holiday preparations",
        "Family visit schedules",
        "Cleaning and organizing",
      ],
    },
    icon: {
      tourist: "✈",
      student: "🎓",
      worker: "💼",
    },
    color: {
      tourist: "lime",
      student: "green",
      worker: "teal",
    },
    backgroundColor: {
      tourist: "bg-lime-100 dark:bg-lime-900/30",
      student: "bg-green-100 dark:bg-green-900/30",
      worker: "bg-teal-100 dark:bg-teal-900/30",
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
      // Deep content extensions
      historyStory: `The legend of Spring Festival begins with the mythical beast Nian (年), who would emerge on New Year's Eve to devour villagers. According to folklore, an old man discovered that Nian feared the color red and loud noises. The villagers then began decorating their homes with red decorations and setting off firecrackers to scare away the beast. This tradition has continued for over 4,000 years, evolving from a survival ritual into a celebration of family, renewal, and good fortune.

Another origin story relates to the story of the "Kitchen God" (灶王爷), who reports to the Jade Emperor about each family's behavior during the year. Before returning to heaven on the 23rd day of the 12th lunar month, families offer sweet treats to ensure the Kitchen God reports favorably. This explains why sweets and sticky foods are common during the days leading up to Spring Festival.`,
      regionalVariations: {
        north: `**Beijing**: Spring Festival in the northern capital features elaborate temple fairs (庙会) at locations like Ditan Park and Longtan Temple. Traditional performances include Peking Opera, acrobatics, and traditional crafts. Jiaozi (dumplings) are the essential food, with families gathering to fold them together on New Year's Eve.

**Northeast China (Dongbei)**: Known for elaborate hot pot preparations and massive family gatherings. The New Year's Eve feast includes multiple meat dishes reflecting the region's cold climate. Winter activities like ice sculptures and snow festivals complement traditional celebrations.`,
        south: `**Shanghai**: Families gather for a reunion dinner featuring authentic Shanghai-style dishes. A whole fish is mandatory (鱼), with additional dishes representing prosperity. The "fa cai" (发菜) seaweed dish is popular for sounding like "getting rich." Temple fairs at Yuyuan Garden attract millions of visitors with lanterns and traditional snacks.

**Guangdong/Canton**: Features unique Cantonese traditions including "bai nian" (拜年) door-to-door greetings. Sweet soups and lotus seed dishes symbolize sweetness and family harmony. The atmosphere is more relaxed compared to northern celebrations, with evening walks and outdoor gatherings common.

**Sichuan**: Famous for elaborate lantern displays and spicy hot pot gatherings. The "year-end feast" (年夜饭) features spicy fish dishes and the famous twice-cooked pork. Firecracker displays are particularly elaborate in rural areas.`,
        east: `**Zhejiang**: Features beautiful West Lake-themed lantern displays. Traditional dragon and lion dances are performed in historic districts. A special dish called "dongpo pork" honors the famous poet Su Dongpo.

**Jiangsu**: Nanjing's Qinhuai River hosts spectacular lantern festivals. Suzhou's classical gardens open for special New Year events. Rice dumplings and sweet rice wine are traditional beverages.`,
      },
      modernEvolution: `**Digital Transformation**: While traditional customs remain, technology has transformed how Chinese people celebrate Spring Festival:

- **WeChat Red Envelopes (微信红包)**: Since 2014, sending digital red envelopes through WeChat has become hugely popular, with billions sent during the festival period. Family groups organize "grabbing red envelopes" games, adding a competitive social element to gift-giving.

- **Spring Festival Gala (春晚)**: CCTV's annual New Year's Eve variety show, watched by over 700 million viewers, has become a cultural institution since 1983. Skits and songs from the gala often become viral talking points.

- **Online Shopping**: The period before Spring Festival has become China's largest annual shopping season, with major e-commerce platforms running massive sales.

- **Travel Tech**: The world's largest annual human migration sees over 3 billion trips. High-speed rail and digital ticketing have transformed how families reunite.

**Generational Shifts**:
- Young people increasingly prefer "反向团圆" (reverse reunion) - having parents visit them in cities rather than returning home.
- Many families now combine traditional gatherings with modern activities like going to the movies or traveling abroad.
- "stay-cations" in hotels have become popular among urban families seeking to avoid travel stress.`,
      misconceptions: [
        {
          myth: "Spring Festival is just like Western New Year's Eve",
          reality:
            "Spring Festival is fundamentally different. It's not about counting down to midnight but about family reunion. The focus is on ancestors, traditions, and collective celebration rather than parties and fireworks at a specific moment. The festival spans 15 days of activities, not a single evening.",
        },
        {
          myth: "Red envelopes must contain large amounts of money",
          reality:
            "Red envelope amounts vary widely based on relationship and context. Between family members, amounts range from 20-1000 RMB depending on age and relationship. For colleagues and friends, 5-20 RMB is common. The red color and good wishes matter more than the amount. In business contexts, even 8.88 RMB is acceptable as 8 sounds like 'prosperity' in Chinese.",
        },
        {
          myth: "You must say 'Happy New Year' exactly on January 1st",
          reality:
            "Greetings are appropriate throughout the Spring Festival period, which lasts 15 days until Lantern Festival. The first few days are considered most auspicious for visits and greetings. However, saying 'Happy New Year' on February 1st or 2nd is perfectly acceptable and often expected if you meet someone during this period.",
        },
        {
          myth: "All Chinese people celebrate the same way",
          reality:
            "China's diverse ethnic groups and regions have distinct Spring Festival traditions. Ethnic minorities like Tibetans, Mongols, and Uyghurs have their own customs. Even within Han Chinese, northern and southern regions, urban and rural areas, and different socioeconomic groups celebrate differently.",
        },
        {
          myth: "You must give red envelopes to everyone",
          reality:
            "Red envelopes are traditionally given within family units - to children, unmarried adults, and elderly parents. There's no expectation to give red envelopes to colleagues, neighbors, or casual acquaintances. In workplace settings, this has evolved into group gifts or meals rather than individual red envelopes.",
        },
        {
          myth: "Fireworks are essential to celebrate",
          reality:
            "While traditional, fireworks are now banned or restricted in most major Chinese cities due to pollution and safety concerns. Many families substitute with virtual firecrackers on phones, decoration lights, or simply focus on other traditions like family games, gala watching, or visiting temples.",
        },
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
      // Deep content extensions
      historyStory: `The Lantern Festival has a history stretching back over 2,000 years to the Han Dynasty (206 BCE - 220 CE). The most famous origin legend involves Emperor Wu of Han, who worshipped the celestial realm and ordered lantern displays to honor the gods on the 15th day of the first lunar month.

The legend of Yuan Xiao (元宵) is central to the festival's name. According to folklore, there was once a beautiful fairy named Yuan Xiao who lived in the celestial realm. She descended to earth and fell in love with a mortal man named Dongfang Shuo. When she had to return to heaven, she was heartbroken. To help others reunite with their loved ones, the Jade Emperor allowed lanterns to be lit on the 15th day of the first lunar month, creating a bridge between heaven and earth so that Yuan Xiao could see her beloved Dongfang Shuo below.

Another legend tells of the celestial dog that would eat the moon, causing darkness. People learned to hang lanterns to frighten the dog away, which is why lantern displays became associated with driving away evil spirits and bringing light to the new year.`,
      regionalVariations: {
        north: `**Beijing**: The temple fair at Ditan Park (地坛公园) is legendary, featuring the largest lantern exhibition in the city. Traditional performances include shadow puppetry, acrobatics, and calligraphy demonstrations. Residents visit the Lama Temple and other historic sites with lanterns in hand. The Beijing Lantern Festival is known for its elaborate palace lanterns and traditional crafts.

**Harbin**: While famous for its Ice Lantern Festival in January, Harbin also celebrates the traditional Lantern Festival with unique ice and snow-themed lantern displays that combine traditional lantern culture with the city's winter heritage.`,
        south: `**Nanjing**: The Qinhuai River lantern fair is one of China's most famous, with a history dating back over 1,700 years. Lotus-shaped lanterns float on the river, creating stunning reflections. The "Qinhuai lanterns" are a protected cultural heritage, handcrafted using traditional methods passed down through generations.

**Guangzhou**: The festival features elaborate flower lantern installations in parks like Yuexiu Park and Liwan Lake. Cantonese traditions include "walking the lantern" (走月亮), where families stroll together under lanterns. The "Guangzhou Lantern Festival" is known for combining traditional lanterns with modern light art installations.

**Fujian (Quanzhou)**: Known for the spectacular "Fujian Nanyin" music performances and unique lantern ceremonies. The lantern displays often feature religious and Taoist elements, reflecting the region's spiritual traditions.`,
        east: `**Shanghai**: Yuyuan Garden's lantern fair attracts millions of visitors with its elaborate displays combining traditional Chinese architecture with modern light technology. The "Snake Lantern" and other生肖 (Chinese zodiac) themed lanterns are major attractions. The bund along the Huangpu River features floating lanterns and LED light shows.

**Zhejiang (Wenzhou)**: Known for the "Wenzhou Lantern Festival" featuring massive lantern installations in Oujiang Park. The festival combines lantern displays with cultural performances and food markets. Traditional paper lantern making workshops are popular among tourists.`,
        west: `**Sichuan (Zigong)**: Zigong is famous for its illuminated lantern shows, using the city's historical connection to salt mining and lantern making. The lanterns here are known for their intricate mechanical designs that can move and change colors. The Zigong Lantern Festival has been designated as a National Intangible Cultural Heritage.

**Shaanxi (Xi'an)**: The ancient capital celebrates with lanterns at the Datang Furong Garden and other historic sites. The Tang Dynasty-style lantern displays recreate the grandeur of ancient Chang'an. Visitors can enjoy Tang Dynasty performances alongside traditional lantern viewing.`,
      },
      modernEvolution: `**Technology Integration**: Lantern Festival celebrations have embraced modern technology:

- **Digital Lanterns**: WeChat allows users to send virtual lanterns to friends, which float on a digital screen representing the night sky. This became especially popular during the pandemic when physical gatherings were restricted.

- **Light Shows**: Major cities now combine traditional lantern displays with projection mapping, LED technology, and drone shows. Shanghai's Yuyuan Garden features both traditional handcrafted lanterns and modern light installations.

- **Social Media**: The festival has become highly "Instagrammable" with lantern selfie spots, trending hashtag campaigns (#元宵节), and live-streamed lantern ceremonies.

**Commercialization**:
- Restaurant chains offer special tangyuan tasting menus
- E-commerce platforms run lantern-themed promotional sales
- Tourism bureaus organize lantern festival tours
- Lantern-making workshops have become popular team-building activities

**Generational Shifts**:
- Young people increasingly prefer photo-worthy lantern displays over traditional riddles
- "Lantern festival blind dates" have become a social phenomenon, with young singles meeting at lantern fairs
- Many families now stream lantern festival events from other cities if local celebrations are limited
- Environmental concerns have led to restrictions on disposable lanterns in some cities, leading to reusable LED alternatives`,
      misconceptions: [
        {
          myth: "Lantern Festival is only about lanterns",
          reality:
            "While lanterns are central, the festival encompasses multiple traditions including eating tangyuan, solving riddles, lion dances, and family reunions. The lanterns themselves have various symbolic meanings - they represent hope, guidance, and the return of light after darkness. The festival is the grand finale of the 15-day Spring Festival celebration period.",
        },
        {
          myth: "You must eat tangyuan with soup",
          reality:
            "While tangyuan (汤圆) literally means soup balls and are often served in sweet soup, they can also be served cold, stir-fried with butter and sugar (炒汤圆), or even savory. In some regions, tangyuan are eaten plain without soup. The key is the round shape symbolizing family togetherness, not the preparation method.",
        },
        {
          myth: "Lantern Festival is romantic like Valentine's Day",
          reality:
            "While lantern festivals can be romantic occasions and some couples do go on dates during this time, the traditional focus is on family rather than romance. The romantic association is largely a modern cultural interpretation influenced by Western Valentine's Day marketing. Traditionally, it is a family celebration marking the end of the Spring Festival period.",
        },
        {
          myth: "All lanterns are traditional red paper lanterns",
          reality:
            "Modern lantern festivals feature diverse lantern styles including: animated lanterns with moving parts, LED lanterns in various colors and shapes, giant themed installations, floating lanterns on water, and even projection mapping displays. Traditional paper lanterns exist but are just one type among many.",
        },
        {
          myth: "Lantern Festival only lasts one evening",
          reality:
            "The official festival day is the 15th day of the first lunar month, but celebrations often span several days. Many cities begin lantern displays a week before the actual festival and continue for several days after. In some regions, the entire Lantern Festival period can last up to three days.",
        },
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
      // Deep content extensions
      historyStory: `Mid-Autumn Festival has origins dating back over 3,000 years to the Shang Dynasty, when moon worship was an important religious practice. The festival as we know it today developed during the Tang Dynasty (618-907 CE) and became widely popular during the Song Dynasty.

The most famous origin story involves the moon goddess Chang'e (嫦娥). According to legend, there were ten suns in the sky in ancient times, scorching the earth. The archer Hou Yi shot down nine of them, saving humanity. As a reward, he received the elixir of immortality from the Queen Mother of the West. His wife Chang'e stole the elixir and flew to the moon, becoming the moon goddess. She lives there still, accompanied only by a jade rabbit.

Another legend tells of the warrior Peng Meng who attempted to steal the elixir. Chang'e swallowed it to prevent him from using it for evil, rising to the moon. Her husband Hou Yi, in grief, made offerings to her on the full moon of the eighth lunar month, which became the basis for the festival's reunion theme.

The festival also relates to the agricultural calendar, celebrating the autumn harvest under the full moon. Farmers would give thanks to the earth and moon deities for abundant crops, and the full moon symbolized the completeness of the harvest.`,
      regionalVariations: {
        north: `**Beijing**: Traditional Mid-Autumn celebrations include moon cake offerings at temples and ancestral halls. The Summer Palace and other historic sites host moon-viewing parties with traditional performances. Beijing-style mooncakes are known for their thick, flaky crusts and dense sweet fillings.

**Northeast China**: The festival emphasizes harvest celebrations with corn, apples, and other autumn produce featured alongside mooncakes. Families gather for outdoor moon viewing if weather permits, combining the celebration with late-summer camping traditions.`,
        south: `**Guangdong (Canton)**: Famous for Cantonese-style mooncakes with salted egg yolk centers, which have become the most recognized variety globally. The "Double Yolk White Lotus Seed Mooncake" is a modern classic. Victoria Harbour in Hong Kong hosts spectacular moon-viewing events with synchronized light shows on boats.

**Fujian (Xiamen)**: The "Mooncakes of the Sea" feature distinctive seafood-based fillings. The "Tong An Zong" (同安粽) is a specialty mooncake unique to the region. The festival coincides with the Taiwan Strait Moon Festival, featuring cross-strait cultural exchanges.

**Jiangsu (Suzhou)**: Suzhou-style mooncakes are known for their flaky, paper-thin crusts and delicate sweet fillings. The classical gardens host moon-viewing poetry recitals. Suzhou's canals feature lantern boats during the festival.`,
        east: `**Shanghai**: The city transforms with elaborate mooncake displays and special promotions at major bakeries. Huangpu River moon cruises are popular, offering views of the illuminated skyline alongside the full moon. Modern fusion mooncakes with champagne, chocolate, and other Western ingredients are popular gifts.

**Zhejiang (Hangzhou)**: West Lake becomes the center of moon-viewing celebrations with traditional boat rides and poetry recitals. The "Moon over the Calm Lake" (平湖秋月) pavilion is a famous viewing spot. Hangzhou's Longjing tea is traditionally paired with mooncakes.`,
        west: `**Yunnan**: The festival is celebrated by multiple ethnic groups including Yi, Bai, and Dai peoples. In Dali, the Three Pagolacks and Erhai Lake provide stunning moon-viewing backdrops. Ethnic minorities add unique traditions including traditional dances around bonfires.

**Sichuan**: Moon viewing often combines with spicy hot pot gatherings. The Jiuzhaigou Valley and Huanglong Scenic areas offer spectacular natural moon-viewing locations. Sichuan mooncakes may include spicy pork or Sichuan pepper in some variations.`,
      },
      modernEvolution: `**Mooncake Innovation**: The mooncake industry has undergone dramatic transformation:

- "Creative" mooncakes with ice cream, durian, and Western flavors dominate social media
- Low-sugar and healthy mooncakes target health-conscious consumers
- Luxury mooncakes in designer packaging sell for hundreds of dollars
- "Mooncake vouchers" have become popular corporate gifts

**Technology Integration**:
- Virtual moon viewing through live streams from iconic locations
- AR apps that overlay traditional moon goddess imagery onto real moons
- Online mooncake ordering and delivery services dominate sales
- Social media challenges featuring creative mooncake unboxing videos

**Commercialization**:
- The pre-festival mooncake sales period is a multi-billion dollar industry
- Luxury hotels compete to create the most Instagram-worthy mooncakes
- Corporate mooncake gifting has become a significant business networking tradition
- Tourism bureaus promote "Moon Festival tours" to scenic destinations

**Changing Traditions**:
- Many urban families now eat mooncakes at restaurants rather than at home
- Some families skip mooncakes entirely, opting for other autumn foods
- "Mooncake tasting events" have become popular social occasions
- Environmental concerns have led to calls for less elaborate packaging`,
      misconceptions: [
        {
          myth: "Mooncakes are always sweet",
          reality:
            "While sweet mooncakes dominate the market, traditional savory mooncakes exist throughout China. Yunnan's ham mooncakes, Guangdong's meat-filled varieties, and other regional savory options have been enjoyed for centuries. The five kernel mooncake (五仁月饼) with nuts and candied fruit is technically sweet but has a savory texture.",
        },
        {
          myth: "You must eat mooncakes on Mid-Autumn Festival",
          reality:
            "Mooncakes are the most iconic food, but regional alternatives are equally traditional. In some areas, taro dishes, crabs, pomegranates, and grapes are equally important. The essence of the festival is moon viewing and family reunion, not the specific food eaten.",
        },
        {
          myth: "Gifting mooncakes in sets of 4 is bad luck",
          reality:
            "The taboo against sets of 4 stems from the Chinese word for four (四, sì) sounding similar to death (死, sǐ). However, this superstition varies by region and is less emphasized today. Many gift sets now contain 4 mooncakes anyway, and the prohibition is largely ignored in commercial settings.",
        },
        {
          myth: "Pointing at the moon will make your ears fall off",
          reality:
            "This is a traditional children warning that developed from the Chang-e legend. Children were told not to point at the moon because Chang-e would cut off their ears (a reference to the jade rabbit pounding medicine). While everyone knows it is not literally true, the warning persists as a cultural way to teach children respect for traditions.",
        },
        {
          myth: "Mid-Autumn Festival is only about romance",
          reality:
            "The festival primary theme is family reunion, not romance. While it has romantic associations due to moon viewing being a couple activity, the traditional focus is on gathering with family members. The Chinese Valentine Day label is a modern commercial invention, not the festival original purpose.",
        },
        {
          myth: "You must watch the moon at exactly midnight",
          reality:
            "Moon viewing can occur any time during the evening of the 15th day. While the moon is technically fullest at midnight, cloudy weather, schedules, and personal preference lead most families to view and celebrate earlier in the evening. The key is gathering with loved ones, not timing.",
        },
      ],
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
      // Deep content extensions
      historyStory: `Dragon Boat Festival's origins are deeply rooted in the story of Qu Yuan (屈原, 340-278 BCE), a revered poet and statesman during the Warring States period of ancient China. Qu Yuan served the state of Chu but was exiled by the king due to political rivals' scheming. During his exile, he wrote some of China's most famous poetry, including the masterpiece "Li Sao" (离骚).

When his homeland of Chu was conquered by the rival state of Qin, Qu Yuan drowned himself in despair on the 5th day of the 5th lunar month. Local fishermen rushed to save him, paddling their boats and throwing rice dumplings into the water to distract fish from his body. This is why dragon boat racing and eating zongzi are central to the festival.

Another origin story relates to the ancient Chinese belief in the "evil spirit" of the fifth lunar month. People believed this was a month of disease and misfortune, so they developed protective customs including hanging aromatic herbs, wearing perfume pouches, and drinking realgar wine to ward off evil spirits and disease.`,
      regionalVariations: {
        north: `**Beijing**: While dragon boat races are less common in the northern capital, the festival is celebrated with traditional zongzi making and perfumed sachets (香囊). The Summer Palace and other historic sites may host cultural demonstrations featuring traditional crafts and poetry recitations honoring Qu Yuan.

**Inner Mongolia**: The festival combines with traditional Mongolian celebrations, featuring horse racing and archery alongside dragon boat activities on local rivers. The zongzi here may include local game meats wrapped in grape leaves.`,
        south: `**Hong Kong**: The Tuen Ng Festival in Hong Kong features world-class dragon boat races in Stanley Bay and other locations. The Hong Kong Dragon Boat Carnival attracts international teams and hundreds of thousands of spectators. Modern versions include "sprints" and "night races" with illuminated boats.

**Guangdong (Zhongshan)**: Known as the "Birthplace of Dragon Boat Culture," Zhongshan hosts the Longshan Dragon Boat Festival with races on the Pearl River. Traditional "dragon head" boats can be over 100 feet long with 80+ paddlers. The "dragon eye" fruit (longan) is traditionally eaten during this festival.

**Fujian (Quanzhou)**: Features the "Water Dragon Festival" with unique dragon boat traditions. Quanzhou was a major port during ancient times, and its dragon boats reflect maritime heritage with elaborate painted hulls. Traditional "zongzi wine" is a local specialty.`,
        east: `**Zhejiang (Hangzhou)**: The Qiantang River hosts spectacular dragon boat races with views of West Lake. Hangzhou's festival combines racing with cultural performances and a "zongzi making competition." The city also hosts dragon boat racing in Xixi Wetland with eco-tourism themes.

**Jiangsu (Suzhou)**: Suzhou's canals feature traditional dragon boat races through the historic waterway network. The festival emphasizes Qu Yuan's poetry with recitals at classical gardens. Suzhou-style zongzi are known for their delicate wrapping and diverse fillings including sweet bean paste and pork.`,
        west: `**Guizhou (Kaili)**: The Dragon Boat Festival here features unique Miao ethnic traditions alongside Han Chinese customs. The Guizhou dragon boats are shorter and more maneuverable. Local ethnic minorities add traditional dances and songs to the celebrations.

**Yunnan**: The festival is celebrated by multiple ethnic groups including Dai, Hui, and Bai peoples. In Jinghong (Xishuangbanna), dragon boat races occur on the Mekong River with Dai ethnic traditions including water-splashing celebrations.`,
      },
      modernEvolution: `**Internationalization**: Dragon Boat Festival has become a truly global celebration:

- Over 60 countries now hold dragon boat races
- The International Dragon Boat Federation organizes world championships
- The UK, USA, Australia, and Germany have annual dragon boat festivals
- "Dragon Boat" has become a popular team-building activity for corporations worldwide

**Commercialization**:
- Pre-packaged zongzi dominate supermarket sales, with hundreds of flavors available
- Restaurant chains offer zongzi tasting menus year-round
- Tourism bureaus promote "Dragon Boat Festival tours" to China
- Dragon boat race tourism has become a significant revenue source for host cities

**Technology Integration**:
- LED-lit dragon boats now race at night events
- Live streaming of races attracts millions of online viewers
- Mobile apps track dragon boat race results and betting
- Social media campaigns with festival hashtags trend annually

**Environmental Concerns**:
- Realgar wine consumption has declined due to arsenic toxicity awareness
- Some cities restrict real dragon boat races on polluted waterways
- Synthetic materials are replacing traditional bamboo and wood in boat construction
- Eco-friendly zongzi packaging has become a marketing point`,
      misconceptions: [
        {
          myth: "Dragon Boat Festival is only about racing boats",
          reality:
            "While dragon boat racing is the most visible activity, the festival encompasses multiple traditions: eating zongzi, hanging mugwort and calamus, wearing perfume pouches, drinking realgar wine, and reciting Qu Yuan's poetry. Each custom has its own symbolic meaning related to warding off evil spirits and honoring the poet.",
        },
        {
          myth: "All zongzi are the same",
          reality:
            "Zongzi vary dramatically by region: Northern Chinese prefer savory meat fillings with glutinous rice; Cantonese versions are often sweet with lotus seed or red bean paste; Shanghai zongzi are larger and saltier; Hokkien versions use different wrapping techniques. There are sweet, savory, small, large, triangular, and pyramidal varieties.",
        },
        {
          myth: "You can only eat zongzi during Dragon Boat Festival",
          reality:
            "While zongzi are most associated with this festival, they are eaten throughout the summer in many regions. In southern China, zongzi are a common breakfast food sold by street vendors. Many families make and eat zongzi weeks before or after the festival.",
        },
        {
          myth: "Realgar wine is essential for the festival",
          reality:
            "Realgar wine (雄黄酒) was traditionally believed to ward off snakes and evil spirits, but its consumption has dramatically declined due to the toxicity of arsenic compounds in realgar. Modern celebrations typically substitute with regular rice wine or skip alcohol entirely, especially for children who wear perfume pouches instead.",
        },
        {
          myth: "Dragon Boat Festival is only a Chinese holiday",
          reality:
            "Dragon Boat Festival is celebrated across East and Southeast Asia with regional variations: Taiwan (Duanwu Festival), South Korea (Dano), Japan (Kō端午), and Vietnam (Tết Đoan Ngọ). Each culture has adapted the traditions while maintaining core elements of honoring Qu Yuan or similar literary figures.",
        },
        {
          myth: "Dragon boats must have a dragon head",
          reality:
            "Traditional dragon boats feature elaborate dragon heads, but modern competitive boats may be simpler. The key element is the painted hull depicting dragon scales, not necessarily an attached head. In some regions, boats have dragon tails or both head and tail decorations.",
        },
      ],
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
      // Deep content extensions
      historyStory: `Qingming Festival's origins can be traced back over 2,500 years to the Spring and Autumn Period. The most famous associated story is of Jie Zitui (介子推), a loyal retainer of Duke Wen of Jin (晋文公). During a period of political turmoil, Jie saved the duke's life by cutting flesh from his own thigh to make soup for him.

When the duke eventually came to power, he rewarded those who had helped him but overlooked Jie. Jie retired to a forest with his mother. When the duke finally remembered Jie and tried to reward him, Jie refused to leave the forest. In desperation, the duke ordered the forest to be set on fire to force Jie out, but Jie and his mother died in the fire.

Grieved by Jie's death, the duke ordered that no fires could be lit on the anniversary of his death. People could only eat cold food, hence the festival was originally called "Hanshi Festival" (Cold Food Festival). Over time, Hanshi merged with Qingming, which was originally a solar term marking spring cultivation.

The Qingming Festival also relates to ancient ancestor worship traditions and the agricultural calendar. As spring arrives, farmers honor their ancestors for the coming harvest and perform rituals to ensure fertile fields and abundant crops.`,
      regionalVariations: {
        north: `**Beijing**: Families visit ancestral graves in suburban cemeteries and the Eight Mountains outside the city. The Beijing Museum of Traditional Chinese Medicine often hosts Qingming-related cultural events. Qingming here emphasizes both tomb sweeping and spring activities like flying kites at parks.

**Inner Mongolia and Northern China**: The festival combines with traditional tomb-sweeping customs and may include horse racing or archery demonstrations in rural areas. In some areas, families share cold noodles (凉面) as a reminder of the original cold food tradition.`,
        south: `**Guangdong and Hong Kong**: The festival features "Qingming visits" (扫墓) with elaborate offerings including roasted pig, whole chicken, and traditional pastries. The "Ching Ming" in Cantonese culture is one of the most important occasions for family gatherings. Tulips and other spring flowers are brought to grave sites.

**Fujian (Quanzhou and Xiamen)**: Qingming customs include ancestral worship at clan halls and temples. The "Tomb Sweeping Festival" (扫墓节) may span several days rather than just one. Special "Qingming cakes" (青团) made with wormwood are traditional. Some coastal communities also perform water rituals for ancestors who died at sea.

**Jiangsu (Suzhou and Shanghai)**: Families visit ancestral burial sites near Suzhou's classical gardens or Shanghai's Baoxinglong Cemetery. The festival emphasizes spring outings with families visiting parks and gardens. Suzhou-style qingtuan often contain sweet red bean paste.`,
        east: `**Shanghai**: The Qingming period is one of the busiest times for Shanghai's cemeteries and crematoriums. Modern families may choose virtual memorial services or online tribute platforms. Huangpu River cruises during the festival offer views of spring blossoms.

**Zhejiang**: Hangzhou's West Lake becomes a popular spring outing destination. Ancestral halls (祠堂) in rural Zhejiang may host clan-wide Qingming ceremonies. Longjing tea picking often begins around Qingming, adding tea-related activities to the celebration.`,
        west: `**Sichuan**: Qingming features both tomb sweeping and the beginning of spring tea harvest. Families may visit the Three Gorges region or other scenic areas. The festival combines solemn remembrance with spring picnics featuring local specialties.

**Yunnan**: Multiple ethnic groups celebrate Qingming with unique traditions. The Bai people perform traditional dances at ancestral sites. In Dali, the Erhai Lake area becomes a spring outing destination with boat tours and wildflower viewing.`,
      },
      modernEvolution: `**Environmental Changes**:
- Many cities have replaced traditional grave sweeping with virtual memorials
- Online tribute platforms allow "remote" ancestor honoring
- Paper offerings have evolved to include "digital iPhones" and "virtual houses" burned as symbolic offerings
- Some cemeteries now require biodegradable offerings and prohibit open flames

**Commercialization**:
- Pre-made qingtuan are sold in supermarkets starting weeks before the festival
- Tour operators offer "Qingming spring outing" packages to scenic areas
- Cemetery services now include professional tomb-sweeping teams for those who cannot visit
- Flower shops see their biggest sales of the year during Qingming week

**Technology Integration**:
- WeChat "virtual tomb-sweeping" features allow users to send digital offerings
- Live streaming cemetery visits for elderly family members living abroad
- GPS-enabled cemetery mapping apps for finding ancestral graves
- Social media posts featuring spring scenery and family outings go viral during the festival

**Changing Traditions**:
- Many urban families now combine tomb-sweeping with spring hiking or camping
- The "cold food" aspect is largely forgotten, with hot meals now common
- Some families treat Qingming as a purely spring outdoor activity holiday
- Tomb-sweeping teams hired for busy urban professionals have become a new service industry`,
      misconceptions: [
        {
          myth: "Qingming Festival is only about death and mourning",
          reality:
            "While tomb sweeping is important, Qingming is equally about spring and renewal. The qing in Qingming means clear or bright, and the festival celebrates the arrival of spring. Spring outings (踏青), kite flying, and family gatherings in nature are equally important traditions. Many families treat it as a combination of Memorial Day and Easter.",
        },
        {
          myth: "You must visit graves exactly on April 4th or 5th",
          reality:
            "The Qingming solar term spans several days, and many families visit graves during the weeks before or after the official date. In some regions, visiting during the 10 days before Qingming is standard practice. The key is making time to honor ancestors, not the exact calendar date.",
        },
        {
          myth: "All Chinese people sweep tombs on Qingming",
          reality:
            "Many Chinese no longer have ancestral graves to visit due to urbanization and cremation practices. In cities, families may memorialize ancestors at home shrines, crematoriums, or through virtual platforms. Some families only visit on significant anniversaries rather than every Qingming.",
        },
        {
          myth: "Qingming and Hanshi are the same festival",
          reality:
            "Originally, Hanshi Festival (Cold Food Festival) and Qingming were separate. Hanshi commemorated Jie Zitui's death and involved eating cold food. Over 2,000 years ago, the festivals merged, with Hanshi customs (like eating cold food) disappearing while Qingming absorbed the ancestor-honoring traditions. Today, Hanshi is largely forgotten.",
        },
        {
          myth: "Qingtuan is only eaten on Qingming",
          reality:
            "While qingtuan are most associated with Qingming, they are eaten throughout spring in many regions. In southern China, qingtuan and similar green rice dumplings are sold at street food stalls throughout March and April. Some families make them for winter solstice or other occasions as well.",
        },
        {
          myth: "You should wear black to Qingming",
          reality:
            "There is no strict dress code for Qingming, though respectful attire is appropriate when visiting graves. Many families dress in spring colors and enjoy outdoor activities, making it more of a spring festival than a somber occasion. Some families wear bright colors to celebrate the season with their ancestors.",
        },
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
      // Deep content extensions
      historyStory: `The Qixi Festival is rooted in a Chinese legend that has been told for over 2,000 years since the Han Dynasty. The story centers on Niulang (牛郎), a poor cowherd, and Zhinu (织女), the seventh daughter of the Heavenly Queen Mother (王母娘娘).

Legend tells that Zhinu, a skilled Weaver Girl, descended from heaven to bathe in a mortal world. Niulang, a young orphan who tended cattle, happened upon her and hid her clothes when she tried to return to heaven. Unable to fly back without her celestial clothing, Zhinu stayed and eventually married Niulang. They had two children and lived happily for years.

When the Queen Mother discovered her daughter's marriage to a mortal, she retrieved Zhinu's celestial robe and returned her to heaven. Niulang, guided by his magical cow, flew after her with their children. The Queen Mother created the Milky Way with her hairpin to separate the lovers. Moved by their devotion, she allowed them to meet once a year on the 7th day of the 7th lunar month. Magpies form a bridge across the Milky Way so the couple can be reunited.

The festival originally had multiple purposes beyond romance. Young women would pray to Zhinu for skill in needlework, as she was the celestial Weaver Girl. The 7th lunar month was considered an auspicious time for agricultural activities, and the festival marked the transition from summer to autumn harvest season.`,
      regionalVariations: {
        north: `**Beijing**: Traditional Qixi celebrations include temple fairs at the Niulang Temple and other historic sites. Young women would traditionally visit these temples to pray for skilled needlework and good husbands. The festival is sometimes called "Daughter Festival" (女儿节) with special foods and activities for young girls.

**Northern China**: Rural traditions include "Qi Qiao" (乞巧) rituals where young women would place needles on water surfaces to test their dexterity. Successful needle floating was seen as a sign of good needlework skills. This tradition has largely disappeared in urban areas.`,
        south: `**Guangdong and Hong Kong**: The festival is celebrated with elaborate flower displays and romantic dinners. Victoria Harbour in Hong Kong hosts special Qixi events. The "Qixi Night" has become a popular dating occasion, with restaurants and hotels offering special packages. Couples release lanterns or make wishes together.

**Fujian (Quanzhou)**: Qixi is celebrated with the "Qixi Water Festival" in some coastal areas. Fishing communities offer prayers for safe voyages and abundant catches. The festival has stronger connections to maritime traditions than romance in some coastal regions.

**Jiangsu and Zhejiang**: Hangzhou's West Lake and Suzhou's classical gardens become popular dating destinations. Traditional boat rides under the stars are romantic activities. The festival emphasizes poetry and literature, with couplet writing contests held at some historic sites.`,
        east: `**Shanghai**: Qixi has become one of the most commercially promoted festivals, with massive spending on gifts, flowers, and romantic dinners. The bund and other scenic spots become crowded with couples. Many hotels and restaurants require advance reservations for Qixi dinner.

**Nanjing**: The Qinhuai River hosts Qixi-themed boat rides with traditional performances recreating the Niulang and Zhinu story. The "Qixi Cultural Festival" combines romance with traditional Chinese culture exhibitions.`,
        west: `**Sichuan**: The festival combines with summer nightlife culture, with outdoor markets and late-night food stalls popular among young couples. Some rural areas maintain traditional "stargazing" customs where couples look for Vega and Altair in the night sky.

**Yunnan**: Multiple ethnic groups have their own versions of the Cowherd and Weaver Girl legend. The Bai people in Dali celebrate with traditional dances. The festival may coincide with other ethnic summer celebrations in some regions.`,
      },
      modernEvolution: `**Commercialization as Chinese Valentine's Day**:
- Qixi has become China's most commercially significant romantic holiday
- Flower prices can triple during Qixi week
- Jewelry, watches, and designer goods see significant sales spikes
- Luxury brands run special Qixi marketing campaigns
- Hotels and restaurants require bookings weeks in advance

**Technology Integration**:
- Live-streamed Qixi events from romantic destinations
- Dating apps run special matching campaigns for Qixi
- Virtual gift-giving through WeChat (digital flowers, chocolates)
- AR apps that let couples "see" the Cowherd and Weaver Girl stars
- Social media trends with Qixi hashtags trending for days

**Social Media Impact**:
- "Qixi couples" post elaborate gift reveals on social media
- Qixi has become a status symbol - expensive gifts demonstrate love
- The festival generates massive e-commerce sales through live-streaming
- Qixi proposal videos go viral online

**Changing Traditions**:
- Traditional "Qi Qiao" needlework prayers are largely forgotten
- Star observation has been replaced by smartphone photography
- Young singles may "rent" partners for Qixi appearances
- The festival has become more about couples than young women's skills`,
      misconceptions: [
        {
          myth: "Qixi Festival is China's official Valentine's Day",
          reality:
            "While Qixi is often called Chinese Valentine's Day, it is not an officially recognized holiday. The romantic associations are largely a modern commercial invention. Traditionally, the festival focused on young women's needlework skills and agricultural blessings, not romance. Western Valentine's Day on February 14th is also widely celebrated in China.",
        },
        {
          myth: "You can only celebrate Qixi if you have a romantic partner",
          reality:
            "Originally, Qixi was primarily celebrated by unmarried young women praying for good needlework skills and finding good husbands. The romantic focus for couples is a modern interpretation. Many single people celebrate by making wishes for future love, going on group dates, or simply enjoying the summer festival atmosphere.",
        },
        {
          myth: "Qixi is always on August 7th",
          reality:
            "Qixi falls on the 7th day of the 7th lunar month, which varies between late July and mid-August in the Gregorian calendar. In 2024, Qixi falls on August 10th. In 2025, it falls on August 29th. Always check the lunar calendar for the exact date.",
        },
        {
          myth: "All Chinese people believe in the Cowherd and Weaver Girl legend",
          reality:
            "The legend is one of many love stories in Chinese culture. Other regions and ethnic groups have their own stories. The Uyghur, Tibetan, and Mongolian peoples have different romantic festivals. Even within Han Chinese culture, the legend's popularity varies by region.",
        },
        {
          myth: "You must make wishes by looking at the stars",
          reality:
            "While star observation is part of traditional Qixi celebrations, light pollution in major cities makes star viewing nearly impossible. Modern celebrants make wishes in other ways: by writing wishes on paper, blowing on dandelion seeds, or simply expressing wishes verbally. The key is the intention, not the method.",
        },
        {
          myth: "Qixi gifts must be expensive",
          reality:
            "Traditional Qixi gifts included embroidered items, flowers, and handmade crafts that demonstrated effort rather than cost. Modern commercialization has driven up gift expectations, but many couples now prefer meaningful experiences or handmade gifts over expensive purchases. The original spirit was about caring, not spending.",
        },
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
  double_ninth: {
    basicInfo: {
      name: "Double Ninth Festival",
      emoji: "🌼",
      date: "October",
      lunarDate: "9th day of 9th lunar month",
      description: "Festival honoring elders and climbing heights",
      history:
        "Double Ninth Festival has been celebrated since ancient times. It's a day for respecting elders, enjoying chrysanthemums, and climbing to high places.",
      customs: [
        "Climbing mountains and heights",
        "Appreciating chrysanthemums",
        "Drinking chrysanthemum wine",
        "Eating double Ninth cakes",
        "Honoring elders and ancestors",
        "Flying kites",
      ],
      taboo: [
        "Don't stay out after dark on Double Ninth",
        "Avoid swimming or water activities",
      ],
      // Deep content extensions
      historyStory: `The Double Ninth Festival (重阳节) has been celebrated for over 2,000 years since the Warring States Period. The number nine (九, jiǔ) in Chinese sounds similar to the word for "long" or "eternal" (久), making it a symbol of longevity. The festival originally had astrological significance, marking the transition from autumn to winter in the agricultural calendar.

The most famous origin story relates to the Han Dynasty scholar Fei Changfang and his disciple Wang Chao. According to legend, Fei Changfang learned immortality from a celestial being and eventually ascended to heaven. His disciple Wang Chao was less diligent and fell ill. When Fei appeared to Wang in a vision, he told Wang to climb a high mountain on the 9th day of the 9th lunar month, drink chrysanthemum wine, and avoid evil spirits. Wang followed these instructions and was cured.

The festival also relates to the ancient Chinese practice of yang cultivation. During the Double Ninth, yang energy reaches its peak before declining. Climbing to high places was believed to absorb yang energy and promote health. The chrysanthemum, which blooms in autumn, represents resilience and the ability to thrive in adverse conditions.`,
      regionalVariations: {
        north: `**Beijing**: The Double Ninth Festival is celebrated as "Respect the Elderly Day" (敬老节). Families take elderly relatives to parks like Jingshan Park or the Summer Palace for autumn outings. Beijing's 798 Art District hosts chrysanthemum exhibitions. The festival emphasizes filial piety and family gatherings.

**Northern China**: Mountain climbing is popular at sites like Mount Tai in Shandong or Mount Heng in Shanxi. Traditional chrysanthemum exhibitions are held in major parks. The festival coincides with the autumn foliage season, making it ideal for outdoor activities.`,
        south: `**Hong Kong**: Double Ninth is a public holiday for ancestral worship. Families visit ancestral halls and graves to honor deceased relatives. The Che Kung Festival at Sha Tin includes unique Double Ninth traditions. Victoria Peak becomes a popular destination for autumn views.

**Guangdong**: The festival is known for "climbing green mountains" (登青) and eating double Ninth cakes. Chrysanthemum tea and chrysanthemum hot pot become popular. Family gatherings emphasize respecting elders, with special dinners featuring autumn delicacies.

**Fujian (Fuzhou)**: Double Ninth is associated with oyster harvesting and seafood feasts. The "Mazu Pilgrimage" on Double Ninth has unique local characteristics. Coastal communities blend ancestral worship with autumn harvest celebrations.`,
        east: `**Shanghai**: Families visit parks like Fuxing Park or Gucun Park for autumn outings. The city hosts chrysanthemum exhibitions at various gardens. Double Ninth cakes with lotus seed or red bean fillings are popular. The bund becomes a scenic location for family photos.

**Zhejiang (Hangzhou)**: West Lake hosts autumn chrysanthemum festivals during Double Ninth. Dragon Well Tea (Longjing) harvest ceremonies often coincide with the festival. Families enjoy boat rides on West Lake while appreciating autumn scenery. The festival combines natural beauty with cultural activities.`,
        west: `**Sichuan**: Mountain climbing at scenic spots like Mount Emei is popular. The festival coincides with autumn food seasons, featuring chestnuts, persimmons, and autumn tea. Some areas have unique Double Ninth traditions involving local ethnic customs.

**Yunnan**: Multiple ethnic groups celebrate Double Ninth with unique traditions. The Yi people hold harvest festivals around this time. Dali's Three Pagolacks provide scenic autumn viewing locations. The festival blends with ethnic autumn celebrations in various regions.`,
      },
      modernEvolution: `**Elderly Respect Awareness**:
- Since 1989, Double Ninth has been designated as "Respect the Elderly Day" (敬老节) in China
- The festival has become an occasion for promoting elderly welfare and intergenerational harmony
- Government and civil society organizations hold various respect-the-elderly activities
- The festival has raised awareness about caring for aging populations

**Commercialization**:
- Gift packages for the elderly (health products, nutritious foods) see peak sales
- Tourism agencies offer "autumn outing" packages for families
- Restaurants feature special autumn menus with elderly-friendly dishes
- Chrysanthemum-themed products proliferate in markets

**Technology Integration**:
- Online platforms promote respect-the-elderly campaigns
- Families share Double Nine activities on social media
- Video calls allow distant family members to participate in gatherings
- Some families create digital tributes for deceased ancestors

**Changing Traditions**:
- Mountain climbing is less popular in urban areas due to lack of nearby mountains
- Virtual ancestral worship through online platforms has emerged
- The festival has become more focused on elder care than traditional customs
- Autumn outings have evolved into general family leisure activities`,
      misconceptions: [
        {
          myth: "Double Ninth Festival is only for elderly people",
          reality:
            "While respecting elders is central to modern celebrations, the festival traditionally had broader significance. People of all ages would climb mountains, enjoy chrysanthemums, and participate in autumn activities. The focus on elderly respect is a modern development emphasizing filial piety.",
        },
        {
          myth: "You must climb a mountain on Double Ninth",
          reality:
            "Mountain climbing is traditional but not mandatory. In ancient times, climbing heights (登高) could mean climbing to high ground, tall buildings, or even simply going to elevated areas. Urban residents may visit parks, climb stairs, or simply enjoy outdoor activities without traditional mountain climbing.",
        },
        {
          myth: "Chrysanthemum wine is essential for Double Ninth",
          reality:
            "While chrysanthemum wine is traditional, it is rarely consumed today due to alcohol regulations and health concerns. Modern celebrations feature chrysanthemum tea, chrysanthemum-flavored foods, or simply chrysanthemum decorations. The flower itself represents the spirit of the festival more than the wine.",
        },
        {
          myth: "Double Ninth cakes are the same as mooncakes",
          reality:
            "Double Ninth cakes (重阳糕) are entirely different from mooncakes. They are typically made from glutinous rice flour, sometimes layered (多层) with red bean or lotus seed paste, and often shaped into flower or animal patterns. They are lighter and less sweet than mooncakes.",
        },
        {
          myth: "Double Ninth is a sad festival for ancestors",
          reality:
            "While ancestral worship is part of the festival, the overall tone is celebratory. The festival emphasizes enjoying autumn beauty, spending time with family, and appreciating the harvest. It is one of the more upbeat traditional festivals.",
        },
        {
          myth: "Double Ninth has the same meaning everywhere in China",
          reality:
            "Regional variations are significant. Southern coastal regions emphasize ancestral worship, while northern areas focus more on elder respect. Some ethnic minority groups have entirely different traditions that may or may not coincide with the Han Chinese Double Ninth celebration.",
        },
      ],
    },
    expressions: [
      {
        chinese: "重阳节快乐",
        pinyin: "Chóng yáng jié kuài lè",
        english: "Happy Double Ninth Festival",
        scenario: "General greeting",
      },
      {
        chinese: "登高望远",
        pinyin: "Dēng gāo wàng yuǎn",
        english: "Climb high and see far",
        scenario: "Describing the mountain climbing tradition",
      },
      {
        chinese: "福如东海",
        pinyin: "Fú rú dōng hǎi",
        english: "May your blessings be as vast as the East Sea",
        scenario: "Elder blessing for longevity",
      },
    ],
    foods: [
      {
        name: "Double Ninth Cake",
        emoji: "🍰",
        meaning: "Longevity and prosperity",
        description: "Layered rice cake symbolizing advancement",
        howToOrder: "Wǒ yào yí kuài chóng yáng gāo",
      },
      {
        name: "Chrysanthemum Tea",
        emoji: "🌼",
        meaning: "Health and longevity",
        description: "Fragrant tea made from dried chrysanthemum flowers",
        howToOrder: "Lái yì bēi jú huā chá",
      },
      {
        name: "Chestnuts",
        emoji: "🌰",
        meaning: "Abundant harvest",
        description: "Roasted chestnuts popular during autumn festivals",
      },
    ],
    gifts: [
      {
        name: "Chrysanthemum",
        emoji: "🌼",
        suitability: "Elders",
        note: "Fresh or dried chrysanthemums symbolize respect",
      },
      {
        name: "Health Products",
        emoji: "💊",
        suitability: "Elders",
        note: "Vitamins, supplements, or traditional medicines",
      },
      {
        name: "Foot Bath Set",
        emoji: "🛁",
        suitability: "Elders",
        note: "For health and relaxation",
      },
    ],
    tools: [
      {
        name: "Elder Respect Guide",
        description: "Ways to honor and care for elderly family members",
        badge: "New",
      },
      {
        name: "Autumn Outing Planner",
        description: "Find best spots for family outings",
      },
      {
        name: "Chrysanthemum Tea Guide",
        description: "Types and brewing methods",
      },
    ],
  },
  winter_solstice: {
    basicInfo: {
      name: "Winter Solstice",
      emoji: "❄️",
      date: "December 21-23",
      lunarDate: "Winter solstice solar term",
      description: "The longest night of the year",
      history:
        "Winter Solstice has been celebrated for over 2,500 years. It's one of the most important traditional festivals, marking the return of yang energy and the lengthening of days.",
      customs: [
        "Eating dumplings or tangyuan",
        "Offering sacrifices to ancestors",
        "Eating mutton soup",
        "Counting nine days of winter (九九消寒)",
        "Family gatherings",
        "Eating noodles",
      ],
      taboo: ["Don't break things on Winter Solstice", "Don't argue or cry"],
      // Deep content extensions
      historyStory: `The Winter Solstice (冬至) is one of the oldest and most important traditional festivals in China, with a history dating back over 2,500 years to the Spring and Autumn Period. In the ancient Chinese calendar, Winter Solstice was considered as important as the New Year, with official celebrations and public holidays.

The festival is rooted in ancient Chinese cosmology and astronomy. The ancient Chinese observed that the sun's position shifts throughout the year, creating the seasons. The Winter Solstice marks the point when the Northern Hemisphere is tilted farthest from the sun, resulting in the shortest day and longest night of the year.

After Winter Solstice, yang energy (positive, warm, active energy) begins to grow while yin energy (negative, cold, passive energy) recedes. This transition was seen as a cosmic rebirth, making Winter Solstice a time for celebration and renewal. Ancient emperors would offer sacrifices to heaven on this day, praying for the prosperity of the nation.

The saying "Winter Solstice is as important as New Year" (冬至大如年) reflects its significance. In ancient times, governments would grant leaves to officials, and families would gather for special meals. The festival also marked the beginning of the "nine nine" period (九九), a folk calendar where people counted 81 days of winter through poetry and seasonal activities.`,
      regionalVariations: {
        north: `**Beijing and Northern China**: Dumplings (饺子) are the essential food, especially for northerners. Families gather for dumplings with various fillings, often including lamb for warming properties. Beijing's traditional markets sell special Winter Solstice dumplings. The saying "Eat dumplings on Winter Solstice" (冬至吃饺子) is particularly strong in northern culture.

**Northeast China**: The festival emphasizes lamb and mutton dishes for warming the body. Families gather for hot pot featuring lamb. The long winter nights make family gatherings especially important for emotional warmth.`,
        south: `**Shanghai and Jiangsu-Zhejiang**: Tangyuan (汤圆) are the traditional food, symbolizing reunion and completeness. Sweet tangyuan with black sesame or peanut fillings are common. The festival is celebrated with family dinners featuring warming dishes. Shanghai's traditional markets sell special Winter Solstice foods.

**Guangdong and Hong Kong**: The festival, called "Dongzhi" (冬至), is a time for family reunions. Cantonese families eat tangyuan and special rice dishes. Ancestor offerings are particularly important. The festival may involve visiting ancestral halls or temples.

**Fujian**: Tangyuan and special rice cakes are traditional foods. Some coastal communities offer seafood to ancestors. The festival has strong connections to ancestral worship traditions. The "tangyuan" here may be savory rather than sweet.`,
        east: `**Shandong**: Known for lamb dumplings and mutton soup. The saying "Winter Solstice, eat dumplings and drink lamb soup" is strong. Families gather for elaborate meals featuring winter foods. Traditional customs include giving gifts to elders.

**Jiangsu**: Special rice cakes (年糕) are eaten, symbolizing progress and growth. The festival features warming foods appropriate for the cold season. Family gatherings are emphasized, with multiple generations coming together.`,
        west: `**Sichuan**: Hot pot gatherings are popular, with families gathering around the pot for warmth. Spicy lamb hot pot is particularly popular. The festival combines warmth, family, and the arrival of the coldest season.

**Shaanxi**: Families eat dumplings and noodles. Special Winter Solstice foods include羌饼 (qiangbing, a type of flatbread). Ancestor worship is important, with offerings made at family altars or graves.`,
      },
      modernEvolution: `**Reduced Significance**:
- In modern times, Winter Solstice has lost much of its former importance compared to other festivals
- The official holiday significance has declined since ancient times
- Many urban families simply eat dumplings or tangyuan without elaborate celebrations
- The festival is more recognized as a traditional custom than a major holiday

**Food Focus**:
- Food remains the central element of modern celebrations
- Dumplings in the north, tangyuan in the south dominate
- Restaurant reservations for Winter Solstice dinners have increased in cities
- Pre-made dumplings and tangyuan sell well in supermarkets

**Technology Integration**:
- Food delivery services see increased orders for Winter Solstice meals
- Social media features Winter Solstice food posts
- Some families use video calls to include distant relatives in meals
- Weather apps remind users of Winter Solstice traditions

**Changing Traditions**:
- The "nine nine" calendar is largely forgotten
- Ancestor worship has decreased in urban areas
- Many families treat it simply as a "dumpling day" or "tangyuan day"
- The astronomical significance is rarely discussed`,
      misconceptions: [
        {
          myth: "Winter Solstice is just another food festival",
          reality:
            "While food is central today, Winter Solstice was historically one of the most important festivals, equivalent to New Year in significance. It marked important astronomical events and had deep cultural meaning related to cosmic rebirth. The food focus is a simplification of its rich traditions.",
        },
        {
          myth: "Everyone eats dumplings on Winter Solstice",
          reality:
            "Food customs vary by region. Northerners eat dumplings, while southerners eat tangyuan or rice cakes. Some regions eat noodles, mutton soup, or other warming foods. There is no single correct food for Winter Solstice.",
        },
        {
          myth: "Winter Solstice has no religious or spiritual significance",
          reality:
            "Ancient Winter Solstice had profound spiritual significance. Emperors offered sacrifices to heaven, families honored ancestors, and the day marked cosmic renewal. While these practices have diminished, they were historically central to the festival.",
        },
        {
          myth: "Winter Solstice is a sad day because it's the longest night",
          reality:
            "The opposite is true. Winter Solstice is celebrated because it marks the turning point - after this day, days gradually become longer. Ancient Chinese saw this as the victory of yang (light/warmth) over yin (dark/cold), making it a hopeful occasion.",
        },
        {
          myth: "The 9-9 calendar (九九) is about counting down to spring",
          reality:
            "The 9-9 calendar (九九消寒) was a folk activity where people marked 81 days of winter through poetry, paintings, or daily activities. Each nine represented a different aspect of winter weather. While the concept is forgotten by most, it shows how deeply the seasons were integrated into daily life.",
        },
        {
          myth: "Winter Solstice is only celebrated in China",
          reality:
            "While the festival has Chinese origins, similar winter solstice celebrations exist in other cultures. Japan has its own version, and Korea has winter solstice traditions. However, the Chinese version with dumplings/tangyuan is unique to Chinese culture.",
        },
      ],
    },
    expressions: [
      {
        chinese: "冬至快乐",
        pinyin: "Dōng zhì kuài lè",
        english: "Happy Winter Solstice",
        scenario: "General greeting",
      },
      {
        chinese: "天寒地冻",
        pinyin: "Tiān hán dì dòng",
        english: "Cold weather freezing ground",
        scenario: "Describing winter conditions",
      },
      {
        chinese: "数九寒天",
        pinyin: "Shǔ jiǔ hán tiān",
        english: "The nine nine cold days",
        scenario: "Referring to the coldest period of winter",
      },
    ],
    foods: [
      {
        name: "Dumplings",
        emoji: "🥟",
        meaning: "Reunion and warmth",
        description: "Traditional northern Winter Solstice food",
        howToOrder: "Wǒ yào chī jiǎo zi",
      },
      {
        name: "Tangyuan",
        emoji: "⚪",
        meaning: "Family togetherness",
        description: "Sweet rice balls popular in the south",
        howToOrder: "Wǒ yào chī tāng yuán",
      },
      {
        name: "Mutton Soup",
        emoji: "🍲",
        meaning: "Warming the body",
        description: "Lamb soup for cold winter days",
        howToOrder: "Lái yì wǎn yáng ròu tāng",
      },
      {
        name: "Noodles",
        emoji: "🍜",
        meaning: "Lengthening days",
        description: "Long noodles symbolizing the return of yang energy",
      },
    ],
    gifts: [
      {
        name: "Winter Clothing",
        emoji: "🧥",
        suitability: "Family members",
        note: "Coats, scarves, or gloves for warmth",
      },
      {
        name: "Dumpling-Making Set",
        emoji: "🥟",
        suitability: "Families",
        note: "Ingredients and tools for making dumplings together",
      },
      {
        name: "Hot Pot Set",
        emoji: "🍲",
        suitability: "Families",
        note: "For gathering around hot pot during cold weather",
      },
    ],
    tools: [
      {
        name: "Dumpling Recipe Collection",
        description: "Traditional and creative dumpling recipes",
        badge: "New",
      },
      {
        name: "Winter Solstice Dining Guide",
        description: "Regional foods and traditions",
      },
      {
        name: "Cold Weather Wellness Tips",
        description: "Staying healthy in winter",
      },
    ],
  },
  laba: {
    basicInfo: {
      name: "Laba Festival",
      emoji: "🥣",
      date: "January",
      lunarDate: "8th day of 12th lunar month",
      description:
        "Rice porridge festival marking the approach of Spring Festival",
      history:
        "Laba Festival has been celebrated for over 1,500 years. It's a day for eating laba porridge (八宝粥) and preparing for Spring Festival.",
      customs: [
        "Eating laba porridge",
        "Worshiping ancestors and gods",
        "Making laba garlic",
        "Offering prayers for good harvest",
        "Cleaning and preparing for New Year",
        "Veneration of the Buddha",
      ],
      taboo: ["Don't eat meat on Laba", "Don't be stingy with porridge"],
      // Deep content extensions
      historyStory: `The Laba Festival (腊八节) has a history dating back over 1,500 years to the Northern Wei Dynasty (386-535 CE). The name "Laba" (腊八) comes from "La Yue" (腊月, twelfth lunar month) and "Ba Ri" (八日, eighth day), meaning the eighth day of the twelfth lunar month.

The most famous origin story relates to Sakyamuni (释迦牟尼), the founder of Buddhism. According to legend, the young Siddhartha Gautama practiced extreme asceticism for six years, nearly starving himself to death. He realized that extreme fasting was not the path to enlightenment and accepted a bowl of milk rice porridge from a village girl. On the eighth day of the twelfth lunar month, he achieved enlightenment under the bodhi tree.

Buddhist temples began commemorating this day by distributing laba porridge to the poor. Over time, the practice spread to the general population, and eating laba porridge on the eighth day of the twelfth lunar month became a widespread tradition.

Another origin relates to ancient Chinese harvest celebrations. After the autumn harvest, farmers would offer thanks to the gods and prepare preserved foods for winter. The eighth day of the twelfth lunar month marked the beginning of the most intensive preparation period for Spring Festival. The porridge symbolized the abundance of the harvest and the importance of sharing with those in need.`,
      regionalVariations: {
        north: `**Beijing**: Laba garlic (腊八蒜) is a specialty, with purple garlic preserved in vinegar until it turns green. Temples like Yonghe Temple distribute free laba porridge. Families gather to make and eat porridge together. The traditional Beijing style features red beans, dates, and various grains.

**Northern China**: Laba porridge is often made with eight or more ingredients including red beans, millet, peanuts, lotus seeds, and dates. The porridge is offered to ancestors before being eaten by the family. Regional variations include adding lamb or using different grain combinations.`,
        south: `**Shanghai and Jiangsu**: Laba porridge may be sweet or savory. Sweet versions include red beans, lotus seeds, and sweet rice. Savory versions might include meat, mushrooms, and vegetables. The festival is a time for family gatherings and preparing for Spring Festival cleaning.

**Guangdong**: The festival is less prominently celebrated than in the north, but laba porridge is still common. Some families add traditional Chinese medicines to the porridge for health benefits. The festival marks the beginning of the busy pre-New Year period.

**Fujian and Zhejiang**: Laba porridge often includes seafood ingredients like dried scallops and oysters. The festival has Buddhist temple traditions of distributing porridge to the community. Ancestor worship is emphasized alongside Buddhist observances.`,
        east: `**Shandong**: Known for elaborate laba porridge with many ingredients. The province's agricultural heritage emphasizes the harvest significance. Families gather for laba dinner and begin Spring Festival preparations.

**Zhejiang (Hangzhou)**: West Lake lotus seeds are a prized ingredient. Some families visit temples for laba porridge blessings. The festival marks the beginning of winter preparations in the traditional calendar.`,
        west: `**Sichuan**: Laba porridge may include Sichuan pepper and spicy elements. The festival overlaps with the beginning of preserved meat season. Families begin making腊肉 (cured meat) around this time.

**Shaanxi**: Traditional laba porridge includes many grains and beans. The festival has strong folk tradition elements, including offerings to kitchen gods. Some rural areas maintain ancient rituals associated with the festival.`,
      },
      modernEvolution: `**Commercialization**:
- Pre-made laba porridge packages are sold in supermarkets
- Restaurants offer special laba porridge menus
- Online platforms promote laba-related products
- Temple porridge distribution has become a tourist attraction

**Religious Aspects**:
- Temple porridge distribution has become a cultural tourism event
- Buddhist temple attendance increases on Laba
- Some secular families participate without religious meaning
- The Buddhist origin is less commonly known today

**Food Innovation**:
- Modern laba porridge may include Western ingredients
- Sweet and savory variations proliferate
- Health-conscious versions use less sugar
- Instant laba porridge packages are available

**Preparation Period**:
- Laba marks the beginning of Spring Festival preparations
- Cleaning, shopping, and food preparation intensify
- The "Laba virus" (feeling of busyness) is a modern concept
- The festival has become synonymous with pre-New Year rush`,
      misconceptions: [
        {
          myth: "Laba porridge must have exactly eight ingredients",
          reality:
            "The traditional name eight treasure porridge (八宝粥) suggests eight ingredients, but the actual number varies. Some recipes use more than eight, some use fewer. The key is variety and abundance, not a specific number. Modern interpretations may include completely different ingredients.",
        },
        {
          myth: "Only Buddhists celebrate Laba",
          reality:
            "While Laba has Buddhist origins, the festival has become a general cultural tradition. Families of all backgrounds participate in eating laba porridge, regardless of religious belief. The festival has been secularized over 1,500 years of practice.",
        },
        {
          myth: "Laba porridge is always sweet",
          reality:
            "Regional variations include both sweet and savory versions. Northern Chinese versions are often sweet with dates and red beans. Southern versions may include meat, vegetables, or seafood. Some families make both versions to satisfy different preferences.",
        },
        {
          myth: "Laba Festival is just about eating porridge",
          reality:
            "While porridge is the most recognized element, Laba has multiple traditions: making laba garlic, ancestor worship, temple offerings, and beginning Spring Festival preparations. The festival marks an important transition in the lunar calendar.",
        },
        {
          myth: "You should eat laba porridge for breakfast",
          reality:
            "Laba porridge can be eaten at any meal. Some families eat it for dinner to allow time for preparation. The key is eating it on the eighth day, not at a specific time.",
        },
        {
          myth: "Laba Festival is only celebrated in China",
          reality:
            "Similar rice porridge festivals exist in other Buddhist cultures. Japan has similar traditions, and countries with Buddhist populations may have analogous celebrations. However, the specific Chinese Laba Festival traditions are unique to Chinese culture.",
        },
      ],
    },
    expressions: [
      {
        chinese: "腊八节快乐",
        pinyin: "Là bā jié kuài lè",
        english: "Happy Laba Festival",
        scenario: "General greeting",
      },
      {
        chinese: "喝了腊八粥",
        pinyin: "Hē le là bā zhōu",
        english: "Drank laba porridge",
        scenario: "Referring to eating laba porridge",
      },
      {
        chinese: "年味渐浓",
        pinyin: "Nián wèi jiàn nóng",
        english: "The New Year atmosphere is thickening",
        scenario: "Describing the approach of Spring Festival",
      },
    ],
    foods: [
      {
        name: "Laba Porridge",
        emoji: "🥣",
        meaning: "Abundance and blessings",
        description: "Rice porridge with eight or more ingredients",
        howToOrder: "Lái yì wǎn là bā zhōu",
      },
      {
        name: "Laba Garlic",
        emoji: "🧄",
        meaning: "Good fortune",
        description: "Garlic preserved in vinegar until green",
        howToOrder: "Mǎi yì xiē là bā suàn",
      },
      {
        name: "Preserved Meat",
        emoji: "🥓",
        meaning: "Food preparation",
        description: "Cured meat for Spring Festival",
      },
    ],
    gifts: [
      {
        name: "Laba Porridge Gift Box",
        emoji: "🥣",
        suitability: "Family and friends",
        note: "Pre-packaged porridge ingredients",
      },
      {
        name: "Cooking Supplies",
        emoji: "🍚",
        suitability: "Families",
        note: "Rice cookers or cooking tools",
      },
      {
        name: "Temple Porridge Package",
        emoji: "🏛️",
        suitability: "Elderly relatives",
        note: "Temple-sponsored porridge gifts",
      },
    ],
    tools: [
      {
        name: "Laba Porridge Recipe",
        description: "Traditional and modern recipes",
        badge: "New",
      },
      {
        name: "Laba Garlic Guide",
        description: "How to make perfect laba garlic",
      },
      {
        name: "Spring Festival Prep List",
        description: "Getting ready for the New Year",
      },
    ],
  },
  longtaitou: {
    basicInfo: {
      name: "Dragon Head Festival",
      emoji: "🐉",
      date: "February/March",
      lunarDate: "2nd day of 2nd lunar month",
      description: "Festival marking the awakening of dragons and spring rains",
      history:
        "Dragon Head Festival, also known as Longtaitou, has been celebrated for over 1,000 years. It's believed to be the day when dragons wake from winter hibernation and bring spring rains for agriculture.",
      customs: [
        "Getting haircuts for good luck",
        "Eating dragon foods (dragon beard candy, dragon liver)",
        "Worshiping the dragon king for rain",
        "Eating spring pancakes (春饼)",
        "Braiding hair in dragon patterns",
        "Women's hairpin ceremonies",
      ],
      taboo: [
        "Don't do laundry or house cleaning",
        "Don't break things",
        "Don't use needles or scissors",
        "Avoid eating mutant or deformed foods",
      ],
      // Deep content extensions
      historyStory: `The Dragon Head Festival (龙抬头), also known as Longtaitou (龙抬头), is a traditional Chinese festival celebrated on the second day of the second lunar month. The festival marks the beginning of spring plowing and is associated with the awakening of dragons after their winter hibernation.

According to Chinese mythology, dragons control the rains and waters. After sleeping through winter, dragons awaken on this day and begin their work of bringing spring rains to nourish crops. Ancient farmers would pray to the dragon king for abundant rainfall and a good harvest.

The festival has roots in ancient agricultural traditions. In northern China, where the climate is drier, spring rains were essential for crops. The dragon, as the mythical creature controlling water, became a central figure in spring agricultural rituals. Temples dedicated to the Dragon King would hold special ceremonies on this day.

Another origin story relates to the legendary Emperor Yu the Great (大禹王), who tamed China's floods. According to legend, Yu was so busy with flood control work that he passed his own wedding three times. When he finally married, the wedding fell on the second day of the second lunar month. Since then, this day became associated with dragons and became an auspicious day for various activities.`,
      regionalVariations: {
        north: `**Beijing**: Getting haircuts is the most important tradition. Barbershops are especially busy on this day. Dragon beard candy (龙须糖) is a popular traditional treat. Spring pancakes (春饼) with various fillings are eaten, representing the first spring harvest.

**Northern China (Hebei, Shandong)**: The festival is closely tied to agricultural rituals. Families pray to the Dragon King for spring rains. Eating "dragon foods" is popular - dragon liver (pig's liver), dragon ears (ear-shaped noodles), and dragon scales (striped pancakes).`,
        south: `**Southern China (Guangdong, Fujian)**: The festival is less prominently celebrated than in the north but still has significance. Some regions worship the Dragon King at local temples. Fresh spring vegetables and shoots are featured in meals.

**Jiangsu and Zhejiang**: Dragon-related foods are prepared, and some families visit temples. The festival coincides with the beginning of spring tea season in some areas.`,
        east: `**Shanghai**: Haircut traditions are observed, with many visiting barbershops. Dragon beard candy and spring pancakes are popular. The festival signals the transition from winter to spring in the local calendar.

**Shandong**: Strong agricultural traditions. Some rural areas still perform Dragon King worship rituals. Spring plowing ceremonies may be held.`,
        west: `**Sichuan**: The festival overlaps with preparations for Dragon Boat Festival. Some regions have unique local customs. Spring foods featuring fresh vegetables are emphasized.

**Shaanxi**: Traditional customs include eating specific foods and avoiding certain activities. Some ancient folk traditions are still maintained in rural areas.`,
      },
      modernEvolution: `**Haircut Industry Peak**:
- Dragon Head Festival is the busiest day of the year for barbershops
- Many Chinese avoid haircuts in the month before the festival
- The saying "Dragon Head doesn't cut hair" (二月二不剃头) reflects this custom
- Many salons run special promotions and extend hours

**Food Culture**:
- Dragon-themed foods have become popular marketing items
- Restaurants create special "dragon menus" for the occasion
- Dragon beard candy has become a popular souvenir
- Spring pancake restaurants see increased business

**Declining Traditions**:
- Many young people are unaware of the Dragon King worship traditions
- Agricultural rituals have largely disappeared in urban areas
- Some customs like avoiding needles are rarely observed
- The festival has become more of a haircut and food celebration

**Cultural Awareness**:
- The festival has gained attention as a "Chinese haircut day"
- Social media campaigns promote dragon-themed activities
- Some cities organize cultural events to preserve traditions
- The connection to agricultural cycles is less understood`,
      misconceptions: [
        {
          myth: "Dragon Head Festival is only about getting haircuts",
          reality:
            "While haircuts are the most visible modern tradition, the festival originally had broader significance. It was an agricultural festival celebrating the dragon's role in bringing spring rains. Other traditions included Dragon King worship, eating specific foods, and various rituals for good fortune and harvest.",
        },
        {
          myth: "You can't eat dragon foods on this day",
          reality:
            "Eating 'dragon foods' is actually encouraged! Foods like dragon liver (pig's liver), dragon ears (ear-shaped noodles), and dragon scales (striped pancakes) are traditional. The foods are named after dragons to invoke good luck and blessings.",
        },
        {
          myth: "Dragon Head Festival is only for northern China",
          reality:
            "While the festival is more prominently celebrated in northern China where spring rain was crucial for agriculture, it is observed throughout China with regional variations. Southern regions have their own ways of celebrating, though the customs may differ.",
        },
        {
          myth: "The festival must be celebrated on February 2nd",
          reality:
            "Dragon Head Festival falls on the second day of the second lunar month, which varies between late February and mid-March in the Gregorian calendar. The lunar date is what matters, not the Gregorian equivalent.",
        },
        {
          myth: "Women cannot participate in Dragon Head Festival",
          reality:
            "Women have traditionally participated in the festival through women's hairpin ceremonies, especially in ancient times. In some regions, young women would wear special hairpins or have their hair styled in dragon patterns. The festival was traditionally inclusive.",
        },
      ],
    },
    expressions: [
      {
        chinese: "二月二龙抬头",
        pinyin: "Èr yuè èr lóng tái tóu",
        english: "Dragon raises its head on the second day of the second month",
        scenario: "General festival greeting",
      },
      {
        chinese: "剃龙头",
        pinyin: "Tì lóng tóu",
        english: "Getting a dragon head haircut",
        scenario: "Talking about getting a haircut",
      },
      {
        chinese: "吃龙食",
        pinyin: "Chī lóng shí",
        english: "Eating dragon foods",
        scenario: "Talking about traditional foods",
      },
    ],
    foods: [
      {
        name: "Spring Pancakes",
        emoji: "🫓",
        meaning: "First spring harvest",
        description: "Thin pancakes rolled with vegetables and meat",
        howToOrder: "Wǒ yào chūn bǐng",
      },
      {
        name: "Dragon Beard Candy",
        emoji: "🍬",
        meaning: "Sweet blessings",
        description: "Fine sugar filaments resembling dragon whiskers",
      },
      {
        name: "Dragon Ear Noodles",
        emoji: "🍜",
        meaning: "Good fortune",
        description: "Ear-shaped noodles symbolizing dragon's ears",
      },
    ],
    gifts: [
      {
        name: "Haircut Voucher",
        emoji: "✂️",
        suitability: "Everyone",
        note: "For getting a lucky haircut",
      },
      {
        name: "Dragon Toys",
        emoji: "🐉",
        suitability: "Children",
        note: "Dragon-themed toys for good luck",
      },
      {
        name: "Spring Pancake Set",
        emoji: "🫓",
        suitability: "Families",
        note: "Ingredients for making spring pancakes",
      },
    ],
    tools: [
      {
        name: "Haircut Guide",
        description: "Tips for the perfect Dragon Head haircut",
        badge: "New",
      },
      {
        name: "Dragon Foods Guide",
        description: "Traditional foods and recipes",
      },
      {
        name: "Spring Pancake Recipe",
        description: "How to make authentic spring pancakes",
      },
    ],
  },
  shangsi: {
    basicInfo: {
      name: "Shangsi Festival",
      emoji: "🌸",
      date: "March/April",
      lunarDate: "3rd day of 3rd lunar month",
      description: "Ancient spring bathing and purification festival",
      history:
        "Shangsi Festival is one of the oldest Chinese festivals, dating back over 2,000 years. Originally a day for bathing, purification, and driving away misfortune, it later became associated with spring outings and romantic encounters.",
      customs: [
        "Spring bathing with peach blossom water",
        "Eating spring foods",
        "Flying kites",
        "Wearing dogwood decorations",
        "Seeking romance and blessings",
        "Spring outings and picnics",
        "Drinking chrysanthemum wine",
      ],
      taboo: [
        "Don't stay indoors on Shangsi",
        "Don't bathe in cold water without proper preparation",
        "Avoid negative thoughts and words",
      ],
      // Deep content extensions
      historyStory: `Shangsi Festival (上巳节) is one of the oldest traditional Chinese festivals, with origins dating back to the Zhou Dynasty (1046-256 BCE). The name "Shangsi" means "the first auspicious day" and refers to the third day of the third lunar month.

In ancient times, Shangsi was primarily a purification festival. According to historical records, people would bathe in rivers on this day to wash away illness and misfortune. The practice was based on the belief that spring waters had special cleansing properties. Royal courts would hold elaborate bathing ceremonies, and common people would participate in communal river bathing.

The festival also had romantic dimensions. During the Han Dynasty, young men and women would gather by rivers for courtship purposes. Young women would float lotus leaves on the water, and young men would try to sink them with arrows - a practice similar to the later Qixi festival. These romantic encounters could lead to marriages.

Another important aspect was the worship of Xi He, the goddess of the sun. Ancient people believed that on Shangsi, Xi We would bathe in the celestial waters, symbolizing the purification of the sun itself. This connection to the sun goddess gave the festival its auspicious character.

During the Tang Dynasty, Shangsi became a major celebration. Emperors would host grand banquets, and the day was marked by poetry, music, and outdoor activities. The festival's popularity rivaled that of other major holidays.`,
      regionalVariations: {
        north: `**Beijing**: During imperial times, the emperor would host grand spring banquets. Common people would fly kites and eat spring foods. The festival has influenced modern "Women's Day" celebrations on March 8th.

**Northern China**: Spring outings are popular, with families visiting parks and scenic areas. Traditional foods include chrysanthemum dishes and spring vegetables. Kite flying is a common activity.`,
        south: `**Southern China (Yangtze River region)**: The festival coincides with the peach blossom season. Peach blossom viewing becomes a popular activity. Some regions have preserved ancient customs of river bathing or purification rituals.

**Guangdong**: Spring outings to historical sites and gardens are common. The festival is sometimes combined with modern tomb-sweeping activities in some areas.`,
        east: `**Shanghai and Jiangsu**: The city comes alive with spring activities. Parks and gardens host special events. Traditional Shangsi foods are prepared in restaurants. The festival has influenced local spring culture.

**Zhejiang**: West Lake in Hangzhou becomes a major destination for spring outings. The festival has strong connections to local literary and cultural traditions.`,
        west: `**Sichuan**: Spring outings combine with local cuisine traditions. The festival may overlap with the beginning of tea season. Outdoor activities are popular as weather improves.

**Yunnan**: Multiple ethnic groups have their own spring festivals around this time. The Bai people's festival customs may overlap with Shangsi.`,
      },
      modernEvolution: `**Decline and Resurgence**:
- Shangsi declined significantly after the Tang Dynasty
- The festival was largely absorbed by Qingming Festival by the Ming and Qing periods
- Some customs survived in regional variations
- Recently, there has been cultural revival interest

**Modern Analogues**:
- International Women's Day (March 8th) has been influenced by Shangsi traditions
- Some Chinese communities have attempted to revive Shangsi celebrations
- Spring outings and picnics on the third day of the third lunar month are promoted

**Cultural Significance**:
- Shangsi is considered an ancestor of modern spring festivals
- Some scholars advocate for reviving the festival
- Cultural heritage organizations have organized Shangsi events
- The romantic traditions have influenced Qixi Festival

**Literary Heritage**:
- Many famous poems reference Shangsi Festival
- The festival appears in classical Chinese literature
- Tang Dynasty poems about Shangsi are still studied today
- The festival's cultural significance is recognized academically`,
      misconceptions: [
        {
          myth: "Shangsi Festival no longer exists",
          reality:
            "While Shangsi is no longer officially celebrated as a major holiday, its traditions have been absorbed into other festivals. Qingming Festival inherited some spring outing customs, and Qixi inherited romantic elements. Recently, there have been cultural revival movements to restore Shangsi celebrations.",
        },
        {
          myth: "Shangsi was always a romantic festival",
          reality:
            "Shangsi originally focused on purification and bathing. The romantic aspects developed later during the Han and Tang dynasties. Initially, it was more about washing away illness and misfortune than romance.",
        },
        {
          myth: "Shangsi and Qixi are the same festival",
          reality:
            "While both have romantic elements, they are distinct festivals. Shangsi falls on the third day of the third lunar month (spring), while Qixi falls on the seventh day of the seventh lunar month (autumn). Qixi developed from a different tradition and became more focused on the Cowherd and Weaver Girl legend.",
        },
        {
          myth: "Bathing in rivers on Shangsi is always safe",
          reality:
            "Ancient bathing rituals were performed in specific, often ritualistically prepared waters. Modern attempts at revival should consider water safety and appropriate locations. The ritual meaning was more important than the actual bathing.",
        },
        {
          myth: "Shangsi is only for young women",
          reality:
            "Shangsi was traditionally celebrated by all members of society. While young women had specific activities like flower appreciation, men participated in hunting, military exercises, and court ceremonies. The festival was inclusive.",
        },
      ],
    },
    expressions: [
      {
        chinese: "上巳节安康",
        pinyin: "Shàng sì jié ān kāng",
        english: "Peaceful Shangsi Festival",
        scenario: "General greeting",
      },
      {
        chinese: "踏青去",
        pinyin: "Tà qīng qù",
        english: "Going for a spring outing",
        scenario: "Planning outdoor activities",
      },
      {
        chinese: "春游愉快",
        pinyin: "Chūn yóu yú kuài",
        english: "Have a pleasant spring outing",
        scenario: "Wishing someone a good spring trip",
      },
    ],
    foods: [
      {
        name: "Chrysanthemum Greens",
        emoji: "🥬",
        meaning: "Purification and health",
        description: "Wild greens picked for spring festivals",
      },
      {
        name: "Spring Tea",
        emoji: "🍵",
        meaning: "New beginnings",
        description: "First tea of the spring season",
      },
      {
        name: "Peach Blossom Cake",
        emoji: "🌸",
        meaning: "Romance and beauty",
        description: "Flower-shaped desserts for the festival",
      },
    ],
    gifts: [
      {
        name: "Kite",
        emoji: "🪁",
        suitability: "Children/Families",
        note: "For flying on spring outings",
      },
      {
        name: "Spring Tea Set",
        emoji: "🍵",
        suitability: "Friends/Family",
        note: "Premium tea for spring",
      },
      {
        name: "Dogwood Decorations",
        emoji: "🌿",
        suitability: "Everyone",
        note: "Traditional protective charms",
      },
    ],
    tools: [
      {
        name: "Spring Outing Planner",
        description: "Best spots for spring activities",
        badge: "New",
      },
      {
        name: "Kite Flying Guide",
        description: "Tips and techniques for kite flying",
      },
      {
        name: "Chrysanthemum Recipe Collection",
        description: "Traditional Shangsi foods",
      },
    ],
  },
  new_years_eve: {
    basicInfo: {
      name: "New Year's Eve",
      emoji: "🎊",
      date: "January/February",
      lunarDate: "Last day of 12th lunar month",
      description: "The most important family reunion night of the year",
      history:
        "New Year's Eve (除夕) is the climax of Spring Festival celebrations. Families gather for reunion dinners, stay up late to welcome the new year, and perform rituals to send off the old year and welcome good fortune.",
      customs: [
        "Reunion dinner with family",
        "Staying up late (守岁)",
        "Posting spring couplets",
        "Setting off fireworks at midnight",
        "Giving early New Year greetings",
        "Eating fish for surplus",
        "Cleaning the house thoroughly",
      ],
      taboo: [
        "Don't cry or argue on New Year's Eve",
        "Don't break things",
        "Don't use negative words",
        "Don't clean or sweep (to avoid sweeping away luck)",
        "Don't wake sleeping people",
      ],
      // Deep content extensions
      historyStory: `New Year's Eve (除夕), known as Chuxi in Chinese, is the most important evening of the lunar year. The name means "removing the evening" or "passing the evening," symbolizing the transition from the old year to the new.

The traditions of New Year's Eve are deeply rooted in ancient Chinese cosmology and mythology. According to legend, a fierce monster named Nian (年) would emerge on the last day of the year to devour villagers. The monster was frightened by loud noises and the color red, so people developed customs of setting off firecrackers, decorating with red items, and staying awake through the night to protect themselves.

The reunion dinner (年夜饭) is the most important meal of the year. Every dish has symbolic meaning: whole fish represents surplus (余), dumplings shaped like ancient gold ingots symbolize wealth, and noodles represent longevity. Families go to great lengths to ensure all family members are present, as an empty seat is considered bad luck.

Staying up late on New Year's Eve (守岁) is another crucial tradition. The practice originated from the belief that parents should stay awake to protect their children from the Nian monster. Over time, it evolved into a way of spending the last moments of the year with family, talking, playing games, and watching the Spring Festival Gala together.

At midnight, as the new year arrives, fireworks are set off to scare away evil spirits and celebrate the arrival of the new year. Families exchange New Year greetings, and children receive red envelopes from elders.`,
      regionalVariations: {
        north: `**Beijing**: The reunion dinner features jiaozi (dumplings) as the essential dish. Families gather early to make dumplings together. The Summer Palace and other historic sites may have special New Year's Eve events.

**Northern China**: Jiaozi with various fillings are central to the meal. Some families eat noodles after midnight for longevity. Winter activities and indoor family games are popular.`,
        south: `**Southern China (Canton)**: A whole fish is mandatory at the reunion dinner. Other dishes include roasted duck, abalone, and various delicacies. Some families eat tangyuan (sweet rice balls) after midnight.

**Hong Kong and Guangdong**: The reunion dinner is elaborate and expensive. TVB's New Year's Eve variety show is a tradition. Families may visit temples for the first prayer of the new year.`,
        east: `**Shanghai**: The reunion dinner features a mix of local and imported delicacies. Nian Gao (sticky rice cake) is common. Families gather to watch the Spring Festival Gala and welcome the new year together.

**Jiangsu and Zhejiang**: Regional specialties are featured in reunion dinners. Some families eat vegetarian meals as a religious practice. The atmosphere combines solemnity and celebration.`,
        west: `**Sichuan**: Hot pot reunion dinners are popular in modern times. Traditional dishes include fish with spicy sauce. Fireworks displays are elaborate, especially in rural areas.

**Yunnan**: Multiple ethnic groups have their own New Year's Eve traditions. Family gatherings are universal, but specific foods vary by ethnicity.`,
      },
      modernEvolution: `**Technology Transformation**:
- Spring Festival Gala has become an essential tradition since 1983
- WeChat red envelopes have replaced some physical red envelopes
- Video calls allow distant family members to join dinners
- Online shopping has changed food preparation

**Changing Traditions**:
- Many families now eat reunion dinners at restaurants
- Some young people travel abroad for the holiday
- Digital firecrackers and virtual celebrations have emerged
- The Spring Festival Gala is watched by over 700 million people

**Generational Shifts**:
- Young people increasingly prefer "reverse reunion" (parents visiting them)
- Some families split celebrations between in-laws
- Going to the movies on New Year's Eve has become popular
- "Staycations" in hotels are chosen by some urban families

**Commercial Impact**:
- New Year's Eve is one of the busiest restaurant booking days
- Tourism during the period has increased significantly
- Online platforms offer reunion dinner delivery services
- The entertainment industry sees major revenue during the period`,
      misconceptions: [
        {
          myth: "New Year's Eve is just like December 31st",
          reality:
            "While both mark the end of a year, Chinese New Year's Eve is fundamentally different. It's not about parties and counting down but about family reunion. The festival is part of a 15-day celebration period, not a single evening. The focus is on traditions, ancestors, and collective family activities.",
        },
        {
          myth: "You must eat jiaozi on New Year's Eve",
          reality:
            "While jiaozi are traditional in northern China, southern families typically eat other dishes. Whole fish is essential in southern regions. Some families eat noodles, tangyuan, or regional specialties. The key is the reunion dinner, not a specific dish.",
        },
        {
          myth: "Staying up late is optional",
          reality:
            'Staying up late (守岁) is considered important but not absolutely mandatory. The practice symbolizes resisting the urge to sleep so that parents can "protect" their children from misfortune. However, many families, especially with young children, do go to bed at their normal time.',
        },
        {
          myth: "Fireworks are essential for celebrating",
          reality:
            "While traditional, fireworks are now banned or restricted in most major Chinese cities due to pollution and safety concerns. Many families substitute with virtual firecrackers on phones, decoration lights, or simply focus on other traditions like watching the gala or visiting temples.",
        },
        {
          myth: "New Year's Eve celebrations are the same everywhere",
          reality:
            "Regional variations are significant. Northern and southern China have different traditional foods. Some regions have unique customs like eating vegetarian meals or visiting temples at midnight. Ethnic minorities have their own distinct traditions.",
        },
      ],
    },
    expressions: [
      {
        chinese: "除夕快乐",
        pinyin: "Chú xì kuài lè",
        english: "Happy New Year's Eve",
        scenario: "General greeting",
      },
      {
        chinese: "年夜饭",
        pinyin: "Nián yè fàn",
        english: "Reunion dinner",
        scenario: "Talking about the special meal",
      },
      {
        chinese: "守岁",
        pinyin: "Shǒu suì",
        english: "Staying up for the new year",
        scenario: "Describing the tradition of staying awake",
      },
      {
        chinese: "新年好",
        pinyin: "Xīn nián hǎo",
        english: "Happy New Year",
        scenario: "New Year greeting",
      },
    ],
    foods: [
      {
        name: "Fish",
        emoji: "🐟",
        meaning: "Surplus and prosperity",
        description: "Whole fish served at reunion dinner",
        howToOrder: "Qǐng gěi wǒ yì tiáo hóng shāo yú",
      },
      {
        name: "Jiaozi",
        emoji: "🥟",
        meaning: "Wealth and treasure",
        description: "Dumplings shaped like ancient gold ingots",
        howToOrder: "Wǒ yào jiǎo zi",
      },
      {
        name: "Niangao",
        emoji: "🍚",
        meaning: "Yearly progress",
        description: "Sticky rice cake for advancement",
      },
      {
        name: "Noodles",
        emoji: "🍜",
        meaning: "Longevity",
        description: "Uncut noodles for long life",
      },
    ],
    gifts: [
      {
        name: "Red Envelope",
        emoji: "🧧",
        suitability: "Children",
        note: "Money in red paper for good luck",
      },
      {
        name: "Food Gifts",
        emoji: "🎁",
        suitability: "Family visits",
        note: "Quality food items for reunion dinner",
      },
      {
        name: "New Year Decorations",
        emoji: "🏮",
        suitability: "Homes",
        note: "Couplets and decorative items",
      },
    ],
    tools: [
      {
        name: "Reunion Dinner Menu",
        description: "Design your perfect New Year's Eve feast",
        badge: "Essential",
      },
      {
        name: "Red Envelope Guide",
        description: "Amounts and etiquette for giving",
        badge: "New",
      },
      {
        name: "New Year Greetings",
        description: "Blessings for every occasion",
      },
      {
        name: "Taboo Guide",
        description: "What to avoid during Spring Festival",
      },
    ],
  },
  cold_food: {
    basicInfo: {
      name: "Cold Food Festival",
      emoji: "🥗",
      date: "April 3-5",
      lunarDate: "105th day after winter solstice (approx.清明前一天)",
      description: "Ancient festival of cold food and remembrance",
      history:
        "Cold Food Festival (寒食节) has a history of over 2,600 years. It commemorates Jie Zitui, a loyal retainer who died in a fire. The festival involves eating cold food and honoring ancestors.",
      customs: [
        "Eating cold food only",
        "Visiting ancestral graves",
        "Flying kites",
        "Making and eating qingtuan",
        "Spring outings",
        "Bonfire offerings",
      ],
      taboo: [
        "No fires or cooking",
        "Don't eat hot food",
        "Don't make noise near graves",
        "Avoid red clothing at gravesites",
      ],
      // Deep content extensions
      historyStory: `The Cold Food Festival (寒食节) has a history dating back over 2,600 years to the Spring and Autumn Period. The most famous origin story involves Jie Zitui (介子推), a loyal retainer of Duke Wen of Jin (晋文公).

Jie Zitui was a devoted follower who, during a period of political turmoil, saved the duke's life by cutting flesh from his own thigh to make soup. When the duke eventually came to power, he rewarded those who had helped him but overlooked Jie. Jie retired to a forest with his mother, content to live in obscurity.

When the duke finally remembered Jie and tried to reward him, Jie refused to leave the forest. In desperation, the duke ordered the forest to be set on fire to force Jie out, hoping he would flee to safety. Instead, Jie and his mother died in the fire, embracing death rather than leaving their simple life.

Grieved by this tragedy, the duke ordered that no fires could be lit on the anniversary of Jie's death. People could only eat cold food, hence the name "Cold Food Festival." Over time, this festival merged with Qingming Festival, and most cold food customs have been absorbed into Qingming.

Originally, Cold Food Festival was celebrated for one to three days, with strict prohibition on using fire. Families would prepare cold dishes the day before and eat only cold food on the festival day.`,
      regionalVariations: {
        north: `**Northern China**: In ancient times, the whole village would participate in Cold Food rituals. Families would gather for cold meals and visit ancestral graves together. Modern celebrations emphasize the connection to Qingming.

**Beijing and Hebei**: Some traditional families still observe cold food traditions. Kite flying is particularly popular during this period.`,
        south: `**Southern China**: The festival is less prominently observed as a separate event, having merged with Qingming. However, some regions maintain cold food customs in ancestral worship.

**Fujian and Guangdong**: Ancestor worship ceremonies may include cold food offerings. The festival has influenced local tomb-sweeping customs.`,
        east: `**Shandong and Jiangsu**: Traditional communities may observe cold food customs. The festival is a time for family gatherings and spring activities. Historical reenactments are held in some cultural sites.

**Shanghai**: Modern families typically combine Cold Food with Qingming activities. The distinction between the two festivals has largely disappeared.`,
        west: `**Shaanxi and Shanxi**: These regions, close to the origin story of Jie Zitui, maintain stronger Cold Food traditions. Some rural areas still observe the no-fire custom.

**Sichuan**: Cold food customs blend with local Qingming traditions. The festival is a time for spring outings and family gatherings.`,
      },
      modernEvolution: `**Merger with Qingming**:
- Cold Food Festival has largely merged with Qingming Festival
- Most people no longer observe the cold food tradition
- The historical significance is remembered through cultural education
- Some communities attempt to revive Cold Food traditions

**Cultural Revival**:
- Some cultural organizations promote Cold Food as a separate festival
- Historical reenactments of the Jie Zitui story are performed
- The festival has educational value about ancient Chinese customs
- Academic interest in the festival's origins has increased

**Customs Today**:
- Tomb sweeping and ancestor worship remain important
- Kite flying is a popular modern activity
- Some families eat cold food as a conscious cultural choice
- The festival is recognized in cultural heritage databases`,
      misconceptions: [
        {
          myth: "Cold Food Festival no longer exists",
          reality:
            "While Cold Food Festival has merged with Qingming in most of China, it still exists as a cultural concept. Some regions and cultural organizations actively maintain the traditions. The customs of ancestor worship and spring activities continue, even if the cold food aspect has declined.",
        },
        {
          myth: "Cold Food Festival is the same as Qingming",
          reality:
            "Originally, they were separate festivals. Cold Food commemorated Jie Zitui with cold food and ancestor worship. Qingming was a solar term for spring cultivation that evolved into tomb sweeping. Over time, they merged, with Qingming becoming dominant and Cold Food customs being absorbed.",
        },
        {
          myth: "You must eat completely cold food on Cold Food Festival",
          reality:
            "In ancient times, this was strictly observed. Today, very few people maintain this practice. Modern observances may include cold dishes or simply acknowledge the historical tradition without actual cold food consumption.",
        },
        {
          myth: "Cold Food Festival is only about sad remembrance",
          reality:
            "While honoring Jie Zitui is the origin, the festival also celebrates spring, family gatherings, and outdoor activities. Kite flying and spring outings are important aspects that balance the solemnity of remembrance.",
        },
        {
          myth: "Cold Food Festival is only a northern Chinese tradition",
          reality:
            "The festival originated in northern China (Shanxi area), but it was historically celebrated throughout China. Regional variations existed everywhere, and the cultural significance was recognized nationally.",
        },
      ],
    },
    expressions: [
      {
        chinese: "寒食节安康",
        pinyin: "Hán shí jié ān kāng",
        english: "Peaceful Cold Food Festival",
        scenario: "General greeting",
      },
      {
        chinese: "清明时节雨纷纷",
        pinyin: "Qīng míng shí jié yǔ fēn fēn",
        english: "During Qingming, rain falls softly",
        scenario: "Poetic reference to spring festivals",
      },
      {
        chinese: "祭祖扫墓",
        pinyin: "Jì zǔ sǎo mù",
        english: "Honoring ancestors and cleaning graves",
        scenario: "Describing festival activities",
      },
    ],
    foods: [
      {
        name: "Cold Dishes",
        emoji: "🥗",
        meaning: "Remembrance and tradition",
        description: "Various cold dishes eaten as per tradition",
      },
      {
        name: "Qingtuan",
        emoji: "🟢",
        meaning: "Spring renewal",
        description: "Green rice balls made with mugwort",
      },
      {
        name: "Cold Noodles",
        emoji: "🍜",
        meaning: "Simplicity",
        description: "Noodles served cold, traditional for the occasion",
      },
    ],
    gifts: [
      {
        name: "Fresh Flowers",
        emoji: "💐",
        suitability: "Ancestor offerings",
        note: "Yellow chrysantheums traditional for graves",
      },
      {
        name: "Kite",
        emoji: "🪁",
        suitability: "Children/Families",
        note: "For flying during spring outings",
      },
      {
        name: "Cold Food Set",
        emoji: "🥗",
        suitability: "Families",
        note: "Ingredients for cold dishes",
      },
    ],
    tools: [
      {
        name: "Cold Food Guide",
        description: "History and traditions of the festival",
        badge: "New",
      },
      {
        name: "Qingtuan Recipe",
        description: "Traditional green rice ball recipe",
      },
      {
        name: "Kite Flying Guide",
        description: "Tips for spring kite flying",
      },
    ],
  },
  ghost: {
    basicInfo: {
      name: "Ghost Festival",
      emoji: "👻",
      date: "August/September",
      lunarDate: "15th day of 7th lunar month",
      description: "Festival when spirits roam the mortal world",
      history:
        "Ghost Festival (中元节) has been celebrated for over 1,500 years. It's believed that the gates of the underworld open on this day, allowing spirits to visit the living world.",
      customs: [
        "Burning joss paper and incense",
        "Offering food to ancestors",
        "Releasing river lanterns",
        "Preparing ancestor altars",
        "Avoiding swimming or going out at night",
        " Feeding hungry ghosts",
      ],
      taboo: [
        "Don't swim in rivers or lakes",
        "Don't walk alone at night",
        "Don't hang clothes outside at night",
        "Don't tap on someone's shoulder",
        "Don't step on or kick offerings",
      ],
      // Deep content extensions
      historyStory: `The Ghost Festival (中元节), also known as Zhongyuan Festival, is one of the most important traditional Chinese festivals dedicated to honoring ancestors and appeasing spirits. The festival falls on the 15th day of the seventh lunar month, when道教 (Taoist) and Buddhist traditions believe the gates of the underworld open.

The festival has multiple religious origins. In Taoism, the Jade Emperor divides the underworld into three realms, and the 15th day of the seventh month is when all three realms are open simultaneously. In Buddhism, the festival relates to the story of Mulian (目连), a devoted son who descended into hell to rescue his mother from starvation.

According to Buddhist legend, Mulian's mother had been greedy in her lifetime and was punished by being reborn in a hungry ghost realm, unable to eat. Through Buddhist practice, Mulian gained the power to see his mother and attempted to feed her, but the food turned to fire in her mouth due to her past karma. Buddha instructed Mulian to make offerings to all hungry ghosts on the 15th day of the seventh month, which would save not only his mother but all suffering spirits.

The festival also relates to ancient Chinese ancestor worship traditions. Families prepare offerings to ensure ancestors are well-fed in the afterlife and to prevent them from becoming hungry ghosts who might trouble the living.`,
      regionalVariations: {
        north: `**Northern China**: Burning joss paper and offerings at ancestral graves is common. Families prepare food offerings at home altars. Temple ceremonies may be held for community-wide appeasement.

**Beijing**: The festival is observed with traditional rituals at temples and ancestral sites. Some communities hold lantern releases at lakes.`,
        south: `**Southern China (Guangdong, Hong Kong)**: The Ghost Festival is one of the most important traditional occasions. Elaborate offerings include roast pigs, ducks, and fruits. Burning paper money and offerings is widespread.

**Hong Kong**: Taoist and Buddhist ceremonies are held. The Che Kung Festival overlaps with Ghost Festival traditions. Some communities release lanterns on water.

**Fujian and Taiwan**: The festival is celebrated with temple fairs and offerings. The "Zhongyuan" water lantern festival is famous in some coastal areas.`,
        east: `**Shanghai and Jiangsu**: Families prepare ancestor offerings and burn joss paper. Some communities hold ceremonies at temples. The festival overlaps with the Hungry Ghost month observances.

**Zhejiang**: Coastal communities may release river lanterns. Traditional foods are prepared for ancestors. Temple ceremonies are common.`,
        west: `**Sichuan**: The festival is observed with ancestor offerings and paper burning. Some rural areas maintain elaborate ritual traditions. The month-long ghost month has various customs.

**Yunnan**: Multiple ethnic groups have their own ghost-related traditions. The festival may overlap with local harvest celebrations.`,
      },
      modernEvolution: `**Commercialization**:
- Pre-made joss paper offerings are sold in abundance
- Funeral and ritual supply businesses see peak sales
- Restaurants offer special "ghost festival" meals
- Paper houses and luxury items for burning have become elaborate

**Technology Integration**:
- Online memorial platforms allow virtual offerings
- Virtual burning of paper offerings through apps
- Live-streamed ancestor ceremonies for distant family members
- Social media discussions about ghost month superstitions

**Changing Attitudes**:
- Younger generations are less likely to observe traditional rituals
- Urban residents may simplify or skip observances
- Some view the festival as cultural heritage rather than religious practice
- Others embrace it as a time for family remembrance

**Environmental Concerns**:
- Burning paper offerings causes pollution concerns
- Some cities have restricted burning practices
- Eco-friendly alternatives are being promoted
- River lantern releases have been banned in some areas due to pollution`,
      misconceptions: [
        {
          myth: "Ghost Festival is a scary or evil festival",
          reality:
            "While ghosts have a fearsome reputation, Ghost Festival is fundamentally about honoring ancestors and showing filial piety. The rituals are meant to appease spirits and ensure they rest peacefully. It's a time of remembrance and family connection, not fear.",
        },
        {
          myth: "All ghosts are dangerous and should be feared",
          reality:
            "Chinese ghost beliefs distinguish between ancestor spirits (which are honored) and wandering hungry ghosts (which need appeasement). The festival specifically aims to feed and appease hungry ghosts to prevent them from troubling the living. Not all ghosts are malevolent.",
        },
        {
          myth: "You must avoid everything during Ghost Festival",
          reality:
            "While some taboos exist, normal life continues during Ghost Festival. Most people work, travel, and go about their daily activities. The taboos are specific practices to avoid, not complete withdrawal from life. Many people observe the festival traditions while maintaining normal routines.",
        },
        {
          myth: "Ghost Festival is only for Taoists",
          reality:
            "The festival has Buddhist, Taoist, and folk religion elements. People of all backgrounds may participate, often mixing traditions. Many Chinese people observe the customs without formal religious affiliation, viewing them as cultural traditions.",
        },
        {
          myth: "The Ghost Festival is always on August 15th",
          reality:
            "Ghost Festival falls on the 15th day of the seventh lunar month, which varies between August and September in the Gregorian calendar. In 2024, it falls on August 18th. Always check the lunar calendar for the exact date.",
        },
      ],
    },
    expressions: [
      {
        chinese: "中元节安康",
        pinyin: "Zhōng yuán jié ān kāng",
        english: "Peaceful Ghost Festival",
        scenario: "General greeting",
      },
      {
        chinese: "七月十五",
        pinyin: "Qī yuè shí wǔ",
        english: "Fifteenth day of the seventh month",
        scenario: "Referring to the festival date",
      },
      {
        chinese: "祭祖",
        pinyin: "Jì zǔ",
        english: "Honoring ancestors",
        scenario: "Describing festival activities",
      },
    ],
    foods: [
      {
        name: "Ancestor Offerings",
        emoji: "🍖",
        meaning: "Feeding ancestors",
        description: "Meat, fish, and dishes offered to spirits",
      },
      {
        name: "Fresh Fruits",
        emoji: "🍎",
        meaning: "Freshness and abundance",
        description: "Seasonal fruits for offerings",
      },
      {
        name: "Rice",
        emoji: "🍚",
        meaning: "Sustenance for spirits",
        description: "Staple food for ancestor offerings",
      },
    ],
    gifts: [
      {
        name: "Joss Paper",
        emoji: "📜",
        suitability: "Ritual use",
        note: "Paper money for burning",
      },
      {
        name: "Incense",
        emoji: "香",
        suitability: "Ritual use",
        note: "For ancestor offerings",
      },
      {
        name: "Food Offerings",
        emoji: "🍖",
        suitability: "Ancestor worship",
        note: "Traditional foods for spirits",
      },
    ],
    tools: [
      {
        name: "Ghost Festival Guide",
        description: "History and traditions of the festival",
        badge: "New",
      },
      {
        name: "Offering Etiquette",
        description: "How to properly honor ancestors",
      },
      {
        name: "Taboo Guide",
        description: "What to avoid during Ghost Festival",
      },
    ],
  },
  renri: {
    basicInfo: {
      name: "Human Day",
      emoji: "👤",
      date: "January/February",
      lunarDate: "7th day of 1st lunar month",
      description: "Festival celebrating human life and all beings",
      history:
        "Human Day (人日), also known as Renri, celebrates the creation of humans according to Chinese mythology. It's considered the birthday of all humanity.",
      customs: [
        "Eating seven-vegetable porridge (七菜粥)",
        "Eating noodles for longevity",
        "Human-shaped foods",
        "Wishing for good fortune",
        "Honoring all living beings",
        "Writing poetry",
      ],
      taboo: [
        "Don't fight or argue",
        "Don't hurt living things",
        "Don't criticize others",
        "Don't destroy nature",
      ],
      // Deep content extensions
      historyStory: `Human Day (人日), known as Renri (人日) in Chinese, is a traditional festival celebrated on the seventh day of the first lunar month. According to Chinese mythology, this is the day when the goddess Nüwa (女娲) created human beings.

The legend says that on the first day of the first lunar month, Nüwa created chickens. On the second day, she created dogs. On the third day, she created pigs. This pattern continued: fourth day created sheep, fifth day created horses, sixth day created donkeys, and on the seventh day, she created human beings.

Because humans were created last, they are considered the most intelligent and capable of all creatures. The seventh day became known as "Renri" or "Human Day," celebrating the birthday of all humanity.

Another interpretation connects Human Day to the stars. In Chinese astronomy, the planet Venus is associated with the seventh day. The morning star's appearance on this day was seen as auspicious for human endeavors. Ancient people would observe the stars and make wishes on Renri.

The festival also has connections to the "seven emotions" (七情) and "seven virtues" (七德) of human nature. The number seven is considered lucky and associated with human characteristics.`,
      regionalVariations: {
        north: `**Northern China**: Eating seven-vegetable porridge is traditional. Some families make human-shaped foods or eat noodles. The day is considered auspicious for new beginnings.

**Beijing**: Traditional customs include eating seven vegetables and noodles. Families gather for special meals. The festival is a time for making wishes for the year.`,
        south: `**Southern China**: The festival is celebrated with special foods and family gatherings. Seven-vegetable porridge is eaten in some regions. Noodles for longevity are common.

**Guangdong and Hong Kong**: The festival is known as "Yen Yat" (人日). Families eat noodles and special foods. The day is considered auspicious for starting new projects.

**Fujian**: Traditional customs include eating seven vegetables and making wishes. The festival is connected to spring activities and new beginnings.`,
        east: `**Shanghai and Jiangsu**: Eating seven-vegetable porridge is traditional. Families gather for special meals. The day is seen as a time for renewal and hope.

**Zhejiang**: Special foods are prepared for Human Day. Some regions maintain traditions of human-shaped foods. Poetry writing is associated with the festival.`,
        west: `**Sichuan**: The festival is celebrated with traditional foods. Seven-vegetable porridge may be eaten. Family gatherings are common.

**Other regions**: Various local customs exist for honoring Human Day. The specific traditions vary by community.`,
      },
      modernEvolution: `**Reduced Recognition**:
- Human Day is one of the less recognized traditional festivals
- Many young people are unaware of the tradition
- The festival has largely been overshadowed by Spring Festival
- Some cultural organizations promote awareness

**Cultural Awareness**:
- Some educators use Human Day to discuss human creation myths
- The festival appears in historical and cultural studies
- Literary circles may organize poetry events
- Social media has helped spread awareness of the tradition

**Food Traditions**:
- Seven-vegetable porridge is the most recognized custom
- Some restaurants offer special Human Day meals
- Noodles remain popular as a longevity symbol
- Human-shaped foods are rarely made today

**Symbolic Meaning**:
- The festival celebrates human life and potential
- It's a time for reflecting on human values
- Some view it as a day for environmental consciousness
- The "don't hurt living things" taboo has been interpreted as animal welfare`,
      misconceptions: [
        {
          myth: "Human Day is not important",
          reality:
            "While Human Day is less prominent than Spring Festival, it has significant cultural value. It celebrates the creation of humanity and is associated with hopes for the year. The festival reflects ancient Chinese cosmology and mythology.",
        },
        {
          myth: "Human Day is only about eating",
          reality:
            "While food customs are important, Human Day has deeper significance. It's a day for reflecting on human nature, making wishes, and honoring all living beings. Poetry writing and philosophical contemplation are associated traditions.",
        },
        {
          myth: "Human Day must be celebrated on January 7th",
          reality:
            "Human Day falls on the seventh day of the first lunar month, not January 7th. The lunar date is what matters. In 2024, it falls on February 16th. Always check the lunar calendar.",
        },
        {
          myth: "Human Day is only for certain people",
          reality:
            "According to tradition, Human Day celebrates all humans. It's considered the birthday of everyone, regardless of when they were actually born. The festival has universal significance.",
        },
        {
          myth: "Human Day is no longer relevant",
          reality:
            "While the festival has declined in modern times, it still has cultural and educational value. Some people use the day to reflect on human nature, environmental consciousness, and the relationship between humans and nature.",
        },
      ],
    },
    expressions: [
      {
        chinese: "人日快乐",
        pinyin: "Rén rì kuài lè",
        english: "Happy Human Day",
        scenario: "General greeting",
      },
      {
        chinese: "七菜粥",
        pinyin: "Qī cài zhōu",
        english: "Seven-vegetable porridge",
        scenario: "Talking about traditional food",
      },
      {
        chinese: "长寿面",
        pinyin: "Cháng shòu miàn",
        english: "Longevity noodles",
        scenario: "Wishing for long life",
      },
    ],
    foods: [
      {
        name: "Seven-Vegetable Porridge",
        emoji: "🥣",
        meaning: "Variety and abundance",
        description: "Porridge with seven different vegetables",
      },
      {
        name: "Longevity Noodles",
        emoji: "🍜",
        meaning: "Long life",
        description: "Uneven long noodles for longevity",
      },
      {
        name: "Human-Shaped Foods",
        emoji: "🥟",
        meaning: "Human creation",
        description: "Foods shaped like humans for the festival",
      },
    ],
    gifts: [
      {
        name: "Vegetable Set",
        emoji: "🥬",
        suitability: "Families",
        note: "Seven vegetables for porridge",
      },
      {
        name: "Noodles",
        emoji: "🍜",
        suitability: "Everyone",
        note: "Long noodles for longevity",
      },
      {
        name: "Books",
        emoji: "📚",
        suitability: "Students/Children",
        note: "For learning and growth",
      },
    ],
    tools: [
      {
        name: "Human Day Guide",
        description: "History and traditions of the festival",
        badge: "New",
      },
      {
        name: "Seven-Vegetable Porridge Recipe",
        description: "Traditional recipe for the occasion",
      },
      {
        name: "Poetry Templates",
        description: "Traditional Human Day poems",
      },
    ],
  },
  wealth_god: {
    basicInfo: {
      name: "God of Wealth Festival",
      emoji: "💰",
      date: "January/February",
      lunarDate: "5th day of 1st lunar month",
      description: "Festival honoring the Wealth God for prosperity",
      history:
        "God of Wealth Festival (财神节) celebrates the deity who brings wealth and prosperity. Businesses and families honor the Wealth God for good fortune in the coming year.",
      customs: [
        "Offering incense to Wealth God",
        "Burning joss paper",
        "Eating dumplings",
        "Opening businesses for the day",
        "Red decorations and decorations",
        "Praying for wealth and prosperity",
      ],
      taboo: [
        "Don't be stingy with offerings",
        "Don't argue about money",
        "Don't refuse visitors",
        "Don't leave the Wealth God waiting",
      ],
      // Deep content extensions
      historyStory: `The God of Wealth Festival (财神节) is celebrated on the fifth day of the first lunar month, the birthday of the Wealth God (财神). This festival is particularly important for businesses and families hoping for prosperity in the new year.

There are several Wealth Gods in Chinese mythology. The most commonly worshipped is Zhao Gongming (赵公明), a Taoist deity who serves as the General of Wealth. According to legend, Zhao Gongming was a mortal general during the Yuan Dynasty who became a powerful deity after his death. He is often depicted riding a black tiger, holding a golden staff, and wearing armor.

Another important Wealth God is Bi Gan (比干), a loyal minister from the Shang Dynasty who was martyred for his honesty. Because of his pure heart and honesty, he was deified as a Wealth God. Offerings to Bi Gan emphasize honest business practices.

A third Wealth God is Fan Li (范蠡), a famous businessman from the Spring and Autumn Period who became the Taoist deity of wealth. Fan Li was known for his business acumen and generosity, and is worshipped by merchants as the patron of commerce.

The fifth day of the first lunar month is considered especially auspicious because it marks the beginning of the "wealth period" in the lunar calendar. Businesses often choose this day to reopen after the New Year holidays, believing it sets the tone for the year's prosperity.`,
      regionalVariations: {
        north: `**Northern China**: Businesses often reopen on this day with elaborate ceremonies. Offerings include meat, fruits, and joss paper. Red decorations are prominent.

**Beijing**: Temple fairs may feature Wealth God celebrations. Businesses offer special prayers. The day is important for commercial activities.`,
        south: `**Southern China**: The festival is particularly important for businesses. Elaborate offerings are made at temples and business premises. Firecrackers and decorations are common.

**Guangdong and Hong Kong**: Businesses reopen with ceremonies. Wealth God temples see increased attendance. The day is considered crucial for the year's business success.

**Fujian and Taiwan**: The festival is celebrated with temple ceremonies. Businesses make elaborate offerings. Cultural performances may accompany celebrations.`,
        east: `**Shanghai and Jiangsu**: Businesses reopen and offer prayers. Wealth God decorations are prominent. The day is important for commercial and personal prosperity.

**Zhejiang**: Business communities celebrate with ceremonies. Temple visits are common. The festival has strong connections to local commerce.`,
        west: `**Sichuan**: Businesses celebrate with offerings and ceremonies. The day marks the end of the New Year holiday period for many. Traditional customs are observed.

**Other regions**: Various local traditions exist for honoring the Wealth God. The celebration often coincides with business reopenings.`,
      },
      modernEvolution: `**Business Focus**:
- The festival has become increasingly commercial
- Businesses use it as a PR opportunity
- Banks and financial institutions may hold special events
- The day is often used for business planning

**Religious Practices**:
- Temple attendance increases on this day
- Some people make elaborate offerings at home
- Businesses may hire ritual specialists for ceremonies
- The religious aspects remain important to many

**Cultural Events**:
- Some cities organize wealth-related cultural events
- Art exhibitions and performances may be held
- The festival appears in cultural heritage celebrations
- Social media campaigns promote wealth-related content

**Changing Attitudes**:
- Younger generations may observe less formally
- Some view it as a cultural tradition rather than religious practice
- The business aspects are emphasized in urban areas
- Environmental concerns have affected some practices`,
      misconceptions: [
        {
          myth: "Wealth God Festival is only for businesses",
          reality:
            "While businesses place particular importance on the festival, families also participate. Many households make offerings to the Wealth God for household prosperity. The festival has both commercial and domestic dimensions.",
        },
        {
          myth: "Worshipping the Wealth God guarantees wealth",
          reality:
            "The festival is about showing respect and making wishes, not guaranteeing results. Traditional teachings emphasize that virtue and hard work are more important than worship. The rituals are expressions of hope, not magical solutions.",
        },
        {
          myth: "You must be wealthy to celebrate",
          reality:
            "The festival is for everyone, regardless of their current wealth status. People of all economic backgrounds participate, making wishes for improvement. The celebration is about hope and aspiration, not existing wealth.",
        },
        {
          myth: "Wealth God Festival is materialistic",
          reality:
            "While the festival involves wishes for prosperity, it also emphasizes honest business practices (especially for the Bi Gan tradition) and generosity. Some Wealth Gods are specifically associated with moral virtues, not just material wealth.",
        },
        {
          myth: "The festival must be on February 5th",
          reality:
            "Wealth God Festival falls on the fifth day of the first lunar month, which varies between late January and mid-February in the Gregorian calendar. The lunar date is what matters, not the Gregorian equivalent.",
        },
      ],
    },
    expressions: [
      {
        chinese: "财源滚滚",
        pinyin: "Cái yuán gǔn gǔn",
        english: "May wealth roll in",
        scenario: "Wealth blessing",
      },
      {
        chinese: "招财进宝",
        pinyin: "Zhāo cái jìn bǎo",
        english: "May wealth and treasures come",
        scenario: "Prosperity wish",
      },
      {
        chinese: "恭喜发财",
        pinyin: "Gōng xǐ fā cái",
        english: "Wishing you wealth and prosperity",
        scenario: "Traditional blessing",
      },
    ],
    foods: [
      {
        name: "Dumplings",
        emoji: "🥟",
        meaning: "Wealth and treasure",
        description: "Dumplings shaped like ancient gold ingots",
      },
      {
        name: "Whole Fish",
        emoji: "🐟",
        meaning: "Surplus and abundance",
        description: "Fish for wealth and prosperity",
      },
      {
        name: "Prosperity Noodles",
        emoji: "🍜",
        meaning: "Long-lasting wealth",
        description: "Long noodles for sustained prosperity",
      },
    ],
    gifts: [
      {
        name: "Wealth God Statue",
        emoji: "🗿",
        suitability: "Businesses/Homes",
        note: "For home or business altar",
      },
      {
        name: "Red Decorations",
        emoji: "🏮",
        suitability: "Businesses",
        note: "Red items for prosperity",
      },
      {
        name: "Prosperity Symbol",
        emoji: "💰",
        suitability: "Everyone",
        note: "Symbolic wealth items",
      },
    ],
    tools: [
      {
        name: "Wealth God Guide",
        description: "History and traditions of the festival",
        badge: "New",
      },
      {
        name: "Business Blessings",
        description: "Prayers for commercial success",
      },
      {
        name: "Wealth Expressions",
        description: "Traditional prosperity phrases",
      },
    ],
  },
};

// Learn page festivals data
export const learnPageFestivals = [
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
    id: "mid-autumn",
    nameKey: "mid_autumn.name",
    emoji: "🥮",
    subtitleKey: "mid_autumn.learn.subtitle",
    tools: 8,
    difficultyKey: "difficulty.beginner",
  },
  {
    id: "dragon-boat",
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
    id: "double-ninth",
    nameKey: "double_ninth.name",
    emoji: "🌼",
    subtitleKey: "double_ninth.learn.subtitle",
    tools: 6,
    difficultyKey: "difficulty.intermediate",
  },
  {
    id: "winter-solstice",
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
] as const;

// Learn page steps
export const learningSteps = [
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

// Quiz questions by festival
export const quizQuestions: Record<
  string,
  Array<{
    id: number;
    questionKey: string;
    options: string[];
    correctIndex: number;
    explanationKey: string;
    category: "history" | "customs" | "food" | "etiquette";
  }>
> = {
  spring: [
    {
      id: 1,
      questionKey: "quiz.spring.q1",
      options: [
        "January/February",
        "January 1st",
        "December 25th",
        "March 15th",
      ],
      correctIndex: 0,
      explanationKey: "quiz.spring.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.spring.q2",
      options: [
        "15th day of 8th lunar month",
        "1st day of 1st lunar month",
        "5th day of 5th lunar month",
        "7th day of 7th lunar month",
      ],
      correctIndex: 1,
      explanationKey: "quiz.spring.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.spring.q3",
      options: [
        "Cleaning house to sweep away bad luck",
        "Exchanging gifts on Valentine's Day",
        "Eating turkey on Thanksgiving",
        "Trick-or-treating on Halloween",
      ],
      correctIndex: 0,
      explanationKey: "quiz.spring.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.spring.q4",
      options: [
        "Don't wash hair or clothes on New Year's Day",
        "Eating delicious food",
        "Spending time with family",
        "Wearing new clothes",
      ],
      correctIndex: 0,
      explanationKey: "quiz.spring.q4.explain",
      category: "etiquette",
    },
    {
      id: 5,
      questionKey: "quiz.spring.q5",
      options: ["Fish", "Thanksgiving turkey", "Christmas ham", "Easter eggs"],
      correctIndex: 0,
      explanationKey: "quiz.spring.q5.explain",
      category: "food",
    },
  ],
  lantern: [
    {
      id: 1,
      questionKey: "quiz.lantern.q1",
      options: ["February", "January", "March", "April"],
      correctIndex: 0,
      explanationKey: "quiz.lantern.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.lantern.q2",
      options: [
        "1st day of 1st lunar month",
        "15th day of 1st lunar month",
        "15th day of 8th lunar month",
        "5th day of 5th lunar month",
      ],
      correctIndex: 1,
      explanationKey: "quiz.lantern.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.lantern.q3",
      options: [
        "Lighting and hanging lanterns",
        "Exchanging gifts",
        "Decorating with pumpkins",
        "Giving red envelopes",
      ],
      correctIndex: 0,
      explanationKey: "quiz.lantern.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.lantern.q4",
      options: ["Tangyuan", "Mooncake", "Zongzi", "Qingtuan"],
      correctIndex: 0,
      explanationKey: "quiz.lantern.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.lantern.q5",
      options: [
        "Solving lantern riddles",
        "Swimming in rivers",
        "Pointing at the moon",
        "Using scissors",
      ],
      correctIndex: 0,
      explanationKey: "quiz.lantern.q5.explain",
      category: "etiquette",
    },
  ],
  mid_autumn: [
    {
      id: 1,
      questionKey: "quiz.mid_autumn.q1",
      options: ["September/October", "August", "November", "December"],
      correctIndex: 0,
      explanationKey: "quiz.mid_autumn.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.mid_autumn.q2",
      options: [
        "15th day of 8th lunar month",
        "1st day of 1st lunar month",
        "15th day of 1st lunar month",
        "5th day of 5th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.mid_autumn.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.mid_autumn.q3",
      options: [
        "Admiring the full moon",
        "Swimming in rivers",
        "Flying kites",
        "Lighting lanterns",
      ],
      correctIndex: 0,
      explanationKey: "quiz.mid_autumn.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.mid_autumn.q4",
      options: ["Mooncake", "Tangyuan", "Zongzi", "Dumplings"],
      correctIndex: 0,
      explanationKey: "quiz.mid_autumn.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.mid_autumn.q5",
      options: [
        "Don't point at the moon",
        "Don't eat meat",
        "Don't wash hair",
        "Don't use scissors",
      ],
      correctIndex: 0,
      explanationKey: "quiz.mid_autumn.q5.explain",
      category: "etiquette",
    },
  ],
  dragon_boat: [
    {
      id: 1,
      questionKey: "quiz.dragon_boat.q1",
      options: ["June", "July", "May", "August"],
      correctIndex: 0,
      explanationKey: "quiz.dragon_boat.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.dragon_boat.q2",
      options: [
        "5th day of 5th lunar month",
        "15th day of 8th lunar month",
        "1st day of 1st lunar month",
        "7th day of 7th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.dragon_boat.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.dragon_boat.q3",
      options: [
        "Dragon boat racing",
        "Exchanging gifts",
        "Lighting lanterns",
        "Family reunions",
      ],
      correctIndex: 0,
      explanationKey: "quiz.dragon_boat.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.dragon_boat.q4",
      options: ["Zongzi", "Mooncake", "Tangyuan", "Qingtuan"],
      correctIndex: 0,
      explanationKey: "quiz.dragon_boat.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.dragon_boat.q5",
      options: ["Qu Yuan", "Confucius", "Laozi", "Mencius"],
      correctIndex: 0,
      explanationKey: "quiz.dragon_boat.q5.explain",
      category: "history",
    },
  ],
  qingming: [
    {
      id: 1,
      questionKey: "quiz.qingming.q1",
      options: ["April 4-5", "March 15th", "May 1st", "June 1st"],
      correctIndex: 0,
      explanationKey: "quiz.qingming.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.qingming.q2",
      options: [
        "Solar term around April 4-5",
        "15th day of 8th lunar month",
        "1st day of 1st lunar month",
        "5th day of 5th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.qingming.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.qingming.q3",
      options: [
        "Tomb sweeping and cleaning graves",
        "Dragon boat racing",
        "Admiring the full moon",
        "Lighting lanterns",
      ],
      correctIndex: 0,
      explanationKey: "quiz.qingming.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.qingming.q4",
      options: ["Qingtuan", "Zongzi", "Mooncake", "Tangyuan"],
      correctIndex: 0,
      explanationKey: "quiz.qingming.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.qingming.q5",
      options: [
        "Tomb sweeping and honoring ancestors",
        "Romantic celebrations",
        "Gift giving",
        "Fireworks",
      ],
      correctIndex: 0,
      explanationKey: "quiz.qingming.q5.explain",
      category: "etiquette",
    },
  ],
  qixi: [
    {
      id: 1,
      questionKey: "quiz.qixi.q1",
      options: ["August", "July", "September", "June"],
      correctIndex: 0,
      explanationKey: "quiz.qixi.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.qixi.q2",
      options: [
        "7th day of 7th lunar month",
        "15th day of 8th lunar month",
        "1st day of 1st lunar month",
        "5th day of 5th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.qixi.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.qixi.q3",
      options: ["Cowherd and Weaver Girl", "Qu Yuan", "Chang'e", "Zhu Bajie"],
      correctIndex: 0,
      explanationKey: "quiz.qixi.q3.explain",
      category: "history",
    },
    {
      id: 4,
      questionKey: "quiz.qixi.q4",
      options: ["Qiaoguo", "Zongzi", "Mooncake", "Qingtuan"],
      correctIndex: 0,
      explanationKey: "quiz.qixi.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.qixi.q5",
      options: [
        "China's traditional Valentine's Day",
        "Dragon boat racing",
        "Tomb sweeping day",
        "Family reunion festival",
      ],
      correctIndex: 0,
      explanationKey: "quiz.qixi.q5.explain",
      category: "customs",
    },
  ],
  double_ninth: [
    {
      id: 1,
      questionKey: "quiz.double_ninth.q1",
      options: ["October", "September", "November", "August"],
      correctIndex: 0,
      explanationKey: "quiz.double_ninth.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.double_ninth.q2",
      options: [
        "9th day of 9th lunar month",
        "9th day of 10th lunar month",
        "19th day of 9th lunar month",
        "29th day of 9th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.double_ninth.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.double_ninth.q3",
      options: [
        "Appreciating chrysanthemums",
        "Lighting lanterns",
        "Eating mooncakes",
        "Setting off fireworks",
      ],
      correctIndex: 0,
      explanationKey: "quiz.double_ninth.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.double_ninth.q4",
      options: ["Double Ninth Cake", "Mooncake", "Zongzi", "Qingtuan"],
      correctIndex: 0,
      explanationKey: "quiz.double_ninth.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.double_ninth.q5",
      options: [
        "Climbing mountains",
        "Watching dragon boats",
        "Flying kites",
        "Making dumplings",
      ],
      correctIndex: 0,
      explanationKey: "quiz.double_ninth.q5.explain",
      category: "customs",
    },
  ],
  winter_solstice: [
    {
      id: 1,
      questionKey: "quiz.winter_solstice.q1",
      options: ["December 21-23", "December 25", "January 1", "December 31"],
      correctIndex: 0,
      explanationKey: "quiz.winter_solstice.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.winter_solstice.q2",
      options: [
        "Shortest day of the year",
        "Longest day of the year",
        "Day when day and night are equal",
        "Midpoint of winter",
      ],
      correctIndex: 0,
      explanationKey: "quiz.winter_solstice.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.winter_solstice.q3",
      options: ["Dumplings", "Mooncakes", "Zongzi", "Qingtuan"],
      correctIndex: 0,
      explanationKey: "quiz.winter_solstice.q3.explain",
      category: "food",
    },
    {
      id: 4,
      questionKey: "quiz.winter_solstice.q4",
      options: [
        "Tangyuan",
        "Dumplings",
        "Noodles",
        "Both dumplings and tangyuan",
      ],
      correctIndex: 3,
      explanationKey: "quiz.winter_solstice.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.winter_solstice.q5",
      options: [
        "It marks the return of yang energy",
        "It is the darkest day",
        "It is a sad day",
        "It has no special meaning",
      ],
      correctIndex: 0,
      explanationKey: "quiz.winter_solstice.q5.explain",
      category: "customs",
    },
  ],
  laba: [
    {
      id: 1,
      questionKey: "quiz.laba.q1",
      options: [
        "8th day of 12th lunar month",
        "1st day of 12th lunar month",
        "15th day of 12th lunar month",
        "8th day of 1st lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.laba.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.laba.q2",
      options: [
        "Buddhist origin",
        "Ancient harvest celebration",
        "New Year celebration",
        "Ancestor worship",
      ],
      correctIndex: 0,
      explanationKey: "quiz.laba.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.laba.q3",
      options: ["Laba Porridge", "Mooncake", "Zongzi", "Qingtuan"],
      correctIndex: 0,
      explanationKey: "quiz.laba.q3.explain",
      category: "food",
    },
    {
      id: 4,
      questionKey: "quiz.laba.q4",
      options: ["Laba garlic", "Red envelope", "Lantern", "Firecracker"],
      correctIndex: 0,
      explanationKey: "quiz.laba.q4.explain",
      category: "customs",
    },
    {
      id: 5,
      questionKey: "quiz.laba.q5",
      options: [
        "It marks the beginning of Spring Festival preparations",
        "It is the last day of the year",
        "It celebrates the harvest",
        "It honors ancestors only",
      ],
      correctIndex: 0,
      explanationKey: "quiz.laba.q5.explain",
      category: "customs",
    },
  ],
  longtaitou: [
    {
      id: 1,
      questionKey: "quiz.longtaitou.q1",
      options: ["February/March", "January", "April", "May"],
      correctIndex: 0,
      explanationKey: "quiz.longtaitou.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.longtaitou.q2",
      options: [
        "2nd day of 2nd lunar month",
        "1st day of 2nd lunar month",
        "15th day of 1st lunar month",
        "5th day of 5th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.longtaitou.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.longtaitou.q3",
      options: ["Getting a haircut", "Eating zongzi", "Lighting lanterns", "Flying kites"],
      correctIndex: 0,
      explanationKey: "quiz.longtaitou.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.longtaitou.q4",
      options: ["Spring Pancakes", "Mooncakes", "Qingtuan", "Tangyuan"],
      correctIndex: 0,
      explanationKey: "quiz.longtaitou.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.longtaitou.q5",
      options: [
        "It celebrates the dragon's awakening",
        "It is the Chinese New Year",
        "It honors ancestors",
        "It celebrates harvest",
      ],
      correctIndex: 0,
      explanationKey: "quiz.longtaitou.q5.explain",
      category: "customs",
    },
  ],
  shangsi: [
    {
      id: 1,
      questionKey: "quiz.shangsi.q1",
      options: ["March/April", "February", "May", "June"],
      correctIndex: 0,
      explanationKey: "quiz.shangsi.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.shangsi.q2",
      options: [
        "3rd day of 3rd lunar month",
        "15th day of 1st lunar month",
        "5th day of 5th lunar month",
        "9th day of 9th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.shangsi.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.shangsi.q3",
      options: [
        "Spring bathing and purification",
        "Dragon boat racing",
        "Moon viewing",
        "Tomb sweeping",
      ],
      correctIndex: 0,
      explanationKey: "quiz.shangsi.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.shangsi.q4",
      options: ["Kite flying", "Eating mooncakes", "Lighting lanterns", "Setting off fireworks"],
      correctIndex: 0,
      explanationKey: "quiz.shangsi.q4.explain",
      category: "customs",
    },
    {
      id: 5,
      questionKey: "quiz.shangsi.q5",
      options: [
        "One of China's oldest traditions",
        "A modern holiday",
        "A Buddhist festival",
        "A harvest celebration only",
      ],
      correctIndex: 0,
      explanationKey: "quiz.shangsi.q5.explain",
      category: "history",
    },
  ],
  new_years_eve: [
    {
      id: 1,
      questionKey: "quiz.new_years_eve.q1",
      options: ["January/February", "December 31", "March 15", "October 1"],
      correctIndex: 0,
      explanationKey: "quiz.new_years_eve.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.new_years_eve.q2",
      options: [
        "30th day of 12th lunar month",
        "1st day of 1st lunar month",
        "15th day of 1st lunar month",
        "29th day of 12th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.new_years_eve.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.new_years_eve.q3",
      options: [
        "Reunion dinner with family",
        "Watching dragon boat races",
        "Moon viewing",
        "Tomb sweeping",
      ],
      correctIndex: 0,
      explanationKey: "quiz.new_years_eve.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.new_years_eve.q4",
      options: ["Dumplings", "Mooncakes", "Zongzi", "Qingtuan"],
      correctIndex: 0,
      explanationKey: "quiz.new_years_eve.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.new_years_eve.q5",
      options: [
        "Staying up late to welcome the new year",
        "Sleeping early for luck",
        "Working late",
        "Avoiding all activities",
      ],
      correctIndex: 0,
      explanationKey: "quiz.new_years_eve.q5.explain",
      category: "etiquette",
    },
  ],
  cold_food: [
    {
      id: 1,
      questionKey: "quiz.cold_food.q1",
      options: ["April 3-5", "April 4-5", "March 15", "May 1"],
      correctIndex: 0,
      explanationKey: "quiz.cold_food.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.cold_food.q2",
      options: [
        "Day before Qingming",
        "Day after Qingming",
        "Same day as Qingming",
        "Unrelated to Qingming",
      ],
      correctIndex: 0,
      explanationKey: "quiz.cold_food.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.cold_food.q3",
      options: [
        "Eating cold food only",
        "Lighting fires",
        "Eating hot soup",
        "Setting off fireworks",
      ],
      correctIndex: 0,
      explanationKey: "quiz.cold_food.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.cold_food.q4",
      options: ["Qingtuan", "Zongzi", "Mooncakes", "Dumplings"],
      correctIndex: 0,
      explanationKey: "quiz.cold_food.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.cold_food.q5",
      options: [
        "Commemorating Jie Zitui",
        "Honoring Qu Yuan",
        "Celebrating the harvest",
        "Welcoming spring",
      ],
      correctIndex: 0,
      explanationKey: "quiz.cold_food.q5.explain",
      category: "history",
    },
  ],
  ghost: [
    {
      id: 1,
      questionKey: "quiz.ghost.q1",
      options: ["August", "July", "September", "October"],
      correctIndex: 0,
      explanationKey: "quiz.ghost.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.ghost.q2",
      options: [
        "15th day of 7th lunar month",
        "15th day of 8th lunar month",
        "1st day of 7th lunar month",
        "30th day of 6th lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.ghost.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.ghost.q3",
      options: [
        "Honoring ancestors and appeasing spirits",
        "Dragon boat racing",
        "Moon viewing",
        "Family reunions",
      ],
      correctIndex: 0,
      explanationKey: "quiz.ghost.q3.explain",
      category: "customs",
    },
    {
      id: 4,
      questionKey: "quiz.ghost.q4",
      options: [
        "Burning joss paper and offerings",
        "Eating mooncakes",
        "Lighting lanterns",
        "Setting off fireworks",
      ],
      correctIndex: 0,
      explanationKey: "quiz.ghost.q4.explain",
      category: "customs",
    },
    {
      id: 5,
      questionKey: "quiz.ghost.q5",
      options: [
        "Spirits visit the mortal world",
        "It is a happy festival",
        "It celebrates dragons",
        "It honors warriors only",
      ],
      correctIndex: 0,
      explanationKey: "quiz.ghost.q5.explain",
      category: "history",
    },
  ],
  renri: [
    {
      id: 1,
      questionKey: "quiz.renri.q1",
      options: ["January/February", "March", "April", "December"],
      correctIndex: 0,
      explanationKey: "quiz.renri.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.renri.q2",
      options: [
        "7th day of 1st lunar month",
        "1st day of 1st lunar month",
        "15th day of 1st lunar month",
        "2nd day of 2nd lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.renri.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.renri.q3",
      options: [
        "Human Day - celebrating human creation",
        "Dragon festival",
        "Ancestor worship day",
        "Harvest festival",
      ],
      correctIndex: 0,
      explanationKey: "quiz.renri.q3.explain",
      category: "history",
    },
    {
      id: 4,
      questionKey: "quiz.renri.q4",
      options: [
        "Seven-vegetable porridge",
        "Mooncakes",
        "Zongzi",
        "Qingtuan",
      ],
      correctIndex: 0,
      explanationKey: "quiz.renri.q4.explain",
      category: "food",
    },
    {
      id: 5,
      questionKey: "quiz.renri.q5",
      options: [
        "Celebrating goddess Nüwa's creation of humans",
        "Honoring the Dragon King",
        "Commemorating Qu Yuan",
        "Celebrating harvest",
      ],
      correctIndex: 0,
      explanationKey: "quiz.renri.q5.explain",
      category: "history",
    },
  ],
  wealth_god: [
    {
      id: 1,
      questionKey: "quiz.wealth_god.q1",
      options: ["January/February", "March", "September", "December"],
      correctIndex: 0,
      explanationKey: "quiz.wealth_god.q1.explain",
      category: "history",
    },
    {
      id: 2,
      questionKey: "quiz.wealth_god.q2",
      options: [
        "5th day of 1st lunar month",
        "1st day of 1st lunar month",
        "15th day of 1st lunar month",
        "2nd day of 2nd lunar month",
      ],
      correctIndex: 0,
      explanationKey: "quiz.wealth_god.q2.explain",
      category: "history",
    },
    {
      id: 3,
      questionKey: "quiz.wealth_god.q3",
      options: [
        "The Wealth God's birthday",
        "Dragon Boat Festival",
        "Mid-Autumn Festival",
        "Spring Festival",
      ],
      correctIndex: 0,
      explanationKey: "quiz.wealth_god.q3.explain",
      category: "history",
    },
    {
      id: 4,
      questionKey: "quiz.wealth_god.q4",
      options: [
        "Business prayers and prosperity wishes",
        "Eating mooncakes",
        "Tomb sweeping",
        "Dragon boat racing",
      ],
      correctIndex: 0,
      explanationKey: "quiz.wealth_god.q4.explain",
      category: "customs",
    },
    {
      id: 5,
      questionKey: "quiz.wealth_god.q5",
      options: [
        "Praying for wealth and prosperity",
        "Honoring ancestors",
        "Celebrating harvest",
        "Family reunions",
      ],
      correctIndex: 0,
      explanationKey: "quiz.wealth_god.q5.explain",
      category: "customs",
    },
  ],
};
