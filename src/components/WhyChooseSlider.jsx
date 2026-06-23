import { useState, useEffect, useRef, useCallback } from "react";
import {
  HiOutlineMapPin,
  HiOutlineShieldCheck,
  HiOutlineArrowTrendingUp,
  HiCheckCircle,
  HiOutlineUsers,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const cards = [
  {
    icon: HiOutlineMapPin,
    title: "Prime Locations",
    description: "High-growth farm plots with excellent connectivity.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Verified & Legal",
    description: "Clear titles and complete legal documentation.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "High Returns",
    description: "Strong appreciation and long-term value.",
  },
  {
    icon: HiCheckCircle,
    title: "Trusted Investment",
    description: "Secure and transparent property transactions.",
  },
  {
    icon: HiOutlineUsers,
    title: "Customer First",
    description: "Dedicated support throughout your journey.",
  },
  {
    icon: HiOutlineBuildingOffice2,
    title: "Premium Projects",
    description: "Carefully selected investment opportunities.",
  },
];

const AUTOPLAY_INTERVAL_MS = 3500;

export default function WhyChooseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Show 1 card on mobile, 2 on desktop
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 3 : 1;
    }
    return 1;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const totalSlides = Math.ceil(cards.length / cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setActiveIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      setActiveIndex(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const goNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Auto Play
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider */}
      <div className="overflow-hidden rounded-3xl">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full flex-shrink-0 flex gap-4"
            >
              {cards
                .slice(
                  slideIndex * cardsPerView,
                  slideIndex * cardsPerView + cardsPerView
                )
                .map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="flex-1 px-2"
                    >
                      <div className="h-full rounded-3xl bg-white p-8 shadow-lg text-center border border-green-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                          <Icon className="text-green-700 text-2xl" />
                        </div>

                        <h3 className="font-bold text-xl mb-2 text-gray-900">
                          {card.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goPrev}
        aria-label="Previous card"
        className="hidden sm:flex absolute left-[-1.25rem] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        aria-label="Next card"
        className="hidden sm:flex absolute right-[-1.25rem] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-green-600"
                : "w-3 bg-green-300 hover:bg-green-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}