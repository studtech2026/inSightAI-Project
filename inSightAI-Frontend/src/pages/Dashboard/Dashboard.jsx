import React from "react";
import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";
import StatCard from "../../components/dashboard/StatCard";
import StatCardSkeleton from "../../components/dashboard/StatCardSkeleton";
import RevenueChart from "../../components/charts/RevenueChart";
import AIInsights from "../../components/charts/AIInsights";
import BusinessHealth from "../../components/dashboard/BusinessHealth";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";
import useDashboard from "../../hooks/useDashboard";
import { revenueData } from "../../data/chartData";
import { dashboardStats } from "../../data/dashboardStats";

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

      {/* KPI */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <StatCardSkeleton key={index} />
            ))
          : stats.map((item) => <StatCard key={item.id} {...item} />)}
      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart
            data={dashboard ? dashboard.revenueChart : revenueData}
          />
        </div>

        <AIInsights />
      </div>

      {/* Bottom */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BusinessHealth health={dashboard?.businessHealth} />

        <RecentActivity activities={dashboard?.recentActivity} />
      </div>

      {/* Quick Actions */}

      <QuickActions />
    </PageTransition>
  );
}
