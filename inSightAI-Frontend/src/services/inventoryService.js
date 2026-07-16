import api from "./api";

const inventoryService = {
  getInventory: async () => {
    const response = await api.get("/inventory");
    return response.data;
  },

  createInventory: async (data) => {
    const response = await api.post("/inventory", data);
    return response.data;
  },

  updateInventory: async (id, data) => {
    const response = await api.put(`/inventory/${id}`, data);
    return response.data;
  },

  deleteInventory: async (id) => {
    const response = await api.delete(`/inventory/${id}`);
    return response.data;
  },
};

export default inventoryService;