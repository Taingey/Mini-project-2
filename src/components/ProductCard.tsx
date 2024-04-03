
import React from "react";
import { Card } from "flowbite-react";
import { ProductType } from "@/types/products";

export default function ProductCard({username, desc, image}: ProductType) {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2  h-[7rem]">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{username}</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{desc}</p>
        </div>
        <img className="object-cover w-full mt-2" src={image} alt="NIKE AIR"/>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">$129</h1>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
        </div>
    </div>
  </div>
  );
}
