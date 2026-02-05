import { Bell, ArrowRight, Zap, TrendingUp, Users, Calendar } from "lucide-react";

const updates = [
  {
    icon: Zap,
    title: "New P-STAT 4.0 Release",
    description: "Enhanced market analytics dashboard with real-time data visualization and improved forecasting accuracy.",
    date: "January 2025",
    category: "Product Update",
  },
  {
    icon: TrendingUp,
    title: "Market Coverage Expansion",
    description: "Extended our analytics coverage to include Nepal and Bangladesh power markets for comprehensive South Asian insights.",
    date: "December 2024",
    category: "Expansion",
  },
  {
    icon: Users,
    title: "Partnership with Major DISCOMs",
    description: "Signed strategic partnerships with leading distribution companies for load forecasting solutions.",
    date: "November 2024",
    category: "Partnership",
  },
  {
    icon: Calendar,
    title: "Industry Workshop Announcement",
    description: "Join us for an exclusive workshop on power market analytics and trading strategies at the upcoming India Energy Week.",
    date: "Coming Soon",
    category: "Event",
  },
];

const UpdatesSection = () => {
  return (
    <section id="updates" className="section-padding bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
            <Bell className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Latest Updates</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What's <span className="text-gradient">New</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our latest developments, product updates, and industry insights
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {updates.map((update, index) => {
            const IconComponent = update.icon;
            return (
              <div
                key={update.title}
                className="group p-6 rounded-xl bg-card border border-border/50 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {update.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {update.date}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {update.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {update.description}
                    </p>

                    <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
