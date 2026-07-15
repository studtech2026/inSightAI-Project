import path from "path";

import Upload from "../models/Upload.js";
import ApiError from "../utils/ApiError.js";
import parseFile from "../utils/fileParser.js";

class UploadService {
  /**
   * Upload and Parse File
   */
  async uploadFile(userId, file) {
    if (!file) {
      throw new ApiError(400, "Please upload a file.");
    }

    const parsedFile = await parseFile(file.path);

    const upload = await Upload.create({
      userId,

      originalName: file.originalname,

      filename: file.filename,

      filePath: file.path,

      fileType: path.extname(file.originalname).replace(".", ""),

      fileSize: file.size,

      totalRows: parsedFile.totalRows,

      totalColumns: parsedFile.totalColumns,

      status: "completed",
    });

    return {
      upload: {
        id: upload._id,
        originalName: upload.originalName,
        filename: upload.filename,
        fileType: upload.fileType,
        fileSize: upload.fileSize,
        totalRows: upload.totalRows,
        totalColumns: upload.totalColumns,
        status: upload.status,
        createdAt: upload.createdAt,
      },

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
  async getUploadById(uploadId, userId) {
    const upload = await Upload.findOne({
      _id: uploadId,
      userId,
    });

    if (!upload) {
      throw new ApiError(404, "Upload not found.");
    }

    return upload;
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

    return null;
  }
}

export default new UploadService();