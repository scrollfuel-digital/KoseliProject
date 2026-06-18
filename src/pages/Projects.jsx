import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HiXMark, HiMapPin } from 'react-icons/hi2'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Green Valley Farm Plot',
      image: 'https://images.unsplash.com/photo-1500382017468-7049e00a7a82?w=600&h=400&fit=crop',
      size: '1000 sq ft',
      price: '₹5,00,000',
      location: 'Green Valley',
      features: ['Road access', 'Water supply', 'Surrounded by greenery', 'Near main highway']
    },
    {
      id: 2,
      title: 'Riverside Estate Plot',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop',
      size: '1500 sq ft',
      price: '₹8,00,000',
      location: 'Riverside Area',
      features: ['Near highway', 'Peaceful location', 'Easy connectivity', 'Clear title']
    },
    {
      id: 3,
      title: 'Sunrise Hills Premium',
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop',
      size: '2000 sq ft',
      price: '₹12,00,000',
      location: 'Sunrise Hills',
      features: ['Premium location', 'Scenic views', 'Investment opportunity', 'Gated community']
    },
    {
      id: 4,
      title: 'Golden Meadows',
      image: 'https://images.unsplash.com/photo-1500382017468-7049e00a7a82?w=600&h=400&fit=crop',
      size: '1200 sq ft',
      price: '₹6,50,000',
      location: 'Golden Meadows',
      features: ['Fertile land', 'Irrigation facility', 'Agriculture ready', 'Road access']
    },
    {
      id: 5,
      title: 'Mountain View Estate',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop',
      size: '1800 sq ft',
      price: '₹10,00,000',
      location: 'Mountain View',
      features: ['Panoramic views', 'Premium locality', 'Near schools', 'Hospital nearby']
    },
    {
      id: 6,
      title: 'Lakeside Paradise',
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop',
      size: '2500 sq ft',
      price: '₹15,00,000',
      location: 'Lakeside',
      features: ['Waterfront property', 'Luxury segment', 'High ROI', 'Resort potential']
    }
  ]

  return (
    <main>
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600">
              Explore our premium farm plot listings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <HiMapPin className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <div>
                      <p className="text-sm text-gray-500">Size</p>
                      <p className="font-semibold text-gray-900">{project.size}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-bold text-green-600 text-xl">{project.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <>
              <div
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/60 z-40"
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full z-10"
                  >
                    <HiXMark size={24} />
                  </button>

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />

                  <div className="p-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                    
                    <div className="flex items-center text-green-600 font-semibold mb-6 text-lg">
                      <HiMapPin className="mr-2" size={24} />
                      {selectedProject.location}
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-xl">
                      <div>
                        <p className="text-gray-600 text-sm mb-1">Plot Size</p>
                        <p className="text-3xl font-bold text-gray-900">{selectedProject.size}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm mb-1">Price</p>
                        <p className="text-3xl font-bold text-green-600">{selectedProject.price}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition">
                      Contact for Site Visit
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
