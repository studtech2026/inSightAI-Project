import {
  TrendingUp,
  AlertTriangle,
  BrainCircuit,
  Info,
} from "lucide-react";

import ChartContainer from "./ChartContainer";

const iconMap = {
  success: TrendingUp,
  warning: AlertTriangle,
  info: BrainCircuit,
};

const colorMap = {
  success: "text-green-500",
  warning: "text-yellow-500",
  info: "text-violet-500",
};

const defaultInsights = [
  {
    type: "success",
    title: "Revenue Increased",
    description:
      "Revenue increased by 12% compared to last month.",
  },
  {
    type: "warning",
    title: "Inventory Alert",
    description:
      "Product X inventory is running low.",
  },
  {
    type: "info",
    title: "AI Recommendation",
    description:
      "Increase marketing budget by 8% for maximum ROI.",
  },
];

export default function AIInsights({
  insights = [],
}) {
  const data =
    insights.length > 0
      ? insights
      : defaultInsights;

  return (
    <ChartContainer
      title="AI Insights"
      subtitle="Latest business recommendations"
    >
      <div className="space-y-6">
        {data.map((item, index) => {
          const Icon =
            iconMap[item.type] || Info;

          return (
            <div
              key={index}
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
                  className={
                    colorMap[item.type] ||
                    "text-violet-500"
                  }
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