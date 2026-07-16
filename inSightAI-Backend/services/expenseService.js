import Expense from "../models/Expense.js";
import ApiError from "../utils/ApiError.js";
import notificationService from "./notificationService.js";

class ExpenseService {
  async createExpense(userId, data) {
    const expense = await Expense.create({
      userId,
      ...data,
      amount: Number(data.amount),
    });

    await notificationService.createNotification(userId, {
      title: "Expense Added",
      message: `${expense.title} expense of ₹${expense.amount} was added.`,
      type: "success",
    });

    return expense;
  }

  async getExpenses(userId) {
    return await Expense.find({ userId }).sort({
      expenseDate: -1,
    });
  }

  async getExpenseById(id, userId) {
    const expense = await Expense.findOne({
      _id: id,
      userId,
    });

    if (!expense) {
      throw new ApiError(404, "Expense not found.");
    }

    return expense;
  }

  async updateExpense(id, userId, data) {
    data.amount = Number(data.amount);

    const expense = await Expense.findOneAndUpdate(
      {
        _id: id,
        userId,
      },
      data,
      {
        new: true,
      }
    );

    if (!expense) {
      throw new ApiError(404, "Expense not found.");
    }

    await notificationService.createNotification(userId, {
      title: "Expense Updated",
      message: `${expense.title} expense was updated.`,
      type: "info",
    });

    return expense;
  }

  async deleteExpense(id, userId) {
    const expense = await Expense.findOneAndDelete({
      _id: id,
      userId,
    });

    if (!expense) {
      throw new ApiError(404, "Expense not found.");
    }

    await notificationService.createNotification(userId, {
      title: "Expense Deleted",
      message: `${expense.title} expense was deleted.`,
      type: "warning",
    });

    return null;
  }
}

export default new ExpenseService();