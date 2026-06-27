import { useState } from "react";
import { HiXMark, HiMapPin } from "react-icons/hi2";
import ProjectForm from '../components/ProjectForm'
import { useNavigate } from "react-router-dom";



export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "Green Valley Farm Plot",
      description: "A serene plot surrounded by lush greenery, perfect for agriculture and residential purposes.",
      image:
        "https://i.pinimg.com/736x/1e/f4/63/1ef4630a9380d8420e389f157f039388.jpg",
      size: "1000 sq ft",
      price: "₹5,00,000",
      location: "Green Valley",
      features: [
        "Road access",
        "Water supply",
        "Surrounded by greenery",
        "Near main highway",
      ],
    },
    {
      id: 2,
      title: "Riverside Estate Plot",
      description: "A serene plot surrounded by lush greenery, perfect for agriculture and residential purposes.",
      image:
        "https://i.pinimg.com/736x/31/f1/9a/31f19a4b49e76b5d036826e3afef22ed.jpg",
      size: "1500 sq ft",
      price: "₹8,00,000",
      location: "Riverside Area",
      features: [
        "Near highway",
        "Peaceful location",
        "Easy connectivity",
        "Clear title",
      ],
    },
    {
      id: 3,
      title: "Sunrise Hills Premium",
      description: "A serene plot surrounded by lush greenery, perfect for agriculture and residential purposes.",
      image:
        "https://i.pinimg.com/736x/30/f0/83/30f083a9c82af000b5232f6e4bfbb04f.jpg",
      size: "2000 sq ft",
      price: "₹12,00,000",
      location: "Sunrise Hills",
      features: [
        "Premium location",
        "Scenic views",
        "Investment opportunity",
        "Gated community",
      ],
    },
    {
      id: 4,
      title: "Golden Meadows",
      description: "A serene plot surrounded by lush greenery, perfect for agriculture and residential purposes.",
      image:
        "https://i.pinimg.com/736x/d3/ff/a0/d3ffa00f3a67087e395ae3953b61aa1c.jpg",
      size: "1200 sq ft",
      price: "₹6,50,000",
      location: "Golden Meadows",
      features: [
        "Fertile land",
        "Irrigation facility",
        "Agriculture ready",
        "Road access",
      ],
    },
    {
      id: 5,
      title: "Mountain View Estate",
      description: "A serene plot surrounded by lush greenery, perfect for agriculture and residential purposes.",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
      size: "1800 sq ft",
      price: "₹10,00,000",
      location: "Mountain View",
      features: [
        "Panoramic views",
        "Premium locality",
        "Near schools",
        "Hospital nearby",
      ],
    },
    {
      id: 6,
      title: "Lakeside Paradise",
      description: "A serene plot surrounded by lush greenery, perfect for agriculture and residential purposes.",
      image:
        "https://i.pinimg.com/736x/a5/6c/08/a56c08bfdd29c3b8760cbe6e174c3f68.jpg",
      size: "2500 sq ft",
      price: "₹15,00,000",
      location: "Lakeside",
      features: [
        "Waterfront property",
        "Luxury segment",
        "High ROI",
        "Resort potential",
      ],
    },
  ];

  return (
    <>
      <div className="pt-24 pb-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mt-4">
              Our <span className="text-green-700">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 pt-4">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <HiMapPin className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <div>
                      <p className="text-sm text-gray-500">Size</p>
                      <p className="font-semibold text-gray-900">
                        {project.size}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-bold text-green-600 text-xl">
                        {project.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <>
              {/* Backdrop */}
              <div
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
                <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl">

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 p-1.5 rounded-full z-20 shadow-md transition-all"
                  >
                    <HiXMark size={20} />
                  </button>

                  {/* Top: Image with gradient overlay */}
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-48 sm:h-64 object-cover rounded-t-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-t-3xl" />
                    <div className="absolute bottom-4 left-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-green-600 text-white px-3 py-1 rounded-full">
                        <HiMapPin size={12} /> {selectedProject.location}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Left info + Right form */}
                  <div className="p-4 sm:p-6">
                    <ProjectForm project={selectedProject} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
