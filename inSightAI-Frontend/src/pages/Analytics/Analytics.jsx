import RevenueChart from "../../components/charts/RevenueChart";
import SalesCategoryChart from "../../components/charts/SalesCategoryChart";
import ExpensePieChart from "../../components/charts/ExpensePieChart";
import CustomerGrowthChart from "../../components/charts/CustomerGrowthChart";
import AIInsights from "../../components/charts/AIInsights";
import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";

import {
  revenueTrend,
  salesCategory,
  expenseData,
  customerGrowth,
} from "../../data/analyticsData";

export default function Analytics() {
  return (
    <PageTransition>
      <PageHeader
        title="Analytics"
        subtitle="Analyze revenue, expenses, customers, and business trends."
      />
      {/* Header */}

      

      {/* First Row */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueChart
          title="Revenue Trend"
          subtitle="Monthly revenue performance"
          data={revenueTrend}
        />

        <SalesCategoryChart data={salesCategory} />
      </div>

      {/* Second Row */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ExpensePieChart data={expenseData} />

        <CustomerGrowthChart data={customerGrowth} />
      </div>

      {/* AI Insights */}

      <AIInsights />
    </PageTransition>
  );
}
