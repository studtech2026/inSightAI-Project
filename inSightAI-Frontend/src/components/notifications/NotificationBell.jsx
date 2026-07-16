import { useEffect, useRef } from "react";
import { Bell } from "lucide-react";

import NotificationDropdown from "./NotificationDropdown";
import useNotifications from "../../hooks/useNotifications";

export default function NotificationBell() {
  const {
    open,
    notifications,
    unreadCount,
    toggleDropdown,
    closeDropdown,
    markAllAsRead,
  } = useNotifications();

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeDropdown]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        aria-label="Notifications"
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-app
          bg-surface
          transition
          hover:bg-card-hover
        "
      >
        <Bell size={18} className="text-main" />

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              min-w-[20px]
              items-center
              justify-center
              rounded-full
              bg-red-500
              px-1
              text-[11px]
              font-semibold
              text-white
            "
          >
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 z-50">
          <NotificationDropdown
            notifications={notifications}
            onClose={closeDropdown}
          />

          <div
            className="
              rounded-b-2xl
              border-x
              border-b
              border-app
              bg-card
              px-5
              py-3
            "
          >
            <button
              onClick={markAllAsRead}
              className="
                text-sm
                text-violet-500
                transition
                hover:text-violet-400
              "
            >
              Mark all as read
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
