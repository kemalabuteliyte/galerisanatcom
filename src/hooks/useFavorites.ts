import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Custom hook for managing favorite artworks with localStorage persistence
 *
 * @returns Object with favorites management functions
 *
 * @example
 * const { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite } = useFavorites();
 */
export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('eliyte_favorites', []);

  /**
   * Add an artwork to favorites
   */
  const addFavorite = useCallback(
    (artworkId: string) => {
      setFavorites((prev) => {
        if (prev.includes(artworkId)) {
          return prev;
        }
        return [...prev, artworkId];
      });
    },
    [setFavorites]
  );

  /**
   * Remove an artwork from favorites
   */
  const removeFavorite = useCallback(
    (artworkId: string) => {
      setFavorites((prev) => prev.filter((id) => id !== artworkId));
    },
    [setFavorites]
  );

  /**
   * Check if an artwork is in favorites
   */
  const isFavorite = useCallback(
    (artworkId: string): boolean => {
      return favorites.includes(artworkId);
    },
    [favorites]
  );

  /**
   * Toggle favorite status of an artwork
   */
  const toggleFavorite = useCallback(
    (artworkId: string) => {
      if (isFavorite(artworkId)) {
        removeFavorite(artworkId);
      } else {
        addFavorite(artworkId);
      }
    },
    [isFavorite, addFavorite, removeFavorite]
  );

  /**
   * Clear all favorites
   */
  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, [setFavorites]);

  /**
   * Get count of favorites
   */
  const favoritesCount = favorites.length;

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    favoritesCount,
  };
}
