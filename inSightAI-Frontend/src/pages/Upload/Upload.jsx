import { UploadCloud, FileSpreadsheet } from "lucide-react";

import PageHeader from "../../components/common/PageHeader";
import PrimaryButton from "../../components/common/PrimaryButton";
import PageTransition from "../../components/common/PageTransition";
import Card from "../../components/common/Card";

const supportedFiles = [
  {
    title: "Sales Data",
    description: "Monthly sales reports in CSV format.",
    color: "text-green-500",
  },
  {
    title: "Customer Data",
    description: "Customer purchase history and details.",
    color: "text-blue-500",
  },
  {
    title: "Inventory",
    description: "Current stock and warehouse information.",
    color: "text-yellow-500",
  },
  {
    title: "Expenses",
    description: "Expense sheets and financial reports.",
    color: "text-red-500",
  },
];

export default function Upload() {
  return (
    <PageTransition>
      <PageHeader
        title="Upload Dataset"
        subtitle="Upload CSV or Excel files to analyze your business data."
        action={<PrimaryButton>Upload File</PrimaryButton>}
      />

      {/* Upload Area */}

      <Card hover={false}>
        <div
          className="
            rounded-2xl
            border-2
            border-dashed
            border-app
            bg-surface
            p-12
            text-center
            transition
            hover:border-violet-500
          "
        >
          <UploadCloud size={60} className="mx-auto mb-5 text-violet-500" />

          <h2 className="text-2xl font-semibold text-main">
            Drag & Drop Files
          </h2>

          <p className="mt-3 text-secondary">
            CSV, XLSX and Excel files are supported.
          </p>

          <div className="mt-8">
            <PrimaryButton>Browse Files</PrimaryButton>
          </div>
        </div>
      </Card>

      {/* Supported Files */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {supportedFiles.map((file) => (
          <Card key={file.title} className="hover:border-violet-500">
            <FileSpreadsheet size={36} className={`mb-4 ${file.color}`} />

            <h3 className="font-semibold text-main">{file.title}</h3>

            <p className="mt-2 text-sm text-secondary">{file.description}</p>
          </Card>
        ))}
      </div>
    </PageTransition>
  );
}
