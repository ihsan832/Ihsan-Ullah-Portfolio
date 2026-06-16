import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DATA } from '../data'

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on outside click / scroll
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: '70px',
          background: 'rgba(10,15,13,0.92)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--border)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 5%',
          transition: 'box-shadow 0.3s',
        }}
      >
        {/* Logo */}
        <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
          {DATA.firstName}<span style={{ color: 'var(--green)' }}>.{DATA.lastName[0]}</span>
        </span>

        {/* Desktop Links */}
        <ul className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  color: 'var(--text-muted)', textDecoration: 'none',
                  fontSize: '0.88rem', fontWeight: 500, letterSpacing: '0.3px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--green)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub Button — hidden on mobile via CSS */}
        <a
          href={DATA.github}
          target="_blank"
          rel="noreferrer"
          className="nav-github-btn"
          style={{
            background: 'var(--green)', color: '#0a0f0d',
            padding: '0.48rem 1.2rem', borderRadius: '6px',
            fontSize: '0.85rem', fontWeight: 700,
            textDecoration: 'none', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = 'var(--green-light)'}
          onMouseLeave={e => e.target.style.background = 'var(--green)'}
        >
          GitHub
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-mobile-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </motion.nav>

      {/* Mobile Slide-Down Menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href={DATA.github}
          target="_blank"
          rel="noreferrer"
          className="nav-mobile-github"
          style={{ color: 'var(--green)', fontWeight: 700 }}
          onClick={() => setMenuOpen(false)}
        >
          GitHub ↗
        </a>
      </div>
    </>
  )
}
