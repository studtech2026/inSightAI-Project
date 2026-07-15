import authService from "../services/authService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

/**
 * @desc Register User
 * @route POST /api/auth/register
 * @access Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const data = await authService.register(req.body);

  return ApiResponse.success(
    res,
    HTTP_STATUS.CREATED,
    "User registered successfully.",
    data
  );
});

/**
 * @desc Login User
 * @route POST /api/auth/login
 * @access Public
 */
export const loginUser = asyncHandler(async (req, res) => {
  const data = await authService.login(req.body);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Login successful.",
    data
  );
});

/**
 * @desc Get User Profile
 * @route GET /api/auth/profile
 * @access Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  const data = await authService.getProfile(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Profile fetched successfully.",
    data
  );
});

/**
 * @desc Update User Profile
 * @route PUT /api/auth/profile
 * @access Private
 */
export const updateUserProfile = asyncHandler(async (req, res) => {
  const data = await authService.updateProfile(req.user._id, req.body);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Profile updated successfully.",
    data
  );
});