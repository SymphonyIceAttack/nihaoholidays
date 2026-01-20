import { Heart, History, Lightbulb, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LanguageType } from "@/lib/translations";
import { cn } from "@/lib/utils";

const translations: Record<LanguageType, Record<string, string | string[]>> = {
  en: {
    "about.hero.title": "About NihaoHolidays",
    "about.hero.subtitle":
      "Your trusted guide to understanding and celebrating Chinese festivals",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "We believe that understanding a culture's festivals is the fastest way to connect with its people. Our mission is to help non-Chinese speakers go from observers to participants—from understanding what festivals are, to knowing exactly what to say, what to do, and how to celebrate like a local.",
    "about.story.title": "Our Story",
    "about.story.paragraph1":
      "NihaoHolidays was born from a simple observation: while there are countless resources explaining what Chinese festivals are, there's a lack of practical guides that answer the real questions foreigners have.",
    "about.story.paragraph2":
      '"What should I say to my Chinese colleague on Chinese New Year?" "What gift should I bring to a family dinner?" "How do I order traditional festival foods?" These are the questions our founders asked when they first experienced Chinese festivals abroad.',
    "about.story.paragraph3":
      "We created NihaoHolidays to bridge this gap—transforming cultural knowledge into actionable guidance that helps you celebrate with confidence and respect.",
    "about.values.title": "Our Values",
    "about.values.authenticity": "Authenticity",
    "about.values.authenticity.description":
      "We provide accurate, culturally grounded information verified by native speakers.",
    "about.values.practicality": "Practicality",
    "about.values.practicality.description":
      "We focus on real scenarios and actionable advice, not abstract cultural theory.",
    "about.values.inclusivity": "Inclusivity",
    "about.values.inclusivity.description":
      "We welcome everyone curious about Chinese culture, regardless of background or language level.",
    "about.values.continuous": "Continuous Improvement",
    "about.values.continuous.description":
      "We listen to user feedback and constantly improve our content and tools.",
    "about.team.title": "Meet the Team",
    "about.team.description":
      "Our team combines expertise in Chinese culture, education technology, and user experience design.",
    "about.team.coming":
      "We're building our team. Interested in collaborating? Contact us!",
  },
};

const values = [
  {
    icon: Heart,
    key: "authenticity",
    color: "from-rose-400 to-rose-600",
  },
  {
    icon: Lightbulb,
    key: "practicality",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Users,
    key: "inclusivity",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: History,
    key: "continuous",
    color: "from-blue-400 to-blue-600",
  },
];

export function AboutContent({ lang }: { lang: LanguageType }) {
  const t = translations[lang];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            {t["about.hero.title"]}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t["about.hero.subtitle"]}
          </h1>
        </div>

        {/* Mission */}
        <section className="mb-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t["about.mission.title"]}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            {t["about.mission.description"]}
          </p>
        </section>

        {/* Story */}
        <section className="mb-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t["about.story.title"]}
            </h2>
          </div>
          <div className="prose prose-muted mx-auto">
            <p className="text-muted-foreground mb-4">
              {t["about.story.paragraph1"]}
            </p>
            <p className="text-muted-foreground mb-4 italic border-l-2 border-rose-200 pl-4">
              {t["about.story.paragraph2"]}
            </p>
            <p className="text-muted-foreground">
              {t["about.story.paragraph3"]}
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t["about.values.title"]}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.key}
                  className="text-center group hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br text-white mb-3 mx-auto shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1",
                        value.color
                          .replace("from-", "bg-gradient-to-br from-")
                          .replace(" to-", " to-"),
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">
                      {t[`about.values.${value.key}`]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {t[`about.values.${value.key}.description`]}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t["about.team.title"]}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t["about.team.description"]}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {t["about.team.coming"]}
          </div>
        </section>
      </div>
    </div>
  );
}
