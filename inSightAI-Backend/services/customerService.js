import Customer from "../models/Customer.js";
import ApiError from "../utils/ApiError.js";
import notificationService from "./notificationService.js";

class CustomerService {
  async createCustomer(userId, data) {
    const customer = await Customer.create({
      userId,
      ...data,
    });

    await notificationService.createNotification(userId, {
      title: "Customer Added",
      message: `${customer.name} was added successfully.`,
      type: "success",
    });

    return customer;
  }

  async getCustomers(userId) {
    return await Customer.find({ userId }).sort({
      createdAt: -1,
    });
  }

  async getCustomerById(id, userId) {
    const customer = await Customer.findOne({
      _id: id,
      userId,
    });

    if (!customer) {
      throw new ApiError(404, "Customer not found.");
    }

    return customer;
  }

  async updateCustomer(id, userId, data) {
    const customer = await Customer.findOneAndUpdate(
      {
        _id: id,
        userId,
      },
      data,
      {
        new: true,
      }
    );

    if (!customer) {
      throw new ApiError(404, "Customer not found.");
    }

    await notificationService.createNotification(userId, {
      title: "Customer Updated",
      message: `${customer.name} was updated successfully.`,
      type: "info",
    });

    return customer;
  }

  async deleteCustomer(id, userId) {
    const customer = await Customer.findOneAndDelete({
      _id: id,
      userId,
    });

    if (!customer) {
      throw new ApiError(404, "Customer not found.");
    }

    await notificationService.createNotification(userId, {
      title: "Customer Deleted",
      message: `${customer.name} was deleted.`,
      type: "warning",
    });

    return null;
  }
}

export default new CustomerService();