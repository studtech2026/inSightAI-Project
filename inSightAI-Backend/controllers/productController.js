import productService from "../services/productService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

export const createProduct = asyncHandler(async (req, res) => {
  const data = await productService.createProduct(
    req.user._id,
    req.body
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.CREATED,
    "Product created successfully.",
    data
  );
});

export const getProducts = asyncHandler(async (req, res) => {
  const data = await productService.getProducts(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Products fetched successfully.",
    data
  );
});

export const getProductById = asyncHandler(async (req, res) => {
  const data = await productService.getProductById(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Product fetched successfully.",
    data
  );
});

export const updateProduct = asyncHandler(async (req, res) => {
  const data = await productService.updateProduct(
    req.params.id,
    req.user._id,
    req.body
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Product updated successfully.",
    data
  );
});

export const deleteProduct = asyncHandler(async (req, res) => {
  await productService.deleteProduct(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Product deleted successfully."
  );
});