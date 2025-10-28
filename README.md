# Digital Art Gallery

A modern, responsive digital art gallery website built with React, TypeScript, and Tailwind CSS. This application showcases digital artworks from talented artists worldwide with beautiful animations and an intuitive user interface.

## Features

- **Home Page**: Hero section with featured artworks and call-to-action buttons
- **Artworks Gallery**: Browse all available artworks with filtering options
- **Single Artwork Pages**: Detailed view of each artwork with artist bio and related works
- **Categories**: Explore artworks organized by different art categories
- **Galleries**: View curated gallery spaces with featured artworks
- **Artist Pages**: Dedicated pages for each artist with their bio and portfolio
- **Contact Page**: Contact form for inquiries and gallery information
- **About Us**: Learn about the gallery's mission, values, and team
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Ready**: Built-in support for dark mode

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## Project Structure

```
src/
├── components/     # Reusable React components (ready for reactbits components)
├── data/          # Mock data for artworks, artists, categories, and galleries
├── layouts/       # Layout components (MainLayout with navigation)
├── pages/         # Page components
│   ├── Home.tsx              # Homepage with featured artworks
│   ├── Artworks.tsx          # All artworks listing
│   ├── ArtworkDetail.tsx     # Single artwork page with artist bio
│   ├── Categories.tsx        # Art categories page
│   ├── Galleries.tsx         # Galleries listing
│   ├── Artist.tsx            # Artist profile page
│   ├── Contact.tsx           # Contact form and info
│   └── About.tsx             # About us page
├── types/         # TypeScript type definitions
└── App.tsx        # Main app component with routing
```

## Data Models

### Artist
- id, name, bio, photo, nationality, birthYear
- website, social media links

### Artwork
- id, title, description, image, year, medium, dimensions
- price, artistId, categoryId, galleryId, featured flag

### Category
- id, name, description, image, slug

### Gallery
- id, name, description, location, image
- featuredArtworks (array of artwork IDs)

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview the production build
npm run preview
```

## Adding ReactBits Components

This project is designed to work with [ReactBits](https://www.reactbits.dev/) animated components. To add ReactBits components:

1. Visit [reactbits.dev](https://www.reactbits.dev/)
2. Browse the component library
3. Copy the component code you want to use
4. Add it to the `src/components` folder
5. Import and use in your pages

ReactBits components are perfect for:
- Animated hero sections
- Interactive cards
- Smooth transitions
- Eye-catching backgrounds
- Text animations

## Customization

### Adding New Artworks

Edit `src/data/mockData.ts` and add new entries to the `artworks` array:

```typescript
{
  id: '7',
  title: 'Your Artwork Title',
  description: 'Description here...',
  image: 'image-url',
  year: 2024,
  medium: 'Digital Art',
  dimensions: '4000 x 3000 pixels',
  price: 5000,
  artistId: '1',
  categoryId: '1',
  featured: true,
}
```

### Adding New Artists

Add new artists to the `artists` array in `src/data/mockData.ts`

### Styling

The project uses Tailwind CSS. You can:
- Customize colors and themes in `tailwind.config.js`
- Add custom CSS classes in `src/index.css`
- Use Tailwind utility classes directly in components

## Routes

- `/` - Home page
- `/artworks` - All artworks
- `/artwork/:id` - Single artwork detail
- `/categories` - Art categories
- `/galleries` - Gallery spaces
- `/artist/:id` - Artist profile
- `/contact` - Contact page
- `/about` - About us page

## Future Enhancements

- Search and filter functionality
- Shopping cart for artwork purchases
- User authentication and profiles
- Artist dashboard for managing artworks
- Integration with payment gateway
- Newsletter subscription
- Social sharing features
- Virtual gallery tours
- Artwork comparison tool

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or inquiries, please visit the contact page or reach out to the development team.
