import searchService from "../services/searchService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

/**
 * @desc Global Search
 * @route GET /api/search
 * @access Private
 */
export const globalSearch = asyncHandler(async (req, res) => {
  const keyword = req.query.q || "";

  const data = await searchService.globalSearch(
    req.user._id,
    keyword
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Search completed successfully.",
    data
  );
});