import { HiCheckCircle } from 'react-icons/hi2'

export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted Real Estate Farm Plot Dealer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading farm plot dealer in [City], helping clients find genuine and 
            high-value land investment opportunities. With strong market knowledge and years 
            of experience, we focus on:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <HiCheckCircle className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
            <p className="text-gray-600">Honest and clear communication at every step</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <HiCheckCircle className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">Your happiness is our priority</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <HiCheckCircle className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Safe Investment</h3>
            <p className="text-gray-600">Secure and verified property deals</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-semibold">
            Our goal is to make property buying simple, secure, and profitable.
          </p>
        </div>
      </div>
    </section>
  )
}
