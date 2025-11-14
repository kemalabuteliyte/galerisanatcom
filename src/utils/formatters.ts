/**
 * Formatting utility functions for dates, numbers, currency, and text
 */

/**
 * Format a date to a readable string
 *
 * @param {Date | string | number} date - Date to format
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @param {Intl.DateTimeFormatOptions} options - Formatting options
 * @returns {string} Formatted date string
 *
 * @example
 * formatDate(new Date(), 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
 * // "January 15, 2024"
 */
export function formatDate(
  date: Date | string | number,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format a date to a short string (MM/DD/YYYY)
 *
 * @param {Date | string | number} date - Date to format
 * @returns {string} Formatted date string
 *
 * @example
 * formatDateShort(new Date()); // "01/15/2024"
 */
export function formatDateShort(date: Date | string | number): string {
  return formatDate(date, 'en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

/**
 * Format a date to a relative time string (e.g., "2 hours ago")
 *
 * @param {Date | string | number} date - Date to format
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Relative time string
 *
 * @example
 * formatRelativeTime(Date.now() - 3600000); // "1 hour ago"
 */
export function formatRelativeTime(date: Date | string | number, locale: string = 'en-US'): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / secondsInUnit);

    if (interval >= 1) {
      const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
      return rtf.format(-interval, unit as Intl.RelativeTimeFormatUnit);
    }
  }

  return 'just now';
}

/**
 * Format a number with thousand separators
 *
 * @param {number} num - Number to format
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted number string
 *
 * @example
 * formatNumber(1234567); // "1,234,567"
 */
export function formatNumber(num: number, locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Format a number as currency
 *
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted currency string
 *
 * @example
 * formatCurrency(1234.56, 'USD'); // "$1,234.56"
 * formatCurrency(1234.56, 'EUR', 'de-DE'); // "1.234,56 €"
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format a number as a percentage
 *
 * @param {number} value - Value to format (0-1)
 * @param {number} decimals - Number of decimal places (default: 0)
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted percentage string
 *
 * @example
 * formatPercentage(0.1234); // "12%"
 * formatPercentage(0.1234, 2); // "12.34%"
 */
export function formatPercentage(
  value: number,
  decimals: number = 0,
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format file size to human-readable string
 *
 * @param {number} bytes - File size in bytes
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted file size
 *
 * @example
 * formatFileSize(1234567); // "1.18 MB"
 */
export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

/**
 * Truncate text to a maximum length with ellipsis
 *
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to append (default: '...')
 * @returns {string} Truncated text
 *
 * @example
 * truncateText('This is a long text', 10); // "This is a..."
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Truncate text at word boundary
 *
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to append (default: '...')
 * @returns {string} Truncated text
 *
 * @example
 * truncateWords('This is a long sentence', 10); // "This is a..."
 */
export function truncateWords(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength - suffix.length);
  const lastSpace = truncated.lastIndexOf(' ');

  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + suffix;
}

/**
 * Capitalize first letter of a string
 *
 * @param {string} text - Text to capitalize
 * @returns {string} Capitalized text
 *
 * @example
 * capitalize('hello world'); // "Hello world"
 */
export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Capitalize first letter of each word
 *
 * @param {string} text - Text to capitalize
 * @returns {string} Title cased text
 *
 * @example
 * titleCase('hello world'); // "Hello World"
 */
export function titleCase(text: string): string {
  if (!text) return '';
  return text
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
}

/**
 * Convert string to slug (URL-friendly string)
 *
 * @param {string} text - Text to slugify
 * @returns {string} Slugified text
 *
 * @example
 * slugify('Hello World!'); // "hello-world"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Format phone number to (XXX) XXX-XXXX format
 *
 * @param {string} phoneNumber - Phone number to format
 * @returns {string} Formatted phone number
 *
 * @example
 * formatPhoneNumber('1234567890'); // "(123) 456-7890"
 */
export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }

  return phoneNumber;
}

/**
 * Pluralize a word based on count
 *
 * @param {number} count - Count
 * @param {string} singular - Singular form
 * @param {string} plural - Plural form (optional, defaults to singular + 's')
 * @returns {string} Pluralized string with count
 *
 * @example
 * pluralize(1, 'item'); // "1 item"
 * pluralize(5, 'item'); // "5 items"
 * pluralize(2, 'person', 'people'); // "2 people"
 */
export function pluralize(count: number, singular: string, plural?: string): string {
  const word = count === 1 ? singular : plural || `${singular}s`;
  return `${formatNumber(count)} ${word}`;
}

/**
 * Format duration in seconds to readable time (HH:MM:SS)
 *
 * @param {number} seconds - Duration in seconds
 * @returns {string} Formatted duration
 *
 * @example
 * formatDuration(3665); // "01:01:05"
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const parts = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    secs.toString().padStart(2, '0'),
  ];

  return hours > 0 ? parts.join(':') : parts.slice(1).join(':');
}
