import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

import userService from "../services/userService.js";

export const getProfile = asyncHandler(
  async (req, res) => {
    const data =
      await userService.getProfile(
        req.user._id
      );

    return ApiResponse.success(
      res,
      HTTP_STATUS.OK,
      "Profile fetched successfully.",
      data
    );
  }
);

export const updateProfile =
  asyncHandler(async (req, res) => {
    const data =
      await userService.updateProfile(
        req.user._id,
        req.body
      );

    return ApiResponse.success(
      res,
      HTTP_STATUS.OK,
      "Profile updated successfully.",
      data
    );
  });

export const changePassword =
  asyncHandler(async (req, res) => {
    await userService.changePassword(
      req.user._id,
      req.body
    );

    return ApiResponse.success(
      res,
      HTTP_STATUS.OK,
      "Password updated successfully."
    );
  });