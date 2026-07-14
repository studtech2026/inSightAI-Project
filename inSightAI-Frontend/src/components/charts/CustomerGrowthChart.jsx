import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import ChartContainer from "./ChartContainer";

export default function CustomerGrowthChart({
  title = "Customer Growth",
  subtitle = "Monthly customer acquisition",
  data = [],
}) {
  return (
    <ChartContainer
      title={title}
      subtitle={subtitle}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="customerGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="var(--primary)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--primary)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="var(--border)"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            stroke="var(--text-secondary)"
            tick={{
              fill: "var(--text-secondary)",
            }}
          />

          <YAxis
            stroke="var(--text-secondary)"
            tick={{
              fill: "var(--text-secondary)",
            }}
          />

          <Tooltip
            contentStyle={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              color: "var(--text)",
            }}
            labelStyle={{
              color: "var(--text)",
            }}
          />

          <Area
            type="monotone"
            dataKey="customers"
            stroke="var(--primary)"
            strokeWidth={3}
            fill="url(#customerGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}