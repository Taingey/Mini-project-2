import Image from "next/image";
import React from "react";

interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
  desc: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onNext: () => void;
  onBack: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product, onNext, onBack }) => {
  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div
        className="fixed top-[20%] inset-0 z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
            <span
              className="close absolute top-1 text-3xl right-3 cursor-pointer"
              onClick={onClose}
            >
              &times;
            </span>
            {product && (
              <div className="mt-3">
                <Image
                  width={300}
                  height={300}
                  className="object-cover w-full h-48 rounded-md"
                  src={product.image}
                  alt="image"
                />

                <div className="mt-4 text-center">
                  <h3
                    className="font-medium leading-6 text-gray-800 capitalize dark:text-white"
                    id="modal-title"
                  >
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    Price: {product.desc}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Price: {product.price}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center mt-4">
              <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-500 rounded-full "></button>
              <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
              <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
              <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
            </div>

            <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
              <button
                onClick={onBack}
                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              >
                Back
              </button>

              <button
                onClick={onNext}
                className="w-full px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
