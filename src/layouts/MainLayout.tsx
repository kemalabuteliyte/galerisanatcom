import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleGoogleTranslate = () => {
    const currentUrl = window.location.href;
    window.location.href = `https://translate.google.com/translate?sl=tr&tl=auto&u=${encodeURIComponent(currentUrl)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Eliyte
            </Link>

            {/* Google Translate Button - Desktop & Mobile */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleGoogleTranslate}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                title="Google Translate ile Çevir"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="hidden sm:inline">Çevir</span>
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
                aria-label="Menüyü Aç/Kapat"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/artworks"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Eserler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Kategoriler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/galleries"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Galeriler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/submit"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Eser Gönder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    onClick={toggleMobileMenu}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/artworks"
                    onClick={toggleMobileMenu}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    Eserler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    onClick={toggleMobileMenu}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    Kategoriler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/galleries"
                    onClick={toggleMobileMenu}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    Galeriler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={toggleMobileMenu}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/submit"
                    onClick={toggleMobileMenu}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    Eser Gönder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={toggleMobileMenu}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Eliyte</h3>
              <p className="text-gray-400">
                Dünya çapında yetenekli sanatçıların en iyi sanat eserlerini sergiliyoruz.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/artworks" className="text-gray-400 hover:text-white transition-colors">
                    Eserlere Göz At
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-gray-400 hover:text-white transition-colors">
                    Kategoriler
                  </Link>
                </li>
                <li>
                  <Link to="/galleries" className="text-gray-400 hover:text-white transition-colors">
                    Galeriler
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Bağlantı</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Eliyte. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
