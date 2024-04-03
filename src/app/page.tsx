import { Suspense } from "react";
import LoadingComponent from "./loading";
import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/types/products";
import HomePage from "./homePage/page";
async function fetchProduct() {
  const products = await fetch("https://store.istad.co/api/products", {
    cache: "no-store"
  });
  const res = await products.json();
  return res.results;
}

export default async function Home() {
  const products = await fetchProduct();
  return (
    <main>
      <div>
        <HomePage />
        <div className="container mx-auto mt-8">
        <Suspense fallback={<LoadingComponent />}>
          <div className="flex">
              <div className="border-l-8 border-red-500 rounded-full mb-8 h-[36px]
            "></div>
            <h1 className="text-4xl ml-2 font-poppins font-bold">Product</h1>
          </div>
            <div className="grid grid-cols-3 gap-3">
            {products?.map((product: ProductType) => (
            <ProductCard
              key={product.id}
              category={product.category}
              username={product.seller}
              image={product.image}
              desc={product.desc}
            />
          ))}
          </div>
        </Suspense>
        </div>
      </div>
    </main>
  );
}
