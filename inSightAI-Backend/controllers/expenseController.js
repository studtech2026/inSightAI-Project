import expenseService from "../services/expenseService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

export const createExpense = asyncHandler(async (req, res) => {
  const data = await expenseService.createExpense(
    req.user._id,
    req.body
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.CREATED,
    "Expense created successfully.",
    data
  );
});

export const getExpenses = asyncHandler(async (req, res) => {
  const data = await expenseService.getExpenses(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Expenses fetched successfully.",
    data
  );
});

export const getExpenseById = asyncHandler(async (req, res) => {
  const data = await expenseService.getExpenseById(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Expense fetched successfully.",
    data
  );
});

export const updateExpense = asyncHandler(async (req, res) => {
  const data = await expenseService.updateExpense(
    req.params.id,
    req.user._id,
    req.body
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Expense updated successfully.",
    data
  );
});

export const deleteExpense = asyncHandler(async (req, res) => {
  await expenseService.deleteExpense(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Expense deleted successfully."
  );
});