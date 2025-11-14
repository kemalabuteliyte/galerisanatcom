import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { artworks, getArtistById } from '../data/mockData';
import { useFavorites } from '../hooks/useFavorites';
import { SearchBar } from '../components/SearchBar';
import { FavoriteButton } from '../components/FavoriteButton';
import { ShareButton } from '../components/ShareButton';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';

type SortOption = 'newest' | 'oldest' | 'title-asc' | 'title-desc';

const Artworks = () => {
  const [isLoading] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResults = searchQuery ? artworks.filter(a =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.medium.toLowerCase().includes(searchQuery.toLowerCase())
  ) : artworks;
  const { isFavorite } = useFavorites();

  // Sort the filtered results
  const sortedArtworks = useMemo(() => {
    const filtered = [...filteredResults];

    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => b.year - a.year);
      case 'oldest':
        return filtered.sort((a, b) => a.year - b.year);
      case 'title-asc':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return filtered.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return filtered;
    }
  }, [filteredResults, sortBy]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <SEO
        title="Tüm Eserler"
        description="Dünya çapında yetenekli sanatçılardan oluşan tam sanat eserleri koleksiyonumuzu inceleyin. Resim, heykel, fotoğraf ve daha fazlasını keşfedin."
        keywords="sanat eserleri, resim, heykel, fotoğraf, dijital sanat, koleksiyon"
      />
      <div className="page-container">
        <h1 className="section-title">Tüm Eserler</h1>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Dünya çapında yetenekli sanatçılardan oluşan tam sanat eserleri koleksiyonumuzu inceleyin
        </p>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Eser veya sanatçı ara..."
          />
        </div>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="lg:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Filtreleri aç/kapat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtreler
          </button>

          {/* Results Count */}
          <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <span className="font-semibold">{sortedArtworks.length}</span> eser bulundu
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-600 dark:text-gray-400">
              Sırala:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Sıralama seçenekleri"
            >
              <option value="newest">En Yeni</option>
              <option value="oldest">En Eski</option>
              <option value="title-asc">İsim (A-Z)</option>
              <option value="title-desc">İsim (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Note: FilterPanel temporarily disabled - needs implementation */}

          {/* Artworks Grid */}
          <div className="flex-1">
            {sortedArtworks.length === 0 ? (
              <EmptyState
                title="Eser Bulunamadı"
                description="Arama kriterlerinize uygun eser bulunamadı. Lütfen farklı filtreler deneyin."
                action={
                  searchQuery ? (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      Aramayı Temizle
                    </button>
                  ) : undefined
                }
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {sortedArtworks.map((artwork) => {
                  const artist = getArtistById(artwork.artistId);
                  const artworkUrl = `${window.location.origin}/artwork/${artwork.id}`;

                  return (
                    <div key={artwork.id} className="card group relative">
                      <Link to={`/artwork/${artwork.id}`}>
                        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                          <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />

                          {/* Favorite indicator badge */}
                          {isFavorite(artwork.id) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                              </svg>
                              Favori
                            </div>
                          )}
                        </div>
                      </Link>

                      <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex justify-between items-start mb-2">
                          <Link to={`/artwork/${artwork.id}`} className="flex-1">
                            <h3 className="text-lg sm:text-xl font-bold">{artwork.title}</h3>
                          </Link>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 ml-2">
                            <FavoriteButton artworkId={artwork.id} size="sm" />
                            <ShareButton
                              url={artworkUrl}
                              title={artwork.title}
                              description={artwork.description}
                            />
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                          Sanatçı:{' '}
                          <Link
                            to={`/artist/${artist?.id}`}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {artist?.name}
                          </Link>
                        </p>

                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-2">
                          <span>{artwork.year}</span>
                          <span>•</span>
                          <span>{artwork.medium}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 line-clamp-2 mb-3">
                          {artwork.description}
                        </p>

                        {!artwork.disableQuote && (
                          <a
                            href={`mailto:iletisim@eliyte.com?subject=Fiyat Teklifi - ${encodeURIComponent(artwork.title)}`}
                            className="mt-3 sm:mt-4 inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] text-xs sm:text-sm w-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Fiyat Teklifi İste
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artworks;
