import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import ChartContainer from "./ChartContainer";

export default function RevenueChart({
  title = "Business Overview",
  subtitle = "Revenue trend over the last six months",
  data = [],
  dataKey = "revenue",
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
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            stroke="var(--border)"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            stroke="var(--text-secondary)"
            tick={{
              fill: "var(--text-secondary)",
              fontSize: 12,
            }}
            axisLine={{
              stroke: "var(--border)",
            }}
            tickLine={{
              stroke: "var(--border)",
            }}
          />

          <YAxis
            stroke="var(--text-secondary)"
            tick={{
              fill: "var(--text-secondary)",
              fontSize: 12,
            }}
            axisLine={{
              stroke: "var(--border)",
            }}
            tickLine={{
              stroke: "var(--border)",
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

          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="var(--primary)"
            strokeWidth={3}
            dot={{
              r: 5,
              fill: "var(--primary)",
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 7,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}