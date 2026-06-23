import { HiCheckCircle } from "react-icons/hi2";
import { FaLeaf, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";

export default function AboutUs() {
  // 🔹 CARDS ARRAY
  const cards = [
    {
      title: "Transparency",
      desc: "Honest pricing, clear documentation, and zero hidden charges.",
      icon: FaLeaf,
      iconColor: "text-emerald-600",
      glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.55)]",
    },
    {
      title: "Customer Satisfaction",
      desc: "We prioritize long-term relationships and client happiness.",
      icon: FaHandshake,
      iconColor: "text-emerald-600",
      glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.55)]",
    },
    {
      title: "Safe Investment",
      desc: "Secure farm plots with verified legal status and future growth.",
      icon: FaMapMarkedAlt,
      iconColor: "text-emerald-600",
      glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.55)]",
    },
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
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

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold">
            We are a leading farm plot dealer in{" "}
            <span className="text-emerald-600">Nagpur</span>, helping clients
            find genuine and high-value land investment opportunities. With
            strong market knowledge and years of experience, our goal is to make
            property buying simple, secure, and profitable.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 w-full
                 overflow-hidden shadow-sm
                 transform transition-all duration-1000 ease-out
                 hover:-translate-y-3 hover:shadow-xl"
              >
                {/* LEFT → RIGHT GLOW */}
                <span
                  className="pointer-events-none absolute inset-y-0 left-0 w-0
                   bg-emerald-400/30 blur-xl
                   transition-all duration-700 ease-out
                   group-hover:w-full"
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <Icon className={`${card.iconColor} text-3xl mb-4`} />

                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {card.title}
                  </h4>

                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
