import { Calendar, Clock } from "lucide-react";

interface FestivalHeroProps {
  name: string;
  emoji: string;
  date: string;
  lunarDate: string;
  description: string;
}

export function FestivalHero({
  name,
  emoji,
  date,
  lunarDate,
  description,
}: FestivalHeroProps) {
  return (
    <div className="text-center mb-12">
      <span className="text-7xl mb-4 block animate-in fade-in slide-in-from-bottom-4">
        {emoji}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {name}
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-medium">{date}</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-medium">{lunarDate}</span>
        </div>
      </div>
    </div>
  );
}
