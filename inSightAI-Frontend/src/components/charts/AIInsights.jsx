import {
  TrendingUp,
  AlertTriangle,
  BrainCircuit,
} from "lucide-react";

import ChartContainer from "./ChartContainer";

const insights = [
  {
    icon: TrendingUp,
    color: "text-green-500",
    title: "Revenue Increased",
    description:
      "Revenue increased by 12% compared to last month.",
  },
  {
    icon: AlertTriangle,
    color: "text-yellow-500",
    title: "Inventory Alert",
    description:
      "Product X inventory is running low.",
  },
  {
    icon: BrainCircuit,
    color: "text-violet-500",
    title: "AI Recommendation",
    description:
      "Increase marketing budget by 8% for maximum ROI.",
  },
];

export default function AIInsights() {
  return (
    <ChartContainer
      title="AI Insights"
      subtitle="Latest business recommendations"
    >
      <div className="space-y-6">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                gap-4
                rounded-xl
                border
                border-app
                bg-surface
                p-4
                transition
                hover:bg-card-hover
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/10
                "
              >
                <Icon
                  className={item.color}
                  size={22}
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-main">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ChartContainer>
  );
}