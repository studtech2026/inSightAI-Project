import api from "./api";

const forecastService = {
  createForecast: async () => {
    const response = await api.post("/forecast", {});
    return response.data;
  },

  getForecasts: async () => {
    const response = await api.get("/forecast");
    return response.data;
  },

  deleteForecast: async (id) => {
    const response = await api.delete(`/forecast/${id}`);
    return response.data;
  },
};

export default forecastService;