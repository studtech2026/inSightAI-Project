import { Download } from "lucide-react";

import Card from "../common/Card";

export default function RecentReports({
  reports,
}) {
  return (
    <Card hover={false}>
      <h2 className="mb-6 text-xl font-semibold text-main">
        Recent Reports
      </h2>

      <div className="space-y-4">
        {reports.map((report, index) => (
          <div
            key={report.id}
            className={`
              flex
              items-center
              justify-between
              pb-4
              ${
                index !== reports.length - 1
                  ? "border-b border-app"
                  : ""
              }
            `}
          >
            <div>
              <h3 className="font-medium text-main">
                {report.name}
              </h3>

              <p className="text-sm text-secondary">
                {report.type} • {report.created}
              </p>
            </div>

            <button
              className="
                rounded-lg
                p-2
                text-violet-500
                transition
                hover:bg-violet-500/10
              "
            >
              <Download size={18} />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}