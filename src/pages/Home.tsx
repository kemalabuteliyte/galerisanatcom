import { Link } from 'react-router-dom';
import { getFeaturedArtworks, getArtistById } from '../data/mockData';

const Home = () => {
  const featuredArtworks = getFeaturedArtworks();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Eliyte Sanat Galerisi
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Dünyanın dört bir yanından yetenekli sanatçıların muhteşem sanat eserlerinden oluşan özenle seçilmiş koleksiyonumuzu keşfedin
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              to="/artworks"
              className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors min-h-[44px] flex items-center justify-center"
            >
              Eserleri İncele
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors min-h-[44px] flex items-center justify-center"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="page-container">
        <h2 className="section-title">Öne Çıkan Eserler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuredArtworks.map((artwork) => {
            const artist = getArtistById(artwork.artistId);
            return (
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
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                    Sanatçı: {artist?.name}
                  </p>
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
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4">Daha Fazlasını Keşfetmeye Hazır mısınız?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Tam sanat eserleri koleksiyonumuza dalın, yetenekli sanatçıları keşfedin ve koleksiyonunuz için mükemmel eseri bulun.
          </p>
          <Link
            to="/artworks"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px]"
          >
            Tüm Eserleri Görüntüle
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
