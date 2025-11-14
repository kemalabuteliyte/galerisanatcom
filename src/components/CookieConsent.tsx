import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Cookie preferences interface
 */
interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

/**
 * GDPR compliant cookie consent banner component
 *
 * @example
 * <CookieConsent />
 */
export const CookieConsent: React.FC = () => {
  const [consent, setConsent] = useLocalStorage<CookiePreferences | null>(
    'eliyte_cookie_consent',
    null
  );
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Show banner if no consent has been given
  useEffect(() => {
    if (consent === null) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  /**
   * Accept all cookies
   */
  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsent(allAccepted);
    setShowBanner(false);
    setShowPreferences(false);
  };

  /**
   * Reject all non-essential cookies
   */
  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setConsent(onlyNecessary);
    setShowBanner(false);
    setShowPreferences(false);
  };

  /**
   * Save custom preferences
   */
  const savePreferences = () => {
    setConsent({ ...preferences, necessary: true });
    setShowBanner(false);
    setShowPreferences(false);
  };

  /**
   * Toggle preference
   */
  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Overlay for preferences modal */}
      {showPreferences && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 pointer-events-auto"
          onClick={() => setShowPreferences(false)}
        />
      )}

      {/* Cookie Banner */}
      <div
        className={`absolute bottom-0 left-0 right-0 pointer-events-auto transform transition-transform duration-300 ${
          showBanner ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <Cookie className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-gray-600">
                    We use cookies to enhance your browsing experience, serve personalized
                    content, and analyze our traffic. By clicking "Accept All", you consent
                    to our use of cookies.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Reject All
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-4 pointer-events-auto">
          <div className="bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Cookie Preferences</h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-sm text-gray-600">
                When you visit our website, we may store or retrieve information on your
                browser, mostly in the form of cookies. This information might be about you,
                your preferences or your device and is mostly used to make the site work as
                you expect it to.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">
                      Strictly Necessary Cookies
                    </h3>
                    <div className="text-sm text-gray-500">Always Active</div>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are necessary for the website to function and cannot be
                    switched off. They are usually only set in response to actions made by
                    you, such as setting your privacy preferences or filling in forms.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies help us understand how visitors interact with our website
                    by collecting and reporting information anonymously.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => togglePreference('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies may be set through our site by our advertising partners to
                    build a profile of your interests and show you relevant ads on other
                    sites.
                  </p>
                </div>

                {/* Preference Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Preference Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.preferences}
                        onChange={() => togglePreference('preferences')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies enable the website to remember choices you make (such as
                    language or region) and provide enhanced, more personal features.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
              <button
                onClick={rejectAll}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Reject All
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
