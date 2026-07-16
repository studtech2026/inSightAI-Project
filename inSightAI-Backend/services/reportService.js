import Report from "../models/Report.js";
import ApiError from "../utils/ApiError.js";

import activityService from "./activityService.js";

class ReportService {
  /**
   * Create Report
   */
  async createReport(userId, reportData) {
    const report = await Report.create({
      userId,
      ...reportData,
    });

    await activityService.addActivity(userId, {
      title: "Report Generated",
      description: report.reportName,
      type: "report",
    });

    return report;
  }

  /**
   * Get All Reports
   */
  async getReports(userId) {
    return await Report.find({ userId }).sort({
      createdAt: -1,
    });
  }

  /**
   * Get Report By ID
   */
  async getReportById(reportId, userId) {
    const report = await Report.findOne({
      _id: reportId,
      userId,
    });

    if (!report) {
      throw new ApiError(404, "Report not found.");
    }

    return report;
  }

  /**
   * Update Report
   */
  async updateReport(reportId, userId, reportData) {
    const report = await Report.findOneAndUpdate(
      {
        _id: reportId,
        userId,
      },
      reportData,
      {
        new: true,
      },
    );

    if (!report) {
      throw new ApiError(404, "Report not found.");
    }

    await activityService.addActivity(userId, {
      title: "Report Updated",
      description: report.reportName,
      type: "report",
    });

    return report;
  }

  /**
   * Delete Report
   */
  async deleteReport(reportId, userId) {
    const report = await Report.findOneAndDelete({
      _id: reportId,
      userId,
    });

    if (!report) {
      throw new ApiError(404, "Report not found.");
    }

    await activityService.addActivity(userId, {
      title: "Report Deleted",
      description: report.reportName,
      type: "report",
    });

    return null;
  }
}

export default new ReportService();
