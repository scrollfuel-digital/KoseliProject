import { useState } from "react";
import { HiMapPin } from "react-icons/hi2";
export default function FarmPlotsWithFilters() {

  const plots = [{
    title: "Green Valley Plot",
    image: "https://reparv-assets.s3.ap-south-1.amazonaws.com/uploads/1756815240851.webp",
    location: "Green Valley", size: 1000, price: 500000,
  }, {
    title: "Riverside Plot",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=900&h=700&fit=crop",
    location: "Riverside Area", size: 1500, price: 800000,
  }, {
    title: "Sunrise Hills Plot",
    image: "https://therealtytoday.com/media/nagpur-_real_estate-_The_Realty_Today_RkBzuFs_3mTRR4u_pyGWjEU.jpg",
    location: "Sunrise Hills", size: 2000, price: 1200000,
  },];

  /* ---------------- FILTER STATE ---------------- */
  const [location, setLocation] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1500000);
  const [minSize, setMinSize] = useState(0);

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredPlots = plots.filter((plot) => {
    return (
      (location === "All" || plot.location === location) &&
      plot.price <= maxPrice &&
      plot.size >= minSize
    );
  });

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>

            <div className="text-2xl">Available Farm Plots</div>
          </span>
          <p className="text-lg text-gray-600 mt-3">
            Filter & explore premium land listings
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* FILTERS */}
          <div className="bg-[#f3f4f6] rounded-3xl shadow-lg p-6 h-fit lg:sticky top-24">
            <h3 className="text-xl font-bold mb-6">Filters</h3>

            {/* Mobile: Location + Size in one row */}
            <div className="flex gap-4 mb-6 lg:flex-col">
              {/* Location */}
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                >
                  <option>All</option>
                  <option>Green Valley</option>
                  <option>Riverside Area</option>
                  <option>Sunrise Hills</option>
                </select>
              </div>

              {/* Minimum Size */}
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2">
                  Min Size
                </label>
                <select
                  value={minSize}
                  onChange={(e) => setMinSize(Number(e.target.value))}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                >
                  <option value={0}>Any</option>
                  <option value={1000}>1000+</option>
                  <option value={1500}>1500+</option>
                  <option value={2000}>2000+</option>
                </select>
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Max Price (₹)
              </label>
              <input
                type="range"
                min="500000"
                max="1500000"
                step="100000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm mt-2 text-gray-600">
                Up to ₹{maxPrice.toLocaleString()}
              </p>
            </div>
          </div>

          {/* CARDS GRID */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pb-20 ">
            {filteredPlots.map((plot, index) => (
              <div
                key={index}
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-lg"
              >
                {/* Image */}
                <img
                  src={plot.image}
                  alt={plot.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Price Badge */}
                <div className="absolute top-5 right-5 z-20 bg-emerald-600 text-white px-4 py-1.5 rounded-full font-bold text-sm">
                  ₹{plot.price.toLocaleString()}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2">{plot.title}</h3>

                  <p className="text-sm mb-4">
                    Plot Size:{" "}
                    <span className="font-semibold">{plot.size} sq ft</span>
                  </p>

                  <button className="bg-white text-gray-900 px-5 py-3 rounded-lg font-bold hover:bg-emerald-600 hover:text-white transition duration-300 mb-8">
                    View Details
                  </button>
                </div>
              </div>
            ))}

            {filteredPlots.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No plots match the selected filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}