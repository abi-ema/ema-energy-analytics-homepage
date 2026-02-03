import { Link } from "react-router-dom";
import { 
  BarChart2, 
  Settings2, 
  LineChart, 
  TrendingUp, 
  Activity, 
  Sun,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    id: "p-stat",
    title: "P-STAT",
    description: "India's Leading Power Market Data Analytics Platform for Trading & Planning decision support",
    icon: BarChart2,
    href: "/p-stat",
  },
  {
    id: "p-opt",
    title: "P-OPT",
    description: "Linear Programming based Supply-Demand-Market Optimization Software for Economic Dispatch Management & DAM/RTM Bidding",
    icon: Settings2,
    href: "/p-opt",
  },
  {
    id: "derivatives",
    title: "Derivatives",
    description: "End-to-end electricity derivatives advisory—backed by real market analytics for hedging & risk management",
    icon: LineChart,
    href: "/derivatives",
  },
  {
    id: "price-forecasting",
    title: "Price Forecasting",
    description: "Market Simulation based highly accurate Price Forecasts for DAM & RTM Market segments",
    icon: TrendingUp,
    href: "/price-forecasting",
  },
  {
    id: "load-forecasting",
    title: "Load Forecasting",
    description: "AI/ML & Statistical based Ensemble Load Forecasting customized models for DISCOMs & LDCs",
    icon: Activity,
    href: "/load-forecasting",
  },
  {
    id: "re-forecasting",
    title: "RE Forecasting",
    description: "AI/ML based forecasting models integrated with best-in-class weather forecasts for Solar/Wind/Hydro Generation",
    icon: Sun,
    href: "/re-forecasting",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
            <span className="text-sm text-primary font-medium">Our Offerings</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Products & <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suite of analytics solutions designed to empower decision-making in India's power markets
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={service.href}
              className="group relative p-6 md:p-8 rounded-xl bg-card border border-border/50 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
