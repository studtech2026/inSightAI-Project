import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

export default function TableRow({
  row,
  columns,
}) {
  return (
    <tr
      className="
        border-b
        border-app
        transition
        hover:bg-card-hover
      "
    >
      {columns.map((column) => {
        if (column.type === "status") {
          return (
            <td
              key={column.key}
              className="
                px-4
                md:px-5
                py-4
                whitespace-nowrap
                text-main
              "
            >
              <StatusBadge status={row[column.key]} />
            </td>
          );
        }

        if (column.type === "actions") {
          return (
            <td
              key={column.key}
              className="
                px-4
                md:px-5
                py-4
                whitespace-nowrap
              "
            >
              <ActionButtons />
            </td>
          );
        }

        return (
          <td
            key={column.key}
            className="
              px-4
              md:px-5
              py-4
              whitespace-nowrap
              text-main
            "
          >
            {row[column.key]}
          </td>
        );
      })}
    </tr>
  );
}