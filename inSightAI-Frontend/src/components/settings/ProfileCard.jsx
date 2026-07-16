import Card from "../common/Card";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

export default function ProfileCard({
  profile,
  setProfile,
  loading,
  onSave,
}) {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-main">
        Profile
      </h2>

      <div className="space-y-5">
        <Input
          label="Full Name"
          value={profile.name}
          onChange={(e) =>
            setProfile({
              ...profile,
              name: e.target.value,
            })
          }
        />

        <Input
          label="Email Address"
          type="email"
          value={profile.email}
          onChange={(e) =>
            setProfile({
              ...profile,
              email: e.target.value,
            })
          }
        />

        <PrimaryButton
          onClick={onSave}
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : "Save Changes"}
        </PrimaryButton>
      </div>
    </Card>
  );
}