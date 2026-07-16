import api from "./api";

const aiService = {
  sendMessage: async (question) => {
    const response = await api.post("/chat", {
      question,
    });

    return response.data;
  },

  getChatHistory: async () => {
    const response = await api.get("/chat/history");

    return response.data;
  },

  clearChatHistory: async () => {
    const response = await api.delete("/chat/history");

    return response.data;
  },
};

export default aiService;