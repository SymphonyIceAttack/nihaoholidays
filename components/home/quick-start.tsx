import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickStartItems = [
  {
    step: 1,
    title: "Choose your identity",
    description: "Tourist, international student, or expat—get customized content",
    time: "10 sec",
  },
  {
    step: 2,
    title: "Pick a festival",
    description: "Starting with Spring Festival is best—richest culture",
    time: "30 sec",
  },
  {
    step: 3,
    title: "Try interactive tools",
    description: "Order food, send greetings, give gifts—practice in real scenarios",
    time: "5 min",
  },
];

export function QuickStart() {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-rose-50/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-600 px-3 py-1 rounded-full text-sm font-medium mb-4 shadow-sm border border-emerald-100">
            <Clock className="h-4 w-4" />
            <span>5 minutes to get started</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Three steps to start your cultural learning journey
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            No account needed. Start immediately. We'll remember your progress.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-10">
          {quickStartItems.map((item, index) => (
            <div key={item.step} className="relative group">
              {/* Connecting line */}
              {index < quickStartItems.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-rose-200 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 bg-background border rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-rose-200/50">
                {/* Step indicator */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 text-rose-600 font-bold flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                  {item.step}
                </div>

                <h3 className="font-semibold text-foreground mb-2 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                  <Clock className="h-3 w-3 text-emerald-500" />
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Button
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20 gap-2 px-8 hover:shadow-xl hover:shadow-rose-600/30 transition-all duration-300 active:scale-[0.98]"
          >
            Start now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
