import { Link } from 'react-router-dom'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useState } from 'react'

export default function Navbar() {
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/logo.jpeg"
              alt="RealEstate Logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
           
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <HiMagnifyingGlass className="text-gray-600 text-xl pr-1" />
            <input
              type="text"
              placeholder="Search properties..."
              className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition">
              About
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setShowProjectsDropdown(true)}
              onMouseLeave={() => setShowProjectsDropdown(false)}
            >
              <Link to="/projects" className="text-gray-700 hover:text-green-600 font-medium transition">
                Projects
              </Link>
              
              {showProjectsDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-4 px-2">
                  <div className="grid gap-2">
                    <Link to="/projects/all" className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                      <div className="w-16 h-16 bg-green-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/src/assets/heroimg.jpg" alt="All Projects" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">All Projects</h3>
                        <p className="text-sm text-gray-600">Browse all available plots</p>
                      </div>
                    </Link>
                    <Link to="/projects/featured" className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                      <div className="w-16 h-16 bg-green-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/src/assets/heroimg.jpg" alt="Featured" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Featured Projects</h3>
                        <p className="text-sm text-gray-600">Premium farm plots</p>
                      </div>
                    </Link>
                    <Link to="/projects/ongoing" className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                      <div className="w-16 h-16 bg-green-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/src/assets/heroimg.jpg" alt="Ongoing" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Ongoing Projects</h3>
                        <p className="text-sm text-gray-600">Under development</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
