import aboutus from "../assets/aboutus.png";
import WhyChooseSlider from "../components/WhyChooseSlider";

import { EyeDashed, UserRoundKey } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="pt-24 bg-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="text-black font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
              About Our <span className="text-green-700">Company</span>
            </div>

            <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mt-4">
              Find genuine farm plots with complete legal clarity. We make
              property buying simple, secure, and profitable.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src={aboutus}
                alt="About Us"
                className="rounded-2xl shadow-lg w-full h-[460px] object-cover"
              />
            </div>

            <div>
              <div className="text-green-500 font-semibold text-3xl sm:text-4xl md:text-5xl mb-8">
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
                      <EyeDashed className="text-green-600" />
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
                      <UserRoundKey className="text-green-600" />
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

        {/* Why Choose Us */}
        <div className="bg-[#eef6ea] py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                Why Choose Koseli Projects?
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Trusted farm plot investments with verified documentation,
                premium locations and long-term growth potential.
              </p>
            </div>

            <WhyChooseSlider />
          </div>
        </div>
      </section>
    </>
  );
}
