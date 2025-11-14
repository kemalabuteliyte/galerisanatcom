import { useState, useEffect, useMemo } from 'react';
import type { Artwork, Artist, Category } from '../types';

/**
 * Configuration for the search hook
 */
interface UseSearchConfig {
  artworks?: Artwork[];
  artists?: Artist[];
  categories?: Category[];
  debounceMs?: number;
}

/**
 * Search results interface
 */
interface SearchResults {
  artworks: Artwork[];
  artists: Artist[];
  categories: Category[];
  totalResults: number;
}

/**
 * Custom hook for debounced search across artworks, artists, and categories
 *
 * @param {UseSearchConfig} config - Search configuration
 * @returns Object with search query, setter, and filtered results
 *
 * @example
 * const { query, setQuery, results, isSearching } = useSearch({
 *   artworks: allArtworks,
 *   artists: allArtists,
 *   categories: allCategories
 * });
 */
export function useSearch({
  artworks = [],
  artists = [],
  categories = [],
  debounceMs = 300,
}: UseSearchConfig) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Debounce the search query
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setIsSearching(false);
    }, debounceMs);

    return () => {
      clearTimeout(timer);
    };
  }, [query, debounceMs]);

  // Perform the search
  const results: SearchResults = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return {
        artworks: [],
        artists: [],
        categories: [],
        totalResults: 0,
      };
    }

    const searchTerm = debouncedQuery.toLowerCase().trim();

    // Search artworks
    const filteredArtworks = artworks.filter(
      (artwork) =>
        artwork.title.toLowerCase().includes(searchTerm) ||
        artwork.description.toLowerCase().includes(searchTerm) ||
        artwork.medium.toLowerCase().includes(searchTerm) ||
        artwork.year.toString().includes(searchTerm)
    );

    // Search artists
    const filteredArtists = artists.filter(
      (artist) =>
        artist.name.toLowerCase().includes(searchTerm) ||
        artist.bio.toLowerCase().includes(searchTerm) ||
        artist.nationality.toLowerCase().includes(searchTerm)
    );

    // Search categories
    const filteredCategories = categories.filter(
      (category) =>
        category.name.toLowerCase().includes(searchTerm) ||
        category.description.toLowerCase().includes(searchTerm)
    );

    return {
      artworks: filteredArtworks,
      artists: filteredArtists,
      categories: filteredCategories,
      totalResults:
        filteredArtworks.length +
        filteredArtists.length +
        filteredCategories.length,
    };
  }, [debouncedQuery, artworks, artists, categories]);

  /**
   * Clear the search query
   */
  const clearSearch = () => {
    setQuery('');
    setDebouncedQuery('');
  };

  return {
    query,
    setQuery,
    debouncedQuery,
    results,
    isSearching,
    clearSearch,
  };
}
