import React, { useEffect, useCallback, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { useResponsive } from '../hooks/useMediaQuery';

/**
 * Props for the ImageLightbox component
 */
interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  title?: string;
  allowDownload?: boolean;
}

/**
 * Full-screen image viewer component with navigation, zoom, and download features
 *
 * @example
 * <ImageLightbox
 *   images={artworkImages}
 *   currentIndex={0}
 *   onClose={() => setShowLightbox(false)}
 *   title="Artwork Title"
 *   allowDownload={true}
 * />
 */
export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex: initialIndex,
  onClose,
  title,
  allowDownload = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { isMobile } = useResponsive();

  const minSwipeDistance = 50;

  // Navigate to previous image
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setIsZoomed(false);
  }, [images.length]);

  // Navigate to next image
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setIsZoomed(false);
  }, [images.length]);

  // Download current image
  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.href = images[currentIndex];
    link.download = `image-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [images, currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'z':
        case 'Z':
          setIsZoomed((prev) => !prev);
          break;
        case 'd':
        case 'D':
          if (allowDownload) {
            downloadImage();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goToPrevious, goToNext, allowDownload, downloadImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Title */}
      {title && (
        <div className="absolute top-4 left-4 z-50 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      )}

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Zoom and Download buttons */}
      <div className="absolute bottom-4 right-4 z-50 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
          className="text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
          aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
        >
          {isZoomed ? <ZoomOut className="w-6 h-6" /> : <ZoomIn className="w-6 h-6" />}
        </button>

        {allowDownload && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              downloadImage();
            }}
            className="text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            aria-label="Download image"
          >
            <Download className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Image */}
      <div
        className={`relative max-w-7xl max-h-[90vh] ${
          isMobile ? 'w-full px-4' : 'w-auto'
        }`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`${title || 'Image'} ${currentIndex + 1}`}
          className={`max-w-full max-h-[90vh] object-contain transition-transform duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && !isMobile && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 max-w-2xl overflow-x-auto p-2 bg-black bg-opacity-50 rounded-lg">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
                setIsZoomed(false);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-white scale-110'
                  : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
