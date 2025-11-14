import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { categories, getArtworksByCategory, artworks } from '../data/mockData';
import { useFavorites } from '../hooks/useFavorites';
import { SearchBar } from '../components/SearchBar';
import SEO from '../components/SEO';

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { favorites } = useFavorites();

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;

    const query = searchQuery.toLowerCase();
    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Check if a category has any favorited artworks
  const categoryHasFavorites = (categoryId: string): boolean => {
    const categoryArtworks = artworks.filter((artwork) => artwork.categoryId === categoryId);
    return categoryArtworks.some((artwork) => favorites.includes(artwork.id));
  };

  return (
    <>
      <SEO
        title="Sanat Kategorileri"
        description="Kategorilere göre düzenlenmiş çeşitli sanat eserlerimizi keşfedin. Resim, heykel, fotoğraf, dijital sanat ve daha fazlası."
        keywords="sanat kategorileri, resim, heykel, fotoğraf, dijital sanat, karma teknik"
      />
      <div className="page-container">
        <h1 className="section-title">Sanat Kategorileri</h1>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Kategorilere göre düzenlenmiş çeşitli sanat eserlerimizi keşfedin
        </p>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12 max-w-2xl mx-auto">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Kategori ara..."
          />
        </div>

        {/* Results count */}
        {searchQuery && (
          <div className="mb-6 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <span className="font-semibold">{filteredCategories.length}</span> kategori bulundu
          </div>
        )}

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Arama kriterinize uygun kategori bulunamadı.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Tüm Kategorileri Göster
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {filteredCategories.map((category) => {
              const artworksCount = getArtworksByCategory(category.id).length;
              const hasFavorites = categoryHasFavorites(category.id);

              return (
                <div key={category.id} className="card group relative">
                  <div className="relative overflow-hidden h-56 sm:h-64 md:h-72">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 sm:p-6 text-white w-full">
                        <div className="flex justify-between items-end">
                          <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                              {category.name}
                            </h2>
                            <p className="text-sm sm:text-base text-gray-200">{artworksCount} eser</p>
                          </div>

                          {/* Favorite indicator */}
                          {hasFavorites && (
                            <div
                              className="bg-red-500 text-white p-2 rounded-full"
                              title="Bu kategoride favori eserleriniz var"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                      {category.description}
                    </p>
                    <Link
                      to={`/artworks?category=${category.id}`}
                      className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors min-h-[44px] text-sm sm:text-base w-full sm:w-auto"
                      aria-label={`${category.name} kategorisindeki eserleri görüntüle`}
                    >
                      Eserleri Görüntüle
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
