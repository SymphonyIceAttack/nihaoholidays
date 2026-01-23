import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations/config";

export function DragonBoatCulturePage({
  lang = "en",
}: {
  lang?: LanguageType;
} = {}) {
  const cultureContent = {
    title: "Dragon Boat Culture",
    subtitle: "The History and Traditions of Dragon Boat Festival",
    sections: [
      {
        title: "The Origins",
        emoji: "📜",
        content: [
          "Dragon Boat Festival, known as 端午节 (Duān Wǔ Jié) in Chinese, has been celebrated for over 2,000 years. It falls on the 5th day of the 5th lunar month.",
          "The festival originated from the commemoration of Qu Yuan, a beloved poet and statesman of the State of Chu during the Warring States period (475-221 BC).",
          "Qu Yuan was a brilliant scholar and minister who advocated for forming alliances with other states to resist the powerful Qin kingdom. However, he was exiled for his political views.",
          "When the Qin dynasty conquered Chu's capital, Qu Yuan drowned himself in the Miluo River out of despair and loyalty to his homeland.",
        ],
      },
      {
        title: "Dragon Boat Racing",
        emoji: "🚣",
        content: [
          "Dragon boat racing is the most exciting activity of the festival. The boats are decorated with dragon heads and tails, representing the legendary creature that controls water.",
          "Each boat typically has 20-22 paddlers, a drummer to keep rhythm, and a steerperson at the rear. The drummer's beat helps synchronize the paddling.",
          "Modern dragon boat racing has become an international sport, with competitions held worldwide. The sport emphasizes teamwork, coordination, and spirit.",
          "The boats range from 10 to 30 meters in length, with the most competitive boats being around 12 meters with 22 paddlers plus crew.",
        ],
      },
      {
        title: "Zongzi Tradition",
        emoji: "🍙",
        content: [
          "Zongzi (粽子) are pyramid-shaped dumplings made of glutinous rice wrapped in bamboo leaves. They are a staple food during Dragon Boat Festival.",
          "According to legend, zongzi were thrown into the river to prevent fish from eating Qu Yuan's body. Today, they are a beloved seasonal treat.",
          "Regional variations abound: northern China prefers sweet red bean or date fillings, while southern regions offer savory pork, egg yolk, and mushroom fillings.",
          "Making zongzi is often a family activity, with older generations passing down recipes and techniques to younger family members.",
        ],
      },
      {
        title: "Protective Traditions",
        emoji: "🌿",
        content: [
          "Ancient customs believed the 5th lunar month was a time of disease and evil spirits. Families would hang mugwort (艾草) and calamus to ward off bad luck.",
          "Children would wear perfume pouches (香囊) filled with medicinal herbs to protect against illness and evil influences.",
          "Some families would drink realgar wine (雄黄酒), believed to neutralize toxins and ward off snakes and scorpions.",
          "These traditions reflect ancient Chinese beliefs about the duality of nature and the importance of balance between yin and yang energies.",
        ],
      },
      {
        title: "Modern Celebrations",
        emoji: "🎉",
        content: [
          "Today, Dragon Boat Festival is a public holiday in China, Hong Kong, Macau, and Taiwan. Many Asian countries with Chinese communities also celebrate.",
          "The festival has been designated as an Intangible Cultural Heritage of Humanity by UNESCO, recognizing its cultural significance.",
          "Modern celebrations combine traditional activities with cultural performances, family gatherings, and community events.",
          "Many people also use the three-day holiday to travel and spend time with family, continuing the spirit of reunion.",
        ],
      },
    ],
    activities: [
      { name: "Watch dragon boat races", emoji: "👀" },
      { name: "Make or eat zongzi", emoji: "🍚" },
      { name: "Hang mugwort at home", emoji: "🌿" },
      { name: "Learn about Qu Yuan's poetry", emoji: "📖" },
      { name: "Visit family and friends", emoji: "👨‍👩‍👧" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">🐉</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              {cultureContent.title}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {cultureContent.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {cultureContent.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{section.emoji}</span>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-teal-100/80 to-cyan-100/80 dark:from-teal-900/30 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Ways to Celebrate
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cultureContent.activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white/60 dark:bg-zinc-800/60 rounded-xl"
                >
                  <span className="text-2xl">{activity.emoji}</span>
                  <span className="text-sm">{activity.name}</span>
                </div>
              ))}
            </div>
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
