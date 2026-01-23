// English food data translations
// Contains all food item data with English content

import type {
  FoodDataCollection,
  FoodFestivalCollection,
} from "../schema/food-data";

export const foodData: FoodDataCollection = {
  dumplings: {
    id: "dumplings",
    category: "Main",
    festivalKey: "spring",
    name: "饺子",
    pinyin: "jiǎo zi",
    english: "Dumplings",
    festival: "Spring Festival",
    description:
      "Dumplings are the heart of Spring Festival celebrations in northern China. Every family gathers on New Year's Eve to make and eat them together, symbolizing wealth, reunion, and good fortune for the coming year.",
    story:
      "Imagine a northern Chinese family home on Chinese New Year's Eve. The whole family gathers around the kitchen table—grandparents teaching grandchildren how to fold dumplings, parents preparing the filling, and the air filled with laughter and the smell of garlic and sesame oil. Each dumpling is carefully folded to look like ancient gold ingots (元宝), and some contain coins hidden inside for extra luck. This isn't just cooking—it's a centuries-old tradition that brings families together.",
    meaning:
      "The word 'jiao' (饺) sounds like 'jiao zi' which resembles 'period' or 'time' in Chinese, symbolizing the passing of good fortune from year to year. The folded edges of dumplings look like ancient gold ingots (元宝), representing wealth and prosperity. Eating dumplings means you're 'eating' good luck into your life.",
    history:
      "Dumplings have been eaten in China for over 1,800 years, originating from the Han Dynasty. They became associated with Spring Festival during the Ming Dynasty when people believed eating them at midnight would bring good fortune for the entire year.",
    regional:
      "Northern China: Bold garlic, chives, and pork fillings. Northeastern China: Large, juicy dumplings often served with vinegar. Beijing: Classic pork and cabbage. Sichuan: Spicy dumplings with numbing peppercorn oil.",
    pronunciation:
      "Jiǎo zi (JOW Dzuh) - The 'jiao' has a rising tone, like you're asking a question. The 'zi' is neutral tone, like a soft 'dzuh'. Practice: 'JOW-DZUH'.",
    when: "Chinese New Year's Eve dinner (especially at midnight), New Year's Day breakfast, and throughout the first week of the New Year.",
    withWhom:
      "Immediate family, extended relatives visiting during Spring Festival, and close family friends who are like family (often called 'yi jia ren' - 'one family').",
    ordering:
      "At a restaurant: 'Wǒ yào jǐ gè jiǎozi' (I want some dumplings) or 'Lái yì xiē jiǎozi' (Bring some dumplings). For specific types: 'Yǒu shénme kǒuwèi de?' (What flavors do you have?)",
    tips: [
      "Eat at midnight on New Year's Eve for maximum luck",
      "The first few dumplings are often dedicated to ancestors",
      "Dumplings with coins bring extra fortune—find them and make a wish",
      "Dip in aged vinegar (香醋) with sliced garlic for authentic flavor",
      "Make extra—you want leftovers for 'surplus' (有余)",
    ],
    variations: [
      "Boiled (水饺) - Most common, served with dipping sauce",
      "Pan-fried (锅贴) - Crispy bottoms, soft tops",
      "Steamed (蒸饺) - Lighter, often with shrimp or vegetables",
      "Fried (炸饺子) - Golden and crispy, festive occasion food",
    ],
    taboo: [
      "Don't eat dumplings alone—loneliness is bad luck",
      "Don't leave the table before everyone finishes—family unity matters",
      "Don't complain about the dumplings—even imperfect ones bring luck",
    ],
    related: "Fish (鱼) - Another essential New Year dish for prosperity",
    tags: ["Must-try", "Meaningful", "Northern China", "Family"],
    color: "from-rose-500 to-pink-500",
    emoji: "🥟",
  },
  tangyuan: {
    id: "tangyuan",
    category: "Dessert",
    festivalKey: "lantern",
    name: "汤圆",
    pinyin: "tāng yuán",
    english: "Sweet Rice Balls",
    festival: "Lantern Festival",
    description:
      "Tangyuan are chewy glutinous rice balls filled with sweet black sesame paste, red bean, or peanut butter. They are the signature dessert of the Lantern Festival, symbolizing family reunion and the hope for a full, complete life.",
    story:
      "On the fifteenth day of the first lunar month, after weeks of New Year celebrations, families gather again to enjoy tangyuan under the glow of lanterns. Parents tell children the story of the Celestial Emperor sending a heavenly bird to burn their homes, and how people scared it away with fire—thus beginning the tradition of lanterns. Today, tangyuan symbolize the bright, round full moon and the togetherness of family. When you eat them, you're literally swallowing 'reunion' (团圆) into your belly.",
    meaning:
      "Tangyuan (汤圆) sounds exactly like 'tuanyuan' (团圆), which means reunion. Their perfectly round shape represents the full moon, family completeness, and harmony. Eating them isn't just dessert—it's a wish for your family to stay together forever.",
    history:
      "Tangyuan originated during the Song Dynasty (960-1279) as a tribute to the gods. By the Ming Dynasty, they became strongly associated with Lantern Festival. The name 'tangyuan' (meaning 'round things in soup') replaced the earlier 'yuanxiao' during the Yuan Dynasty.",
    regional:
      "Shanghai: Black sesame filling with fragrant lard. Guangdong: Sweet soup with dried tangerine peel. Sichuan: Often savory with pork and vegetables. Taiwan: colorful fried tangyuan in sweet soup.",
    pronunciation:
      "Tāng yuán (TAHNG YUHN) - The 'tang' has a falling-rising tone, like you're starting a story. The 'yuan' has a rising tone. Practice: 'TAHNG-YUHN'.",
    when: "Lantern Festival evening (15th day of first lunar month), family reunions, weddings, birthdays, and moving into a new home.",
    withWhom:
      "Nuclear family, extended relatives, and particularly grandparents and grandchildren to emphasize multi-generational unity.",
    ordering:
      "'Wǒ yào tāngyuán' (I want sweet rice balls). 'Yǒu shénme tián de?' (What sweet fillings do you have?). 'Lái yì wǎn tāngyuán tángshuǐ' (Bring a bowl of tangyuan in sweet soup).",
    tips: [
      "Eat at least one tangyuan to ensure family unity in the coming year",
      "Traditional serving: in warm sweet soup with ginger (姜汤)",
      "Some families fry tangyuan for a crispy exterior",
      "Red bean tangyuan are especially popular for weddings",
      "Children love colorful fruit-filled varieties",
    ],
    variations: [
      "Sweet fillings: black sesame, red bean, peanut butter, lotus seed",
      "Savory: pork, vegetables, mushrooms (Shanghai style)",
      "Colorful: natural colors from vegetables and flowers",
      "Fried (炸汤圆) - crispy outside, molten inside",
      "No-fill (酒酿圆子) - small glutinous balls in fermented rice wine soup",
    ],
    taboo: [
      "Don't eat tangyuan without family—it defeats the purpose",
      "Don't eat too few—'round' numbers are auspicious",
      "Don't serve cold—warm symbolizes warm family bonds",
    ],
    related:
      "Lanterns (灯笼) - The visual companion to tangyuan during Lantern Festival",
    tags: ["Dessert", "Symbolic", "Southern China", "Family"],
    color: "from-orange-500 to-amber-500",
    emoji: "🍡",
  },
  zongzi: {
    id: "zongzi",
    category: "Main",
    festivalKey: "dragonboat",
    name: "粽子",
    pinyin: "zòng zi",
    english: "Rice Dumplings",
    festival: "Dragon Boat Festival",
    description:
      "Zongzi are pyramid-shaped bundles of glutinous rice wrapped in bamboo leaves, stuffed with fillings like pork, egg, beans, or dates. They commemorate the poet Qu Yuan and are eaten during the Dragon Boat Festival to ward off evil spirits.",
    story:
      "In 278 BC, the great poet Qu Yuan threw himself into the Miluo River after his beloved state of Chu fell to invaders. Local fishermen rushed to save him, throwing rice balls into the water to keep fish from eating his body. This evolved into the tradition of zongzi—each wrapped package is a small offering of respect. Today, families across China spend weeks before the festival learning traditional wrapping techniques from elders, creating hundreds of zongqi to share with neighbors and relatives.",
    meaning:
      "The triangular shape of zongzi represents the mountains where Qu Yuan found inspiration for his poetry. The bamboo leaves symbolize the leaves Qu Yuan gathered while wandering the countryside. Each zongzi is a small memorial to loyalty, patriotism, and cultural pride.",
    history:
      "Zongzi have been eaten for over 2,300 years, making them one of China's oldest traditional foods. They were originally called 'zong' (棕) and were plain rice offerings. Fillings were added during the Warring States period. The name evolved to 'zongzi' during the Han Dynasty.",
    regional:
      "Beijing: Large, sweet red bean or date zongzi. Guangdong: Complex multi-fillings with pork, egg, mushrooms, and dried shrimp. Zhejiang: Huzhou style with fresh pork and rich flavor. Taiwan: Massive size, often with chestnuts and multiple fillings.",
    pronunciation:
      "Zòng zi (DZOONG Dzuh) - The 'zong' has a falling tone, like a drum beat. The 'zi' is soft. Practice: 'DZOONG-DZUH'.",
    when: "Dragon Boat Festival (5th day of 5th lunar month, usually June), the weeks leading up to it, and throughout the summer months.",
    withWhom:
      "Extended family, neighbors, colleagues, and community members. Zongzi are shared widely as gifts to strengthen social bonds.",
    ordering:
      "'Wǒ yào zòngzi' (I want rice dumplings). 'Yǒu shénme kǒuwèi de?' (What flavors do you have?). 'Lái yí gè ròu de' (Bring one with meat). 'Duōshao qián yí gè?' (How much for one?)",
    tips: [
      "Best steamed or boiled for 1-2 hours until leaves are fragrant",
      "Dip in sugar or honey for sweet varieties",
      "Fresh bamboo leaves have the best aroma",
      "Store in refrigerator for up to a week, or freeze for months",
      "Traditional families make hundreds to give as gifts",
    ],
    variations: [
      "Sweet: red bean, date, chestnut, lotus seed",
      "Savory: pork belly, egg yolk, dried shrimp, mushrooms",
      "Mixed: sweet and savory in one (Guangdong style)",
      "Size varies from small (one bite) to giant (multiple servings)",
    ],
    taboo: [
      "Don't eat zongzi before the festival—it loses its meaning",
      "Don't waste zongzi—it disrespects Qu Yuan's memory",
      "Don't eat plain without any filling—traditionally disrespectful",
    ],
    related:
      "Dragon Boat Racing (龙舟赛) - The sporting companion to zongzi during the festival",
    tags: ["Sweet & salty", "Historic", "Nationwide", "Tradition"],
    color: "from-green-500 to-emerald-500",
    emoji: "🍙",
  },
  mooncake: {
    id: "mooncake",
    category: "Dessert",
    festivalKey: "midautumn",
    name: "月饼",
    pinyin: "yuè bǐng",
    english: "Mooncake",
    festival: "Mid-Autumn Festival",
    description:
      "Mooncakes are round, dense pastries with rich lotus seed paste and salted egg yolk centers, traditionally eaten while admiring the full moon during Mid-Autumn Festival. They symbolize reunion, completeness, and the sharing of good fortune.",
    story:
      "Under the harvest moon, families gather on rooftops and balconies to admire the full moon—the brightest of the year. On the table: tea, fruit, and mooncakes, each cut into pieces and shared among family members. Legend says Chang'e, the moon goddess, lives in a crystal palace there, and by eating mooncakes, we're connecting with her blessings. Modern mooncake gifts travel across cities, carrying wishes from sender to receiver: 'May our families be complete, like the moon tonight.'",
    meaning:
      "The round shape represents the full moon and family reunion. The traditional lotus seed paste filling symbolizes purity and nobility. Sharing mooncakes with nine pieces (like the nine positions on ancient bronze mirrors) brings good luck to the whole family.",
    history:
      "Mooncakes date back over 3,000 years to the Shang Dynasty, evolving from ritual offerings to the moon. The modern form with lotus paste and egg yolk originated during the Ming Dynasty (1368-1644). During the Qing Dynasty, mooncake culture became elaborate with regional styles emerging across China.",
    regional:
      "Cantonese: Lotus seed paste with salted egg yolk, ornate designs. Suzhou: Flaky, delicate crust with various fillings. Beijing: Heavy, sweet fillings with red bean or five kernel. Shanghai: thin-skinned, diverse fillings. Yunnan: Specialty flower petal mooncakes.",
    pronunciation:
      "Yuè bǐng (YUEH BING) - The 'yue' has a falling tone, like moonlight. The 'bing' is rising tone. Practice: 'YUEH-BING'.",
    when: "Mid-Autumn Festival evening (15th day of 8th lunar month, usually September), the week before and after, and as gifts throughout the season.",
    withWhom:
      "Nuclear family, distant relatives who visit, close friends, business partners (gift-giving is a key tradition), and elderly relatives to show respect.",
    ordering:
      "'Wǒ yào yuèbǐng' (I want mooncakes). 'Zhè zhǒng yǒu shénme tián de?' (What fillings does this kind have?). 'Yí gè duōshao qián?' (How much for one?). 'Yǒu lǐhé zhuāng ma?' (Do you have gift boxes?)",
    tips: [
      "Best enjoyed with Chinese tea (普洱茶 or 乌龙茶)",
      "Cut into wedges and share—one piece per family member",
      "Premium mooncakes use single-origin lotus seeds from Lake Tai",
      "New styles: snow skin, ice cream, and low-sugar varieties exist",
      "Give as gifts to show respect and maintain relationships",
    ],
    variations: [
      "Traditional: lotus seed paste with salted egg yolk",
      "Snow skin: chilled, chewy exterior (近年流行)",
      "Cantonese: ornate patterns pressed into top",
      "Five kernel (五仁): mixed nuts and seeds",
      "Red bean: sweet and smooth (children's favorite)",
      "Modern: ice cream, chocolate, fruit flavors",
    ],
    taboo: [
      "Don't eat mooncakes alone—reunion is key",
      "Don't give single mooncakes as gifts—give in even numbers",
      "Don't eat after the festival moon has passed",
    ],
    related: "Osmanthus Cake (桂花糕) - Often served alongside mooncakes",
    tags: ["Great gift", "Essential", "Nationwide", "Reunion"],
    color: "from-yellow-500 to-orange-500",
    emoji: "🥮",
  },
  noodles: {
    id: "noodles",
    category: "Main",
    festivalKey: "birthday",
    name: "长寿面",
    pinyin: "cháng shòu miàn",
    english: "Longevity Noodles",
    festival: "Birthdays",
    description:
      "Longevity noodles are exceptionally long, unbroken noodles served on birthdays to wish the celebrant a long, healthy life. They represent the hope that life's blessings will continue without interruption.",
    story:
      "In a Chinese family home, the birthday elder sits at the head of the table. Before them appears a single, impossibly long noodle—steaming, golden, and glistening with oil. The family sings 'Happy Birthday' (生日快乐的变奏), and the elder takes up chopsticks, ceremonially lifting the entire length of noodle from bowl to mouth without breaking it. Each bite extends life; each slurp adds years. This isn't just a meal—it's a living prayer made of flour and water.",
    meaning:
      "The long, unbroken noodle symbolizes a long, uninterrupted life. The 'long' (长) in the name directly references longevity (长寿). The single piece represents wholeness—the wish that life's blessings won't be cut short by misfortune.",
    history:
      "Longevity noodles have been eaten in China since at least the Han Dynasty (206 BC - 220 AD). They became specifically associated with birthdays during the Tang Dynasty when Emperor Xuanzong officially designated noodles as birthday food. The tradition spread to Japan, Korea, and other East Asian cultures.",
    regional:
      "Northern China: Hand-pulled, thick wheat noodles in rich broth. Sichuan: Noodles with spicy sauce and vegetables. Cantonese: Thin rice noodles in clear broth. Shanghai: Soy-based braised noodle dishes.",
    pronunciation:
      "Cháng shòu miàn (CHAHNG SHOW MYAHN) - Each syllable has a clear, strong tone. Practice: 'CHAHNG-SHOW-MYAHN'.",
    when: "Birthday celebrations (任何年龄, especially 60th, 70th, 80th, 90th), Elderly person's Day (重阳节), and to wish someone recovery from illness.",
    withWhom:
      "Birthday celebrant at center, extended family present, elders particularly honored, children learning family traditions.",
    ordering:
      "'Wǒ yào chángshòu miàn' (I want longevity noodles). 'Yǒu cháng diǎn de ma?' (Do you have extra long ones?). 'Qǐng bú yào kǎn duàn' (Please don't cut them).",
    tips: [
      "Eat in one continuous piece without breaking or biting",
      "The longer and more unbroken, the better the luck",
      "Often served with chicken broth and vegetables",
      "For elders, add extra garnish like mushrooms for health",
      "Children's versions are shorter but still unbroken",
    ],
    variations: [
      "Hand-pulled (拉面): longest, most impressive",
      "Steamed (蒸面): softer texture",
      "Fried (炒面): crispy bottom, soft top",
      "Clear broth (清汤面): light and healthy",
      "Sauce-dressed (拌面): noodles tossed in savory sauce",
    ],
    taboo: [
      "NEVER cut or bite the noodle in half—bad luck",
      "NEVER serve broken noodles for a birthday",
      "NEVER eat alone—the blessing requires witnesses",
    ],
    related:
      "Longevity Peach (寿桃) - Steamed buns shaped like peaches for birthdays",
    tags: ["Traditional", "Long life", "Celebration", "Family"],
    color: "from-amber-500 to-yellow-600",
    emoji: "🍜",
  },
  fish: {
    id: "fish",
    category: "Main",
    festivalKey: "spring",
    name: "鱼",
    pinyin: "yú",
    english: "Whole Fish",
    festival: "Spring Festival",
    description:
      "A whole steamed fish is the centerpiece of Spring Festival dining, symbolizing surplus, prosperity, and abundance for the coming year. The word for fish 'yu' sounds like 'surplus' or 'plenty', making it essential New Year food.",
    story:
      "The fish arrives at the table whole—eyes intact, tail pointing up—a complete creature representing completeness in life. The eldest family member is served first, taking the first bite from the top. Then the fish is divided, each piece placed before different family members with purpose: the head goes to the elder, the middle to the breadwinner, the tail to the youngest. Nothing is wasted; the message is clear—may we have abundance all year, with more left over (有余) than we started with.",
    meaning:
      "'Fish' (鱼 yú) sounds exactly like 'surplus' (余 yú), symbolizing that you'll have more than enough in the coming year. The whole fish represents completeness—no part is missing. Leaving leftovers means your prosperity will overflow into the next year.",
    history:
      "Eating fish during New Year dates back to at least the Han Dynasty (206 BC - 220 AD). During the Ming and Qing Dynasties, the whole steamed fish became the specific New Year tradition, with elaborate etiquette around serving and eating it. Different fish species became associated with different blessings.",
    regional:
      "Northern China: Yellow croaker (黄花鱼) steamed with ginger and scallions. Guangdong: Whole steamed sea bass with soy sauce. Sichuan: Spicy fish with bean paste. Coastal regions: Fresh local catches steamed simply.",
    pronunciation:
      "Yú (YOO) - Simple, rising tone, like saying 'you' but with a question. Practice: 'YOO'.",
    when: "Chinese New Year's Eve dinner (essential), New Year's Day meals, and throughout the first week for continued prosperity.",
    withWhom:
      "Immediate family at New Year's Eve reunion dinner (年夜饭), visiting relatives during Spring Festival, and business partners at New Year banquets.",
    ordering:
      "'Wǒ yào yì tiáo zhěng yú' (I want a whole fish). 'Qǐng gěi wǒ yì tiáo xīn xiān de' (Please give me a fresh one). 'Qīng zhēng de' (Steamed, please). 'Duōshao qián yì tiáo?' (How much for one?)",
    tips: [
      "Always serve whole—never cut into steaks for New Year",
      "Fish head should face the most senior person or guest of honor",
      "Leave leftovers deliberately for 'surplus' (有余)",
      "Steam with ginger, scallions, and light soy for best flavor",
      "Common fish: carp, sea bass, yellow croaker, tilapia",
    ],
    variations: [
      "Steamed (清蒸): most traditional, preserves luck",
      "Red braised (红烧): sweet and savory, northern style",
      "Pan-fried (煎鱼): crispy skin, popular in coastal areas",
      "Fish head (鱼头): specifically prized for prosperity",
      "Two fish (双鱼): for extra abundance (double income, etc.)",
    ],
    taboo: [
      "NEVER turn the fish over—bad luck (船翻 means boat capsizing)",
      "NEVER eat all of it—must leave some for 'surplus'",
      "NEVER serve fish without head and tail—incomplete misfortune",
    ],
    related: "Dumplings (饺子) - The other essential New Year dish",
    tags: ["Essential", "Prosperity", "Lucky", "Reunion"],
    color: "from-cyan-500 to-blue-500",
    emoji: "🐟",
  },
  "laba-porridge": {
    id: "laba-porridge",
    category: "Main",
    festivalKey: "laba",
    name: "腊八粥",
    pinyin: "là bā zhōu",
    english: "Laba Porridge",
    festival: "Laba Festival",
    description:
      "Laba porridge is a warm, nourishing congee made with eight or more grains, beans, nuts, and dried fruits. Eaten on the eighth day of the twelfth lunar month, it marks the countdown to Chinese New Year and honors Buddhist traditions.",
    story:
      "On the eighth morning of the twelfth lunar month, Chinese families wake to the aroma of slow-cooking porridge. The night before, ingredients were soaked: red beans, white rice, glutinous rice, millet, peanuts, lotus seeds, dried longan, and red dates. These eight ingredients (plus more) simmer for hours until the kitchen fills with fragrance. Legend says this was the meal the Buddha survived on before enlightenment, making it sacred. Today, it's comfort food that brings families together before the New Year rush begins.",
    meaning:
      "The 'eight' (八) in Laba represents the Eight Auspicious Symbols of Buddhism. Each grain and bean adds its own blessing: peanuts for longevity, lotus seeds for children, red dates for sweetness in life. Eating Laba porridge prepares your body and spirit for the coming year.",
    history:
      "Laba Festival (腊八) has been celebrated since at least the Song Dynasty (960-1279). The tradition of eating special porridge on this day originated from Buddhist practices honoring Siddhartha Gautama's enlightenment. It spread to become a mainstream Chinese tradition, with families developing their own secret recipes passed through generations.",
    regional:
      "Beijing: Rich, sweet version with twenty ingredients. Northern China: Savory with more grains and beans. Southern China: Often sweeter with dried fruits and rock sugar. Tibet: Special butter tea version.",
    pronunciation:
      "Là bā zhōu (LAH BAH JOW) - Both 'la' and 'ba' have falling tones. Practice: 'LAH-BAH-JOW'.",
    when: "Laba Festival morning (8th day of 12th lunar month, usually January), and throughout the Laba week leading to New Year.",
    withWhom:
      "Nuclear family, neighbors sharing different versions, temple communities, and anyone who visits your home during Laba.",
    ordering:
      "'Wǒ yào làbā zhōu' (I want Laba porridge). 'Yǒu duōshao zhǒng liào de?' (How many ingredients do you have?). 'Nǎ zhǒng zuì tián?' (Which is the sweetest?)",
    tips: [
      "Make a day ahead—the flavors meld overnight",
      "Traditional recipe includes exactly eight or more ingredients",
      "Add dried longan and red dates for natural sweetness",
      "Serve warm with garlic condiments (腊八蒜)",
      "Often given to neighbors as 'luck sharing'",
    ],
    variations: [
      "Sweet (甜腊八粥): red bean, dates, dried fruit, rock sugar",
      "Savory (咸腊八粥): with pork, vegetables, mushrooms",
      "Imperial style (宫廷腊八粥): elaborate, many luxury ingredients",
      "Simple family style: whatever you have, as long as it's 8+ ingredients",
    ],
    taboo: [
      "Don't eat without sharing—it loses its blessing",
      "Don't use only white rice—the more variety, the better",
      "Don't eat cold—warmth symbolizes family warmth",
    ],
    related: "Laba Garlic (腊八蒜) - Pickled garlic served with Laba porridge",
    tags: ["Traditional", "Healthy", "Buddhist", "Countdown"],
    color: "from-red-500 to-rose-500",
    emoji: "🥣",
  },
  "chrysanthemum-tea": {
    id: "chrysanthemum-tea",
    category: "Beverage",
    festivalKey: "chongyang",
    name: "菊花茶",
    pinyin: "jú huā chá",
    english: "Chrysanthemum Tea",
    festival: "Double Ninth Festival",
    description:
      "Chrysanthemum tea is a delicate herbal infusion made from dried chrysanthemum flowers, enjoyed during the Double Ninth Festival to symbolize longevity, health, and the resilience of autumn flowers against the cold.",
    story:
      "On the ninth day of the ninth lunar month, families climb mountains to appreciate chrysanthemums in full bloom. These flowers are the last to bloom before winter, representing perseverance and the ability to thrive in adversity. elders drink chrysanthemum tea while children offer them chrysanthemum branches. The tea's golden color and honey-like aroma remind us that beauty persists even as seasons change. After the climb, warm tea awaits—a reward and a blessing for long life.",
    meaning:
      "Chrysanthemums (菊花) bloom in autumn when other flowers fade, symbolizing resilience and the ability to thrive in hardship. In Chinese culture, they represent noble character and long life. Drinking chrysanthemum tea during Double Ninth is a wish for the elder drinker to live as long as these flowers—strong until the very end.",
    history:
      "Chrysanthemum appreciation dates back over 3,000 years to the Zhou Dynasty. The tea-drinking tradition became formalized during the Tang Dynasty (618-907) when poets like Du Fu wrote extensively about chrysanthemums. By the Song Dynasty, drinking chrysanthemum tea on Double Ninth became widespread custom.",
    regional:
      "Hangzhou: Premium dried chrysanthemums from local fields. Beijing: Often combined with goji berries and rock sugar. Guangdong: Served ice-cold in summer, hot in autumn. Taiwan: Specialty varieties with honey notes.",
    pronunciation:
      "Jú huā chá (JOO HWA CHAH) - 'Ju' has a rising tone, 'hua' falling tone. Practice: 'JOO-HWA-CHAH'.",
    when: "Double Ninth Festival morning and afternoon, autumn mountain climbing trips, and any time to promote health and relaxation.",
    withWhom:
      "Elders (especially to honor them), visiting guests as a welcoming drink, and family members of all ages during autumn gatherings.",
    ordering:
      "'Wǒ yào júhuā chá' (I want chrysanthemum tea). 'Lái yì bēi rè de' (Bring one hot, please). 'Yǒu fàng táng de ma?' (Do you have it with sugar/honey?)",
    tips: [
      "Use water just below boiling (80-85°C) to preserve flavor",
      "Add rock sugar or honey to balance the slight bitterness",
      "Best served in clear glass to see the flowers bloom",
      "Often paired with osmanthus cakes (桂花糕)",
      "Can be re-steeped 2-3 times with remaining flavor",
    ],
    variations: [
      "Pure chrysanthemum (菊花茶): simple, traditional",
      "With goji berries (菊花枸杞): enhanced health benefits",
      "With rock sugar (冰糖菊花): sweet and smooth",
      "Iced (冰菊花): refreshing summer drink",
      "Mixed flower tea: chrysanthemum with other autumn blooms",
    ],
    taboo: [
      "Don't serve to those with cold/flu—it can worsen symptoms",
      "Don't use boiling water—it damages delicate flowers",
      "Don't drink without appreciating the flowers first",
    ],
    related: "Osmanthus (桂花) - Often served alongside chrysanthemum tea",
    tags: ["Refreshing", "Healthy", "Autumn", "Longevity"],
    color: "from-purple-500 to-pink-500",
    emoji: "🌼",
  },
  "spring-rolls": {
    id: "spring-rolls",
    category: "Main",
    festivalKey: "spring",
    name: "春卷",
    pinyin: "chūn juǎn",
    english: "Spring Rolls",
    festival: "Spring Festival",
    description:
      "Spring rolls are crispy, golden cylinders filled with shredded vegetables and sometimes meat, fried until crunchy. They symbolize wealth and prosperity, with their golden color resembling gold bars.",
    story:
      "In the rush of Spring Festival preparations, the kitchen is filled with the sizzle of hot oil. Grandmother demonstrates the art of rolling spring rolls: place filling on the wrapper, fold in the sides, roll tightly, and seal with a flour-water paste. Into the oil they go—bubbling, turning golden, emerging as edible gold bars. These golden rolls represent the wealth that will come in the new year, and every bite is a promise of prosperity.",
    meaning:
      "Spring rolls are called 'chun juan' (春卷), literally 'spring scrolls.' Their golden, elongated shape resembles ancient gold ingots (金条), symbolizing wealth and treasure. Eating them at the start of spring welcomes prosperity into the new year.",
    history:
      "Spring rolls originated during the Eastern Jin Dynasty (317-420) when people ate spring vegetables wrapped in dough to celebrate the new season. By the Tang Dynasty, they evolved into the fried version we know today. During the Qing Dynasty, they became essential Spring Festival food in southern China.",
    regional:
      "Shanghai: Shredded pork, bamboo shoots, and mushrooms. Guangdong: Larger, with shrimp and vegetables. Sichuan: Spicy filling with Sichuan peppercorn. Northern China: Simple vegetable versions.",
    pronunciation:
      "Chūn juǎn (CHOON JWUHN) - Both tones rising. Practice: 'CHOON-JWUHN'.",
    when: "Spring Festival, particularly during the first week, and at Chinese New Year banquets.",
    withWhom:
      "Family members, guests at New Year gatherings, and children who love the crispy texture.",
    ordering:
      "'Wǒ yào chūn juǎn' (I want spring rolls). 'Lái yì pán' (Bring a plate). 'Yǒu ròu de ma?' (Do you have ones with meat?)",
    tips: [
      "Eat immediately while hot and crispy",
      "Dip in sweet chili sauce or vinegar",
      "Make your own at home for best freshness",
      "The crispier, the luckier (golden = wealth)",
      "Often served as appetizer before main dishes",
    ],
    variations: [
      "Vegetable only (素春卷): popular with Buddhists",
      "Shrimp and pork (鲜虾春卷): Cantonese style",
      "Large (大春卷): Guangdong, multi-fillings",
      "Small (春卷丝): bite-sized appetizers",
    ],
    taboo: [
      "Don't eat soft spring rolls—symbolizes losing wealth",
      "Don't skip them at New Year—wealth luck is lost",
    ],
    related: "Fried dumplings (炸饺子) - Another fried prosperity food",
    tags: ["Crispy", "Wealth", "Appetizer", "Golden"],
    color: "from-yellow-400 to-orange-400",
    emoji: "🥖",
  },
};

export const festivals: FoodFestivalCollection = [
  {
    key: "spring",
    name: "Spring Festival",
    emoji: "🐉",
    link: "/festival/spring",
  },
  {
    key: "lantern",
    name: "Lantern Festival",
    emoji: "🏮",
    link: "/festival/lantern",
  },
  {
    key: "dragonboat",
    name: "Dragon Boat Festival",
    emoji: "🐉",
    link: "/festival/dragonboat",
  },
  {
    key: "midautumn",
    name: "Mid-Autumn Festival",
    emoji: "🌙",
    link: "/festival/midautumn",
  },
  {
    key: "laba",
    name: "Laba Festival",
    emoji: "🍚",
    link: "/tool/laba-porridge",
  },
  {
    key: "chongyang",
    name: "Double Ninth Festival",
    emoji: "🌼",
    link: "/tool/chrysanthemum-tea",
  },
];

export default { foodData, festivals };
