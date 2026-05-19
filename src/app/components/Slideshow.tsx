import { useState } from 'react';

interface SlideshowProps {
  images: string[];
  alt: string;
}

export function Slideshow({ images, alt }: SlideshowProps) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative aspect-video bg-primary/50 overflow-hidden flex items-center justify-center">
      <img
        src={images[current]}
        alt={alt}
        className="w-full h-full object-cover rounded-lg"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 z-10"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 z-10"
            aria-label="Next"
          >
            &#8594;
          </button>
        </>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-secondary' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}
