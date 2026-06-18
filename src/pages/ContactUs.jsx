import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

export default function ContactUs() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
