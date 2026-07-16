import {
  FileText,
  FileSpreadsheet,
  FileDown,
} from "lucide-react";

import { showSuccess, showError } from "../../utils/toast";
import exportService from "../../services/exportService";

export default function ExportActions() {
  const downloadFile = (blob, filename) => {
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
  };

  const handleExport = async (type) => {
    try {
      let blob;

      if (type === "pdf") {
        blob = await exportService.exportPDF();
        downloadFile(blob, "InsightAI_Report.pdf");
      }

      if (type === "excel") {
        blob = await exportService.exportExcel();
        downloadFile(blob, "InsightAI_Report.xlsx");
      }

      if (type === "csv") {
        blob = await exportService.exportCSV();
        downloadFile(blob, "InsightAI_Report.csv");
      }

      showSuccess(`${type.toUpperCase()} exported successfully.`);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Export failed."
      );
    }
  };

  const buttons = [
    {
      icon: FileText,
      label: "Export PDF",
      className: "bg-red-600 hover:bg-red-500",
      type: "pdf",
    },
    {
      icon: FileSpreadsheet,
      label: "Export Excel",
      className: "bg-green-600 hover:bg-green-500",
      type: "excel",
    },
    {
      icon: FileDown,
      label: "Export CSV",
      className: "bg-blue-600 hover:bg-blue-500",
      type: "csv",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {buttons.map((button) => {
        const Icon = button.icon;

        return (
          <button
            key={button.label}
            onClick={() => handleExport(button.type)}
            className={`
              flex
              items-center
              gap-2
              rounded-xl
              px-5
              py-3
              text-white
              transition
              ${button.className}
            `}
          >
            <Icon size={18} />
            {button.label}
          </button>
        );
      })}
    </div>
  );
}