import {
  ArrowRight,
  ChefHat,
  Gift,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const featuredTools = [
  {
    id: "menu-builder",
    icon: ChefHat,
    title: "New Year's Eve Menu Assistant",
    description:
      "Enter number of people and preferences, get an authentic Spring Festival dinner menu with dish introductions and ordering phrases.",
    color: "orange",
    badge: "Popular",
    festival: "Spring Festival",
  },
  {
    id: "greeting-generator",
    icon: MessageCircle,
    title: "Holiday Greeting Generator",
    description:
      "Generate appropriate Chinese greetings based on the recipient (elder/colleague/friend) and occasion, with pinyin and explanations.",
    color: "blue",
    badge: "AI-powered",
    festival: "All",
  },
  {
    id: "gift-guide",
    icon: Gift,
    title: "Gift-giving Guide",
    description: "Understand Chinese gift-giving taboos and customs to avoid awkward situations and choose the most appropriate gifts.",
    color: "purple",
    festival: "All",
  },
  {
    id: "city-guide",
    icon: MapPin,
    title: "Festival City Guide",
    description:
      "Check out holiday activities, special foods, and must-visit spots in major cities to plan your holiday trip.",
    color: "emerald",
    badge: "New",
    festival: "All",
  },
];

const colorMap = {
  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-100 text-orange-600",
    hover: "hover:border-orange-200",
  },
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-600",
    hover: "hover:border-blue-200",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "bg-purple-100 text-purple-600",
    hover: "hover:border-purple-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-600",
    hover: "hover:border-emerald-200",
  },
};

export function FeaturedTools() {
  return (
    <section className="py-16 bg-muted/20" id="tools">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-amber-600 px-3 py-1 rounded-full text-sm font-medium mb-4 shadow-sm border border-amber-100">
              <Sparkles className="h-4 w-4" />
              <span>Practical tools</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Scenario-based toolbox
            </h2>
            <p className="text-muted-foreground max-w-lg">
              We don't just tell you "what"—we help you solve "how". Every tool is designed for real scenarios.
            </p>
          </div>
          <Button
            variant="outline"
            className="gap-2 w-fit bg-transparent hover:bg-amber-50 hover:border-amber-200 transition-all duration-200"
          >
            View all tools
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;
            const colors = colorMap[tool.color as keyof typeof colorMap];
            return (
              <Card
                key={tool.id}
                className={cn(
                  "overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer",
                  colors.hover,
                )}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-shadow",
                        colors.icon,
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-semibold text-foreground group-hover:text-rose-600 transition-colors">
                          {tool.title}
                        </h3>
                        {tool.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {tool.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-rose-500" />
                          Applicable festival: {tool.festival}
                        </span>
                        <div className="p-1.5 rounded-full bg-muted group-hover:bg-rose-100 transition-colors">
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-rose-600 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
