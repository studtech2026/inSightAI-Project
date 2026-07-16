import { useEffect, useMemo, useState } from "react";

import notificationService from "../services/notificationService";
import { showError } from "../utils/toast";

export default function useNotifications() {
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const loadNotifications = async () => {
    try {
      const response =
        await notificationService.getNotifications();

      setNotifications(response.data);
    } catch {
      showError("Failed to load notifications.");
    }
  };

  useEffect(() => {
    loadNotifications();

    const interval = setInterval(() => {
      loadNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const unreadCount = useMemo(() => {
    return notifications.filter(
      (item) => !item.read
    ).length;
  }, [notifications]);

  const toggleDropdown = async () => {
    if (!open) {
      await loadNotifications();
    }

    setOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setOpen(false);
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
    } catch {
      showError(
        "Failed to mark notifications as read."
      );
    }
  };

  return {
    open,
    notifications,
    unreadCount,
    toggleDropdown,
    closeDropdown,
    markAllAsRead,
  };
}