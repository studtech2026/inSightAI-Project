import SettingsCard from "./SettingsCard";

export default function NotificationSettings() {
  return (
    <SettingsCard
      title="Notifications"
      description="Manage notification preferences."
    >
      <label className="flex items-center gap-3 text-main">
        <input
          type="checkbox"
          defaultChecked
          className="accent-violet-600"
        />

        Email Notifications
      </label>
    </SettingsCard>
  );
}