import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { DATA } from '../data'

const INITIAL_SHOW = 6

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? DATA.projects : DATA.projects.slice(0, INITIAL_SHOW)

  return (
    <section id="projects" className="projects-section" style={{ padding: '6rem 5%', background: 'var(--bg)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <div style={{ color: 'var(--green)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800 }}>Featured Projects</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginTop: '0.5rem' }}>
          Real-world AI/ML applications I've built
        </p>
      </motion.div>

      {/* Grid */}
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.4rem' }}>
        {visible.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* Show More */}
      {!showAll && (
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <button
            onClick={() => setShowAll(true)}
            style={{
              background: 'transparent', color: 'var(--text)',
              padding: '0.72rem 2rem', borderRadius: '8px',
              fontSize: '0.92rem', fontWeight: 600, cursor: 'pointer',
              border: '2px solid rgba(255,255,255,0.18)', transition: 'all 0.22s',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'var(--text)' }}
          >
            Show All {DATA.projects.length} Projects ↓
          </button>
        </motion.div>
      )}
    </section>
  )
}

function ProjectCard({ project: p, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -5, boxShadow: '0 18px 55px rgba(0,0,0,0.38)' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: 'var(--card)',
        border: `1px solid ${hovered ? 'rgba(45,204,122,0.35)' : 'var(--border)'}`,
        borderRadius: '14px', padding: '1.6rem',
        position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.25s',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, var(--green-dark), var(--green))',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.25s',
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
        <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
        <a
          href={p.link} target="_blank" rel="noreferrer"
          style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <FiExternalLink size={17} />
        </a>
      </div>

      <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.title}</div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1rem' }}>{p.desc}</p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {p.tech.map((t, j) => (
          <span key={j} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px',
          }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
