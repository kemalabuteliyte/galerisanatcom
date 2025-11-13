import { useState } from 'react';
import SEO from '../components/SEO';

/**
 * Form validation errors interface
 */
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/**
 * Contact page component with enhanced form validation
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /**
   * Validate email format using regex
   */
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Validate form data and return errors
   */
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Ad Soyad en az 2 karakter olmalıdır';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!formData.subject) {
      newErrors.subject = 'Lütfen bir konu seçiniz';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır';
    }

    return newErrors;
  };

  /**
   * Handle form submission with validation
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  /**
   * Handle input change and clear error for that field
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const maxMessageLength = 500;
  const messageLength = formData.message.length;

  return (
    <>
      <SEO
        title="İletişim"
        description="Eliyte™ Sanat Galerisi ile iletişime geçin. Sorularınız, önerileriniz veya eser hakkında bilgi almak için bizimle iletişime geçebilirsiniz."
        keywords="iletişim, sanat galerisi, eser bilgisi, sanatçı iletişim"
      />
      <div className="page-container">
        <h1 className="section-title">İletişim</h1>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Bir sorunuz mu var veya bir eserle ilgileniyor musunuz? Sizden haber almak isteriz.
        </p>

        {/* Success Message */}
        {submitSuccess && (
          <div className="max-w-6xl mx-auto mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
            <svg
              className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-1">
                Mesajınız başarıyla gönderildi!
              </h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                En kısa sürede size geri dönüş yapacağız. Teşekkür ederiz.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Bize Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2">
                  Ad Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  } bg-white dark:bg-gray-700 focus:ring-2 focus:border-transparent text-sm sm:text-base min-h-[44px] transition-colors`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  } bg-white dark:bg-gray-700 focus:ring-2 focus:border-transparent text-sm sm:text-base min-h-[44px] transition-colors`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold mb-2">
                  Konu <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                    errors.subject
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  } bg-white dark:bg-gray-700 focus:ring-2 focus:border-transparent text-sm sm:text-base min-h-[44px] transition-colors`}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                >
                  <option value="">Bir konu seçin</option>
                  <option value="general">Genel Soru</option>
                  <option value="artwork">Eser Hakkında Soru</option>
                  <option value="artist">Sanatçı Bilgisi</option>
                  <option value="exhibition">Sergi Bilgisi</option>
                  <option value="other">Diğer</option>
                </select>
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold">
                    Mesaj <span className="text-red-500">*</span>
                  </label>
                  <span
                    className={`text-xs ${
                      messageLength > maxMessageLength
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {messageLength}/{maxMessageLength}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={maxMessageLength}
                  rows={6}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  } bg-white dark:bg-gray-700 focus:ring-2 focus:border-transparent resize-none text-sm sm:text-base transition-colors`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors min-h-[44px] text-sm sm:text-base flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label={isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  'Mesaj Gönder'
                )}
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
                  href="mailto:iletisim@eliyte.com"
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline min-h-[44px] inline-flex items-center"
                >
                  iletisim@eliyte.com
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
    </>
  );
};

export default Contact;
