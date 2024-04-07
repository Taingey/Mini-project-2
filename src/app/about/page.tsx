"use client";

import React, { useState } from "react";
import ImageSection from "./HelpSection ";
import "./Page.css";
const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const images = [
    "/ecommerce-development-blog_1.gif",
    "/ecommerce-development-blog_2.gif",
    "/ecommerce-development-blog_3.gif",
    "/ecommerce-development-blog_4.gif"
  ];

  const paragraphs = [
    [
      "The store sells black and white products with good shipping.",
      "we prioritize seamless and efficient shipping to ensure your shopping experience is as convenient as possible. Once you've placed your order on our website, our dedicated fulfillment team springs into action, carefully preparing your items for shipment. We partner with trusted shipping carriers to swiftly transport your package to your doorstep, with tracking information provided every step of the way. Our commitment to timely delivery means you can expect your stylish black and white essentials to arrive promptly, allowing you to effortlessly elevate your wardrobe and living space. Experience the convenience of online shopping with Black and White Product Store, where timely delivery is just another way we cater to your needs."
    ],
    [
      "Explore Our Collections:",
      "Explore our meticulously curated collections and discover the beauty of simplicity. Whether you're searching for chic apparel, minimalist accessories, or stylish home decor, you'll find everything you need to express your unique sense of style at Black And White Product Store. With our carefully selected range of products, you can effortlessly create a cohesive and refined look for every aspect of your life."
    ],
    [
      "Quality Meets Style:",
      "At Black And White Product Store, quality is paramount. We source our products from trusted manufacturers who share our commitment to excellence, ensuring that every item meets our high standards of craftsmanship and design. From premium fabrics to durable materials, each product is thoughtfully selected to provide you with lasting enjoyment and satisfaction."
    ],
    [
      "Experience the Difference:",
      "At Black and White, we prioritize the security of your online shopping experience. Our website is equipped with state-of-the-art security features to safeguard your sensitive information and ensure peace of mind while making transactions. We utilize industry-standard encryption protocols to protect your personal and financial data from unauthorized access. Additionally, our secure payment gateway provides a safe and seamless checkout process, allowing you to shop with confidence. Rest assured that when you choose Black and White for your online shopping needs, your security is our top priority."
    ]
  ];

  const header = [
    ["Based on the context provided"],
    ["Secure Shopping with Black and White"],
    ["Embrace Elegance with Black And White Product Store"],
    ["Ensuring Secure Online Shopping at Black and White"]
  ];
  const handleLeftArrowClick = () => {
    setAnimationDirection("slide-right");
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setAnimationDirection("slide-left");
    setCurrentIndex((prevIndex) => Math.min(images.length - 1, prevIndex + 1));
  };

  return (
    <div className="container mx-auto p-6 overflow-hidden">
      <div className="flex mt-5">
        <div
          className="border-l-8 border-red-500 rounded-full mb-8 h-[36px]
            "
        ></div>
        <h1 className="text-4xl ml-2 font-poppins font-bold">About Us</h1>
      </div>
      <div className="grid gap-3">
        <div className="flex items-center justify-between mt-[5rem] gap-[2rem] lgs:flex-col-reverse">
          <div className="grid gap-4 w-full">
            <h3 className="text-4xl font-bold font-poppins">Mission</h3>
            <p className="text-[17px] text-gray-500">
              At Black and White Shop, we believe that simplicity is the
              ultimate sophistication. Our carefully selected range of products
              reflects this philosophy, offering a harmonious blend of
              minimalist designs and refined details. Whether you're searching
              for the perfect little black dress or a crisp white shirt, our
              catalog is thoughtfully curated to inspire and elevate your
              wardrobe.
            </p>
          </div>
          <div className="w-full image_path">
            <img src="/about_1.png" alt="" className="clip_path" />
            <div className="clip_path_background"></div>
          </div>
        </div>
        <div className="w-full">
          <ImageSection
            imageUrl={images[currentIndex]}
            handleLeftArrowClick={handleLeftArrowClick}
            handleRightArrowClick={handleRightArrowClick}
            paragraphs={paragraphs[currentIndex]}
            header={header[currentIndex]}
            animationDirection={animationDirection}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
