import customerService from "../services/customerService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

export const createCustomer = asyncHandler(async (req, res) => {
  const data = await customerService.createCustomer(
    req.user._id,
    req.body
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.CREATED,
    "Customer created successfully.",
    data
  );
});

export const getCustomers = asyncHandler(async (req, res) => {
  const data = await customerService.getCustomers(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Customers fetched successfully.",
    data
  );
});

export const getCustomerById = asyncHandler(async (req, res) => {
  const data = await customerService.getCustomerById(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Customer fetched successfully.",
    data
  );
});

export const updateCustomer = asyncHandler(async (req, res) => {
  const data = await customerService.updateCustomer(
    req.params.id,
    req.user._id,
    req.body
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Customer updated successfully.",
    data
  );
});

export const deleteCustomer = asyncHandler(async (req, res) => {
  await customerService.deleteCustomer(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Customer deleted successfully."
  );
});