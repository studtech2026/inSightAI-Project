export default function Modal({
  open,
  title,
  children,
  onClose,
  footer,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-app bg-card shadow-2xl">

        <div className="flex items-center justify-between border-b border-app p-5">
          <h2 className="text-xl font-semibold text-main">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-secondary hover:text-main"
          >
            ×
          </button>
        </div>

        <div className="p-5">
          {children}
        </div>

        {footer && (
          <div className="flex justify-end gap-3 border-t border-app p-5">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}