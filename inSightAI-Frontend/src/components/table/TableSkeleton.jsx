import Card from "../common/Card";
import Skeleton from "../common/Skeleton";

export default function TableSkeleton() {
  return (
    <Card hover={false}>
      <div className="space-y-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            className="h-12 w-full"
          />
        ))}
      </div>
    </Card>
  );
}