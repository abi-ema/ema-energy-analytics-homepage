import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const photos = [
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/mP4QzP82g2c40eWX/1-YbN9LZzlzRtzEQZE.png",
    alt: "EMA Solutions team at work",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/mP4QzP82g2c40eWX/2-mePnE16264tJV2xW.png",
    alt: "Energy analytics presentation",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/mP4QzP82g2c40eWX/3-Y4LJ58MBVNuO7DaD.png",
    alt: "Team collaboration session",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/mP4QzP82g2c40eWX/4-YBg4Z8vWrqhlkbRl.png",
    alt: "Industry conference participation",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/mP4QzP82g2c40eWX/5-m2WQnl2e2PS4WJBl.png",
    alt: "Client meeting",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/mP4QzP82g2c40eWX/6-ALpo5OQZQwHQZ7xR.png",
    alt: "Workshop session",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/mP4QzP82g2c40eWX/7-mp89D62L28tx5oyW.png",
    alt: "EMA Solutions office",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/mP4QzP82g2c40eWX/8-A0xVOWPZPWHXnlW8.png",
    alt: "Team building event",
  },
];

const PhotosSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="photos" className="section-padding bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
            <span className="text-sm text-primary font-medium">Gallery</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moments from our events, conferences, and team activities
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedPhoto && (
              <img
                src={selectedPhoto}
                alt="Full size photo"
                className="w-full h-auto rounded-xl"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotosSection;
