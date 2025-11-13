import { Link } from 'react-router-dom';

const SubmitArtwork = () => {
  const contactEmail = 'iletisim@eliyte.com';

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 md:p-12 mb-8 md:mb-12 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Eserinizi Gönderin
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Eliyte™ Sanat Galerisi olarak her türlü sanat eserini destekliyoruz. Sanatçıların eserlerini dünya ile paylaşmasına yardımcı olmaktan gurur duyuyoruz.
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-8 md:mb-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 md:p-6 rounded-r-lg mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-blue-900 dark:text-blue-100">
            Önemli Bilgi
          </h2>
          <p className="text-base md:text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
            Tüm başvurular ve iletişim <strong>sadece e-posta</strong> yoluyla yapılmaktadır.
            Başvurunuz değerlendirildikten sonra sizinle e-posta üzerinden iletişime geçeceğiz.
          </p>
        </div>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Eliyte™ Sanat Galerisi, Türkiye'nin ilk kapsamlı dijital sanat koleksiyonudur. Dijital sanat, geleneksel resim,
          heykel, fotoğraf ve tüm diğer sanat formlarını destekliyoruz. Her sanatçı, eserlerini geniş bir kitleyle
          buluşturma fırsatına sahiptir.
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Eserlerinizi göndermeden önce lütfen aşağıdaki yönergeleri dikkatlice okuyunuz.
        </p>
      </section>

      {/* Supported Art Types */}
      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Kabul Edilen Sanat Türleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: 'Dijital Sanat', desc: 'Dijital araçlarla yaratılmış tüm eserler' },
            { title: 'Resim', desc: 'Yağlıboya, akrilik, suluboya, pastel ve diğer teknikler' },
            { title: 'Heykel', desc: 'Üç boyutlu tüm heykel çalışmaları' },
            { title: 'Fotoğraf', desc: 'Sanatsal fotoğraf çalışmaları' },
            { title: 'Karışık Medya', desc: 'Farklı tekniklerin birleşimi' },
            { title: 'Diğer', desc: 'Enstalasyon, kolaj, baskı sanatları ve daha fazlası' },
          ].map((type, index) => (
            <div key={index} className="card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                {type.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Başvuru Süreci</h2>

        <div className="space-y-6 md:space-y-8">
          {/* Step 1 */}
          <div className="card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Eserlerinizi Hazırlayın</h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Dijital Eserler:</strong> Yüksek çözünürlüklü dijital dosyalar (minimum 2000px en uzun kenar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Fiziksel Eserler:</strong> Profesyonel kalitede fotoğraflar (minimum 3000px en uzun kenar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Dosya Formatları:</strong> JPG, PNG, TIFF (RGB renk modu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Kalite:</strong> Net, iyi aydınlatılmış, renkleri doğru yansıtan görüntüler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Her eser için birden fazla açıdan çekilmiş fotoğraflar (heykeller için)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Sanatçı Biyografinizi Yazın</h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Tam adınız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Doğum yılınız ve milliyetiniz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Profesyonel sanatçı biyografiniz (150-300 kelime)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Sanatsal yaklaşımınız, etkilendiğiniz sanatçılar, kullandığınız teknikler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Profil fotoğrafınız (profesyonel, yüksek çözünürlüklü)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Web siteniz ve sosyal medya hesaplarınız (varsa)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Eser Bilgilerini Hazırlayın</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">Her eser için aşağıdaki bilgileri sağlayın:</p>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Eser adı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Yapım yılı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Teknik/Medyum (örn: "Tuval üzerine yağlıboya", "Dijital illüstrasyon")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Boyutlar (fiziksel eserler için cm, dijital eserler için piksel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Eser açıklaması (100-200 kelime) - Eserin hikayesi, konsepti, ilham kaynağı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Kategori (Soyut, Figüratif, Manzara, vb.)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="card p-6 md:p-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">E-posta ile Başvurun</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">
                  Tüm bilgileri ve görsellerinizi hazırladıktan sonra, aşağıdaki e-posta adresine gönderin:
                </p>

                <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg mb-4">
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2">E-posta Adresi:</p>
                  <a
                    href={`mailto:${contactEmail}?subject=Eser Başvurusu - [Adınız Soyadınız]`}
                    className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline break-all"
                  >
                    {contactEmail}
                  </a>
                </div>

                <div className="space-y-3">
                  <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100">
                    E-posta Konu Satırı:
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 md:p-4 rounded font-mono text-xs md:text-sm">
                    Eser Başvurusu - [Adınız Soyadınız]
                  </div>

                  <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 mt-4">
                    E-posta İçeriği:
                  </p>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>Sanatçı biyografiniz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>Göndermek istediğiniz eser sayısı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>Her eser için detaylı bilgiler (yukarıda belirtildiği gibi)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>Eser görsellerini e-postaya ekleyin veya WeTransfer/Google Drive gibi dosya paylaşım servisleri üzerinden bağlantı gönderin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>İletişim bilgileriniz (telefon numarası opsiyonel)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Önemli Notlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="card p-4 md:p-6 border-l-4 border-yellow-500">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-yellow-700 dark:text-yellow-400">
              Fiyatlandırma
            </h3>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              Galerimizde fiyat listelenmemektedir. Her eser için "Fiyat Teklifi İste" seçeneği bulunur.
              İlgilenen alıcılar doğrudan sizinle veya bizimle iletişime geçer.
            </p>
          </div>

          <div className="card p-4 md:p-6 border-l-4 border-green-500">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-green-700 dark:text-green-400">
              Değerlendirme Süreci
            </h3>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              Başvurular 7-14 iş günü içinde değerlendirilir. Eserleriniz uygun bulunursa,
              e-posta yoluyla sizinle iletişime geçeceğiz.
            </p>
          </div>

          <div className="card p-4 md:p-6 border-l-4 border-purple-500">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-purple-700 dark:text-purple-400">
              Telif Hakları
            </h3>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              Tüm eserlerin telif hakları sanatçılara aittir. Eserlerinizi galerimizde
              sergileme hakkını bize vermiş olursunuz.
            </p>
          </div>

          <div className="card p-4 md:p-6 border-l-4 border-red-500">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-red-700 dark:text-red-400">
              İletişim Yöntemi
            </h3>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              Tüm iletişim yalnızca e-posta yoluyla yapılır. Telefon veya diğer kanallardan
              başvurular kabul edilmemektedir.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Başvuru için ücret var mı?',
              a: 'Hayır, başvuru tamamen ücretsizdir. Eserleriniz kabul edilirse de herhangi bir ücret talep edilmez.',
            },
            {
              q: 'Kaç eser gönderebilirim?',
              a: 'İlk başvuruda 3-5 eser göndermenizi öneririz. Galerimizde yeriniz aldıktan sonra daha fazla eser ekleyebilirsiniz.',
            },
            {
              q: 'Öğrenci çalışmalarını kabul ediyor musunuz?',
              a: 'Evet, kaliteli ve profesyonel öğrenci çalışmalarını da değerlendiriyoruz.',
            },
            {
              q: 'Eserlerimi nasıl güncelleyebilirim?',
              a: 'Galerimizde yer aldıktan sonra, yeni eserler eklemek veya mevcut eserleri güncellemek için iletisim@eliyte.com adresine e-posta gönderebilirsiniz.',
            },
            {
              q: 'Satış komisyonu var mı?',
              a: 'Satış detayları ve şartları, eserleriniz kabul edildikten sonra e-posta yoluyla paylaşılacaktır.',
            },
          ].map((faq, index) => (
            <div key={index} className="card p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">
                {faq.q}
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 md:p-12 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Eserlerinizi Paylaşmaya Hazır mısınız?</h2>
        <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Sanat yolculuğunuzda sizinle birlikte olmak için sabırsızlanıyoruz!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${contactEmail}?subject=Eser Başvurusu - [Adınız Soyadınız]`}
            className="inline-flex items-center justify-center min-h-[44px] bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Hemen Başvur
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-[44px] bg-white/20 backdrop-blur border-2 border-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SubmitArtwork;
