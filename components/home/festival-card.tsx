import {
  BookOpen,
  ChefHat,
  Gamepad2,
  Gift,
  MessageCircle,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { FestivalWithDisplayInfo } from "@/lib/festivals";
import { translations } from "@/lib/translations";
import type { LanguageType } from "@/lib/translations/config";
import { cn } from "@/lib/utils";

const toolIcons = {
  food: ChefHat,
  expression: MessageCircle,
  gift: Gift,
  other: BookOpen,
};

const toolHref: Record<string, string> = {
  "Design a New Year's Eve Feast": "{lang}/tool/menu",
  "New Year Greeting Generator": "{lang}/tool/greetings",
  "Red Envelope Guide": "{lang}/tool/red-envelope",
  "Lantern Riddles Game": "{lang}/tool/riddles",
  "Tangyuan Filling Guide": "{lang}/tool/tangyuan",
  "Qingming Traditions Guide": "{lang}/tool/qingming",
  "Ceremonial Expressions & Taboos": "{lang}/tool/qingming-etiquette",
  "Zongzi Flavor Guide": "{lang}/tool/zongzi",
  "Dragon Boat Festival Blessings": "{lang}/tool/dragon-boat-blessings",
  "Dragon Boat Culture Introduction": "{lang}/tool/dragon-boat-culture",
  "Qixi Blessings": "{lang}/tool/qixi-blessings",
  "Date Spot Recommendations": "{lang}/tool/qixi-dates",
  "Gift Guide": "{lang}/tool/qixi-gifts",
  "Choose a Mooncake Gift Box": "{lang}/tool/mooncake",
  "Mooncake Flavor Guide": "{lang}/tool/mooncake-flavor",
  "Mid-Autumn Blessing Templates": "{lang}/tool/mid-autumn-blessings",
  "Double Ninth Blessings": "{lang}/tool/chongyang-blessings",
  "Elder Respect Etiquette": "{lang}/tool/chongyang-etiquette",
  "North-South Food Differences": "{lang}/tool/winter-solstice-food",
  "Winter Solstice Blessings": "{lang}/tool/winter-solstice-blessings",
};

interface FestivalCardProps {
  festival: FestivalWithDisplayInfo;
  lang?: LanguageType;
}

export function FestivalCard({ festival, lang = "en" }: FestivalCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-rose-200/50">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {festival.isRecommended && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 gap-1 shadow-sm">
            <Star className="h-3 w-3 fill-current" />
            推荐
          </Badge>
        </div>
      )}

      <CardHeader className="relative pb-3">
        <div className="flex items-start gap-4">
          <div className="text-5xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            {festival.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-foreground group-hover:text-rose-600 transition-colors">
              {festival.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {festival.subtitle}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {festival.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {festival.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal hover:bg-secondary/80 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="pt-2 space-y-3">
          <Link href={`/${lang}/culture/${festival.id}`}>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 text-foreground bg-transparent hover:bg-rose-50 hover:border-rose-200 transition-all duration-200"
            >
              <div className="p-1 rounded-md bg-rose-50">
                <BookOpen className="h-4 w-4 text-rose-500" />
              </div>
              {translations[lang]["common.exploreCulture"]}
            </Button>
          </Link>

          <Link href={`/${lang}/quiz/${festival.id}`}>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 text-foreground bg-transparent hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-200"
            >
              <div className="p-1 rounded-md bg-emerald-50">
                <Gamepad2 className="h-4 w-4 text-emerald-500" />
              </div>
              {translations[lang]["common.playQuiz"]}
            </Button>
          </Link>

          <div className="pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-rose-400" />
              场景工具
            </p>
            <div className="flex flex-wrap gap-2">
              {festival.tools.map((tool) => {
                const Icon = toolIcons[tool.type];
                const href = toolHref[tool.name]
                  ? `/${lang}${toolHref[tool.name]}`
                  : `/${lang}/tool`;
                return (
                  <Link key={tool.name} href={href}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className={cn(
                        "gap-1.5 text-xs transition-all duration-200 hover:scale-105",
                        tool.type === "food" &&
                          "bg-orange-50 text-orange-700 border border-orange-100 hover:bg-orange-100",
                        tool.type === "expression" &&
                          "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100",
                        tool.type === "gift" &&
                          "bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-100",
                      )}
                    >
                      <Icon className="h-3 w-3" />
                      {tool.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
