import React from "react";
import { dashboardStats } from "../../data/dashboardStats";
import StatCard from "../../components/dashboard/StatCard";
import RevenueChart from "../../components/charts/RevenueChart";
import AIInsights from "../../components/charts/AIInsights";
import BusinessHealth from "../../components/dashboard/BusinessHealth";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";
import { revenueData } from "../../data/chartData";
import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";


export default function Dashboard() {
  return (
    <PageTransition>
      <PageHeader
        title="Dashboard"
        subtitle="Monitor your business performance with real-time insights."
      />

      {/* KPI */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {dashboardStats.map((item) => (
          <StatCard key={item.id} {...item} />
        ))}
      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart data={revenueData} />
        </div>

        <AIInsights />
      </div>

      {/* Bottom */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BusinessHealth />

        <RecentActivity />
      </div>

      {/* AI Quick Actions */}

      <QuickActions />
    </PageTransition>
  );
}
