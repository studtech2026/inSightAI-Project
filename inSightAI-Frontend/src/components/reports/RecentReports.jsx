import { Download, Trash2, FileText } from "lucide-react";

import Card from "../common/Card";
import reportService from "../../services/reportService";
import { showSuccess, showError } from "../../utils/toast";

export default function RecentReports({ reports = [], onDelete }) {
  const handleDownload = async (report) => {
    try {
      const blob = await reportService.downloadReport(report.reportType);

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = `${report.reportName}.${report.reportType}`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      showSuccess("Report downloaded successfully.");
    } catch (error) {
      showError("Download failed.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await reportService.deleteReport(id);

      showSuccess(response.message);

      onDelete();
    } catch (error) {
      showError(error.response?.data?.message || "Delete failed.");
    }
  };

  return (
    <Card hover={false}>
      <h2 className="mb-6 text-xl font-semibold text-main">Recent Reports</h2>

      {reports.length === 0 ? (
        <div className="py-10 text-center">
          <FileText size={50} className="mx-auto text-secondary opacity-50" />

          <p className="mt-4 text-secondary">No reports generated yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((report, index) => (
            <div
              key={report._id}
              className={`
                flex
                items-center
                justify-between
                pb-4
                ${index !== reports.length - 1 ? "border-b border-app" : ""}
              `}
            >
              <div>
                <input
                  defaultValue={report.reportName}
                  onBlur={async (e) => {
                    if (e.target.value === report.reportName) return;

                    try {
                      const response = await reportService.updateReport(
                        report._id,
                        {
                          reportName: e.target.value,
                        },
                      );

                      showSuccess(response.message);

                      onDelete();
                    } catch (error) {
                      showError("Update failed.");
                    }
                  }}
                  className="
    bg-transparent
    font-medium
    text-main
    outline-none
    border-b
    border-transparent
    focus:border-violet-500
  "
                />

                <p className="text-sm text-secondary">
                  {report.reportType.toUpperCase()} •{" "}
                  {new Date(report.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload(report)}
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

                <button
                  onClick={() => handleDelete(report._id)}
                  className="
      rounded-lg
      p-2
      text-red-500
      transition
      hover:bg-red-500/10
    "
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
