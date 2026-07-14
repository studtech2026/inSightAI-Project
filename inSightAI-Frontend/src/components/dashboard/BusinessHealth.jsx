import {
  CheckCircle2,
  TrendingUp,
  Activity,
} from "lucide-react";

import Card from "../common/Card";

const metrics = [
  {
    title: "Business Score",
    value: "92%",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    title: "Growth",
    value: "+18%",
    icon: TrendingUp,
    color: "text-violet-500",
  },
  {
    title: "Performance",
    value: "Excellent",
    icon: Activity,
    color: "text-blue-500",
  },
];

export default function BusinessHealth() {
  return (
    <Card hover={false}>
      <h2 className="text-xl font-semibold text-main">
        Business Health
      </h2>

      <p className="mt-1 text-sm text-secondary">
        Overall business performance indicators.
      </p>

      <div className="mt-6 space-y-5">
        {metrics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-app
                bg-surface
                p-4
              "
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/10 p-3">
                  <Icon
                    className={item.color}
                    size={22}
                  />
                </div>

                <span className="text-main font-medium">
                  {item.title}
                </span>
              </div>

              <span className="font-bold text-main">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}