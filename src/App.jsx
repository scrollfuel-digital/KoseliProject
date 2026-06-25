import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectForm from './components/ProjectForm'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/projectsform" element={<ProjectForm />} />
    </Routes>
    <Footer />
    </>
  )
}
