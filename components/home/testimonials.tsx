import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content:
      "First time celebrating Spring Festival with Chinese friends, I learned to say New Year greetings and give red envelopes through this site. They all praised me for fitting in!",
    author: "Michael",
    role: "American student",
    avatar: "M",
    rating: 5,
  },
  {
    id: 2,
    content:
      "As an expat employee, giving holiday gifts to Chinese colleagues was always stressful. The gift guide here is so practical, helping me avoid many taboos.",
    author: "Yuki",
    role: "Japanese expat",
    avatar: "Y",
    rating: 5,
  },
  {
    id: 3,
    content:
      "I was traveling in China during Dragon Boat Festival and learned about different types of zongzi through this site. I felt much more confident ordering food.",
    author: "Emma",
    role: "British tourist",
    avatar: "E",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            Real user feedback
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            From our users
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Over 10,000 international friends have learned Chinese culture through our platform
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-rose-100/50"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-orange-50/30 opacity-50" />

              <div className="absolute top-4 right-4 text-rose-200">
                <Quote className="h-10 w-10" />
              </div>

              <CardContent className="pt-6 relative">
                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-foreground mb-6 relative z-10 leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 text-rose-600 font-semibold flex items-center justify-center shadow-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
