"use client";

import {
  BookOpen,
  ChevronRight,
  GraduationCap,
  HelpCircle,
  MessageSquare,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  festivalData,
  userTypeData,
} from "@/components/festival/data/festival-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EtiquetteSection } from "./components/etiquette-section";
import { ExpressionCard } from "./components/expression-card";
import { FestivalFooter } from "./components/festival-footer";
import { FestivalHero } from "./components/festival-hero";
import { FoodCard } from "./components/food-card";
import { ToolsSection } from "./components/tools-section";
import { UserProfile } from "./components/user-profile";

interface FestivalDetailPageProps {
  lang: string;
  festivalId: string;
}

const userTypes = [
  { id: "tourist", label: "Tourist", icon: "✈" },
  { id: "student", label: "Student", icon: "🎓" },
  { id: "worker", label: "Worker", icon: "💼" },
] as const;

type UserType = (typeof userTypes)[number]["id"];

export function FestivalDetailPage({
  lang,
  festivalId,
}: FestivalDetailPageProps) {
  const [userType, setUserType] = useState<UserType>("tourist");

  const festival = festivalData[festivalId] || festivalData.spring;
  const userData = userTypeData[userType];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <FestivalHero
          name={festival.name}
          emoji={festival.emoji}
          date={festival.date}
          lunarDate={festival.lunarDate}
          description={festival.description}
        />

        {/* User Type Tabs */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-1.5 border">
            <div className="flex gap-1.5">
              {userTypes.map((type) => {
                const typeData = userTypeData[type.id];
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setUserType(type.id)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                      userType === type.id
                        ? "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                  >
                    <span>{typeData.icon}</span>
                    <span>{typeData.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <UserProfile
          label={userData.label}
          icon={userData.icon}
          backgroundColor={userData.backgroundColor}
          description={userData.description}
          focusContent={userData.focusContent}
        />
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Essential Phrases */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Essential Phrases
                </h2>
                <p className="text-sm text-muted-foreground">
                  {festival.expressions.length} expressions to learn
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {festival.expressions.map((expr, i) => (
                <ExpressionCard key={i} expression={expr} />
              ))}
            </div>
          </section>

          {/* Holiday Foods */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <Utensils className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Holiday Foods
                </h2>
                <p className="text-sm text-muted-foreground">
                  {festival.foods.length} traditional foods with ordering
                  phrases
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {festival.foods.map((food, i) => (
                <FoodCard key={i} food={food} />
              ))}
            </div>
          </section>

          {/* Etiquette Section */}
          <EtiquetteSection
            customs={festival.customs}
            taboo={festival.taboo}
            gifts={festival.gifts}
          />
        </div>

        {/* Tools Section */}
        <ToolsSection
          tools={festival.tools}
          lang={lang}
          festivalId={festivalId}
        />

        {/* Continue Learning Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Continue Your Learning Journey
            </h3>
            <p className="text-muted-foreground">
              Explore more ways to learn about {festival.name}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href={`/${lang}/culture/${festivalId}`}
              className="p-4 rounded-xl bg-gradient-to-br from-amber-100/80 to-orange-100/80 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-3">
                <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                Cultural Overview
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Deep dive into history, significance, and traditions
              </p>
              <span className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href={`/${lang}/quiz/${festivalId}`}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-100/80 to-pink-100/80 dark:from-purple-900/30 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-3">
                <HelpCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                Interactive Quiz
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Test your knowledge with a fun quiz
              </p>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Take quiz
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href={`/${lang}/learn`}
              className="p-4 rounded-xl bg-gradient-to-br from-blue-100/80 to-indigo-100/80 dark:from-blue-900/30 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3">
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                Explore Festivals
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Discover other Chinese festivals to learn
              </p>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Browse
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-xl mx-auto mt-12 text-center">
          <Button
            size="lg"
            asChild
            className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20"
          >
            <Link href={`/${lang}/learn`}>
              Continue Learning
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>
      <FestivalFooter />
    </div>
  );
}
