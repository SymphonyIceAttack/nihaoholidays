import { ArrowLeft, MapPin } from "lucide-react";
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
    title: "Spring Outing Planner - NihaoHolidays",
    description: "Plan your spring outing (踏青) for Shangsi Festival",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/spring-outing`,
      languages: generateHreflangLinks("/tool/spring-outing"),
    },
  };
}

export default async function SpringOutingPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/shangsi`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shangsi Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🚶‍♂️🌸</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Spring Outing Planner
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Plan your perfect spring outing (踏青) to embrace nature and
              renewal during Shangsi Festival.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">What is Spring Outing?</h2>
              <p className="text-muted-foreground mb-4">
                Spring outing, or &quot;踏青&quot; (tà qīng), is the tradition of
                walking in nature during early spring to enjoy the warming
                weather and emerging greenery. This practice dates back over
                2,000 years to Shangsi Festival.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Embrace the energy of returning spring</li>
                <li>• Refresh your mind and body in nature</li>
                <li>• Bond with family and friends outdoors</li>
                <li>• Appreciate the beauty of awakening nature</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Best Activities</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🌸 Flower Viewing</h3>
                  <p className="text-sm text-muted-foreground">
                    Visit gardens to see plum blossoms, peach blossoms, and
                    camellias in bloom
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🚶 Nature Walks</h3>
                  <p className="text-sm text-muted-foreground">
                    Gentle hikes on trails to appreciate spring scenery
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">🧧 Picnics</h3>
                  <p className="text-sm text-muted-foreground">
                    Outdoor meals with traditional spring foods
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="font-medium mb-2">📸 Photography</h3>
                  <p className="text-sm text-muted-foreground">
                    Capture the beauty of spring blossoms and landscapes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Traditional Foods to Bring</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>Spring pancakes:</strong> Symbol of spring renewal</li>
                <li>• <strong>Fresh fruits:</strong> Especially seasonal varieties</li>
                <li>• <strong>Tea:</strong> To enjoy with the scenery</li>
                <li>• <strong>Snack cakes:</strong> Traditional pastries</li>
                <li>• <strong>Hard-boiled eggs:</strong> Symbol of new life</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Best Locations</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>Parks:</strong> Local gardens and botanical gardens</li>
                <li>• <strong>Mountains:</strong> Gentle slopes for easy walking</li>
                <li>• <strong>Lakesides:</strong> Scenic waterfront views</li>
                <li>• <strong>Temples:</strong> Historic sites with beautiful grounds</li>
                <li>• <strong>Countryside:</strong> Rural areas with wildflowers</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Preparation Tips</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Check the weather forecast</li>
                <li>• Wear comfortable walking shoes</li>
                <li>• Bring sun protection (hat, sunscreen)</li>
                <li>• Pack plenty of water</li>
                <li>• Bring a blanket for sitting</li>
                <li>• Leave no trace - respect nature</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Embrace Renewal</h2>
            <p className="text-muted-foreground">
              Spring outing is more than just a walk - it&apos;s a celebration of
              life&apos;s renewal. Step outside, breathe the fresh spring air,
              and welcome the new season with an open heart.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
