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
    title: "Love Letter Templates - NihaoHolidays",
    description: "Express your love with traditional Chinese romance phrases",
    alternates: {
      canonical: `${siteConfig.siteUrl}/${lang}/tool/qixi-blessings`,
      languages: generateHreflangLinks("/tool/qixi-blessings"),
    },
  };
}

export default async function QixiBlessingsPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;

  const templates = [
    {
      occasion: "First Meeting",
      chinese: "初次见面，便已倾心",
      pinyin: "Chū cì jiàn miàn, biàn yǐ qīng xīn",
      english: "From our first meeting, my heart was captured",
    },
    {
      occasion: "Expressing Love",
      chinese: "执子之手，与子偕老",
      pinyin: "Zhí zǐ zhī shǒu, yǔ zǐ xié lǎo",
      english: "Hold your hand, grow old with you",
    },
    {
      occasion: "Miss You",
      chinese: "一日不见，如隔三秋",
      pinyin: "Yī rì bú jiàn, rú gé sān qiū",
      english: "One day apart feels like three autumns",
    },
    {
      occasion: "Forever Love",
      chinese: "天长地久，海枯石烂",
      pinyin: "Tiān cháng dì jiǔ, hǎi kū shí làn",
      english: "As long as the mountains and seas endure",
    },
    {
      occasion: "七夕祝福",
      chinese: "愿天下有情人终成眷属",
      pinyin: "Yuàn tiān xià yǒu qíng rén zhōng chéng juàn shǔ",
      english: "May all lovers in the world be united",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${lang}/festival/qixi`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Qixi Festival
          </Link>

          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">💕</span>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Love Letter Templates
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Express your feelings with these romantic Chinese phrases for Qixi
              Festival.
            </p>
          </div>

          <div className="grid gap-4">
            {templates.map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border-l-4 border-pink-400"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600">
                    {t.occasion}
                  </span>
                </div>
                <p className="text-2xl font-medium text-foreground mb-2">
                  {t.chinese}
                </p>
                <p className="text-sm text-muted-foreground italic mb-1">
                  {t.pinyin}
                </p>
                <p className="text-sm text-muted-foreground">{t.english}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-100/80 to-rose-100/80 dark:from-pink-900/30 dark:to-rose-900/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Watch the Stars</h2>
            <p className="text-muted-foreground">
              On Qixi night, look for Vega and Altair - the Cowherd and Weaver
              Girl stars. Make a wish together!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
