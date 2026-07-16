import Inventory from "../models/Inventory.js";
import ApiError from "../utils/ApiError.js";
import notificationService from "./notificationService.js";

class InventoryService {
  getStatus(quantity) {
    if (quantity <= 0) return "Out of Stock";
    if (quantity <= 10) return "Low Stock";
    return "In Stock";
  }

  async createInventory(userId, data) {
    const inventory = await Inventory.create({
      ...data,
      userId,
      quantity: Number(data.quantity),
      status: this.getStatus(Number(data.quantity)),
    });

    await notificationService.createNotification(userId, {
      title: "Inventory Added",
      message: `${inventory.productName} inventory was added successfully.`,
      type: "success",
    });

    return inventory;
  }

  async getInventories(userId) {
    return await Inventory.find({ userId }).sort({
      createdAt: -1,
    });
  }

  async getInventoryById(id, userId) {
    const inventory = await Inventory.findOne({
      _id: id,
      userId,
    });

    if (!inventory) {
      throw new ApiError(404, "Inventory not found.");
    }

    return inventory;
  }

  async updateInventory(id, userId, data) {
    data.quantity = Number(data.quantity);
    data.status = this.getStatus(data.quantity);

    const inventory = await Inventory.findOneAndUpdate(
      {
        _id: id,
        userId,
      },
      data,
      {
        new: true,
      }
    );

    if (!inventory) {
      throw new ApiError(404, "Inventory not found.");
    }

    await notificationService.createNotification(userId, {
      title: "Inventory Updated",
      message: `${inventory.productName} inventory was updated.`,
      type: "info",
    });

    return inventory;
  }

  async deleteInventory(id, userId) {
    const inventory = await Inventory.findOneAndDelete({
      _id: id,
      userId,
    });

    if (!inventory) {
      throw new ApiError(404, "Inventory not found.");
    }

    await notificationService.createNotification(userId, {
      title: "Inventory Deleted",
      message: `${inventory.productName} inventory was deleted.`,
      type: "warning",
    });

    return null;
  }
}

export default new InventoryService();