import { useEffect } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import { initializeEmailJS } from './services/emailService'

export default function App() {
  useEffect(() => {
    // Initialize EmailJS on app load
    initializeEmailJS()
  }, [])

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
