/**
 * Image utility functions for handling image URLs, optimization, and placeholders
 */

/**
 * Image size options
 */
export type ImageSize = 'thumbnail' | 'small' | 'medium' | 'large' | 'original';

/**
 * Image dimensions mapping
 */
const IMAGE_DIMENSIONS: Record<ImageSize, { width: number; height?: number }> = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 400 },
  medium: { width: 800 },
  large: { width: 1200 },
  original: { width: 2000 },
};

/**
 * Get optimized image URL with size parameters
 * In a real application, this would integrate with a CDN or image processing service
 *
 * @param {string} imageUrl - Original image URL
 * @param {ImageSize} size - Desired image size
 * @returns {string} Optimized image URL
 *
 * @example
 * const imageUrl = getImageUrl('/images/artwork.jpg', 'medium');
 */
export function getImageUrl(imageUrl: string, _size: ImageSize = 'original'): string {
  // For now, return the original URL
  // In production, you would append size parameters or use a CDN
  // Example: return `${CDN_BASE_URL}${imageUrl}?w=${IMAGE_DIMENSIONS[_size].width}`;

  return imageUrl;
}

/**
 * Get srcset for responsive images
 *
 * @param {string} imageUrl - Original image URL
 * @returns {string} srcset string for responsive images
 *
 * @example
 * <img src={imageUrl} srcSet={getImageSrcSet(imageUrl)} />
 */
export function getImageSrcSet(imageUrl: string): string {
  const sizes: ImageSize[] = ['small', 'medium', 'large'];

  return sizes
    .map((size) => {
      const url = getImageUrl(imageUrl, size);
      const width = IMAGE_DIMENSIONS[size].width;
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Generate a placeholder image URL using a service like placeholder.com or blurhash
 *
 * @param {number} width - Placeholder width
 * @param {number} height - Placeholder height
 * @param {string} text - Optional text to display
 * @param {string} bgColor - Background color (hex without #)
 * @param {string} textColor - Text color (hex without #)
 * @returns {string} Placeholder image URL
 *
 * @example
 * const placeholder = generatePlaceholder(400, 300, 'Loading...', 'f0f0f0', '333333');
 */
export function generatePlaceholder(
  width: number,
  height: number,
  text?: string,
  bgColor: string = 'f0f0f0',
  textColor: string = '999999'
): string {
  const displayText = text || `${width}x${height}`;
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(
    displayText
  )}`;
}

/**
 * Generate a gradient placeholder for lazy loading
 *
 * @param {string} color1 - First gradient color
 * @param {string} color2 - Second gradient color
 * @returns {string} Data URL for gradient placeholder
 */
export function generateGradientPlaceholder(
  color1: string = '#f0f0f0',
  color2: string = '#e0e0e0'
): string {
  const svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#grad)" />
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Preload an image
 *
 * @param {string} src - Image source URL
 * @returns {Promise<HTMLImageElement>} Promise that resolves when image is loaded
 *
 * @example
 * await preloadImage('/images/artwork.jpg');
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Preload multiple images
 *
 * @param {string[]} sources - Array of image source URLs
 * @returns {Promise<HTMLImageElement[]>} Promise that resolves when all images are loaded
 *
 * @example
 * await preloadImages(['/img1.jpg', '/img2.jpg', '/img3.jpg']);
 */
export function preloadImages(sources: string[]): Promise<HTMLImageElement[]> {
  return Promise.all(sources.map(preloadImage));
}

/**
 * Get image dimensions from URL
 *
 * @param {string} src - Image source URL
 * @returns {Promise<{width: number, height: number}>} Image dimensions
 *
 * @example
 * const { width, height } = await getImageDimensions('/images/artwork.jpg');
 */
export function getImageDimensions(
  src: string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Calculate aspect ratio from dimensions
 *
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {number} Aspect ratio
 *
 * @example
 * const ratio = calculateAspectRatio(1920, 1080); // 1.7778
 */
export function calculateAspectRatio(width: number, height: number): number {
  return width / height;
}

/**
 * Check if image URL is valid and accessible
 *
 * @param {string} url - Image URL to check
 * @returns {Promise<boolean>} True if image is accessible
 *
 * @example
 * const isValid = await isImageAccessible('/images/artwork.jpg');
 */
export async function isImageAccessible(url: string): Promise<boolean> {
  try {
    await preloadImage(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Convert image file to base64 data URL
 *
 * @param {File} file - Image file
 * @returns {Promise<string>} Base64 data URL
 *
 * @example
 * const dataUrl = await imageToBase64(file);
 */
export function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Compress image file
 * Note: This is a simple implementation. For production, consider using a library like browser-image-compression
 *
 * @param {File} file - Image file to compress
 * @param {number} maxWidth - Maximum width
 * @param {number} quality - Quality (0-1)
 * @returns {Promise<Blob>} Compressed image blob
 */
export function compressImage(
  file: File,
  maxWidth: number = 1920,
  quality: number = 0.8
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;

        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to compress image'));
            }
          },
          file.type,
          quality
        );
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
