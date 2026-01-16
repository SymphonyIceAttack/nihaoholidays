import { FestivalCard } from "@/components/home/festival-card";

const festivals = [
  {
    id: "spring",
    name: "春节",
    emoji: "🧧",
    subtitle: "关于团圆与年夜饭的节日",
    description:
      "中国最重要的传统节日，象征着辞旧迎新、阖家团圆。从年夜饭菜单到红包金额、祝福语到饭桌礼仪，全方位掌握。",
    tags: ["家庭团聚", "美食", "初学者"],
    isRecommended: true,
    tools: [
      { name: "点一桌年夜饭", type: "food" as const },
      { name: "拜年祝福语生成", type: "expression" as const },
      { name: "红包金额指南", type: "gift" as const },
    ],
  },
  {
    id: "lantern",
    name: "元宵节",
    emoji: "🏮",
    subtitle: "关于灯谜与汤圆的节日",
    description: "春节的尾声，赏花灯、猜灯谜、吃汤圆，感受最后的节日热闹氛围。",
    tags: ["家庭团聚", "初学者"],
    tools: [
      { name: "猜灯谜游戏", type: "other" as const },
      { name: "汤圆馅料图鉴", type: "food" as const },
    ],
  },
  {
    id: "qingming",
    name: "清明节",
    emoji: "🌿",
    subtitle: "关于追思与踏青的节日",
    description:
      "祭祖扫墓、缅怀先人，也是踏青郊游的好时节。了解祭祀礼仪与禁忌。",
    tags: ["中级学习者"],
    tools: [
      { name: "清明习俗指南", type: "other" as const },
      { name: "祭祀用语与禁忌", type: "expression" as const },
    ],
  },
  {
    id: "dragon-boat",
    name: "端午节",
    emoji: "🐉",
    subtitle: "关于屈原与粽子的节日",
    description:
      "纪念爱国诗人屈原，赛龙舟、包粽子、挂艾草，感受浓厚的民俗风情。",
    tags: ["美食", "中级学习者"],
    tools: [
      { name: "粽子口味图鉴", type: "food" as const },
      { name: "端午祝福语", type: "expression" as const },
      { name: "龙舟文化介绍", type: "other" as const },
    ],
  },
  {
    id: "qixi",
    name: "七夕",
    emoji: "💕",
    subtitle: "关于牛郎织女的节日",
    description: "中国传统情人节，源自牛郎织女的美丽传说。表达爱意的浪漫时刻。",
    tags: ["浪漫节日", "初学者"],
    tools: [
      { name: "七夕祝福语", type: "expression" as const },
      { name: "约会地点推荐", type: "other" as const },
      { name: "礼物选择指南", type: "gift" as const },
    ],
  },
  {
    id: "mid-autumn",
    name: "中秋节",
    emoji: "🥮",
    subtitle: "关于月亮与思念的节日",
    description:
      "赏月、吃月饼、思念远方亲人的团圆佳节，是仅次于春节的重要节日。",
    tags: ["家庭团聚", "美食", "初学者"],
    isRecommended: true,
    tools: [
      { name: "选一盒中秋礼盒", type: "gift" as const },
      { name: "月饼口味指南", type: "food" as const },
      { name: "中秋祝福模板", type: "expression" as const },
    ],
  },
  {
    id: "chongyang",
    name: "重阳节",
    emoji: "🏔",
    subtitle: "关于敬老与登高的节日",
    description: "农历九月初九，登高望远、敬老爱老的传统节日，也叫老年节。",
    tags: ["中级学习者"],
    tools: [
      { name: "重阳祝福语", type: "expression" as const },
      { name: "敬老礼仪", type: "other" as const },
    ],
  },
  {
    id: "winter-solstice",
    name: "冬至",
    emoji: "❄",
    subtitle: "关于饺子与汤圆的节日",
    description: "一年中白天最短的一天，北方吃饺子、南方吃汤圆，寓意团团圆圆。",
    tags: ["美食", "初学者"],
    tools: [
      { name: "南北饮食差异", type: "food" as const },
      { name: "冬至祝福语", type: "expression" as const },
    ],
  },
];

export function FestivalGrid() {
  return (
    <div className="space-y-6" id="festivals">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">节日列表</h2>
          <p className="text-sm text-muted-foreground mt-1">
            每个节日都配备完整的文化概览、互动测验和实用工具
          </p>
        </div>
        <span className="text-sm text-muted-foreground hidden sm:block">
          按农历时间排序
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {festivals.map((festival) => (
          <FestivalCard key={festival.id} festival={festival} />
        ))}
      </div>
    </div>
  );
}
