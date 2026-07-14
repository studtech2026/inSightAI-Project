import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

import Card from "../common/Card";
import { recentActivities } from "../../data/recentActivity";

const icons = {
  success: CheckCircle2,
  warning: AlertTriangle,
  info: Info,
};

const colors = {
  success: "text-green-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
};

export default function RecentActivity() {
  return (
    <Card hover={false}>
      <h2 className="text-xl font-semibold text-main">Recent Activity</h2>

      <p className="mt-1 text-sm text-secondary">
        Latest updates from your business.
      </p>

      <div className="mt-6 space-y-4">
        {recentActivities.map((activity) => {
          const Icon = icons[activity.status];

          return (
            <div
              key={activity.id}
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
              <Icon className={colors[activity.status]} size={22} />

              <div className="flex-1">
                <h3 className="font-medium text-main">{activity.title}</h3>

                <p className="mt-1 text-sm text-secondary">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
