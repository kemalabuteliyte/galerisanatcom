import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Celebrating digital art and empowering artists to share their vision with the world
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Digital Art Gallery was founded with a simple yet powerful mission: to create a platform where digital artists
            can showcase their work to a global audience and art enthusiasts can discover extraordinary pieces that push
            the boundaries of creativity.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We believe that digital art represents the future of creative expression, combining traditional artistic
            principles with cutting-edge technology to create experiences that were previously impossible. Our gallery
            serves as a bridge between talented artists and collectors who appreciate innovation in art.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-4">Artistic Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We curate only the finest digital artworks, ensuring every piece meets our high standards for creativity
                and technical execution.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-4">Artist Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to supporting artists by providing them with a platform to reach collectors and art
                enthusiasts worldwide.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We embrace new technologies and techniques, constantly evolving to provide the best experience for artists
                and collectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Digital Art Gallery began in 2020 when a group of art enthusiasts and technology professionals recognized
              a gap in the art world. While digital art was gaining recognition, there weren't enough dedicated spaces
              that truly celebrated the medium and the artists behind it.
            </p>
            <p>
              We started with a small collection of artworks from five pioneering digital artists. Today, we're proud to
              showcase hundreds of pieces from talented creators around the globe, spanning various styles and techniques
              from abstract digital paintings to mixed media sculptures.
            </p>
            <p>
              Our platform has grown to become more than just a gallery - it's a community where artists can connect with
              collectors, share their creative process, and push the boundaries of what's possible in digital art. We've
              facilitated countless sales and helped launch the careers of emerging artists who have gone on to achieve
              international recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Founder & Director</p>
              <p className="text-gray-600 dark:text-gray-400">
                Former museum curator with 15 years of experience in contemporary art.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Sarah Williams</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Chief Curator</p>
              <p className="text-gray-600 dark:text-gray-400">
                Digital art specialist with a passion for discovering emerging talent.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">David Kumar</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Technology Director</p>
              <p className="text-gray-600 dark:text-gray-400">
                Tech innovator ensuring our platform stays at the cutting edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-container">
        <div className="card p-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're an artist looking to showcase your work or a collector seeking unique pieces, we'd love to have you join us.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/artworks"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Artworks
            </Link>
            <Link
              to="/contact"
              className="bg-white/20 backdrop-blur px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
