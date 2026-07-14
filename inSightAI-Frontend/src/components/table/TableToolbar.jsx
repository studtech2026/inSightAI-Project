import { Search, Download, Filter, Plus } from "lucide-react";

import PrimaryButton from "../common/PrimaryButton";

export default function TableToolbar({
  searchPlaceholder = "Search...",
  addButtonText = "Add",
  onSearch,
  onAdd,
  onExport,
  onFilter,
}) {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-secondary
          "
        />

        <input
          type="text"
          placeholder={searchPlaceholder}
          onChange={(e) => onSearch?.(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-app
            bg-surface
            py-3
            pl-11
            pr-4
            text-main
            placeholder:text-secondary
            outline-none
            transition
            focus:border-violet-500
          "
        />
      </div>

      {/* Actions */}
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
          lg:justify-end
        "
      >
        <button
          onClick={onFilter}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-app
            bg-card
            px-4
            py-2.5
            text-main
            transition
            hover:bg-card-hover
          "
        >
          <Filter size={18} />
          Filter
        </button>

        <button
          onClick={onExport}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-app
            bg-card
            px-4
            py-2.5
            text-main
            transition
            hover:bg-card-hover
          "
        >
          <Download size={18} />
          Export
        </button>

        <PrimaryButton onClick={onAdd}>
          <Plus size={18} />
          {addButtonText}
        </PrimaryButton>
      </div>
    </div>
  );
}