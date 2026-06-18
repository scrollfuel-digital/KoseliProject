import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroimg from "../assets/heroimg.jpg";
import heroimg1 from "../assets/heroimg1.jpg";
import heroimg2 from "../assets/heroimg2.jpg";
import heroimg3 from "../assets/heroimg3.jpg";

const images = [heroimg, heroimg1, heroimg2, heroimg3];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Sliding Strip */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30
                   p-3 rounded-full
                   hover:bg-white/10
                   transition-all duration-300"
      >
        <ChevronLeft size={60} strokeWidth={1.5} className="text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30
                   p-3 rounded-full
                   hover:bg-white/10
                   transition-all duration-300"
      >
        <ChevronRight size={60} strokeWidth={1.5} className="text-white" />
      </button>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Find Your Dream Home
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Discover luxury residences, premium locations, and exceptional
            living experiences designed for modern families.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-block">
              Explore Properties
            </button>

            <button className="px-8 py-4 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentImage === index ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
