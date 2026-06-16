import { motion } from 'framer-motion'
import { DATA } from '../data'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  }
}

export default function About() {
  return (
    <section id="about" className="about-section" style={{ padding: '6rem 5%', background: 'var(--bg2)' }}>
      {/* Header */}
      <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ color: 'var(--green)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800 }}>Who I Am</h2>
      </motion.div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Left */}
        <motion.div {...fadeUp(0.1)}>
          <h3 style={{ fontSize: '1.55rem', fontWeight: 700, marginBottom: '1rem' }}>
            AI/ML Engineer 
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
            {DATA.about}
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Currently pursuing my B.S. in Computer Science at Kohat University of Science &amp; Technology (2022–2026).
            Fluent in Pashto, Urdu, and English.
          </p>

          {/* Info row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '1.6rem 0' }}>
            {[
              
            
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.val}</div>
              </div>
            ))}
          </div>

          <a
            href={DATA.github} target="_blank" rel="noreferrer"
            style={{
              background: 'var(--green)', color: '#0a0f0d',
              padding: '0.65rem 1.5rem', borderRadius: '8px',
              fontSize: '0.9rem', fontWeight: 700,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              border: '2px solid var(--green)', transition: 'all 0.22s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--green)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.color = '#0a0f0d' }}
          >
            View GitHub →
          </a>
        </motion.div>

        {/* Right */}
        <motion.div {...fadeUp(0.2)}>
          {/* Stats grid */}
          <div className="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.5rem' }}>
            {DATA.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '1.4rem', textAlign: 'center',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--green)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--green)' }}>{s.num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '12px', padding: '1.4rem',
          }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              Languages
            </div>
            {DATA.languages.map((lang, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  <span>{lang.name}</span>
                  <span style={{ color: 'var(--green)' }}>{lang.level}%</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '4px', height: '5px' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: lang.level + '%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                    style={{
                      height: '5px', borderRadius: '4px',
                      background: 'linear-gradient(90deg, var(--green-dark), var(--green))',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
