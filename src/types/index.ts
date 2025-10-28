export interface Artist {
  id: string;
  name: string;
  bio: string;
  photo: string;
  nationality: string;
  birthYear: number;
  website?: string;
  social?: {
    instagram?: string;
    twitter?: string;
  };
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  medium: string;
  dimensions: string;
  artistId: string;
  categoryId: string;
  galleryId?: string;
  featured: boolean;
  disableQuote?: boolean; // If true, "Ask for Quote" button will not be shown
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface Gallery {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  featuredArtworks: string[]; // artwork IDs
}
