import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-5xl text-black text-center font-bold">About Us</h1>
      <div className="slide container mx-auto gap-5 mt-14 p-6">
        <p>
          At <strong>Black and White</strong>, we believe in bringing you the
          finest selection of products coupled with an exceptional online
          shopping experience. With a passion for quality and customer
          satisfaction, we strive to be your one-stop destination for all your
          shopping needs.
        </p>
        <div className="grid-container">
          <div className="grid-item grid_1">
            <h2>Grid Item 1</h2>
            <Image src="/Bag.jpg" alt="Image 1" width={0} height={0}  className="w-full"/>
            <p>Description for Grid Item 1</p>
          </div>
          <div className="grid-item grid_2">
            <h2>Grid Item 2</h2>
            <Image src="/Chair.jpg" alt="Image 2" width={0} height={0} className="w-full"/>
            <p>Description for Grid Item 2</p>
          </div>
          <div className="grid-item grid_3">
            <h2>Grid Item 3</h2>
            <Image src="/desk.jpg" alt="Image 3" width={0} height={0} className="w-full"/>
            <p>Description for Grid Item 3</p>
          </div>
          <div className="grid-item grid_4">
            <h2>Grid Item 4</h2>
            <Image
              src="/rack-clothes-store.jpg"
              alt="Image 4"
              width={0}
                          height={0}
                          className="w-full"
            />
            <p>Description for Grid Item 4</p>
          </div>
          <div className="grid-item grid_5">
            <h2>Grid Item 5</h2>
            <Image
              src="/something.jpg"
              alt="Image 5"
              width={0}
              height={0}
              className="w-full"
            />
            <p>Description for Grid Item 5</p>
          </div>
          <div className="grid-item grid_6">
            <h2>Grid Item 6</h2>
            <Image
              src="/something.jpg"
              alt="Image 6"
              width={0}
              height={0}
              className="w-full"
            />
            <p>Description for Grid Item 6</p>
          </div>
          {/* Add more grid items as needed */}
        </div>
      </div>
    </div>
  );
};

export default page;
