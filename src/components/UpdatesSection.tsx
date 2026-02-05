import { Bell, ArrowRight, Zap, TrendingUp, Users, Calendar } from "lucide-react";

const updates = [
  {
    icon: Zap,
    title: "New P-STAT 4.0 Release",
    description: "Enhanced market analytics dashboard with real-time data visualization.",
    date: "January 2025",
    category: "Product",
  },
  {
    icon: TrendingUp,
    title: "Market Coverage Expansion",
    description: "Extended analytics to Nepal and Bangladesh power markets.",
    date: "December 2024",
    category: "Expansion",
  },
  {
    icon: Users,
    title: "Partnership with Major DISCOMs",
    description: "Strategic partnerships for load forecasting solutions.",
    date: "November 2024",
    category: "Partnership",
  },
  {
    icon: Calendar,
    title: "Industry Workshop",
    description: "Join us at India Energy Week for power market analytics.",
    date: "Coming Soon",
    category: "Event",
  },
];

const UpdatesSection = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 mb-4">
          <Bell className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs text-primary font-medium">Latest Updates</span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
          What's <span className="text-gradient">New</span>
        </h3>
        <p className="text-muted-foreground text-sm">
          Stay informed about our latest developments
        </p>
      </div>

      {/* Updates List */}
      <div className="flex-1 space-y-3 overflow-y-auto">
        {updates.map((update, index) => {
          const IconComponent = update.icon;
          return (
            <div
              key={update.title}
              className="group p-4 rounded-xl bg-card border border-border/50 card-hover animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                      {update.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {update.date}
                    </span>
                  </div>
                  
                  <h4 className="font-display font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                    {update.title}
                  </h4>
                  
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {update.description}
                  </p>

                  <div className="flex items-center gap-1 text-primary text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpdatesSection;
