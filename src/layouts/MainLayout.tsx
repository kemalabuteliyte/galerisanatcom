import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';

/**
 * Main layout component
 * Provides the overall structure including header, footer, and navigation
 */
const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  /**
   * Handle Google Translate redirect
   */
  const handleGoogleTranslate = () => {
    const currentUrl = window.location.href;
    window.location.href = `https://translate.google.com/translate?sl=tr&tl=auto&u=${encodeURIComponent(currentUrl)}`;
  };

  /**
   * Handle newsletter subscription
   */
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      return;
    }

    // Simulate API call
    setNewsletterStatus('success');
    setNewsletterEmail('');

    // Reset success message after 3 seconds
    setTimeout(() => {
      setNewsletterStatus('idle');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Eliyte™
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
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Eliyte™</h3>
              <p className="text-gray-400 mb-4">
                Dünya çapında yetenekli sanatçıların en iyi sanat eserlerini sergiliyoruz.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                  aria-label="Instagram'da takip edin"
                  title="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                  aria-label="Twitter'da takip edin"
                  title="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                  aria-label="Facebook'ta takip edin"
                  title="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
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
                <li>
                  <Link to="/submit" className="text-gray-400 hover:text-white transition-colors">
                    Eser Gönder
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kurumsal</h3>
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
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Kullanım Koşulları
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Bülten</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Yeni eserler ve sergiler hakkında güncellemeler alın.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
                  aria-label="E-posta adresiniz"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Bültene abone ol"
                >
                  Abone Ol
                </button>
                {newsletterStatus === 'success' && (
                  <p className="text-green-400 text-sm">Başarıyla abone oldunuz!</p>
                )}
                {newsletterStatus === 'error' && (
                  <p className="text-red-400 text-sm">Geçerli bir e-posta adresi giriniz.</p>
                )}
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  &copy; 2025 Eliyte™. Tüm hakları saklıdır.
                </p>
                <p className="text-gray-400 text-sm text-center md:text-left">
                  Crafted with ❤️ by Eliyte
                </p>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Gizlilik
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Koşullar
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Çerezler
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
