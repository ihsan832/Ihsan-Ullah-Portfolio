import { DATA } from '../data'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '2rem 5%',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        © 2026 <span style={{ color: 'var(--green)' }}>{DATA.name}</span>. Built with ❤️ and lots of Python.
      </p>
      <div style={{ display: 'flex', gap: '1.4rem' }}>
        {[
          {icon: '💻', label: 'GitHub',   href: DATA.github   },
          {icon: '🔗', label: 'LinkedIn', href: DATA.linkedin  },
          {icon: '↑', label: 'Back to Top', href: '#home'  },
        ].map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : '_self'}
            rel="noreferrer"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--green)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
