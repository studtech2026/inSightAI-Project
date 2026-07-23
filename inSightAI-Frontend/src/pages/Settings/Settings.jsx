import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";

import ProfileCard from "../../components/settings/ProfileCard";
import ChangePasswordCard from "../../components/settings/ChangePasswordCard";
// import AboutCard from "../../components/settings/AboutCard";

import useSettings from "../../hooks/useSettings";

export default function Settings() {
  const {
    profile,
    setProfile,
    loading,
    updateProfile,
    changePassword,
  } = useSettings();

  if (loading && !profile.name && !profile.email) {
    return (
      <PageTransition>
        <PageHeader
          title="Settings"
          subtitle="Manage your account information and security."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div
            className="
              h-80
              animate-pulse
              rounded-2xl
              border
              border-app
              bg-card
            "
          />

          <div
            className="
              h-80
              animate-pulse
              rounded-2xl
              border
              border-app
              bg-card
            "
          />

          <div
            className="
              h-52
              animate-pulse
              rounded-2xl
              border
              border-app
              bg-card
              lg:col-span-2
            "
          />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <PageHeader
        title="Settings"
        subtitle="Manage your account information and security."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProfileCard
          profile={profile}
          setProfile={setProfile}
          loading={loading}
          onSave={updateProfile}
        />

        <ChangePasswordCard
          onSubmit={changePassword}
        />

        {/* <div className="lg:col-span-2">
          <AboutCard />
        </div> */}
      </div>
    </PageTransition>
  );
}