import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { LanguageType } from "@/lib/translations/config";

export function PostCTA({ lang }: { lang: LanguageType }) {
  return (
    <Card className="mt-12 border-2 border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl shadow-sm">
      <CardContent className="py-12 px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Explore Chinese Culture
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Discover practical guides, cultural insights, and tips for celebrating
          Chinese festivals with confidence and respect.
        </p>
        <Link
          href={`/${lang}/learn`}
          className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
        >
          Start Learning →
        </Link>
      </CardContent>
    </Card>
  );
}
