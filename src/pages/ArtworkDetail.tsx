import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtworkById, getArtistById, getCategoryById, getArtworksByArtist, artworks } from '../data/mockData';
import { useFavorites } from '../hooks/useFavorites';
import { ImageLightbox } from '../components/ImageLightbox';
import { ShareButton } from '../components/ShareButton';
import { FavoriteButton } from '../components/FavoriteButton';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = getArtworkById(id || '');
  const artist = artwork ? getArtistById(artwork.artistId) : null;
  const category = artwork ? getCategoryById(artwork.categoryId) : null;
  const relatedArtworks = artist ? getArtworksByArtist(artist.id).filter(a => a.id !== artwork?.id) : [];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { isFavorite } = useFavorites();

  // Get 3 similar artworks from the same category (excluding current artwork)
  const similarArtworks = artwork
    ? artworks
        .filter(a => a.categoryId === artwork.categoryId && a.id !== artwork.id)
        .slice(0, 3)
    : [];

  const artworkUrl = artwork ? `${window.location.origin}/artwork/${artwork.id}` : '';

  if (!artwork || !artist) {
    return (
      <div className="page-container">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Eser Bulunamadı</h1>
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
    { label: artwork.title }
  ];

  return (
    <>
      <SEO
        title={artwork.title}
        description={artwork.description}
        keywords={`${artwork.title}, ${artist.name}, ${category?.name}, sanat eseri, ${artwork.medium}`}
        ogImage={artwork.image}
      />
      <div className="page-container">
        {/* Breadcrumb */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Image */}
          <div className="card overflow-hidden relative group cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-auto"
            />

            {/* Zoom hint overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 rounded-full p-3">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>

            {/* Favorite badge */}
            {isFavorite(artwork.id) && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Favorilerimde
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex-1">{artwork.title}</h1>

              {/* Action buttons */}
              <div className="flex items-center gap-2 ml-4">
                <ShareButton
                  url={artworkUrl}
                  title={artwork.title}
                  description={artwork.description}
                />
                <FavoriteButton artworkId={artwork.id} showLabel />
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              Sanatçı:{' '}
              <Link
                to={`/artist/${artist.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {artist.name}
              </Link>
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-semibold w-24 sm:w-32 text-sm sm:text-base">Yıl:</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{artwork.year}</span>
              </div>
              <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-semibold w-24 sm:w-32 text-sm sm:text-base">Teknik:</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{artwork.medium}</span>
              </div>
              <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-semibold w-24 sm:w-32 text-sm sm:text-base">Boyutlar:</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{artwork.dimensions}</span>
              </div>
              <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-semibold w-24 sm:w-32 text-sm sm:text-base">Kategori:</span>
                <Link
                  to={`/categories`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
                >
                  {category?.name}
                </Link>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Bu Eser Hakkında</h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {artwork.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {!artwork.disableQuote && (
                <a
                  href={`mailto:iletisim@eliyte.com?subject=Fiyat Teklifi - ${encodeURIComponent(artwork.title)}`}
                  className="flex-1 inline-flex items-center justify-center bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] text-sm sm:text-base"
                >
                  Fiyat Teklifi İste
                </a>
              )}

              <button
                onClick={() => window.open(artwork.image, '_blank')}
                className="inline-flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 sm:py-4 px-6 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors min-h-[44px] text-sm sm:text-base gap-2"
                aria-label="Görseli indir"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                İndir
              </button>
            </div>
          </div>
        </div>

        {/* Artist Bio Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <img
                src={artist.photo}
                alt={artist.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Sanatçı Hakkında</h2>
              <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                <Link to={`/artist/${artist.id}`} className="hover:underline">
                  {artist.name}
                </Link>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                {artist.bio}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 justify-center md:justify-start">
                <span>Uyruk: {artist.nationality}</span>
                <span>•</span>
                <span>Doğum: {artist.birthYear}</span>
              </div>
              {(artist.website || artist.social) && (
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  {artist.website && (
                    <a
                      href={artist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base min-h-[44px] inline-flex items-center"
                    >
                      Web Sitesi
                    </a>
                  )}
                  {artist.social?.instagram && (
                    <a
                      href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base min-h-[44px] inline-flex items-center"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              )}
              <div className="mt-4 sm:mt-6">
                <Link
                  to={`/artist/${artist.id}`}
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors min-h-[44px] text-sm sm:text-base"
                >
                  Sanatçı Profilini Görüntüle
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* You Might Also Like Section */}
        {similarArtworks.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Bunları da Beğenebilirsiniz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {similarArtworks.map((similarArtwork) => {
                const similarArtist = getArtistById(similarArtwork.artistId);
                return (
                  <Link
                    key={similarArtwork.id}
                    to={`/artwork/${similarArtwork.id}`}
                    className="card group"
                  >
                    <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                      <img
                        src={similarArtwork.image}
                        alt={similarArtwork.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{similarArtwork.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {similarArtist?.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                        {similarArtwork.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Artworks from Same Artist */}
        {relatedArtworks.length > 0 && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{artist.name} - Diğer Eserler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {relatedArtworks.slice(0, 3).map((relatedArtwork) => (
                <Link
                  key={relatedArtwork.id}
                  to={`/artwork/${relatedArtwork.id}`}
                  className="card group"
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                    <img
                      src={relatedArtwork.image}
                      alt={relatedArtwork.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{relatedArtwork.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                      {relatedArtwork.description}
                    </p>
                    {!relatedArtwork.disableQuote && (
                      <a
                        href={`mailto:iletisim@eliyte.com?subject=Fiyat Teklifi - ${encodeURIComponent(relatedArtwork.title)}`}
                        className="mt-3 sm:mt-4 inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] text-xs sm:text-sm w-full"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Fiyat Teklifi İste
                      </a>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={[artwork.image]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default ArtworkDetail;
