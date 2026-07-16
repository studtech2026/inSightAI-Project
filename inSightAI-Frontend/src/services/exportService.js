import api from "./api";

const exportService = {
  exportPDF: async () => {
    const response = await api.get("/export/pdf", {
      responseType: "blob",
    });

    return response.data;
  },

  exportExcel: async () => {
    const response = await api.get("/export/excel", {
      responseType: "blob",
    });

    return response.data;
  },

  exportCSV: async () => {
    const response = await api.get("/export/csv", {
      responseType: "blob",
    });

    return response.data;
  },
};

export default exportService;