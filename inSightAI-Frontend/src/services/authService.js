import api from "./api";

const authService = {
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);

    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);

    return response.data;
  },

  getProfile: async () => {
    const response = await api.get("/auth/profile");

    return response.data;
  },

  updateProfile: async (data) => {
    const response = await api.put("/auth/profile", data);

    return response.data;
  },
};

export default authService;