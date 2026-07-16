import api from "./api";

const customerService = {
  getCustomers: async () => {
    const response = await api.get("/customers");
    return response.data;
  },

  createCustomer: async (data) => {
    const response = await api.post("/customers", data);
    return response.data;
  },

  updateCustomer: async (id, data) => {
    const response = await api.put(`/customers/${id}`, data);
    return response.data;
  },

  deleteCustomer: async (id) => {
    const response = await api.delete(`/customers/${id}`);
    return response.data;
  },
};

export default customerService;