import { BarChart3, Layers, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Task-driven scenarios",
    description:
      "Not general introductions—we help you complete specific tasks: ordering food, giving New Year greetings, giving gifts, party conversations.",
  },
  {
    icon: Layers,
    title: "Comprehensive depth",
    description:
      "Festival + food + etiquette + language expressions—dig deep into every cultural aspect.",
  },
  {
    icon: Users,
    title: "Personalized by identity",
    description:
      "Tourists, international students, expats—three user types with typical scenarios and exclusive content.",
  },
  {
    icon: BarChart3,
    title: "Data-driven optimization",
    description:
      "Through your interactions and feedback, continuously optimize the cultural points that confuse foreigners most.",
  },
];

export function ValueProposition() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            Key advantages
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Why choose us?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From "observing culture" to "using culture"—we're your practical
            toolkit for Chinese holiday scenarios.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 text-rose-600 mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-rose-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
