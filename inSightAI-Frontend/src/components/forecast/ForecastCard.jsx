import Card from "../common/Card";

export default function ForecastCard({
  title,
  value,
  change,
  color,
}) {
  return (
    <Card className="transition-all duration-300 hover:border-violet-500">
      <p className="text-sm text-secondary">
        {title}
      </p>

      <h2 className={`mt-3 text-3xl font-bold ${color}`}>
        {value}
      </h2>

      <p className="mt-2 text-sm text-secondary">
        {change}
      </p>
    </Card>
  );
}