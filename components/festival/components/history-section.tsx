interface HistorySectionProps {
  history: string;
}

export function HistorySection({ history }: HistorySectionProps) {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">History & Background</h2>
      </div>
      <div className="p-6 rounded-xl bg-muted/50 dark:bg-muted/30">
        <p className="text-muted-foreground leading-relaxed">{history}</p>
      </div>
    </div>
  );
}
