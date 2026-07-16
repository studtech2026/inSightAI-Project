import api from "./api";

const expenseService = {
  getExpenses: async () => {
    const response = await api.get("/expenses");
    return response.data;
  },

  createExpense: async (data) => {
    const response = await api.post("/expenses", data);
    return response.data;
  },

  updateExpense: async (id, data) => {
    const response = await api.put(`/expenses/${id}`, data);
    return response.data;
  },

  deleteExpense: async (id) => {
    const response = await api.delete(`/expenses/${id}`);
    return response.data;
  },
};

export default expenseService;