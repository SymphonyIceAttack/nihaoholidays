import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TaboosSectionProps {
  taboo: string[];
}

export function TaboosSection({ taboo }: TaboosSectionProps) {
  return (
    <section className="max-w-4xl mx-auto mb-12">
      <Card className="aurora-card border-red-200 dark:border-red-900/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/20">
              <span className="text-xl text-white">!</span>
            </div>
            <div>
              <CardTitle className="font-serif">
                Cultural Taboos & Considerations
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Important cultural sensitivities to observe
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {taboo.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {taboo.map((tabooItem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-xl flex-shrink-0">🚫</span>
                  <span className="text-foreground">{tabooItem}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-4">
              No specific cultural taboos recorded for this festival.
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
