import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiCalendar,
  FiSend,
} from "react-icons/fi";

export default function ContactUs() {
  return (
    <>
          <section className="bg-[#eef6ea] py-20 px-4">
            <div className="max-w-6xl mx-auto">
      
              {/* Heading */}
              <div className="text-center mb-14">
                <p className="text-green-700 font-semibold text-sm uppercase tracking-wider">
                  Let's Grow Together
                </p>
      
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
                  Get in <span className="text-green-700 italic">Touch</span>
                </h2>
      
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  Interested in owning your own farmland? Our team is here to walk
                  you through every plot, every detail.
                </p>
              </div>
      
              {/* Main Content */}
              <div className="grid md:grid-cols-2 gap-8">
      
                {/* Left Side */}
                <div className="space-y-5">
      
                  {/* Office */}
                  <div className="bg-white rounded-2xl p-5 shadow border">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-700 text-white p-3 rounded-full">
                        <FiMapPin />
                      </div>
      
                      <div>
                        <h3 className="font-semibold">Visit Our Office</h3>
                        <p className="text-gray-700 text-sm">
                          Greenfield Estates HQ
                        </p>
                        <p className="text-gray-500 text-xs">
                          123 Orchard Lane, Bengaluru — 560001
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Phone */}
                  <div className="bg-white rounded-2xl p-5 shadow border">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 text-green-700 p-3 rounded-full">
                        <FiPhone />
                      </div>
      
                      <div>
                        <h3 className="font-semibold">Talk to an Advisor</h3>
                        <p className="text-gray-700 text-sm">
                          +91 98765 43210
                        </p>
                        <p className="text-gray-500 text-xs">
                          Mon – Sat, 9:00 AM to 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Email */}
                  <div className="bg-white rounded-2xl p-5 shadow border">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 text-green-700 p-3 rounded-full">
                        <FiMail />
                      </div>
      
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-gray-700 text-sm">
                          hello@greenfield.farm
                        </p>
                        <p className="text-gray-500 text-xs">
                          Replies within 4 hours
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Site Visit Card */}
                  <div className="bg-green-700 text-white rounded-2xl p-6">
                    <FiCalendar size={22} />
      
                    <h3 className="text-2xl font-bold mt-4">
                      Book a free site visit
                    </h3>
      
                    <p className="mt-3 text-green-100 text-sm">
                      Walk the land, breathe the air, meet the farmers.
                      We'll arrange transport from the city.
                    </p>
      
                    <button className="mt-5 bg-white text-green-700 px-5 py-2 rounded-full font-medium hover:bg-gray-100">
                      Schedule my visit
                    </button>
                  </div>
      
                  <p className="text-xs text-gray-500">
                    ✓ RERA registered • Clear titles • Zero brokerage
                  </p>
                </div>
      
                {/* Right Side Form */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-3xl font-bold">
                    Send us a message
                  </h3>
      
                  <p className="text-gray-500 mt-2 mb-6">
                    We'll get back within a few hours.
                  </p>
      
                  <form className="space-y-5">
      
                    {/* Name & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium text-sm">
                          Full Name *
                        </label>
      
                        <input
                          type="text"
                          placeholder="Arjun Mehta"
                          className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
                        />
                      </div>
      
                      <div>
                        <label className="block mb-2 font-medium text-sm">
                          Phone Number *
                        </label>
      
                        <input
                          type="text"
                          placeholder="+91 98765 43210"
                          className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
                        />
                      </div>
                    </div>
      
                    {/* Email */}
                    <div>
                      <label className="block mb-2 font-medium text-sm">
                        Email Address *
                      </label>
      
                      <input
                        type="email"
                        placeholder="arjun@example.com"
                        className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
                      />
                    </div>
      
                    {/* Select */}
                    <div>
                      <label className="block mb-2 font-medium text-sm">
                        Plot Interest
                      </label>
      
                      <select className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600">
                        <option>Select plot size</option>
                        <option>1000 Sq Ft</option>
                        <option>2000 Sq Ft</option>
                        <option>5000 Sq Ft</option>
                        <option>1 Acre</option>
                      </select>
                    </div>
      
                    {/* Message */}
                    <div>
                      <label className="block mb-2 font-medium text-sm">
                        Message *
                      </label>
      
                      <textarea
                        rows="4"
                        placeholder="Tell us about your dream farmland — location, budget, timeline..."
                        className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:border-green-600"
                      ></textarea>
                    </div>
      
                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium"
                    >
                      Send Message
                      <FiSend />
                    </button>
      
                    <p className="text-center text-xs text-gray-500">
                      By submitting, you agree to our friendly privacy practices.
                      No spam — promise.
                    </p>
                  </form>
                </div>
      
              </div>
            </div>
          </section>
     </>
  )
}