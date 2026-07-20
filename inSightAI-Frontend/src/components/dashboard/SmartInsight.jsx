import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  TriangleAlert,
  CircleCheck,
} from "lucide-react";

const icons = {
  success: CircleCheck,
  warning: TriangleAlert,
  info: TrendingUp,
  error: TrendingDown,
};

const colors = {
  success: "bg-green-100 text-green-600",
  warning: "bg-yellow-100 text-yellow-600",
  info: "bg-blue-100 text-blue-600",
  error: "bg-red-100 text-red-600",
};

export default function SmartInsight({
  insights = [],
}) {
  return (
    <div className="rounded-2xl border border-app bg-card p-6">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-main">
            AI Business Insight
          </h2>

          <p className="text-sm text-secondary">
            Generated from your business data
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
          <Sparkles size={20} />
        </div>
      </div>

      {/* Empty */}

      {insights.length === 0 ? (
        <div className="py-10 text-center">
          <Sparkles
            size={42}
            className="mx-auto mb-3 text-secondary"
          />

          <p className="font-medium text-main">
            No insights available
          </p>

          <p className="mt-1 text-sm text-secondary">
            Insights will appear as your business grows.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {insights.map((item, index) => {
            const Icon =
              icons[item.type] || TrendingUp;

            return (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                  rounded-xl
                  border
                  border-app
                  p-4
                  transition
                  hover:bg-card-hover
                "
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
                    ${colors[item.type]}
                  `}
                >
                  <Icon size={18} />
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
      )}

      {/* Footer */}

      <div className="mt-6 rounded-xl bg-violet-500/10 p-4">
        <p className="text-sm font-medium text-violet-600">
          💡 Recommendation
        </p>

        <p className="mt-2 text-sm text-secondary">
          Monitor low-stock products regularly and keep
          expenses lower than revenue to maintain healthy
          business growth.
        </p>
      </div>
    </div>
  );
}