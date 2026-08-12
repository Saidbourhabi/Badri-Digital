import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

gsap.registerPlugin(ScrollTrigger);

const CLOUDINARY_NAME = import.meta.env.VITE_CLOUDINARY_NAME;
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload`;

const buildCloudinaryUrl = (publicId, width, height) => {
  const parts = [];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  parts.push('c_fit', 'f_auto', 'q_auto');
  return `${CLOUDINARY_BASE}/${parts.join(',')}/${publicId}`;
};

const images = [
  {
    id: 1,
    publicId: 'cms2_we2i6t.jpg',
    alt: 'Piano Event - Concours Musical Stars',
    width: 3093,
    height: 4124,
  },
];

const DEFAULT_PSWP_WIDTH = 1080;
const DEFAULT_PSWP_HEIGHT = 1439;
const BREAKPOINTS = [400, 800, 1200];
const GRID_SIZES = '(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 320px';
const EAGER_LOAD_COUNT = 2;

export default function ImageGallery() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray('.gallery-item', containerRef.current);
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(items, { opacity: 0, y: 24 });

      ScrollTrigger.batch(items, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.08,
            overwrite: true,
          }),
      });
    },
    { scope: containerRef }
  );

  return (
    <Gallery>
      <section aria-labelledby="gallery-heading" className="px-4 md:px-8 mt-6">
        <h2 id="gallery-heading" className="sr-only">
          Image Gallery
        </h2>

        <div className="max-w-7xl mx-auto" ref={containerRef}>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-x-4 space-y-4">
            {images.map((image, index) => {
              const srcSet = BREAKPOINTS
                .map((w) => `${buildCloudinaryUrl(image.publicId, w)} ${w}w`)
                .join(', ');
              const fallbackSrc = buildCloudinaryUrl(image.publicId, 600);
              const pswpWidth = image.width || DEFAULT_PSWP_WIDTH;
              const pswpHeight = image.height || DEFAULT_PSWP_HEIGHT;
              const originalUrl = buildCloudinaryUrl(image.publicId, pswpWidth, pswpHeight);
              const thumbnailUrl = buildCloudinaryUrl(image.publicId, 200);
              const isAboveFold = index < EAGER_LOAD_COUNT;

              return (
                <div
                  key={image.id}
                  className="gallery-item bg-gray-100 overflow-hidden break-inside-avoid"
                >
                  <Item
                    original={originalUrl}
                    thumbnail={thumbnailUrl}
                    width={pswpWidth}
                    height={pswpHeight}
                    alt={image.alt}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        src={fallbackSrc}
                        srcSet={srcSet}
                        sizes={GRID_SIZES}
                        width={image.width}
                        height={image.height}
                        loading={isAboveFold ? 'eager' : 'lazy'}
                        fetchPriority={isAboveFold ? 'high' : 'auto'}
                        decoding="async"
                        alt={image.alt}
                        className="h-auto max-w-full object-cover object-top hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={open}
                      />
                    )}
                  </Item>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Gallery>
  );
}