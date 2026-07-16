import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    totalRevenue: {
      type: Number,
      default: 0,
    },

    totalCustomers: {
      type: Number,
      default: 0,
    },

    totalOrders: {
      type: Number,
      default: 0,
    },

    totalProducts: {
      type: Number,
      default: 0,
    },

    monthlyRevenue: [
      {
        month: {
          type: String,
          required: true,
        },

        revenue: {
          type: Number,
          default: 0,
        },
      },
    ],

    salesCategory: [
      {
        category: String,
        sales: Number,
      },
    ],

    expenseBreakdown: [
      {
        name: String,
        value: Number,
      },
    ],

    customerGrowth: [
      {
        month: String,
        customers: Number,
      },
    ],

    aiInsights: [
      {
        title: String,
        description: String,
        type: {
          type: String,
          enum: ["success", "warning", "info"],
          default: "info",
        },
      },
    ],
    businessHealth: {
      score: {
        type: Number,
        default: 0,
      },

      status: {
        type: String,
        enum: ["Excellent", "Good", "Average", "Poor"],
        default: "Good",
      },

      growth: {
        type: Number,
        default: 0,
      },
    },

    recentActivity: [
      {
        title: {
          type: String,
        },

        description: {
          type: String,
        },

        type: {
          type: String,
          enum: ["upload", "report", "user", "notification", "ai"],
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

export default Dashboard;
