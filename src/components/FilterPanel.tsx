import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import type { Category, Artist } from '../types';

/**
 * Filter options interface
 */
export interface FilterOptions {
  categories: string[];
  artists: string[];
  yearRange: [number, number] | null;
  sortBy: 'title' | 'year' | 'artist' | 'newest' | 'oldest';
}

/**
 * Props for the FilterPanel component
 */
interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  availableCategories: Category[];
  availableArtists: Artist[];
  className?: string;
}

/**
 * Advanced filtering component with category, artist, year, and sort options
 *
 * @example
 * <FilterPanel
 *   filters={currentFilters}
 *   onFiltersChange={setFilters}
 *   availableCategories={categories}
 *   availableArtists={artists}
 * />
 */
export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange,
  availableCategories,
  availableArtists,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    categories: true,
    artists: true,
    year: true,
    sort: true,
  });

  const currentYear = new Date().getFullYear();
  const minYear = 1900;

  /**
   * Toggle section open/closed
   */
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  /**
   * Toggle category filter
   */
  const toggleCategory = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId];

    onFiltersChange({ ...filters, categories: newCategories });
  };

  /**
   * Toggle artist filter
   */
  const toggleArtist = (artistId: string) => {
    const newArtists = filters.artists.includes(artistId)
      ? filters.artists.filter((id) => id !== artistId)
      : [...filters.artists, artistId];

    onFiltersChange({ ...filters, artists: newArtists });
  };

  /**
   * Update year range
   */
  const updateYearRange = (min: number, max: number) => {
    onFiltersChange({ ...filters, yearRange: [min, max] });
  };

  /**
   * Clear year range
   */
  const clearYearRange = () => {
    onFiltersChange({ ...filters, yearRange: null });
  };

  /**
   * Update sort option
   */
  const updateSort = (sortBy: FilterOptions['sortBy']) => {
    onFiltersChange({ ...filters, sortBy });
  };

  /**
   * Clear all filters
   */
  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      artists: [],
      yearRange: null,
      sortBy: 'newest',
    });
  };

  /**
   * Check if any filters are active
   */
  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.artists.length > 0 ||
    filters.yearRange !== null;

  const activeFilterCount =
    filters.categories.length + filters.artists.length + (filters.yearRange ? 1 : 0);

  return (
    <div className={className}>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <span className="font-medium">Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Filter Panel */}
      <div
        className={`bg-white border border-gray-200 rounded-lg p-4 space-y-4 ${
          isOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <h3 className="font-semibold text-lg">Filters</h3>
            {activeFilterCount > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Sort By */}
        <div className="space-y-2">
          <button
            onClick={() => toggleSection('sort')}
            className="w-full flex items-center justify-between text-left"
          >
            <h4 className="font-medium text-gray-900">Sort By</h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSections.sort ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openSections.sort && (
            <div className="space-y-1 pl-2">
              {[
                { value: 'newest', label: 'Newest First' },
                { value: 'oldest', label: 'Oldest First' },
                { value: 'title', label: 'Title (A-Z)' },
                { value: 'artist', label: 'Artist Name' },
                { value: 'year', label: 'Year' },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={filters.sortBy === option.value}
                    onChange={() =>
                      updateSort(option.value as FilterOptions['sortBy'])
                    }
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Categories */}
        {availableCategories.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-gray-200">
            <button
              onClick={() => toggleSection('categories')}
              className="w-full flex items-center justify-between text-left"
            >
              <h4 className="font-medium text-gray-900">Categories</h4>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.categories ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openSections.categories && (
              <div className="space-y-1 pl-2 max-h-48 overflow-y-auto">
                {availableCategories.map((category) => (
                  <label
                    key={category.id}
                    className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-700">{category.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Artists */}
        {availableArtists.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-gray-200">
            <button
              onClick={() => toggleSection('artists')}
              className="w-full flex items-center justify-between text-left"
            >
              <h4 className="font-medium text-gray-900">Artists</h4>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.artists ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openSections.artists && (
              <div className="space-y-1 pl-2 max-h-48 overflow-y-auto">
                {availableArtists.map((artist) => (
                  <label
                    key={artist.id}
                    className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.artists.includes(artist.id)}
                      onChange={() => toggleArtist(artist.id)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-700">{artist.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Year Range */}
        <div className="space-y-2 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button
              onClick={() => toggleSection('year')}
              className="flex items-center justify-between text-left"
            >
              <h4 className="font-medium text-gray-900">Year Range</h4>
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  openSections.year ? 'rotate-180' : ''
                }`}
              />
            </button>

            {filters.yearRange && (
              <button
                onClick={clearYearRange}
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                Clear
              </button>
            )}
          </div>

          {openSections.year && (
            <div className="space-y-3 pl-2">
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="From"
                  min={minYear}
                  max={currentYear}
                  value={filters.yearRange?.[0] || ''}
                  onChange={(e) =>
                    updateYearRange(
                      parseInt(e.target.value) || minYear,
                      filters.yearRange?.[1] || currentYear
                    )
                  }
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <input
                  type="number"
                  placeholder="To"
                  min={minYear}
                  max={currentYear}
                  value={filters.yearRange?.[1] || ''}
                  onChange={(e) =>
                    updateYearRange(
                      filters.yearRange?.[0] || minYear,
                      parseInt(e.target.value) || currentYear
                    )
                  }
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
