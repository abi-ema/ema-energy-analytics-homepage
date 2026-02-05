import PhotosSection from "./PhotosSection";
import UpdatesSection from "./UpdatesSection";

const PhotosUpdatesSection = () => {
  return (
    <section id="gallery-updates" className="section-padding bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Photos Section - Left */}
          <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
            <PhotosSection />
          </div>

          {/* Updates Section - Right */}
          <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
            <UpdatesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosUpdatesSection;
