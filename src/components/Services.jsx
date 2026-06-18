import { HiHome, HiDocumentText, HiLightBulb, HiMapPin } from 'react-icons/hi2'

export default function Services() {
  const services = [
    {
      icon: HiHome,
      title: 'Farm Plot Buying & Selling',
      description: 'We help you find the best farm plots according to your budget and requirements.'
    },
    {
      icon: HiDocumentText,
      title: 'Legal Documentation Support',
      description: 'Complete assistance with title verification, agreement process, and registration.'
    },
    {
      icon: HiLightBulb,
      title: 'Investment Consultation',
      description: 'We guide you to invest in locations with high growth and return potential.'
    },
    {
      icon: HiMapPin,
      title: 'Site Visit Assistance',
      description: 'We arrange convenient site visits so you can explore the property before making a decision.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive real estate solutions for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
