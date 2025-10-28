import { useParams, Link } from 'react-router-dom';
import { getArtworkById, getArtistById, getCategoryById, getArtworksByArtist } from '../data/mockData';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = getArtworkById(id || '');
  const artist = artwork ? getArtistById(artwork.artistId) : null;
  const category = artwork ? getCategoryById(artwork.categoryId) : null;
  const relatedArtworks = artist ? getArtworksByArtist(artist.id).filter(a => a.id !== artwork?.id) : [];

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

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="mb-6 sm:mb-8 text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
        <Link to="/" className="text-blue-600 hover:underline">Ana Sayfa</Link>
        <span className="mx-2">/</span>
        <Link to="/artworks" className="text-blue-600 hover:underline">Eserler</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600 dark:text-gray-400">{artwork.title}</span>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
        {/* Image */}
        <div className="card overflow-hidden">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-auto"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{artwork.title}</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
            Sanatçı:{' '}
            <Link
              to={`/artist/${artist.id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {artist.name}
            </Link>
          </p>

          {artwork.price && (
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 sm:mb-8">
              ₺{artwork.price.toLocaleString('tr-TR')}
            </div>
          )}

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

          <button className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] text-sm sm:text-base">
            Bu Eser Hakkında Bilgi Al
          </button>
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

      {/* Related Artworks */}
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
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{relatedArtwork.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                    {relatedArtwork.description}
                  </p>
                  {relatedArtwork.price && (
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                      ₺{relatedArtwork.price.toLocaleString('tr-TR')}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtworkDetail;
