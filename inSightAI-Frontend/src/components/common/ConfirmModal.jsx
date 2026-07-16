import Modal from "./Modal";
import PrimaryButton from "./PrimaryButton";

export default function ConfirmModal({
  open,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "red",
  onClose,
  onConfirm,
}) {
  const confirmClasses = {
    red: "bg-red-600 hover:bg-red-700",
    violet: "bg-violet-600 hover:bg-violet-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <>
          <PrimaryButton
            onClick={onClose}
            className="bg-slate-600 hover:bg-slate-700"
          >
            {cancelText}
          </PrimaryButton>

          <PrimaryButton
            onClick={onConfirm}
            className={
              confirmClasses[confirmColor] ||
              confirmClasses.red
            }
          >
            {confirmText}
          </PrimaryButton>
        </>
      }
    >
      <p className="text-secondary">
        {message}
      </p>
    </Modal>
  );
}