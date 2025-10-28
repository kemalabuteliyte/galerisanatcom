import { useParams, Link } from 'react-router-dom';
import { getArtistById, getArtworksByArtist } from '../data/mockData';

const Artist = () => {
  const { id } = useParams<{ id: string }>();
  const artist = getArtistById(id || '');
  const artworks = artist ? getArtworksByArtist(artist.id) : [];

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

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="mb-6 sm:mb-8 text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
        <Link to="/" className="text-blue-600 hover:underline">Ana Sayfa</Link>
        <span className="mx-2">/</span>
        <Link to="/artworks" className="text-blue-600 hover:underline">Eserler</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600 dark:text-gray-400">{artist.name}</span>
      </nav>

      {/* Artist Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 text-white">
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

      {/* Artworks by this artist */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{artist.name} - Eserleri</h2>
        {artworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {artworks.map((artwork) => (
              <Link
                key={artwork.id}
                to={`/artwork/${artwork.id}`}
                className="card group"
              >
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{artwork.title}</h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-2">
                    <span>{artwork.year}</span>
                    <span>•</span>
                    <span>{artwork.medium}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
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
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Bu sanatçı için henüz eser bulunmamaktadır.</p>
        )}
      </div>
    </div>
  );
};

export default Artist;
