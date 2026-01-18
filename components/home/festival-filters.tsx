"use client";

import { Briefcase, Filter, GraduationCap, Plane } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = {
  theme: [
    { id: "all", label: "All festivals" },
    { id: "family", label: "Family reunion" },
    { id: "food", label: "Food-focused" },
    { id: "romance", label: "Romantic" },
  ],
  difficulty: [
    { id: "all", label: "All levels" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
  ],
  userType: [
    { id: "tourist", label: "I'm visiting", icon: Plane },
    { id: "student", label: "I'm studying", icon: GraduationCap },
    { id: "worker", label: "I'm working here", icon: Briefcase },
  ],
};

export function FestivalFilters() {
  const [theme, setTheme] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [userType, setUserType] = useState("tourist");

  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        <span>Filter festivals</span>
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex flex-wrap gap-2">
          {filters.theme.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTheme(item.id)}
              className={cn(
                "px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer",
                theme === item.id
                  ? "bg-foreground text-background shadow-sm dark:shadow-lg"
                  : "bg-secondary dark:bg-zinc-800 text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-zinc-700",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="h-6 w-px bg-border hidden sm:block" />

        <div className="flex flex-wrap gap-2">
          {filters.difficulty.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setDifficulty(item.id)}
              className={cn(
                "px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer",
                difficulty === item.id
                  ? "bg-foreground text-background shadow-sm dark:shadow-lg"
                  : "bg-secondary dark:bg-zinc-800 text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-zinc-700",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="h-6 w-px bg-border hidden sm:block" />

        <div className="flex flex-wrap gap-2">
          {filters.userType.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setUserType(item.id)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5",
                  userType === item.id
                    ? "bg-rose-500 text-white shadow-sm"
                    : "bg-secondary dark:bg-zinc-800 text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-zinc-700",
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
