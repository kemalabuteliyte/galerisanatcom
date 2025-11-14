import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { getArtworkById, getArtistById } from '../data/mockData';
import { FavoriteButton } from '../components/FavoriteButton';
import { ShareButton } from '../components/ShareButton';
import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';

/**
 * Favorites page - Shows all favorited artworks
 */
const Favorites = () => {
  const { favorites } = useFavorites();

  // Get full artwork objects for favorites
  const favoriteArtworks = favorites
    .map((id) => getArtworkById(id))
    .filter((artwork) => artwork !== null);

  return (
    <>
      <SEO
        title="Favori Eserlerim"
        description="Beğendiğiniz ve favorilere eklediğiniz sanat eserlerini görüntüleyin."
        keywords="favori eserler, beğenilen eserler, koleksiyon"
      />
      <div className="page-container">
        <h1 className="section-title">Favori Eserlerim</h1>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Beğendiğiniz ve favorilere eklediğiniz sanat eserlerini buradan görebilirsiniz
        </p>

        {favoriteArtworks.length === 0 ? (
          <EmptyState
            icon={
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            title="Henüz Favori Eseriniz Yok"
            description="Beğendiğiniz eserleri favorilere ekleyerek burada görüntüleyebilirsiniz. Bir eseri favorilere eklemek için eser kartındaki kalp ikonuna tıklayın."
            action={
              <Link
                to="/artworks"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-block"
              >
                Eserleri İncele
              </Link>
            }
          />
        ) : (
          <>
            <div className="mb-6 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <span className="font-semibold">{favoriteArtworks.length}</span> favori eser
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {favoriteArtworks.map((artwork) => {
                if (!artwork) return null;

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

                        {/* Favorite badge */}
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          Favori
                        </div>
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
          </>
        )}
      </div>
    </>
  );
};

export default Favorites;
