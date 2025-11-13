import { useEffect } from 'react';

/**
 * SEO component props
 */
interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * SEO component for managing meta tags and structured data
 * Helps with search engine optimization and social media sharing
 */
const SEO = ({
  title,
  description,
  keywords,
  ogImage = 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200',
  ogType = 'website',
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Eliyte Sanat Galerisi`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags for social sharing
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'Eliyte Sanat Galerisi', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Add structured data if provided
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');

      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }

      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, structuredData]);

  return null;
};

export default SEO;
