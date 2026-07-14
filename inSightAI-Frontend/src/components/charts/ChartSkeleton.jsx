import Card from "../common/Card";
import Skeleton from "../common/Skeleton";

export default function ChartSkeleton() {
  return (
    <Card hover={false}>
      <Skeleton className="h-6 w-48" />

      <Skeleton className="mt-3 h-4 w-64" />

      <Skeleton className="mt-8 h-[280px] w-full rounded-2xl" />
    </Card>
  );
}