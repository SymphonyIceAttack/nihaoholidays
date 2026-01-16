"use client";

import { ArrowRight, Bell, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const upcomingFestivals = [
  {
    id: "spring-2026",
    name: "Spring Festival",
    date: "February 17, 2026",
    daysLeft: 33,
    emoji: "🧧",
    highlight: "Coming soon",
  },
  {
    id: "lantern-2026",
    name: "Lantern Festival",
    date: "March 3, 2026",
    daysLeft: 47,
    emoji: "🏮",
  },
  {
    id: "qingming-2026",
    name: "Qingming Festival",
    date: "April 5, 2026",
    daysLeft: 80,
    emoji: "🌿",
  },
];

export function UpcomingFestivals() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 text-rose-600 flex items-center justify-center shadow-sm">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Upcoming Festivals
              </h2>
              <p className="text-sm text-muted-foreground">
                Prepare ahead and don't miss any cultural experiences
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 w-fit bg-transparent hover:bg-rose-50 hover:border-rose-200 transition-all duration-200"
          >
            <div className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full" />
            </div>
            订阅节日提醒
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {upcomingFestivals.map((festival) => (
            <Card
              key={festival.id}
              className="p-4 flex items-center gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group border-rose-100/50 hover:border-rose-200"
            >
              <div className="text-4xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {festival.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground group-hover:text-rose-600 transition-colors">
                    {festival.name}
                  </h3>
                  {festival.highlight && (
                    <Badge className="bg-rose-100 text-rose-700 border-rose-200 text-xs animate-pulse">
                      {festival.highlight}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{festival.date}</p>
                <p className="text-xs text-rose-600 font-medium flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {festival.daysLeft} days left
                </p>
              </div>
              <div className="p-2 rounded-full bg-muted group-hover:bg-rose-100 transition-colors">
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-rose-600 transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
