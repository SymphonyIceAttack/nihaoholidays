import { Award, BookOpen, Globe, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Active users" },
  { icon: BookOpen, value: "8", label: "In-depth festivals" },
  { icon: Award, value: "50+", label: "Practical tools" },
  { icon: Globe, value: "30+", label: "Countries covered" },
];

export function StatsBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-rose-600 to-rose-500 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className="h-7 w-7 opacity-90" />
                </div>
                <p className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
