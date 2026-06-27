import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiCalendar,
  HiShieldCheck,
  HiDocumentText,
  HiPercentBadge,
} from "react-icons/hi2";

import { Link } from "react-router-dom";

export default function ContactSection() {
  const contactCards = [
    {
      title: "Visit Our Office",
      subtitle: "Hingna, Nagpur",
      description: "123 Orchard Lane, Hingna, Nagpur — 440010",
      icon: HiMapPin,
      href: "https://www.google.com/maps/search/?api=1&query=123+Orchard+Lane,+Hingna,+Nagpur,+440010",
      target: "_blank",
    },
    {
      title: "Talk to an Advisor",
      subtitle: "+91 7498147921",
      description: "Mon – Sat, 9:00 AM to 7:00 PM",
      icon: HiPhone,
      href: "tel:+917498147921",
      target: "_self",
    },
    {
      title: "Email Us",
      subtitle: "sondhiyakrushna@gmail.com",
      description: "Replies within 4 hours",
      icon: HiEnvelope,
      href:
        "mailto:sondhiyakrushna@gmail.com?subject=Farmland%20Inquiry&body=Hello,%20I%20am%20interested%20in%20your%20farmland%20projects.%20Please%20share%20more%20information.",
      target: "_self",
    },
  ];

  return (
    <section className="bg-[#eef6ea] py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-wider">
            Let's Grow Together
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Get in <span className="text-green-700">Touch</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Interested in owning your own farmland? Our experts guide you
            through every plot, every detail — transparently.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <a
                  key={index}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-6 bg-white rounded-2xl shadow-md p-6 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Left Green Bar */}
                  <div className="absolute left-0 top-0 h-full w-2 bg-green-600 group-hover:w-3 transition-all duration-300" />

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110">
                    <Icon className="text-2xl" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {card.title}
                    </h3>

                    <p className="text-green-600 font-semibold group-hover:underline">
                      {card.subtitle}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      {card.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[550px] pt-10">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
              alt="Farm Land"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-green-700/70" />

            <div className="relative z-10 flex flex-col h-full p-8 text-white">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                <HiCalendar className="text-2xl" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Book a Free <br /> Site Visit
              </h3>

              <div className="w-16 h-1 bg-white/70 rounded-full mb-5" />

              <p className="text-green-100 leading-relaxed mb-8 max-w-sm">
                Walk the land, breathe the fresh air, and meet our farming
                experts. We'll arrange everything for a hassle-free visit.
              </p>
              <Link
                to="/contact"
                className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full w-fit transition-all duration-300 hover:bg-green-50 hover:scale-105 inline-block"
              >
                Schedule My Visit
              </Link>

              <div className="mt-auto pt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
                <div className="flex items-center gap-2">
                  <HiShieldCheck className="text-lg" />
                  <span>RERA Registered</span>
                </div>

                <div className="flex items-center gap-2">
                  <HiDocumentText className="text-lg" />
                  <span>Clear Titles</span>
                </div>

                <div className="flex items-center gap-2">
                  <HiPercentBadge className="text-lg" />
                  <span>Zero Brokerage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}