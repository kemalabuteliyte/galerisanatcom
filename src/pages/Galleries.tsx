import { Link } from 'react-router-dom';
import { galleries, getArtworkById } from '../data/mockData';

const Galleries = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Our Galleries</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Visit our curated gallery spaces showcasing exceptional digital artworks
      </p>

      <div className="space-y-16">
        {galleries.map((gallery) => {
          const featuredArtworks = gallery.featuredArtworks
            .map((id) => getArtworkById(id))
            .filter((artwork) => artwork !== undefined);

          return (
            <div key={gallery.id} className="card overflow-hidden">
              {/* Gallery Header Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={gallery.image}
                  alt={gallery.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-8 text-white w-full">
                    <h2 className="text-4xl font-bold mb-2">{gallery.name}</h2>
                    <p className="text-xl text-gray-200">{gallery.location}</p>
                  </div>
                </div>
              </div>

              {/* Gallery Info */}
              <div className="p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {gallery.description}
                </p>

                {/* Featured Artworks */}
                <h3 className="text-2xl font-bold mb-6">Featured Artworks</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredArtworks.map((artwork) => (
                    <Link
                      key={artwork.id}
                      to={`/artwork/${artwork.id}`}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-lg h-48 mb-3">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {artwork.title}
                      </h4>
                      {artwork.price && (
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          ${artwork.price.toLocaleString()}
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
