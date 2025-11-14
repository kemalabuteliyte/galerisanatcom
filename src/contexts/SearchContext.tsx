import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Artwork, Artist, Category } from '../types';
import { useSearch } from '../hooks/useSearch';
import { useLocalStorage } from '../hooks/useLocalStorage';

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
 * Search context type
 */
interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  debouncedQuery: string;
  results: SearchResults;
  isSearching: boolean;
  clearSearch: () => void;
  searchHistory: string[];
  addToHistory: (query: string) => void;
  clearHistory: () => void;
  setSearchData: (data: { artworks?: Artwork[]; artists?: Artist[]; categories?: Category[] }) => void;
}

/**
 * Search context
 */
const SearchContext = createContext<SearchContextType | undefined>(undefined);

/**
 * Props for SearchProvider
 */
interface SearchProviderProps {
  children: ReactNode;
  initialArtworks?: Artwork[];
  initialArtists?: Artist[];
  initialCategories?: Category[];
}

/**
 * Search provider component
 * Provides global search state to the entire application
 *
 * @example
 * <SearchProvider initialArtworks={artworks} initialArtists={artists}>
 *   <App />
 * </SearchProvider>
 */
export const SearchProvider: React.FC<SearchProviderProps> = ({
  children,
  initialArtworks = [],
  initialArtists = [],
  initialCategories = [],
}) => {
  const [artworks, setArtworks] = useState<Artwork[]>(initialArtworks);
  const [artists, setArtists] = useState<Artist[]>(initialArtists);
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const [searchHistory, setSearchHistory] = useLocalStorage<string[]>('eliyte_search_history', []);

  const { query, setQuery, debouncedQuery, results, isSearching, clearSearch } = useSearch({
    artworks,
    artists,
    categories,
  });

  /**
   * Add query to search history
   */
  const addToHistory = (query: string) => {
    if (!query.trim()) return;

    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== query);
      return [query, ...filtered].slice(0, 10); // Keep last 10 searches
    });
  };

  /**
   * Clear search history
   */
  const clearHistory = () => {
    setSearchHistory([]);
  };

  /**
   * Update search data (artworks, artists, categories)
   */
  const setSearchData = (data: {
    artworks?: Artwork[];
    artists?: Artist[];
    categories?: Category[];
  }) => {
    if (data.artworks) setArtworks(data.artworks);
    if (data.artists) setArtists(data.artists);
    if (data.categories) setCategories(data.categories);
  };

  const value: SearchContextType = {
    query,
    setQuery,
    debouncedQuery,
    results,
    isSearching,
    clearSearch,
    searchHistory,
    addToHistory,
    clearHistory,
    setSearchData,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

/**
 * Custom hook to use search context
 * Must be used within SearchProvider
 *
 * @returns {SearchContextType} Search context value
 * @throws {Error} If used outside SearchProvider
 *
 * @example
 * const { query, setQuery, results, isSearching } = useSearchContext();
 */
export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }

  return context;
};

/**
 * Optional: Hook that safely returns context or undefined
 * Useful for components that work both with and without the provider
 *
 * @returns {SearchContextType | undefined} Search context value or undefined
 *
 * @example
 * const search = useSearchOptional();
 * if (search) {
 *   // Use search
 * }
 */
export const useSearchOptional = (): SearchContextType | undefined => {
  return useContext(SearchContext);
};
