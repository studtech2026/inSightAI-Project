export default function TableHeader({ columns }) {
  return (
    <thead
      className="
        bg-surface
        border-b
        border-app
      "
    >
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            className="
              px-4
              md:px-5
              py-4
              text-left
              text-sm
              font-semibold
              text-main
              whitespace-nowrap
              tracking-wide
            "
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}