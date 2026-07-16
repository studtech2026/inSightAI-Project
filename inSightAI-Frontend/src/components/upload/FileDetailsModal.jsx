import { X } from "lucide-react";

export default function FileDetailsModal({
  open,
  file,
  onClose,
}) {
  if (!open || !file) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-2xl bg-card border border-app p-6 shadow-xl">

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-main">
            File Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-surface transition"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mt-6 space-y-4">

          <div>
            <p className="text-secondary text-sm">
              File Name
            </p>

            <p className="text-main font-medium">
              {file.originalName}
            </p>
          </div>

          <div>
            <p className="text-secondary text-sm">
              File Type
            </p>

            <p className="text-main">
              {file.fileType}
            </p>
          </div>

          <div>
            <p className="text-secondary text-sm">
              File Size
            </p>

            <p className="text-main">
              {(file.fileSize / 1024).toFixed(2)} KB
            </p>
          </div>

          <div>
            <p className="text-secondary text-sm">
              Uploaded At
            </p>

            <p className="text-main">
              {new Date(file.createdAt).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-secondary text-sm">
              File ID
            </p>

            <p className="text-main break-all">
              {file._id}
            </p>
          </div>

        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-violet-600 px-5 py-2 text-white hover:bg-violet-700 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}