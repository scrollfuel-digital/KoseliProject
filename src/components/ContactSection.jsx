import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiCalendar,
  HiShieldCheck,
  HiDocumentText,
  HiPercentBadge,
} from "react-icons/hi2";

export default function ContactSection() {
  return (
    <section className="bg-[#eef6ea] py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-wider">
            Let's Grow Together
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Get in <span className="text-green-700 italic">Touch</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Interested in owning your own farmland? Our experts guide you
            through every plot, every detail — transparently.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE – CONTACT CARDS */}
          <div className="space-y-6">

            {/* Office */}
            <div className="relative flex items-center gap-6 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
              <div className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-2xl" />

              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600">
                <HiMapPin className="text-2xl" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Visit Our Office
                </h3>
                <p className="text-green-600 font-medium">
                  Greenfield Estates HQ
                </p>
                <p className="text-sm text-gray-500">
                  123 Orchard Lane, Bengaluru — 560001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="relative flex items-center gap-6 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
              <div className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-2xl" />

              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600">
                <HiPhone className="text-2xl" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Talk to an Advisor
                </h3>
                <p className="text-green-600 font-medium">
                  +91 98765 43210
                </p>
                <p className="text-sm text-gray-500">
                  Mon – Sat, 9:00 AM to 7:00 PM
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="relative flex items-center gap-6 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
              <div className="absolute left-0 top-0 h-full w-2 bg-green-600 rounded-l-2xl" />

              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600">
                <HiEnvelope className="text-2xl" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Email Us
                </h3>
                <p className="text-green-600 font-medium">
                  hello@greenfield.farm
                </p>
                <p className="text-sm text-gray-500">
                  Replies within 4 hours
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – SITE VISIT CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
              alt="Farm Land"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-green-700/70" />

            <div className="relative z-10 p-8 text-white flex flex-col h-full">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5">
                <HiCalendar className="text-xl" />
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Book a free <br /> site visit
              </h3>

              <div className="w-12 h-[2px] bg-white/60 mb-4" />

              <p className="text-green-100 text-sm leading-relaxed max-w-sm mb-6">
                Walk the land, breathe the air, meet the farmers.
                We’ll arrange transport from the city.
              </p>

              <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full w-fit hover:bg-green-50 transition mb-8">
                Schedule My Visit
              </button>

              <div className="mt-auto grid grid-cols-3 gap-4 text-xs text-green-100">
                <div className="flex items-center gap-2">
                  <HiShieldCheck />
                  RERA Registered
                </div>
                <div className="flex items-center gap-2">
                  <HiDocumentText />
                  Clear Titles
                </div>
                <div className="flex items-center gap-2">
                  <HiPercentBadge />
                  Zero Brokerage
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}