import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Capabilities from '@/components/Capabilities'
import Projects from '@/components/Projects'
import BeforeAfter from '@/components/BeforeAfter'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PaintBackground from '@/components/PaintBackground'

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <PaintBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Capabilities />
        <Projects />
        <BeforeAfter />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
