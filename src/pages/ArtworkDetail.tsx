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
          <h1 className="text-3xl font-bold mb-4">Artwork Not Found</h1>
          <Link to="/artworks" className="text-blue-600 hover:underline">
            Back to Artworks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/artworks" className="text-blue-600 hover:underline">Artworks</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600 dark:text-gray-400">{artwork.title}</span>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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
          <h1 className="text-4xl font-bold mb-4">{artwork.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            by{' '}
            <Link
              to={`/artist/${artist.id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {artist.name}
            </Link>
          </p>

          {artwork.price && (
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">
              ${artwork.price.toLocaleString()}
            </div>
          )}

          <div className="space-y-4 mb-8">
            <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2">
              <span className="font-semibold w-32">Year:</span>
              <span className="text-gray-600 dark:text-gray-400">{artwork.year}</span>
            </div>
            <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2">
              <span className="font-semibold w-32">Medium:</span>
              <span className="text-gray-600 dark:text-gray-400">{artwork.medium}</span>
            </div>
            <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2">
              <span className="font-semibold w-32">Dimensions:</span>
              <span className="text-gray-600 dark:text-gray-400">{artwork.dimensions}</span>
            </div>
            <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2">
              <span className="font-semibold w-32">Category:</span>
              <Link
                to={`/categories`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {category?.name}
              </Link>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Artwork</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {artwork.description}
            </p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Inquire About This Artwork
          </button>
        </div>
      </div>

      {/* Artist Bio Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <img
              src={artist.photo}
              alt={artist.name}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">About the Artist</h2>
            <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
              <Link to={`/artist/${artist.id}`} className="hover:underline">
                {artist.name}
              </Link>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {artist.bio}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Nationality: {artist.nationality}</span>
              <span>•</span>
              <span>Born: {artist.birthYear}</span>
            </div>
            {(artist.website || artist.social) && (
              <div className="mt-4 flex gap-4">
                {artist.website && (
                  <a
                    href={artist.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Website
                  </a>
                )}
                {artist.social?.instagram && (
                  <a
                    href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Instagram
                  </a>
                )}
              </div>
            )}
            <div className="mt-4">
              <Link
                to={`/artist/${artist.id}`}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Artist Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Artworks */}
      {relatedArtworks.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8">More from {artist.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArtworks.slice(0, 3).map((relatedArtwork) => (
              <Link
                key={relatedArtwork.id}
                to={`/artwork/${relatedArtwork.id}`}
                className="card group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={relatedArtwork.image}
                    alt={relatedArtwork.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedArtwork.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                    {relatedArtwork.description}
                  </p>
                  {relatedArtwork.price && (
                    <p className="mt-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
                      ${relatedArtwork.price.toLocaleString()}
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
