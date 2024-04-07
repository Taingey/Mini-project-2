"use client";

import { Button } from "@nextui-org/react";

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded mb-[2rem] rotate-12 absolute">
          Page Not Found
        </div>
        <h1 className="mt-5 text-[36px] font-bold text-slate-200 lg:text-[50px]">
          {error.message}
        </h1>
        <div className="mt-5">
          <Button onClick={() => reset()}>
            <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                {" "}
                Try agai
              </span>
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
