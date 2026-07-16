import api from "./api";

const reportService = {
  createReport: async (data) => {
    const response = await api.post("/reports", data);
    return response.data;
  },

  getReports: async () => {
    const response = await api.get("/reports");
    return response.data;
  },

  deleteReport: async (id) => {
    const response = await api.delete(`/reports/${id}`);
    return response.data;
  },

  downloadReport: async (type) => {
    const response = await api.get(`/export/${type}`, {
      responseType: "blob",
    });

    return response.data;
  },
  updateReport: async (id, data) => {
    const response = await api.put(`/reports/${id}`, data);

    return response.data;
  },
};

export default reportService;
