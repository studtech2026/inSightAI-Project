import reportService from "../services/reportService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

/**
 * @desc Create Report
 * @route POST /api/reports
 * @access Private
 */
export const createReport = asyncHandler(async (req, res) => {
  const data = await reportService.createReport(req.user._id, req.body);

  return ApiResponse.success(
    res,
    HTTP_STATUS.CREATED,
    "Report created successfully.",
    data
  );
});

/**
 * @desc Get All Reports
 * @route GET /api/reports
 * @access Private
 */
export const getReports = asyncHandler(async (req, res) => {
  const data = await reportService.getReports(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Reports fetched successfully.",
    data
  );
});

/**
 * @desc Get Report By ID
 * @route GET /api/reports/:id
 * @access Private
 */
export const getReportById = asyncHandler(async (req, res) => {
  const data = await reportService.getReportById(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Report fetched successfully.",
    data
  );
});

/**
 * @desc Update Report
 * @route PUT /api/reports/:id
 * @access Private
 */
export const updateReport = asyncHandler(async (req, res) => {
  const data = await reportService.updateReport(
    req.params.id,
    req.user._id,
    req.body
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Report updated successfully.",
    data
  );
});

/**
 * @desc Delete Report
 * @route DELETE /api/reports/:id
 * @access Private
 */
export const deleteReport = asyncHandler(async (req, res) => {
  await reportService.deleteReport(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Report deleted successfully."
  );
});