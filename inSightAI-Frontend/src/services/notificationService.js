import api from "./api";

const notificationService = {
  getNotifications: async () => {
    const response = await api.get("/notifications");

    return response.data;
  },

  getUnreadCount: async () => {
    const response = await api.get(
      "/notifications/unread-count"
    );

    return response.data;
  },

  markAsRead: async (id) => {
    const response = await api.put(
      `/notifications/${id}/read`
    );

    return response.data;
  },

  markAllAsRead: async () => {
    const response = await api.put(
      "/notifications/read-all"
    );

    return response.data;
  },

  deleteNotification: async (id) => {
    const response = await api.delete(
      `/notifications/${id}`
    );

    return response.data;
  },

  clearNotifications: async () => {
    const response = await api.delete(
      "/notifications"
    );

    return response.data;
  },
};

export default notificationService;