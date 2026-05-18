import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Image } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  images?: string[];
  liveUrl?: string;
  codeUrl?: string;
  badge?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  images = [],
  liveUrl,
  codeUrl,
  badge,
}: ProjectCardProps) {
  const { t } = useTranslation();

  // Extract P.S. note if present in description
  let mainDescription = description;
  let psNote = '';
  const psMatch = description.match(/\(P\.S\..*\)$|\(ملاحظة:.*\)$/);
  if (psMatch) {
    mainDescription = description.replace(psMatch[0], '').trim();
    psNote = psMatch[0].replace(/^\(|\)$/g, '');
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
      {/* Image Carousel Section */}
      {hasImages && (
        <div className="relative aspect-video bg-primary/50 overflow-hidden group">
          {badge && (
            <>
              <span className="absolute top-3 end-3 z-10 px-3 py-1 bg-accent text-white text-xs rounded-full shadow-lg font-semibold animate-fadeInUp">
                {badge}
              </span>
              <span
                className="absolute top-3 end-3 z-10 px-5 py-2 text-base font-bold rounded-md shadow-sm animate-fadeInUp border border-white"
                style={{ backgroundColor: '#facb3f', color: '#210635' }}
              >
                {badge}
              </span>
            </>
          )}
          {/* Current Image */}
          {!imageError[currentImageIndex] ? (
            <img
              src={images[currentImageIndex]}
              alt={`${title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => handleImageError(currentImageIndex)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Image size={48} className="text-foreground/30" />
            </div>
          )}

          {/* Navigation Arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute start-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute end-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-foreground" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-secondary w-6'
                      : 'bg-foreground/50 hover:bg-foreground/80'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Image Counter */}
          {hasMultipleImages && (
            <div className="absolute top-3 end-3 px-2 py-1 bg-background/80 rounded-full text-xs text-foreground">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl mb-3 text-accent">{title}</h3>
        <p className="text-foreground/90 mb-4 leading-relaxed">{mainDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(techStack) &&
            techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary/30 text-accent rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
        </div>

        <div className="flex gap-3 mb-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              <span>{t('projects.liveDemo')}</span>
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 text-foreground border border-border rounded-lg transition-colors"
            >
              <Github size={16} />
              <span>{t('projects.viewCode')}</span>
            </a>
          )}
        </div>
        {psNote && (
          <div className="block w-full mt-2 text-sm italic animate-fadeInUp" style={{ color: '#ec4899', fontWeight: 500, letterSpacing: '0.01em' }}>
            {psNote}
          </div>
        )}
      </div>
    </div>
  );
}
