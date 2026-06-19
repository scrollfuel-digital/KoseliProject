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
      iconColor: "text-blue-600",
      glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.55)]",
    },
    {
      title: "Safe Investment",
      desc: "Secure farm plots with verified legal status and future growth.",
      icon: FaMapMarkedAlt,
      iconColor: "text-purple-600",
      glow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.55)]",
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
            <span className="text-emerald-600">Nagpur</span>, helping clients find
            genuine and high-value land investment opportunities. With strong market
            knowledge and years of experience, our goal is to make property buying
            simple, secure, and profitable.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
             <div
  key={index}
  className={`group relative bg-white rounded-2xl p-6 w-80
              shadow-sm transition-all duration-300 ease-in-out
              hover:-translate-y-3 hover:scale-105 ${card.glow}`}
>
              
                <Icon className={`${card.iconColor} text-3xl mb-4`} />

                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {card.title}
                </h4>

                <p className="text-gray-600 text-sm">
                  {card.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}