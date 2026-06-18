import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HiCheckCircle } from 'react-icons/hi2'

export default function About() {
  return (
    <main>
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading farm plot dealer in [City], helping clients find genuine and 
              high-value land investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
              alt="About Us"
              className="rounded-xl shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With strong market knowledge and years of experience, we are committed to providing 
                the best real estate solutions. Our team works tirelessly to ensure that every client 
                finds the perfect property that meets their needs and budget.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <HiCheckCircle className="text-green-600 text-2xl mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparency</h3>
                    <p className="text-gray-600">Honest and clear communication at every step of the process.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiCheckCircle className="text-green-600 text-2xl mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Customer Satisfaction</h3>
                    <p className="text-gray-600">Your happiness and success is our top priority.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiCheckCircle className="text-green-600 text-2xl mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Safe Investment</h3>
                    <p className="text-gray-600">Verified properties with complete legal documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Goal</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To make property buying simple, secure, and profitable for everyone. 
              We believe in building long-term relationships based on trust and results.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
