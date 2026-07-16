import exportService from "../services/exportService.js";
import reportService from "../services/reportService.js";
import asyncHandler from "../utils/asyncHandler.js";

/**
 * @desc Export Reports as CSV
 * @route GET /api/export/csv
 * @access Private
 */
export const exportCSV = asyncHandler(async (req, res) => {
  const reports = await reportService.getReports(req.user._id);

  const filePath = await exportService.exportCSV(
    reports.map((report) => report.toObject()),
    `reports-${Date.now()}`
  );

  return res.download(filePath);
});

/**
 * @desc Export Reports as Excel
 * @route GET /api/export/excel
 * @access Private
 */
export const exportExcel = asyncHandler(async (req, res) => {
  const reports = await reportService.getReports(req.user._id);

  const filePath = await exportService.exportExcel(
    reports.map((report) => report.toObject()),
    `reports-${Date.now()}`
  );

  return res.download(filePath);
});

/**
 * @desc Export Reports as PDF
 * @route GET /api/export/pdf
 * @access Private
 */
export const exportPDF = asyncHandler(async (req, res) => {
  const reports = await reportService.getReports(req.user._id);

  const filePath = await exportService.exportPDF(
    reports.map((report) => report.toObject()),
    `reports-${Date.now()}`
  );

  return res.download(filePath);
});