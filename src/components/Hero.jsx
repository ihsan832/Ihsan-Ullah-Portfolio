import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'
import { DATA, PROFILE_IMAGE } from '../data'

// Floating code symbols (decorative, like the reference design)
const CODE_SYMBOLS = [
  { sym: '<>',   top: '20%', left: '56%' },
  { sym: '{}',   top: '14%', right: '5%' },
  { sym: '</>',  top: '70%', left: '58%' },
  { sym: '()',   top: '78%', right: '4%' },
  { sym: '[]',   top: '42%', left: '53%' },
  { sym: ';;',   top: '55%', right: '9%' },
]

// Typewriter effect hook
function useTypewriter(texts) {
  const [idx, setIdx]         = useState(0)
  const [displayed, setDisp]  = useState('')
  const [phase, setPhase]     = useState('typing') // 'typing' | 'pause' | 'deleting'

  useEffect(() => {
    const current = texts[idx]
    let timer

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timer = setTimeout(() => setDisp(current.slice(0, displayed.length + 1)), 65)
      } else {
        timer = setTimeout(() => setPhase('pause'), 1800)
      }
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('deleting'), 300)
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisp(displayed.slice(0, -1)), 35)
      } else {
        setIdx((idx + 1) % texts.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timer)
  }, [displayed, phase, idx, texts])

  return displayed
}

export default function Hero() {
  const typed = useTypewriter(DATA.roles)

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '70px 5% 0',
        position: 'relative', overflow: 'hidden',
        gap: '2rem',
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 70% 40%, rgba(45,204,122,0.07) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(45,204,122,0.04) 0%, transparent 50%)
        `,
      }} />

      {/* Floating code symbols */}
      {CODE_SYMBOLS.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.14 }}
          transition={{ delay: 1.2 + i * 0.15 }}
          style={{
            position: 'absolute', top: s.top, left: s.left, right: s.right,
            color: 'var(--green)', fontFamily: 'monospace',
            fontSize: '1.1rem', fontWeight: 700, pointerEvents: 'none', userSelect: 'none',
          }}
        >
          {s.sym}
        </motion.div>
      ))}

      {/* ---- LEFT: Text Content ---- */}
      <div style={{ flex: 1, maxWidth: 580, zIndex: 2 }}>
        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'rgba(45,204,122,0.08)',
            border: '1px solid rgba(45,204,122,0.25)',
            color: 'var(--green)',
            padding: '0.42rem 1.1rem', borderRadius: '50px',
            fontSize: '0.82rem', fontWeight: 500,
            marginBottom: '1.6rem', letterSpacing: '0.3px',
          }}
        >
          ⚡ {DATA.tagline}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.4rem' }}
        >
          Hi, I'm<br />
          <span style={{ color: 'var(--green)' }}>{DATA.name}</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: '1.25rem', fontWeight: 700, minHeight: '2rem', marginTop: '0.3rem' }}
        >
          <span style={{ color: 'var(--green)' }}>
            {typed}
            <span className="blink" style={{ borderRight: '2px solid var(--green)', marginLeft: '2px' }}>&nbsp;</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            color: 'var(--text-muted)', lineHeight: 1.75,
            fontSize: 'clamp(0.92rem, 1.5vw, 1.05rem)',
            margin: '1.4rem 0 2rem', maxWidth: 480,
          }}
        >
          {DATA.about}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.2rem' }}
        >
          <BtnPrimary href="#projects">View Projects <FiArrowRight /></BtnPrimary>
          <BtnOutline href="#contact">Contact Me</BtnOutline>
        </motion.div>

       
      </div>

      {/* ---- RIGHT: Profile Photo ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          flex: 1, display: 'flex', alignItems: 'center',
          justifyContent: 'flex-end', zIndex: 2,
        }}
      >
        <div style={{ position: 'relative', width: 320, height: 320 }}>
          {/* Outer dashed ring */}
          <div className="spin-slow" style={{
            position: 'absolute', inset: -26,
            borderRadius: '50%',
            border: '1px dashed rgba(45,204,122,0.3)',
          }} />
          {/* Solid ring */}
          <div style={{
            position: 'absolute', inset: -12,
            borderRadius: '50%',
            border: '2px solid var(--green)',
            opacity: 0.7,
          }} />
          {/* Photo */}
          {/* 👉 Put your photo at /public/profile.jpg */}
          <img
            src={PROFILE_IMAGE}
            alt={DATA.name}
            style={{
              width: '100%', height: '100%',
              borderRadius: '50%',
              objectFit: 'cover', objectPosition: 'top center',
              border: '3px solid var(--bg)',
              position: 'relative', zIndex: 1,
              background: 'var(--card)',
            }}
          />
          {/* Available badge */}
          <div style={{
            position: 'absolute', bottom: 10, right: -24,
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '50px',
            padding: '0.38rem 1rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.82rem', fontWeight: 600,
            zIndex: 3,
            boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
          }}>
            <div className="pulse-dot" style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--green)',
            }} />
            Available
          </div>
        </div>
      </motion.div>

      
    </section>
  )
}

// ---- Small shared sub-components ----
function BtnPrimary({ href, children }) {
  return (
    <a
      href={href}
      style={{
        background: 'var(--green)', color: '#0a0f0d',
        padding: '0.72rem 1.7rem', borderRadius: '8px',
        fontSize: '0.92rem', fontWeight: 700,
        textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        border: '2px solid var(--green)', transition: 'all 0.22s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--green)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.color = '#0a0f0d' }}
    >
      {children}
    </a>
  )
}

function BtnOutline({ href, children }) {
  return (
    <a
      href={href}
      style={{
        background: 'transparent', color: 'var(--text)',
        padding: '0.72rem 1.7rem', borderRadius: '8px',
        fontSize: '0.92rem', fontWeight: 600,
        textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
        border: '2px solid rgba(255,255,255,0.18)', transition: 'all 0.22s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'var(--text)' }}
    >
      {children}
    </a>
  )
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href} target="_blank" rel="noreferrer"
      style={{
        width: 42, height: 42, borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--text-muted)', textDecoration: 'none', transition: 'all 0.22s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(45,204,122,0.1)'; e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
    >
      {children}
    </a>
  )
}
