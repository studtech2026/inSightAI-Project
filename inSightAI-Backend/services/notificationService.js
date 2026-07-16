import Notification from "../models/Notification.js";
import ApiError from "../utils/ApiError.js";

class NotificationService {
  /**
   * Create Notification
   */
  async createNotification(userId, notificationData) {
    const notification = await Notification.create({
      userId,
      ...notificationData,
    });

    return notification;
  }

  /**
   * Get Notifications
   */
  async getNotifications(userId) {
    return await Notification.find({ userId }).sort({
      createdAt: -1,
    });
  }

  /**
   * Get Unread Count
   */
  async getUnreadCount(userId) {
    const unreadCount = await Notification.countDocuments({
      userId,
      read: false,
    });

    return {
      unreadCount,
    };
  }

  /**
   * Mark Notification as Read
   */
  async markAsRead(notificationId, userId) {
    const notification = await Notification.findOneAndUpdate(
      {
        _id: notificationId,
        userId,
      },
      {
        read: true,
      },
      {
        new: true,
      },
    );

    if (!notification) {
      throw new ApiError(404, "Notification not found.");
    }

    return notification;
  }

  /**
   * Mark All Notifications as Read
   */
  async markAllAsRead(userId) {
    await Notification.updateMany(
      {
        userId,
        read: false,
      },
      {
        read: true,
      },
    );

    return null;
  }

  /**
   * Delete Notification
   */
  async deleteNotification(notificationId, userId) {
    const notification = await Notification.findOneAndDelete({
      _id: notificationId,
      userId,
    });

    if (!notification) {
      throw new ApiError(404, "Notification not found.");
    }

    return null;
  }

  async clearNotifications(userId) {
    await Notification.deleteMany({
      userId,
    });

    return null;
  }
}

export default new NotificationService();
