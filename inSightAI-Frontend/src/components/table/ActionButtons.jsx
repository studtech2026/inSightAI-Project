import { Eye, Pencil, Trash2 } from "lucide-react";

export default function ActionButtons({
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onView}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-app
          hover:bg-blue-500/10
          hover:text-blue-500
        "
      >
        <Eye size={16} />
      </button>

      <button
        onClick={onEdit}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-app
          hover:bg-violet-500/10
          hover:text-violet-500
        "
      >
        <Pencil size={16} />
      </button>

      <button
        onClick={onDelete}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-app
          hover:bg-red-500/10
          hover:text-red-500"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
