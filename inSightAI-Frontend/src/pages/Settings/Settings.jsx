import PageHeader from "../../components/common/PageHeader";

import ProfileSettings from "../../components/settings/ProfileSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";
import AppearanceSettings from "../../components/settings/AppearanceSettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import AboutSettings from "../../components/settings/AboutSettings";
import PageTransition from "../../components/common/PageTransition";

export default function Settings() {
  return (
    <PageTransition>

      <PageHeader
        title="Settings"
        subtitle="Manage your account, preferences, and application settings."
      />

      <div className="grid gap-6 lg:grid-cols-2">

        <ProfileSettings />

        <SecuritySettings />

        <AppearanceSettings />

        <NotificationSettings />

        <AboutSettings />

      </div>

   </PageTransition>
  );
}