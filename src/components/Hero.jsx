import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroimg from "../assets/heroimg.jpg";
import heroimg1 from "../assets/heroimg1.jpg";
import heroimg2 from "../assets/heroimg2.jpg";
import heroimg3 from "../assets/heroimg3.jpg";

const images = [heroimg, heroimg1, heroimg2, heroimg3];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

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
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Background Slider */}
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
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
        p-2 md:p-3 rounded-full hover:bg-white/10 transition-all"
      >
        <ChevronLeft
          className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
          strokeWidth={1.5}
        />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
        p-2 md:p-3 rounded-full hover:bg-white/10 transition-all"
      >
        <ChevronRight
          className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
          strokeWidth={1.5}
        />
      </button>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="text-center max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Find Your Dream Home
          </h1>

          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Discover luxury residences, premium locations, and exceptional
            living experiences designed for modern families.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition duration-300">
              Explore Properties
            </button>

            <button className="px-6 md:px-8 py-3 md:py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`rounded-full transition-all duration-300 ${
              currentImage === index
                ? "bg-white w-6 md:w-8 h-2.5 md:h-3"
                : "bg-white/50 w-2.5 md:w-3 h-2.5 md:h-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;