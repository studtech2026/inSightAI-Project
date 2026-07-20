// import Dashboard from "../models/Dashboard.js";
// import Upload from "../models/Upload.js";
// import Product from "../models/Product.js";
// import Customer from "../models/Customer.js";
// import Expense from "../models/Expense.js";
// import Notification from "../models/Notification.js";
// import ApiError from "../utils/ApiError.js";

// class DashboardService {
//   async getDashboard(userId) {
//     // Dashboard document (used for charts & business health)
//     let dashboard = await Dashboard.findOne({ userId });

//     if (!dashboard) {
//       dashboard = await Dashboard.create({
//         userId,
//         monthlyRevenue: [
//           { month: "Jan", revenue: 15000 },
//           { month: "Feb", revenue: 22000 },
//           { month: "Mar", revenue: 28000 },
//           { month: "Apr", revenue: 34000 },
//           { month: "May", revenue: 41000 },
//           { month: "Jun", revenue: 52000 },
//           { month: "Jul", revenue: 58000 },
//         ],
//         businessHealth: {
//           score: 92,
//           status: "Excellent",
//           growth: 18,
//         },
//       });
//     }

//     // -----------------------------
//     // Live KPI Data
//     // -----------------------------

//     const uploads = await Upload.countDocuments({ userId });

//     const totalProducts = await Product.countDocuments({
//       userId,
//     });

//     const totalCustomers = await Customer.countDocuments({
//       userId,
//     });

//     const totalOrders = await Customer.aggregate([
//       { $match: { userId } },
//       {
//         $group: {
//           _id: null,
//           total: {
//             $sum: "$totalOrders",
//           },
//         },
//       },
//     ]);

//     const totalRevenue = await Customer.aggregate([
//       { $match: { userId } },
//       {
//         $group: {
//           _id: null,
//           total: {
//             $sum: "$totalSpent",
//           },
//         },
//       },
//     ]);

//     const totalExpenses = await Expense.aggregate([
//       { $match: { userId } },
//       {
//         $group: {
//           _id: null,
//           total: {
//             $sum: "$amount",
//           },
//         },
//       },
//     ]);

//     // -----------------------------
//     // Low Stock
//     // -----------------------------

//     const lowStock = await Product.find({
//       userId,
//       stock: { $lte: 5 },
//     })
//       .sort({ stock: 1 })
//       .limit(5);

//     // -----------------------------
//     // Notifications
//     // -----------------------------

//     const notifications =
//       await Notification.find({
//         userId,
//       })
//         .sort({
//           createdAt: -1,
//         })
//         .limit(5);

//     // -----------------------------
//     // Smart AI Insight
//     // -----------------------------

//     const revenue =
//       totalRevenue[0]?.total || 0;

//     const expenses =
//       totalExpenses[0]?.total || 0;

//     const profit =
//       revenue - expenses;

//     const insights = [];

//     if (revenue > expenses) {
//       insights.push({
//         type: "success",
//         title: "Revenue is Healthy",
//         description:
//           "Revenue is currently higher than expenses.",
//       });
//     } else {
//       insights.push({
//         type: "warning",
//         title: "Expenses are High",
//         description:
//           "Expenses are close to or higher than revenue.",
//       });
//     }

//     if (lowStock.length > 0) {
//       insights.push({
//         type: "warning",
//         title: "Low Stock Alert",
//         description: `${lowStock.length} products need to be restocked.`,
//       });
//     }

//     if (totalCustomers > 50) {
//       insights.push({
//         type: "success",
//         title: "Customer Growth",
//         description:
//           "Your customer base is growing steadily.",
//       });
//     }

//     return {
//       kpis: {
//         revenue,
//         customers: totalCustomers,
//         orders:
//           totalOrders[0]?.total || 0,
//         products: totalProducts,
//         expenses,
//         profit,
//         uploads,
//       },

//       revenueChart:
//         dashboard.monthlyRevenue,

//       businessHealth:
//         dashboard.businessHealth,

//       recentActivity:
//         dashboard.recentActivity || [],

//       lowStock,

//       notifications,

//       smartInsight: insights,
//     };
//   }

//   async getKPIs(userId) {
//     const dashboard =
//       await this.getDashboard(userId);

//     return dashboard.kpis;
//   }

//   async getRevenue(userId) {
//     const dashboard =
//       await Dashboard.findOne({ userId });

//     if (!dashboard) {
//       throw new ApiError(
//         404,
//         "Dashboard not found."
//       );
//     }

//     return dashboard.monthlyRevenue;
//   }

//   async getBusinessHealth(userId) {
//     const dashboard =
//       await Dashboard.findOne({ userId });

//     if (!dashboard) {
//       throw new ApiError(
//         404,
//         "Dashboard not found."
//       );
//     }

//     return dashboard.businessHealth;
//   }

//   async getRecentActivity(userId) {
//     const dashboard =
//       await Dashboard.findOne({ userId });

//     if (!dashboard) {
//       throw new ApiError(
//         404,
//         "Dashboard not found."
//       );
//     }

//     return dashboard.recentActivity;
//   }
// }

// export default new DashboardService();



import Dashboard from "../models/Dashboard.js";
import Upload from "../models/Upload.js";
import Product from "../models/Product.js";
import Customer from "../models/Customer.js";
import Expense from "../models/Expense.js";
import Notification from "../models/Notification.js";
import ApiError from "../utils/ApiError.js";

