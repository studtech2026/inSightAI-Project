import { Eye, Pencil, Trash2 } from "lucide-react";

export default function ActionButtons({
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onView}
        title="View"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-app
          bg-card
          text-secondary
          transition
          hover:bg-card-hover
          hover:text-blue-500
        "
      >
        <Eye size={16} />
      </button>

      <button
        onClick={onEdit}
        title="Edit"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-app
          bg-card
          text-secondary
          transition
          hover:bg-card-hover
          hover:text-violet-500
        "
      >
        <Pencil size={16} />
      </button>

      <button
        onClick={onDelete}
        title="Delete"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-app
          bg-card
          text-secondary
          transition
          hover:bg-red-500/10
          hover:text-red-500
        "
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}