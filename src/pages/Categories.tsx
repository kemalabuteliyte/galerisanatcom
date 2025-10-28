import { Link } from 'react-router-dom';
import { categories, getArtworksByCategory } from '../data/mockData';

const Categories = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Sanat Kategorileri</h1>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Kategorilere göre düzenlenmiş çeşitli sanat eserlerimizi keşfedin
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {categories.map((category) => {
          const artworksCount = getArtworksByCategory(category.id).length;
          return (
            <div key={category.id} className="card group">
              <div className="relative overflow-hidden h-56 sm:h-64 md:h-72">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 sm:p-6 text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{category.name}</h2>
                    <p className="text-sm sm:text-base text-gray-200">{artworksCount} eser</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <Link
                  to={`/artworks?category=${category.id}`}
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors min-h-[44px] text-sm sm:text-base"
                >
                  Eserleri Görüntüle
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
