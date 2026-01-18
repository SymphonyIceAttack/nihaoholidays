import { cn } from "@/lib/utils";

interface UserProfileProps {
  label: string;
  icon: string;
  backgroundColor: string;
  description: string;
  focusContent: string[];
}

export function UserProfile({ label, icon, backgroundColor, description, focusContent }: UserProfileProps) {
  return (
    <div className="max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
      <div className="bg-gradient-to-r from-rose-100/80 to-blue-100/80 dark:from-rose-900/30 dark:to-blue-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-2xl", backgroundColor)}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Your learning path</p>
            <p className="font-semibold text-foreground text-lg">{label}</p>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Focus areas:</p>
          <div className="flex flex-wrap gap-2">
            {focusContent.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1.5 rounded-full bg-white/60 dark:bg-zinc-800/60 text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
