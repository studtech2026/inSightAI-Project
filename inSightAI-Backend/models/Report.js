import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reportName: {
      type: String,
      required: true,
      trim: true,
    },

    reportType: {
      type: String,
      enum: ["pdf", "csv", "xlsx"],
      required: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    filePath: {
      type: String,
      default: "",
    },

    generatedBy: {
      type: String,
      default: "InsightAI",
    },

    status: {
      type: String,
      enum: ["processing", "completed", "failed"],
      default: "completed",
    },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model("Report", reportSchema);

export default Report;