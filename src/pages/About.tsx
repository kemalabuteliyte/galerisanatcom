import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Hakkımızda</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-4">
            Her türlü sanatı kutluyor ve sanatçıların vizyonlarını dünyayla paylaşmalarını güçlendiriyoruz
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Misyonumuz</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            Eliyte basit ama güçlü bir misyonla kuruldu: sanatçıların her türlü sanat eserlerini küresel bir
            kitleye sergileyebilecekleri ve sanat meraklılarının yaratıcılığın sınırlarını zorlayan olağanüstü eserleri
            keşfedebilecekleri bir platform oluşturmak.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Her türlü sanatın yaratıcı ifadenin geleceğini temsil ettiğine, geleneksel sanatsal ilkeleri modern yaklaşımlarla
            birleştirerek benzersiz deneyimler yarattığına inanıyoruz. Galerimiz, yetenekli sanatçılar ile
            sanattaki yeniliği takdir eden koleksiyoncular arasında bir köprü görevi görür.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="card p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Sanatsal Mükemmellik</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Yalnızca en iyi sanat eserlerini seçiyor, her eserin yaratıcılık ve teknik uygulama açısından
                yüksek standartlarımızı karşılamasını sağlıyoruz.
              </p>
            </div>

            <div className="card p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌟</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Sanatçı Desteği</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Sanatçılara dünya çapında koleksiyonculara ve sanat meraklılarına ulaşabilecekleri bir platform sağlayarak
                onları desteklemeye kararlıyız.
              </p>
            </div>

            <div className="card p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Yenilikçilik</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Yeni teknolojileri ve teknikleri benimseyerek sanatçılar ve koleksiyoncular için en iyi deneyimi sunmak
                üzere sürekli gelişiyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Hikayemiz</h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Eliyte, 2020 yılında bir grup sanat meraklısı ve profesyonel sanat dünyasında bir
              boşluk olduğunu fark ettiğinde başladı. Her türlü sanat tanınırlık kazanırken, farklı ortamları ve arkasındaki
              sanatçıları gerçekten kutlayan yeterli özel alan yoktu.
            </p>
            <p>
              Beş öncü sanatçıdan oluşan küçük bir eser koleksiyonuyla başladık. Bugün, resimden heykele,
              dijital sanatlardan fotoğrafa kadar çeşitli tarz ve teknikleri kapsayan, dünyanın dört bir yanından yetenekli
              yaratıcıların yüzlerce eserini sergilemekten gurur duyuyoruz.
            </p>
            <p>
              Platformumuz sadece bir galeriden daha fazlası haline geldi - sanatçıların koleksiyoncularla bağlantı
              kurabileceği, yaratıcı süreçlerini paylaşabileceği ve sanatta mümkün olanın sınırlarını
              zorlayabileceği bir topluluk. Sayısız satışı kolaylaştırdık ve uluslararası tanınırlık kazanan gelişmekte olan
              sanatçıların kariyerlerini başlatmaya yardımcı olduk.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                alt="Team Member"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Mehmet Yılmaz</h3>
              <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 mb-2">Kurucu & Direktör</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-4">
                Çağdaş sanatta 15 yıllık deneyime sahip eski müze küratörü.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
                alt="Team Member"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Ayşe Demir</h3>
              <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 mb-2">Baş Küratör</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-4">
                Gelişmekte olan yetenekleri keşfetme tutkusu olan dijital sanat uzmanı.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                alt="Team Member"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Can Özkan</h3>
              <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 mb-2">Teknoloji Direktörü</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-4">
                Platformumuzun en son teknolojide kalmasını sağlayan teknoloji yenilikçisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-container">
        <div className="card p-6 sm:p-8 md:p-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Topluluğumuza Katılın</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            İster eserlerinizi sergilemek isteyen bir sanatçı, ister benzersiz eserler arayan bir koleksiyoncu olun, sizi aramızda görmekten mutluluk duyarız.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              to="/artworks"
              className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors min-h-[44px] inline-flex items-center justify-center text-sm sm:text-base"
            >
              Eserleri İncele
            </Link>
            <Link
              to="/contact"
              className="bg-white/20 backdrop-blur px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors min-h-[44px] inline-flex items-center justify-center text-sm sm:text-base"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
