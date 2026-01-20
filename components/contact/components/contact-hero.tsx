interface ContactHeroProps {
  title: string;
  subtitle: string;
}

export function ContactHero({ title, subtitle }: ContactHeroProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
        {title}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {subtitle}
      </h1>
    </div>
  );
}
