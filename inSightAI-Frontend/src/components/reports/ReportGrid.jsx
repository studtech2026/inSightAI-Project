import ReportCard from "./ReportCard";

export default function ReportGrid({
  stats,
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <ReportCard
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}