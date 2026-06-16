import { motion } from 'framer-motion'
import { DATA } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="skills-section" style={{ padding: '6rem 5%', background: 'var(--bg)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <div style={{ color: 'var(--green)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800 }}>Skills &amp; Technologies</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginTop: '0.5rem' }}>
          The tools and technologies I work with daily
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.4rem' }}>
        {DATA.skills.map((sk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, boxShadow: '0 14px 45px rgba(45,204,122,0.1)' }}
            style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '14px', padding: '1.6rem', cursor: 'default',
              transition: 'border-color 0.25s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--green)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{sk.icon}</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{sk.name}</div>
            {/* Progress bar */}
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '4px', height: '5px', margin: '0.8rem 0' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: sk.level + '%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.08 }}
                style={{
                  height: '5px', borderRadius: '4px',
                  background: 'linear-gradient(90deg, var(--green-dark), var(--green))',
                }}
              />
            </div>
            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {sk.tags.map((tag, j) => (
                <span key={j} style={{
                  background: 'rgba(45,204,122,0.08)', border: '1px solid rgba(45,204,122,0.18)',
                  color: 'var(--green)', fontSize: '0.72rem',
                  padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 500,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
