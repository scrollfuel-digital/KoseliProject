import { Link } from 'react-router-dom'
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RE</span>
              </div>
              <span className="font-bold text-xl">RealEstate</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for farm plot investments and real estate solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-green-500 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Plot Buying & Selling</li>
              <li>Legal Documentation</li>
              <li>Investment Consultation</li>
              <li>Site Visit Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <HiMapPin className="mt-1 flex-shrink-0" />
                <span>123 Main Street, City, State - 123456</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiPhone />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiEnvelope />
                <span>contact@realestate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RealEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
