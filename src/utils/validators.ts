/**
 * Form validation utility functions
 */

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate required field
 *
 * @param {string} value - Value to validate
 * @param {string} fieldName - Field name for error message
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateRequired('', 'Email'); // { isValid: false, error: 'Email is required' }
 */
export function validateRequired(value: string, fieldName: string = 'Field'): ValidationResult {
  const isValid = value.trim().length > 0;
  return {
    isValid,
    error: isValid ? undefined : `${fieldName} is required`,
  };
}

/**
 * Validate email address
 *
 * @param {string} email - Email to validate
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateEmail('test@example.com'); // { isValid: true }
 * validateEmail('invalid-email'); // { isValid: false, error: 'Invalid email address' }
 */
export function validateEmail(email: string): ValidationResult {
  // RFC 5322 compliant email regex (simplified)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email.trim());

  return {
    isValid,
    error: isValid ? undefined : 'Invalid email address',
  };
}

/**
 * Validate URL
 *
 * @param {string} url - URL to validate
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateUrl('https://example.com'); // { isValid: true }
 * validateUrl('invalid-url'); // { isValid: false, error: 'Invalid URL' }
 */
export function validateUrl(url: string): ValidationResult {
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return {
      isValid: false,
      error: 'Invalid URL',
    };
  }
}

/**
 * Validate phone number (US format)
 *
 * @param {string} phone - Phone number to validate
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validatePhone('(123) 456-7890'); // { isValid: true }
 * validatePhone('1234567890'); // { isValid: true }
 * validatePhone('123'); // { isValid: false, error: 'Invalid phone number' }
 */
export function validatePhone(phone: string): ValidationResult {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');

  // US phone numbers should have 10 digits, or 11 if starting with 1
  const isValid = cleaned.length === 10 || (cleaned.length === 11 && cleaned.startsWith('1'));

  return {
    isValid,
    error: isValid ? undefined : 'Invalid phone number',
  };
}

/**
 * Validate minimum length
 *
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum length
 * @param {string} fieldName - Field name for error message
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateMinLength('abc', 5, 'Password'); // { isValid: false, error: 'Password must be at least 5 characters' }
 */
export function validateMinLength(
  value: string,
  minLength: number,
  fieldName: string = 'Field'
): ValidationResult {
  const isValid = value.length >= minLength;

  return {
    isValid,
    error: isValid ? undefined : `${fieldName} must be at least ${minLength} characters`,
  };
}

/**
 * Validate maximum length
 *
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum length
 * @param {string} fieldName - Field name for error message
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateMaxLength('abc', 2, 'Name'); // { isValid: false, error: 'Name must be at most 2 characters' }
 */
export function validateMaxLength(
  value: string,
  maxLength: number,
  fieldName: string = 'Field'
): ValidationResult {
  const isValid = value.length <= maxLength;

  return {
    isValid,
    error: isValid ? undefined : `${fieldName} must be at most ${maxLength} characters`,
  };
}

/**
 * Validate password strength
 *
 * @param {string} password - Password to validate
 * @param {object} options - Validation options
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validatePassword('Pass123!'); // { isValid: true }
 * validatePassword('weak'); // { isValid: false, error: '...' }
 */
export function validatePassword(
  password: string,
  options: {
    minLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumbers?: boolean;
    requireSpecialChars?: boolean;
  } = {}
): ValidationResult {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = true,
  } = options;

  const errors: string[] = [];

  if (password.length < minLength) {
    errors.push(`at least ${minLength} characters`);
  }

  if (requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('one uppercase letter');
  }

  if (requireLowercase && !/[a-z]/.test(password)) {
    errors.push('one lowercase letter');
  }

  if (requireNumbers && !/\d/.test(password)) {
    errors.push('one number');
  }

  if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('one special character');
  }

  const isValid = errors.length === 0;

  return {
    isValid,
    error: isValid ? undefined : `Password must contain ${errors.join(', ')}`,
  };
}

