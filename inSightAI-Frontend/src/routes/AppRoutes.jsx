import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Analytics from "../pages/Analytics/Analytics";
import Upload from "../pages/Upload/Upload";
import Forecast from "../pages/Forecast/Forecast";
import Products from "../pages/Products/Products";
import Customers from "../pages/Customers/Customers";
import Inventory from "../pages/Inventory/Inventory";
import Expenses from "../pages/Expenses/Expenses";
import AIAssistant from "../pages/AIAssistant/AIAssistant";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import ProtectedRoute from "./ProtectedRoute";
import Notifications from "../pages/Notifications/Notifications";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/assistant" element={<AIAssistant />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
