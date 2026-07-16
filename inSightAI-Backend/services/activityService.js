import Dashboard from "../models/Dashboard.js";

class ActivityService {
  async addActivity(userId, activity) {
    let dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      dashboard = await Dashboard.create({ userId });
    }

    dashboard.recentActivity.unshift({
      title: activity.title,
      description: activity.description,
      type: activity.type,
    });

    dashboard.recentActivity =
      dashboard.recentActivity.slice(0, 10);

    await dashboard.save();
  }
}

export default new ActivityService();