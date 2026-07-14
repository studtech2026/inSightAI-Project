import {
  FileText,
  FileSpreadsheet,
  FileDown,
} from "lucide-react";

export default function ExportActions() {
  const buttons = [
    {
      icon: FileText,
      label: "Export PDF",
      className:
        "bg-red-600 hover:bg-red-500",
    },
    {
      icon: FileSpreadsheet,
      label: "Export Excel",
      className:
        "bg-green-600 hover:bg-green-500",
    },
    {
      icon: FileDown,
      label: "Export CSV",
      className:
        "bg-blue-600 hover:bg-blue-500",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {buttons.map((button) => {
        const Icon = button.icon;

        return (
          <button
            key={button.label}
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