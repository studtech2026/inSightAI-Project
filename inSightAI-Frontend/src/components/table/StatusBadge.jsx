export default function StatusBadge({ status }) {
  const normalizedStatus = status?.toLowerCase() || "";

  const styles = {
    active:
      "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",

    inactive:
      "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400",

    pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400",

    completed:
      "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",

    processing:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",

    low:
      "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400",

    "out of stock":
      "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        capitalize
        ${
          styles[normalizedStatus] ||
          "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
        }
      `}
    >
      {status}
    </span>
  );
}