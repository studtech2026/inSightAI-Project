import SettingsCard from "./SettingsCard";
import { getCurrentUser } from "../../utils/auth";

export default function ProfileSettings() {
  const user = getCurrentUser();

  return (
    <SettingsCard
      title="Profile"
      description="Manage your profile information."
    >
      <div className="space-y-4">
        <div>
          <p className="text-sm text-secondary">
            Name
          </p>

          <p className="font-medium text-main">
            {user?.name}
          </p>
        </div>

        <div>
          <p className="text-sm text-secondary">
            Email
          </p>

          <p className="font-medium text-main">
            {user?.email}
          </p>
        </div>

        <div>
          <p className="text-sm text-secondary">
            Role
          </p>

          <p className="font-medium text-main">
            {user?.role}
          </p>
        </div>
      </div>
    </SettingsCard>
  );
}