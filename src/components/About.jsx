import { HiCheckCircle } from "react-icons/hi2";
import { FaLeaf, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 text-white overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-sm mb-4">
            Who We Are
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Trusted Farm Plot Dealers 
            <span className="text-emerald-400">in Nagpur</span>
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
           We are a leading farm plot dealer in [City], helping clients find genuine and high-value land investment opportunities.
With strong market knowledge and years of experience, we focus on:
          </p>

          {/* Bullet Points */}
          <div className="space-y-4">
            {[
              "100% Legal Documentation",
              "Prime Location Farm Plots",
              "Transparent Pricing & Process",
              "Long-Term Investment Security",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <HiCheckCircle className="text-emerald-400 text-xl" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition">
            <FaLeaf className="text-emerald-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Plots</h3>
            <p className="text-gray-300 text-sm">
              Green, pollution-free farm lands ideal for farming, resorts, and weekend homes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition">
            <FaHandshake className="text-blue-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Deals</h3>
            <p className="text-gray-300 text-sm">
              Clear titles, honest pricing, and complete customer satisfaction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition sm:col-span-2">
            <FaMapMarkedAlt className="text-purple-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
            <p className="text-gray-300 text-sm">
              Strategically located farm plots with strong future growth potential.
            </p>
          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="relative max-w-6xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "10+", label: "Years Experience" },
          { value: "500+", label: "Happy Clients" },
          { value: "1200+", label: "Plots Sold" },
          { value: "100%", label: "Legal Verified" },
        ].map((stat, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl py-6">
            <h4 className="text-3xl font-bold text-emerald-400">{stat.value}</h4>
            <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}