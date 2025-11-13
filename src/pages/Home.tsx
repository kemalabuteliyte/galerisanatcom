import { Link } from 'react-router-dom';
import { getFeaturedArtworks, getArtistById, artists, testimonials, statistics } from '../data/mockData';
import SEO from '../components/SEO';

/**
 * Home page component with enhanced sections
 * Features: Hero, Featured Artworks, Statistics, How It Works, Featured Artists, Testimonials, CTA
 */
const Home = () => {
  const featuredArtworks = getFeaturedArtworks();
  const featuredArtists = artists.slice(0, 3);

  return (
    <>
      <SEO
        title="Ana Sayfa"
        description="Eliyte™ Sanat Galerisi - Türkiye'nin önde gelen dijital sanat platformu. Yetenekli sanatçıların eserlerini keşfedin ve koleksiyonunuza ekleyin."
        keywords="sanat galerisi, dijital sanat, eserler, sanatçılar, koleksiyon"
      />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
              Eliyte™ Sanat Galerisi
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Dünyanın dört bir yanından yetenekli sanatçıların muhteşem sanat eserlerinden oluşan
              özenle seçilmiş koleksiyonumuzu keşfedin
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/artworks"
                className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Eserleri incele"
              >
                Eserleri İncele
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Hakkımızda daha fazla bilgi"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white dark:bg-gray-900 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {statistics.map((stat) => (
                <div
                  key={stat.id}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-2" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
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
                  aria-label={`${artwork.title} eserine git`}
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                        className="mt-3 sm:mt-4 inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] text-xs sm:text-sm w-full focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${artwork.title} için fiyat teklifi iste`}
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

        {/* How It Works Section */}
        <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">
              Nasıl Çalışır?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">1. Keşfedin</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Geniş koleksiyonumuzdan beğendiğiniz sanat eserlerini keşfedin. Kategorilere
                  göre filtreleyin ve sanatçıları tanıyın.
                </p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">2. İletişime Geçin</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Beğendiğiniz eser için bizimle iletişime geçin. Fiyat teklifi alın ve detaylı
                  bilgi edinin.
                </p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">3. Sahip Olun</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Güvenli ödeme ile eseri satın alın. Dijital eserleri anında indirin veya
                  fiziksel eserlerin teslimatını bekleyin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Artists */}
        <section className="page-container">
          <h2 className="section-title">Öne Çıkan Sanatçılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {featuredArtists.map((artist) => (
              <Link
                key={artist.id}
                to={`/artist/${artist.id}`}
                className="card group text-center p-6 md:p-8 hover:scale-105 transition-transform"
                aria-label={`${artist.name} sanatçı profiline git`}
              >
                <img
                  src={artist.photo}
                  alt={artist.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 dark:border-blue-900 group-hover:border-blue-500 transition-colors"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                  {artist.nationality} • {new Date().getFullYear() - artist.birthYear} yaşında
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {artist.bio}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">
              Müşterilerimiz Ne Diyor?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3" aria-label={`${testimonial.rating} yıldız`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4">
              Daha Fazlasını Keşfetmeye Hazır mısınız?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Tam sanat eserleri koleksiyonumuza dalın, yetenekli sanatçıları keşfedin ve
              koleksiyonunuz için mükemmel eseri bulun.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/artworks"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors min-h-[44px] focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Tüm eserleri görüntüle"
              >
                Tüm Eserleri Görüntüle
              </Link>
              <Link
                to="/submit"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors min-h-[44px] focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Eser gönderin"
              >
                Eserinizi Gönderin
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
