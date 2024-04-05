import React from 'react';
import HomePage from "./homePage/page";
import Footer from "@/components/Footer";
import Products from "./product/page";

export default function Home() {
  
  return (
    <main>
      <HomePage />
      <Products />
    </main>
  );
}
