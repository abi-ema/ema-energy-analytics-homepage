import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "EMA team is doing a great job of making decision process in utilities more analytical. Keep it up!!!",
    author: "Bhaskar Pradhan",
    role: "Druk Green Power Corporation",
  },
  {
    quote: "EMA team is doing good job in developing analytical tools for power transactions.",
    author: "Alok Kumar",
    role: "The Lantau Group",
  },
  {
    quote: "It was such a productive discussion along with numerous site visits with EMA Solution team. Looking forward for a great output from a year long project.",
    author: "Ajit Kumar",
    role: "RTI International",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
            <span className="text-sm text-primary font-medium">Testimonials</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Reflections</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading power utilities and traders across South Asia
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-6 md:p-8 rounded-xl bg-card border border-border/50 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/50 pt-6">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
