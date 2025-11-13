import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/**
 * 404 Not Found page
 * Displayed when user navigates to a non-existent route
 */
const NotFound = () => {
  return (
    <>
      <SEO
        title="Sayfa Bulunamadı"
        description="Aradığınız sayfa bulunamadı. Lütfen ana sayfaya dönün veya eserlere göz atın."
      />
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              404
            </h1>
            <div className="text-6xl mb-4">🎨</div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Sayfa Bulunamadı
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen ana sayfaya dönün veya
            eserlerimize göz atın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center min-h-[44px] focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Ana sayfaya dön"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Ana Sayfa
            </Link>

            <Link
              to="/artworks"
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors inline-flex items-center justify-center min-h-[44px] focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Eserlere göz at"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Eserlere Göz At
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
