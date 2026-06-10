/**
 * Reusable Email Input Component
 * Provides consistent styling and validation feedback
 */

export function TextInput({ label, name, placeholder, value, onChange, error, onFocus, onBlur }) {
  const inputStyle = {
    background: 'var(--card)',
    border: error ? '2px solid #ef4444' : '1px solid var(--border)',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: 'var(--text)',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    boxSizing: 'border-box',
  }

  return (
    <div>
      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', textTransform: 'capitalize' }}>
        {label}
      </label>
      <input
        name={name}
        type={name === 'email' ? 'email' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={inputStyle}
      />
      {error && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{error}</p>}
    </div>
  )
}

export function TextArea({ label, name, placeholder, value, onChange, error, onFocus, onBlur }) {
  const textareaStyle = {
    background: 'var(--card)',
    border: error ? '2px solid #ef4444' : '1px solid var(--border)',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: 'var(--text)',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'none',
  }

  return (
    <div>
      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={5}
        style={textareaStyle}
      />
      {error && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{error}</p>}
    </div>
  )
}
