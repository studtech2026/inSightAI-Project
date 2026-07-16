import { useMemo, useState } from "react";

import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";

import NotificationHeader from "../../components/notifications/NotificationHeader";
import NotificationCard from "../../components/notifications/NotificationCard";
import NotificationFilters from "../../components/notifications/NotificationFilters";
import NotificationEmpty from "../../components/notifications/NotificationEmpty";

import useNotificationPage from "../../hooks/useNotificationPage";

export default function Notifications() {
  const {
    notifications,
    loading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearNotifications,
  } = useNotificationPage();

  const [filter, setFilter] = useState("All");

  const filteredNotifications = useMemo(() => {
    switch (filter) {
      case "Unread":
        return notifications.filter(
          (item) => !item.read
        );

      case "Success":
        return notifications.filter(
          (item) => item.type === "success"
        );

      case "Warning":
        return notifications.filter(
          (item) => item.type === "warning"
        );

      case "Error":
        return notifications.filter(
          (item) => item.type === "error"
        );

      case "AI":
        return notifications.filter(
          (item) => item.type === "ai"
        );

      case "Report":
        return notifications.filter(
          (item) => item.type === "report"
        );

      default:
        return notifications;
    }
  }, [filter, notifications]);

  return (
    <PageTransition>
      <PageHeader
        title="Notifications"
        subtitle="Stay updated with your latest business activities."
      />

      <NotificationHeader
        count={notifications.length}
        onMarkAll={markAllAsRead}
        onClearAll={clearNotifications}
      />

      <NotificationFilters
        active={filter}
        onChange={setFilter}
      />

      {loading ? (
        <div className="py-10 text-center text-secondary">
          Loading...
        </div>
      ) : filteredNotifications.length === 0 ? (
        <NotificationEmpty />
      ) : (
        <div className="space-y-4">
          {filteredNotifications.map(
            (notification) => (
              <NotificationCard
                key={notification._id}
                notification={notification}
                onRead={() =>
                  markAsRead(notification._id)
                }
                onDelete={() =>
                  deleteNotification(
                    notification._id
                  )
                }
              />
            )
          )}
        </div>
      )}
    </PageTransition>
  );
}