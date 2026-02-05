import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="flex flex-col h-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 mb-4">
          <Camera className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs text-primary font-medium">Gallery</span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
          Our <span className="text-gradient">Journey</span>
        </h3>
        <p className="text-muted-foreground text-sm">
          Moments from our events and team activities
        </p>
      </div>

      {/* Carousel */}
      <div 
        className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Image */}
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={() => setSelectedPhoto(photos[currentIndex].src)}
        >
          <img
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-primary w-4" 
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {photos.map((photo, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex 
                ? "border-primary" 
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </button>
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
  );
};

export default PhotosSection;
