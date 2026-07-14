import React from "react";
import { Search, Bell, Menu } from "lucide-react";

import ProfileDropdown from "../profile/ProfileDropdown";
import ThemeToggle from "../common/ThemeToggle";

import useGlobalSearch from "../../hooks/useGlobalSearch";
import SearchResults from "../search/SearchResults";
import useSidebar from "../../hooks/useSidebar";
import NotificationBell from "../notifications/NotificationBell";

export default function TopNavbar() {
  const { query, setQuery } = useGlobalSearch();
  const { toggleSidebar } = useSidebar();

  return (
    <header
      className="
        sticky
        top-0
        z-30
        h-[72px]
        border-b
        border-app
        bg-card
        shadow-app
        flex
        items-center
        justify-between
        px-4
        md:px-8
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Mobile Menu */}
        <button
          onClick={toggleSidebar}
          className="
            lg:hidden
            w-10
            h-10
            rounded-xl
            flex
            items-center
            justify-center
            hover:bg-card-hover
            transition
          "
        >
          <Menu size={22} className="text-main" />
        </button>

        {/* Search */}
        <div className="relative hidden lg:block w-full max-w-md">
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, customers..."
            className="
              w-full
              rounded-xl
              border
              border-app
              bg-surface
              py-3
              pl-11
              pr-4
              text-sm
              text-main
              placeholder:text-secondary
              outline-none
              transition
              focus:border-violet-500
            "
          />

          <SearchResults />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 md:gap-4 ml-4">
        {/* Theme */}
        <ThemeToggle />

        {/* Notification */}
        <NotificationBell />

        {/* Divider */}
        <div className="hidden md:block h-8 w-px bg-[var(--border)]" />

        {/* Profile */}
        <ProfileDropdown />
      </div>
    </header>
  );
}
