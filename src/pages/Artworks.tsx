import { Link } from 'react-router-dom';
import { artworks, getArtistById } from '../data/mockData';

const Artworks = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">All Artworks</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Browse our complete collection of digital artworks from talented artists worldwide
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => {
          const artist = getArtistById(artwork.artistId);
          return (
            <Link
              key={artwork.id}
              to={`/artwork/${artwork.id}`}
              className="card group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  by{' '}
                  <Link
                    to={`/artist/${artist?.id}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {artist?.name}
                  </Link>
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-2">
                  <span>{artwork.year}</span>
                  <span>•</span>
                  <span>{artwork.medium}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                  {artwork.description}
                </p>
                {artwork.price && (
                  <p className="mt-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
                    ${artwork.price.toLocaleString()}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Artworks;
