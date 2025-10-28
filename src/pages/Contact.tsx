import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Mesajınız için teşekkür ederiz! En kısa sürede size geri dönüş yapacağız.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page-container">
      <h1 className="section-title">İletişim</h1>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Bir sorunuz mu var veya bir eserle ilgileniyor musunuz? Sizden haber almak isteriz.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="card p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Bize Mesaj Gönderin</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base min-h-[44px]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base min-h-[44px]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold mb-2">
                Konu
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base min-h-[44px]"
              >
                <option value="">Bir konu seçin</option>
                <option value="general">Genel Soru</option>
                <option value="artwork">Eser Hakkında Soru</option>
                <option value="artist">Sanatçı Bilgisi</option>
                <option value="exhibition">Sergi Bilgisi</option>
                <option value="other">Diğer</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] text-sm sm:text-base"
            >
              Mesaj Gönder
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div className="card p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">İletişime Geçin</h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Adres</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  123 Sanat Sokağı<br />
                  İstanbul, 34000<br />
                  Türkiye
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">E-posta</h3>
                <a
                  href="mailto:info@galerisanat.com"
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline min-h-[44px] inline-flex items-center"
                >
                  info@galerisanat.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Telefon</h3>
                <a
                  href="tel:+902121234567"
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline min-h-[44px] inline-flex items-center"
                >
                  +90 (212) 123 45 67
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Çalışma Saatleri</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Salı - Cumartesi: 10:00 - 18:00<br />
                  Pazar: 12:00 - 17:00<br />
                  Pazartesi: Kapalı
                </p>
              </div>
            </div>
          </div>

          <div className="card p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Bizi Takip Edin</h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-center min-h-[44px] inline-flex items-center justify-center text-sm sm:text-base"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-center min-h-[44px] inline-flex items-center justify-center text-sm sm:text-base"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
