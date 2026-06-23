import { FiMapPin, FiPhone, FiMail, FiCalendar } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="bg-[#eef6ea] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-11">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Side */}
          <div className="space-y-5">

            {/* Office Card */}
            <div className="bg-white rounded-2xl p-5 border-0 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-700 p-3 rounded-full">
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

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-5 border-0 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-700 p-3 rounded-full">
                  <FiPhone />
                </div>

                <div>
                  <h3 className="font-semibold">Talk to an Advisor</h3>
                  <p className="text-gray-700 text-sm">+91 98765 43210</p>
                  <p className="text-gray-500 text-xs">
                    Mon – Sat, 9:00 AM to 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-5 border-0 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out">
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

          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center">
            <div className="bg-green-500 text-white rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <FiCalendar size={28} />

              <h3 className="text-3xl font-bold mt-4">
                Book a free site visit
              </h3>

              <p className="mt-4 text-green-100 text-base leading-relaxed">
                Walk the land, breathe the air, meet the farmers. We'll
                arrange transport from the city.
              </p>

              <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Schedule my visit
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              ✓ RERA registered • Clear titles • Zero brokerage
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}