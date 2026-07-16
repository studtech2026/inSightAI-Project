import { useEffect, useState } from "react";

import userService from "../services/userService";

import {
  showSuccess,
  showError,
} from "../utils/toast";

export default function useSettings() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] =
    useState(false);

  const loadProfile = async () => {
    try {
      const response =
        await userService.getProfile();

      setProfile(response.data);
    } catch {
      showError(
        "Failed to load profile."
      );
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const updateProfile = async () => {
    try {
      setLoading(true);

      const response =
        await userService.updateProfile(
          profile
        );

      showSuccess(response.message);

      await loadProfile();
    } catch {
      showError(
        "Failed to update profile."
      );
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (
    passwords
  ) => {
    try {
      if (
        passwords.newPassword !==
        passwords.confirmPassword
      ) {
        return showError(
          "Passwords do not match."
        );
      }

      const response =
        await userService.changePassword({
          currentPassword:
            passwords.currentPassword,
          newPassword:
            passwords.newPassword,
        });

      showSuccess(response.message);

      return true;
    } catch {
      showError(
        "Failed to change password."
      );

      return false;
    }
  };

  return {
    profile,
    setProfile,
    loading,
    updateProfile,
    changePassword,
  };
}