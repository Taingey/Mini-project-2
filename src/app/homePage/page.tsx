"use client";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
function HomePage() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const transtion = { type: "spring", duration: 3 };
  return (
    <div>
      <div className="h-[85vh]">
        <Carousel pauseOnHover>
          <div className="image1">
            <div className="container mx-auto px-3 h-screen relative flex items-start justify-center flex-col gap-5 text-black z-50 mt-24">
              <div className="the-best-ad mb-[26rem] bg-slate-950">
                <motion.div
                  initial={{ left: mobile ? "185px" : "108px" }}
                  whileInView={{ left: "8px" }}
                  transition={{ ...transtion, type: "tween" }}
                  className=" z-50"
                ></motion.div>
                <span>Up to 30% to 50% off</span>
              </div>
              <h2 className="text-5xl w-[60%] font-poppins font-extrabold tracking-normal leading-[3.5rem] xls:w-full xls:text-[40px]">
                Save big on the{" "}
                <strong className="text-red-500">latest fashion trends</strong>{" "}
                with hundreds of top deals.
              </h2>
              <p className="w-[50%] text-slate-800/55 xls:w-full smp:text-[15px] sp:text-[14px]">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your indivduality and cater to
                your sense of style
              </p>
              <button className="bg-red-500 text-white py-2 px-5 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
          <div className="image2">
            <div className="container mx-auto px-3 h-screen flex items-start justify-center flex-col gap-5 text-black z-50 mt-20">
              <div className="the-best-ad mb-[26rem] bg-slate-950">
                <motion.div
                  initial={{ left: mobile ? "185px" : "108px" }}
                  whileInView={{ left: "8px" }}
                  transition={{ ...transtion, type: "tween" }}
                  className=" z-50"
                ></motion.div>
                <span>Up to 30% to 50% off</span>
              </div>
              <h2 className="text-5xl w-[60%] font-poppins font-extrabold tracking-normal leading-[3.5rem] xls:w-full xls:text-[40px]">
                Don't sell your{" "}
                <strong className="text-red-500">dreams sell</strong> you
                products
              </h2>
              <p className="w-[50%] text-slate-800/55 xls:w-full smp:text-[15px] sp:text-[14px]">
                Black and White is a driving force behind the dreams of emerging
                entrepreneurs, a trusted partner for industry leaders. We
                provide innovative solutions, strategic guidance, and
                unparalleled support to help businesses thrive in today's
                competitive landscape
              </p>
              <button className="bg-red-500 text-white py-2 px-5 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
          <div className="image3">
            <div className="container mx-auto px-3 h-screen relative flex items-start justify-center flex-col gap-5 text-black z-50 mt-24">
              <div className="the-best-ad mb-[26rem] bg-slate-950">
                <motion.div
                  initial={{ left: mobile ? "185px" : "108px" }}
                  whileInView={{ left: "8px" }}
                  transition={{ ...transtion, type: "tween" }}
                  className=" z-50"
                ></motion.div>
                <span>Up to 30% to 50% off</span>
              </div>
              <h2 className="text-5xl w-[60%] font-poppins font-extrabold tracking-normal leading-[3.5rem] xls:w-full xls:text-[40px]">
                Unveil Timeless Elegance{" "}
                <strong className="text-red-500">latest fashion trends</strong>{" "}
                Your Premier Source for Excellence
              </h2>
              <p className="w-[50%] text-slate-800/55 xls:w-full smp:text-[15px] sp:text-[14px]">
                Indulge in refined sophistication at Black and White Emporium,
                where timeless elegance meets unmatched quality. Explore our
                curated collection of class and style, featuring meticulously
                selected products crafted to elevate your lifestyle.
              </p>
              <button className="bg-red-500 text-white py-2 px-5 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default HomePage;
