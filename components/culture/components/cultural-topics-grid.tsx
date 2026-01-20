import {
  GraduationCap,
  History,
  Landmark,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CulturalTopicsGridProps {
  history: string;
  customs: string[];
}

const culturalTopics = [
  {
    id: "origins",
    title: "Origins & Legends",
    description: "The fascinating stories behind each festival",
    icon: History,
    color: "amber",
  },
  {
    id: "significance",
    title: "Cultural Significance",
    description: "Why these traditions endure through millennia",
    icon: Landmark,
    color: "blue",
  },
  {
    id: "evolution",
    title: "Evolution Over Time",
    description: "How traditions have adapted through centuries",
    icon: Sparkles,
    color: "emerald",
  },
  {
    id: "regional",
    title: "Regional Variations",
    description: "How different regions celebrate differently",
    icon: MapPin,
    color: "purple",
  },
];

export function CulturalTopicsGrid({
  history,
  customs,
}: CulturalTopicsGridProps) {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <GraduationCap className="h-4 w-4" />
          Cultural Knowledge
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Understanding the Deeper Meaning
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explore the rich cultural context that makes each festival unique and
          meaningful.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {culturalTopics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Card
              key={topic.id}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      topic.color === "amber" &&
                        "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
                      topic.color === "blue" &&
                        "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                      topic.color === "emerald" &&
                        "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
                      topic.color === "purple" &&
                        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {topic.id === "origins" && (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The origins date back centuries, rooted in ancient
                      traditions, myths, and legends that have been passed down
                      through generations.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        Historical Background
                      </h4>
                      <p className="text-sm text-muted-foreground">{history}</p>
                    </div>
                  </div>
                )}
                {topic.id === "significance" && (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      This festival holds profound significance in Chinese
                      culture, representing values like family unity, respect
                      for ancestors, and hopes for the future.
                    </p>
                    <div className="space-y-2">
                      {customs.slice(0, 3).map((custom, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-rose-500">•</span>
                          <span className="text-muted-foreground">
                            {custom}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {topic.id === "evolution" && (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      From ancient rituals to modern celebrations, how people
                      observe this festival has evolved significantly over time
                      while maintaining core traditions.
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        Traditional practices blend with modern
                        adaptations—families may follow ancient customs while
                        incorporating new technologies and contemporary
                        celebrations.
                      </p>
                    </div>
                  </div>
                )}
                {topic.id === "regional" && (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      China&apos;s vast geography means each region celebrates
                      differently, with unique customs, foods, and traditions
                      that reflect local culture.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        Regional variations include different foods, timing, and
                        specific customs that make each celebration unique to
                        its location.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
