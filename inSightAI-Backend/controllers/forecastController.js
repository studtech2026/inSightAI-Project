import forecastService from "../services/forecastService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

/**
 * @desc Create Forecast
 * @route POST /api/forecast
 * @access Private
 */
export const createForecast = asyncHandler(async (req, res) => {
  const data = await forecastService.createForecast(
    req.user._id,
    req.body
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.CREATED,
    "Forecast created successfully.",
    data
  );
});

/**
 * @desc Get Forecast History
 * @route GET /api/forecast
 * @access Private
 */
export const getForecasts = asyncHandler(async (req, res) => {
  const data = await forecastService.getForecasts(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Forecasts fetched successfully.",
    data
  );
});

/**
 * @desc Get Forecast By ID
 * @route GET /api/forecast/:id
 * @access Private
 */
export const getForecastById = asyncHandler(async (req, res) => {
  const data = await forecastService.getForecastById(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Forecast fetched successfully.",
    data
  );
});

/**
 * @desc Delete Forecast
 * @route DELETE /api/forecast/:id
 * @access Private
 */
export const deleteForecast = asyncHandler(async (req, res) => {
  await forecastService.deleteForecast(
    req.params.id,
    req.user._id
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Forecast deleted successfully."
  );
});