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
          <h1 className="text-3xl font-bold mb-4">Artist Not Found</h1>
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
        <span className="text-gray-600 dark:text-gray-400">{artist.name}</span>
      </nav>

      {/* Artist Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 mb-12 text-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={artist.photo}
            alt={artist.name}
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{artist.name}</h1>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-lg">
              <span>{artist.nationality}</span>
              <span>•</span>
              <span>Born {artist.birthYear}</span>
            </div>
            {(artist.website || artist.social) && (
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                {artist.website && (
                  <a
                    href={artist.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Visit Website
                  </a>
                )}
                {artist.social?.instagram && (
                  <a
                    href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur px-6 py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold"
                  >
                    Instagram
                  </a>
                )}
                {artist.social?.twitter && (
                  <a
                    href={`https://twitter.com/${artist.social.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur px-6 py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold"
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
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">About {artist.name}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          {artist.bio}
        </p>
      </div>

      {/* Artworks by this artist */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Artworks by {artist.name}</h2>
        {artworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
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
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No artworks available for this artist yet.</p>
        )}
      </div>
    </div>
  );
};

export default Artist;
