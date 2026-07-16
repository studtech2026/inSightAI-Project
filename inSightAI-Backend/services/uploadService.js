import path from "path";

import Upload from "../models/Upload.js";
import ApiError from "../utils/ApiError.js";
import parseFile from "../utils/fileParser.js";

import activityService from "./activityService.js";

class UploadService {
  /**
   * Upload and Parse File
   */
  async uploadFile(userId, file) {
    if (!file) {
      throw new ApiError(400, "Please upload a file.");
    }

    const fs = await import("fs");
    const pathModule = await import("path");

    const parsedFile = await parseFile(file.path);

    const previewPath = file.path + ".preview.json";

    const statsPath = file.path + ".stats.json";

    fs.default.writeFileSync(
      previewPath,
      JSON.stringify(parsedFile.data.slice(0, 20), null, 2),
    );

    fs.default.writeFileSync(
      statsPath,
      JSON.stringify(
        {
          totalRows: parsedFile.totalRows,
          totalColumns: parsedFile.totalColumns,
        },
        null,
        2,
      ),
    );

    const upload = await Upload.create({
      userId,

      originalName: file.originalname,

      filename: file.filename,

      filePath: file.path,

      previewPath,

      statsPath,

      fileType: path.extname(file.originalname).replace(".", ""),

      fileSize: file.size,

      totalRows: parsedFile.totalRows,

      totalColumns: parsedFile.totalColumns,

      status: "completed",
    });

    await activityService.addActivity(userId, {
      title: "File Uploaded",
      description: file.originalname,
      type: "upload",
    });

    return {
      upload,

      preview: parsedFile.data.slice(0, 20),
    };
  }

  /**
   * Get Upload History
   */
  async getUploads(userId) {
    const uploads = await Upload.find({ userId }).sort({
      createdAt: -1,
    });

    return uploads;
  }

  /**
   * Get Upload By ID
   */
  /**
   * Get Upload By ID
   */
  async getUploadById(uploadId, userId) {
    const fs = await import("fs");

    const upload = await Upload.findOne({
      _id: uploadId,
      userId,
    });

    if (!upload) {
      throw new ApiError(404, "Upload not found.");
    }

    let preview = [];
    let statistics = {};

    if (upload.previewPath && fs.default.existsSync(upload.previewPath)) {
      preview = JSON.parse(fs.default.readFileSync(upload.previewPath, "utf8"));
    }

    if (upload.statsPath && fs.default.existsSync(upload.statsPath)) {
      statistics = JSON.parse(
        fs.default.readFileSync(upload.statsPath, "utf8"),
      );
    }

    return {
      upload,
      preview,
      statistics,
    };
  }

  /**
   * Delete Upload
   */
  async deleteUpload(uploadId, userId) {
    const upload = await Upload.findOne({
      _id: uploadId,
      userId,
    });

    if (!upload) {
      throw new ApiError(404, "Upload not found.");
    }

    await upload.deleteOne();

    await activityService.addActivity(userId, {
      title: "File Deleted",
      description: upload.originalName,
      type: "upload",
    });

    return null;
  }
}

export default new UploadService();
