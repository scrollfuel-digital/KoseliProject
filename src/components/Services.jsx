import { h2 } from "framer-motion/client";
import {
  HiHome,
  HiDocumentText,
  HiLightBulb,
  HiMapPin,
} from "react-icons/hi2";

export default function Services() {
  // 🔹 SERVICES ARRAY
  const services = [
    {
      icon: HiHome,
      title: "Farm Plot Buying & Selling",
      description:
        "We help you find the best farm plots according to your budget and requirements.",
      gradient: "from-emerald-500 to-emerald-400",
    },
    {
      icon: HiDocumentText,
      title: "Legal Documentation Support",
      points: ["Title verification", "Agreement process", "Registration"],
      gradient: "from-emerald-500 to-emerald-400",
    },
    {
      icon: HiLightBulb,
      title: "Investment Consultation",
      description:
        "We guide you to invest in locations with high growth and return potential.",
      gradient: "from-emerald-500 to-emerald-400",
    },
    {
      icon: HiMapPin,
      title: "Site Visit Assistance",
      description:
        "We arrange convenient site visits so you can explore the property before making a decision.",
      gradient: "from-emerald-500 to-emerald-400",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
       <div className="text-center mb-14">
  <h3 className="font-heading text-2xl md:text-3xl font-extrabold tracking-wide text-gray-900">
    SERVICES
  </h3>

          <p className="text-lg text-gray-600">
            Comprehensive real estate solutions for your needs
          </p>
        </div>

        {/* SERVICES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden
                           shadow-md transition-all duration-500 ease-out
                           hover:-translate-y-4 hover:shadow-2xl"
              >
                {/* TOP SECTION */}
                <div className="p-6 text-center">
                  <Icon className="mx-auto mb-3 text-3xl text-emerald-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* WAVE + GRADIENT */}
                <div
                  className={`relative h-44 bg-gradient-to-b ${service.gradient}`}
                >
                  {/* WAVE */}
                  <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="white"
                      d="M0,40 C240,80 480,0 720,20 960,40 1200,80 1440,30 L1440,0 L0,0 Z"
                    />
                  </svg>

                  {/* CONTENT */}
                  <div className="relative z-10 px-6 pt-10 text-white text-sm md:text-base lg:text-lg">
                    {service.description ? (
                      <p className="opacity-90">
                        {service.description}
                      </p>
                    ) : (
                      <ul className="space-y-1 list-disc pl-4 opacity-90">
                        {service.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}