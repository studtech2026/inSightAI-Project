const filters = [
  "All",
  "Unread",
  "Success",
  "Warning",
  "Error",
  "AI",
  "Report",
];

export default function NotificationFilters({
  active,
  onChange,
}) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() =>
            onChange(filter)
          }
          className={`
            rounded-full
            border
            px-4
            py-2
            text-sm
            transition
            ${
              active === filter
                ? "border-violet-600 bg-violet-600 text-white"
                : "border-app bg-card text-main hover:bg-card-hover"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}