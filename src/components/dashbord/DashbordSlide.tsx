"use client";
import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser
} from "react-icons/hi";

const DashboardSlide = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1050) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const getMenuStyle = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 1050) {
      return { left: menuOpen ? "0" : "-200%" };
    } else {
      return {};
    }
  };
  return (
    <div className="relative bg-slate-300 w-max h-screen flex">
      <div
        className="absolute arrow-menu cursor-pointer top-10 left-0 text-2xl z-50"
        onClick={toggleMenu}
      >
        <FaArrowRight />
      </div>
      <div className="dashboardMenu " style={getMenuStyle()}>
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                <Sidebar.Item href="#">Products</Sidebar.Item>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                <Sidebar.Item href="#">Shipping</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default DashboardSlide;
