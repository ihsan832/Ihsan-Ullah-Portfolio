/**
 * Email Service
 * Handles all email operations using EmailJS
 */

import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, EMAIL_TEMPLATE_PARAMS, VALIDATION_RULES } from '../config/emailConfig'

/**
 * Initialize EmailJS on app load
 * Should be called once in App.jsx useEffect
 */
export const initializeEmailJS = () => {
  try {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error)
  }
}

/**
 * Validate form data against defined rules
 * @param {Object} formData - Form data to validate
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export const validateFormData = (formData) => {
  const errors = {}

  Object.keys(VALIDATION_RULES).forEach((field) => {
    const rule = VALIDATION_RULES[field]
    const value = formData[field]?.trim()

    // Check if required
    if (rule.required && !value) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
      return
    }

    // Check minimum length
    if (value && rule.minLength && value.length < rule.minLength) {
      errors[field] = rule.message
      return
    }

    // Check maximum length
    if (value && rule.maxLength && value.length > rule.maxLength) {
      errors[field] = rule.message
      return
    }

    // Check pattern
    if (value && rule.pattern && !rule.pattern.test(value)) {
      errors[field] = rule.message
      return
    }
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data { name, email, subject, message }
 * @returns {Promise} - EmailJS response promise
 */
export const sendEmail = async (formData) => {
  // Validate form data first
  const validation = validateFormData(formData)
  if (!validation.isValid) {
    return Promise.reject({
      type: 'validation',
      errors: validation.errors,
    })
  }

  // Prepare template parameters
  const templateParams = {
    to_email: EMAIL_TEMPLATE_PARAMS.to_email,
    user_name: formData.name.trim(),
    user_email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
    // Additional info
    timestamp: new Date().toLocaleString(),
  }

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      }
    } else {
      throw {
        type: 'send',
        message: 'Failed to send message. Please try again later.',
      }
    }
  } catch (error) {
    console.error('Email sending error:', error)
    throw error.type ? error : {
      type: 'send',
      message: 'Failed to send message. Please try again later.',
      error,
    }
  }
}

/**
 * Format validation error message for display
 * @param {Object} errors - Validation errors object
 * @returns {String} - Formatted error message
 */
export const formatErrorMessage = (errors) => {
  return Object.values(errors)[0] || 'Please check your form and try again'
}
