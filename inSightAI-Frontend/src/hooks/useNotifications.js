import { useMemo, useState } from "react";
import { notifications as initialNotifications } from "../data/notificationsData";

export default function useNotifications() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = useMemo(() => {
    return notifications.filter((item) => !item.read).length;
  }, [notifications]);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
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