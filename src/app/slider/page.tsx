import { useState } from "react";
import products from "../../utils/data.json";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = products.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <div className="relative w-full max-w-md mx-auto z-50">
      <div className="slideshow-container relative flex overflow-hidden">
        {products.map((product, index) => (
          <div
            key={index}
            className={`slide absolute top-0 w-full ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            <img
              src={product.image}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-gray-800 bg-opacity-50 text-white flex justify-center items-center rounded-full transition duration-300 hover:bg-opacity-75"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 bg-gray-800 bg-opacity-50 text-white flex justify-center items-center rounded-full transition duration-300 hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
