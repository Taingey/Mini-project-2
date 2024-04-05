"use client";
import Image from "next/image";
import { useState } from "react";

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const images = [
    {
      url: "/banner_1.png",
      paragraph: <div className="text-slate-900">jasjjsjs</div>
    },
    {
      url: "/banner_2.png",
      paragraph: "Paragraph for image 1"
    },
    {
      url: "/banner_3.png",
      paragraph: "Paragraph for image 1"
    }
  ];

  return (
    <div className="slide-container">
      <div className="image">
        <Image src={images[slideIndex].url} alt={`Slide ${slideIndex + 1}`} width={200} height={200}/>
        {images.paragraph}
      </div>
      <div className="buttons">
        <button onClick={prevSlide} className="text-slate-900">&#60;</button>
        <button onClick={nextSlide} className="text-slate-900">&#62;</button>
      </div>
      <style jsx>{`
        .slide-container {
          position: relative;
          width: 100%;
          height: auto;
          overflow: hidden;
        }
        .image {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: auto;
        }
        .image img {
          max-width: 100%;
          height: auto;
        }
        .buttons {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: translateY(-50%);
        }
        .buttons button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 5px 10px;
          color: #fff;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Slide;
