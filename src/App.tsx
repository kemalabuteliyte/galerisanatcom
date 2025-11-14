import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Artworks from './pages/Artworks';
import ArtworkDetail from './pages/ArtworkDetail';
import Categories from './pages/Categories';
import Galleries from './pages/Galleries';
import Artist from './pages/Artist';
import Contact from './pages/Contact';
import About from './pages/About';
import SubmitArtwork from './pages/SubmitArtwork';
import Favorites from './pages/Favorites';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieConsent } from './components/CookieConsent';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { SearchProvider } from './contexts/SearchContext';

/**
 * Main App component
 * Defines all routes for the application with error boundary and context providers
 */
function App() {
  return (
    <ErrorBoundary>
      <FavoritesProvider>
        <SearchProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="artworks" element={<Artworks />} />
                <Route path="artwork/:id" element={<ArtworkDetail />} />
                <Route path="categories" element={<Categories />} />
                <Route path="galleries" element={<Galleries />} />
                <Route path="artist/:id" element={<Artist />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="submit" element={<SubmitArtwork />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                {/* 404 catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            <CookieConsent />
          </Router>
        </SearchProvider>
      </FavoritesProvider>
    </ErrorBoundary>
  );
}

export default App;
