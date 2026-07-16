import mongoose from "mongoose";

const forecastSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    forecastType: {
      type: String,
      enum: [
        "sales",
        "revenue",
        "customers",
        "inventory",
      ],
      default: "sales",
    },

    currentValue: {
      type: Number,
      required: true,
    },

    predictedValue: {
      type: Number,
      required: true,
    },

    confidence: {
      type: Number,
      default: 90,
    },

    period: {
      type: String,
      default: "Next Month",
    },

    status: {
      type: String,
      enum: [
        "generated",
        "processing",
        "completed",
      ],
      default: "completed",
    },
  },
  {
    timestamps: true,
  }
);

const Forecast = mongoose.model("Forecast", forecastSchema);

export default Forecast;