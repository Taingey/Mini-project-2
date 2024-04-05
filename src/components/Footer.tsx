import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <section className="bg-slate-50" id="Footer">
        <div className="container mx-auto grid grid-cols-4 py-[3rem] px-[1.5rem] gap-5 lgs:grid-cols-2 mds:grid-cols-1">
          <div className="flex flex-col gap-3">
            <Image src="/Logo_not_bg.png" alt="Logo" width={150} height={150} />
            <div className="flex flex-col">
              <span>The customer is at the heart of our unique business model, which includes design.</span>
            </div>
            <div className="flex gap-4">
              <Image src="/master.png" alt="Visa" width={35} height={35} />
              <Image src="/paypal.png" alt="Visa" width={35} height={35} />
              <Image src="/visa.png" alt="Visa" width={35} height={35} />
            </div>
          </div>
          <div className=" flex flex-col justify-center gap-3">
            <h2 className="text-xl font-semibold">SHOPPING</h2>
            <div className="flex flex-col gap-3">
              <span>Clothing Store</span>
              <span>Trending Shopes</span>
              <span>Accessories</span>
              <span>Sale</span>
            </div>
          </div>
          <div className=" flex flex-col justify-center gap-3">
            <h2 className="text-xl font-semibold">CONTACT</h2>
            <div className="flex flex-col gap-3">
              <span className="cursor-pointer">Contact Us</span>
              <span className="cursor-pointer">Payment Methods</span>
              <span className="cursor-pointer"> Delivary</span>
              <span className="cursor-pointer">Return & Exchanges</span>
            </div>
          </div>
          <div className=" flex flex-col justify-center gap-4">
            <h2 className="text-xl font-semibold">NEWLETTER</h2>
            <div className="footer-title flex flex-col gap-3">
              <span>Be the first to know about new</span>
              <span>arrivals, look books, sales & promos!</span>
            </div>
            <div className="border-none flex">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="outline-none border-none bg-slate-100 w-full"
              />
              <a
                href="#"
                className="position-relative right-12 bottom-1 p-3 transform transition text-xl bg-red-500 text-white"
              >
                <AiOutlineMail className=" text-center  " />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-[14px] text-white py-2 mt-7 bg-black">
          <span className=" ">
            Copyright © 20232020 All rights reserved | This template is made
            with by <span className="text-orange-700">Colorlib</span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
