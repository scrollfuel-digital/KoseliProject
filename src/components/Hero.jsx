import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroimg from "../assets/heroimg.jpg";
import heroimg1 from "../assets/heroimg1.jpg";
import heroimg2 from "../assets/heroimg2.jpg";
import heroimg3 from "../assets/heroimg3.jpg";

const images = [heroimg, heroimg1, heroimg2, heroimg3];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* SLIDER TRACK */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
          >
            <img
              src={image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute z-30 top-1/2 left-4 -translate-y-1/2
        w-10 h-10 flex items-center justify-center
        rounded-full bg-black/40 border border-white/30
        hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="text-white w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute z-30 top-1/2 right-4 -translate-y-1/2
        w-10 h-10 flex items-center justify-center
        rounded-full bg-black/40 border border-white/30
        hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="text-white w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Find Your Dream Home
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover luxury residences, premium locations, and exceptional
            living experiences designed for modern families.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
              Explore Properties
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-black transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`rounded-full transition-all duration-300 ${
              currentImage === index
                ? "bg-white w-7 h-2.5"
                : "bg-white/50 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}