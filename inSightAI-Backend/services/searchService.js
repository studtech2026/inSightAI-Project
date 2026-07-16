import Upload from "../models/Upload.js";
import Report from "../models/Report.js";
import Notification from "../models/Notification.js";

class SearchService {
  /**
   * Global Search
   */
  async globalSearch(userId, keyword) {
    const searchRegex = new RegExp(keyword, "i");

    const [uploads, reports, notifications] = await Promise.all([
      Upload.find({
        userId,
        $or: [
          { originalName: searchRegex },
          { filename: searchRegex },
          { fileType: searchRegex },
        ],
      }),

      Report.find({
        userId,
        $or: [
          { reportName: searchRegex },
          { description: searchRegex },
          { reportType: searchRegex },
        ],
      }),

      Notification.find({
        userId,
        $or: [
          { title: searchRegex },
          { message: searchRegex },
          { type: searchRegex },
        ],
      }),
    ]);

    return {
      uploads,
      reports,
      notifications,
    };
  }
}

export default new SearchService();