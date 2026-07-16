import { useEffect, useState } from "react";

import RevenueChart from "../../components/charts/RevenueChart";
import SalesCategoryChart from "../../components/charts/SalesCategoryChart";
import ExpensePieChart from "../../components/charts/ExpensePieChart";
import CustomerGrowthChart from "../../components/charts/CustomerGrowthChart";
import AIInsights from "../../components/charts/AIInsights";

import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";

import analyticsService from "../../services/analyticsService";

import {
  revenueTrend,
  salesCategory,
  expenseData,
  customerGrowth,
} from "../../data/analyticsData";

export default function Analytics() {
  const [revenue, setRevenue] = useState([]);
  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const [
        revenueRes,
        salesRes,
        expenseRes,
        customerRes,
        insightRes,
      ] = await Promise.all([
        analyticsService.getRevenue(),
        analyticsService.getSalesCategory(),
        analyticsService.getExpenseBreakdown(),
        analyticsService.getCustomerGrowth(),
        analyticsService.getAIInsights(),
      ]);

      setRevenue(revenueRes.data);
      setSales(salesRes.data);
      setExpenses(expenseRes.data);
      setCustomers(customerRes.data);
      setInsights(insightRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageTransition>
      <PageHeader
        title="Analytics"
        subtitle="Analyze revenue, expenses, customers, and business trends."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueChart
          title="Revenue Trend"
          subtitle="Monthly revenue performance"
          data={revenue.length ? revenue : revenueTrend}
        />

        <SalesCategoryChart
          data={sales.length ? sales : salesCategory}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ExpensePieChart
          data={expenses.length ? expenses : expenseData}
        />

        <CustomerGrowthChart
          data={
            customers.length
              ? customers
              : customerGrowth
          }
        />
      </div>

      <AIInsights
        insights={insights}
      />
    </PageTransition>
  );
}