import Image from "next/image";
import React from "react";

interface ImageSectionProps {
  imageUrl: string;
  handleRightArrowClick: () => void;
  handleLeftArrowClick: () => void;
  paragraphs: string[];
  header: string[];
  animationDirection: string;
}
const ImageSection: React.FC<ImageSectionProps> = ({
  imageUrl,
  handleRightArrowClick,
  handleLeftArrowClick,
  paragraphs,
  header,
  animationDirection
}) => (
  <section className="bg-white mt-[5rem] dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
      <div className="lg:-mx-6 lg:flex lg:items-center">
        <Image
          width={300}
          height={300}
          className={`object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] ${animationDirection}`}
          src={imageUrl}
          alt="Animated GIF" unoptimized
        />

        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
          <p className="text-5xl font-semibold text-blue-500">“</p>

          {header.map((header, index) => (
            <h1
              key={index}
              className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96"
            >
              {header}
            </h1>
          ))}

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 line-clamp-5"
            >
              {paragraph}
            </p>
          ))}

          <h3 className="mt-6 text-lg font-medium text-blue-500">
            Black and White Shop
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Marketing Manager at Stech
          </p>

          <div className="flex items-center justify-between mt-12 lg:justify-start">
            <button
              title="left arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              onClick={handleLeftArrowClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              title="right arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              onClick={handleRightArrowClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ImageSection;
