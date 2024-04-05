"use client"
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Modal from "./Model";
import { ProductDashbord } from "@/types/productDashbord";

const url_based = "https://store.istad.co/api/products";

export default function UserTable() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url_based);
        const data = await response.json();
        setProducts(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDetails = async (productId) => {
    try {
      const response = await fetch(`${url_based}/${productId}`);
      const productDetails = await response.json();
      setSelectedProduct(productDetails);
      setSelectedProductId(productId);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNextProduct = () => {
    const currentIndex = products.findIndex(
      (product) => product.id === selectedProductId
    );
    if (currentIndex !== -1 && currentIndex < products.length - 1) {
      const nextProduct = products[currentIndex + 1];
      handleDetails(nextProduct.id);
    }
  };

  const columns: GridColDef<ProductDashbord>[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "name", width: 300, editable: true },
    { field: "price", headerName: "Price", width: 200, editable: true },
    {
      field: "image",
      headerName: "Image",
      width: 250,
      renderCell: (params) => (
        <img src={params.row.image} width={70} height={70} alt="user" />
      )
    },
    {
      field: "details",
      headerName: "Details",
      width: 150,
      renderCell: (params) => (
        <button
          onClick={() => handleDetails(params.row.id)}
          className="text-blue-800 font-bold font-poppins"
        >
          Details
        </button>
      )
    },
  ];

  return (
    <Box sx={{ height: "80vh", width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={products}
        columns={columns}
        loading={isLoading}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
      />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
          onNext={handleNextProduct}
        />
      )}
    </Box>
  );
}
