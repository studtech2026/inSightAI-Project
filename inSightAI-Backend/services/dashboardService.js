import Dashboard from "../models/Dashboard.js";
import Upload from "../models/Upload.js";
import ApiError from "../utils/ApiError.js";

class DashboardService {
  /**
   * Dashboard Overview
   */
  async getDashboard(userId) {
    let dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      dashboard = await Dashboard.create({
        userId,
        totalRevenue: 245000,
        totalCustomers: 128,
        totalOrders: 312,
        totalProducts: 56,

        monthlyRevenue: [
          { month: "Jan", revenue: 15000 },
          { month: "Feb", revenue: 22000 },
          { month: "Mar", revenue: 28000 },
          { month: "Apr", revenue: 34000 },
          { month: "May", revenue: 41000 },
          { month: "Jun", revenue: 52000 },
          { month: "Jul", revenue: 53000 },
        ],

        businessHealth: {
          score: 92,
          status: "Excellent",
          growth: 18,
        },

        salesCategory: [
          { category: "Electronics", sales: 420 },
          { category: "Fashion", sales: 310 },
          { category: "Groceries", sales: 270 },
          { category: "Furniture", sales: 180 },
        ],

        expenseBreakdown: [
          { name: "Marketing", value: 35 },
          { name: "Operations", value: 30 },
          { name: "Salaries", value: 25 },
          { name: "Other", value: 10 },
        ],

        customerGrowth: [
          { month: "Jan", customers: 1200 },
          { month: "Feb", customers: 1350 },
          { month: "Mar", customers: 1500 },
          { month: "Apr", customers: 1720 },
          { month: "May", customers: 2010 },
          { month: "Jun", customers: 2450 },
        ],

        aiInsights: [
          {
            title: "Revenue Increased",
            description: "Revenue increased by 12% compared to last month.",
            type: "success",
          },
          {
            title: "Inventory Alert",
            description: "Product X inventory is running low.",
            type: "warning",
          },
          {
            title: "AI Recommendation",
            description: "Increase marketing budget by 8% for maximum ROI.",
            type: "info",
          },
        ],
      });
    }

    const uploads = await Upload.countDocuments({ userId });

    return {
      kpis: {
        revenue: dashboard.totalRevenue,
        customers: dashboard.totalCustomers,
        orders: dashboard.totalOrders,
        products: dashboard.totalProducts,
        uploads,
      },

      revenueChart: dashboard.monthlyRevenue,

      businessHealth: dashboard.businessHealth,

      recentActivity: dashboard.recentActivity,
    };
  }

  /**
   * KPI Cards
   */
  async getKPIs(userId) {
    const dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      throw new ApiError(404, "Dashboard not found.");
    }

    const uploads = await Upload.countDocuments({ userId });

    return {
      revenue: dashboard.totalRevenue,
      customers: dashboard.totalCustomers,
      orders: dashboard.totalOrders,
      products: dashboard.totalProducts,
      uploads,
    };
  }

  /**
   * Revenue Chart
   */
  async getRevenue(userId) {
    const dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      throw new ApiError(404, "Dashboard not found.");
    }

    return dashboard.monthlyRevenue;
  }

  async getSalesCategory(userId) {
    const dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      throw new ApiError(404, "Dashboard not found.");
    }

    return dashboard.salesCategory;
  }

  async getExpenseBreakdown(userId) {
    const dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      throw new ApiError(404, "Dashboard not found.");
    }

    return dashboard.expenseBreakdown;
  }

  async getCustomerGrowth(userId) {
    const dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      throw new ApiError(404, "Dashboard not found.");
    }

    return dashboard.customerGrowth;
  }

  async getAIInsights(userId) {
    const dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      throw new ApiError(404, "Dashboard not found.");
    }

    return dashboard.aiInsights;
  }

  /**
   * Business Health
   */
  async getBusinessHealth(userId) {
    const dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      throw new ApiError(404, "Dashboard not found.");
    }

    return dashboard.businessHealth;
  }

  /**
   * Recent Activity
   */
  async getRecentActivity(userId) {
    const dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      throw new ApiError(404, "Dashboard not found.");
    }

    return dashboard.recentActivity;
  }
}

export default new DashboardService();
