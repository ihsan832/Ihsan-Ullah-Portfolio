/**
 * EmailJS Configuration
 * Stores all EmailJS credentials and settings
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_83s2qwd',
  TEMPLATE_ID: 'template_46z9elf',
  PUBLIC_KEY: 'ha6knODZ9Y9gImOpj',
}

/**
 * Email template parameters
 * Maps form fields to EmailJS template variables
 */
export const EMAIL_TEMPLATE_PARAMS = {
  to_email: 'ihsanokz912@gmail.com',
  from_name_field: 'user_name',
  from_email_field: 'user_email',
  subject_field: 'subject',
  message_field: 'message',
}

/**
 * Validation rules for contact form
 */
export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s'-]+$/,
    message: 'Name must be 2-100 characters and contain only letters',
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  subject: {
    required: true,
    minLength: 3,
    maxLength: 150,
    message: 'Subject must be 3-150 characters',
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 5000,
    message: 'Message must be 10-5000 characters',
  },
}
