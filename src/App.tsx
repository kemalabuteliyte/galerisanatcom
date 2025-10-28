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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="artworks" element={<Artworks />} />
          <Route path="artwork/:id" element={<ArtworkDetail />} />
          <Route path="categories" element={<Categories />} />
          <Route path="galleries" element={<Galleries />} />
          <Route path="artist/:id" element={<Artist />} />
          <Route path="submit" element={<SubmitArtwork />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
