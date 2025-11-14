import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/**
 * Terms of Service page
 * Comprehensive terms and conditions, user responsibilities, and intellectual property rights
 */
const TermsOfService = () => {
  return (
    <>
      <SEO
        title="Kullanım Koşulları"
        description="Eliyte™ Sanat Galerisi kullanım koşulları. Hizmetlerimizi kullanırken uymanız gereken kurallar ve sorumluluklar."
        keywords="kullanım koşulları, hizmet şartları, kullanıcı sözleşmesi, yasal bildirimler"
      />
      <div className="page-container max-w-4xl">
        <h1 className="section-title">Kullanım Koşulları</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Son Güncellenme: 13 Ocak 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Genel Hükümler</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Eliyte™ Sanat Galerisi web sitesini kullanarak, bu Kullanım Koşulları'nı kabul etmiş olursunuz.
              Bu koşullara uymak istemiyorsanız, lütfen sitemizi kullanmayın.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu Kullanım Koşulları, sitemizi ziyaret eden, gözden geçiren veya kullanan tüm kullanıcılar için geçerlidir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Hizmet Tanımı</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Eliyte™ Sanat Galerisi, dijital bir sanat platformudur. Hizmetlerimiz şunları içerir:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Sanat eserlerinin sergilenmesi ve tanıtımı</li>
              <li>Sanatçı profillerinin gösterimi</li>
              <li>Eser bilgilendirme ve fiyat teklifi alma hizmeti</li>
              <li>Eser arama ve filtreleme özellikleri</li>
              <li>Favori eserleri kaydetme</li>
              <li>Eserleri paylaşma</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Kullanıcı Sorumlulukları</h2>

            <h3 className="text-xl font-semibold mb-3">3.1. Kabul Edilen Kullanım</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sitemizi kullanırken aşağıdaki kurallara uymalısınız:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Doğru ve güncel bilgiler sağlamak</li>
              <li>Yasalara ve düzenlemelere uymak</li>
              <li>Diğer kullanıcıların haklarına saygı göstermek</li>
              <li>Siteyi amaçlandığı şekilde kullanmak</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.2. Yasaklanan Faaliyetler</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aşağıdaki faaliyetler kesinlikle yasaktır:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Siteye yetkisiz erişim sağlamaya çalışmak</li>
              <li>Zararlı yazılım yüklemek veya yaymak</li>
              <li>Telif haklarını ihlal etmek</li>
              <li>Yanıltıcı veya yanlış bilgi vermek</li>
              <li>Spam veya istenmeyen içerik göndermek</li>
              <li>Diğer kullanıcıları taciz etmek</li>
              <li>Siteyi otomatik araçlarla taramak (izinsiz)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Fikri Mülkiyet Hakları</h2>

            <h3 className="text-xl font-semibold mb-3">4.1. İçerik Sahipliği</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sitemizde görüntülenen tüm içerik (sanat eserleri, metinler, görseller, logolar, tasarımlar) Eliyte™ ve/veya
              ilgili sanatçılara aittir ve telif hakkı yasalarıyla korunmaktadır.
            </p>

            <h3 className="text-xl font-semibold mb-3">4.2. Kullanım Lisansı</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Size aşağıdaki sınırlı, devredilemez lisansı veriyoruz:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Siteyi kişisel, ticari olmayan amaçlarla görüntüleme</li>
              <li>Eserleri kişisel referans için kaydetme (favori)</li>
              <li>Eserleri sosyal medyada paylaşma (sağlanan araçlarla)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.3. Kısıtlamalar</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aşağıdaki eylemler yasaktır:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Eserleri izinsiz indirmek, kopyalamak veya dağıtmak</li>
              <li>Eserleri ticari amaçlarla kullanmak</li>
              <li>Eserleri değiştirmek veya türev çalışmalar oluşturmak</li>
              <li>Telif hakkı bildirimlerini kaldırmak</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Satın Alma ve Fiyatlandırma</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Eser satın alımları için:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Fiyatlar ve müsaitlik değişebilir</li>
              <li>Tüm fiyatlar aksi belirtilmedikçe Türk Lirası cinsindendir</li>
              <li>Satış, müzakere ve ödeme koşulları eser bazında değişebilir</li>
              <li>Fiyat teklifleri bağlayıcı değildir</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Sorumluluk Reddi</h2>

            <h3 className="text-xl font-semibold mb-3">6.1. Hizmet Garantisi</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sitemiz "olduğu gibi" sunulmaktadır. Aşağıdakiler dahil olmak üzere hiçbir garanti vermiyoruz:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Hizmetin kesintisiz veya hatasız olacağı</li>
              <li>Tüm bilgilerin doğru ve güncel olduğu</li>
              <li>Eserlerin her zaman mevcut olacağı</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">6.2. Sorumluluk Sınırlaması</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Yasaların izin verdiği ölçüde, sitemizin kullanımından kaynaklanan dolaylı, arızi veya özel zararlardan
              sorumlu değiliz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Bağlantılar ve Üçüncü Taraf Hizmetleri</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriğinden veya
              gizlilik uygulamalarından sorumlu değiliz. Bağlantılı siteleri kullanırken kendi riskinizi alırsınız.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Değişiklikler ve Güncellemeler</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bu Kullanım Koşulları'nı herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler,
              bu sayfada yayınlandığı anda yürürlüğe girer.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Değişikliklerden sonra siteyi kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Fesih</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu Kullanım Koşulları'nı ihlal etmeniz durumunda, sitemize erişiminizi herhangi bir bildirimde bulunmaksızın
              sonlandırma hakkımız vardır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Uygulanacak Hukuk</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu Kullanım Koşulları, Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir anlaşmazlık,
              Türkiye mahkemelerinin münhasır yetkisine tabi olacaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. İletişim</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kullanım Koşulları hakkında sorularınız varsa, bizimle iletişime geçin:
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

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Kabul</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sitemizi kullanarak, bu Kullanım Koşulları'nı okuduğunuzu, anladığınızı ve kabul ettiğinizi onaylarsınız.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Ana Sayfaya Dön
            </Link>

            <Link
              to="/privacy"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              Gizlilik Politikası
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
