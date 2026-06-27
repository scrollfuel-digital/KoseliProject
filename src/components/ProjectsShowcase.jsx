import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import SiteVisitForm from "./ProjectForm"; // ✅ make sure filename is ProjectForm.jsx

export default function FarmPlotsWithFilters() {
  const plots = [
    {
      title: "Green Valley Farm Plot",
      image:
        "https://reparv-assets.s3.ap-south-1.amazonaws.com/uploads/1756815240851.webp",
      location: "Green Valley",
      size: "1000 sq ft",
      price: "₹5,00,000",
      features: ["Near highway", "Easy connectivity", "Clear title"],
    },
    {
      title: "Riverside Estate Plot",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=900&h=700&fit=crop",
      location: "Riverside Area",
      size: "1500 sq ft",
      price: "₹8,00,000",
      features: ["Peaceful location", "River view", "Clear title"],
    },
    {
      title: "Sunrise Hills Premium",
      image:
        "https://therealtytoday.com/media/nagpur-_real_estate-_The_Realty_Today_RkBzuFs_3mTRR4u_pyGWjEU.jpg",
      location: "Sunrise Hills",
      size: "2000 sq ft",
      price: "₹12,00,000",
      features: ["Hill view", "Gated layout", "Clear title"],
    },
  ];

  const [selectedPlot, setSelectedPlot] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* PLOTS */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {plots.map((plot, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={plot.image}
                alt={plot.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{plot.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  📍 {plot.location}
                </p>

                <div className="flex justify-between mt-4 text-sm">
                  <span>
                    <strong>Size:</strong> {plot.size}
                  </span>
                  <span className="text-green-600 font-bold">
                    {plot.price}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSelectedPlot(plot);
                    setShowForm(true);
                  }}
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Contact for Site Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL FORM */}
      {showForm && selectedPlot && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-6xl relative overflow-y-auto max-h-[90vh]">
            {/* Close */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <HiXMark size={28} />
            </button>

            {/* FORM WITH SELECTED PLOT */}
            <SiteVisitForm selectedProject={selectedPlot} />
          </div>
        </div>
      )}
    </>
  );
}