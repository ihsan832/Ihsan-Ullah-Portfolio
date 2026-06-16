import { useState } from 'react'
import { motion } from 'framer-motion'
import { DATA } from '../data'
import { TextInput, TextArea } from './EmailInput'
import { sendEmail, formatErrorMessage } from '../services/emailService'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '', errors: {} })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (status.errors[name]) {
      setStatus(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: '' }
      }))
    }
  }

  const handleSubmit = async (e) => {
    e?.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: '', errors: {} })

    try {
      const result = await sendEmail(form)
      setStatus({
        type: 'success',
        message: result.message,
        errors: {}
      })
      // Reset form after successful submission
      setForm({ name: '', email: '', subject: '', message: '' })
      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: null, message: '', errors: {} }), 5000)
    } catch (error) {
      if (error.type === 'validation') {
        setStatus({
          type: 'error',
          message: formatErrorMessage(error.errors),
          errors: error.errors
        })
      } else {
        setStatus({
          type: 'error',
          message: error.message || 'Failed to send message. Please try again.',
          errors: {}
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: '8px', padding: '0.75rem 1rem',
    color: 'var(--text)', fontSize: '0.9rem',
    fontFamily: 'inherit', outline: 'none',
    transition: 'border-color 0.2s', width: '100%',
  }

  // Notification styles
  const notificationStyle = {
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    animation: 'slideIn 0.3s ease-out',
  }

  const successNotification = {
    ...notificationStyle,
    background: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    color: '#22c55e',
  }

  const errorNotification = {
    ...notificationStyle,
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#ef4444',
  }

  return (
    <section id="contact" className="contact-section" style={{ padding: '6rem 5%', background: 'var(--bg2)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <div style={{ color: 'var(--green)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800 }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginTop: '0.5rem' }}>
          Have a project in mind? Let's build something great together.
        </p>
      </motion.div>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start', maxWidth: 1000, margin: '0 auto' }}>
        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.8rem' }}>Let's Work Together</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            I'm currently available for freelance projects, collaborations, and full-time opportunities in AI/ML engineering.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '📍', label: 'Location', val: DATA.location },
              { icon: '📞', label: 'Phone',    val: DATA.phone    },
              
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '10px', flexShrink: 0,
                  background: 'rgba(45,204,122,0.1)', border: '1px solid rgba(45,204,122,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{c.label}</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {/* Status Messages */}
          {status.type === 'success' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={successNotification}>
              ✓ {status.message}
            </motion.div>
          )}
          {status.type === 'error' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={errorNotification}>
              ✕ {status.message}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Name + Email row */}
            <div className="contact-name-email" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <TextInput
                label="name"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                error={status.errors.name}
                onFocus={e => !status.errors.name && (e.target.style.borderColor = 'var(--green)')}
                onBlur={e => !status.errors.name && (e.target.style.borderColor = 'var(--border)')}
              />
              <TextInput
                label="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                error={status.errors.email}
                onFocus={e => !status.errors.email && (e.target.style.borderColor = 'var(--green)')}
                onBlur={e => !status.errors.email && (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {/* Subject */}
            <TextInput
              label="Subject"
              name="subject"
              placeholder="Project inquiry..."
              value={form.subject}
              onChange={handleChange}
              error={status.errors.subject}
              onFocus={e => !status.errors.subject && (e.target.style.borderColor = 'var(--green)')}
              onBlur={e => !status.errors.subject && (e.target.style.borderColor = 'var(--border)')}
            />

            {/* Message */}
            <TextArea
              label="Message"
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              error={status.errors.message}
              onFocus={e => !status.errors.message && (e.target.style.borderColor = 'var(--green)')}
              onBlur={e => !status.errors.message && (e.target.style.borderColor = 'var(--border)')}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? 'var(--text-muted)' : status.type === 'success' ? 'var(--green)' : 'var(--green)',
                color: '#0a0f0d',
                padding: '0.75rem 1.8rem',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: '2px solid var(--green)',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.22s',
                alignSelf: 'flex-start',
                opacity: loading ? 0.7 : 1,
              }}
              onMouseEnter={e => {
                if (!loading) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--green)'
                }
              }}
              onMouseLeave={e => {
                if (!loading) {
                  e.currentTarget.style.background = 'var(--green)'
                  e.currentTarget.style.color = '#0a0f0d'
                }
              }}
            >
              {loading ? '⟳ Sending...' : status.type === 'success' ? '✓ Message Sent' : 'Send Message →'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
