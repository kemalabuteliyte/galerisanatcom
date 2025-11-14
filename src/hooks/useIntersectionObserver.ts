import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Options for the intersection observer hook
 */
interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook for detecting when an element is in the viewport
 * Useful for lazy loading and scroll animations
 *
 * @param {RefObject<Element>} elementRef - React ref to the element to observe
 * @param {UseIntersectionObserverOptions} options - Intersection observer options
 * @returns {IntersectionObserverEntry | undefined} The intersection observer entry
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * const entry = useIntersectionObserver(ref, { threshold: 0.5 });
 * const isVisible = !!entry?.isIntersecting;
 */
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: UseIntersectionObserverOptions = {}
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}

/**
 * Simplified hook that returns just the visibility state
 *
 * @param {RefObject<Element>} elementRef - React ref to the element to observe
 * @param {UseIntersectionObserverOptions} options - Intersection observer options
 * @returns {boolean} Whether the element is visible in the viewport
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * const isVisible = useIsVisible(ref);
 */
export function useIsVisible(
  elementRef: RefObject<Element>,
  options?: UseIntersectionObserverOptions
): boolean {
  const entry = useIntersectionObserver(elementRef, options);
  return !!entry?.isIntersecting;
}
