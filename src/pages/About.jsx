import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HiCheckCircle,
  HiOutlineBuildingOffice2,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineMapPin,
  HiOutlineArrowTrendingUp,
  HiOutlineEye,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

export default function About() {
  return (
    <>
  
      <section className="pt-24 bg-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <span className="text-green-700 text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-wider">
              About Our Company
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Trusted Partner For
              <span className="text-green-700"> Farm Plot Investments</span>
            </h3>

            <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
              We specialize in premium farm plots and land investment
              opportunities. Our mission is to help families and investors
              secure valuable land assets with complete transparency and trust.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-12 ">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                alt="About"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            <div>
              <div className="text-green-700 font-semibold text-3xl sm:text-4xl md:text-5xl mb-8">
                OUR STORY
              </div>

              <p className="text-gray-600 leading-relaxed mb-10">
                With years of experience in the real estate market, we have
                successfully assisted hundreds of clients in finding genuine
                farm plots and investment properties. Our expertise ensures
                every transaction is secure, transparent, and rewarding.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Vision Card */}
                <div className="bg-[#eef6ea] p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      👁️
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      Our Vision
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    To become the most trusted destination for farm plot
                    investments, creating sustainable value and long-term growth
                    for investors and families.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="bg-[#eef6ea] p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      🎯
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    To provide secure, transparent, and profitable land
                    investment opportunities while delivering exceptional
                    customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#eef6ea] py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            {/* why choose us  */}
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                Why Choose Koseli Projects?
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Trusted farm plot investments with verified documentation,
                premium locations and long-term growth potential.
              </p>
            </div>

            {/* Desktop Honeycomb */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="flex items-center">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <div className="hexagon shadow-lg">
                    <div className="text-center p-2">
                      <HiOutlineMapPin className="text-green-700 text-4xl mx-auto mb-4 " />
                      <h3 className="font-bold text-lg mb-2">
                        Prime Locations
                      </h3>
                      <p className="text-sm text-gray-600">
                        High-growth farm plots with excellent connectivity.
                      </p>
                    </div>
                  </div>

                  <div className="hexagon shadow-lg">
                    <div className="text-center p-2">
                      <HiOutlineUsers className="text-green-700 text-4xl mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2">Customer First</h3>
                      <p className="text-sm text-gray-600">
                        Dedicated support throughout your journey.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Left */}
                <div className="-mx-10">
                  <div className="hexagon shadow-lg">
                    <div className="text-center p-2">
                      <HiOutlineBuildingOffice2 className="text-green-700 text-4xl mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2">
                        Premium Projects
                      </h3>
                      <p className="text-sm text-gray-600">
                        Carefully selected investment opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Column */}
                <div className="flex flex-col gap-6">
                  <div className="hexagon shadow-lg">
                    <div className="text-center p-2">
                      <HiOutlineShieldCheck className="text-green-700 text-4xl mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2">
                        Verified & Legal
                      </h3>
                      <p className="text-sm text-gray-600">
                        Clear titles and complete legal documentation.
                      </p>
                    </div>
                  </div>

                  <div className="hexagon shadow-lg">
                    <div className="text-center p-2">
                      <HiOutlineArrowTrendingUp className="text-green-700 text-4xl mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2">High Returns</h3>
                      <p className="text-sm text-gray-600">
                        Strong appreciation and long-term value.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Right */}
                <div className="-mx-10">
                  <div className="hexagon shadow-lg">
                    <div className="text-center ">
                      <HiCheckCircle className="text-green-700 text-4xl mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2">
                        Trusted Investment
                      </h3>
                      <p className="text-sm text-gray-600 p-2">
                        Secure and transparent property transactions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <div className="hexagon shadow-lg">
                    <div className="text-center p-2">
                      <HiOutlineShieldCheck className="text-green-700 text-4xl mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2">Safety</h3>
                      <p className="text-sm text-gray-600">
                        Verified plots with trusted ownership records.
                      </p>
                    </div>
                  </div>

                  <div className="hexagon shadow-lg">
                    <div className="text-center p-2">
                      <HiOutlineUsers className="text-green-700 text-4xl mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                      <p className="text-sm text-gray-600">
                        Experienced professionals ready to assist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Version */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
              {[
                "Prime Locations",
                "Verified & Legal",
                "High Returns",
                "Trusted Investment",
                "Customer First",
                "Expert Team",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-3xl p-8 shadow-lg text-center"
                >
                  <h3 className="font-bold text-xl mb-2">{item}</h3>
                  <p className="text-gray-600">
                    Premium farm plot investment benefits.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
