/**
 * Analytics utility functions
 * Ready for integration with Google Analytics, Mixpanel, or other analytics services
 */

/**
 * Analytics event interface
 */
interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

/**
 * Page view properties interface
 */
interface PageViewProperties {
  path: string;
  title?: string;
  referrer?: string;
  [key: string]: any;
}

/**
 * User properties interface
 */
interface UserProperties {
  userId?: string;
  email?: string;
  name?: string;
  [key: string]: any;
}

/**
 * Analytics configuration
 */
interface AnalyticsConfig {
  debug?: boolean;
  trackingId?: string;
  enabled?: boolean;
}

class Analytics {
  private config: AnalyticsConfig;
  private isInitialized: boolean = false;

  constructor(config: AnalyticsConfig = {}) {
    this.config = {
      debug: false,
      enabled: true,
      ...config,
    };
  }

  /**
   * Initialize analytics
   *
   * @param {AnalyticsConfig} config - Analytics configuration
   *
   * @example
   * analytics.init({ trackingId: 'UA-XXXXX-Y', debug: true });
   */
  init(config?: AnalyticsConfig): void {
    if (this.isInitialized) {
      console.warn('Analytics already initialized');
      return;
    }

    if (config) {
      this.config = { ...this.config, ...config };
    }

    // Initialize Google Analytics if tracking ID is provided
    if (this.config.trackingId && typeof window !== 'undefined') {
      // Load gtag.js script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', this.config.trackingId);

      // Make gtag available globally
      (window as any).gtag = gtag;
    }

    this.isInitialized = true;

    if (this.config.debug) {
      console.log('Analytics initialized', this.config);
    }
  }

  /**
   * Track page view
   *
   * @param {PageViewProperties} properties - Page view properties
   *
   * @example
   * analytics.pageView({ path: '/artworks', title: 'Artworks Gallery' });
   */
  pageView(properties: PageViewProperties): void {
    if (!this.config.enabled) return;

    const { path, title, ...rest } = properties;

    if (this.config.debug) {
      console.log('Page View:', properties);
    }

    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', this.config.trackingId, {
        page_path: path,
        page_title: title,
        ...rest,
      });
    }

    // You can add other analytics services here
    // Example: Mixpanel, Segment, etc.
  }

  /**
   * Track custom event
   *
   * @param {AnalyticsEvent} event - Event to track
   *
   * @example
   * analytics.event({
   *   category: 'Artwork',
   *   action: 'View',
   *   label: 'Mona Lisa',
   *   value: 1
   * });
   */
  event(event: AnalyticsEvent): void {
    if (!this.config.enabled) return;

    const { category, action, label, value } = event;

    if (this.config.debug) {
      console.log('Event:', event);
    }

    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // You can add other analytics services here
  }

  /**
   * Track user properties
   *
   * @param {UserProperties} properties - User properties
   *
   * @example
   * analytics.setUser({ userId: '123', email: 'user@example.com' });
   */
  setUser(properties: UserProperties): void {
    if (!this.config.enabled) return;

    const { userId, ...rest } = properties;

    if (this.config.debug) {
      console.log('Set User:', properties);
    }

    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('set', {
        user_id: userId,
        ...rest,
      });
    }

    // You can add other analytics services here
  }

  /**
   * Track exception/error
   *
   * @param {string} description - Error description
   * @param {boolean} fatal - Whether error is fatal
   *
   * @example
   * analytics.exception('API call failed', false);
   */
  exception(description: string, fatal: boolean = false): void {
    if (!this.config.enabled) return;

    if (this.config.debug) {
      console.log('Exception:', { description, fatal });
    }

    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description,
        fatal,
      });
    }

    // You can add other analytics services here
  }

  /**
   * Track timing
   *
   * @param {string} category - Timing category
   * @param {string} variable - Timing variable
   * @param {number} value - Time in milliseconds
   * @param {string} label - Optional label
   *
   * @example
   * analytics.timing('API', 'artwork_load', 1234, 'Homepage');
   */
  timing(category: string, variable: string, value: number, label?: string): void {
    if (!this.config.enabled) return;

    if (this.config.debug) {
      console.log('Timing:', { category, variable, value, label });
    }

    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: variable,
        value,
        event_category: category,
        event_label: label,
      });
    }

    // You can add other analytics services here
  }

  /**
   * Enable or disable analytics
   *
   * @param {boolean} enabled - Whether analytics is enabled
   */
  setEnabled(enabled: boolean): void {
    this.config.enabled = enabled;

    if (this.config.debug) {
      console.log('Analytics enabled:', enabled);
    }
  }

  /**
   * Check if analytics is enabled
   *
   * @returns {boolean} Whether analytics is enabled
   */
  isEnabled(): boolean {
    return this.config.enabled || false;
  }
}

// Create singleton instance
const analytics = new Analytics();

// Export singleton and class
export { Analytics, analytics };

// Export convenience functions
export const pageView = (properties: PageViewProperties) => analytics.pageView(properties);
export const trackEvent = (event: AnalyticsEvent) => analytics.event(event);
export const setUser = (properties: UserProperties) => analytics.setUser(properties);
export const trackException = (description: string, fatal?: boolean) =>
  analytics.exception(description, fatal);
export const trackTiming = (category: string, variable: string, value: number, label?: string) =>
  analytics.timing(category, variable, value, label);

// Declare global window types for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