/**
 * Validate that two fields match (e.g., password confirmation)
 *
 * @param {string} value1 - First value
 * @param {string} value2 - Second value
 * @param {string} fieldName - Field name for error message
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateMatch('password', 'password', 'Password'); // { isValid: true }
 * validateMatch('password', 'different', 'Password'); // { isValid: false, error: 'Passwords do not match' }
 */
export function validateMatch(
  value1: string,
  value2: string,
  fieldName: string = 'Field'
): ValidationResult {
  const isValid = value1 === value2;

  return {
    isValid,
    error: isValid ? undefined : `${fieldName}s do not match`,
  };
}

/**
 * Validate number range
 *
 * @param {number} value - Value to validate
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {string} fieldName - Field name for error message
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateRange(5, 1, 10, 'Age'); // { isValid: true }
 * validateRange(15, 1, 10, 'Age'); // { isValid: false, error: 'Age must be between 1 and 10' }
 */
export function validateRange(
  value: number,
  min: number,
  max: number,
  fieldName: string = 'Value'
): ValidationResult {
  const isValid = value >= min && value <= max;

  return {
    isValid,
    error: isValid ? undefined : `${fieldName} must be between ${min} and ${max}`,
  };
}

/**
 * Validate file type
 *
 * @param {File} file - File to validate
 * @param {string[]} allowedTypes - Allowed MIME types
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateFileType(file, ['image/jpeg', 'image/png']); // { isValid: true }
 */
export function validateFileType(file: File, allowedTypes: string[]): ValidationResult {
  const isValid = allowedTypes.includes(file.type);

  return {
    isValid,
    error: isValid
      ? undefined
      : `File type must be one of: ${allowedTypes.map((t) => t.split('/')[1]).join(', ')}`,
  };
}

/**
 * Validate file size
 *
 * @param {File} file - File to validate
 * @param {number} maxSize - Maximum file size in bytes
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateFileSize(file, 5 * 1024 * 1024); // Max 5MB
 */
export function validateFileSize(file: File, maxSize: number): ValidationResult {
  const isValid = file.size <= maxSize;
  const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(2);

  return {
    isValid,
    error: isValid ? undefined : `File size must not exceed ${maxSizeMB}MB`,
  };
}

/**
 * Validate credit card number using Luhn algorithm
 *
 * @param {string} cardNumber - Credit card number
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateCreditCard('4111111111111111'); // { isValid: true }
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  // Remove spaces and dashes
  const cleaned = cardNumber.replace(/[\s-]/g, '');

  // Check if it contains only digits and is 13-19 characters
  if (!/^\d{13,19}$/.test(cleaned)) {
    return {
      isValid: false,
      error: 'Invalid credit card number',
    };
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  const isValid = sum % 10 === 0;

  return {
    isValid,
    error: isValid ? undefined : 'Invalid credit card number',
  };
}

/**
 * Validate date is in the future
 *
 * @param {Date | string} date - Date to validate
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validateFutureDate(new Date(Date.now() + 86400000)); // { isValid: true }
 */
export function validateFutureDate(date: Date | string): ValidationResult {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const isValid = dateObj > now;

  return {
    isValid,
    error: isValid ? undefined : 'Date must be in the future',
  };
}

/**
 * Validate date is in the past
 *
 * @param {Date | string} date - Date to validate
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validatePastDate(new Date(Date.now() - 86400000)); // { isValid: true }
 */
export function validatePastDate(date: Date | string): ValidationResult {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const isValid = dateObj < now;

  return {
    isValid,
    error: isValid ? undefined : 'Date must be in the past',
  };
}

/**
 * Validate postal code (US ZIP code)
 *
 * @param {string} postalCode - Postal code to validate
 * @returns {ValidationResult} Validation result
 *
 * @example
 * validatePostalCode('12345'); // { isValid: true }
 * validatePostalCode('12345-6789'); // { isValid: true }
 */
export function validatePostalCode(postalCode: string): ValidationResult {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  const isValid = zipRegex.test(postalCode);

  return {
    isValid,
    error: isValid ? undefined : 'Invalid postal code',
  };
}
