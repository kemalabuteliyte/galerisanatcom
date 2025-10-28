import { Link } from 'react-router-dom';
import { galleries, getArtworkById } from '../data/mockData';

const Galleries = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Galerilerimiz</h1>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        İstisnai dijital sanat eserlerini sergileyen özenle düzenlenmiş galeri alanlarımızı ziyaret edin
      </p>

      <div className="space-y-12 sm:space-y-16">
        {galleries.map((gallery) => {
          const featuredArtworks = gallery.featuredArtworks
            .map((id) => getArtworkById(id))
            .filter((artwork) => artwork !== undefined);

          return (
            <div key={gallery.id} className="card overflow-hidden">
              {/* Gallery Header Image */}
              <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                <img
                  src={gallery.image}
                  alt={gallery.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 sm:p-6 md:p-8 text-white w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{gallery.name}</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200">{gallery.location}</p>
                  </div>
                </div>
              </div>

              {/* Gallery Info */}
              <div className="p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  {gallery.description}
                </p>

                {/* Featured Artworks */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Öne Çıkan Eserler</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {featuredArtworks.map((artwork) => (
                    <Link
                      key={artwork.id}
                      to={`/artwork/${artwork.id}`}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-lg h-40 sm:h-48 mb-2 sm:mb-3">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="font-semibold text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {artwork.title}
                      </h4>
                      {artwork.price && (
                        <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold">
                          ₺{artwork.price.toLocaleString('tr-TR')}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Galleries;