class DashboardService {
  async getDashboard(userId) {
    let dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      dashboard = await Dashboard.create({
        userId,
        monthlyRevenue: [
          { month: "Jan", revenue: 15000 },
          { month: "Feb", revenue: 22000 },
          { month: "Mar", revenue: 28000 },
          { month: "Apr", revenue: 34000 },
          { month: "May", revenue: 41000 },
          { month: "Jun", revenue: 52000 },
          { month: "Jul", revenue: 58000 },
        ],
      });
    }

    // ==========================
    // Live KPI Data
    // ==========================

    const [
      uploads,
      totalProducts,
      totalCustomers,
      totalOrdersResult,
      totalRevenueResult,
      totalExpensesResult,
      lowStock,
      notifications,
    ] = await Promise.all([
      Upload.countDocuments({ userId }),

      Product.countDocuments({ userId }),

      Customer.countDocuments({ userId }),

      Customer.aggregate([
        { $match: { userId } },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$totalOrders",
            },
          },
        },
      ]),

      Customer.aggregate([
        { $match: { userId } },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$totalSpent",
            },
          },
        },
      ]),

      Expense.aggregate([
        { $match: { userId } },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$amount",
            },
          },
        },
      ]),

      Product.find({
        userId,
        stock: { $lte: 5 },
      })
        .sort({ stock: 1 })
        .limit(5),

      Notification.find({
        userId,
      })
        .sort({
          createdAt: -1,
        })
        .limit(5),
    ]);

    const revenue =
      totalRevenueResult[0]?.total || 0;

    const expenses =
      totalExpensesResult[0]?.total || 0;

    const orders =
      totalOrdersResult[0]?.total || 0;

    const profit = revenue - expenses;

    const profitMargin =
      revenue > 0
        ? Number(
            ((profit / revenue) * 100).toFixed(1)
          )
        : 0;

    // ==========================
    // Business Health
    // ==========================

    const score =
      revenue > expenses
        ? 90
        : revenue === expenses
        ? 75
        : 55;

    const growth =
      totalCustomers >= 50
        ? 18
        : totalCustomers >= 20
        ? 12
        : totalCustomers >= 5
        ? 6
        : 2;

    const businessHealth = {
      score,

      growth,

      status:
        score >= 90
          ? "Excellent"
          : score >= 75
          ? "Good"
          : score >= 60
          ? "Average"
          : "Poor",
    };

    // ==========================
    // AI Business Insight
    // ==========================

    const smartInsight = [];

    if (profit > 0) {
      smartInsight.push({
        type: "success",
        title: "Healthy Profit",
        description: `Estimated profit is ₹${profit.toLocaleString()}.`,
      });
    } else {
      smartInsight.push({
        type: "warning",
        title: "Low Profitability",
        description:
          "Expenses are reducing overall profitability.",
      });
    }

    if (lowStock.length) {
      smartInsight.push({
        type: "warning",
        title: "Inventory Alert",
        description: `${lowStock.length} products need restocking.`,
      });
    }

    if (expenses > revenue * 0.6 && revenue > 0) {
      smartInsight.push({
        type: "warning",
        title: "High Expenses",
        description:
          "Expenses exceed 60% of total revenue.",
      });
    }

    if (totalCustomers > 0) {
      smartInsight.push({
        type: "success",
        title: "Customer Base",
        description: `${totalCustomers} active customers recorded.`,
      });
    }

    if (uploads > 0) {
      smartInsight.push({
        type: "info",
        title: "Documents Uploaded",
        description: `${uploads} uploaded files available for analysis.`,
      });
    }

    // ==========================
    // Recent Activity
    // ==========================

    const recentActivity = notifications.map(
      (item) => ({
        title: item.title,
        description: item.message,
        type: item.type,
        createdAt: item.createdAt,
      })
    );

    return {
      kpis: {
        revenue,
        customers: totalCustomers,
        products: totalProducts,
        orders,
        expenses,
        profit,
        uploads,
      },

      analytics: {
        revenue,
        expenses,
        profit,
        profitMargin,
      },

      revenueChart:
        dashboard.monthlyRevenue,

      businessHealth,

      recentActivity,

      notifications,

      lowStock,

      smartInsight,
    };
  }
    /**
   * KPI Cards
   */
  async getKPIs(userId) {
    const dashboard = await this.getDashboard(userId);
    return dashboard.kpis;
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

  /**
   * Business Health
   */
  async getBusinessHealth(userId) {
    const dashboard = await this.getDashboard(userId);
    return dashboard.businessHealth;
  }

  /**
   * Recent Activity
   */
  async getRecentActivity(userId) {
    const dashboard = await this.getDashboard(userId);
    return dashboard.recentActivity;
  }

  /**
   * Dashboard Analytics
   */
  async getAnalytics(userId) {
    const dashboard = await this.getDashboard(userId);

    return dashboard.analytics;
  }

  /**
   * Latest Notifications
   */
  async getNotifications(userId) {
    const dashboard = await this.getDashboard(userId);

    return dashboard.notifications;
  }

  /**
   * Low Stock Products
   */
  async getLowStock(userId) {
    const dashboard = await this.getDashboard(userId);

    return dashboard.lowStock;
  }

  /**
   * AI Insights
   */
  async getAIInsights(userId) {
    const dashboard = await this.getDashboard(userId);

    return dashboard.smartInsight;
  }
}

export default new DashboardService();