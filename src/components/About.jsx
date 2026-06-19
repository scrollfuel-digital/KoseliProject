import { HiCheckCircle } from "react-icons/hi2";
import { FaLeaf, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTER HEADING */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            ABOUT US
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            Trusted Real Estate <br />
            <span className="text-emerald-600">Farm Plot Dealer</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a leading farm plot dealer in <span className="font-medium text-emerald-600">Nagpur</span>,
            helping clients find genuine and high-value land investment opportunities.
            With strong market knowledge and years of experience, our goal is to make
            property buying simple, secure, and profitable.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-1 -mt-30 pl-60">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              What We Focus On
            </h3>

            <div className="space-y-4">
              {[
                "Complete Transparency in Every Deal",
                "Customer Satisfaction & Trust",
                "Safe & Secure Land Investment",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <HiCheckCircle className="text-emerald-600 text-xl" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <FaLeaf className="text-emerald-600 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Transparency
              </h4>
              <p className="text-gray-600 text-sm">
                Honest pricing, clear documentation, and zero hidden charges.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <FaHandshake className="text-blue-600 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Customer Satisfaction
              </h4>
              <p className="text-gray-600 text-sm">
                We prioritize long-term relationships and client happiness.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition sm:col-span-2">
              <FaMapMarkedAlt className="text-purple-600 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Safe Investment
              </h4>
              <p className="text-gray-600 text-sm">
                Secure farm plots with verified legal status and future growth.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}