import { useState } from 'react'
import { HiXMark, HiMapPin } from 'react-icons/hi2'

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Plot in Green Valley',
      image: 'https://images.unsplash.com/photo-1500382017468-7049e00a7a82?w=600&h=400&fit=crop',
      size: '1000 sq ft',
      price: '₹5,00,000',
      location: 'Green Valley',
      features: ['Road access', 'Water supply', 'Surrounded by greenery']
    },
    {
      id: 2,
      title: 'Plot in Riverside',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop',
      size: '1500 sq ft',
      price: '₹8,00,000',
      location: 'Riverside Area',
      features: ['Near highway', 'Peaceful location', 'Easy connectivity']
    },
    {
      id: 3,
      title: 'Plot in Sunrise Hills',
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop',
      size: '2000 sq ft',
      price: '₹12,00,000',
      location: 'Sunrise Hills',
      features: ['Premium location', 'Scenic views', 'Investment opportunity']
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Available Farm Plots
          </h2>
          <p className="text-lg text-gray-600">
            Explore our premium property listings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <HiMapPin className="mr-1" />
                  <span>{project.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-semibold text-gray-900">{project.size}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-bold text-green-600">{project.price}</p>
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
              className="fixed inset-0 bg-black/50 z-40"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                >
                  <HiXMark size={24} />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                  
                  <div className="flex items-center text-green-600 font-semibold mb-6">
                    <HiMapPin className="mr-2" />
                    {selectedProject.location}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-600 text-sm">Plot Size</p>
                      <p className="text-2xl font-bold text-gray-900">{selectedProject.size}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Price</p>
                      <p className="text-2xl font-bold text-green-600">{selectedProject.price}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
