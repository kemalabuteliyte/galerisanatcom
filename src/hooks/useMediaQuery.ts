import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design - detects screen sizes
 *
 * @param {string} query - Media query string
 * @returns {boolean} Whether the media query matches
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Define listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    } else {
      // Legacy browsers
      mediaQuery.addListener(listener);
      return () => mediaQuery.removeListener(listener);
    }
  }, [query]);

  return matches;
}

/**
 * Responsive breakpoints based on Tailwind CSS defaults
 */
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Hook that provides convenient responsive design helpers
 *
 * @returns Object with responsive state booleans
 *
 * @example
 * const { isMobile, isTablet, isDesktop, isLargeDesktop } = useResponsive();
 */
export function useResponsive() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.md})`);
  const isTablet = useMediaQuery(
    `(min-width: ${BREAKPOINTS.md}) and (max-width: ${BREAKPOINTS.lg})`
  );
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.lg})`);
  const isLargeDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.xl})`);
  const is2XL = useMediaQuery(`(min-width: ${BREAKPOINTS['2xl']})`);

  // Orientation
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isLandscape = useMediaQuery('(orientation: landscape)');

  // Touch capability
  const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    is2XL,
    isPortrait,
    isLandscape,
    isTouchDevice,
  };
}
