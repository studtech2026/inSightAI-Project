import aiService from "../services/aiService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

/**
 * @desc AI Chat
 * @route POST /api/chat
 * @access Private
 */
  
export const chat = asyncHandler(async (req, res) => {
  const { question } = req.body;

  const data = await aiService.chat(req.user._id, question);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "AI response generated successfully.",
    data
  );
});

/**
 * @desc Get Chat History
 * @route GET /api/chat/history
 * @access Private
 */
export const getChatHistory = asyncHandler(async (req, res) => {
  const data = await aiService.getChatHistory(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Chat history fetched successfully.",
    data
  );
});

/**
 * @desc Clear Chat History
 * @route DELETE /api/chat/history
 * @access Private
 */
export const clearChatHistory = asyncHandler(async (req, res) => {
  await aiService.clearChatHistory(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Chat history cleared successfully."
  );
});