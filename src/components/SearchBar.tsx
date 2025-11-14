import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Props for the SearchBar component
 */
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
  showHistory?: boolean;
  suggestions?: string[];
}

/**
 * Advanced search component with auto-complete, search history, and keyboard navigation
 *
 * @example
 * <SearchBar
 *   value={searchQuery}
 *   onChange={setSearchQuery}
 *   placeholder="Search artworks, artists..."
 *   showHistory={true}
 * />
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Search...',
  className = '',
  showHistory = true,
  suggestions = [],
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchHistory, setSearchHistory] = useLocalStorage<string[]>('eliyte_search_history', []);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const maxHistoryItems = 5;

  // Combine suggestions with history
  const allSuggestions = [
    ...suggestions.filter((s) => s.toLowerCase().includes(value.toLowerCase())),
    ...(showHistory && value === '' ? searchHistory : []),
  ].slice(0, 8);

  /**
   * Add to search history
   */
  const addToHistory = (query: string) => {
    if (!query.trim()) return;

    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== query);
      return [query, ...filtered].slice(0, maxHistoryItems);
    });
  };

  /**
   * Handle search submission
   */
  const handleSearch = (query?: string) => {
    const searchQuery = query || value;
    if (searchQuery.trim()) {
      addToHistory(searchQuery);
      onSearch?.(searchQuery);
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  /**
   * Handle input change
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setSelectedIndex(-1);
  };

  /**
   * Clear search
   */
  const handleClear = () => {
    onChange('');
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  /**
   * Clear search history
   */
  const clearHistory = () => {
    setSearchHistory([]);
  };

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (selectedIndex >= 0 && allSuggestions[selectedIndex]) {
        handleSearch(allSuggestions[selectedIndex]);
      } else {
        handleSearch();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < allSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Escape') {
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  /**
   * Click outside to close dropdown
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search className="w-5 h-5" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          aria-label="Search"
          autoComplete="off"
        />

        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {isFocused && allSuggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-y-auto">
          {/* Clear History Button */}
          {showHistory && searchHistory.length > 0 && value === '' && (
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Recent Searches
              </span>
              <button
                onClick={clearHistory}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Suggestions List */}
          <ul>
            {allSuggestions.map((suggestion, index) => {
              const isHistory = searchHistory.includes(suggestion);
              const isSelected = index === selectedIndex;

              return (
                <li key={index}>
                  <button
                    onClick={() => handleSearch(suggestion)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-blue-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {isHistory ? (
                      <Clock className="w-4 h-4 text-gray-400" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                    )}
                    <span className="flex-1">{suggestion}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
