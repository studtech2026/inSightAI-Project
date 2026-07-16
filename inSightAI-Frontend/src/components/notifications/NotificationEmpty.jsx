import { Bell } from "lucide-react";

import EmptyState from "../common/EmptyState";

export default function NotificationEmpty() {
  return (
    <EmptyState
      icon={Bell}
      title="No Notifications"
      description="You're all caught up. New business activities will appear here."
    />
  );
}