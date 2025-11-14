/**
 * Components
 *
 * This module exports all components used throughout the application
 */

// Existing components (default exports)
export { default as SEO } from './SEO';
export { default as LoadingSpinner } from './LoadingSpinner';
export { default as ScrollToTop } from './ScrollToTop';
export { default as Breadcrumbs } from './Breadcrumbs';
export { default as EmptyState } from './EmptyState';

// New advanced components
export { ImageLightbox } from './ImageLightbox';
export { ShareButton } from './ShareButton';
export { FavoriteButton } from './FavoriteButton';
export { SearchBar } from './SearchBar';
export { FilterPanel } from './FilterPanel';
export type { FilterOptions } from './FilterPanel';
export { CookieConsent } from './CookieConsent';
export { ErrorBoundary } from './ErrorBoundary';
export { BackButton, BackButtonIcon } from './BackButton';
