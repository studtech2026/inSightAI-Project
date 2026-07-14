import Card from "../common/Card";

export default function ChartContainer({
  title,
  subtitle,
  height = "420px",
  children,
}) {
  return (
    <Card
      hover={false}
      className="flex flex-col"
      style={{ height }}
    >
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-xl font-semibold text-main">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-secondary">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="flex-1">
        {children}
      </div>
    </Card>
  );
}