import {
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

export default function NotificationItem({
  notification,
}) {
  const iconMap = {
    success: (
      <CheckCircle2
        size={18}
        className="text-green-500"
      />
    ),

    warning: (
      <AlertTriangle
        size={18}
        className="text-yellow-500"
      />
    ),

    info: (
      <Info
        size={18}
        className="text-violet-500"
      />
    ),
  };

  return (
    <div
      className={`
        flex
        gap-3
        p-4
        transition
        hover:bg-card-hover
        ${
          !notification.read
            ? "bg-violet-500/5"
            : ""
        }
      `}
    >
      <div className="mt-1 shrink-0">
        {iconMap[notification.type]}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-main">
          {notification.title}
        </h4>

        <p className="mt-1 text-sm text-secondary">
          {notification.message}
        </p>

        <p className="mt-2 text-xs text-secondary">
          {notification.time}
        </p>
      </div>

      {!notification.read && (
        <span
          className="
            mt-2
            h-2
            w-2
            shrink-0
            rounded-full
            bg-violet-500
          "
        />
      )}
    </div>
  );
}