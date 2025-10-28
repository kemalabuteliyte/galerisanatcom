import type { Artist, Artwork, Category, Gallery } from '../types';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Emma Rodriguez',
    bio: 'Emma Rodriguez is a contemporary digital artist known for her vibrant abstract compositions. Her work explores the intersection of technology and emotion, creating immersive visual experiences that challenge traditional notions of digital art.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    nationality: 'Spanish',
    birthYear: 1985,
    website: 'https://emmarodriguez.art',
    social: {
      instagram: '@emmarodriguez',
    },
  },
  {
    id: '2',
    name: 'Kenji Tanaka',
    bio: 'Kenji Tanaka brings a minimalist approach to digital painting, drawing inspiration from traditional Japanese aesthetics. His work focuses on the beauty of simplicity and negative space in the digital medium.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    nationality: 'Japanese',
    birthYear: 1978,
    social: {
      instagram: '@kenjitanaka',
      twitter: '@kenji_art',
    },
  },
  {
    id: '3',
    name: 'Sophia Chen',
    bio: 'Sophia Chen is a mixed media artist whose sculptures blend physical and digital elements. Her innovative approach has been featured in major galleries worldwide, pushing the boundaries of contemporary art.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    nationality: 'Chinese-American',
    birthYear: 1990,
    website: 'https://sophiachen.com',
  },
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Abstract',
    description: 'Explore non-representational art that emphasizes color, form, and emotion',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    slug: 'abstract',
  },
  {
    id: '2',
    name: 'Digital Painting',
    description: 'Contemporary digital artworks created with modern painting techniques',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800',
    slug: 'digital-painting',
  },
  {
    id: '3',
    name: 'Sculpture',
    description: 'Three-dimensional artworks that push creative boundaries',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800',
    slug: 'sculpture',
  },
  {
    id: '4',
    name: 'Photography',
    description: 'Stunning visual narratives captured through the lens',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    slug: 'photography',
  },
];

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Digital Dreams',
    description: 'A vibrant exploration of color and form in the digital space. This piece represents the fluidity of digital consciousness and the boundless possibilities of creative expression.',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800',
    year: 2023,
    medium: 'Digital Art',
    dimensions: '4096 x 4096 pixels',
    price: 5000,
    artistId: '1',
    categoryId: '1',
    galleryId: '1',
    featured: true,
  },
  {
    id: '2',
    title: 'Zen Garden',
    description: 'Minimalist digital painting inspired by traditional Japanese rock gardens. This work invites contemplation and inner peace through its careful composition.',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800',
    year: 2024,
    medium: 'Digital Painting',
    dimensions: '3000 x 4000 pixels',
    price: 3500,
    artistId: '2',
    categoryId: '2',
    galleryId: '1',
    featured: true,
  },
  {
    id: '3',
    title: 'Urban Flux',
    description: 'An abstract representation of city life, capturing the energy and movement of urban environments through bold geometric forms.',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
    year: 2023,
    medium: 'Digital Art',
    dimensions: '5000 x 3333 pixels',
    price: 4200,
    artistId: '1',
    categoryId: '1',
    featured: false,
  },
  {
    id: '4',
    title: 'Ethereal Forms',
    description: 'Mixed media sculpture combining physical materials with digital projections, creating an ever-changing artistic experience.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
    year: 2024,
    medium: 'Mixed Media Sculpture',
    dimensions: '120 x 80 x 60 cm',
    price: 15000,
    artistId: '3',
    categoryId: '3',
    galleryId: '2',
    featured: true,
  },
  {
    id: '5',
    title: 'Silence Speaks',
    description: 'A meditation on negative space and minimalism, demonstrating the power of what is not shown.',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800',
    year: 2024,
    medium: 'Digital Painting',
    dimensions: '2400 x 3200 pixels',
    artistId: '2',
    categoryId: '2',
    featured: false,
  },
  {
    id: '6',
    title: 'Chromatic Waves',
    description: 'Flowing abstract composition that explores the relationship between color harmony and visual rhythm.',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800',
    year: 2023,
    medium: 'Digital Art',
    dimensions: '4500 x 3000 pixels',
    price: 3800,
    artistId: '1',
    categoryId: '1',
    galleryId: '1',
    featured: false,
  },
];

export const galleries: Gallery[] = [
  {
    id: '1',
    name: 'Contemporary Digital Gallery',
    description: 'Showcasing the finest digital artworks from emerging and established artists. Our gallery focuses on pushing the boundaries of digital creativity.',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800',
    featuredArtworks: ['1', '2', '6'],
  },
  {
    id: '2',
    name: 'Modern Sculpture Pavilion',
    description: 'A dedicated space for contemporary sculpture that bridges traditional and digital mediums.',
    location: 'Los Angeles, CA',
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
