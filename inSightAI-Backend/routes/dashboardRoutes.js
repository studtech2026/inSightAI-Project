import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  getDashboard,
  getKPIs,
  getRevenue,
  getBusinessHealth,
  getRecentActivity,
  getSalesCategory,
  getExpenseBreakdown,
  getCustomerGrowth,
  getAIInsights,
} from "../controllers/dashboardController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Dashboard Routes
|--------------------------------------------------------------------------
*/

// Dashboard Overview
router.get("/", protect, getDashboard);

// KPI Cards
router.get("/kpis", protect, getKPIs);

// Revenue Chart
router.get("/revenue", protect, getRevenue);

router.get("/sales-category", protect, getSalesCategory);

router.get("/expense-breakdown", protect, getExpenseBreakdown);

router.get("/customer-growth", protect, getCustomerGrowth);

router.get("/ai-insights", protect, getAIInsights);

// Business Health
router.get("/business-health", protect, getBusinessHealth);

// Recent Activity
router.get("/recent-activity", protect, getRecentActivity);

export default router;