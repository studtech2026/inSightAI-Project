import {
  IndianRupee,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export const dashboardStats = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹12,45,000",
    change: "+12.4%",
    icon: IndianRupee,
    color: "text-green-400",
  },
  {
    id: 2,
    title: "Net Profit",
    value: "₹3,28,000",
    change: "+8.2%",
    icon: TrendingUp,
    color: "text-blue-400",
  },
  {
    id: 3,
    title: "Customers",
    value: "2,450",
    change: "+15%",
    icon: Users,
    color: "text-violet-400",
  },
  {
    id: 4,
    title: "Expenses",
    value: "₹1,82,000",
    change: "-4%",
    icon: Wallet,
    color: "text-red-400",
  },
];