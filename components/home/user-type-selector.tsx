"use client";

import { Briefcase, ChevronRight, GraduationCap, Plane } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const userTypes = [
  {
    id: "tourist",
    label: "I'm visiting",
    icon: Plane,
    description: "Experience the holiday atmosphere",
    scenario: "Generate a Spring Festival day itinerary + survival phrases",
  },
  {
    id: "student",
    label: "I'm studying",
    icon: GraduationCap,
    description: "Deeply understand cultural meaning",
    scenario:
      "Social scripts and expressions for celebrating with roommates/classmates",
  },
  {
    id: "worker",
    label: "I'm working here",
    icon: Briefcase,
    description: "Appropriate workplace expressions",
    scenario: "Templates for company parties, gift-giving, and greeting bosses",
  },
];

export function UserTypeSelector() {
  const [selected, setSelected] = useState("tourist");
  const selectedType = userTypes.find((t) => t.id === selected);

  return (
    <div className="mb-10">
      <h2 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-rose-500" />
        Which type of user are you?
      </h2>
      <div className="flex flex-wrap gap-3 mb-4">
        {userTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => setSelected(type.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-200 cursor-pointer",
                selected === type.id
                  ? "bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 shadow-sm"
                  : "bg-background dark:bg-zinc-800 border-border text-muted-foreground hover:border-rose-200 dark:hover:border-rose-700 hover:bg-rose-50/50 dark:hover:bg-rose-900/20",
              )}
            >
              <Icon className="h-4 w-4 text-rose-500 dark:text-rose-400" />
              <span className="text-sm font-medium">{type.label}</span>
            </button>
          );
        })}
      </div>

      {selectedType && (
        <div className="bg-gradient-to-r from-rose-50/80 dark:from-rose-900/20 to-orange-50/30 dark:to-orange-900/10 border border-rose-100 dark:border-rose-800/50 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-all duration-300 cursor-pointer group">
          <div>
            <p className="text-xs text-muted-foreground mb-1">
              Your personalized scenario
            </p>
            <p className="text-sm font-medium text-foreground group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
              {selectedType.scenario}
            </p>
          </div>
          <div className="p-2 rounded-full bg-white/50 dark:bg-white/5 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
            <ChevronRight className="h-5 w-5 text-rose-400 dark:text-rose-500" />
          </div>
        </div>
      )}
    </div>
  );
}
