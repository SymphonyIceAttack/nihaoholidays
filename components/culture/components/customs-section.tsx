import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomsSectionProps {
  customs: string[];
}

export function CustomsSection({ customs }: CustomsSectionProps) {
  return (
    <section className="max-w-4xl mx-auto mb-12">
      <Card className="aurora-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="font-serif">
                Traditional Customs & Practices
              </CardTitle>
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
                className="flex items-start gap-3 p-4 rounded-xl aurora-card hover-glow transition-all duration-300 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center flex-shrink-0 text-white font-medium shadow-md">
                  {i + 1}
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
