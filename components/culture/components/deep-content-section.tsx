import { BookOpen, Lightbulb, MapPin, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { FestivalBasicInfo } from "@/lib/translations/schema/festival-data";

interface DeepContentSectionProps {
  basicInfo: FestivalBasicInfo;
}

export function DeepContentSection({ basicInfo }: DeepContentSectionProps) {
  const hasDeepContent =
    basicInfo.historyStory ||
    basicInfo.regionalVariations ||
    basicInfo.modernEvolution ||
    (basicInfo.misconceptions && basicInfo.misconceptions.length > 0);

  if (!hasDeepContent) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
          <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Deep Dive</h2>
          <p className="text-sm text-muted-foreground">
            History, regional differences, and how traditions change today
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {basicInfo.historyStory && (
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-3">
                  History & Legends
                </h3>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {basicInfo.historyStory.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        {basicInfo.regionalVariations && (
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-3">
                  Regional Variations
                </h3>
                <div className="space-y-4">
                  {Object.entries(basicInfo.regionalVariations).map(
                    ([region, content]) =>
                      content && (
                        <div key={region}>
                          <h4 className="font-medium text-foreground capitalize mb-2">
                            {region}
                          </h4>
                          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                            {content.split("\n\n").map((paragraph, i) => (
                              <p key={i} className="mb-2">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ),
                  )}
                </div>
              </div>
            </div>
          </Card>
        )}

        {basicInfo.modernEvolution && (
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-3">
                  Modern Evolution
                </h3>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {basicInfo.modernEvolution
                    .split("\n\n")
                    .map((paragraph, i) => (
                      <div key={i} className="mb-4 last:mb-0">
                        {paragraph.startsWith("**") ? (
                          <h4 className="font-medium text-foreground mt-4 first:mt-0">
                            {paragraph.replace(/\*\*/g, "")}
                          </h4>
                        ) : (
                          <p className="text-muted-foreground">{paragraph}</p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        {basicInfo.misconceptions && basicInfo.misconceptions.length > 0 && (
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-4">
                  Common Misconceptions
                </h3>
                <div className="space-y-4">
                  {basicInfo.misconceptions.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-rose-50 dark:bg-rose-900/20"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-rose-500 mt-0.5">✕</span>
                        <p className="font-medium text-foreground">
                          {item.myth}
                        </p>
                      </div>
                      <div className="pl-6">
                        <p className="text-green-600 dark:text-green-400 font-medium text-sm mb-1">
                          Reality:
                        </p>
                        <p className="text-muted-foreground">{item.reality}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}
