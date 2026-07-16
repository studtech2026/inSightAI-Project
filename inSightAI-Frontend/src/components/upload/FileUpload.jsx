import { useRef } from "react";
import { UploadCloud } from "lucide-react";

import PrimaryButton from "../common/PrimaryButton";

export default function FileUpload({ onSelect }) {
  const inputRef = useRef();

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".csv,.xlsx,.xls"
        hidden
        onChange={(e) => {
          const file = e.target.files[0];

          if (file) {
            onSelect(file);
          }

          // Reset input so the same file can be selected again
          e.target.value = "";
        }}
      />

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

        <h2 className="text-2xl font-semibold text-main">Drag & Drop Files</h2>

        <p className="mt-3 text-secondary">
          CSV, XLSX and Excel files are supported.
        </p>

        <div className="mt-8">
          <PrimaryButton onClick={() => inputRef.current.click()}>
            Browse Files
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
