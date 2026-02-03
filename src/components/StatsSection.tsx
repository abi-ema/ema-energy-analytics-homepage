import { Users, Building2, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Enterprise Clients",
    description: "Leading utilities and traders",
  },
  {
    icon: Building2,
    value: "20+",
    label: "Years Experience",
    description: "Deep industry expertise",
  },
  {
    icon: Globe,
    value: "5+",
    label: "Countries Served",
    description: "South Asia coverage",
  },
  {
    icon: Award,
    value: "ISO",
    label: "27001 Certified",
    description: "Enterprise security",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 md:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
