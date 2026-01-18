"use client";

import {
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  History,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { festivalData, userTypeData } from "@/components/festival/data/festival-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { translate } from "@/lib/translations";

const cultureTopics = [
  {
    id: "history",
    title: "History & Origins",
    description: "The rich history behind each festival",
    icon: History,
    color: "rose",
  },
  {
    id: "significance",
    title: "Cultural Significance",
    description: "Why these traditions matter today",
    icon: BookOpen,
    color: "blue",
  },
  {
    id: "evolution",
    title: "Modern Evolution",
    description: "How traditions have adapted over time",
    icon: Sparkles,
    color: "emerald",
  },
];

interface CultureDetailContentProps {
  lang: "en";
  festivalId: string;
  userType: string;
}

export function CultureDetailContent({ lang, festivalId, userType }: CultureDetailContentProps) {
  const currentFestivalId = festivalId || "spring";
  const currentUserType = userType || "tourist";
  const t = (key: string, params?: Record<string, string>) => translate(key, lang, params);

  const festival = festivalData[currentFestivalId] || festivalData.spring;
  const userData = userTypeData[currentUserType] || userTypeData.tourist;

  const userTypeScenarios = festival.scenarios?.[currentUserType as keyof typeof festival.scenarios] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        {/* Festival Hero */}
        <div className="text-center mb-12">
          <span className="text-7xl mb-4 block animate-in fade-in slide-in-from-bottom-4">
            {festival.emoji}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {festival.name} - Cultural Overview
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            Deep dive into the history, significance, and cultural meaning of this traditional festival.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">{festival.date}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{festival.lunarDate}</span>
            </div>
          </div>
        </div>

        {/* User Context */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className={`rounded-2xl p-6 ${userData.backgroundColor} border`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{userData.icon}</span>
              <div>
                <h3 className="font-semibold text-foreground">
                  Learning as a {userData.label}
                </h3>
                <p className="text-sm text-muted-foreground">{userData.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {userData.focusContent.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-background/60 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* User-Type Specific Scenarios */}
        {userTypeScenarios.length > 0 && (
          <section className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-6">
              <div className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4",
                userData.color === "rose" && "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
                userData.color === "blue" && "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
                userData.color === "emerald" && "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
              )}>
                <MessageCircle className="h-4 w-4" />
                Practical Scenarios for {userData.label}s
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Real-World Application
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Essential phrases and situations you may encounter as a {userData.label.toLowerCase()}.
              </p>
            </div>

            <div className="grid gap-6">
              {userTypeScenarios.map((scenario, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "rounded-2xl p-6 border",
                    userData.color === "rose" && "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800",
                    userData.color === "blue" && "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
                    userData.color === "emerald" && "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
                  )}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {scenario.content}
                  </p>
                  <div className="space-y-2">
                    {scenario.phrases.map((phrase, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-background/60 rounded-lg p-3 text-sm"
                      >
                        <div className="font-medium text-foreground">{phrase.chinese}</div>
                        <div className="text-muted-foreground text-xs">{phrase.pinyin}</div>
                        <div className="text-muted-foreground text-xs">{phrase.english}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Culture Topics */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="h-4 w-4" />
              Cultural Knowledge
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Explore the Deeper Meaning
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Understanding the cultural context helps you appreciate and participate in festivities more authentically.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {cultureTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.id}
                  className="relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-${topic.color}-100 dark:bg-${topic.color}-900/30`}
                  >
                    <Icon className={`h-7 w-7 text-${topic.color}-600 dark:text-${topic.color}-400`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Historical Background */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                <History className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Historical Background
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {festival.history}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customs & Traditions */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Customs & Traditions
            </h3>
            <p className="text-muted-foreground">
              Traditional practices that define this festival
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {festival.customs.map((custom, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-600 dark:text-rose-400 font-medium">
                    {i + 1}
                  </span>
                </span>
                <span className="text-foreground">{custom}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Taboos & Considerations */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Cultural Taboos & Considerations
            </h3>
            <p className="text-muted-foreground">
              Important things to avoid during this festival
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {festival.taboo.map((taboo, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30"
              >
                <span className="text-xl">⚠️</span>
                <span className="text-foreground">{taboo}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="flex-1"
          >
            <Link href={`/${lang}/festival/${currentFestivalId}/${currentUserType}`}>
              {t("quiz.backToFestival")}
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="flex-1 bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20"
          >
            <Link href={`/${lang}/quiz/${currentFestivalId}/${currentUserType}`}>
              {t("quiz.takeQuiz")}
              <Sparkles className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
