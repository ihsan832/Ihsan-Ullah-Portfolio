import { motion } from 'framer-motion'
import { DATA } from '../data'

export default function Experience() {
  const allItems = [
    ...DATA.experience,
    {
      title:   DATA.education.degree,
      company: DATA.education.school,
      period:  DATA.education.period,
      bullets: DATA.education.bullets,
      isEdu:   true,
    },
  ]

  return (
    <section id="experience" style={{ padding: '6rem 5%', background: 'var(--bg2)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <div style={{ color: 'var(--green)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
  
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800 }}>Experience &amp; Education</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginTop: '0.5rem' }}>Where I've worked and studied</p>
      </motion.div>

      {/* Timeline */}
      <div style={{ maxWidth: 760, margin: '0 auto', paddingLeft: '2rem', position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: '6px', top: 0, bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, var(--green), transparent)',
        }} />

        {allItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            style={{ position: 'relative', marginBottom: '2.4rem' }}
          >
            {/* Dot */}
            <div style={{
              position: 'absolute', left: '-2.35rem', top: '8px',
              width: 14, height: 14, borderRadius: '50%',
              border: '2px solid var(--green)', background: 'var(--bg)',
              boxShadow: '0 0 10px rgba(45,204,122,0.35)',
            }} />

            {/* Card */}
            <div
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '14px', padding: '1.6rem',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(45,204,122,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>{item.title}</span>
                <span style={{
                  background: 'rgba(45,204,122,0.1)', color: 'var(--green)',
                  padding: '0.22rem 0.75rem', borderRadius: '20px',
                  fontSize: '0.78rem', fontWeight: 600,
                }}>
                  {item.period}
                </span>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1rem' }}>
                {item.isEdu ? '🎓' : '📍'} {item.company}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {item.bullets.map((b, j) => (
                  <li key={j} style={{
                    color: 'var(--text-muted)', fontSize: '0.88rem',
                    lineHeight: 1.65, paddingLeft: '1.2rem', position: 'relative',
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--green)' }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
