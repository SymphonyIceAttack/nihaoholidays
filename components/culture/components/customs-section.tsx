import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomsSectionProps {
  customs: string[];
}

export function CustomsSection({ customs }: CustomsSectionProps) {
  return (
    <section className="max-w-4xl mx-auto mb-12">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <CardTitle>Traditional Customs & Practices</CardTitle>
              <p className="text-sm text-muted-foreground">
                The rituals and traditions that define this festival
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {customs.map((custom, i) => (
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
        </CardContent>
      </Card>
    </section>
  );
}
