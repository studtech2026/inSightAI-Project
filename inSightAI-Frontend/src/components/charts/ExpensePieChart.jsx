import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import ChartContainer from "./ChartContainer";

const COLORS = [
  "#8b5cf6",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

export default function ExpensePieChart({
  title = "Expense Breakdown",
  subtitle = "Distribution of monthly expenses",
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
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            dataKey="value"
            nameKey="name"
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

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

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}