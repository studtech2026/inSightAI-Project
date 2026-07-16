import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    originalName: {
      type: String,
      required: true,
      trim: true,
    },

    filename: {
      type: String,
      required: true,
      trim: true,
    },

    filePath: {
      type: String,
      required: true,
    },

    previewPath: {
      type: String,
      default: "",
    },

    statsPath: {
      type: String,
      default: "",
    },

    fileType: {
      type: String,
      enum: ["csv", "xlsx", "xls"],
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    totalRows: {
      type: Number,
      default: 0,
    },

    totalColumns: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "uploaded",
        "processing",
        "completed",
        "failed",
      ],
      default: "uploaded",
    },
  },
  {
    timestamps: true,
  }
);

const Upload = mongoose.model(
  "Upload",
  uploadSchema
);

export default Upload;