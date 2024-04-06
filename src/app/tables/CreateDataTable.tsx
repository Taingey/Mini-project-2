"use client"
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ProductDashbord } from "@/types/productDashbord";


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1
});

interface CreateDataTableProps {
  onCreateSuccess: (newProduct: ProductDashbord) => void;
}

const CreateDataTable: React.FC<CreateDataTableProps> = ({ onCreateSuccess }) => {
  const [newProductName, setNewProductName] = useState<string>("");
  const [newProductPrice, setNewProductPrice] = useState<number>(0);
  const [newProductImage, setNewProductImage] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleCreateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", newProductName);
      formData.append("price", newProductPrice.toString());
      formData.append("image", newProductImage!);

      const response = await fetch("https://store.istad.co/api/products", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        onCreateSuccess(data);
        setNewProductName("");
        setNewProductPrice(0);
        setNewProductImage(null);
        setError("");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Error creating product. Please try again later.");
    }
  };

  return (
    <div>
      <section className="fixed max-w-4xl p-6 mx-auto bg-slate-50 rounded-md shadow-md z-50">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Create New Product
        </h2>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="productName"
              >
                Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="productPrice"
              >
                Product Price
              </label>
              <input
                type="number"
                placeholder="Product Price"
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(Number(e.target.value))}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              className="p-2"
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => setNewProductImage(e.target.files![0])}
              />
            </Button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={handleCreateProduct}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Create Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateDataTable;
