import PrimaryButton from "../common/PrimaryButton";

export default function NotificationHeader({
  count,
  onMarkAll,
  onClearAll,
}) {
  return (
    <div
      className="
        mb-6
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-app
        bg-card
        p-5
      "
    >
      <div>
        <h2 className="text-lg font-semibold text-main">
          {count} Notification{count !== 1 && "s"}
        </h2>

        <p className="text-sm text-secondary">
          Manage your recent activities
        </p>
      </div>

      <div className="flex gap-3">
        <PrimaryButton onClick={onMarkAll}>
          Mark All Read
        </PrimaryButton>

        <PrimaryButton
          onClick={onClearAll}
          className="bg-red-600 hover:bg-red-700"
        >
          Clear All
        </PrimaryButton>
      </div>
    </div>
  );
}