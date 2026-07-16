import dashboardService from "../services/dashboardService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

/**
 * @desc Dashboard Overview
 * @route GET /api/dashboard
 * @access Private
 */
export const getDashboard = asyncHandler(async (req, res) => {
  const data = await dashboardService.getDashboard(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Dashboard fetched successfully.",
    data,
  );
});

/**
 * @desc KPI Cards
 * @route GET /api/dashboard/kpis
 * @access Private
 */
export const getKPIs = asyncHandler(async (req, res) => {
  const data = await dashboardService.getKPIs(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "KPIs fetched successfully.",
    data,
  );
});

/**
 * @desc Revenue Chart
 * @route GET /api/dashboard/revenue
 * @access Private
 */
export const getRevenue = asyncHandler(async (req, res) => {
  const data = await dashboardService.getRevenue(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Revenue fetched successfully.",
    data,
  );
});

/**
 * @desc Sales Category
 * @route GET /api/dashboard/sales-category
 * @access Private
 */
export const getSalesCategory = asyncHandler(async (req, res) => {
  const data = await dashboardService.getSalesCategory(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Sales category fetched successfully.",
    data,
  );
});

/**
 * @desc Expense Breakdown
 * @route GET /api/dashboard/expense-breakdown
 * @access Private
 */
export const getExpenseBreakdown = asyncHandler(async (req, res) => {
  const data = await dashboardService.getExpenseBreakdown(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Expense breakdown fetched successfully.",
    data,
  );
});

/**
 * @desc Customer Growth
 * @route GET /api/dashboard/customer-growth
 * @access Private
 */
export const getCustomerGrowth = asyncHandler(async (req, res) => {
  const data = await dashboardService.getCustomerGrowth(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Customer growth fetched successfully.",
    data,
  );
});

/**
 * @desc AI Insights
 * @route GET /api/dashboard/ai-insights
 * @access Private
 */
export const getAIInsights = asyncHandler(async (req, res) => {
  const data = await dashboardService.getAIInsights(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "AI insights fetched successfully.",
    data,
  );
});

/**
 * @desc Business Health
 * @route GET /api/dashboard/business-health
 * @access Private
 */
export const getBusinessHealth = asyncHandler(async (req, res) => {
  const data = await dashboardService.getBusinessHealth(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Business health fetched successfully.",
    data,
  );
});

/**
 * @desc Recent Activity
 * @route GET /api/dashboard/recent-activity
 * @access Private
 */
export const getRecentActivity = asyncHandler(async (req, res) => {
  const data = await dashboardService.getRecentActivity(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Recent activity fetched successfully.",
    data,
  );
});
