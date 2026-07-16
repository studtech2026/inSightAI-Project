import { useEffect, useState } from "react";

import notificationService from "../services/notificationService";

import {
  showSuccess,
  showError,
} from "../utils/toast";

export default function useNotificationPage() {
  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const loadNotifications =
    async () => {
      try {
        setLoading(true);

        const response =
          await notificationService.getNotifications();

        setNotifications(response.data);
      } catch {
        showError(
          "Failed to load notifications."
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    loadNotifications();
  }, []);

  const markAsRead = async (id) => {
    try {
      await notificationService.markAsRead(id);

      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id
            ? {
                ...notification,
                read: true,
              }
            : notification
        )
      );
    } catch {
      showError(
        "Failed to mark notification as read."
      );
    }
  };

  const markAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();

      setNotifications((prev) =>
        prev.map((notification) => ({
          ...notification,
          read: true,
        }))
      );

      showSuccess(
        "All notifications marked as read."
      );
    } catch {
      showError(
        "Operation failed."
      );
    }
  };

  const deleteNotification = async (id) => {
    try {
      await notificationService.deleteNotification(
        id
      );

      setNotifications((prev) =>
        prev.filter(
          (notification) =>
            notification._id !== id
        )
      );

      showSuccess(
        "Notification deleted."
      );
    } catch {
      showError(
        "Delete failed."
      );
    }
  };

  const clearNotifications =
    async () => {
      try {
        await notificationService.clearNotifications();

        setNotifications([]);

        showSuccess(
          "All notifications cleared."
        );
      } catch {
        showError(
          "Operation failed."
        );
      }
    };

  return {
    notifications,
    loading,

    loadNotifications,

    markAsRead,

    markAllAsRead,

    deleteNotification,

    clearNotifications,
  };
}