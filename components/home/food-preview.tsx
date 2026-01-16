import { ArrowRight, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const featuredDishes = [
  {
    id: "dumplings",
    name: "饺子",
    pinyin: "jiǎo zi",
    english: "Dumplings",
    description: "Symbolizes wealth and reunion, a must-eat traditional food for Spring Festival",
    festival: "Spring Festival",
    image: "/chinese-dumplings.jpg",
    tags: ["Must-try", "Meaningful"],
  },
  {
    id: "tangyuan",
    name: "汤圆",
    pinyin: "tāng yuán",
    english: "Sweet Rice Balls",
    description: "Round shape symbolizes reunion, the signature food of Lantern Festival",
    festival: "Lantern Festival",
    image: "/tangyuan-sweet-rice-balls.jpg",
    tags: ["Dessert"],
  },
  {
    id: "zongzi",
    name: "粽子",
    pinyin: "zòng zi",
    english: "Rice Dumplings",
    description: "Glutinous rice wrapped in bamboo leaves, available in sweet and savory varieties",
    festival: "Dragon Boat Festival",
    image: "/zongzi-rice-dumplings.jpg",
    tags: ["Sweet & salty"],
  },
  {
    id: "mooncake",
    name: "月饼",
    pinyin: "yuè bǐng",
    english: "Mooncake",
    description: "Symbolizes reunion, an essential treat during Mid-Autumn Festival moon viewing",
    festival: "Mid-Autumn Festival",
    image: "/chinese-mooncake.jpg",
    tags: ["Great gift"],
  },
];

export function FoodPreview() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-orange-50/30 via-background to-background"
      id="food"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4 shadow-sm border border-orange-100">
              <Flame className="h-4 w-4" />
              <span>Holiday foods</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Experience Chinese culture through taste
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Every holiday dish has a story. Learn the names, understand the meanings, and know how to order.
            </p>
          </div>
          <Button
            variant="outline"
            className="gap-2 w-fit bg-transparent hover:bg-orange-50 hover:border-orange-200 transition-all duration-200"
          >
            Explore food guide
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish) => (
            <Card
              key={dish.id}
              className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border-orange-100/50"
            >
              <div className="aspect-square relative bg-orange-50/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-foreground text-xs shadow-sm">
                  {dish.festival}
                </Badge>
              </div>
              <div className="p-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-orange-600 transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-sm text-rose-500">{dish.pinyin}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  {dish.english}
                </p>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {dish.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal hover:bg-secondary/80 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
