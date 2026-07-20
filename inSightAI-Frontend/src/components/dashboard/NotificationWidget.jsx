import {
  Bell,
  Sparkles,
  FileBarChart,
  TriangleAlert,
  CircleCheck,
  CircleX,
} from "lucide-react";

import timeAgo from "../../utils/timeAgo";

const icons = {
  info: Bell,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
  report: FileBarChart,
  ai: Sparkles,
};

const colors = {
  info: "bg-blue-100 text-blue-600",
  success: "bg-green-100 text-green-600",
  warning: "bg-yellow-100 text-yellow-600",
  error: "bg-red-100 text-red-600",
  report: "bg-violet-100 text-violet-600",
  ai: "bg-indigo-100 text-indigo-600",
};

export default function NotificationWidget({
  notifications = [],
}) {
  return (
    <div className="rounded-2xl border border-app bg-card p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-main">
            Recent Notifications
          </h2>

          <p className="text-sm text-secondary">
            Latest business updates
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
          <Bell size={20} />
        </div>
      </div>

      {notifications.length === 0 ? (
        <div className="py-10 text-center">
          <Bell
            size={40}
            className="mx-auto mb-3 text-secondary"
          />

          <p className="font-medium text-main">
            No notifications yet
          </p>

          <p className="mt-1 text-sm text-secondary">
            Business notifications will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon =
              icons[notification.type] || Bell;

            return (
              <div
                key={notification._id}
                className={`
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-app
                  p-4
                  transition
                  hover:bg-card-hover
                  ${
                    !notification.read
                      ? "border-l-4 border-l-violet-500 bg-violet-500/5"
                      : ""
                  }
                `}
              >
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${colors[notification.type]}
                  `}
                >
                  <Icon size={18} />
                </div>

                <div className="flex-1">
                  <h3
                    className={`font-medium ${
                      notification.read
                        ? "text-main"
                        : "text-violet-500"
                    }`}
                  >
                    {notification.title}
                  </h3>

                  <p className="mt-1 text-sm text-secondary">
                    {notification.message}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-secondary">
                      {timeAgo(notification.createdAt)}
                    </span>

                    {!notification.read && (
                      <span className="h-2 w-2 rounded-full bg-violet-500" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}