import inventoryService from "../services/inventoryService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

export const createInventory =
  asyncHandler(async (req, res) => {
    const data =
      await inventoryService.createInventory(
        req.user._id,
        req.body
      );

    return ApiResponse.success(
      res,
      HTTP_STATUS.CREATED,
      "Inventory created successfully.",
      data
    );
  });

export const getInventories =
  asyncHandler(async (req, res) => {
    const data =
      await inventoryService.getInventories(
        req.user._id
      );

    return ApiResponse.success(
      res,
      HTTP_STATUS.OK,
      "Inventory fetched successfully.",
      data
    );
  });

export const getInventoryById =
  asyncHandler(async (req, res) => {
    const data =
      await inventoryService.getInventoryById(
        req.params.id,
        req.user._id
      );

    return ApiResponse.success(
      res,
      HTTP_STATUS.OK,
      "Inventory fetched successfully.",
      data
    );
  });

export const updateInventory =
  asyncHandler(async (req, res) => {
    const data =
      await inventoryService.updateInventory(
        req.params.id,
        req.user._id,
        req.body
      );

    return ApiResponse.success(
      res,
      HTTP_STATUS.OK,
      "Inventory updated successfully.",
      data
    );
  });

export const deleteInventory =
  asyncHandler(async (req, res) => {
    await inventoryService.deleteInventory(
      req.params.id,
      req.user._id
    );

    return ApiResponse.success(
      res,
      HTTP_STATUS.OK,
      "Inventory deleted successfully."
    );
  });