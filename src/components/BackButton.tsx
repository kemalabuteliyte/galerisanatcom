import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Props for the BackButton component
 */
interface BackButtonProps {
  fallbackPath?: string;
  className?: string;
  label?: string;
  showLabel?: boolean;
}

/**
 * Smart back navigation button that is browser history aware
 *
 * @example
 * <BackButton fallbackPath="/" showLabel={true} />
 */
export const BackButton: React.FC<BackButtonProps> = ({
  fallbackPath = '/',
  className = '',
  label = 'Back',
  showLabel = true,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack, setCanGoBack] = useState(false);

  // Check if there is history to go back to
  useEffect(() => {
    // We can check if we came from within the app by looking at the history state
    // This is a simple heuristic - in a real app you might want more sophisticated logic
    setCanGoBack(window.history.length > 1);
  }, [location]);

  /**
   * Handle back navigation
   */
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();

    if (canGoBack) {
      // Go back in browser history
      navigate(-1);
    } else {
      // Navigate to fallback path
      navigate(fallbackPath);
    }
  };

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBack(e as unknown as React.MouseEvent);
    }
  };

  return (
    <button
      onClick={handleBack}
      onKeyDown={handleKeyDown}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors group ${className}`}
      aria-label={label}
    >
      <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
      {showLabel && <span className="font-medium text-gray-700">{label}</span>}
    </button>
  );
};

/**
 * Simpler icon-only version of BackButton
 *
 * @example
 * <BackButtonIcon />
 */
export const BackButtonIcon: React.FC<Omit<BackButtonProps, 'showLabel' | 'label'>> = (
  props
) => {
  return <BackButton {...props} showLabel={false} label="Go back" />;
};
