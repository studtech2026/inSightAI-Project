import Modal from "./Modal";

export default function ViewModal({ open, title, data, onClose }) {
  if (!data) return null;

  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
      footer={
        <button
          onClick={onClose}
          className="
            rounded-xl
            border
            border-app
            px-5
            py-2
            hover:bg-card-hover
          "
        >
          Close
        </button>
      }
    >
      <div className="space-y-4">
        {Object.entries(data).map(([key, value]) => {
          if (key === "_id" || key === "__v" || key === "userId") return null;

          return (
            <div
              key={key}
              className="
                flex
                items-center
                justify-between
                border-b
                border-app
                pb-3
              "
            >
              <span className="font-medium capitalize text-secondary">
                {key.replace(/([A-Z])/g, " $1")}
              </span>

              <span className="text-main text-right">{String(value)}</span>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
