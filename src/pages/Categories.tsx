import { Link } from 'react-router-dom';
import { categories, getArtworksByCategory } from '../data/mockData';

const Categories = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Art Categories</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Explore our diverse collection of artworks organized by category
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => {
          const artworksCount = getArtworksByCategory(category.id).length;
          return (
            <div key={category.id} className="card group">
              <div className="relative overflow-hidden h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                    <p className="text-gray-200">{artworksCount} artworks</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <Link
                  to={`/artworks?category=${category.id}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Artworks
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
