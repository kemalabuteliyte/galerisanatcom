# Eliyte™ Sanat Galerisi

<div align="center">
  <h3>Türkiye'nin İlk Kapsamlı Dijital Sanat Koleksiyonu</h3>
  <p>Profesyonel, production-ready sanat galerisi platformu</p>

  ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?style=for-the-badge&logo=vite)
</div>

---

## 🎨 Proje Hakkında

**Eliyte™ Sanat Galerisi**, dijital, resim, heykel, fotoğraf ve tüm sanat türlerini destekleyen, Türkiye'nin ilk kapsamlı dijital sanat platformudur. Sanatçıların eserlerini dünya ile paylaşmasına ve koleksiyoncuların benzersiz sanat eserleri keşfetmesine olanak sağlar.

### ✨ Öne Çıkan Özellikler

- ✅ **15+ Sanat Eseri** - Detaylı açıklamalar ve yüksek kaliteli görseller
- ✅ **6 Sanatçı** - Kapsamlı biyografiler ve portfolyolar
- ✅ **6 Kategori** - Soyut, Dijital Resim, Heykel, Fotoğraf ve daha fazlası
- ✅ **Favori Sistemi** - LocalStorage ile kalıcı favoriler
- ✅ **Arama & Filtreleme** - Gelişmiş arama ve sıralama özellikleri
- ✅ **Sosyal Paylaşım** - Facebook, Twitter, WhatsApp, LinkedIn entegrasyonu
- ✅ **Lightbox Galeri** - Tam ekran görüntüleme, zoom ve indirme
- ✅ **SEO Optimizasyonu** - Open Graph, Twitter Cards, Structured Data
- ✅ **GDPR Uyumlu** - Cookie consent banner ve gizlilik politikası
- ✅ **Responsive Tasarım** - Mobil-first, tüm cihazlarda mükemmel görünüm
- ✅ **Erişilebilirlik** - WCAG 2.1 uyumlu, ARIA labels
- ✅ **Dark Mode** - Koyu tema desteği
- ✅ **Form Validation** - Gerçek zamanlı form doğrulama
- ✅ **Error Handling** - Production-ready hata yönetimi
- ✅ **Google Translate** - Otomatik çeviri desteği

---

## 📦 Teknoloji Stack

### Core
- **React 19.1.1** - Modern UI kütüphanesi
- **TypeScript 5.9.3** - Type safety ve IntelliSense
- **Vite 7.1.12** - Hızlı build tool ve dev server
- **React Router DOM 7.9.4** - Client-side routing

### Styling
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformations
- **Autoprefixer 10.4.21** - Vendor prefixes

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript linting rules

---

## 🗂️ Proje Yapısı

```
eliyte-gallery/
├── public/
│   ├── sitemap.xml              # SEO sitemap
│   ├── robots.txt               # Search engine directives
│   └── vite.svg                 # Favicon
├── src/
│   ├── components/              # Reusable components
│   │   ├── Breadcrumbs.tsx      # Navigation breadcrumbs
│   │   ├── CookieConsent.tsx    # GDPR cookie banner
│   │   ├── EmptyState.tsx       # Empty data states
│   │   ├── ErrorBoundary.tsx    # React error boundary
│   │   ├── FavoriteButton.tsx   # Animated favorite toggle
│   │   ├── FilterPanel.tsx      # Advanced filtering
│   │   ├── ImageLightbox.tsx    # Full-screen image viewer
│   │   ├── LoadingSpinner.tsx   # Loading indicator
│   │   ├── ScrollToTop.tsx      # Scroll to top button
│   │   ├── SearchBar.tsx        # Search component
│   │   ├── SEO.tsx              # Dynamic meta tags
│   │   └── ShareButton.tsx      # Social share component
│   ├── contexts/                # React contexts
│   │   ├── FavoritesContext.tsx # Global favorites state
│   │   └── SearchContext.tsx    # Global search state
│   ├── data/
│   │   └── mockData.ts          # Mock data (15 artworks, 6 artists, etc.)
│   ├── hooks/                   # Custom React hooks
│   │   ├── useFavorites.ts      # Favorites management
│   │   ├── useIntersectionObserver.ts # Viewport detection
│   │   ├── useLocalStorage.ts   # localStorage wrapper
│   │   ├── useMediaQuery.ts     # Responsive breakpoints
│   │   └── useSearch.ts         # Search functionality
│   ├── layouts/
│   │   └── MainLayout.tsx       # Main layout with navigation
│   ├── pages/                   # Route pages
│   │   ├── About.tsx            # About us page
│   │   ├── Artist.tsx           # Artist profile
│   │   ├── ArtworkDetail.tsx    # Artwork detail with lightbox
│   │   ├── Artworks.tsx         # All artworks with search/filter
│   │   ├── Categories.tsx       # Art categories
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Favorites.tsx        # User's favorite artworks
│   │   ├── Galleries.tsx        # Gallery collections
│   │   ├── Home.tsx             # Homepage
│   │   ├── NotFound.tsx         # 404 page
│   │   ├── PrivacyPolicy.tsx    # Privacy policy
│   │   ├── SubmitArtwork.tsx    # Artwork submission guidelines
│   │   └── TermsOfService.tsx   # Terms of service
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── utils/                   # Utility functions
│   │   ├── analytics.ts         # Analytics helper (GA ready)
│   │   ├── formatters.ts        # Date, number, text formatters
│   │   ├── imageUtils.ts        # Image helpers
│   │   └── validators.ts        # Form validators
│   ├── App.tsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.tsx                 # App entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind configuration
├── vite.config.ts               # Vite configuration
└── README.md                    # This file
```

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/yourusername/eliyte-gallery.git
cd eliyte-gallery

