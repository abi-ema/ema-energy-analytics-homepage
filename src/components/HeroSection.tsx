import { ArrowRight, TrendingUp, Zap, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Glowing Orb Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">South Asia's Leading Power Analytics Provider</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Predictive Analytics & Trade
            <span className="block text-gradient">Automation for Power Sector</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Empowering the Power Sector through Data, Intelligence & Innovation. 
            Transform power market uncertainty into strategic advantage.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="#services"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 border border-border hover:border-primary/50 rounded-lg font-semibold transition-all hover:bg-secondary/50"
            >
              Contact Us
            </a>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-card/50 border border-border/50 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-foreground">80M+</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-card/50 border border-border/50 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-foreground">15 min</div>
                <div className="text-sm text-muted-foreground">Time-Block Precision</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-card/50 border border-border/50 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
