import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";

import StatCard from "../../components/dashboard/StatCard";
import StatCardSkeleton from "../../components/dashboard/StatCardSkeleton";
import BusinessHealth from "../../components/dashboard/BusinessHealth";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";
import LowStockWidget from "../../components/dashboard/LowStockWidget";
import NotificationWidget from "../../components/dashboard/NotificationWidget";
import SmartInsight from "../../components/dashboard/SmartInsight";

import RevenueChart from "../../components/charts/RevenueChart";

import useDashboard from "../../hooks/useDashboard";

import { dashboardStats } from "../../data/dashboardStats";
import { revenueData } from "../../data/chartData";

export default function Dashboard() {
  const { dashboard, loading } = useDashboard();

  const stats = dashboard
    ? [
        {
          ...dashboardStats[0],
          value: `₹${dashboard.kpis.revenue.toLocaleString()}`,
        },
        {
          ...dashboardStats[1],
          value: `${dashboard.businessHealth.growth}%`,
        },
        {
          ...dashboardStats[2],
          value: dashboard.kpis.customers.toLocaleString(),
        },
        {
          ...dashboardStats[3],
          value: dashboard.kpis.orders.toLocaleString(),
        },
      ]
    : dashboardStats;

  return (
    <PageTransition>
      <PageHeader
        title="Dashboard"
        subtitle="Monitor your business performance with real-time insights."
      />

      {/* KPI Cards */}

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <StatCardSkeleton key={index} />
            ))
          : stats.map((item) => (
              <StatCard key={item.id} {...item} />
            ))}
      </div>

      {/* Revenue + AI */}

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueChart
            data={
              dashboard
                ? dashboard.revenueChart
                : revenueData
            }
          />
        </div>

        <SmartInsight
          insights={dashboard?.smartInsight || []}
        />
      </div>

      {/* Business Health + Low Stock */}

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BusinessHealth
          health={dashboard?.businessHealth}
        />

        <LowStockWidget
          products={dashboard?.lowStock || []}
        />
      </div>

      {/* Recent Activity + Notifications */}

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentActivity
          activities={
            dashboard?.recentActivity || []
          }
        />

        <NotificationWidget
          notifications={
            dashboard?.notifications || []
          }
        />
      </div>

      {/* Quick Actions */}

      <QuickActions />
    </PageTransition>
  );
}