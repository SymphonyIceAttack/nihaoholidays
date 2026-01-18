import { ArrowRight, Gift, MessageSquare, Utensils } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/80 dark:from-rose-950/20 via-background to-background py-16 md:py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-100/50 dark:bg-rose-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100/50 dark:bg-orange-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm text-rose-700 dark:text-rose-300 shadow-sm border border-rose-100 dark:border-rose-900/30 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
          </span>
          <span>More than understanding culture—learn to use it</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          In Chinese holiday scenarios,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">
            learn what to say, what to do, and how to do it
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          Ordering food, giving New Year greetings, giving gifts, attending
          parties—every holiday is a real scenario. We provide tools and
          expressions to help you go from &quot;knowing&quot; to
          &quot;using&quot;.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <div className="group flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-100 dark:border-rose-900/30 shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-700 transition-all duration-300 cursor-pointer">
            <div className="p-1.5 rounded-full bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
              <Utensils className="h-4 w-4 text-rose-500 dark:text-rose-400" />
            </div>
            <span className="text-sm font-medium">Scenario-based tools</span>
          </div>
          <div className="group flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-100 dark:border-rose-900/30 shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-700 transition-all duration-300 cursor-pointer">
            <div className="p-1.5 rounded-full bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
              <MessageSquare className="h-4 w-4 text-rose-500 dark:text-rose-400" />
            </div>
            <span className="text-sm font-medium">
              Practical expression templates
            </span>
          </div>
          <div className="group flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-100 dark:border-rose-900/30 shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-700 transition-all duration-300 cursor-pointer">
            <div className="p-1.5 rounded-full bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
              <Gift className="h-4 w-4 text-rose-500 dark:text-rose-400" />
            </div>
            <span className="text-sm font-medium">
              Etiquette &amp; taboo guides
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
          <Button
            size="lg"
            asChild
            className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20 gap-2 px-8"
          >
            <Link href="/en/learn">
              Start with Spring Festival
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
