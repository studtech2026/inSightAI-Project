import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import ChartContainer from "./ChartContainer";

export default function SalesCategoryChart({
  title = "Sales by Category",
  subtitle = "Category-wise sales performance",
  data = [],
}) {
  return (
    <ChartContainer
      title={title}
      subtitle={subtitle}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart data={data}>
          <CartesianGrid
            stroke="var(--border)"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="category"
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

          <Bar
            dataKey="sales"
            fill="var(--primary)"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}