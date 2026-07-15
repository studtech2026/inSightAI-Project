import uploadService from "../services/uploadService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

/**
 * @desc Upload CSV / Excel File
 * @route POST /api/uploads
 * @access Private
 */
export const uploadFile = asyncHandler(async (req, res) => {
  const data = await uploadService.uploadFile(req.user._id, req.file);

  return ApiResponse.success(
    res,
    HTTP_STATUS.CREATED,
    "File uploaded successfully.",
    data
  );
});

/**
 * @desc Get Upload History
 * @route GET /api/uploads
 * @access Private
 */
export const getUploads = asyncHandler(async (req, res) => {
  const data = await uploadService.getUploads(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Upload history fetched successfully.",
    data
  );
});

/**
 * @desc Get Upload By ID
 * @route GET /api/uploads/:id
 * @access Private
 */
export const getUploadById = asyncHandler(async (req, res) => {
  const data = await uploadService.getUploadById(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Upload fetched successfully.",
    data
  );
});

/**
 * @desc Delete Upload
 * @route DELETE /api/uploads/:id
 * @access Private
 */
export const deleteUpload = asyncHandler(async (req, res) => {
  await uploadService.deleteUpload(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Upload deleted successfully."
  );
});