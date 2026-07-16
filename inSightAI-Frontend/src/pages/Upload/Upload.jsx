// import { UploadCloud, FileSpreadsheet } from "lucide-react";

// import PageHeader from "../../components/common/PageHeader";
// import PrimaryButton from "../../components/common/PrimaryButton";
// import PageTransition from "../../components/common/PageTransition";
// import Card from "../../components/common/Card";

// const supportedFiles = [
//   {
//     title: "Sales Data",
//     description: "Monthly sales reports in CSV format.",
//     color: "text-green-500",
//   },
//   {
//     title: "Customer Data",
//     description: "Customer purchase history and details.",
//     color: "text-blue-500",
//   },
//   {
//     title: "Inventory",
//     description: "Current stock and warehouse information.",
//     color: "text-yellow-500",
//   },
//   {
//     title: "Expenses",
//     description: "Expense sheets and financial reports.",
//     color: "text-red-500",
//   },
// ];

// export default function Upload() {
//   return (
//     <PageTransition>
//       <PageHeader
//         title="Upload Dataset"
//         subtitle="Upload CSV or Excel files to analyze your business data."
//         action={<PrimaryButton>Upload File</PrimaryButton>}
//       />

//       {/* Upload Area */}

//       <Card hover={false}>
//         <div
//           className="
//             rounded-2xl
//             border-2
//             border-dashed
//             border-app
//             bg-surface
//             p-12
//             text-center
//             transition
//             hover:border-violet-500
//           "
//         >
//           <UploadCloud size={60} className="mx-auto mb-5 text-violet-500" />

//           <h2 className="text-2xl font-semibold text-main">
//             Drag & Drop Files
//           </h2>

//           <p className="mt-3 text-secondary">
//             CSV, XLSX and Excel files are supported.
//           </p>

//           <div className="mt-8">
//             <PrimaryButton>Browse Files</PrimaryButton>
//           </div>
//         </div>
//       </Card>

//       {/* Supported Files */}

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
//         {supportedFiles.map((file) => (
//           <Card key={file.title} className="hover:border-violet-500">
//             <FileSpreadsheet size={36} className={`mb-4 ${file.color}`} />

//             <h3 className="font-semibold text-main">{file.title}</h3>

//             <p className="mt-2 text-sm text-secondary">{file.description}</p>
//           </Card>
//         ))}
//       </div>
//     </PageTransition>
//   );
// }

import { useEffect, useState } from "react";
import { FileSpreadsheet } from "lucide-react";

import PageHeader from "../../components/common/PageHeader";
import PrimaryButton from "../../components/common/PrimaryButton";
import PageTransition from "../../components/common/PageTransition";
import Card from "../../components/common/Card";

import FileUpload from "../../components/upload/FileUpload";
import UploadHistory from "../../components/upload/UploadHistory";

import uploadService from "../../services/uploadService";

import { showSuccess, showError } from "../../utils/toast";

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
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUploads = async () => {
    try {
      const response = await uploadService.getUploads();

      console.log("Uploads:", response.data);

      setUploads([...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUploads();
  }, []);

  const handleUpload = async (file) => {
    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await uploadService.uploadFile(formData);

      showSuccess(response.message);

      await loadUploads();
    } catch (error) {
      showError(error.response?.data?.message || "Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await uploadService.deleteUpload(id);

      showSuccess(response.message);

      await loadUploads();
    } catch (error) {
      showError(error.response?.data?.message || "Delete failed.");
    }
  };

  return (
    <PageTransition>
      <PageHeader
        title="Upload Dataset"
        subtitle="Upload CSV or Excel files to analyze your business data."
        action={<PrimaryButton loading={loading}>Upload File</PrimaryButton>}
      />

      {/* Upload */}

      <Card hover={false}>
        <FileUpload onSelect={handleUpload} />
      </Card>

      {/* Upload History */}

      <UploadHistory uploads={uploads} onDelete={handleDelete} />

      {/* Supported */}

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
