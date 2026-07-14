import Card from "../common/Card";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table({
  columns = [],
  data = [],
  className = "",
}) {
  return (
    <Card
      hover={false}
      className={`overflow-hidden p-0 ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <TableHeader columns={columns} />

          <tbody>
            {data.length > 0 ? (
              data.map((row) => (
                <TableRow
                  key={row.id}
                  row={row}
                  columns={columns}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-16 text-center"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="text-5xl">
                      📭
                    </div>

                    <h3 className="text-lg font-semibold text-main">
                      No Records Found
                    </h3>

                    <p className="text-secondary">
                      There is currently no data available.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}