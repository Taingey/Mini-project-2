import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Modal from "./Model";
import CreateDataTable from "./CreateDataTable";
import { ProductDashbord } from "@/types/productDashbord";

const url_based = "https://store.istad.co/api/products";

const UserTables: React.FC<ProductDashbord> = () => {
  const [products, setProducts] = useState<ProductDashbord[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductDashbord[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductDashbord | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [isCreateDataTableVisible, setIsCreateDataTableVisible] =
    useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url_based);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        const productsWithUniqueIds = data.results.map(
          (product: ProductDashbord) => ({
            ...product,
            id: product.id.toString()
          })
        );

        const hasInvalidIds = productsWithUniqueIds.some(
          (product: ProductDashbord) => !product.id
        );

        setProducts(productsWithUniqueIds);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        if (error instanceof Error) {
          alert(`Error fetching data: ${error.message}`);
        } else {
          alert("Error fetching data.");
        }
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const handleCreateSuccess = (newProduct: ProductDashbord) => {
    setProducts([...products, newProduct]);
    setIsCreateDataTableVisible(false);
  };

  const handleDetails = async (productId: string) => {
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

  const handleDelete = async (productId: string) => {
    try {
      await fetch(`${url_based}/${productId}`, {
        method: "DELETE"
      });
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleToggleCreateDataTable = () => {
    setIsCreateDataTableVisible((prev) => !prev);
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

  const handleBackProduct = () => {
    const currentIndex = products.findIndex(
      (product) => product.id === selectedProductId
    );
    if (currentIndex !== -1 && currentIndex > 0) {
      const prevProduct = products[currentIndex - 1];
      handleDetails(prevProduct.id);
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
        <img src={params.row.image} width={70} height={70} alt="product" />
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
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <button
          onClick={() => handleDelete(params.row.id)}
          className="text-red-800 font-bold font-poppins"
        >
          Delete
        </button>
      )
    }
  ];

  return (
    <Box sx={{ height: "80vh", width: "100%", backgroundColor: "white" }}>
      <div className="flex items-center justify-between px-2 mb-3">
        <button
          onClick={handleToggleCreateDataTable}
          className="bg-red-500 text-white py-2 px-5 rounded-md"
        >
          Create New Product
        </button>
        <input
          type="search"
          placeholder="Search Product"
          className="border-none px-4 py-2 bg-slate-100"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {isCreateDataTableVisible && (
        <CreateDataTable onCreateSuccess={handleCreateSuccess} />
      )}
      <DataGrid
        rows={filteredProducts}
        columns={columns}
        loading={isLoading}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row) => row.id}
      />

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
          onNext={handleNextProduct}
          onBack={handleBackProduct}
        />
      )}
    </Box>
  );
};

export default UserTables;
