import SettingsCard from "./SettingsCard";
import PrimaryButton from "../common/PrimaryButton";

export default function SecuritySettings() {
  return (
    <SettingsCard
      title="Security"
      description="Manage your account security."
    >
      <PrimaryButton>
        Change Password
      </PrimaryButton>
    </SettingsCard>
  );
}