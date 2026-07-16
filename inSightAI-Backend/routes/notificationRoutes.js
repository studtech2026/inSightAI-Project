import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  createNotification,
  getNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  clearNotifications,
} from "../controllers/notificationController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Notification Routes
|--------------------------------------------------------------------------
*/

// Create Notification
router.post("/", protect, createNotification);

// Get All Notifications
router.get("/", protect, getNotifications);

// Get Unread Count
router.get("/unread-count", protect, getUnreadCount);

// Mark All Notifications as Read
router.put("/read-all", protect, markAllAsRead);

// Mark Single Notification as Read
router.put("/:id/read", protect, markAsRead);

// Delete Notification
router.delete("/:id", protect, deleteNotification);

router.delete("/", protect, clearNotifications);

export default router;
