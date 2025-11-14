import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/**
 * Privacy Policy page
 * Comprehensive privacy policy including cookie policy, data handling, and contact information
 */
const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Gizlilik Politikası"
        description="Eliyte™ Sanat Galerisi gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin."
        keywords="gizlilik politikası, kişisel veriler, veri güvenliği, çerez politikası"
      />
      <div className="page-container max-w-4xl">
        <h1 className="section-title">Gizlilik Politikası</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Son Güncellenme: 13 Ocak 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Giriş</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Eliyte™ Sanat Galerisi olarak, gizliliğinize önem veriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde
              kişisel bilgilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sitemizi kullanarak, bu Gizlilik Politikası'nda açıklanan uygulamaları kabul etmiş olursunuz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Topladığımız Bilgiler</h2>

            <h3 className="text-xl font-semibold mb-3">2.1. Kişisel Bilgiler</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sitemizi kullanırken aşağıdaki bilgileri toplayabiliriz:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Ad ve soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Bülten aboneliği tercihleri</li>
              <li>İletişim formu mesajları</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2. Otomatik Olarak Toplanan Bilgiler</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>IP adresi</li>
              <li>Tarayıcı türü ve sürümü</li>
              <li>İşletim sistemi</li>
              <li>Ziyaret edilen sayfalar</li>
              <li>Ziyaret tarihi ve saati</li>
              <li>Çerezler aracılığıyla toplanan bilgiler</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Bilgilerinizi Nasıl Kullanıyoruz</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Topladığımız bilgileri şu amaçlarla kullanırız:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Hizmetlerimizi sağlamak ve geliştirmek</li>
              <li>Sorularınızı ve taleplerinizi yanıtlamak</li>
              <li>Bülten ve güncellemeler göndermek (onay vermeniz halinde)</li>
              <li>Sitemizin performansını analiz etmek</li>
              <li>Kullanıcı deneyimini kişiselleştirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Çerez Politikası</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır.
            </p>

            <h3 className="text-xl font-semibold mb-3">4.1. Çerez Türleri</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerini sağlar</li>
              <li><strong>Tercih Çerezleri:</strong> Dil ve tema tercihlerinizi hatırlar</li>
              <li><strong>İşlevsel Çerezler:</strong> Favorileriniz gibi özelleştirmeleri kaydeder</li>
              <li><strong>Analitik Çerezler:</strong> Site kullanımını analiz eder</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Çerezleri tarayıcı ayarlarınızdan yönetebilir veya silebilirsiniz. Ancak, bazı çerezleri devre dışı bırakmanız
              sitenin işlevselliğini etkileyebilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Veri Güvenliği</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kişisel bilgilerinizin güvenliğini ciddiye alıyoruz ve korumak için uygun teknik ve organizasyonel önlemler alıyoruz:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>SSL/TLS şifreleme</li>
              <li>Güvenli veri depolama</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Sınırlı erişim kontrolleri</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Üçüncü Taraf Paylaşımı</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız, satmayız veya kiralamayız. Aşağıdaki durumlar istisnadır:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Yasal zorunluluklar</li>
              <li>Hizmet sağlayıcılarımız (örn. hosting, analitik)</li>
              <li>Açık onayınız ile</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Haklarınız</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              KVKK (Kişisel Verilerin Korunması Kanunu) ve GDPR kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Kişisel verilerinize erişim hakkı</li>
              <li>Kişisel verilerinizin düzeltilmesini talep etme hakkı</li>
              <li>Kişisel verilerinizin silinmesini talep etme hakkı</li>
              <li>Veri işlemeye itiraz etme hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Çocukların Gizliliği</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sitemiz 18 yaşından küçük çocuklara yönelik değildir. Bilerek 18 yaşından küçük çocuklardan kişisel bilgi toplamayız.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Değişiklikler</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Önemli değişiklikler yapıldığında, sitemizde
              duyuru yapacağız. Politikayı düzenli olarak gözden geçirmenizi öneririz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. İletişim</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Gizlilik uygulamalarımız hakkında sorularınız varsa veya haklarınızı kullanmak istiyorsanız, bizimle iletişime geçin:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Eliyte™ Sanat Galerisi</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                E-posta:{' '}
                <a href="mailto:iletisim@eliyte.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  iletisim@eliyte.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                  İletişim Formunu Kullanın
                </Link>
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
