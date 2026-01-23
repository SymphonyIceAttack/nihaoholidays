import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import type { LanguageType } from "@/lib/translations/config";
import { supportedLocales } from "@/lib/translations/config";
import { generateHreflangLinks } from "@/lib/translations/hreflang";

export function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: "Spring Festival Prep List - NihaoHolidays",
    description: "Everything you need to prepare for Chinese New Year",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/spring-prep`,
      languages: generateHreflangLinks("/tool/spring-prep"),
    },
  };
}

export default async function SpringPrepPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  const prepItems = [
    {
      category: "Cleaning & Decorations",
      icon: "🧹",
      items: [
        {
          name: "Deep clean your home",
          desc: "Sweep away bad luck, do this before New Year's Eve",
        },
        { name: "Buy new brooms", desc: "Old brooms sweep away good luck" },
        {
          name: "Put up decorations",
          desc: "Red couplets, paper cuttings, and lanterns",
        },
        {
          name: "Display flowers",
          desc: "Plum blossoms and narcissus are popular choices",
        },
      ],
    },
    {
      category: "Food & Cooking",
      icon: "🥟",
      items: [
        {
          name: "Stock pantry ingredients",
          desc: "Rice, oil, spices, and festive foods",
        },
        {
          name: "Prepare dumpling filling",
          desc: "Make and freeze ahead of time",
        },
        { name: "Buy fish and meat", desc: "Essential for reunion dinner" },
        {
          name: "Stock up on snacks",
          desc: "For visiting relatives and guests",
        },
        {
          name: "Prepare red envelope money",
          desc: "New bills in red envelopes for family",
        },
      ],
    },
    {
      category: "Clothing & Gifts",
      icon: "👔",
      items: [
        {
          name: "Buy new clothes",
          desc: "Preferably in red or other lucky colors",
        },
        { name: "Get a haircut", desc: "Don't cut hair on New Year's Day!" },
        {
          name: "Prepare gifts",
          desc: "Food, tea, and other gifts for visits",
        },
        { name: "Pack for travel", desc: "If visiting family in another city" },
      ],
    },
    {
      category: "Financial & Work",
      icon: "💼",
      items: [
        { name: "Settle debts", desc: "Pay off any debts before the New Year" },
        {
          name: "Complete year-end work",
          desc: "Finish tasks before holiday break",
        },
        {
          name: "Plan holiday schedule",
          desc: "Know when you'll visit which relatives",
        },
        { name: "Set out RMB change", desc: "For red envelopes and tips" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/spring`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Spring Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🧧</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Spring Festival Prep List
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your comprehensive guide to preparing for Chinese New Year. Start
              early to ensure a smooth and prosperous celebration.
            </p>
          </div>

          <div className="grid gap-6">
            {prepItems.map((section, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h2 className="text-xl font-semibold">{section.category}</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="border-l-2 border-rose-200 dark:border-rose-800 pl-4"
                    >
                      <h3 className="font-medium text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-rose-100/80 to-orange-100/80 dark:from-rose-900/30 dark:to-orange-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">When to Start</h2>
            <p className="text-muted-foreground">
              Begin preparations 2-3 weeks before Chinese New Year. The cleaning
              should be done before New Year&apos;s Eve, and avoid cleaning on
              the first day of the New Year to avoid sweeping away good luck!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
