import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ProjectsShowcase from '../components/ProjectsShowcase'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
     
      <Hero />
      <About />
      <Services />
      <ProjectsShowcase />
      <ContactSection />
    
    </main>
  )
}
