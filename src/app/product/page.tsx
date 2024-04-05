import React, { Suspense } from "react";
import Link from "next/link";
import { ProductType } from "@/types/products";
import ProductCard from "@/components/ProductCard";
import LoadingComponent from "../loading";
import { Metadata } from "next";
async function fetchProduct() {
  const products = await fetch("https://store.istad.co/api/products", {
    cache: "no-store"
  });
  const res = await products.json();
  return res.results;
}
export const metadata: Metadata = {
  title: "Product",
  description: "This is Product page shop",
  keywords: ['shop', 'ecommerce', 'sell']
};
async function Products() {
  const products = await fetchProduct();
  return (
    <div>
      <div>
        <div className="container mx-auto mt-8 mb-8 px-5">
          <Suspense fallback={<LoadingComponent />}>
            <div className="flex">
              <div
                className="border-l-8 border-red-500 rounded-full mb-8 h-[36px]
            "
              ></div>
              <h1 className="text-4xl ml-2 font-poppins font-bold">Product</h1>
            </div>
            <div className="grid grid-cols-4 gap-3 lgs:grid-cols-3 sms:grid-cols-2 smp:grid-cols-1">
              {products?.map((product: ProductType) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                  <ProductCard
                    category={product.category}
                    seller={product.seller}
                    image={product.image}
                    desc={product.desc}
                    price={product.price}
                    quantity={product.quantity}
                    name={product.name}
                  />
                </Link>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Products;
