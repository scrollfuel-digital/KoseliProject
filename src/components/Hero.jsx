import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Hero() {
  const images = [
    '/src/assets/hero1.jpg',
    '/src/assets/hero2.jpg',
    '/src/assets/hero3.jpg',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen mt-16 overflow-hidden">
      <img
        src={images[currentImage]}
        alt="Farm Land"
        className="w-full h-full object-cover transition-all duration-1000"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Dream Farm Plot
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            Trusted Real Estate Farm Plot Dealer
          </p>

          <Link
            to="/projects"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-block"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </div>
  )
}