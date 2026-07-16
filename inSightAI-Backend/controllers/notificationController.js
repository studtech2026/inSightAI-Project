import notificationService from "../services/notificationService.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../utils/constants.js";

/**
 * @desc Create Notification
 * @route POST /api/notifications
 * @access Private
 */
export const createNotification = asyncHandler(async (req, res) => {
  const data = await notificationService.createNotification(
    req.user._id,
    req.body,
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.CREATED,
    "Notification created successfully.",
    data,
  );
});

/**
 * @desc Get Notifications
 * @route GET /api/notifications
 * @access Private
 */
export const getNotifications = asyncHandler(async (req, res) => {
  const data = await notificationService.getNotifications(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Notifications fetched successfully.",
    data,
  );
});

/**
 * @desc Get Unread Count
 * @route GET /api/notifications/unread-count
 * @access Private
 */
export const getUnreadCount = asyncHandler(async (req, res) => {
  const data = await notificationService.getUnreadCount(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Unread count fetched successfully.",
    data,
  );
});

/**
 * @desc Mark Notification as Read
 * @route PUT /api/notifications/:id/read
 * @access Private
 */
export const markAsRead = asyncHandler(async (req, res) => {
  const data = await notificationService.markAsRead(
    req.params.id,
    req.user._id,
  );

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Notification marked as read.",
    data,
  );
});

/**
 * @desc Mark All Notifications as Read
 * @route PUT /api/notifications/read-all
 * @access Private
 */
export const markAllAsRead = asyncHandler(async (req, res) => {
  await notificationService.markAllAsRead(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "All notifications marked as read.",
  );
});

/**
 * @desc Delete Notification
 * @route DELETE /api/notifications/:id
 * @access Private
 */
export const deleteNotification = asyncHandler(async (req, res) => {
  await notificationService.deleteNotification(req.params.id, req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Notification deleted successfully.",
  );
});

export const clearNotifications = asyncHandler(async (req, res) => {
  await notificationService.clearNotifications(req.user._id);

  return ApiResponse.success(
    res,
    HTTP_STATUS.OK,
    "Notifications cleared successfully.",
  );
});
