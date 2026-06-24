import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function ContactUs() {
  return (
    <main>
      {/* CONTACT SECTION */}
      <section className="bg-gradient-to-b from-[#e9f7f0] to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14 pt-10">
            <p className="text-green-700 font-semibold text-sm uppercase tracking-wider">
              Let’s Grow Together
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Get In <span className="text-green-700 italic">Touch</span>
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Interested in owning your own farmland? Our team is here to walk
              you through every plot, every detail.
            </p>
          </div>

          {/* MAIN CARD */}

          <div className="grid md:grid-cols-[2fr_3fr] bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* LEFT – CONTACT INFO (SMALLER CARD) */}
            <div className="bg-green-700 text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>

                <p className="text-green-100 text-sm mb-8">
                  Clear titles • RERA registered • Zero brokerage
                </p>

                <div className="space-y-6">

                  {/* Address */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Visit Our Office</p>
                      <p className="text-sm text-green-100">
                        Greenfield Estates HQ
                      </p>
                      <p className="text-xs text-green-200">
                        123 Orchard Lane, Bengaluru — 560001
                      </p>
                    </div>
                  </div>

                  {/* Phone */}

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Talk to an Advisor</p>
                      <p className="text-sm text-green-100">+91 98765 43210</p>
                      <p className="text-xs text-green-200">
                        Mon – Sat, 9:00 AM to 7:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Email */}

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-sm text-green-100">
                        hello@greenfield.farm
                      </p>
                      <p className="text-xs text-green-200">
                        Replies within 4 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA */}

              <div className="mt-10">
                <p className="text-sm text-green-200 mb-4">Connect with us</p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white text-white hover:text-green-700 p-3 rounded-full transition"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white text-white hover:text-green-700 p-3 rounded-full transition"
                  >
                    <FaWhatsapp size={18} />
                  </a>

                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white text-white hover:text-green-700 p-3 rounded-full transition"
                  >
                    <FaFacebookF size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT – FORM (WIDER) */}
            
            <div className="p-12">
              <h3 className="text-3xl font-bold mb-2">Send us a message</h3>

              <p className="text-gray-500 mb-8">
                We'll get back within a few hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-gray-300 py-3 outline-none focus:border-green-700"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border-b border-gray-300 py-3 outline-none focus:border-green-700"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-gray-300 py-3 outline-none focus:border-green-700"
                />

                <select className="w-full border-b border-gray-300 py-3 outline-none focus:border-green-700">
                  <option>Select plot size </option>
                  <option>1000 Sq Ft</option>
                  <option>2000 Sq Ft</option>
                  <option>5000 Sq Ft</option>
                  <option>1 Acre</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Tell us about your dream farmland..."
                  className="w-full border-b border-gray-300 py-3 outline-none resize-none focus:border-green-700"
                />

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full flex items-center gap-2 transition"
                >
                  Send Message <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
