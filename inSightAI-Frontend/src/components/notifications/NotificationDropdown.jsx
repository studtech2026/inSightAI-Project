import NotificationList from "./NotificationList";

export default function NotificationDropdown({
  notifications = [],
}) {
  return (
    <div
      className="
        absolute
        right-0
        z-50
        mt-3
        w-96
        max-w-[calc(100vw-2rem)]
        overflow-hidden
        rounded-2xl
        border
        border-app
        bg-card
        shadow-app
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-app
          px-5
          py-4
        "
      >
        <h3 className="text-lg font-semibold text-main">
          Notifications
        </h3>

        <span className="text-xs text-secondary">
          {
            notifications.filter(
              (item) => !item.read
            ).length
          }{" "}
          unread
        </span>
      </div>

      <div className="max-h-96 overflow-y-auto">
        <NotificationList
          notifications={notifications}
        />
      </div>

      <button
        className="
          w-full
          border-t
          border-app
          py-3
          text-center
          text-sm
          font-medium
          text-violet-500
          transition
          hover:bg-card-hover
        "
      >
        View All Notifications
      </button>
    </div>
  );
}