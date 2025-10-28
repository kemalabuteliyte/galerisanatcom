import { Link } from 'react-router-dom';
import { getFeaturedArtworks, getArtistById } from '../data/mockData';

const Home = () => {
  const featuredArtworks = getFeaturedArtworks();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Digital Art
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore a curated collection of stunning digital artworks from talented artists around the world
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/artworks"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Artworks
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="page-container">
        <h2 className="section-title">Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork) => {
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
                    by {artist?.name}
                  </p>
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
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore More?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Dive into our full collection of artworks, discover talented artists, and find the perfect piece for your collection.
          </p>
          <Link
            to="/artworks"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Artworks
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
