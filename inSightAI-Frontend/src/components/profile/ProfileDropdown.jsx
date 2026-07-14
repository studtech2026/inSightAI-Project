import { useState } from "react";
import { ChevronDown, UserCircle } from "lucide-react";

import { getCurrentUser } from "../../utils/auth";
import ProfileMenu from "./ProfileMenu";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  const user = getCurrentUser();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-3
          rounded-xl
          px-3
          py-2
          transition
          hover:bg-card-hover
        "
      >
        <UserCircle
          size={38}
          className="text-violet-500 shrink-0"
        />

        {/* Hide on small mobile */}
        <div className="hidden sm:block text-left">
          <p className="text-main text-sm font-semibold">
            {user?.name}
          </p>

          <p className="text-xs text-secondary">
            {user?.role}
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`text-secondary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ProfileMenu
          closeMenu={() => setOpen(false)}
        />
      )}
    </div>
  );
}