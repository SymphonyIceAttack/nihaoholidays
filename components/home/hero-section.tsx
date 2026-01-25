import { ArrowRight, Gift, MessageSquare, Utensils } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden aurora-bg">
      {/* Decorative aurora effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl mx-auto">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurora-1 rounded-full blur-3xl animate-aurora" />
          <div
            className="absolute top-20 right-1/4 w-72 h-72 bg-aurora-2 rounded-full blur-3xl animate-aurora"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-40 left-1/3 w-64 h-64 bg-aurora-3 rounded-full blur-3xl animate-aurora"
            style={{ animationDelay: "4s" }}
          />
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-100/30 dark:bg-rose-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100/30 dark:bg-orange-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 text-center pb-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm text-rose-700 dark:text-rose-300 shadow-sm border border-rose-100 dark:border-rose-900/30 mt-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
          </span>
          <span>More than understanding culture—learn to use it</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance leading-tight font-serif animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          In Chinese holiday scenarios,
          <br />
          <span className="gradient-text">
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
          <div className="group aurora-card flex items-center gap-2 px-4 py-2 cursor-pointer hover-glow">
            <div className="p-1.5 rounded-full bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
              <Utensils className="h-4 w-4 text-rose-500 dark:text-rose-400" />
            </div>
            <span className="text-sm font-medium">Scenario-based tools</span>
          </div>
          <div className="group aurora-card flex items-center gap-2 px-4 py-2 cursor-pointer hover-glow">
            <div className="p-1.5 rounded-full bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
              <MessageSquare className="h-4 w-4 text-rose-500 dark:text-rose-400" />
            </div>
            <span className="text-sm font-medium">
              Practical expression templates
            </span>
          </div>
          <div className="group aurora-card flex items-center gap-2 px-4 py-2 cursor-pointer hover-glow">
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
            className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20 gap-2 px-8 hover-glow transition-all duration-300"
          >
            <Link href="/en/learn">
              Start Learning
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
