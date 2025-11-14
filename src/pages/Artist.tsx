import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtistById, getArtworksByArtist } from '../data/mockData';
import { useFavorites } from '../hooks/useFavorites';
import Breadcrumbs from '../components/Breadcrumbs';
import { ShareButton } from '../components/ShareButton';
import { FavoriteButton } from '../components/FavoriteButton';
import SEO from '../components/SEO';

type SortOption = 'newest' | 'oldest' | 'title-asc' | 'title-desc';

const Artist = () => {
  const { id } = useParams<{ id: string }>();
  const artist = getArtistById(id || '');
  const artworks = artist ? getArtworksByArtist(artist.id) : [];
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const { isFavorite } = useFavorites();

  // Sort artworks
  const sortedArtworks = useMemo(() => {
    const sorted = [...artworks];

    switch (sortBy) {
      case 'newest':
        return sorted.sort((a, b) => b.year - a.year);
      case 'oldest':
        return sorted.sort((a, b) => a.year - b.year);
      case 'title-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  }, [artworks, sortBy]);

  const artistUrl = artist ? `${window.location.origin}/artist/${artist.id}` : '';

  if (!artist) {
    return (
      <div className="page-container">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Sanatçı Bulunamadı</h1>
          <Link to="/artworks" className="text-blue-600 hover:underline min-h-[44px] inline-flex items-center">
            Eserlere Dön
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Eserler', href: '/artworks' },
    { label: artist.name }
  ];

  return (
    <>
      <SEO
        title={artist.name}
        description={artist.bio}
        keywords={`${artist.name}, sanatçı, ${artist.nationality}, sanat eserleri`}
        ogImage={artist.photo}
      />
      <div className="page-container">
        {/* Breadcrumb */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Artist Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 text-white relative">
          {/* Share button for artist profile */}
          <div className="absolute top-4 right-4">
            <ShareButton
              url={artistUrl}
              title={`${artist.name} - Sanatçı Profili`}
              description={artist.bio}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <img
              src={artist.photo}
              alt={artist.name}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{artist.name}</h1>
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-start text-sm sm:text-base md:text-lg">
                <span>{artist.nationality}</span>
                <span>•</span>
                <span>Doğum {artist.birthYear}</span>
                <span>•</span>
                <span>{artworks.length} Eser</span>
              </div>
              {(artist.website || artist.social) && (
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  {artist.website && (
                    <a
                      href={artist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold min-h-[44px] inline-flex items-center justify-center text-sm sm:text-base"
                    >
                      Web Sitesini Ziyaret Et
                    </a>
                  )}
                  {artist.social?.instagram && (
                    <a
                      href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold min-h-[44px] inline-flex items-center justify-center text-sm sm:text-base"
                    >
                      Instagram
                    </a>
                  )}
                  {artist.social?.twitter && (
                    <a
                      href={`https://twitter.com/${artist.social.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold min-h-[44px] inline-flex items-center justify-center text-sm sm:text-base"
                    >
                      Twitter
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Artist Bio */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{artist.name} Hakkında</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            {artist.bio}
          </p>
        </div>

        {/* Artworks Section */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">{artist.name} - Eserleri</h2>

            {/* Sort Dropdown */}
            {sortedArtworks.length > 0 && (
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
            )}
          </div>

          {sortedArtworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {sortedArtworks.map((artwork) => {
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

                        {/* Favorite indicator */}
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
          ) : (
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Bu sanatçı için henüz eser bulunmamaktadır.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Artist;
