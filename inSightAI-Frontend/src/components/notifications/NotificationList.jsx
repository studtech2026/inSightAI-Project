import NotificationItem from "./NotificationItem";

export default function NotificationList({
  notifications = [],
}) {
  if (notifications.length === 0) {
    return (
      <div
        className="
          py-10
          text-center
          text-sm
          text-secondary
        "
      >
        No notifications available.
      </div>
    );
  }

  return (
    <div className="divide-y divide-[var(--border)]">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification._id || notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}