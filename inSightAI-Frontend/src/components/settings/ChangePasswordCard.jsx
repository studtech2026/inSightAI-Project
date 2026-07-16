import { useState } from "react";

import Card from "../common/Card";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

export default function ChangePasswordCard({
  onSubmit,
}) {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async () => {
    const success =
      await onSubmit(form);

    if (success) {
      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-main">
        Change Password
      </h2>

      <div className="space-y-5">
        <Input
          label="Current Password"
          type="password"
          name="currentPassword"
          value={form.currentPassword}
          onChange={handleChange}
        />

        <Input
          label="New Password"
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <PrimaryButton
          onClick={handleSubmit}
        >
          Update Password
        </PrimaryButton>
      </div>
    </Card>
  );
}