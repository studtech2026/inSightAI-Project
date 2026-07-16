import { useEffect, useState } from "react";
import productService from "../services/productService";
import {
  showError,
  showSuccess,
} from "../utils/toast";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] =
    useState(false);

  const [modalOpen, setModalOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [viewOpen, setViewOpen] =
    useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const loadProducts = async () => {
    try {
      const response =
        await productService.getProducts();

      setProducts(response.data);
    } catch {
      showError("Failed to load products.");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const createOrUpdate = async (data) => {
    try {
      if (
        !data.name ||
        !data.category ||
        !data.price ||
        !data.stock
      ) {
        return showError(
          "Please fill all fields."
        );
      }

      setLoading(true);

      if (selectedProduct) {
        await productService.updateProduct(
          selectedProduct._id,
          data
        );

        showSuccess(
          "Product updated successfully."
        );
      } else {
        await productService.createProduct(
          data
        );

        showSuccess(
          "Product created successfully."
        );
      }

      setModalOpen(false);
      setSelectedProduct(null);

      loadProducts();
    } catch {
      showError("Operation failed.");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async () => {
    try {
      await productService.deleteProduct(
        selectedProduct._id
      );

      showSuccess(
        "Product deleted successfully."
      );

      setDeleteOpen(false);
      setSelectedProduct(null);

      loadProducts();
    } catch {
      showError("Delete failed.");
    }
  };

  return {
    products,
    loading,

    modalOpen,
    setModalOpen,

    deleteOpen,
    setDeleteOpen,

    viewOpen,
    setViewOpen,

    selectedProduct,
    setSelectedProduct,

    createOrUpdate,
    deleteProduct,
  };
}