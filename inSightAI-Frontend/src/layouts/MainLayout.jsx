import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-app text-main">
      <Sidebar />

      <div className="flex flex-1 flex-col min-w-0">
        <TopNavbar />

        <main className="flex-1 overflow-x-auto p-4 md:p-6 bg-app">
          <Outlet />
        </main>
      </div>
    </div>
  );
}