# Bağımlılıkları yükleyin
npm install
```

### Geliştirme

```bash
# Development sunucusunu başlatın
npm run dev

# Tarayıcınızda açın: http://localhost:5173
```

### Production Build

```bash
# Production build oluşturun
npm run build

# Build'i önizleyin
npm run preview
```

### Linting

```bash
# Kodu lint edin
npm run lint
```

---

## 📱 Özellikler Detayı

### 🎨 Sanat Eseri Yönetimi

#### Eser Detayları
- Yüksek çözünürlüklü görsel
- Sanatçı bilgisi ve biyografisi
- Kategori ve teknik bilgiler
- İlgili eserler önerileri
- Paylaşım ve favori özellikleri

#### Fiyat Teklifi Sistemi
- Fiyat gösterilmez (sanatçı tercihi)
- "Fiyat Teklifi İste" butonu
- Email: iletisim@eliyte.com
- Esere göre özelleştirilebilir (disableQuote)

### 🔍 Arama ve Filtreleme

- **Debounced Search**: 300ms gecikme ile performanslı arama
- **Multi-field Search**: Eser adı, sanatçı, kategori araması
- **Sıralama**: En yeni, en eski, isim A-Z, Z-A
- **Filtreleme**: Kategori, sanatçı, yıl
- **Sonuç Sayacı**: "X eser bulundu"

### ❤️ Favori Sistemi

- **LocalStorage Persistence**: Tarayıcı kapatıldığında bile kalıcı
- **Favori Badge**: Favorilenen eserlerde görsel gösterge
- **Favori Sayacı**: Navigasyonda favori sayısı
- **Favori Sayfası**: Tüm favori eserleri görüntüleme

### 📤 Sosyal Paylaşım

- **Paylaşım Platformları**:
  - Facebook
  - Twitter
  - WhatsApp
  - LinkedIn

- **Link Kopyalama**: Clipboard API ile kolay kopyalama
- **Native Share API**: Mobil cihazlarda native paylaşım
- **Open Graph Tags**: Sosyal medyada zengin önizleme

### 🖼️ Lightbox Galeri

- **Tam Ekran Görüntüleme**: Eserleri büyük boyutta inceleyin
- **Zoom In/Out**: Detayları görün
- **Navigasyon**: Önceki/sonraki eser geçişi
- **Keyboard Support**: Esc, ←, → tuşları
- **Swipe Support**: Mobil cihazlarda kaydırma
- **İndirme**: Eseri cihaza kaydetme

### 📧 İletişim ve Form Yönetimi

#### Gelişmiş Form Validasyonu
- **Gerçek Zamanlı Doğrulama**: Kullanıcı yazarken kontrol
- **Email Formatı**: Regex ile email doğrulama
- **Karakter Sayacı**: Mesaj uzunluğu limiti (500)
- **Error Mesajları**: Alanözel hata bildirimleri
- **Success Feedback**: Başarılı gönderim bildirimi

#### Bülten Aboneliği
- Email validasyonu
- Başarı/hata mesajları
- Auto-reset (3 saniye)

### 🍪 GDPR Uyumluluğu

- **Cookie Consent Banner**: İlk ziyarette gösterilir
- **Granular Controls**: Kategori bazlı cookie yönetimi
- **Privacy Policy**: Detaylı gizlilik politikası
- **Terms of Service**: Kullanım koşulları

### 🔍 SEO Optimizasyonu

#### Meta Tags (Her Sayfa)
- Dynamic title tags
- Meta descriptions
- Keywords
- Canonical URLs

#### Social Sharing
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Structured Data (JSON-LD ready)

#### Search Engine Files
- **sitemap.xml**: Tüm sayfalar listelendi
- **robots.txt**: Search engine direktifleri

### ♿ Erişilebilirlik (WCAG 2.1)

- **ARIA Labels**: Tüm interaktif elementlerde
- **Keyboard Navigation**: Tab, Enter, Space tuşları
- **Focus Indicators**: Görünür focus states
- **Alt Texts**: Tüm görsellerde açıklayıcı metinler
- **Semantic HTML**: Anlamlı HTML5 etiketleri
- **Screen Reader Support**: sr-only sınıfları

### 📱 Responsive Design

- **Mobile-First**: 320px'den 4K'ya kadar
- **Breakpoints**:
  - `sm:` 640px (Tablet portrait)
  - `md:` 768px (Tablet landscape)
  - `lg:` 1024px (Desktop)
  - `xl:` 1280px (Large desktop)

- **Touch-Friendly**: Minimum 44px touch targets
- **Responsive Images**: Lazy loading ve optimizasyon
- **Mobile Menu**: Hamburger menu animasyonlu

### 🎭 Animasyonlar ve Geçişler

- **Smooth Scroll**: HTML scroll-behavior
- **Fade-in Animations**: Sayfa yüklemede
- **Hover Effects**: Card ve button'larda
- **Loading States**: Spinner ve skeleton loaders
- **Transition Effects**: 300ms smooth transitions

---

## 🎯 Kullanım Senaryoları

### Sanatçılar İçin

1. **Eser Gönderme**: `/submit` sayfasından detaylı yönergeler
2. **Portfolio Oluşturma**: Kendi sanatçı sayfanız
3. **Fiyat Kontrolü**: disableQuote ile fiyat teklifi gizleme

### Koleksiyoncular İçin

1. **Eser Keşfetme**: Gelişmiş arama ve filtreleme
2. **Favori Listeleri**: İlgi çekici eserleri kaydetme
3. **Fiyat Teklifi**: Email ile doğrudan iletişim

### Galeri Yöneticileri İçin

1. **Kolay Yönetim**: mockData.ts'den veri güncellemesi
2. **SEO Kontrolü**: Her eser için optimize edilmiş meta tags
3. **Analytics Ready**: Google Analytics entegrasyonuna hazır

---

## 🔒 Güvenlik ve Gizlilik

- **HTTPS Only**: Güvenli bağlantı gerekli
- **No Stored Passwords**: Kullanıcı kaydı yok
- **Email Only**: Hassas veri toplanmaz
- **GDPR Compliant**: Gizlilik politikası ve cookie consent
- **XSS Protection**: React'in built-in koruması
- **CSRF Protected**: Client-side uygulama

---

## 📊 Performans

### Build Metrikleri

```
dist/index.html:    0.88 kB (gzipped: 0.49 kB)
dist/assets/index.css:  40.22 kB (gzipped: 7.09 kB)
dist/assets/index.js:   323.66 kB (gzipped: 94.22 kB)
```

### Optimizasyon Teknikleri

- ✅ Code Splitting (React Router)
- ✅ Lazy Loading (Images)
- ✅ Tree Shaking (Vite)
- ✅ Minification (Production)
- ✅ Gzip Compression
- ✅ Debounced Search
- ✅ LocalStorage Caching

---

## 🌐 Tarayıcı Desteği

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 90+)

---

## 🛠️ Geliştirme Notları

### TypeScript Strict Mode

Proje strict mode'da çalışır. Bazı import uyarıları olabilir:

```typescript
// Type-only imports kullanın
import type { Artist, Artwork } from './types';
```

### LocalStorage Kullanımı

```typescript
// Favorites hook
import { useFavorites } from './hooks/useFavorites';

const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
```

### SEO Component

```typescript
import SEO from './components/SEO';

<SEO
  title="Eser Adı"
  description="Eser açıklaması"
  image="eser-gorseli.jpg"
  keywords="sanat, galeri"
/>
```

---

## 📝 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

---

## 📧 İletişim

- **Email**: iletisim@eliyte.com
- **Website**: https://eliyte.com
- **Eser Gönderimi**: https://eliyte.com/submit

---

## 🙏 Teşekkürler

Bu proje şu açık kaynak projeleri kullanır:

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [TypeScript](https://www.typescriptlang.org)

---

<div align="center">
  <p><strong>Crafted with ❤️ by Eliyte</strong></p>
  <p><sub>© 2025 Eliyte™. Tüm hakları saklıdır.</sub></p>
</div>
