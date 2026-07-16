import api from "./api";

const analyticsService = {
  getRevenue: async () => {
    const response = await api.get("/dashboard/revenue");
    return response.data;
  },

  getSalesCategory: async () => {
    const response = await api.get("/dashboard/sales-category");
    return response.data;
  },

  getExpenseBreakdown: async () => {
    const response = await api.get("/dashboard/expense-breakdown");
    return response.data;
  },

  getCustomerGrowth: async () => {
    const response = await api.get("/dashboard/customer-growth");
    return response.data;
  },

  getAIInsights: async () => {
    const response = await api.get("/dashboard/ai-insights");
    return response.data;
  },
};

export default analyticsService;