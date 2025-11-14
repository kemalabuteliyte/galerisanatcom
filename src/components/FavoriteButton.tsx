import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';

/**
 * Props for the FavoriteButton component
 */
interface FavoriteButtonProps {
  artworkId: string;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Animated heart/favorite toggle button component
 *
 * @example
 * <FavoriteButton artworkId="artwork-1" showLabel={true} />
 */
export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  artworkId,
  className = '',
  showLabel = false,
  size = 'md',
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isAnimating, setIsAnimating] = useState(false);
  const favorited = isFavorite(artworkId);

  // Size classes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const buttonSizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  };

  /**
   * Handle favorite toggle with animation
   */
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite(artworkId);
    setIsAnimating(true);

    // Reset animation
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      onClick={handleToggle}
      className={`group relative inline-flex items-center gap-2 rounded-full transition-all duration-200 ${
        favorited
          ? 'bg-red-50 hover:bg-red-100 text-red-600'
          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
      } ${buttonSizeClasses[size]} ${className}`}
      aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={favorited}
    >
      <div className={`relative ${isAnimating ? 'animate-heart-beat' : ''}`}>
        <Heart
          className={`${sizeClasses[size]} transition-all duration-200 ${
            favorited
              ? 'fill-red-600 text-red-600 scale-110'
              : 'fill-none group-hover:scale-110'
          }`}
        />

        {/* Particle effect on favorite */}
        {isAnimating && favorited && (
          <>
            <div className="absolute inset-0 animate-ping">
              <Heart className={`${sizeClasses[size]} fill-red-600 text-red-600 opacity-75`} />
            </div>
          </>
        )}
      </div>

      {showLabel && (
        <span className="text-sm font-medium pr-1">
          {favorited ? 'Favorited' : 'Favorite'}
        </span>
      )}

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {favorited ? 'Remove from favorites' : 'Add to favorites'}
      </div>

      <style>{`
        @keyframes heart-beat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(0.9);
          }
          20%, 40% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.15);
          }
          60% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(1);
          }
        }
        .animate-heart-beat {
          animation: heart-beat 0.6s ease-in-out;
        }
      `}</style>
    </button>
  );
};
