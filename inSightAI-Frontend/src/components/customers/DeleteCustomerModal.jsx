import Modal from "../common/Modal";
import PrimaryButton from "../common/PrimaryButton";

export default function DeleteCustomerModal({
  open,
  onClose,
  onDelete,
}) {
  return (
    <Modal
      open={open}
      title="Delete Customer"
      onClose={onClose}
      footer={
        <>
          <button
            onClick={onClose}
            className="rounded-xl border border-app px-4 py-2"
          >
            Cancel
          </button>

          <PrimaryButton
            className="bg-red-600 hover:bg-red-500"
            onClick={onDelete}
          >
            Delete
          </PrimaryButton>
        </>
      }
    >
      <p className="text-secondary">
        Are you sure you want to delete this customer?
      </p>
    </Modal>
  );
}