import Card from "../common/Card";
import Skeleton from "../common/Skeleton";

export default function StatCardSkeleton() {
  return (
    <Card hover={false}>
      <Skeleton className="h-4 w-28" />

      <Skeleton className="mt-5 h-10 w-36" />

      <Skeleton className="mt-5 h-4 w-20" />
    </Card>
  );
}