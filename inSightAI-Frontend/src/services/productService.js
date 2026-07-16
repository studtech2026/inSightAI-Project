import api from "./api";

const productService = {
  getProducts: async () => {
    const response = await api.get("/products");
    return response.data;
  },

  createProduct: async (data) => {
    const response = await api.post("/products", data);
    return response.data;
  },

  updateProduct: async (id, data) => {
    const response = await api.put(`/products/${id}`, data);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },
};

export default productService;