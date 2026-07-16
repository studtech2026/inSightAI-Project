import {
  LayoutDashboard,
  BarChart3,
  Upload,
  TrendingUp,
  Package,
  Users,
  Boxes,
  Wallet,
  Bot,
  FileText,
  Settings,
  Bell,
} from "lucide-react";

export const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Upload Data",
    path: "/upload",
    icon: Upload,
  },
  {
    title: "Forecast",
    path: "/forecast",
    icon: TrendingUp,
  },
  {
    title: "Products",
    path: "/products",
    icon: Package,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: Boxes,
  },
  {
    title: "Expenses",
    path: "/expenses",
    icon: Wallet,
  },
  {
    title: "AI Assistant",
    path: "/assistant",
    icon: Bot,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: FileText,
  },
   {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
