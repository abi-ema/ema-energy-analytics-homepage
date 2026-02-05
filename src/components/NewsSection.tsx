import { ExternalLink, Calendar } from "lucide-react";

const newsItems = [
  {
    title: "See, Spot, Run: How Solar Overcapacity Is Stinging The Spot Power Market",
    source: "Core",
    date: "3 June 2025",
    excerpt: "\"We expected the summer to be very hot. The government issued instructions a month back...\" said Victor Vanya, co-founder of EMA Solutions.",
    url: "https://www.thecore.in/business/see-spot-run-how-solar-overcapacity-is-stinging-the-spot-power-market-836397",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=216,fit=crop/mP4QzP82g2c40eWX/coreniews-AoPJ4JXOJXI03lZw.webp",
  },
  {
    title: "Scorching heat drives India's gas-fired power use to multi-year highs in May",
    source: "Reuters",
    date: "June 6, 2024",
    excerpt: "\"India's LNG imports will continue to be driven higher by the power sector in at least the next two years,\" said Victor Vanya, director at EMA Solutions.",
    url: "https://www.reuters.com/world/india/scorching-heat-drives-indias-gas-fired-power-use-multi-year-highs-may-2024-06-06/",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=216,fit=crop/mP4QzP82g2c40eWX/news31-mk39KgJ1p2c4BoqJ.jpg",
  },
  {
    title: "India boosts coal use to stop power outages as hydroelectricity output falls",
    source: "Livemint",
    date: "4 Sep 2023",
    excerpt: "The unprecedented demand meant power utilities had to increase their purchases on the power exchanges, according to EMA Solutions.",
    url: "https://www.livemint.com/news/india/india-boosts-coal-use-to-stop-power-outages-as-hydroelectricity-output-falls-11693789375480.html",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=216,fit=crop/mP4QzP82g2c40eWX/news2-mnl9g8RKBpueQoQq.jpg",
  },
  {
    title: "China, India lead Asia's biggest hydropower crunch in decades",
    source: "Reuters",
    date: "September 22, 2023",
    excerpt: "\"Given the already stressed supply situation, as the poor monsoon in August resulted in high agricultural demand...\" said EMA Solutions.",
    url: "https://www.reuters.com/business/energy/china-india-lead-asias-biggest-hydropower-crunch-decades-2023-09-21",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=216,fit=crop/mP4QzP82g2c40eWX/news4-mePnqwWxQXcgyxE7.jpg",
  },
  {
    title: "Dry August Sparks Unprecedented Power Demand Across India",
    source: "Mercom",
    date: "5 Sep 2023",
    excerpt: "Victor Vanya, director at power analytics firm EMA Solutions, said higher humidity in the coming weeks could lead to a surge in power demand.",
    url: "https://www.mercomindia.com/dry-august-sparks-demand-across-india",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=216,fit=crop/mP4QzP82g2c40eWX/news1-AzG7gLpGOjseQnjE.jpg",
  },
  {
    title: "India's solar energy output growth slows in September",
    source: "Reuters",
    date: "October 6, 2021",
    excerpt: "\"The main utility of hydro is to support wind and solar. If hydro itself becomes unreliable, India may have to think of alternatives,\" said Victor Vanya.",
    url: "https://www.reuters.com/world/india/indias-solar-energy-output-growth-slows-september-2021-10-05",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=216,fit=crop/mP4QzP82g2c40eWX/news5-YD04QGzzRbiWJx7R.jpg",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
            <span className="text-sm text-primary font-medium">Media Coverage</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            EMA in <span className="text-gradient">News</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our insights featured in leading publications worldwide
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((news, index) => (
            <a
              key={news.title}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-card border border-border/50 card-hover animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="md:w-48 h-32 md:h-auto flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-primary">{news.source}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </span>
                </div>
                
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                  {news.excerpt}
                </p>

                <div className="flex items-center gap-1 text-primary text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
