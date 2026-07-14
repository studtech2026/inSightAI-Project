import SettingsCard from "./SettingsCard";
import { appInfo } from "../../data/settingsData";

export default function AboutSettings() {
  return (
    <SettingsCard
      title="About"
      description="Application information."
    >
      <div className="space-y-3">
        <p className="text-main">
          Version: {appInfo.version}
        </p>

        <p className="text-main">
          Framework: {appInfo.framework}
        </p>

        <p className="text-main">
          Developer: {appInfo.developer}
        </p>
      </div>
    </SettingsCard>
  );
}