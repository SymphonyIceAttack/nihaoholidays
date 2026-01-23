import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

const dateSpots = [
  {
    name: "Qianmen Street",
    location: "Beijing",
    description: "Historic street with traditional architecture, perfect for evening strolls under lanterns",
    atmosphere: "Traditional & Romantic",
    emoji: "🏮",
  },
  {
    name: "West Lake",
    location: "Hangzhou",
    description: "Legendary lake where the Cowherd and Weaver Girl meet, with beautiful moon reflections",
    atmosphere: "Legendary & Peaceful",
    emoji: "🌙",
  },
  {
    name: "The Bund",
    location: "Shanghai",
    description: "Stunning skyline views across the Huangpu River, perfect for photography",
    atmosphere: "Modern & Glamorous",
    emoji: "🌃",
  },
  {
    name: "Gulangyu Island",
    location: "Xiamen",
    description: "Piano island with colonial architecture and romantic sunset views",
    atmosphere: "Artistic & Tranquil",
    emoji: "🎹",
  },
  {
    name: "Tiger Hill",
    location: "Suzhou",
    description: "Ancient hill with the famous Sword Pool reflecting the moon",
    atmosphere: "Historic & Poetic",
    emoji: "🗡️",
  },
  {
    name: "Yuyuan Garden",
    location: "Shanghai",
    description: "Classical Chinese garden with lanterns and moon viewing pavilions",
    atmosphere: "Classical & Elegant",
    emoji: "🏯",
  },
];

const activities = [
  { name: "Moon gazing", emoji: "👀" },
  { name: "Lantern walking", emoji: "🏮" },
  { name: "Stargazing", emoji: "⭐" },
  { name: "River cruising", emoji: "🚢" },
  { name: "Photo taking", emoji: "📷" },
  { name: "Tea tasting", emoji: "🍵" },
];

export function QixiDateSpotsPage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">💕</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Qixi Date Spot Recommendations
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Romantic destinations to celebrate China&apos;s traditional
              Valentine&apos;s Day. Create magical memories with your loved one!
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-100/80 to-rose-100/80 dark:from-pink-900/30 dark:to-rose-900/20 border border-pink-200 dark:border-pink-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <span className="text-xl">🌟</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  The Cowherd and Weaver Girl
                </h3>
                <p className="text-sm text-muted-foreground">
                  The love story behind Qixi Festival
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Qixi Festival, known as Chinese Valentine&apos;s Day, celebrates
                the love story of Niulang (the Cowherd) and Zhinü (the Weaver
                Girl). According to legend, they were separated by the Milky Way
                and can only meet once a year on the 7th day of the 7th lunar
                month.
              </p>
              <p>
                Today, couples celebrate this romantic festival by spending time
                together, making wishes, and enjoying romantic activities.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {dateSpots.map((spot, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{spot.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{spot.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600">
                        {spot.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {spot.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {spot.atmosphere}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Romantic Activities
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl"
                >
                  <span className="text-2xl">{activity.emoji}</span>
                  <span className="text-sm">{activity.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool/qixi-blessings`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Qixi Blessings
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/tool`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tools
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground"></div>
      </footer>
    </div>
  );
}
