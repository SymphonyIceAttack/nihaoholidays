import { Calendar, Clock } from "lucide-react";

interface CultureHeroProps {
  name: string;
  emoji: string;
  date: string;
  lunarDate: string;
}

export function CultureHero({
  name,
  emoji,
  date,
  lunarDate,
}: CultureHeroProps) {
  return (
    <div className="text-center mb-12 relative">
      {/* Aurora background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl mx-auto">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-aurora-1 rounded-full blur-3xl animate-aurora" />
          <div
            className="absolute top-10 right-1/3 w-56 h-56 bg-aurora-3 rounded-full blur-3xl animate-aurora"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <span className="text-7xl mb-4 block animate-in fade-in slide-in-from-bottom-4 relative">
        {emoji}
        <span className="absolute inset-0 text-7xl blur-xl opacity-30 animate-pulse">
          {emoji}
        </span>
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif animate-in fade-in slide-in-from-bottom-4 duration-500">
        {name}
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        Cultural Overview
      </p>

      <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
        <div className="aurora-card flex items-center gap-2 px-4 py-2 text-rose-700 dark:text-rose-300">
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-medium">{date}</span>
        </div>
        <div className="aurora-card flex items-center gap-2 px-4 py-2 text-amber-700 dark:text-amber-300">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-medium">{lunarDate}</span>
        </div>
      </div>
    </div>
  );
}
