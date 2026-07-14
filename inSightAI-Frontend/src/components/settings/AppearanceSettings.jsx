import SettingsCard from "./SettingsCard";
import ThemeToggle from "../common/ThemeToggle";

export default function AppearanceSettings() {
  return (
    <SettingsCard
      title="Appearance"
      description="Customize the application theme."
    >
      <div className="flex items-center justify-between">
        <p className="text-secondary">
          Switch between Light and Dark mode.
        </p>

        <ThemeToggle />
      </div>
    </SettingsCard>
  );
}