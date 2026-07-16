import api from "./api";

const uploadService = {
  uploadFile: async (formData) => {
    const response = await api.post("/uploads", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },

  getUploads: async () => {
    const response = await api.get("/uploads");

    return response.data;
  },

  getUploadById: async (id) => {
    const response = await api.get(`/uploads/${id}`);

    return response.data;
  },

  deleteUpload: async (id) => {
    const response = await api.delete(`/uploads/${id}`);

    return response.data;
  },
};

export default uploadService;
