import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useFavorites } from '../hooks/useFavorites';

/**
 * Favorites context type
 */
interface FavoritesContextType {
  favorites: string[];
  addFavorite: (artworkId: string) => void;
  removeFavorite: (artworkId: string) => void;
  isFavorite: (artworkId: string) => boolean;
  toggleFavorite: (artworkId: string) => void;
  clearFavorites: () => void;
  favoritesCount: number;
}

/**
 * Favorites context
 */
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

/**
 * Props for FavoritesProvider
 */
interface FavoritesProviderProps {
  children: ReactNode;
}

/**
 * Favorites provider component
 * Provides global favorites state to the entire application
 *
 * @example
 * <FavoritesProvider>
 *   <App />
 * </FavoritesProvider>
 */
export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const favoritesHook = useFavorites();

  return (
    <FavoritesContext.Provider value={favoritesHook}>
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * Custom hook to use favorites context
 * Must be used within FavoritesProvider
 *
 * @returns {FavoritesContextType} Favorites context value
 * @throws {Error} If used outside FavoritesProvider
 *
 * @example
 * const { favorites, addFavorite, isFavorite } = useFavoritesContext();
 */
export const useFavoritesContext = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error('useFavoritesContext must be used within a FavoritesProvider');
  }

  return context;
};

/**
 * Optional: Hook that safely returns context or undefined
 * Useful for components that work both with and without the provider
 *
 * @returns {FavoritesContextType | undefined} Favorites context value or undefined
 *
 * @example
 * const favorites = useFavoritesOptional();
 * if (favorites) {
 *   // Use favorites
 * }
 */
export const useFavoritesOptional = (): FavoritesContextType | undefined => {
  return useContext(FavoritesContext);
};
