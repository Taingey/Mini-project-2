"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCartShopping, FaPhone, FaUser } from "react-icons/fa6";
import { navbar } from "./menu";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

interface NavbarItem {
  path: string;
  title: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getMenuStyle = (menuOpen: boolean) => {
    if (isClient && document.documentElement.clientWidth <= 2600) {
      return { left: menuOpen ? "0" : "-200%" };
    } else {
      return {};
    }
  };

  return (
    <header className="w-full z-50">
      <div className="bg-black py-2 text-white">
        <div className="container text-[14px] mx-auto flex items-center justify-between px-2 smp:text-[12px]">
          <div className="flex place-items-center gap-2">
            <FaPhone />
            +855 93731414
          </div>
          <div>
            Get 50% off on selected Items |{" "}
            <a href="#" className="font-bold text-red-500 hover:underline">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white py-3 px-2">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex place-items-center gap-3">
            <IoMdMenu
              className="menu text-4xl text-slate-950 cursor-pointer lgs:block dark:text-white "
              onClick={() => setMenuOpen((prev) => !prev)}
            />
            <Image src="/Logo_not_bg.png" alt="Logo" width={130} height={130} />
          </div>
          <div
            className="navigation flex items-center justify-between gap-[6rem] "
            style={getMenuStyle(menuOpen)}
          >
            <ul className="navbar flex gap-5 font-medium text-[16px]">
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
            <div className="flex place-items-center gap-2 cursor-pointer">
              <FaUser />
              Account
            </div>
            <div className="flex place-items-center gap-2 cursor-pointer">
              <FaCartShopping />
              Cart {/* Changed "Account" to "Cart" */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
