import React from "react";
import { NavLink } from "react-router-dom";
import { BrainCircuit } from "lucide-react";

import { sidebarLinks } from "../../data/sidebarLinks";
import useSidebar from "../../hooks/useSidebar";

export default function Sidebar() {
  const { open, closeSidebar } = useSidebar();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0 left-0
          z-50
          h-screen
          w-64
          flex
          flex-col
          border-r
          border-app
          bg-card
          shadow-app
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-app px-5 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 shrink-0">
            <BrainCircuit className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-main text-lg font-bold">
              InsightAI
            </h1>

            <p className="text-xs text-secondary">
              AI Business Intelligence
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                      : "text-secondary hover:bg-card-hover hover:text-main"
                  }
                `
                }
              >
                <Icon className="h-5 w-5 shrink-0" />

                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* AI Card */}
        <div className="px-3 pb-3">
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 p-4 shadow-lg">
            <BrainCircuit className="mb-3 h-6 w-6 text-white" />

            <h3 className="font-semibold text-white">
              AI Assistant
            </h3>

            <p className="mt-1 mb-4 text-xs text-violet-100">
              Ask anything about your business data.
            </p>

            <NavLink
              to="/assistant"
              onClick={closeSidebar}
              className="block w-full rounded-lg bg-white py-2 text-center text-sm font-semibold text-violet-700 transition hover:bg-violet-100"
            >
              Open AI Assistant
            </NavLink>
          </div>
        </div>

        {/* Storage */}
        <div className="border-t border-app px-5 py-4">
          <div className="mb-2 flex justify-between text-xs text-secondary">
            <span>Storage Used</span>

            <span>24%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
              style={{
                width: "24%",
              }}
            />
          </div>

          <p className="mt-2 text-xs text-secondary">
            2.45 GB / 10 GB
          </p>
        </div>
      </aside>
    </>
  );
}