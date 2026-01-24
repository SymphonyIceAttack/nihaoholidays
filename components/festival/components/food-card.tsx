import { Star } from "lucide-react";

interface Food {
  name: string;
  emoji: string;
  meaning: string;
  description: string;
  howToOrder?: string;
}

interface FoodCardProps {
  food: Food;
}

export function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="p-4 rounded-xl aurora-card hover-glow transition-all duration-300">
      <div className="flex items-start gap-3">
        <span className="text-3xl">{food.emoji}</span>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground font-serif">
            {food.name}
          </h4>
          <p className="text-sm text-muted-foreground mb-2">
            {food.description}
          </p>
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-3 w-3 text-amber-500" />
            <span className="text-xs text-amber-700 dark:text-amber-300 font-medium">
              Meaning: {food.meaning}
            </span>
          </div>
          {food.howToOrder && (
            <p className="text-xs p-2 rounded aurora-card text-muted-foreground font-mono">
              {food.howToOrder}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
