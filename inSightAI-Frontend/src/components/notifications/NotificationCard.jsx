import {
  Bell,
  Check,
  Trash2,
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

export default function NotificationCard({
  notification,
  onRead,
  onDelete,
}) {
  const Icon =
    icons[notification.type] || Bell;

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-app
        bg-card
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-violet-500/40
        ${
          !notification.read
            ? "border-l-4 border-l-violet-500 bg-violet-500/5"
            : ""
        }
      `}
    >
      <div className="flex items-start justify-between gap-5">
        {/* Left */}
        <div className="flex flex-1 gap-4">
          <div
            className={`
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              ${colors[notification.type]}
            `}
          >
            <Icon size={22} />
          </div>

          <div className="flex-1">
            <h3
              className={`text-base font-semibold ${
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

            <div className="mt-4 flex items-center gap-4">
              <span className="text-xs text-secondary">
                {timeAgo(notification.createdAt)}
              </span>

              <div className="flex items-center gap-2">
                {!notification.read && (
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                )}

                <span className="text-xs text-secondary">
                  {notification.read
                    ? "Read"
                    : "Unread"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-2">
          {!notification.read && (
            <button
              onClick={onRead}
              title="Mark as Read"
              className="
                rounded-xl
                p-2
                transition
                hover:bg-green-500/10
              "
            >
              <Check
                size={18}
                className="text-green-600"
              />
            </button>
          )}

          <button
            onClick={onDelete}
            title="Delete Notification"
            className="
              rounded-xl
              p-2
              transition
              hover:bg-red-500/10
            "
          >
            <Trash2
              size={18}
              className="text-red-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
}