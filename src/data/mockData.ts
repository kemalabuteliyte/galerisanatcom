import type { Artist, Artwork, Category, Gallery } from '../types';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Ayşe Demir',
    bio: 'Ayşe Demir, canlı soyut kompozisyonlarıyla tanınan çağdaş bir dijital sanatçıdır. Çalışmaları teknoloji ve duygu arasındaki kesişimi araştırarak, dijital sanatın geleneksel kavramlarına meydan okuyan sürükleyici görsel deneyimler yaratır.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    nationality: 'Türk',
    birthYear: 1985,
    website: 'https://aysedemir.art',
    social: {
      instagram: '@aysedemir',
    },
  },
  {
    id: '2',
    name: 'Mehmet Yılmaz',
    bio: 'Mehmet Yılmaz, geleneksel Türk estetiğinden ilham alan minimalist bir yaklaşımla dijital resim yapıyor. Çalışmaları dijital ortamda sadeliğin ve negatif alanın güzelliğine odaklanıyor.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    nationality: 'Türk',
    birthYear: 1978,
    social: {
      instagram: '@mehmetyilmaz',
      twitter: '@mehmet_art',
    },
  },
  {
    id: '3',
    name: 'Zeynep Kaya',
    bio: 'Zeynep Kaya, fiziksel ve dijital unsurları harmanlayan karışık medya heykelleriyle tanınan bir sanatçıdır. Yenilikçi yaklaşımı dünya çapında büyük galerilerde sergilenerek çağdaş sanatın sınırlarını zorluyor.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    nationality: 'Türk',
    birthYear: 1990,
    website: 'https://zeynepkaya.com',
  },
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Soyut',
    description: 'Renk, form ve duyguyu vurgulayan temsili olmayan sanatı keşfedin',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    slug: 'soyut',
  },
  {
    id: '2',
    name: 'Dijital Resim',
    description: 'Modern resim teknikleriyle yaratılmış çağdaş dijital sanat eserleri',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800',
    slug: 'dijital-resim',
  },
  {
    id: '3',
    name: 'Heykel',
    description: 'Yaratıcı sınırları zorlayan üç boyutlu sanat eserleri',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800',
    slug: 'heykel',
  },
  {
    id: '4',
    name: 'Fotoğraf',
    description: 'Objektif aracılığıyla yakalanan etkileyici görsel anlatımlar',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    slug: 'fotograf',
  },
];

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Dijital Rüyalar',
    description: 'Dijital alanda renk ve formun canlı bir keşfi. Bu eser, dijital bilincin akışkanlığını ve yaratıcı ifadenin sınırsız olanaklarını temsil ediyor.',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800',
    year: 2023,
    medium: 'Dijital Sanat',
    dimensions: '4096 x 4096 piksel',
    artistId: '1',
    categoryId: '1',
    galleryId: '1',
    featured: true,
  },
  {
    id: '2',
    title: 'Zen Bahçesi',
    description: 'Geleneksel Japon kaya bahçelerinden ilham alan minimalist dijital resim. Bu çalışma, dikkatli kompozisyonuyla tefekkür ve iç huzuru davet ediyor.',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800',
    year: 2024,
    medium: 'Dijital Resim',
    dimensions: '3000 x 4000 piksel',
    artistId: '2',
    categoryId: '2',
    galleryId: '1',
    featured: true,
  },
  {
    id: '3',
    title: 'Kent Akışı',
    description: 'Şehir hayatının soyut bir temsili, cesur geometrik formlarla kentsel ortamların enerjisini ve hareketini yakalıyor.',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
    year: 2023,
    medium: 'Dijital Sanat',
    dimensions: '5000 x 3333 piksel',
    artistId: '1',
    categoryId: '1',
    featured: false,
    disableQuote: true, // Example of disabled quote option
  },
  {
    id: '4',
    title: 'Eterik Formlar',
    description: 'Fiziksel malzemeleri dijital projeksiyonlarla birleştiren karışık medya heykel, sürekli değişen bir sanatsal deneyim yaratıyor.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
    year: 2024,
    medium: 'Karışık Medya Heykel',
    dimensions: '120 x 80 x 60 cm',
    artistId: '3',
    categoryId: '3',
    galleryId: '2',
    featured: true,
  },
  {
    id: '5',
    title: 'Sessizlik Konuşuyor',
    description: 'Negatif alan ve minimalizm üzerine bir meditasyon, gösterilmeyenin gücünü sergiliyor.',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800',
    year: 2024,
    medium: 'Dijital Resim',
    dimensions: '2400 x 3200 piksel',
    artistId: '2',
    categoryId: '2',
    featured: false,
  },
  {
    id: '6',
    title: 'Kromatik Dalgalar',
    description: 'Renk uyumu ve görsel ritim arasındaki ilişkiyi keşfeden akıcı soyut kompozisyon.',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800',
    year: 2023,
    medium: 'Dijital Sanat',
    dimensions: '4500 x 3000 piksel',
    artistId: '1',
    categoryId: '1',
    galleryId: '1',
    featured: false,
  },
];

export const galleries: Gallery[] = [
  {
    id: '1',
    name: 'Eliyte Ana Koleksiyon',
    description: 'Türkiye\'nin ilk kapsamlı dijital sanat koleksiyonu. Yeni yetişen ve köklü sanatçıların tüm sanat türlerinden eserlerini sergiliyor.',
    location: 'İstanbul, Türkiye',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800',
    featuredArtworks: ['1', '2', '6'],
  },
  {
    id: '2',
    name: 'Eliyte Heykel Koleksiyonu',
    description: 'Geleneksel ve çağdaş heykellere adanmış özel koleksiyon. Fiziksel ve dijital formların buluşma noktası.',
    location: 'İstanbul, Türkiye',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    featuredArtworks: ['4'],
  },
];

// Helper functions to get related data
export const getArtistById = (id: string): Artist | undefined => {
  return artists.find((artist) => artist.id === id);
};

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};

export const getGalleryById = (id: string): Gallery | undefined => {
  return galleries.find((gallery) => gallery.id === id);
};

export const getArtworksByArtist = (artistId: string): Artwork[] => {
  return artworks.filter((artwork) => artwork.artistId === artistId);
};

export const getArtworksByCategory = (categoryId: string): Artwork[] => {
  return artworks.filter((artwork) => artwork.categoryId === categoryId);
};

export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter((artwork) => artwork.featured);
};
