import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    productName: {
      type: String,
      required: true,
      trim: true,
    },

    sku: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      default: 0,
    },

    location: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "In Stock",
        "Low Stock",
        "Out of Stock",
      ],
      default: "In Stock",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Inventory",
  inventorySchema
);