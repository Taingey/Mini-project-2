import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaCartShopping, FaPhone, FaUser } from "react-icons/fa6";
import { navbar } from "./menu";
import Link from "next/link";

interface NavbarItem {
  path: string;
  title: string;
}

const Header: React.FC = () => {
  return (
    <header className="w-full fixed z-50">
      <div className="bg-black py-2 text-white">
        <div className="container mx-auto flex items-center justify-between px-2">
          <div className="flex place-items-center gap-2">
            <FaPhone />
            +855 93731414
          </div>
          <div className="">Get 50% off on selected Items | Shop Now</div>
        </div>
      </div>
      <div className="bg-white py-3 px-2">
        <nav className="container mx-auto flex items-center justify-between">
          <div>
            <Image src="/logo.png" alt="Logo" width={130} height={130} />
          </div>
          <div className="flex items-center justify-between gap-[6rem] lgs:hidden">
            <ul className="flex gap-5 font-medium text-[16px]">
              {navbar.map((e: NavbarItem, index: number) => (
                <li key={index}>
                  <Link href={e.path}>{e.title}</Link>
                </li>
              ))}
            </ul>
            <div>
              <input
                type="search"
                placeholder="Search Product"
                className="border-none px-4 py-2 bg-slate-100"
              />
            </div>
          </div>
          <div className="flex place-content-center gap-5">
            <div className="flex place-items-center gap-2">
              <FaUser />
              Account
            </div>
            <div className="flex place-items-center gap-2">
              <FaCartShopping />
              Account
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
