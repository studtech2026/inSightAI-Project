import { Eye, Trash2, FileText } from "lucide-react";

import Card from "../common/Card";
import PrimaryButton from "../common/PrimaryButton";

import { useState } from "react";
import FileDetailsModal from "./FileDetailsModal";

export default function UploadHistory({ uploads = [], onDelete }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);

  const handleView = (file) => {
    setSelectedFile(file);
    setOpen(true);
  };

  return (
    <Card hover={false}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-main">Upload History</h2>

          <p className="text-secondary text-sm">Recently uploaded datasets.</p>
        </div>
      </div>

      {uploads.length === 0 ? (
        <div className="py-12 text-center">
          <FileText size={60} className="mx-auto text-secondary opacity-50" />

          <p className="mt-4 text-secondary">No uploaded files found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-app">
                <th className="py-3 text-left text-main">File Name</th>

                <th className="py-3 text-left text-main">Type</th>

                <th className="py-3 text-left text-main">Size</th>

                <th className="py-3 text-left text-main">Uploaded</th>

                <th className="py-3 text-center text-main">Actions</th>
              </tr>
            </thead>

            <tbody>
              {uploads.map((file) => (
                <tr
                  key={file._id}
                  className="border-b border-app hover:bg-surface transition"
                >
                  <td className="py-4 text-main">{file.originalName}</td>

                  <td className="py-4 text-secondary">{file.fileType}</td>

                  <td className="py-4 text-secondary">
                    {(file.fileSize / 1024).toFixed(2)} KB
                  </td>

                  <td className="py-4 text-secondary">
                    {new Date(file.createdAt).toLocaleDateString()}
                  </td>

                  <td className="py-4">
                    <div className="flex justify-center gap-2">
                      <PrimaryButton onClick={() => handleView(file)}>
                        <Eye size={18} />
                      </PrimaryButton>

                      <PrimaryButton onClick={() => onDelete(file._id)}>
                        <Trash2 size={18} />
                      </PrimaryButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <FileDetailsModal
        open={open}
        file={selectedFile}
        onClose={() => setOpen(false)}
      />
    </Card>
  );
}
