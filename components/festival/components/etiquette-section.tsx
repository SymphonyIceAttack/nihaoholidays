import { CheckCircle2, Gift } from "lucide-react";

interface EtiquetteSectionProps {
  customs: string[];
  taboo: string[];
  gifts: Array<{ name: string; emoji: string; note: string }>;
}

export function EtiquetteSection({ customs, taboo, gifts }: EtiquetteSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <span className="text-xl">✨</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Etiquette & Customs</h2>
          <p className="text-sm text-muted-foreground">What to do and what to avoid</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Customs */}
        <div className="bg-white/60 dark:bg-zinc-800/60 rounded-2xl p-6 border border-rose-200 dark:border-rose-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">What to Do</h3>
              <p className="text-sm text-muted-foreground">Traditional customs and practices</p>
            </div>
          </div>
          <ul className="space-y-3">
            {customs.map((custom, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{custom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Taboos */}
        {taboo.length > 0 && (
          <div className="bg-amber-50/60 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-xl">⚠️</span>
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-200">What to Avoid</h3>
                <p className="text-sm text-amber-600 dark:text-amber-400">Traditional taboos and customs</p>
              </div>
            </div>
            <ul className="space-y-3">
              {taboo.map((tabooItem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-700 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✕
                  </span>
                  <span className="text-sm text-amber-800 dark:text-amber-200">{tabooItem}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Gift Guide */}
        {gifts.length > 0 && (
          <div className="bg-purple-50/60 dark:bg-purple-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Gift className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Gift Ideas</h3>
                <p className="text-sm text-muted-foreground">Appropriate gifts for the occasion</p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {gifts.map((gift, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60"
                >
                  <span className="text-2xl">{gift.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{gift.name}</p>
                    <p className="text-xs text-muted-foreground">{gift.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
