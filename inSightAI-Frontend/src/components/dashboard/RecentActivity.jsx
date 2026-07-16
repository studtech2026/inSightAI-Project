import {
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

import Card from "../common/Card";

const icons = {
  success: CheckCircle2,
  warning: AlertTriangle,
  info: Info,
  upload: Info,
  report: CheckCircle2,
  ai: Info,
};

const colors = {
  success: "text-green-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
  upload: "text-violet-500",
  report: "text-green-500",
  ai: "text-blue-500",
};

export default function RecentActivity({
  activities = [],
}) {
  return (
    <Card hover={false}>
      <h2 className="text-xl font-semibold text-main">
        Recent Activity
      </h2>

      <p className="mt-1 text-sm text-secondary">
        Latest updates from your business.
      </p>

      <div className="mt-6 space-y-4">
        {activities.map((activity) => {
          const Icon =
            icons[activity.type] || Info;

          return (
            <div
              key={activity._id}
              className="
                flex
                gap-4
                rounded-xl
                border
                border-app
                bg-surface
                p-4
              "
            >
              <Icon
                className={
                  colors[activity.type] ||
                  "text-blue-500"
                }
                size={22}
              />

              <div className="flex-1">
                <h3 className="font-medium text-main">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-secondary">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}